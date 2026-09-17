import React from 'react';
import { MessageSquare, ArrowDown, ShieldCheck, Clock, Users, CreditCard, CheckCircle2, Sparkles } from 'lucide-react';
import { SparkleIcon } from './SparkleIcon';
import { createWhatsAppUrl } from '../data/revittaData';

export const Hero: React.FC = () => {
  const heroWhatsAppUrl = createWhatsAppUrl(
    "Olá! Vim pelo site da Revitta e gostaria de um orçamento sem compromisso."
  );

  const trustBadges = [
    {
      icon: Clock,
      title: "Desde 2020",
      sub: "Atuação contínua na Serra Gaúcha"
    },
    {
      icon: ShieldCheck,
      title: "Garantia de Serviços",
      sub: "Conforme legislação e O.S."
    },
    {
      icon: Users,
      title: "Atendimento no Local",
      sub: "Equipe própria sob agendamento"
    },
    {
      icon: CreditCard,
      title: "Pagamento Flexível",
      sub: "Dinheiro, PIX e cartão parcelado"
    }
  ];

  return (
    <section 
      id="inicio" 
      className="relative pt-2 sm:pt-4 lg:pt-6 pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-indigo-100/60 via-mist to-mist"
    >
      {/* Subtle architectural grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#170F3D 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Main Hero Copy - 7 cols on lg */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Top eyebrow with sparkle motif */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-700/10 border border-indigo-700/15 text-indigo-700 text-xs sm:text-sm font-semibold tracking-wide">
              <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
              <span>Caxias do Sul • Farroupilha • São Marcos • Flores da Cunha</span>
            </div>

            {/* H1 Title matching PRD §6 verbatim */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-indigo-950 leading-[1.18] tracking-tight font-display">
              Reformas e construção em Caxias do Sul com gestão completa da obra.
            </h1>

            {/* Subtitle matching PRD §6 verbatim */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
              Desde 2020, a Revitta resolve reformas residenciais e comerciais com equipe própria de eletricistas, encanadores, pedreiros e telhadistas. Orçamento sem compromisso e emergência 24h.
            </p>

            {/* Dual CTAs: Primary Green WhatsApp + Secondary Explore Services */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                id="hero-cta-whatsapp"
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-wa-green hover:bg-[#20bd5a] text-white font-extrabold text-base sm:text-lg px-7 py-4 rounded-2xl shadow-lg shadow-wa-green/25 hover:shadow-xl hover:shadow-wa-green/30 transition-all transform active:scale-98"
              >
                <MessageSquare className="w-6 h-6 fill-white text-white shrink-0" />
                <span>Chamar no WhatsApp</span>
              </a>

              <a
                id="hero-cta-servicos"
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-indigo-50/80 text-indigo-950 font-bold text-base px-6 py-4 rounded-2xl border border-indigo-200/80 shadow-sm hover:border-indigo-300 transition-all"
              >
                <span>Conhecer os serviços</span>
                <ArrowDown className="w-4 h-4 text-indigo-700" />
              </a>
            </div>

            {/* Quick Microcopy to reduce user friction (SXO requirement) */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 pt-1">
              <span className="flex items-center gap-1.5 font-medium text-indigo-950">
                <CheckCircle2 className="w-4 h-4 text-wa-green shrink-0" />
                Sem compromisso
              </span>
              <span className="flex items-center gap-1.5 font-medium text-indigo-950">
                <CheckCircle2 className="w-4 h-4 text-wa-green shrink-0" />
                Avaliação prévia pelo WhatsApp
              </span>
              <span className="flex items-center gap-1.5 font-medium text-indigo-950">
                <CheckCircle2 className="w-4 h-4 text-wa-green shrink-0" />
                Isenção de taxa no conserto aprovado
              </span>
            </div>
          </div>

          {/* Hero Visual Card / Proof Representation - 5 cols on lg */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-700/20 via-indigo-500/10 to-wa-green/15 rounded-3xl blur-xl" />

              <div className="relative bg-white rounded-2xl border border-indigo-100 shadow-xl overflow-hidden">
                {/* Visual Image Banner with Real Estate / High Grade Renovation Atmosphere */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-indigo-950">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                    alt="Reforma de alto padrão executada com gestão completa em Caxias do Sul"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/30 to-transparent" />
                  
                  {/* Floating badge inside image */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-950 shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
                    <span>Obra entregue no prazo</span>
                  </div>

                  {/* 24h Emergency Badge */}
                  <div className="absolute top-4 right-4 bg-indigo-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-white border border-indigo-500/40 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-wa-green animate-pulse" />
                    <span>Plantão 24h</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider text-indigo-200 font-bold">Padronização & Limpeza Diária</p>
                    <p className="text-sm font-semibold">Residencial, Comercial e Predial na Serra Gaúcha</p>
                  </div>
                </div>

                {/* Scope checklist below image */}
                <div className="p-5 sm:p-6 space-y-4 bg-white">
                  <div className="flex items-center justify-between border-b border-indigo-50 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Equipe Própria Especializada</span>
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full">+50 Especialistas</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs font-medium text-indigo-950">
                    <div className="flex items-center gap-2 bg-mist p-2.5 rounded-xl border border-indigo-50">
                      <div className="w-2 h-2 rounded-full bg-indigo-700" />
                      <span>Eletricistas certificados</span>
                    </div>
                    <div className="flex items-center gap-2 bg-mist p-2.5 rounded-xl border border-indigo-50">
                      <div className="w-2 h-2 rounded-full bg-indigo-700" />
                      <span>Encanadores 24h</span>
                    </div>
                    <div className="flex items-center gap-2 bg-mist p-2.5 rounded-xl border border-indigo-50">
                      <div className="w-2 h-2 rounded-full bg-indigo-700" />
                      <span>Pedreiros & Alvenaria</span>
                    </div>
                    <div className="flex items-center gap-2 bg-mist p-2.5 rounded-xl border border-indigo-50">
                      <div className="w-2 h-2 rounded-full bg-indigo-700" />
                      <span>Telhados & Calhas</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={heroWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-950 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors border border-indigo-200/60"
                    >
                      <span>Agendar atendimento no seu endereço</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust Badges (Selos) from PRD §6 */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-indigo-100 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-indigo-100/80 shadow-sm flex items-start gap-3.5 hover:border-indigo-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-indigo-950 leading-tight">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-snug">
                    {badge.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
