import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BEFORE_AFTER_ITEMS, createWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { MapPin, MessageSquare, SlidersHorizontal } from 'lucide-react';
import { SectionReveal } from './SectionReveal';

export const BeforeAfterGallery: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100

  const currentItem = BEFORE_AFTER_ITEMS[selectedItemIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="obras" className="py-20 sm:py-24 bg-mist relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reveal */}
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

            {/* Project switcher tabs */}
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

        {/* Interactive Slider Container with Reveal */}
        <SectionReveal delay={0.15}>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-indigo-100 shadow-2xl shadow-indigo-950/8 overflow-hidden">
            {/* Top project details bar */}
            <div className="p-5 sm:p-6 border-b border-indigo-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-indigo-700 font-bold mb-1">
                  <span className="bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100/60">{currentItem.category}</span>
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

              {/* Quick action button for this project type */}
              <motion.a
                href={createWhatsAppUrl(`Olá! Gostaria de um orçamento para um projeto parecido com '${currentItem.title}' em Caxias do Sul e região.`)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white font-extrabold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Orçar projeto similar</span>
              </motion.a>
            </div>

            {/* Interactive Split View */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none overflow-hidden bg-indigo-950">
              {/* AFTER Image (Full background layer) */}
              <img
                src={currentItem.afterImg}
                alt={`Depois: ${currentItem.title}`}
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
              {/* AFTER Tag */}
              <div className="absolute top-4 right-4 bg-indigo-950/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl text-xs font-bold border border-white/20 shadow-md">
                Depois (Revitta)
              </div>

              {/* BEFORE Image (Clipped overlay layer) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={currentItem.beforeImg}
                  alt={`Antes: ${currentItem.title}`}
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                  style={{ width: '100%', minWidth: '100%' }}
                  loading="lazy"
                />
                {/* BEFORE Tag */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl text-xs font-bold border border-white/20 shadow-md">
                  Antes (Original)
                </div>
              </div>

              {/* Draggable Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_12px_rgba(0,0,0,0.6)] flex items-center justify-center"
                style={{ left: `calc(${sliderPosition}% - 2px)` }}
              >
                {/* Divider Handle Knob */}
                <div className="w-10 h-10 rounded-full bg-white text-indigo-950 shadow-2xl border-2 border-indigo-700 flex items-center justify-center pointer-events-none transition-transform group-hover:scale-110">
                  <SlidersHorizontal className="w-4 h-4 text-indigo-700 rotate-90" />
                </div>
              </div>

              {/* Range Input overlaid across the image for smooth touch/mouse drag */}
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

            {/* Quick preset buttons for mobile tap access */}
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

        {/* E-E-A-T SOBER Caption & Transparency Notice */}
        <div className="max-w-3xl mx-auto mt-6 text-center">
          <p className="text-xs text-gray-500 leading-relaxed bg-white/60 p-3 rounded-2xl border border-indigo-50">
            <span className="font-semibold text-indigo-950">Aviso de transparência:</span> Registros ilustrativos baseados no padrão de acabamento executado pela Revitta. O acervo fotográfico de obras reais é continuamente auditado com autorização dos proprietários na Serra Gaúcha para conformidade E-E-A-T.
          </p>
        </div>
      </div>
    </section>
  );
};
