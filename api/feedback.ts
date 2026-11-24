import type { IncomingMessage, ServerResponse } from 'node:http';

interface FeedbackRequestBody {
  rating?: unknown;
  message?: unknown;
  website?: unknown;
}

interface ReqWithBody extends IncomingMessage {
  body?: unknown;
}

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRequests = new Map<string, number[]>();

const ALLOWED_EXACT_ORIGINS = new Set([
  'https://revittacaxias.com.br',
  'https://www.revittacaxias.com.br',
]);

function sendJson(
  res: ServerResponse,
  statusCode: number,
  payload: { ok: boolean; error?: string },
  extraHeaders?: Record<string, string>
) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  if (extraHeaders) {
    for (const [key, value] of Object.entries(extraHeaders)) {
      res.setHeader(key, value);
    }
  }
  res.end(JSON.stringify(payload));
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getHeaderValue(header: string | string[] | undefined): string {
  if (!header) return '';
  return Array.isArray(header) ? header[0] || '' : header;
}

function isAllowedOrigin(req: IncomingMessage): { allowed: boolean; corsOrigin?: string } {
  const originHeader = getHeaderValue(req.headers.origin).trim();
  const refererHeader = getHeaderValue(req.headers.referer).trim();
  const forwardedHost = getHeaderValue(req.headers['x-forwarded-host']).trim();
  const hostHeader = (forwardedHost || getHeaderValue(req.headers.host)).trim().toLowerCase();

  const validateOriginString = (candidate: string): { valid: boolean; origin?: string } => {
    try {
      const parsed = new URL(candidate);
      const originStr = `${parsed.protocol}//${parsed.host}`;
      if (ALLOWED_EXACT_ORIGINS.has(originStr)) {
        return { valid: true, origin: originStr };
      }
      if (hostHeader && parsed.host.toLowerCase() === hostHeader) {
        return { valid: true, origin: originStr };
      }
      if (
        parsed.hostname === 'localhost' ||
        parsed.hostname === '127.0.0.1'
      ) {
        return { valid: true, origin: originStr };
      }
      return { valid: false };
    } catch {
      return { valid: false };
    }
  };

  if (originHeader) {
    const check = validateOriginString(originHeader);
    return check.valid ? { allowed: true, corsOrigin: check.origin } : { allowed: false };
  }

  if (refererHeader) {
    const check = validateOriginString(refererHeader);
    return check.valid ? { allowed: true, corsOrigin: check.origin } : { allowed: false };
  }

  return { allowed: false };
}

function getClientIp(req: IncomingMessage): string {
  const xff = getHeaderValue(req.headers['x-forwarded-for']);
  if (xff) {
    const firstIp = xff.split(',')[0]?.trim();
    if (firstIp) return firstIp;
  }
  const realIp = getHeaderValue(req.headers['x-real-ip']).trim();
  if (realIp) return realIp;
  return req.socket?.remoteAddress || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  // Periodic cleanup to keep memory bounded
  if (ipRequests.size > 500) {
    for (const [key, timestamps] of ipRequests.entries()) {
      const recent = timestamps.filter((ts) => ts > windowStart);
      if (recent.length === 0) {
        ipRequests.delete(key);
      } else {
        ipRequests.set(key, recent);
      }
    }
  }

  const existing = ipRequests.get(ip) || [];
  const recent = existing.filter((ts) => ts > windowStart);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequests.set(ip, recent);
    return true;
  }

  recent.push(now);
  ipRequests.set(ip, recent);
  return false;
}

async function readJsonBody(req: ReqWithBody): Promise<FeedbackRequestBody | null> {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
    return req.body as FeedbackRequestBody;
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body) as FeedbackRequestBody;
    } catch {
      return null;
    }
  }

  const chunks: Buffer[] = [];
  let totalBytes = 0;
  const maxBytes = 16 * 1024;

  for await (const chunk of req) {
    const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    totalBytes += buf.length;
    if (totalBytes > maxBytes) {
      return null;
    }
    chunks.push(buf);
  }

  if (chunks.length === 0) return null;
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf-8')) as FeedbackRequestBody;
  } catch {
    return null;
  }
}

export default async function handler(req: ReqWithBody, res: ServerResponse) {
  if (req.method !== 'POST') {
    return sendJson(
      res,
      405,
      { ok: false, error: 'Método não permitido.' },
      { Allow: 'POST' }
    );
  }

  const originCheck = isAllowedOrigin(req);
  if (!originCheck.allowed) {
    return sendJson(res, 403, { ok: false, error: 'Origem não autorizada.' });
  }

  const corsHeaders: Record<string, string> = originCheck.corsOrigin
    ? {
        'Access-Control-Allow-Origin': originCheck.corsOrigin,
        Vary: 'Origin',
      }
    : {};

  const clientIp = getClientIp(req);
  if (isRateLimited(clientIp)) {
    return sendJson(
      res,
      429,
      { ok: false, error: 'Muitos envios recentes. Tente novamente mais tarde.' },
      corsHeaders
    );
  }

  const body = await readJsonBody(req);
  if (!body || typeof body !== 'object') {
    return sendJson(
      res,
      400,
      { ok: false, error: 'Requisição inválida.' },
      corsHeaders
    );
  }

  // Honeypot check: bots filling hidden field get a silent 200 without sending email
  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    return sendJson(res, 200, { ok: true }, corsHeaders);
  }
  if (body.website !== undefined && typeof body.website !== 'string') {
    return sendJson(res, 200, { ok: true }, corsHeaders);
  }

  const rating = body.rating;
  if (
    typeof rating !== 'number' ||
    !Number.isInteger(rating) ||
    rating < 1 ||
    rating > 3
  ) {
    return sendJson(
      res,
      400,
      { ok: false, error: 'Nota inválida. Informe um número inteiro de 1 a 3.' },
      corsHeaders
    );
  }

  if (typeof body.message !== 'string') {
    return sendJson(
      res,
      400,
      { ok: false, error: 'Mensagem inválida.' },
      corsHeaders
    );
  }

  const message = body.message.trim();
  if (message.length < 10 || message.length > 1000) {
    return sendJson(
      res,
      400,
      { ok: false, error: 'A mensagem deve conter entre 10 e 1.000 caracteres.' },
      corsHeaders
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.FEEDBACK_TO_EMAIL?.trim();
  const fromEmail =
    process.env.FEEDBACK_FROM_EMAIL?.trim() || 'Revitta Caxias <onboarding@resend.dev>';

  if (!resendApiKey || !toEmail) {
    return sendJson(
      res,
      503,
      { ok: false, error: 'Serviço de envio de e-mail não configurado.' },
      corsHeaders
    );
  }

  const formattedDateTime = new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    dateStyle: 'short',
    timeStyle: 'medium',
  }).format(new Date());

  const starLabel = rating === 1 ? 'estrela' : 'estrelas';
  const subject = `Nova avaliação interna (${rating} ${starLabel}) — Revitta Caxias`;

  const textBody = [
    'Nova avaliação interna recebida pela página /bio',
    '',
    `Nota escolhida: ${rating} de 5`,
    `Data e hora (Brasília): ${formattedDateTime}`,
    'Origem: página /bio',
    '',
    'Mensagem do cliente:',
    message,
  ].join('\n');

  const safeHtmlMessage = escapeHtml(message).replace(/\r?\n/g, '<br />');
  const htmlBody = `<!doctype html>
<html lang="pt-BR">
  <body style="font-family: Arial, sans-serif; color: #170F3D; line-height: 1.5; margin: 0; padding: 20px; background-color: #F4FAF9;">
    <div style="max-width: 560px; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #E9E6F6; border-radius: 12px; padding: 24px;">
      <h2 style="margin: 0 0 16px; color: #2A1B5E; font-size: 18px;">Nova avaliação interna — Revitta Caxias</h2>
      <p style="margin: 0 0 8px;"><strong>Nota escolhida:</strong> ${rating} de 5</p>
      <p style="margin: 0 0 8px;"><strong>Data e hora:</strong> ${escapeHtml(formattedDateTime)} (America/Sao_Paulo)</p>
      <p style="margin: 0 0 16px;"><strong>Origem:</strong> página /bio</p>
      <div style="background-color: #F4FAF9; border: 1px solid #E9E6F6; border-radius: 8px; padding: 14px;">
        <p style="margin: 0 0 6px; font-weight: bold; color: #2A1B5E;">Mensagem do cliente:</p>
        <p style="margin: 0; white-space: normal;">${safeHtmlMessage}</p>
      </div>
    </div>
  </body>
</html>`;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resendResponse.ok) {
      console.error(`[api/feedback] Email provider returned HTTP ${resendResponse.status}`);
      return sendJson(
        res,
        502,
        { ok: false, error: 'Não foi possível entregar o e-mail no momento.' },
        corsHeaders
      );
    }

    return sendJson(res, 200, { ok: true }, corsHeaders);
  } catch {
    console.error('[api/feedback] Network error while contacting email provider');
    return sendJson(
      res,
      502,
      { ok: false, error: 'Falha de comunicação ao enviar o e-mail.' },
      corsHeaders
    );
  }
}
