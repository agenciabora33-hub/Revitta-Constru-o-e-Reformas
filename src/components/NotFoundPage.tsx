import React from 'react';
import { Home, ArrowLeft, Wrench, Building2, Zap, Droplets, Hammer, Paintbrush, MessageSquare } from 'lucide-react';
import { createWhatsAppUrl } from '../data/revittaData';

export const NotFoundPage: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl();

  const quickServices = [
    { title: 'Reformas Residenciais', href: '/reformas-residenciais-caxias-do-sul/' },
    { title: 'Reformas Comerciais', href: '/reformas-comerciais-caxias-do-sul/' },
    { title: 'Eletricista 24h', href: '/eletricista-caxias-do-sul/' },
    { title: 'Encanador & Caça-Vazamentos', href: '/encanador-caxias-do-sul/' },
    { title: 'Pedreiro & Alvenaria', href: '/pedreiro-caxias-do-sul/' },
    { title: 'Pintura & Drywall', href: '/pintor-caxias-do-sul/' },
  ];

  return (
    <div className="min-h-[70vh] bg-mist flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-2xl bg-white rounded-3xl p-8 sm:p-12 border border-indigo-100 shadow-xl shadow-indigo-950/5 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-bold uppercase tracking-wider mb-6">
          <Wrench className="w-3.5 h-3.5 text-indigo-700" />
          <span>Erro 404 • Página Não Encontrada</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-indigo-950 tracking-tight mb-4">
          Página não encontrada
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto">
          O link que você tentou acessar não existe ou foi atualizado. Conheça nossos serviços de reformas, manutenção e construção em Caxias do Sul:
        </p>

        {/* Quick Links to Real Services */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-semibold mb-8 text-left">
          {quickServices.map((srv) => (
            <a
              key={srv.href}
              href={srv.href}
              className="p-3 rounded-xl bg-indigo-50/60 hover:bg-indigo-100/80 border border-indigo-100 text-indigo-950 hover:text-indigo-800 transition-colors flex items-center justify-between"
            >
              <span>{srv.title}</span>
              <span className="text-indigo-400">→</span>
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-900 hover:bg-indigo-950 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Ir para a Página Inicial</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-white text-white" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
