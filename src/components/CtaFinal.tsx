import React from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { MessageSquare, Phone, Clock, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export const CtaFinal: React.FC = () => {
  const finalWaUrl = createWhatsAppUrl(
    "Olá! Vim pelo site da Revitta e quero receber meu orçamento sem compromisso."
  );

  return (
    <section id="contato" className="py-20 bg-indigo-950 text-white relative overflow-hidden">
      {/* Background glow motifs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-700/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-wa-green/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-900 border border-indigo-700 text-indigo-200 text-xs font-bold tracking-wide uppercase mb-6">
          <SparkleIcon className="w-3.5 h-3.5 text-wa-green" />
          <span>Atendimento Imediato & Avaliação Gratuita</span>
        </div>

        {/* PRD §6 verbatim headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Sua obra resolvida por quem entende.
        </h2>

        {/* PRD §6 verbatim subtitle */}
        <p className="text-base sm:text-xl text-indigo-200 mt-4 max-w-2xl mx-auto leading-relaxed">
          Fale agora com a Revitta no WhatsApp e receba seu orçamento sem compromisso.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="cta-final-whatsapp"
            href={finalWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-wa-green hover:bg-[#20bd5a] text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-wa-green/25 hover:shadow-2xl hover:shadow-wa-green/30 transition-all active:scale-95"
          >
            <MessageSquare className="w-6 h-6 fill-white" />
            <span>Chamar no WhatsApp: (54) 99216-2361</span>
          </a>

          <a
            href={`tel:+${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-base px-7 py-4 rounded-2xl border border-indigo-700/80 transition-all"
          >
            <Phone className="w-5 h-5 text-indigo-300" />
            <span>Ligar Diretamente</span>
          </a>
        </div>

        {/* Reassurance Features */}
        <div className="mt-12 pt-10 border-t border-indigo-900 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-wa-green shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Horário Comercial</h4>
              <p className="text-xs text-indigo-300 mt-0.5">Seg–Sex 07:30–20:30 • Sáb 08:00–14:30</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-wa-green shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Plantão Emergencial 24h</h4>
              <p className="text-xs text-indigo-300 mt-0.5">Vazamentos e panes elétricas de risco</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-wa-green shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Atendimento Presencial</h4>
              <p className="text-xs text-indigo-300 mt-0.5">Caxias do Sul, Farroupilha, São Marcos e Flores da Cunha</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
