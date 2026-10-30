import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, ShieldCheck, Clock, Users, 
  CreditCard, CheckCircle2, Star, 
  ChevronRight, Play, Pause, Volume2, VolumeX
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/revittaData';

export const Hero: React.FC = () => {
  const heroWhatsAppUrl = createWhatsAppUrl();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
      className="relative overflow-hidden bg-slate-950 text-white min-h-[580px] sm:min-h-[640px] flex flex-col justify-center"
      style={{ paddingTop: '30px', paddingBottom: '30px' }}
    >
      {/* Background Video with Cinematic Scrims */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80&fm=webp"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        >
          <source src="/assets/aistudio/V_deo_Banheiro_7127e1ad.mp4" type="video/mp4" />
        </video>

        {/* Balanced cinematic scrim to ensure crystal-clear video visibility while maintaining text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/15 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/65" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Video Status & Controls Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-white text-xs font-semibold tracking-wide shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-wa-green inline-block" />
              <span className="text-slate-100 font-bold">Caxias do Sul e Região</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 font-medium">Desde 2020</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-wa-green/20 border border-wa-green/40 text-wa-green text-xs font-bold tracking-wide shadow-xs backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-wa-green animate-ping" />
              <span>Plantão 24h</span>
            </div>
          </div>

          {/* Interactive Video Control Widget */}
          <div className="hidden sm:inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700/80 px-3 py-1.5 rounded-full text-xs text-slate-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-wa-green animate-pulse" />
            <span className="font-semibold text-slate-200">Reforma em Ação</span>
            <span className="text-slate-600">·</span>
            <button 
              type="button"
              onClick={togglePlay}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer focus:outline-none"
              title={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
              aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-slate-300" /> : <Play className="w-3.5 h-3.5 text-wa-green" />}
              <span>{isPlaying ? 'Pausar' : 'Play'}</span>
            </button>
            <span className="text-slate-600">·</span>
            <button 
              type="button"
              onClick={toggleMute}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer focus:outline-none"
              title={isMuted ? "Ativar som" : "Desativar som"}
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-slate-400" /> : <Volume2 className="w-3.5 h-3.5 text-wa-green" />}
              <span>{isMuted ? 'Mudo' : 'Som'}</span>
            </button>
          </div>
        </div>

        {/* Main Hero Copy - Spacious & Elegant */}
        <div className="max-w-3xl lg:max-w-4xl py-4 sm:py-6">
          <motion.div 
            className="space-y-5 sm:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Exact H1 requested with font-display */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.12] tracking-tight font-display drop-shadow-lg">
              Reformas e Construção em <span className="text-wa-green drop-shadow-md">Caxias do Sul</span>
            </h1>

            {/* Reduced supporting line highlighting key points */}
            <p className="text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed max-w-2xl font-medium drop-shadow-md">
              Obras residenciais e comerciais com <strong className="font-bold text-white">equipe própria</strong>, <strong className="font-bold text-white">prazo garantido em contrato</strong> e <strong className="font-bold text-white">orçamento transparente</strong> na Serra Gaúcha.
            </p>

            {/* Dual CTAs: High-Converting WhatsApp Button + Secondary Explore Services */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <motion.a
                id="hero-cta-whatsapp"
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-wa-green to-[#20bd5a] hover:from-[#20bd5a] hover:to-wa-green text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-wa-green/35 hover:shadow-2xl hover:shadow-wa-green/50 transition-all cursor-pointer overflow-hidden"
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
                className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base px-6 py-4 rounded-2xl border border-slate-700/80 shadow-md hover:border-slate-500 hover:shadow-lg transition-all cursor-pointer backdrop-blur-md"
              >
                <span>Conhecer nossos serviços</span>
                <ChevronRight className="w-4.5 h-4.5 text-wa-green" />
              </motion.a>
            </div>

            {/* Social Proof & Google Rating Cluster */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-t border-slate-800/80 mt-4">
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
                      className="inline-block w-9 h-9 rounded-full ring-2 ring-slate-900 object-cover shadow-xs"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="font-extrabold text-xs text-white ml-1">4.9 / 5.0</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">
                    Avaliações no Google Perfil de Empresa
                  </p>
                </div>
              </div>

              {/* Friction-free promises */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-300 sm:border-l sm:border-slate-800 sm:pl-6">
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-wa-green shrink-0" />
                  Sem compromisso
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-wa-green shrink-0" />
                  Canteiro sempre limpo
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-white">
                  <CheckCircle2 className="w-4 h-4 text-wa-green shrink-0" />
                  Equipe própria (+50)
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Architectural Trust Pillars */}
        <h2 className="sr-only">Diferenciais e Compromisso Revitta em Caxias do Sul</h2>
        <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
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
                className="bg-slate-900/70 border border-slate-800/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg flex flex-col items-start sm:flex-row sm:items-start gap-3 hover:border-slate-600 hover:bg-slate-900/90 transition-all h-full group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-wa-green shrink-0 group-hover:bg-wa-green group-hover:text-slate-950 transition-colors duration-300">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="min-w-0 w-full">
                  <h3 className="text-xs sm:text-sm lg:text-base font-bold text-white leading-snug">
                    {badge.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed">
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
