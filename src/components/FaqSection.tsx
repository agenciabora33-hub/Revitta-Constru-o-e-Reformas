import React from 'react';
import { motion } from 'motion/react';
import { FAQ_ITEMS, createWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { SectionReveal } from './SectionReveal';

export const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-24 bg-mist relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Reveal */}
        <SectionReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/90 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3 border border-indigo-200/50">
              <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
              <span>Dúvidas Técnicas & Comerciais</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-indigo-950 tracking-tight">
              Perguntas Frequentes sobre Obras em Caxias do Sul
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
              Respostas claras sobre prazos, custos, garantia e atendimento na Serra Gaúcha sem surpresas.
            </p>
          </div>
        </SectionReveal>

        {/* Semantic <details> Accordion List with Luxury Styling */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((faq, index) => (
            <SectionReveal key={index} delay={index * 0.04} yOffset={12}>
              <details
                className="group bg-white rounded-2xl border border-indigo-100 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all overflow-hidden"
                open={index === 0} // First one open by default for immediate preview
              >
                <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none select-none focus:outline-none focus:ring-2 focus:ring-indigo-700 rounded-2xl">
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 font-extrabold text-xs flex items-center justify-center shrink-0 border border-indigo-100/70">
                      {index + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-display text-indigo-950 group-hover:text-indigo-700 transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-indigo-50 group-hover:bg-indigo-100 flex items-center justify-center text-indigo-700 transition-transform duration-300 group-open:rotate-180 shrink-0">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </summary>

                <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-indigo-50">
                  <p className="font-normal">{faq.answer}</p>
                  <div className="mt-3.5 flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-indigo-700 bg-mist px-2.5 py-1 rounded-md border border-indigo-100">
                      {faq.tag}
                    </span>
                  </div>
                </div>
              </details>
            </SectionReveal>
          ))}
        </div>

        {/* Support Box with Reveal */}
        <SectionReveal delay={0.2}>
          <div className="mt-12 p-6 sm:p-8 bg-white rounded-3xl border border-indigo-100 shadow-md text-center flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="text-left">
              <h4 className="text-base sm:text-lg font-bold text-indigo-950">Ficou com alguma dúvida sobre seu imóvel?</h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Nosso time técnico atende diretamente pelo WhatsApp com respostas rápidas e sem compromisso.</p>
            </div>
            <motion.a
              href={createWhatsAppUrl("Olá! Tenho uma dúvida sobre uma reforma/obra em Caxias do Sul e gostaria de falar com a Revitta.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white font-extrabold py-3 px-6 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Tirar Dúvida no WhatsApp</span>
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
