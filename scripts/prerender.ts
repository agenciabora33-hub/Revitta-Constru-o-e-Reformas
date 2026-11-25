import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { ServicePage } from '../src/components/ServicePage';
import { TrabalheConosco } from '../src/components/TrabalheConosco';
import { NotFoundPage } from '../src/components/NotFoundPage';
import { BioPage } from '../src/components/BioPage';
import { DETAILED_SERVICES } from '../src/data/servicesDetailedData';
import { COMPANY_INFO } from '../src/data/revittaData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

interface RouteConfig {
  path: string;
  outputFile: string;
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
  serviceData?: (typeof DETAILED_SERVICES)[number];
}

const TRABALHE_FAQS = [
  {
    q: 'Preciso ter CNPJ ou MEI ativo para prestar serviços?',
    a: 'Preferencialmente sim. A grande maioria de nossos parceiros atua como MEI (Microempreendedor Individual), o que agiliza as notas fiscais e os pagamentos diretos. Caso ainda não tenha MEI, você pode se cadastrar como autônomo enquanto orientamos os passos para regularização.',
  },
  {
    q: 'Como e quando são realizados os pagamentos?',
    a: 'Os pagamentos são efetuados pontualmente via PIX ou transferência bancária, conforme cronograma de medição pré-estabelecido em contrato para cada etapa concluída e aprovada pela nossa fiscalização técnica.',
  },
  {
    q: 'Quem é responsável pela compra e entrega dos materiais?',
    a: 'A Revitta cuida de 100% da compra, especificação e entrega dos materiais no canteiro da obra. Você e sua equipe não precisam se preocupar com logística pesada ou faturamento de insumos: você foca exclusivamente na excelência da mão de obra técnica.',
  },
  {
    q: 'Como funciona o processo de seleção após o envio do formulário?',
    a: 'Nossa coordenação técnica avalia seu perfil em até 2 dias úteis. Entraremos em contato via WhatsApp ou telefone para alinhar detalhes de experiências anteriores, apresentação de obras e agendamento de uma reunião técnica no nosso escritório em Caxias do Sul.',
  },
  {
    q: 'Posso continuar atendendo meus próprios clientes particulares?',
    a: 'Sim, com total liberdade! Trabalhamos com profissionais parceiros em regime de prestação de serviços por empreitada e projetos contratados, respeitando sua agenda e sua autonomia profissional.',
  },
];

async function runPrerender() {
  console.log('[SSG Prerender] Starting static HTML generation...');

  if (!fs.existsSync(templatePath)) {
    console.error(`[SSG Prerender] Error: Template file not found at ${templatePath}`);
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

  const routes: RouteConfig[] = [
    {
      path: '/',
      outputFile: path.resolve(distDir, 'index.html'),
      title: 'Revitta Caxias – Reformas, Manutenção e Obras em Caxias do Sul',
      description:
        'Reformas residenciais e comerciais, manutenção predial, elétrica, hidráulica e pedreiro em Caxias do Sul e Serra Gaúcha. Orçamento rápido pelo WhatsApp.',
      canonical: 'https://revittacaxias.com.br/',
    },
    {
      path: '/trabalhe-conosco/',
      outputFile: path.resolve(distDir, 'trabalhe-conosco', 'index.html'),
      title: 'Trabalhe Conosco | Seja Prestador Parceiro | Revitta Caxias',
      description:
        'Cadastre-se na rede de especialistas da Revitta Caxias. Obras contínuas, materiais no canteiro e pagamento pontual por etapa para eletricistas, pedreiros e encanadores.',
      canonical: 'https://revittacaxias.com.br/trabalhe-conosco/',
    },
    {
      path: '/bio',
      outputFile: path.resolve(distDir, 'bio', 'index.html'),
      title: 'Revitta Caxias — Links oficiais e avaliação',
      description:
        'Fale com a Revitta no WhatsApp, acesse nosso site, redes sociais e avalie nosso atendimento. Reformas e manutenção em Caxias do Sul e Serra Gaúcha.',
      canonical: 'https://revittacaxias.com.br/bio',
    },
    {
      path: '/404.html',
      outputFile: path.resolve(distDir, '404.html'),
      title: 'Página não encontrada (404) | Revitta Caxias',
      description:
        'A página que você procura não foi encontrada. Conheça nossos serviços de reformas, manutenção e construção em Caxias do Sul.',
      canonical: 'https://revittacaxias.com.br/404.html',
      noindex: true,
    },
  ];

  for (const srv of DETAILED_SERVICES) {
    routes.push({
      path: `/${srv.slug}/`,
      outputFile: path.resolve(distDir, srv.slug, 'index.html'),
      title: srv.seoTitle,
      description: srv.seoDescription,
      canonical: srv.canonicalUrl,
      serviceData: srv,
    });
  }

  console.log(`[SSG Prerender] Processing ${routes.length} routes...`);

  const homeJsonLdRegex =
    /<!-- Schema\.org Structured Data \(JSON-LD\) -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/i;
  const heroPosterPreloadsRegex =
    /<!-- High-priority Preload for Local Hero LCP Poster Image \(Responsive Mobile \/ Desktop\) -->[\s\S]*?<link[^>]+hero-poster-desktop\.webp[^>]*\/>/i;

  for (const route of routes) {
    try {
      const rawAppHtml = renderToString(
        React.createElement(App, {
          ssrPath: route.path,
          ssrComponents: { ServicePage, TrabalheConosco, NotFoundPage, BioPage },
        })
      );
      const appHtml = rawAppHtml.replace(/<link\b[^>]*\/>/gi, '');

      let html = baseTemplate;

      // 1. Inject root markup
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // 2. Replace Title
      html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);

      // 3. Replace Meta Description
      html = html.replace(
        /<meta name="description" content=".*?" \/>/i,
        `<meta name="description" content="${escapeHtml(route.description)}" />`
      );

      // 4. Replace Canonical Link
      html = html.replace(
        /<link rel="canonical" href=".*?" \/>/i,
        `<link rel="canonical" href="${route.canonical}" />`
      );

      // 5. Replace Open Graph tags
      html = html.replace(
        /<meta property="og:title" content=".*?" \/>/i,
        `<meta property="og:title" content="${escapeHtml(route.title)}" />`
      );
      html = html.replace(
        /<meta property="og:description" content=".*?" \/>/i,
        `<meta property="og:description" content="${escapeHtml(route.description)}" />`
      );
      html = html.replace(
        /<meta property="og:url" content=".*?" \/>/i,
        `<meta property="og:url" content="${route.canonical}" />`
      );

      // 6. Replace Twitter tags
      html = html.replace(
        /<meta name="twitter:title" content=".*?" \/>/i,
        `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
      );
      html = html.replace(
        /<meta name="twitter:description" content=".*?" \/>/i,
        `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
      );

      // 7. Strip Hero poster preloads on non-Home routes so crawlers/browsers don't waste preload bandwidth
      if (route.path !== '/') {
        html = html.replace(heroPosterPreloadsRegex, '');
      }

      // 8. Robots (noindex,nofollow or noindex,follow for 404)
      if (route.noindex) {
        html = html.replace(
          /<meta name="robots" content=".*?" \/>/i,
          '<meta name="robots" content="noindex,follow" />'
        );
        html = html.replace(homeJsonLdRegex, '');
      }

      // 9. Replace Home JSON-LD cleanly with route-specific Schema.org (avoids duplicate FAQPage conflicts)
      if (route.serviceData) {
        const s = route.serviceData;
        const serviceSchema = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': `${s.canonicalUrl}#webpage`,
              url: s.canonicalUrl,
              name: s.seoTitle,
              description: s.seoDescription,
              inLanguage: 'pt-BR',
              isPartOf: {
                '@type': 'WebSite',
                url: COMPANY_INFO.website,
                name: COMPANY_INFO.brand,
              },
              mainEntity: { '@id': `${s.canonicalUrl}#service` },
            },
            {
              '@type': 'Service',
              '@id': `${s.canonicalUrl}#service`,
              name: s.title,
              serviceType: s.categoryLabel,
              description: s.geoDirectAnswer,
              url: s.canonicalUrl,
              provider: {
                '@type': 'GeneralContractor',
                '@id': `${COMPANY_INFO.website}#empresa`,
                name: COMPANY_INFO.brand,
                url: COMPANY_INFO.website,
                telephone: `+${COMPANY_INFO.phoneRaw}`,
                email: COMPANY_INFO.email,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: COMPANY_INFO.address,
                  addressLocality: COMPANY_INFO.city,
                  addressRegion: COMPANY_INFO.state,
                  postalCode: COMPANY_INFO.cep,
                  addressCountry: 'BR',
                },
                taxID: COMPANY_INFO.cnpj,
              },
              areaServed: [
                { '@type': 'City', name: 'Caxias do Sul' },
                { '@type': 'City', name: 'Farroupilha' },
                { '@type': 'City', name: 'Flores da Cunha' },
                { '@type': 'City', name: 'São Marcos' },
                { '@type': 'AdministrativeArea', name: 'Serra Gaúcha' },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: `Escopo de ${s.title}`,
                itemListElement: s.scopeIncluded.map((item) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: item,
                  },
                })),
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Início',
                  item: 'https://revittacaxias.com.br/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Serviços',
                  item: 'https://revittacaxias.com.br/#servicos',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: s.title,
                  item: s.canonicalUrl,
                },
              ],
            },
            {
              '@type': 'FAQPage',
              '@id': `${s.canonicalUrl}#faq`,
              mainEntity: s.serviceFaqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.answer,
                },
              })),
            },
          ],
        };

        const jsonLdTag = `<!-- Schema.org Structured Data (JSON-LD) -->\n    <script id="prerender-structured-data" type="application/ld+json">\n${JSON.stringify(serviceSchema, null, 2)}\n    </script>`;
        html = html.replace(homeJsonLdRegex, jsonLdTag);
      } else if (route.path === '/trabalhe-conosco/') {
        const trabalheSchema = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': 'https://revittacaxias.com.br/trabalhe-conosco/#webpage',
              url: 'https://revittacaxias.com.br/trabalhe-conosco/',
              name: route.title,
              description: route.description,
              inLanguage: 'pt-BR',
              isPartOf: {
                '@type': 'WebSite',
                url: COMPANY_INFO.website,
                name: COMPANY_INFO.brand,
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Início',
                  item: 'https://revittacaxias.com.br/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Trabalhe Conosco',
                  item: 'https://revittacaxias.com.br/trabalhe-conosco/',
                },
              ],
            },
            {
              '@type': 'FAQPage',
              '@id': 'https://revittacaxias.com.br/trabalhe-conosco/#faq',
              mainEntity: TRABALHE_FAQS.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.a,
                },
              })),
            },
          ],
        };
        const jsonLdTag = `<!-- Schema.org Structured Data (JSON-LD) -->\n    <script id="prerender-structured-data" type="application/ld+json">\n${JSON.stringify(trabalheSchema, null, 2)}\n    </script>`;
        html = html.replace(homeJsonLdRegex, jsonLdTag);
      } else if (route.path === '/bio') {
        html = html.replace(
          /<meta name="robots" content=".*?" \/>/i,
          '<meta name="robots" content="index,follow" />'
        );
        const bioSchema = {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': 'https://revittacaxias.com.br/bio#webpage',
          url: 'https://revittacaxias.com.br/bio',
          name: route.title,
          description: route.description,
          inLanguage: 'pt-BR',
          isPartOf: {
            '@type': 'WebSite',
            url: COMPANY_INFO.website,
            name: COMPANY_INFO.brand,
          },
        };
        const jsonLdTag = `<!-- Schema.org Structured Data (JSON-LD) -->\n    <script id="prerender-structured-data" type="application/ld+json">\n${JSON.stringify(bioSchema, null, 2)}\n    </script>`;
        html = html.replace(homeJsonLdRegex, jsonLdTag);
      }

      const targetDir = path.dirname(route.outputFile);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      fs.writeFileSync(route.outputFile, html, 'utf-8');
      console.log(
        `[SSG Prerender] ✓ Rendered: ${route.path} -> ${path.relative(rootDir, route.outputFile)} (${appHtml.length} chars)`
      );
    } catch (err) {
      console.error(`[SSG Prerender] ✗ Error rendering route ${route.path}:`, err);
      process.exit(1);
    }
  }

  generateSitemap(routes.filter((r) => !r.noindex));

  console.log('[SSG Prerender] All routes successfully generated with 100% static HTML!');
}

function generateSitemap(canonicalRoutes: RouteConfig[]) {
  const today = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const route of canonicalRoutes) {
    const isHome = route.path === '/';
    const isTrabalhe = route.path === '/trabalhe-conosco/';
    const isBio = route.path === '/bio';
    const priority = isHome ? '1.0' : isTrabalhe ? '0.8' : isBio ? '0.7' : '0.9';
    const changefreq = isHome ? 'weekly' : 'monthly';

    xml += `  <url>\n`;
    xml += `    <loc>${route.canonical}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), xml, 'utf-8');
  fs.writeFileSync(path.resolve(rootDir, 'public', 'sitemap.xml'), xml, 'utf-8');
  console.log(`[SSG Prerender] ✓ sitemap.xml generated with ${canonicalRoutes.length} canonical URLs (${today}).`);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

runPrerender();
