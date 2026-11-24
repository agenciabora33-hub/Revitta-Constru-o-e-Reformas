import React from 'react';

interface RevittaLogoProps {
  light?: boolean;
  className?: string;
  showSubtitle?: boolean;
}

export const RevittaLogo: React.FC<RevittaLogoProps> = ({
  light = false,
  className = '',
  showSubtitle = true,
}) => {
  const subColor = light ? 'text-indigo-200' : 'text-gray-600';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Visual Architectural Monogram Mark optimized at 80x80 WebP (2x DPR for 40x40 slot) */}
      <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-950 shadow-md shadow-indigo-950/20 shrink-0 overflow-hidden border border-indigo-700/40 p-0.5">
        <img
          src="/img/logo-revitta-80.webp"
          alt="Ícone Revitta"
          width={40}
          height={40}
          className="w-full h-full object-contain"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Brand Typography using properly sized 260x45 WebP asset */}
      <div className="flex flex-col justify-center">
        <img
          src={light ? '/img/logo-white-260.webp' : '/img/logo-dark-260.webp'}
          alt="Revitta"
          width={130}
          height={23}
          className="h-5 sm:h-6 w-auto object-contain"
          loading="eager"
          decoding="async"
        />
        {showSubtitle && (
          <span
            className={`text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase mt-0.5 ${subColor}`}
          >
            Construção & Reformas
          </span>
        )}
      </div>
    </div>
  );
};
