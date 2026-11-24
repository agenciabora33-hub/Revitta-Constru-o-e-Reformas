import React, { useState } from 'react';
import { BEFORE_AFTER_ITEMS, createWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { MapPin, MessageSquare, SlidersHorizontal } from 'lucide-react';
import { SectionReveal } from './SectionReveal';

function buildResponsiveSrcSet(url: string): string {
  const small = url.replace(/w=\d+/, 'w=480');
  const medium = url.replace(/w=\d+/, 'w=720');
  return `${small} 480w, ${medium} 720w`;
}

export const BeforeAfterGallery: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentItem = BEFORE_AFTER_ITEMS[selectedItemIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section
      id="obras"
      className="bg-mist relative"
      style={{ paddingTop: '40px', paddingBottom: '40px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/90 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3 border border-indigo-200/50">
              <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
              <span>Obras Realizadas na Serra Gaúcha</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-indigo-950 tracking-tight">
              Antes e Depois: Padrão Revitta em Caxias do Sul
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
              Arraste o cursor interativo para comparar o estado anterior com a transformação final entregue com acabamento fino e canteiro limpo.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {BEFORE_AFTER_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSelectedItemIndex(idx);
                    setSliderPosition(50);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    selectedItemIndex === idx
                      ? 'bg-indigo-700 text-white shadow-md shadow-indigo-700/20 scale-102'
                      : 'bg-white text-indigo-950 hover:bg-indigo-50 border border-indigo-100 shadow-sm'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-indigo-100 shadow-2xl shadow-indigo-950/8 overflow-hidden">
            <div className="p-5 sm:p-6 border-b border-indigo-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-indigo-700 font-bold mb-1">
                  <span className="bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100/60">
                    {currentItem.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-600 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-indigo-700" />
                    {currentItem.location}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-indigo-950">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {currentItem.description}
                </p>
              </div>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white font-extrabold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Orçar projeto similar</span>
              </a>
            </div>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none overflow-hidden bg-indigo-950">
              <img
                src={currentItem.afterImg}
                srcSet={buildResponsiveSrcSet(currentItem.afterImg)}
                sizes="(max-width: 768px) 92vw, 720px"
                alt={`Depois: ${currentItem.title}`}
                width={720}
                height={450}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-4 right-4 bg-indigo-950/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl text-xs font-bold border border-white/20 shadow-md">
                Depois (Revitta)
              </div>

              <div
                className="absolute inset-0 overflow-hidden will-change-[clip-path]"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={currentItem.beforeImg}
                  srcSet={buildResponsiveSrcSet(currentItem.beforeImg)}
                  sizes="(max-width: 768px) 92vw, 720px"
                  alt={`Antes: ${currentItem.title}`}
                  width={720}
                  height={450}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl text-xs font-bold border border-white/20 shadow-md">
                  Antes (Original)
                </div>
              </div>

              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_12px_rgba(0,0,0,0.6)] flex items-center justify-center"
                style={{ left: `calc(${sliderPosition}% - 2px)` }}
              >
                <div className="w-10 h-10 rounded-full bg-white text-indigo-950 shadow-2xl border-2 border-indigo-700 flex items-center justify-center pointer-events-none">
                  <SlidersHorizontal className="w-4 h-4 text-indigo-700 rotate-90" />
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                aria-label="Controle deslizante para comparar Antes e Depois"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />
            </div>

            <div className="p-4 bg-mist border-t border-indigo-50 flex items-center justify-between text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSliderPosition(100)}
                  className="px-3 py-1.5 bg-white border border-indigo-100 rounded-lg hover:bg-indigo-50 font-medium transition-colors cursor-pointer"
                >
                  Ver 100% Antes
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(50)}
                  className="px-3 py-1.5 bg-white border border-indigo-100 rounded-lg hover:bg-indigo-50 font-medium transition-colors cursor-pointer"
                >
                  Meio a Meio (50/50)
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(0)}
                  className="px-3 py-1.5 bg-white border border-indigo-100 rounded-lg hover:bg-indigo-50 font-medium transition-colors cursor-pointer"
                >
                  Ver 100% Depois
                </button>
              </div>
              <span className="hidden sm:inline text-indigo-700 font-semibold">
                Deslize o marcador ou clique nas opções
              </span>
            </div>
          </div>
        </SectionReveal>

        <div className="max-w-3xl mx-auto mt-6 text-center">
          <p className="text-xs text-gray-700 leading-relaxed bg-white/60 p-3 rounded-2xl border border-indigo-50">
            <span className="font-semibold text-indigo-950">Aviso de transparência:</span> Registros ilustrativos baseados no padrão de acabamento executado pela Revitta. O acervo fotográfico de obras reais é continuamente auditado com autorização dos proprietários na Serra Gaúcha para conformidade E-E-A-T.
          </p>
        </div>
      </div>
    </section>
  );
};
