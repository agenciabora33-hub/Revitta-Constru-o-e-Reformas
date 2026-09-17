import React from 'react';
import { STATS } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';

export const Stats: React.FC = () => {
  return (
    <section id="numeros" className="py-12 sm:py-16 bg-indigo-950 text-white relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-wa-green/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 border-b border-indigo-900/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-300 text-xs font-bold tracking-wider uppercase mb-2">
              <SparkleIcon className="w-3.5 h-3.5 text-wa-green" />
              <span>Solidez e Histórico Comprovado</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
              Capacidade técnica e compromisso com o seu imóvel
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-indigo-200 max-w-sm">
            Gestão unificada com cronograma detalhado e equipe própria na Serra Gaúcha.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-indigo-900/60 border border-indigo-800/80 rounded-2xl p-5 sm:p-6 hover:border-indigo-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight flex items-baseline gap-1">
                  <span>{stat.value}</span>
                  {stat.value.includes('+') && <span className="text-wa-green text-2xl font-sans">•</span>}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-indigo-200 mt-2">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-indigo-300/80 mt-3 pt-3 border-t border-indigo-800/60 leading-snug">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Note on data auditability as outlined in PRD §6 */}
        <p className="text-[11px] text-indigo-400/80 mt-6 text-center sm:text-left">
          *Dados operacionais consolidados desde abril de 2020 pela Revitta Construção e Reformas (CNPJ 50.463.095/0001-58).
        </p>
      </div>
    </section>
  );
};
