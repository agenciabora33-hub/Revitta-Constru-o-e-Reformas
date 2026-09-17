import React from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/revittaData';
import { Wrench, CheckCircle2, MessageSquare, ShieldCheck, DollarSign, Navigation } from 'lucide-react';

export const AtendimentoTransparencia: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    "Olá! Gostaria de agendar um atendimento da Revitta no meu endereço."
  );

  return (
    <section 
      id="atendimento" 
      aria-labelledby="atendimento-heading"
      className="bg-[#0b0f17] text-white py-16 sm:py-20 border-y border-indigo-950/80 relative overflow-hidden"
    >
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Atendimento a Domicílio */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5 text-amber-400" />
              <span>Atendimento a Domicílio</span>
            </div>

            {/* Main Title */}
            <h2 
              id="atendimento-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight leading-tight"
            >
              Atendimento pensado para facilitar sua rotina
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-gray-200">
                Quando necessário, a Revitta realiza atendimento no endereço do cliente mediante agendamento.
              </p>
              <p className="text-gray-400">
                O objetivo é tornar o processo mais simples: entender o problema, avaliar a situação e apresentar as informações necessárias para que você decida sobre o reparo.
              </p>
            </div>

            {/* Bullet list with Checkmarks */}
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Sem necessidade de transportar equipamentos pesados</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Avaliação prévia pelo WhatsApp sempre que possível</span>
              </li>
              <li className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Isenção da taxa técnica quando o conserto é realizado no ato da visita</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Card Transparência com o Cliente */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="bg-[#111622] rounded-2xl p-6 sm:p-8 border border-gray-800 shadow-2xl relative">
              
              <h3 className="text-sm sm:text-base font-bold font-display uppercase tracking-wider text-white mb-6 flex items-center gap-2 border-b border-gray-800 pb-4">
                <span>Transparência com o Cliente</span>
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-gray-300">
                {/* Item 1: Taxa Técnica */}
                <div className="space-y-1.5">
                  <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Taxa Técnica de Deslocamento:</span>
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-[13px]">
                    Quando é necessária uma visita e o serviço não é realizado, poderá haver cobrança referente ao deslocamento e diagnóstico. Quando o conserto é aprovado e realizado no momento da visita, essa taxa é isenta, conforme as condições da empresa.
                  </p>
                </div>

                {/* Item 2: Garantia */}
                <div className="space-y-1.5">
                  <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-wa-green shrink-0" />
                    <span>Garantia de Serviços:</span>
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-[13px]">
                    As condições de garantia dos serviços seguem a legislação aplicável e as condições informadas no orçamento e/ou ordem de serviço.
                  </p>
                </div>

                {/* Item 3: Formas de Pagamento */}
                <div className="space-y-1.5">
                  <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Formas de Pagamento:</span>
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-[13px]">
                    Dinheiro, PIX e Cartão de crédito (parcelamento conforme condições comerciais).
                  </p>
                </div>
              </div>

              {/* WhatsApp Call to Action Button */}
              <div className="mt-8 pt-4 border-t border-gray-800">
                <a
                  id="btn-agendar-transparencia"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-3.5 px-5 rounded-xl text-sm sm:text-base shadow-lg transition-all active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 fill-black text-black" />
                  <span>Agendar atendimento no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
