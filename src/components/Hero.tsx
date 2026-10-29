import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, ArrowRight, ShieldCheck, Clock, Users, 
  CreditCard, CheckCircle2, Sparkles, MapPin, Star, 
  Building2, Layers, Award, PhoneCall, ChevronRight
} from 'lucide-react';
import { SparkleIcon } from './SparkleIcon';
import { createWhatsAppUrl } from '../data/revittaData';

interface ShowcaseProject {
  id: string;
  category: string;
  title: string;
  location: string;
  specs: string;
  image: string;
  tag: string;
}

export const Hero: React.FC = () => {
  const heroWhatsAppUrl = createWhatsAppUrl();
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const showcaseProjects: ShowcaseProject[] = [
    {
      id: 'residencial',
      category: 'Residencial',
      title: 'Residencial de Alto Padrão',
      location: 'Bairro Panazzolo, Caxias do Sul',
      specs: 'Reforma completa · Acabamentos nobres · 240 m²',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80&fm=webp',
      tag: 'Entrega 100% no Prazo'
    },
    {
      id: 'comercial',
      category: 'Comercial',
      title: 'Clínica & Espaço Corporativo',
      location: 'Bairro Exposição, Caxias do Sul',
      specs: 'Adequação de normas · Elétrica trifásica · Drywall acústico',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80&fm=webp',
      tag: 'Isolamento & Canteiro Limpo'
    },
    {
      id: 'coberturas',
      category: 'Telhados & Coberturas',
      title: 'Proteção Climática & Fachadas',
      location: 'Serra Gaúcha',
      specs: 'Resistente a granizo · Impermeabilização total · Calhas',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80&fm=webp',
      tag: 'Garantia Contratual'
    }
  ];

  const currentProject = showcaseProjects[activeProjectIdx];

  const trustBadges = [
    {
      icon: Clock,
      title: "Desde 2020",
      sub: "Solidez e mais de 380 obras na Serra Gaúcha"
    },
    {
      icon: ShieldCheck,
      title: "Garantia Contratual",
      sub: "Prazo assinado em contrato e ART / RRT formal"
    },
    {
      icon: Users,
      title: "+50 Especialistas",
      sub: "Equipe própria, uniformizada e sem terceirização"
    },
    {
      icon: CreditCard,
      title: "Pagamento Flexível",
      sub: "PIX e cartões parcelados com nota fiscal"
    }
  ];

  const clientAvatars = [
    { name: 'Ricardo S.', city: 'Caxias do Sul', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80' },
    { name: 'Mariana B.', city: 'Farroupilha', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80' },
    { name: 'Carlos E.', city: 'Caxias do Sul', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
    { name: 'Patrícia M.', city: 'Flores da Cunha', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80' }
  ];

  return (
    <section 
      id="inicio" 
      className="relative overflow-hidden bg-gradient-to-b from-indigo-100/80 via-slate-50 to-mist"
      style={{ paddingTop: '30px', paddingBottom: '30px' }}
    >
      {/* Dynamic ambient lighting orbs with soft architectural glow */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-indigo-600/15 via-indigo-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-24 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Copy - 7 cols on lg */}
          <motion.div 
            className="lg:col-span-7 space-y-5 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top eyebrow with architectural location & live emergency tag */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-indigo-200/80 text-indigo-950 text-xs font-semibold tracking-wide shadow-xs backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-wa-green inline-block" />
                <span className="text-indigo-900 font-bold">Caxias do Sul e Região</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-600 font-medium">Fundada em 2020</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-950 text-white text-xs font-bold tracking-wide shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-wa-green animate-ping" />
                <span>Plantão 24h</span>
              </div>
            </div>

            {/* Exact H1 requested with font-display */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-indigo-950 leading-[1.12] tracking-tight font-display">
              Reformas e Construção em <span className="bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-950 bg-clip-text text-transparent">Caxias do Sul</span>
            </h1>

            {/* Reduced supporting line highlighting key points */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl font-normal">
              Obras residenciais e comerciais com <strong className="font-bold text-indigo-950">equipe própria</strong>, <strong className="font-bold text-indigo-950">prazo garantido em contrato</strong> e <strong className="font-bold text-indigo-950">orçamento transparente</strong> na Serra Gaúcha.
            </p>

            {/* Dual CTAs: High-Converting WhatsApp Button + Secondary Explore Services */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <motion.a
                id="hero-cta-whatsapp"
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-wa-green to-[#20bd5a] hover:from-[#20bd5a] hover:to-wa-green text-white font-extrabold text-base sm:text-lg px-7 py-4 rounded-2xl shadow-xl shadow-wa-green/30 hover:shadow-2xl hover:shadow-wa-green/45 transition-all cursor-pointer overflow-hidden"
              >
                {/* Subtle highlight sheen effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                
                <MessageSquare className="w-6 h-6 fill-white text-white shrink-0 group-hover:rotate-6 transition-transform" />
                <span className="relative z-10">Solicitar Orçamento no WhatsApp</span>
              </motion.a>

              <motion.a
                id="hero-cta-servicos"
                href="#obras"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-indigo-50/90 text-indigo-950 font-bold text-base px-6 py-4 rounded-2xl border border-indigo-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer backdrop-blur-sm"
              >
                <span>Conhecer nossos serviços</span>
                <ChevronRight className="w-4.5 h-4.5 text-indigo-700" />
              </motion.a>
            </div>

            {/* Social Proof & Google Rating Cluster */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-t border-indigo-200/60 mt-3">
              <div className="flex items-center gap-3">
                {/* Stack of customer avatars */}
                <div className="flex -space-x-2.5 overflow-hidden">
                  {clientAvatars.map((client, i) => (
                    <img 
                      key={i}
                      src={client.img}
                      alt={client.name}
                      width={36}
                      height={36}
                      className="inline-block w-9 h-9 rounded-full ring-2 ring-white object-cover shadow-xs"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="font-extrabold text-xs text-indigo-950 ml-1">4.9 / 5.0</span>
                  </div>
                  <p className="text-[11px] text-gray-600 font-medium mt-0.5">
                    Avaliações no Google Perfil de Empresa
                  </p>
                </div>
              </div>

              {/* Friction-free promises */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 sm:border-l sm:border-indigo-200/80 sm:pl-5">
                <span className="flex items-center gap-1 font-semibold text-indigo-950">
                  <CheckCircle2 className="w-3.5 h-3.5 text-wa-green shrink-0" />
                  Sem compromisso
                </span>
                <span className="flex items-center gap-1 font-semibold text-indigo-950">
                  <CheckCircle2 className="w-3.5 h-3.5 text-wa-green shrink-0" />
                  Canteiro sempre limpo
                </span>
                <span className="flex items-center gap-1 font-semibold text-indigo-950">
                  <CheckCircle2 className="w-3.5 h-3.5 text-wa-green shrink-0" />
                  Equipe própria (+50)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Card - 5 cols on lg: Innovative Showcase with Interactive Project Switcher */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Luxury ambient neon glow backplate */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-600/25 via-indigo-400/20 to-wa-green/20 rounded-3xl blur-2xl pointer-events-none" />

              {/* Main Architectural Glass Container */}
              <div className="relative bg-white/95 rounded-3xl border border-indigo-200/80 shadow-2xl shadow-indigo-950/15 overflow-hidden backdrop-blur-xl transition-all">
                
                {/* Category Switcher Tabs on top of Showcase */}
                <div className="p-2 sm:p-2.5 bg-indigo-950/95 border-b border-indigo-800/80 flex items-center justify-between gap-1">
                  {showcaseProjects.map((p, idx) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActiveProjectIdx(idx)}
                      className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center truncate ${
                        activeProjectIdx === idx 
                          ? 'bg-white text-indigo-950 shadow-md scale-101' 
                          : 'text-indigo-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {p.category}
                    </button>
                  ))}
                </div>

                {/* Dynamic Image Container with smooth cross-fade */}
                <div className="relative h-64 sm:h-76 w-full overflow-hidden bg-indigo-950">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentProject.id}
                      src={currentProject.image}
                      alt={currentProject.title}
                      width={720}
                      height={480}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                    />
                  </AnimatePresence>

                  {/* High-end cinematic scrim gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/40 to-black/20" />

                  {/* Top Floating Glass Badge: Guarantee & Tag */}
                  <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-indigo-950 shadow-lg flex items-center gap-1.5 border border-white/60">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-700" />
                    <span>{currentProject.tag}</span>
                  </div>

                  {/* Top Right: Technical Standards */}
                  <div className="absolute top-3.5 right-3.5 bg-indigo-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-white border border-indigo-500/40 flex items-center gap-1.5 shadow-md">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Padrão Revitta</span>
                  </div>

                  {/* Bottom Image Overlay Info */}
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-wa-green font-bold mb-0.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{currentProject.location}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      {currentProject.title}
                    </h3>
                    <p className="text-xs text-indigo-200 mt-0.5">
                      {currentProject.specs}
                    </p>
                  </div>
                </div>

                {/* Architectural Scope & Live Technical Capacity Footprint */}
                <div className="p-5 sm:p-6 space-y-4 bg-white">
                  <div className="flex items-center justify-between border-b border-indigo-100/90 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-wa-green animate-pulse" />
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-950">Equipe Própria Revitta</span>
                    </div>
                    <span className="text-xs font-extrabold text-indigo-800 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                      +50 Especialistas Ativos
                    </span>
                  </div>

                  {/* 4 Specialized Craft Badges */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-indigo-950">
                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-indigo-100/80 hover:border-indigo-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-700" />
                      <span>Elétrica & Hidráulica</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-indigo-100/80 hover:border-indigo-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-700" />
                      <span>Alvenaria & Revestimentos</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-indigo-100/80 hover:border-indigo-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-700" />
                      <span>Pintura & Drywall Fino</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-indigo-100/80 hover:border-indigo-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-700" />
                      <span>Telhados & Calhas</span>
                    </div>
                  </div>

                  {/* Direct WhatsApp Technical Consultation Link */}
                  <div className="pt-1">
                    <a
                      href={heroWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-indigo-900 hover:bg-indigo-950 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
                    >
                      <PhoneCall className="w-4 h-4 text-wa-green" />
                      <span>Agendar visita técnica no seu endereço</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Architectural Trust Pillars - Redesigned with Luxury Finish */}
        <h2 className="sr-only">Diferenciais e Compromisso Revitta em Caxias do Sul</h2>
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-indigo-200/80 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
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
                className="bg-white/90 p-4 sm:p-5 rounded-2xl border border-indigo-100 shadow-sm flex flex-col items-start sm:flex-row sm:items-start gap-3 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-950/5 transition-all h-full backdrop-blur-sm group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-indigo-50 border border-indigo-100/80 flex items-center justify-center text-indigo-700 shrink-0 group-hover:bg-indigo-900 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="min-w-0 w-full">
                  <h3 className="text-xs sm:text-sm lg:text-base font-bold text-indigo-950 leading-snug">
                    {badge.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-600 mt-1 leading-relaxed">
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
