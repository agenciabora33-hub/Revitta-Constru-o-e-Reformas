import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { Star, MapPin, CheckCircle } from 'lucide-react';
import { SectionReveal } from './SectionReveal';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Reveal */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/90 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3 border border-indigo-200/50">
              <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
              <span>Avaliações Reais no Google Perfil de Empresa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-indigo-950 tracking-tight">
              A opinião de quem já reformou com a Revitta
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
              Pontualidade, canteiro limpo e respeito ao orçamento refletidos nas avaliações verificadas de moradores e comerciantes em Caxias do Sul e Serra Gaúcha.
            </p>

            {/* Google rating overall pill */}
            <div className="inline-flex items-center gap-3 bg-mist px-4 py-2 rounded-full border border-indigo-100 mt-6 shadow-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-indigo-950">5.0 / 5.0 estrelas</span>
              <span className="text-xs text-gray-600 border-l border-indigo-200 pl-2 font-medium">
                Avaliações auditadas no Google Meu Negócio
              </span>
            </div>
          </div>
        </SectionReveal>

        {/* Testimonials Grid with Motion Stagger & Luxury Card Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="bg-mist rounded-3xl p-6 sm:p-8 border border-indigo-100 shadow-sm hover:shadow-xl hover:shadow-indigo-950/6 hover:border-indigo-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top card bar: Stars + GBP Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 bg-white px-2.5 py-1 rounded-full border border-indigo-100 shadow-xs">
                    <CheckCircle className="w-3 h-3 text-wa-green" />
                    Google Verificado
                  </span>
                </div>

                <p className="text-sm sm:text-base text-indigo-950 leading-relaxed italic font-normal">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-indigo-100/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-indigo-950">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 mt-0.5">
                    <MapPin className="w-3 h-3 text-indigo-700 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100/60">
                    {item.service}
                  </span>
                  <span className="block text-[10px] text-gray-500 mt-1">
                    {item.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
