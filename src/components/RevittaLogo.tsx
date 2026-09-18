import React from 'react';

interface RevittaLogoProps {
  light?: boolean;
  className?: string;
  showSubtitle?: boolean;
}

export const RevittaLogo: React.FC<RevittaLogoProps> = ({ 
  light = false, 
  className = "",
  showSubtitle = true 
}) => {
  const subColor = light ? "text-indigo-200" : "text-gray-600";

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Visual Architectural Monogram Mark from official favicon / logo */}
      <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-950 shadow-md shadow-indigo-950/20 shrink-0 overflow-hidden border border-indigo-700/40 p-0.5">
        <img
          src="https://i.ibb.co/JW3xbYLb/Logo-Revitta.png"
          alt="Ícone Revitta"
          className="w-full h-full object-contain"
          loading="eager"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/favicon.png";
          }}
        />
      </div>

      {/* Brand Typography using official logo image */}
      <div className="flex flex-col justify-center">
        <img
          src={light ? "/logo-white.png" : "/logo-dark.png"}
          alt="Revitta"
          className="h-5 sm:h-6 w-auto object-contain"
          loading="eager"
        />
        {showSubtitle && (
          <span className={`text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase mt-0.5 ${subColor}`}>
            Construção & Reformas
          </span>
        )}
      </div>
    </div>
  );
};
