import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacyPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacyPolicy }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('revitta_cookie_consent');
    if (!consent) {
      // Default to Consent Mode v2 denial until explicit consent
      if (typeof window !== 'undefined') {
        const win = window as unknown as { gtag?: (...args: unknown[]) => void };
        win.gtag?.('consent', 'default', {
          ad_storage: 'denied',
          analytics_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
      }
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('revitta_cookie_consent', 'granted');
    if (typeof window !== 'undefined') {
      const win = window as unknown as { gtag?: (...args: unknown[]) => void };
      win.gtag?.('consent', 'update', {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
    }
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('revitta_cookie_consent', 'denied');
    if (typeof window !== 'undefined') {
      const win = window as unknown as { gtag?: (...args: unknown[]) => void };
      win.gtag?.('consent', 'update', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      id="cookie-consent-banner"
      role="region"
      aria-label="Aviso de Cookies e Privacidade"
      className="fixed bottom-4 left-4 z-40 max-w-[340px] sm:max-w-sm w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-md rounded-2xl border border-indigo-100 shadow-xl shadow-indigo-950/10 p-3.5 sm:p-4 text-xs text-gray-600 animate-in fade-in slide-in-from-bottom-3 duration-300"
    >
      <div className="flex items-start justify-between gap-2.5 mb-2">
        <div className="flex items-center gap-1.5 font-semibold text-indigo-950 text-xs">
          <ShieldCheck className="w-4 h-4 text-indigo-700 shrink-0" />
          <span>Privacidade & Cookies</span>
        </div>
        <button
          type="button"
          onClick={handleDecline}
          className="text-gray-400 hover:text-indigo-950 p-0.5 rounded-lg hover:bg-indigo-50 transition-colors"
          aria-label="Fechar aviso de cookies"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className="text-[11px] sm:text-xs leading-relaxed text-gray-600 mb-3">
        Utilizamos cookies essenciais e métricas anônimas (Consent Mode v2) para otimizar sua navegação e contatos via WhatsApp. Veja nossa{' '}
        <button
          type="button"
          onClick={onOpenPrivacyPolicy}
          className="text-indigo-700 font-semibold underline hover:text-indigo-900"
        >
          Política de Privacidade
        </button>.
      </p>

      <div className="flex items-center gap-2 justify-end">
        <button
          type="button"
          onClick={handleDecline}
          className="px-2.5 py-1.5 rounded-lg text-[11px] font-semibold text-gray-600 hover:text-indigo-950 hover:bg-indigo-50 transition-colors border border-gray-200"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={handleAcceptAll}
          className="px-3.5 py-1.5 rounded-lg text-[11px] font-bold text-white bg-indigo-700 hover:bg-indigo-900 shadow-xs transition-colors"
        >
          Aceitar
        </button>
      </div>
    </aside>
  );
};
