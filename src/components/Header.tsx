import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Clock } from 'lucide-react';
import { RevittaLogo } from './RevittaLogo';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/revittaData';

interface HeaderProps {
  onNavigateHome?: () => void;
  isServicePage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateHome, isServicePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (isServicePage && onNavigateHome) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-2.5 shadow-md shadow-indigo-950/5 border-b border-indigo-100' 
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-indigo-50'
      }`}
    >
      {/* Emergency banner ticker on top for instant reassurance */}
      <div className="bg-indigo-950 text-indigo-100 text-[11px] sm:text-xs py-1 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 text-wa-green font-semibold">
          <span className="w-2 h-2 rounded-full bg-wa-green animate-ping" />
          Plantão 24h:
        </span>
        <span>Emergência para vazamentos e elétrica na Serra Gaúcha</span>
        <span className="hidden md:inline text-indigo-300">•</span>
        <span className="hidden md:inline text-indigo-200">Seg–Sex 07h30–20h30 | Sáb 08h–14h30</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between mt-1">
        {/* Brand Logo */}
        <button 
          type="button" 
          onClick={() => handleNavClick('#inicio')}
          className="focus:outline-none focus:ring-2 focus:ring-indigo-700 rounded-lg text-left cursor-pointer"
          aria-label="Ir para a página inicial da Revitta"
        >
          <RevittaLogo />
        </button>

        {/* Desktop Navigation Links */}
        <nav 
          className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5 mx-2 xl:mx-6 text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-semibold text-indigo-950" 
          aria-label="Navegação Principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-2 xl:px-2.5 py-1.5 rounded-lg text-indigo-950/80 hover:text-indigo-700 hover:bg-indigo-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Actions: Direct Phone & Green Conversion CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Phone call desktop link */}
          <a
            href={`tel:+${COMPANY_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-indigo-950 hover:text-indigo-700 px-2.5 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
            title="Ligar agora"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-700" />
            <span>(54) 99216-2361</span>
          </a>

          {/* WhatsApp Primary Header CTA - Green conversion only */}
          <a
            id="header-cta-whatsapp"
            href={createWhatsAppUrl("Olá! Gostaria de um orçamento para obra/reforma com a Revitta. (Vim pelo cabeçalho do site)")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 shrink-0"
            aria-label="Pedir orçamento no WhatsApp"
          >
            <MessageSquare className="w-4 h-4 fill-white text-white" />
            <span className="whitespace-nowrap">Orçamento Grátis</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-indigo-950 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-panel"
          className="lg:hidden bg-white border-b border-indigo-100 shadow-xl px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="py-2 mb-2 border-b border-indigo-50 flex items-center justify-between text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-indigo-700" />
              Seg–Sex 07:30–20:30 • Sáb 08:00–14:30
            </span>
            <span className="font-bold text-wa-green">24h Emergência</span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-indigo-950 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 mt-2 border-t border-indigo-100 flex flex-col gap-2">
            <a
              href={createWhatsAppUrl("Olá! Gostaria de falar com a equipe da Revitta sobre um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-xl text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              Chamar no WhatsApp agora
            </a>
            <a
              href={`tel:+${COMPANY_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-950 font-bold py-2.5 px-4 rounded-xl text-sm"
            >
              <Phone className="w-4 h-4 text-indigo-700" />
              Ligar: (54) 99216-2361
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
