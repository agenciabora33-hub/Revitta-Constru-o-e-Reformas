import React, { useState } from 'react';
import { 
  Building2, Zap, Droplets, Home, Layers, Maximize2, 
  Paintbrush, Hammer, ShieldCheck, Wrench, MessageSquare, 
  ArrowRight, Check, MapPin, Sparkles, Filter 
} from 'lucide-react';
import { SERVICES, CITIES, createWhatsAppUrl, createServiceCityWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';

// Map icon names to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Building2,
  Zap,
  Droplets,
  Home,
  Layers,
  Maximize2,
  Paintbrush,
  Hammer,
  ShieldCheck,
  Wrench
};

interface ServicesProps {
  onSelectService?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  // Category filter state
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  
  // Interactive Service + City selector states (PRD §8)
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].title);
  const [selectedCity, setSelectedCity] = useState<string>(CITIES[0].name);

  const categories = [
    { id: 'todos', label: 'Todos os 10 serviços' },
    { id: 'civil', label: 'Construção & Civil' },
    { id: 'instalacoes', label: 'Elétrica & Hidráulica' },
    { id: 'acabamentos', label: 'Pisos, Drywall & Pintura' },
    { id: 'manutencao', label: 'Manutenção & Reparos' },
  ];

  const filteredServices = activeCategory === 'todos' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const fastWhatsAppUrl = createServiceCityWhatsAppUrl(selectedService, selectedCity);

  return (
    <section id="servicos" className="py-20 bg-mist relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3">
            <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
            <span>Catálogo Completo de Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-indigo-950 tracking-tight">
            Soluções completas para sua reforma ou construção
          </h2>
          <p className="text-base text-gray-600 mt-4 leading-relaxed">
            Equipe própria e capacitada na Serra Gaúcha. Clique em qualquer serviço para abrir a conversa no WhatsApp já com a mensagem pronta.
          </p>

          {/* Interactive Fast Estimator Selector Tool (Specified in PRD §8) */}
          <div className="mt-8 p-6 bg-white rounded-2xl border border-indigo-200/80 shadow-md text-left">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm mb-3">
              <Sparkles className="w-4 h-4 text-wa-green" />
              <span>Seletor Rápido de Orçamento (WhatsApp Direto)</span>
            </div>
            <p className="text-xs text-gray-600 mb-4">
              Selecione o serviço e sua cidade para gerar seu link de WhatsApp personalizado instantaneamente:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
              {/* Service selector */}
              <div>
                <label htmlFor="service-select" className="block text-xs font-semibold text-indigo-950 mb-1">
                  Qual serviço você precisa?
                </label>
                <select
                  id="service-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-mist border border-indigo-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-indigo-950 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-700"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* City selector */}
              <div>
                <label htmlFor="city-select" className="block text-xs font-semibold text-indigo-950 mb-1">
                  Cidade de atendimento:
                </label>
                <select
                  id="city-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full bg-mist border border-indigo-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-indigo-950 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-700"
                >
                  {CITIES.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name} ({c.cep})
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Button */}
              <div className="md:pt-5">
                <a
                  id="btn-fast-whatsapp-selector"
                  href={fastWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Pedir Orçamento Agora</span>
                </a>
              </div>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-indigo-700 text-white shadow-sm'
                    : 'bg-white text-indigo-950 hover:bg-indigo-100/60 border border-indigo-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Building2;
            const prefilledMessage = `Olá! Gostaria de um orçamento para ${service.title} em Caxias do Sul e região. (Vim pelo site da Revitta)`;
            const serviceWaUrl = createWhatsAppUrl(prefilledMessage);

            return (
              <div
                key={service.id}
                id={`card-servico-${service.id}`}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-indigo-100/90 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-700 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {service.popular && (
                      <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                        Mais Solicitado
                      </span>
                    )}
                  </div>

                  {/* Title & Descriptions */}
                  <h3 className="text-lg sm:text-xl font-bold font-display text-indigo-950 group-hover:text-indigo-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <p className="text-xs text-gray-600/90 mt-2 font-normal leading-relaxed border-t border-indigo-50 pt-2">
                    {service.longDesc}
                  </p>

                  {/* Highlights checklist */}
                  <div className="mt-4 space-y-1.5 border-t border-indigo-50 pt-3">
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-indigo-950">
                        <Check className="w-3.5 h-3.5 text-wa-green shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation and WhatsApp CTA */}
                <div className="mt-6 pt-4 border-t border-indigo-100 space-y-2.5">
                  {onSelectService && (
                    <button
                      type="button"
                      onClick={() => onSelectService(service.id)}
                      className="w-full flex items-center justify-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-950 py-1.5 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
                    >
                      <span>Ver página completa e normas ABNT</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <a
                    href={serviceWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md transition-all active:scale-98"
                    aria-label={`Orçar ${service.title} no WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Orçar este serviço</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
