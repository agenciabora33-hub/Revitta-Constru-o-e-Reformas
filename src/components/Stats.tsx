import React from 'react';
import { motion } from 'motion/react';
import { STATS } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { AnimatedCounter } from './AnimatedCounter';
import { SectionReveal } from './SectionReveal';

export const Stats: React.FC = () => {
  return (
    <section id="numeros" className="py-14 sm:py-20 bg-indigo-950 text-white relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-wa-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14 border-b border-indigo-900/80 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-indigo-300 text-xs font-bold tracking-wider uppercase mb-2">
                <SparkleIcon className="w-3.5 h-3.5 text-wa-green" />
                <span>Solidez e Histórico Comprovado em Caxias do Sul</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-white">
                Capacidade técnica e compromisso com o seu imóvel
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-indigo-200 max-w-sm">
              Gestão unificada com cronograma pontual e equipe própria na Serra Gaúcha.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-indigo-900/60 backdrop-blur-sm border border-indigo-800/80 rounded-2xl p-5 sm:p-7 hover:border-indigo-600/70 hover:shadow-xl hover:shadow-indigo-950/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight flex items-baseline gap-1">
                  <AnimatedCounter value={stat.value} duration={2.2} />
                  <span className="text-wa-green text-2xl font-sans inline-block group-hover:scale-125 transition-transform duration-300">•</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-indigo-200 mt-2">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-indigo-300/80 mt-4 pt-3.5 border-t border-indigo-800/60 leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note on data auditability as outlined in PRD §6 */}
        <p className="text-[11px] text-indigo-400/80 mt-8 text-center sm:text-left">
          *Dados operacionais consolidados desde abril de 2020 pela Revitta Construção e Reformas (CNPJ 50.463.095/0001-58) em Caxias do Sul e Serra Gaúcha.
        </p>
      </div>
    </section>
  );
};
