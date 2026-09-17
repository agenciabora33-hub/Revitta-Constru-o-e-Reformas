import React from 'react';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { ShieldCheck, HardHat, FileCheck2, Sparkles, Building, CheckCircle2, MessageSquare } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Visual Column - 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              {/* Decorative brand backdrop */}
              <div className="absolute -inset-2 bg-indigo-100 rounded-3xl -rotate-1 pointer-events-none" />
              
              <div className="relative bg-indigo-950 rounded-2xl overflow-hidden border border-indigo-900 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=800&q=80"
                  alt="Equipe técnica Revitta em obra de reforma e construção na Serra Gaúcha"
                  className="w-full h-80 object-cover object-center opacity-90"
                  loading="lazy"
                />
                <div className="p-5 bg-indigo-950 text-white space-y-3">
                  <div className="flex items-center justify-between text-xs border-b border-indigo-800 pb-2.5">
                    <span className="text-indigo-300 font-semibold">Empresa Registrada</span>
                    <span className="text-wa-green font-bold">CNPJ 50.463.095/0001-58</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-indigo-300">Fundação</span>
                    <span className="font-bold text-white">Abril de 2020 (Caxias do Sul - RS)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-indigo-300">Responsável Técnico</span>
                    <span className="font-bold text-indigo-200">{COMPANY_INFO.technicalManagerPlaceholder}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality assurance pill */}
            <div className="bg-mist p-4 rounded-2xl border border-indigo-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-wa-green/15 text-wa-green-dark flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-wa-green" />
              </div>
              <p className="text-xs text-indigo-950 font-medium">
                Garantia legal e contratual em todas as ordens de serviço, com emissão de nota fiscal e assistência pós-obra.
              </p>
            </div>
          </div>

          {/* Text Content Column - 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase">
              <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
              <span>E-E-A-T & Autoridade Técnica</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-indigo-950 tracking-tight">
              A Revitta nasceu para transformar a experiência de reformar na Serra Gaúcha
            </h2>

            {/* Paragraph verbatim from PRD §6 */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              A Revitta nasceu em abril de 2020, em Caxias do Sul, com uma missão clara: gestionar obras de reforma com transparência do orçamento à entrega. Hoje somos mais de 50 especialistas entre eletricistas, encanadores, pedreiros, pintores e telhadistas, atendendo residências, comércios e indústrias na Serra Gaúcha. Responsável técnico: <strong className="text-indigo-950 font-semibold">{COMPANY_INFO.technicalManagerPlaceholder}</strong>. Trabalhamos com materiais de alta qualidade, segurança em cada etapa e garantia contratual.
            </p>

            {/* Four Commitment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-mist border border-indigo-50 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-wa-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-indigo-950">Gestão com Equipe Própria</h4>
                  <p className="text-xs text-gray-600 mt-1">Especialistas uniformizados e alinhados aos mais rigorosos padrões de segurança.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-mist border border-indigo-50 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-wa-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-indigo-950">Limpeza e Respeito Diário</h4>
                  <p className="text-xs text-gray-600 mt-1">Isolamento adequado das áreas não afetadas e recolhimento de resíduos ao final do dia.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-mist border border-indigo-50 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-wa-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-indigo-950">Materiais de Alta Qualidade</h4>
                  <p className="text-xs text-gray-600 mt-1">Trabalhamos com marcas consagradas e orientamos a melhor compra para o seu bolso.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-mist border border-indigo-50 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-wa-green shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-indigo-950">Suporte e Pós-Obra 24h</h4>
                  <p className="text-xs text-gray-600 mt-1">Canal aberto no WhatsApp direto para manutenções preventivas ou emergências.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={createWhatsAppUrl("Olá! Gostaria de conversar com a equipe técnica da Revitta sobre um projeto.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar com a Equipe Técnica</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
