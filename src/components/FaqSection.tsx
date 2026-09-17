import React from 'react';
import { FAQ_ITEMS, createWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { ChevronDown, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-mist relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3">
            <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
            <span>GEO & Respostas Diretas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-indigo-950 tracking-tight">
            Perguntas Frequentes sobre Reformas e Construção
          </h2>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">
            Respostas claras e objetivas sobre prazos, custos, garantia e atendimento na Serra Gaúcha.
          </p>
        </div>

        {/* Semantic <details> Accordion List as mandated by PRD §7 */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-2xl border border-indigo-100/90 shadow-xs hover:border-indigo-300 transition-all overflow-hidden"
              open={index === 0} // First one open by default for immediate preview
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none select-none focus:outline-none focus:ring-2 focus:ring-indigo-700 rounded-2xl">
                <div className="flex items-center gap-3 pr-4">
                  <span className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  {/* H3 question as required by PRD §6 and GEO optimization */}
                  <h3 className="text-base sm:text-lg font-bold font-display text-indigo-950 group-hover:text-indigo-700 transition-colors">
                    {faq.question}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-full bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center text-indigo-700 transition-transform duration-200 group-open:rotate-180 shrink-0">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </summary>

              <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-indigo-50">
                <p>{faq.answer}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-indigo-700 bg-mist px-2.5 py-1 rounded-md border border-indigo-100">
                    {faq.tag}
                  </span>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Support Box */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-indigo-100 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-indigo-950">Ficou com alguma dúvida específica sobre o seu projeto?</h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Nosso time responde diretamente no WhatsApp em minutos durante o horário comercial.</p>
          </div>
          <a
            href={createWhatsAppUrl("Olá! Tenho uma dúvida sobre os serviços da Revitta.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm shadow-sm shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
