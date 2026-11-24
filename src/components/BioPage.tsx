import React, { useState, useEffect, useRef, useCallback } from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/revittaData';

const GOOGLE_REVIEW_URL = 'https://g.page/r/CZLCbfRizdg3EBM/review';
const BIO_CANONICAL_URL = 'https://revittacaxias.com.br/bio';
const BIO_SEO_TITLE = 'Revitta Caxias — Links oficiais e avaliação';
const BIO_SEO_DESCRIPTION =
  'Fale com a Revitta no WhatsApp, acesse nosso site, redes sociais e avalie nosso atendimento. Reformas e manutenção em Caxias do Sul e Serra Gaúcha.';

type ModalStep = 'stars' | 'redirect-google' | 'feedback-form' | 'feedback-success' | 'feedback-error';

interface BioLinkItem {
  id: string;
  label: string;
  href: string;
  external: boolean;
  icon: React.ReactNode;
}

function trackBioEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window === 'undefined') return;
  try {
    const win = window as unknown as { gtag?: (...args: unknown[]) => void };
    win.gtag?.('event', eventName, params);
  } catch {
    // Ignore analytics errors gracefully
  }
}

function upsertMetaTag(selector: string, attrName: 'name' | 'property', attrValue: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

const BIO_LINKS: BioLinkItem[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp — Peça seu orçamento',
    href: createWhatsAppUrl(),
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#128C7E]" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .14 5.35.14 11.92c0 2.1.55 4.15 1.59 5.96L0 24l6.29-1.65a11.88 11.88 0 0 0 5.77 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.42ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.9-9.91 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    ),
  },
  {
    id: 'website',
    label: 'Nosso site',
    href: 'https://revittacaxias.com.br/',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2A1B5E]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: COMPANY_INFO.socials.instagram,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2A1B5E]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: COMPANY_INFO.socials.facebook,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2A1B5E]" fill="currentColor" aria-hidden="true">
        <path d="M13.5 22v-8.25h2.77l.41-3.22H13.5V8.48c0-.93.26-1.56 1.6-1.56h1.7V4.03A22.7 22.7 0 0 0 14.32 3.9c-2.45 0-4.13 1.5-4.13 4.24v2.39H7.4v3.22h2.79V22h3.31Z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: COMPANY_INFO.socials.linkedin,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2A1B5E]" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5A1.96 1.96 0 1 0 5.29 7.42a1.96 1.96 0 0 0-.04-3.92ZM20.44 13.02c0-3.14-1.68-4.6-3.92-4.6-1.8 0-2.61.99-3.06 1.69V8.5H10.1c.04.95 0 11 0 11h3.36v-6.14c0-.33.02-.66.12-.89.26-.66.86-1.34 1.86-1.34 1.31 0 1.84 1 1.84 2.47V19.5h3.36v-6.48Z" />
      </svg>
    ),
  },
  {
    id: 'google-profile',
    label: 'Perfil da Empresa no Google',
    href: COMPANY_INFO.socials.google,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2A1B5E]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export function BioPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState<ModalStep>('stars');
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const [focusedStar, setFocusedStar] = useState<number>(1);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmCloseOpen, setConfirmCloseOpen] = useState(false);

  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const starButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const redirectTimerRef = useRef<number | null>(null);

  // Sync SEO meta tags during SPA navigation to /bio
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.title = BIO_SEO_TITLE;
    upsertMetaTag('meta[name="description"]', 'name', 'description', BIO_SEO_DESCRIPTION);
    upsertMetaTag('meta[name="robots"]', 'name', 'robots', 'index,follow');
    upsertMetaTag('meta[property="og:title"]', 'property', 'og:title', BIO_SEO_TITLE);
    upsertMetaTag('meta[property="og:description"]', 'property', 'og:description', BIO_SEO_DESCRIPTION);
    upsertMetaTag('meta[property="og:url"]', 'property', 'og:url', BIO_CANONICAL_URL);
    upsertMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', BIO_SEO_TITLE);
    upsertMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', BIO_SEO_DESCRIPTION);

    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', BIO_CANONICAL_URL);
  }, []);

  const clearRedirectTimer = useCallback(() => {
    if (redirectTimerRef.current !== null) {
      window.clearTimeout(redirectTimerRef.current);
      redirectTimerRef.current = null;
    }
  }, []);

  const performFinalClose = useCallback(() => {
    clearRedirectTimer();
    setModalOpen(false);
    setConfirmCloseOpen(false);
    setStep('stars');
    setHoveredStar(0);
    setSelectedRating(null);
    setMessage('');
    setHoneypot('');
    setIsSubmitting(false);

    window.requestAnimationFrame(() => {
      triggerButtonRef.current?.focus();
    });
  }, [clearRedirectTimer]);

  const requestCloseModal = useCallback(() => {
    if (step === 'feedback-form' && message.trim().length > 0 && !confirmCloseOpen) {
      setConfirmCloseOpen(true);
      return;
    }
    performFinalClose();
  }, [step, message, confirmCloseOpen, performFinalClose]);

  const openModal = () => {
    clearRedirectTimer();
    setStep('stars');
    setHoveredStar(0);
    setFocusedStar(1);
    setSelectedRating(null);
    setConfirmCloseOpen(false);
    setModalOpen(true);
    trackBioEvent('bio_review_modal_open');
  };

  const requestCloseModalRef = useRef(requestCloseModal);
  useEffect(() => {
    requestCloseModalRef.current = requestCloseModal;
  }, [requestCloseModal]);

  // Body scroll lock + Escape key + Focus trap while modal is open
  useEffect(() => {
    if (!modalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        requestCloseModalRef.current();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusable = (
          Array.from(
            modalRef.current.querySelectorAll(
              'button:not([disabled]), a[href], textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
          ) as HTMLElement[]
        ).filter((el) => el.offsetParent !== null || el === document.activeElement);

        if (focusable.length === 0) return;

        const firstEl = focusable[0];
        const lastEl = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl || !modalRef.current.contains(document.activeElement)) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl || !modalRef.current.contains(document.activeElement)) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Move focus into the modal strictly on open
    window.requestAnimationFrame(() => {
      starButtonRefs.current[0]?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  // Focus textarea automatically when entering low-rating form step
  useEffect(() => {
    if (modalOpen && step === 'feedback-form') {
      window.requestAnimationFrame(() => {
        textareaRef.current?.focus();
      });
    }
  }, [modalOpen, step]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => clearRedirectTimer();
  }, [clearRedirectTimer]);

  const handleSelectRating = (rating: number) => {
    clearRedirectTimer();
    setSelectedRating(rating);
    setHoveredStar(rating);
    trackBioEvent('bio_rating_selected', { rating });

    if (rating >= 4) {
      setStep('redirect-google');
      redirectTimerRef.current = window.setTimeout(() => {
        window.location.href = GOOGLE_REVIEW_URL;
      }, 700);
    } else {
      setStep('feedback-form');
    }
  };

  const handleStarKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const current = index + 1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      const next = current >= 5 ? 1 : current + 1;
      setFocusedStar(next);
      setHoveredStar(next);
      starButtonRefs.current[next - 1]?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      const prev = current <= 1 ? 5 : current - 1;
      setFocusedStar(prev);
      setHoveredStar(prev);
      starButtonRefs.current[prev - 1]?.focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelectRating(current);
    }
  };

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || !selectedRating) return;

    const trimmed = message.trim();
    if (trimmed.length < 10 || trimmed.length > 1000) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating: selectedRating,
          message: trimmed,
          website: honeypot,
        }),
      });

      const data = (await response.json().catch(() => null)) as { ok?: boolean } | null;

      if (response.ok && data?.ok) {
        trackBioEvent('bio_feedback_sent', { rating: selectedRating });
        setStep('feedback-success');
      } else {
        setStep('feedback-error');
      }
    } catch {
      setStep('feedback-error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const trimmedLength = message.trim().length;
  const activeStars = hoveredStar || selectedRating || 0;

  const whatsappFallbackUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    `Olá! Avaliei a Revitta com ${selectedRating ?? 1} estrela(s) e gostaria de relatar: ${message.trim()}`
  )}`;

  const modalTitleText =
    step === 'stars'
      ? 'Como foi sua experiência com a Revitta?'
      : step === 'redirect-google'
      ? 'Que bom! Obrigado.'
      : step === 'feedback-form'
      ? 'Sentimos muito por isso.'
      : step === 'feedback-success'
      ? 'Recebemos sua mensagem.'
      : 'Não conseguimos enviar agora.';

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#170F3D] via-[#2A1B5E] to-[#1E1247] text-white flex flex-col justify-between px-4 py-10 sm:py-14">
      <main className="w-full max-w-[480px] mx-auto flex flex-col items-center">
        {/* Header compacto da página /bio */}
        <header className="flex flex-col items-center text-center mb-8">
          <div className="mb-4 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/20 bg-[#2A1B5E]">
            <img
              src="/img/logo-revitta-416.webp"
              alt="Revitta Construção & Reformas"
              width={88}
              height={88}
              className="w-[84px] h-[84px] sm:w-[92px] sm:h-[92px] object-cover block"
              loading="eager"
              decoding="async"
            />
          </div>
          <h1 className="font-serif text-2xl sm:text-[28px] font-bold text-white tracking-wide leading-tight text-balance">
            Revitta Construção &amp; Reformas
          </h1>
          <p className="mt-2.5 text-sm sm:text-[15px] text-indigo-100 leading-relaxed max-w-[38ch]">
            Reformas, Manutenção e Obras em Caxias do Sul e Serra Gaúcha
          </p>
        </header>

        {/* Lista principal de botões (largura máxima 480 px, altura >= 56 px) */}
        <nav aria-label="Links oficiais da Revitta Caxias" className="w-full flex flex-col gap-3.5">
          {/* 1. Botão em destaque: Avaliar a Empresa */}
          <button
            ref={triggerButtonRef}
            type="button"
            onClick={openModal}
            className="grid grid-cols-[24px_1fr_24px] items-center gap-3 w-full min-h-[58px] px-4 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 active:scale-[0.99] text-[#170F3D] font-extrabold text-[15px] sm:text-base shadow-lg shadow-black/25 transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-200 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#170F3D]" fill="currentColor" aria-hidden="true">
              <path d="M12 2.25l2.92 5.91 6.53.95-4.72 4.6 1.11 6.5L12 17.14l-5.84 3.07 1.11-6.5-4.72-4.6 6.53-.95L12 2.25Z" />
            </svg>
            <span className="text-center leading-snug">Avaliar a Empresa</span>
            <span aria-hidden="true" className="w-6" />
          </button>

          {/* 2 a 7. Botões externos/oficiais */}
          {BIO_LINKS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              onClick={() => trackBioEvent('bio_link_click', { link_id: item.id, label: item.label })}
              className="grid grid-cols-[24px_1fr_24px] items-center gap-3 w-full min-h-[56px] px-4 py-3.5 rounded-2xl bg-white hover:bg-[#F4FAF9] active:scale-[0.99] text-[#170F3D] font-bold text-[15px] sm:text-base shadow-md shadow-black/15 border border-white/20 transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
            >
              <span className="flex items-center justify-center">{item.icon}</span>
              <span className="text-center leading-snug">{item.label}</span>
              <span aria-hidden="true" className="w-6" />
            </a>
          ))}
        </nav>
      </main>

      {/* Rodapé mínimo */}
      <footer className="w-full max-w-[480px] mx-auto mt-10 pt-6 border-t border-white/15 text-center">
        <p className="text-xs text-indigo-100/90 leading-relaxed">
          © 2026 Revitta Construção e Reformas · CNPJ 50.463.095/0001-58 · Rua Pinheiro Machado, 1640, Centro, Caxias do Sul – RS.
        </p>
      </footer>

      {/* Modal acessível de pré-avaliação */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0821]/80 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              requestCloseModal();
            }
          }}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="bio-review-modal-title"
            className="relative w-full max-w-[440px] rounded-3xl bg-white text-[#170F3D] shadow-2xl border border-indigo-100 p-6 sm:p-7"
          >
            {/* Botão Fechar (X) >= 44x44px */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={requestCloseModal}
              aria-label="Fechar"
              className="absolute top-3.5 right-3.5 w-11 h-11 rounded-full flex items-center justify-center text-[#55516B] hover:text-[#170F3D] hover:bg-indigo-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1B5E] cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* Passo 1: Seleção das 5 estrelas */}
            {step === 'stars' && (
              <div className="pt-2 text-center">
                <h2 id="bio-review-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#170F3D] pr-8 pl-8 text-balance">
                  {modalTitleText}
                </h2>
                <p className="mt-2 text-sm text-[#55516B]">
                  Toque nas estrelas para avaliar.
                </p>

                <div
                  role="radiogroup"
                  aria-label="Avaliação de 1 a 5 estrelas"
                  className="mt-6 mb-2 flex items-center justify-center gap-1.5 sm:gap-2"
                  onMouseLeave={() => setHoveredStar(0)}
                >
                  {[1, 2, 3, 4, 5].map((star, index) => {
                    const filled = star <= activeStars;
                    const label = star === 1 ? '1 estrela' : `${star} estrelas`;
                    return (
                      <button
                        key={star}
                        ref={(el) => {
                          starButtonRefs.current[index] = el;
                        }}
                        type="button"
                        role="radio"
                        aria-checked={selectedRating === star}
                        aria-label={label}
                        tabIndex={focusedStar === star ? 0 : -1}
                        onMouseEnter={() => setHoveredStar(star)}
                        onFocus={() => setFocusedStar(star)}
                        onKeyDown={(e) => handleStarKeyDown(e, index)}
                        onClick={() => handleSelectRating(star)}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1B5E] cursor-pointer"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className={`w-9 h-9 sm:w-10 sm:h-10 transition-colors duration-150 ${
                            filled ? 'text-amber-500' : 'text-indigo-200'
                          }`}
                          fill={filled ? 'currentColor' : 'none'}
                          stroke="currentColor"
                          strokeWidth="1.7"
                          aria-hidden="true"
                        >
                          <path d="M12 2.25l2.92 5.91 6.53.95-4.72 4.6 1.11 6.5L12 17.14l-5.84 3.07 1.11-6.5-4.72-4.6 6.53-.95L12 2.25Z" />
                        </svg>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Passo 2A: Nota 4 ou 5 -> Redirecionamento para Google */}
            {step === 'redirect-google' && (
              <div className="pt-2 text-center">
                <div className="mx-auto mb-4 w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                    <path d="M12 2.25l2.92 5.91 6.53.95-4.72 4.6 1.11 6.5L12 17.14l-5.84 3.07 1.11-6.5-4.72-4.6 6.53-.95L12 2.25Z" />
                  </svg>
                </div>
                <h2 id="bio-review-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#170F3D]">
                  Que bom! Obrigado.
                </h2>
                <p className="mt-2.5 text-sm sm:text-[15px] text-[#55516B] leading-relaxed">
                  Estamos abrindo o Google para você deixar sua avaliação.
                </p>

                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full min-h-[48px] px-5 py-3 rounded-2xl bg-[#2A1B5E] hover:bg-[#1E1247] text-white font-bold text-sm sm:text-[15px] inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1B5E]"
                >
                  Abrir avaliação no Google
                </a>
              </div>
            )}

            {/* Passo 2B: Nota 1, 2 ou 3 -> Caixa de texto única (sem campos extras) */}
            {step === 'feedback-form' && (
              <form onSubmit={handleSubmitFeedback} className="pt-1">
                <h2 id="bio-review-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#170F3D] pr-10">
                  Sentimos muito por isso.
                </h2>
                <p className="mt-2 text-sm text-[#55516B] leading-relaxed">
                  Conte o que aconteceu para que nossa equipe possa resolver.
                </p>

                {/* Campo honeypot invisível para proteção anti-spam */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="bio-website-field">Website</label>
                  <input
                    id="bio-website-field"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="bio-feedback-textarea" className="sr-only">
                    Relato sobre sua experiência
                  </label>
                  <textarea
                    ref={textareaRef}
                    id="bio-feedback-textarea"
                    rows={5}
                    minLength={10}
                    maxLength={1000}
                    required
                    disabled={isSubmitting}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escreva aqui o que aconteceu..."
                    className="w-full rounded-2xl border border-indigo-200 bg-[#F4FAF9]/60 px-4 py-3 text-sm sm:text-[15px] text-[#170F3D] placeholder:text-[#55516B]/70 focus:outline-none focus:ring-2 focus:ring-[#2A1B5E] focus:border-[#2A1B5E] resize-y"
                  />
                  <div className="mt-1.5 flex items-center justify-between text-xs text-[#55516B] tabular-nums">
                    <span>
                      {trimmedLength > 0 && trimmedLength < 10
                        ? 'Mínimo de 10 caracteres'
                        : 'Mínimo 10 caracteres'}
                    </span>
                    <span>{message.length}/1000</span>
                  </div>
                </div>

                {confirmCloseOpen && (
                  <div
                    role="alert"
                    className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-3.5 text-sm text-[#170F3D]"
                  >
                    <p className="font-semibold">Deseja descartar o texto digitado e fechar?</p>
                    <div className="mt-2.5 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setConfirmCloseOpen(false)}
                        className="min-h-[40px] px-3.5 py-2 rounded-xl bg-white border border-indigo-200 text-xs font-bold text-[#170F3D] hover:bg-indigo-50 cursor-pointer"
                      >
                        Continuar escrevendo
                      </button>
                      <button
                        type="button"
                        onClick={performFinalClose}
                        className="min-h-[40px] px-3.5 py-2 rounded-xl bg-[#170F3D] text-xs font-bold text-white hover:bg-[#2A1B5E] cursor-pointer"
                      >
                        Descartar e fechar
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-5 flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-2.5">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => {
                      setConfirmCloseOpen(false);
                      setStep('stars');
                    }}
                    className="min-h-[48px] px-5 py-3 rounded-2xl border border-indigo-200 bg-white hover:bg-indigo-50 text-[#170F3D] font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1B5E] cursor-pointer disabled:opacity-50"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    disabled={trimmedLength < 10 || trimmedLength > 1000 || isSubmitting}
                    className="flex-1 min-h-[48px] px-5 py-3 rounded-2xl bg-[#2A1B5E] hover:bg-[#1E1247] text-white font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1B5E] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden="true" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <span>Enviar</span>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Passo 3A: Sucesso no envio */}
            {step === 'feedback-success' && (
              <div className="pt-2 text-center">
                <div className="mx-auto mb-4 w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h2 id="bio-review-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#170F3D]">
                  Recebemos sua mensagem.
                </h2>
                <p className="mt-2.5 text-sm sm:text-[15px] text-[#55516B] leading-relaxed">
                  Obrigado por nos avisar, vamos analisar com atenção.
                </p>

                <div className="mt-6 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={performFinalClose}
                    className="w-full min-h-[48px] px-5 py-3 rounded-2xl bg-[#2A1B5E] hover:bg-[#1E1247] text-white font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1B5E] cursor-pointer"
                  >
                    Fechar
                  </button>
                  <a
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] px-5 py-3 rounded-2xl border border-indigo-200 bg-white hover:bg-[#F4FAF9] text-[#170F3D] font-bold text-sm inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1B5E]"
                  >
                    Falar com a equipe no WhatsApp
                  </a>
                </div>
              </div>
            )}

            {/* Passo 3B: Erro no envio -> Mantém texto e oferece Plano B via WhatsApp */}
            {step === 'feedback-error' && (
              <div className="pt-2 text-center">
                <h2 id="bio-review-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#170F3D] pr-6 pl-6">
                  Não conseguimos enviar agora.
                </h2>
                <p className="mt-2.5 text-sm text-[#55516B] leading-relaxed">
                  Sua mensagem foi preservada. Você pode encaminhá-la diretamente pelo nosso WhatsApp ou voltar para tentar novamente.
                </p>

                <div className="mt-6 flex flex-col gap-2.5">
                  <a
                    href={whatsappFallbackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] px-5 py-3 rounded-2xl bg-[#128C7E] hover:bg-[#0E7468] text-white font-bold text-sm inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C7E]"
                  >
                    Enviar pelo WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => setStep('feedback-form')}
                    className="w-full min-h-[48px] px-5 py-3 rounded-2xl border border-indigo-200 bg-white hover:bg-indigo-50 text-[#170F3D] font-bold text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A1B5E] cursor-pointer"
                  >
                    Voltar à mensagem
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
