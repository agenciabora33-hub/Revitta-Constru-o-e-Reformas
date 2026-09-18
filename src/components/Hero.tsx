import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowDown, ShieldCheck, Clock, Users, CreditCard, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { SparkleIcon } from './SparkleIcon';
import { createWhatsAppUrl } from '../data/revittaData';

export const Hero: React.FC = () => {
  const heroWhatsAppUrl = createWhatsAppUrl(
    "Olá! Vim pelo site da Revitta e gostaria de um orçamento para obra/reforma em Caxias do Sul e região."
  );

  const trustBadges = [
    {
      icon: Clock,
      title: "Desde 2020",
      sub: "Solidez comprovada na Serra Gaúcha"
    },
    {
      icon: ShieldCheck,
      title: "Garantia Contratual",
      sub: "Entrega no prazo e respaldo formal"
    },
    {
      icon: Users,
      title: "+50 Especialistas",
      sub: "Equipe própria, uniformizada e pontual"
    },
    {
      icon: CreditCard,
      title: "Pagamento Flexível",
      sub: "PIX e cartões de crédito parcelado"
    }
  ];

  return (
    <section 
      id="inicio" 
      className="relative pt-3 sm:pt-6 lg:pt-8 pb-12 lg:pb-18 overflow-hidden bg-gradient-to-b from-indigo-100/70 via-mist to-mist"
    >
      {/* Subtle architectural ambient lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-indigo-700/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-5 w-72 h-72 bg-wa-green/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle architectural grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#170F3D 1.2px, transparent 1.2px)`,
          backgroundSize: '28px 28px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Hero Copy - 7 cols on lg */}
          <motion.div 
            className="lg:col-span-7 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top eyebrow with sparkle motif */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-900/10 border border-indigo-700/20 text-indigo-900 text-xs sm:text-sm font-semibold tracking-wide shadow-sm"
            >
              <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
              <span>Caxias do Sul • Farroupilha • Flores da Cunha • São Marcos</span>
            </motion.div>

            {/* H1 Title with local SEO and luxury agency presence */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-bold text-indigo-950 leading-[1.16] tracking-tight font-display">
              Reformas e construção de alto padrão em <span className="text-indigo-700 underline decoration-wa-green/60 decoration-wavy decoration-2 underline-offset-4">Caxias do Sul</span> com gestão completa.
            </h1>

            {/* Subtitle addressing local realities: Serra Gaúcha climate, punctuality, clean jobsite */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
              Desde abril de 2020, a Revitta transforma imóveis residenciais, comerciais e industriais na Serra Gaúcha. Equipe própria com mais de 50 especialistas em elétrica, hidráulica, telhados e acabamentos resistentes ao frio e umidade da serra. Canteiro limpo, orçamento transparente e pontualidade rigorosa.
            </p>

            {/* Dual CTAs: Primary Green WhatsApp + Secondary Explore Services */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <motion.a
                id="hero-cta-whatsapp"
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-wa-green hover:bg-[#20bd5a] text-white font-extrabold text-base sm:text-lg px-7 py-4 rounded-2xl shadow-lg shadow-wa-green/25 hover:shadow-xl hover:shadow-wa-green/35 transition-all cursor-pointer"
              >
                <MessageSquare className="w-6 h-6 fill-white text-white shrink-0" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </motion.a>

              <motion.a
                id="hero-cta-servicos"
                href="#servicos"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-indigo-50/80 text-indigo-950 font-bold text-base px-6 py-4 rounded-2xl border border-indigo-200/90 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer"
              >
                <span>Conhecer nossos serviços</span>
                <ArrowDown className="w-4 h-4 text-indigo-700" />
              </motion.a>
            </div>

            {/* Quick Microcopy to eliminate friction */}
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
          </motion.div>

          {/* Hero Visual Card / Proof Representation with Subtle Life Motion - 5 cols on lg */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative luxury gradient aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-700/20 via-indigo-500/15 to-wa-green/20 rounded-3xl blur-2xl pointer-events-none" />

              <div className="relative bg-white rounded-3xl border border-indigo-100 shadow-2xl shadow-indigo-950/10 overflow-hidden">
                {/* Visual Image Banner with Subtle Alive Motion */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-indigo-950">
                  <motion.img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                    alt="Reforma de alto padrão executada pela Revitta em Caxias do Sul"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                    animate={{
                      scale: [1, 1.035, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/95 via-indigo-950/35 to-transparent" />
                  
                  {/* Floating badge inside image with subtle float */}
                  <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-950 shadow-md flex items-center gap-1.5 border border-white/60"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
                    <span>Padrão Serra Gaúcha • No Prazo</span>
                  </motion.div>

                  {/* 24h Emergency Badge */}
                  <div className="absolute top-4 right-4 bg-indigo-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-white border border-indigo-500/40 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-wa-green animate-ping" />
                    <span>Plantão 24h</span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-indigo-200 font-bold mb-0.5">
                      <MapPin className="w-3 h-3 text-wa-green" />
                      <span>Caxias do Sul & Região</span>
                    </div>
                    <p className="text-sm font-semibold text-white/95">
                      Residencial, Comercial e Predial com Canteiro Limpo
                    </p>
                  </div>
                </div>

                {/* Scope checklist below image */}
                <div className="p-5 sm:p-6 space-y-4 bg-white">
                  <div className="flex items-center justify-between border-b border-indigo-50 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Equipe Própria Revitta</span>
                    <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                      +50 Especialistas
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs font-medium text-indigo-950">
                    <div className="flex items-center gap-2 bg-mist p-2.5 rounded-xl border border-indigo-100/60">
                      <div className="w-2 h-2 rounded-full bg-indigo-700" />
                      <span>Eletricistas certificados</span>
                    </div>
                    <div className="flex items-center gap-2 bg-mist p-2.5 rounded-xl border border-indigo-100/60">
                      <div className="w-2 h-2 rounded-full bg-indigo-700" />
                      <span>Encanamento & Caça-vazamentos</span>
                    </div>
                    <div className="flex items-center gap-2 bg-mist p-2.5 rounded-xl border border-indigo-100/60">
                      <div className="w-2 h-2 rounded-full bg-indigo-700" />
                      <span>Alvenaria & Revestimentos</span>
                    </div>
                    <div className="flex items-center gap-2 bg-mist p-2.5 rounded-xl border border-indigo-100/60">
                      <div className="w-2 h-2 rounded-full bg-indigo-700" />
                      <span>Telhados, Calhas & Impermeabilização</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={heroWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100/80 text-indigo-950 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all border border-indigo-200/70 hover:shadow-sm active:scale-98"
                    >
                      <span>Agendar visita técnica no seu imóvel</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Trust Badges (Selos) - Mobile First: Icons on top of text on mobile, staggered hover */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-indigo-100/90 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white p-3.5 sm:p-5 rounded-2xl border border-indigo-100/90 shadow-sm flex flex-col items-start sm:flex-row sm:items-start gap-2.5 sm:gap-3.5 hover:border-indigo-300 hover:shadow-md transition-all h-full"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-100/80 flex items-center justify-center text-indigo-700 shrink-0">
                  <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 w-full">
                  <h4 className="text-xs sm:text-sm lg:text-base font-bold text-indigo-950 leading-snug">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-600 mt-1 sm:mt-0.5 leading-snug">
                    {badge.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
