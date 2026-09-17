import React from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/revittaData';
import { DETAILED_SERVICES } from '../data/servicesDetailedData';
import { RevittaLogo } from './RevittaLogo';
import { SparkleIcon } from './SparkleIcon';
import { 
  MapPin, Phone, Clock, CreditCard, ShieldCheck, 
  Instagram, Facebook, Linkedin, ArrowUp, ExternalLink,
  ChevronRight, ArrowRight
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
  onSelectService?: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy, onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const internalLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Atendimento a Domicílio', href: '#atendimento' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Obras Antes/Depois', href: '#obras' },
    { label: 'Sobre Nós (E-E-A-T)', href: '#sobre' },
    { label: 'Áreas Atendidas', href: '#areas' },
    { label: 'Avaliações GBP', href: '#depoimentos' },
    { label: 'Dúvidas (FAQ)', href: '#faq' },
    { label: 'Fale Conosco', href: '#contato' },
  ];

  return (
    <footer id="footer-nap" className="bg-indigo-950 text-indigo-200 pt-16 pb-12 border-t border-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-indigo-900/80">
          
          {/* Column 1: Brand & NAP Single Source of Truth (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <RevittaLogo light showSubtitle />
            <p className="text-xs sm:text-sm text-indigo-300/90 leading-relaxed max-w-sm">
              Soluções integradas em construção civil, reformas residenciais e comerciais, instalações elétricas, hidráulica e acabamentos de alto padrão.
            </p>

            <div className="pt-2 space-y-2 text-xs text-indigo-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-wa-green shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-wa-green shrink-0" />
                <span>WhatsApp: {COMPANY_INFO.phoneFormatted}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-wa-green shrink-0" />
                <span>CNPJ: {COMPANY_INFO.cnpj} • Fundação: {COMPANY_INFO.foundedDate}</span>
              </div>
            </div>

            {/* Social Media Links from PRD §3 */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white flex items-center justify-center transition-colors border border-indigo-800"
                aria-label="Instagram da Revitta"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white flex items-center justify-center transition-colors border border-indigo-800"
                aria-label="Facebook da Revitta"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white flex items-center justify-center transition-colors border border-indigo-800"
                aria-label="LinkedIn da Revitta"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Hours & Emergency (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>Horários de Atendimento</span>
            </h4>
            <ul className="text-xs space-y-2 text-indigo-300">
              <li className="flex flex-col">
                <span className="font-semibold text-white">Segunda a Sexta:</span>
                <span>07:30 às 20:30</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">Sábado:</span>
                <span>08:00 às 14:30</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">Domingo:</span>
                <span>Fechado</span>
              </li>
              <li className="pt-2 border-t border-indigo-900/60">
                <span className="inline-flex items-center gap-1.5 text-wa-green font-bold">
                  <span className="w-2 h-2 rounded-full bg-wa-green animate-pulse" />
                  Emergência 24h
                </span>
                <p className="text-[11px] text-indigo-400 mt-0.5">
                  Vazamentos críticos e riscos elétricos atendidos em regime de plantão.
                </p>
              </li>
            </ul>
          </div>

          {/* Column 3: Internal Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Navegação do Site
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs">
              {internalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-indigo-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <h5 className="text-xs font-bold text-white mb-1.5 flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-indigo-400" />
                <span>Formas de Pagamento:</span>
              </h5>
              <p className="text-[11px] text-indigo-300">
                PIX, dinheiro, cartões de crédito e débito parcelado.
              </p>
            </div>
          </div>

          {/* Column 4: Local Coverage Recap (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Região Atendida
            </h4>
            <ul className="text-xs space-y-1.5 text-indigo-300">
              <li>• Caxias do Sul</li>
              <li>• Farroupilha (95180-000)</li>
              <li>• São Marcos (95190-000)</li>
              <li>• Flores da Cunha (95270-000)</li>
            </ul>

            <div className="pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-white transition-colors border border-indigo-800 rounded-lg px-2.5 py-1.5 hover:bg-indigo-900 cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dedicated Service Pages Directory (SEO, GEO & Architecture Links) */}
        <div className="py-8 border-b border-indigo-900/80">
          <div className="flex items-center justify-between gap-4 mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 font-display flex items-center gap-2">
              <SparkleIcon className="w-3.5 h-3.5 text-wa-green" />
              <span>Páginas Próprias de Serviços (Otimização SEO, GEO & Normas ABNT)</span>
            </h4>
            <span className="text-[11px] text-indigo-400 hidden sm:inline">
              10 especialidades com páginas dedicadas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 text-xs">
            {DETAILED_SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#/servicos/${s.slug}`}
                onClick={(e) => {
                  if (onSelectService) {
                    e.preventDefault();
                    onSelectService(s.id);
                  }
                }}
                className="p-2.5 rounded-xl bg-indigo-900/50 hover:bg-indigo-900 border border-indigo-800/60 hover:border-indigo-700 text-indigo-200 hover:text-white transition-all flex items-center justify-between group"
              >
                <span className="truncate">{s.title}</span>
                <ChevronRight className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white shrink-0 ml-1" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Legal, LGPD & Copyright Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-indigo-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} Revitta Construção e Reformas. Todos os direitos reservados.</span>
            <span>CNPJ: {COMPANY_INFO.cnpj}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
            >
              Política de Privacidade & LGPD
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="hover:text-white underline underline-offset-4 transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
