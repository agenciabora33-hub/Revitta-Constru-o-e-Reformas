import React from 'react';
import { PROCESS_STEPS, createWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { CalendarCheck, FileText, HardHat, Award, MessageSquare } from 'lucide-react';

export const Process: React.FC = () => {
  const stepIcons = [CalendarCheck, FileText, HardHat, Award];

  return (
    <section id="processo" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3">
            <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
            <span>Método Transparente & Sem Surpresas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-indigo-950 tracking-tight">
            Como funciona sua reforma do primeiro contato à entrega
          </h2>
          <p className="text-base text-gray-600 mt-4 leading-relaxed">
            Eliminamos a incerteza com um processo estruturado em 4 etapas claras, com equipe própria e acompanhamento contínuo.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((item, index) => {
            const Icon = stepIcons[index];
            return (
              <div 
                key={item.step}
                className="relative bg-mist rounded-2xl p-6 sm:p-7 border border-indigo-100 shadow-sm flex flex-col justify-between hover:border-indigo-300 transition-all group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-display text-indigo-200 group-hover:text-indigo-700 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white text-indigo-700 flex items-center justify-center shadow-xs border border-indigo-100">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="inline-block text-[11px] font-bold text-indigo-700 bg-indigo-100/70 px-2.5 py-1 rounded-md mb-3">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-bold font-display text-indigo-950">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-indigo-100/60 text-xs font-semibold text-indigo-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-wa-green" />
                  <span>Etapa com supervisão direta</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 bg-gradient-to-r from-indigo-950 to-indigo-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Pronto para agendar seu atendimento com transparência total?
            </h3>
            <p className="text-xs sm:text-sm text-indigo-200 mt-1">
              Avaliação prévia pelo WhatsApp e atendimento presencial mediante agendamento.
            </p>
          </div>

          <a
            href={createWhatsAppUrl("Olá! Gostaria de agendar um atendimento da Revitta para avaliar meu projeto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-wa-green hover:bg-[#20bd5a] text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all shrink-0 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Agendar Atendimento no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
