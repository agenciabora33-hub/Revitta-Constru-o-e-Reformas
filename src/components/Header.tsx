import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Clock } from 'lucide-react';
import { RevittaLogo } from './RevittaLogo';
import { SocialLinksRow } from './SocialLogos';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/revittaData';

interface HeaderProps {
  onNavigateHome?: () => void;
  onNavigateTrabalheConosco?: () => void;
  isServicePage?: boolean;
  isTrabalheConosco?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  onNavigateHome, 
  onNavigateTrabalheConosco,
  isServicePage, 
  isTrabalheConosco 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Processo', href: '#processo' },
    { label: 'Obras', href: '#obras' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Cidades', href: '#areas' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Trabalhe Conosco', href: '#/trabalhe-conosco', highlight: true },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href === '#/trabalhe-conosco') {
      if (onNavigateTrabalheConosco) {
        onNavigateTrabalheConosco();
      } else {
        window.location.hash = '#/trabalhe-conosco';
      }
      return;
    }

    if ((isServicePage || isTrabalheConosco) && onNavigateHome) {
      onNavigateHome();
      // Delay slightly for render before scrolling to anchor
      setTimeout(() => {
        if (href.startsWith('#')) {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-indigo-950/5 border-b border-indigo-100/90' 
          : 'bg-white/90 backdrop-blur-md border-b border-indigo-100/40'
      }`}
    >
      {/* Emergency banner ticker on top for instant reassurance - smoothly compacts on scroll */}
      <div 
        className={`bg-indigo-950 text-indigo-100 text-[11px] sm:text-xs text-center font-medium flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-9 py-1 px-4 opacity-100'
        }`}
      >
        <span className="inline-flex items-center gap-1 text-wa-green font-semibold">
          <span className="w-2 h-2 rounded-full bg-wa-green animate-ping" />
          Plantão 24h:
        </span>
        <span>Emergência para vazamentos e elétrica em Caxias do Sul e Serra Gaúcha</span>
        <span className="hidden md:inline text-indigo-300">•</span>
        <span className="hidden md:inline text-indigo-200">Seg–Sex 07h30–20h30 | Sáb 08h–14h30</span>
      </div>

      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-2 sm:py-2.5' : 'py-3 sm:py-3.5'
        }`}
      >
        {/* Brand Logo */}
        <button 
          type="button" 
          onClick={() => handleNavClick('#inicio')}
          className="focus:outline-none focus:ring-2 focus:ring-indigo-700 rounded-lg text-left cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          aria-label="Ir para a página inicial da Revitta"
        >
          <RevittaLogo />
        </button>

        {/* Header Actions: Phone, WhatsApp CTA & Universal Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Phone call link */}
          <a
            href={`tel:+${COMPANY_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-indigo-950 hover:text-indigo-700 px-2.5 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
            title="Ligar agora"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-700" />
            <span>(54) 99216-2361</span>
          </a>

          {/* WhatsApp Primary Header CTA */}
          <a
            id="header-cta-whatsapp"
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0"
            aria-label="Pedir orçamento no WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-white text-white" />
            <span className="whitespace-nowrap">Orçamento Grátis</span>
          </a>

          {/* Universal Menu Toggle Button for all screen sizes */}
          <button
            id="menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-2 rounded-xl text-indigo-950 bg-indigo-50/70 hover:bg-indigo-100 border border-indigo-200/80 focus:outline-none focus:ring-2 focus:ring-indigo-700 transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-indigo-900" /> : <Menu className="w-5 h-5 text-indigo-900" />}
            <span className="hidden sm:inline text-xs font-bold text-indigo-950 tracking-wide uppercase">Menu</span>
          </button>
        </div>
      </div>

      {/* Universal Nav Menu Panel for all devices */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-indigo-950/25 backdrop-blur-[2px] z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div 
            id="nav-panel"
            className="relative z-50 bg-white border-b border-indigo-100 shadow-2xl animate-in slide-in-from-top-2 duration-200"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
              <div className="py-2 mb-4 border-b border-indigo-50 flex flex-wrap items-center justify-between text-xs text-gray-600 gap-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-indigo-700" />
                  Seg–Sex 07:30–20:30 • Sáb 08:00–14:30
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-wa-green/10 text-wa-green font-bold text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-wa-green animate-ping" />
                  Plantão 24h para Emergências
                </span>
              </div>

              {/* Navigation links grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#/')) {
                        e.preventDefault();
                      }
                      handleNavClick(link.href);
                    }}
                    className={`p-3 rounded-xl border text-sm font-semibold transition-all cursor-pointer flex items-center justify-between group ${
                      link.highlight 
                        ? 'border-indigo-700/40 bg-indigo-900 text-white hover:bg-indigo-950 shadow-sm' 
                        : 'border-indigo-50 bg-indigo-50/30 hover:bg-indigo-100/70 hover:border-indigo-200 text-indigo-950 hover:text-indigo-700'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span>{link.label}</span>
                      {link.highlight && (
                        <span className="text-[10px] text-indigo-200 font-normal">Para Profissionais & MEI</span>
                      )}
                    </div>
                    <span className={`text-xs transition-colors ${link.highlight ? 'text-wa-green font-bold' : 'text-indigo-400 group-hover:text-indigo-700'}`}>
                      →
                    </span>
                  </a>
                ))}
              </div>

              {/* Social Media Row in Header Drawer */}
              <div className="pt-3 mt-3 border-t border-indigo-50 flex flex-col sm:flex-row items-center justify-between gap-2.5">
                <span className="text-xs font-semibold text-indigo-900">
                  Siga a Revitta & Avaliações:
                </span>
                <SocialLinksRow variant="header" />
              </div>

              {/* Bottom quick action bar */}
              <div className="pt-3 mt-3 border-t border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-gray-500 text-center sm:text-left">
                  <span className="font-semibold text-indigo-950">Revitta Engenharia & Reformas:</span> Atendimento em Caxias do Sul e toda a Serra Gaúcha.
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`tel:+${COMPANY_INFO.phoneRaw}`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-950 font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-indigo-700" />
                    <span>Ligar (54) 99216-2361</span>
                  </a>
                  <a
                    href={createWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
