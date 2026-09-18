import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, Zap, Droplets, Home, Layers, Maximize2, 
  Paintbrush, Hammer, ShieldCheck, Wrench, MessageSquare, 
  ArrowRight, Check, MapPin, Sparkles, Filter 
} from 'lucide-react';
import { SERVICES, CITIES, createWhatsAppUrl, createServiceCityWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { SectionReveal } from './SectionReveal';

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
    <section id="servicos" className="py-20 sm:py-24 bg-mist relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reveal */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/90 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3 border border-indigo-200/50">
              <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
              <span>Soluções Especializadas em Caxias do Sul</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-indigo-950 tracking-tight">
              Obras e reformas sob medida para o padrão da Serra Gaúcha
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
              Equipe própria para instalações elétricas, hidráulica, reformas completas, telhados resistentes a granizo e ventanias, e acabamentos finos. Atendimento rápido em Caxias do Sul, Farroupilha, Flores da Cunha e São Marcos.
            </p>

            {/* Interactive Fast Estimator Selector Tool (Specified in PRD §8) */}
            <div className="mt-8 p-6 sm:p-7 bg-white rounded-3xl border border-indigo-100 shadow-xl shadow-indigo-950/5 text-left transition-all hover:shadow-2xl hover:shadow-indigo-950/10">
              <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm sm:text-base mb-2">
                <Sparkles className="w-4.5 h-4.5 text-wa-green" />
                <span>Simulador Rápido de Orçamento por Cidade</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">
                Selecione o serviço e sua cidade para gerar o link direto do WhatsApp já com a solicitação técnica pré-preenchida:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-center">
                {/* Service selector */}
                <div>
                  <label htmlFor="service-select" className="block text-xs font-bold text-indigo-950 mb-1.5 uppercase tracking-wide">
                    Serviço Solicitado
                  </label>
                  <select
                    id="service-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-mist border border-indigo-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-indigo-950 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-700 cursor-pointer"
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
                  <label htmlFor="city-select" className="block text-xs font-bold text-indigo-950 mb-1.5 uppercase tracking-wide">
                    Cidade de Atendimento:
                  </label>
                  <select
                    id="city-select"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-mist border border-indigo-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-indigo-950 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-700 cursor-pointer"
                  >
                    {CITIES.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name} (RS)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Action Button */}
                <div className="md:pt-5">
                  <motion.a
                    id="btn-fast-whatsapp-selector"
                    href={fastWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Pedir Proposta no WhatsApp</span>
                  </motion.a>
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-indigo-50 flex items-center gap-2 text-xs text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
                <span>Atendimento presencial em todos os bairros de Caxias do Sul e cidades conurbadas da Serra</span>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-indigo-700 text-white shadow-md shadow-indigo-700/20'
                      : 'bg-white text-indigo-950 hover:bg-indigo-50 border border-indigo-100 shadow-sm'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* 10 Services Grid with Motion Stagger & Luxury Card Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Building2;
            const prefilledMessage = `Olá! Gostaria de um orçamento para ${service.title} em Caxias do Sul e região. (Vim pelo site da Revitta)`;
            const serviceWaUrl = createWhatsAppUrl(prefilledMessage);

            return (
              <motion.div
                key={service.id}
                id={`card-servico-${service.id}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-indigo-100 shadow-sm hover:shadow-xl hover:shadow-indigo-950/8 hover:border-indigo-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-100/80 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-700 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {service.popular && (
                      <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
                        Mais Solicitado na Serra
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
                      <span>Ver especificações e normas técnicas</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <motion.a
                    href={serviceWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer"
                    aria-label={`Orçar ${service.title} no WhatsApp`}
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Orçar este serviço</span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
