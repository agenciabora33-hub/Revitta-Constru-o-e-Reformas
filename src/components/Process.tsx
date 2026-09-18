import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS, createWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { CalendarCheck, FileText, HardHat, Award, MessageSquare, ArrowRight } from 'lucide-react';
import { SectionReveal } from './SectionReveal';

export const Process: React.FC = () => {
  const stepIcons = [CalendarCheck, FileText, HardHat, Award];

  return (
    <section id="processo" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      {/* Subtle ambient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Reveal */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3 border border-indigo-200/50">
              <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
              <span>Gestão de Obra Transparente & Sem Surpresas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-indigo-950 tracking-tight">
              Como funciona sua obra em Caxias do Sul da proposta à entrega
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
              O caxiense preza por palavra cumprida e pontualidade. Eliminamos atrasos e imprevistos financeiros através de um método estruturado em 4 etapas claras, com equipe própria e canteiro organizado.
            </p>
          </div>
        </SectionReveal>

        {/* 4 Steps Grid with Motion and Connecting Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative">
          {PROCESS_STEPS.map((item, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="relative bg-mist rounded-3xl p-6 sm:p-7 border border-indigo-100 shadow-sm flex flex-col justify-between hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/6 transition-all group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold font-display text-indigo-200 group-hover:text-indigo-700 transition-colors duration-300">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white text-indigo-700 flex items-center justify-center shadow-sm border border-indigo-100 group-hover:bg-indigo-700 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-bold text-indigo-800 bg-indigo-100/80 px-3 py-1 rounded-full mb-3.5 border border-indigo-200/50">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-bold font-display text-indigo-950 group-hover:text-indigo-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-indigo-100/80 text-xs font-semibold text-indigo-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-wa-green animate-pulse" />
                  <span>Supervisão técnica contínua</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout with Luxury Agency Feel */}
        <SectionReveal delay={0.2}>
          <div className="mt-14 sm:mt-18 bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 rounded-3xl p-6 sm:p-9 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl shadow-indigo-950/20 border border-indigo-800/60">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-wa-green inline-block mb-1">
                Atendimento Personalizado na Serra Gaúcha
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white">
                Pronto para iniciar sua obra com transparência total?
              </h3>
              <p className="text-xs sm:text-sm text-indigo-200 mt-2 leading-relaxed">
                Envie fotos ou a planta do seu imóvel pelo WhatsApp para uma pré-avaliação rápida e agendamento presencial sem custos na aprovação.
              </p>
            </div>

            <motion.a
              href={createWhatsAppUrl("Olá! Gostaria de agendar um atendimento da Revitta para avaliar meu projeto em Caxias do Sul e região.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 bg-wa-green hover:bg-[#20bd5a] text-white font-extrabold px-7 py-4 rounded-2xl text-sm sm:text-base shadow-lg shadow-wa-green/25 hover:shadow-xl transition-all shrink-0 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Agendar Visita no WhatsApp</span>
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
