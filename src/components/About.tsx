import React from 'react';
import { motion } from 'motion/react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { ShieldCheck, HardHat, FileCheck2, Sparkles, Building, CheckCircle2, MessageSquare } from 'lucide-react';
import { SectionReveal } from './SectionReveal';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Visual Column - 5 cols with Reveal */}
          <div className="lg:col-span-5 space-y-4">
            <SectionReveal yOffset={20}>
              <div className="relative">
                {/* Decorative brand backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-100 to-indigo-50 rounded-3xl -rotate-1 pointer-events-none" />
                
                <div className="relative bg-indigo-950 rounded-3xl overflow-hidden border border-indigo-900 shadow-2xl shadow-indigo-950/20">
                  <figure className="relative bg-gradient-to-b from-indigo-900/95 to-indigo-950 flex flex-col items-center justify-center p-6 sm:p-8 overflow-hidden border-b border-indigo-800/60">
                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-white/5 border border-indigo-700/40 p-3 shadow-xl flex items-center justify-center">
                      <img
                        src="https://i.ibb.co/JW3xbYLb/Logo-Revitta.png"
                        alt="Revitta Reformas e Construção em Caxias do Sul"
                        className="w-full h-full object-contain filter drop-shadow-md"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/logo-revitta.png";
                        }}
                      />
                    </div>
                  </figure>

                  <div className="p-5 sm:p-6 bg-indigo-950 text-white space-y-3">
                    <div className="flex items-center justify-between text-xs border-b border-indigo-800/80 pb-2.5">
                      <span className="text-indigo-300 font-semibold">Empresa Registrada</span>
                      <span className="text-wa-green font-bold">CNPJ 50.463.095/0001-58</span>
                    </div>
                    <div className="flex items-center justify-between text-xs border-b border-indigo-800/60 pb-2.5">
                      <span className="text-indigo-300">Fundação</span>
                      <span className="font-bold text-white">Abril de 2020 (Caxias do Sul - RS)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-indigo-300">Sede & Atuação Regional</span>
                      <span className="font-bold text-indigo-200">Caxias do Sul e Serra Gaúcha</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality assurance pill */}
              <div className="mt-4 bg-mist p-4 rounded-2xl border border-indigo-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-wa-green/15 text-wa-green flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-wa-green" />
                </div>
                <p className="text-xs text-indigo-950 font-medium leading-relaxed">
                  Garantia legal e contratual em todas as ordens de serviço, com emissão de nota fiscal e assistência pós-obra na Serra Gaúcha.
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Text Content Column - 7 cols with Reveal */}
          <div className="lg:col-span-7 space-y-6">
            <SectionReveal delay={0.15}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/90 text-indigo-700 text-xs font-bold tracking-wide uppercase border border-indigo-200/50">
                <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
                <span>Tradição & Confiança Local</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-indigo-950 tracking-tight mt-3">
                A Revitta nasceu para transformar a experiência de reformar na Serra Gaúcha
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mt-4">
                A Revitta nasceu em abril de 2020, em Caxias do Sul, com um compromisso inegociável: gerir reformas com seriedade, pontualidade caxiense e transparência total. Hoje somos mais de 50 especialistas entre eletricistas certificados, encanadores, pedreiros, telhadistas e pintores, atendendo apartamentos, casas e indústrias em toda a Serra Gaúcha. Trabalhamos com materiais de ponta, isolamento adequado e canteiro sempre limpo.
              </p>

              {/* Four Commitment Cards with subtle motion lift */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-4">
                <motion.div 
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-2xl bg-mist border border-indigo-100/80 flex items-start gap-3 transition-all hover:border-indigo-300 hover:shadow-md"
                >
                  <CheckCircle2 className="w-5 h-5 text-wa-green shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-indigo-950">Gestão com Equipe Própria</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">Mais de 50 especialistas uniformizados, com treinamento e foco na segurança do seu imóvel.</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-2xl bg-mist border border-indigo-100/80 flex items-start gap-3 transition-all hover:border-indigo-300 hover:shadow-md"
                >
                  <CheckCircle2 className="w-5 h-5 text-wa-green shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-indigo-950">Limpeza e Respeito Diário</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">Isolamento rigoroso de poeira e recolhimento de entulhos diariamente ao final do expediente.</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-2xl bg-mist border border-indigo-100/80 flex items-start gap-3 transition-all hover:border-indigo-300 hover:shadow-md"
                >
                  <CheckCircle2 className="w-5 h-5 text-wa-green shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-indigo-950">Materiais para o Clima Serrano</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">Soluções resistentes ao frio, mofo e umidade com marcas de primeira linha e excelente custo-benefício.</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-2xl bg-mist border border-indigo-100/80 flex items-start gap-3 transition-all hover:border-indigo-300 hover:shadow-md"
                >
                  <CheckCircle2 className="w-5 h-5 text-wa-green shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-indigo-950">Garantia & Plantão 24h</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">Assistência contínua com canal direto de suporte pós-obra para sua total tranquilidade.</p>
                  </div>
                </motion.div>
              </div>

              {/* Centered CTA as requested */}
              <div className="pt-6 flex justify-center">
                <motion.a
                  href={createWhatsAppUrl("Olá! Gostaria de conversar com a equipe técnica da Revitta sobre um projeto em Caxias do Sul e região.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2.5 bg-indigo-900 hover:bg-indigo-950 text-white font-extrabold py-4 px-8 rounded-2xl text-sm transition-all shadow-md hover:shadow-xl active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-4.5 h-4.5 text-wa-green" />
                  <span>Conversar com a Equipe Técnica no WhatsApp</span>
                </motion.a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
