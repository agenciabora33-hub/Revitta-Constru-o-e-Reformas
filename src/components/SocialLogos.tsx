import React from 'react';
import { COMPANY_INFO } from '../data/revittaData';

export const InstagramLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <radialGradient id="revitta-ig-grad" cx="20%" cy="115%" r="135%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="10%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#revitta-ig-grad)" />
    <path 
      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" 
      stroke="#ffffff" 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <circle cx="17.5" cy="6.5" r="1.2" fill="#ffffff" />
  </svg>
);

export const FacebookLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#1877F2" />
    <path 
      d="M15.12 12.5h-2.12v7h-3v-7H8.5v-2.5h1.5V8.5c0-1.7 1-2.62 2.65-2.62.79 0 1.63.14 1.63.14v1.8h-.92c-.89 0-1.16.55-1.16 1.12v1.06h2.25l-.34 2.5z" 
      fill="#ffffff" 
    />
  </svg>
);

export const LinkedinLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#0A66C2" />
    <path 
      d="M8.2 18.5H5.5V9.5h2.7v9zm-1.35-10.2a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.65 10.2h-2.7v-4.4c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.68 1.14-1.68 2.32v4.48h-2.7V9.5h2.6v1.23h.04c.36-.69 1.25-1.42 2.58-1.42 2.76 0 3.27 1.82 3.27 4.18v4.91z" 
      fill="#ffffff" 
    />
  </svg>
);

export const GoogleLogo: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#ffffff" stroke="#E5E7EB" strokeWidth="1" />
    <path 
      fill="#4285F4" 
      d="M19.5 12.18c0-.62-.05-1.22-.16-1.78H12v3.37h4.21c-.18.98-.74 1.81-1.57 2.37v1.97h2.54c1.49-1.37 2.32-3.39 2.32-5.93z" 
    />
    <path 
      fill="#34A853" 
      d="M12 20c2.16 0 3.97-.71 5.3-1.94l-2.54-1.97c-.72.48-1.63.77-2.76.77-2.12 0-3.92-1.43-4.56-3.36H4.8v2.04C6.14 18.2 8.86 20 12 20z" 
    />
    <path 
      fill="#FBBC05" 
      d="M7.44 13.5c-.16-.48-.25-1-.25-1.5s.09-1.02.25-1.5V8.46H4.8A7.99 7.99 0 0 0 4 12c0 1.29.31 2.51.8 3.54l2.64-2.04z" 
    />
    <path 
      fill="#EA4335" 
      d="M12 7.14c1.17 0 2.23.4 3.06 1.19l2.3-2.3C15.96 4.75 14.15 4 12 4 8.86 4 6.14 5.8 4.8 8.46l2.64 2.04c.64-1.93 2.44-3.36 4.56-3.36z" 
    />
  </svg>
);

export interface SocialLinksProps {
  variant?: 'footer' | 'pill' | 'cards' | 'header';
  className?: string;
  showLabels?: boolean;
}

export const SOCIAL_NETWORKS = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@revittacaxias',
    url: COMPANY_INFO.socials.instagram,
    logo: InstagramLogo,
    badgeBg: 'bg-gradient-to-tr from-[#fdf497]/20 via-[#fd5949]/20 to-[#d6249f]/20',
    borderColor: 'hover:border-[#d6249f]/70',
    hoverGlow: 'hover:shadow-[#d6249f]/20',
    ariaLabel: 'Visitar perfil da Revitta no Instagram'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'revittacaxias',
    url: COMPANY_INFO.socials.facebook,
    logo: FacebookLogo,
    badgeBg: 'bg-[#1877F2]/10',
    borderColor: 'hover:border-[#1877F2]/70',
    hoverGlow: 'hover:shadow-[#1877F2]/20',
    ariaLabel: 'Visitar página da Revitta no Facebook'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'revittacaxias',
    url: COMPANY_INFO.socials.linkedin,
    logo: LinkedinLogo,
    badgeBg: 'bg-[#0A66C2]/10',
    borderColor: 'hover:border-[#0A66C2]/70',
    hoverGlow: 'hover:shadow-[#0A66C2]/20',
    ariaLabel: 'Visitar empresa Revitta no LinkedIn'
  },
  {
    id: 'google',
    name: 'Perfil no Google',
    handle: 'Avaliações & Empresa',
    url: COMPANY_INFO.socials.google,
    logo: GoogleLogo,
    badgeBg: 'bg-white',
    borderColor: 'hover:border-blue-400',
    hoverGlow: 'hover:shadow-blue-500/20',
    ariaLabel: 'Ver Perfil e Avaliações da Revitta no Google'
  }
];

export const SocialLinksRow: React.FC<SocialLinksProps> = ({ 
  variant = 'footer',
  className = '',
  showLabels = false
}) => {
  if (variant === 'cards') {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 ${className}`}>
        {SOCIAL_NETWORKS.map((social) => {
          const Logo = social.logo;
          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className={`p-3.5 rounded-2xl bg-white border border-indigo-100 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex items-center gap-3 group ${social.borderColor}`}
            >
              <div className="shrink-0 transition-transform duration-200 group-hover:scale-110">
                <Logo className="w-8 h-8 rounded-xl shadow-xs" />
              </div>
              <div className="min-w-0 text-left">
                <div className="text-xs font-bold text-indigo-950 group-hover:text-indigo-700 transition-colors truncate">
                  {social.name}
                </div>
                <div className="text-[11px] text-gray-500 truncate">
                  {social.handle}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {SOCIAL_NETWORKS.map((social) => {
          const Logo = social.logo;
          return (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              aria-label={social.ariaLabel}
              className="p-2 rounded-xl bg-indigo-50/80 hover:bg-indigo-100 text-indigo-950 border border-indigo-200/80 transition-all duration-200 hover:scale-110 active:scale-95 shadow-xs flex items-center justify-center"
            >
              <Logo className="w-4.5 h-4.5 rounded-md" />
            </a>
          );
        })}
      </div>
    );
  }

  // Default 'footer' variant: refined luxury agency style
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {SOCIAL_NETWORKS.map((social) => {
        const Logo = social.logo;
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${social.name} - ${social.handle}`}
            aria-label={social.ariaLabel}
            className={`group inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-900/70 hover:bg-indigo-900 border border-indigo-800/80 hover:border-indigo-600 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-xs`}
          >
            <div className="transition-transform duration-200 group-hover:scale-110 shrink-0">
              <Logo className="w-5 h-5 rounded-md" />
            </div>
            {showLabels && (
              <span className="text-xs font-semibold text-indigo-200 group-hover:text-white transition-colors">
                {social.name}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
};
