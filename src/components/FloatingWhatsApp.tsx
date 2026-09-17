import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { createWhatsAppUrl } from '../data/revittaData';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    // Show button after 600ms or on scroll as specified in PRD §8
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    const handleScroll = () => {
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { once: true, passive: true });

    // Show tooltip after 4s (if not dismissed)
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    // Dismiss tooltip on click
    setShowTooltip(false);
    setTooltipDismissed(true);

    // Trigger analytics event as specified in PRD §8
    try {
      if (typeof window !== 'undefined') {
        const win = window as unknown as { gtag?: (...args: unknown[]) => void };
        win.gtag?.('event', 'whatsapp_click', {
          source: 'floating',
          event_category: 'conversion'
        });
      }
    } catch {
      // safe fallback
    }
  };

  const handleDismissTooltip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setTooltipDismissed(true);
  };

  const waUrl = createWhatsAppUrl(
    "Olá! Vim pelo site da Revitta e gostaria de um orçamento sem compromisso."
  );

  return (
    <div
      className={`fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 flex items-center gap-3 transition-all duration-500 pointer-events-auto ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Tooltip popping after 4s as specified in PRD §8 */}
      {showTooltip && !tooltipDismissed && (
        <div 
          className="relative hidden sm:flex items-center gap-2 bg-indigo-950 text-white text-xs font-semibold py-2 px-3.5 rounded-xl shadow-xl border border-indigo-800 animate-in fade-in slide-in-from-right-3 duration-300 select-none max-w-xs"
          role="status"
        >
          <span>Orçamento grátis no WhatsApp</span>
          <button
            type="button"
            onClick={handleDismissTooltip}
            className="text-indigo-400 hover:text-white p-0.5 rounded-md focus:outline-none"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
          {/* Tooltip triangle indicator */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-indigo-950" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="wa-float"
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Pedir orçamento no WhatsApp"
        className="wa-pulse relative flex items-center justify-center w-[60px] h-[60px] sm:w-[64px] sm:h-[64px] rounded-full bg-wa-green hover:bg-[#20bd5a] text-white shadow-2xl shadow-wa-green/40 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-wa-green/30"
      >
        {/* Official WhatsApp Glyph specified in PRD §8 */}
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-hidden="true">
          <path
            fill="#fff"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
          />
        </svg>

        {/* Small live badge */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-wa-green" />
        </span>
      </a>
    </div>
  );
};
