import React, { useState, useEffect } from 'react';
import { 
  Building2, Zap, Droplets, Home, Layers, Maximize2, 
  Paintbrush, Hammer, ShieldCheck, Wrench, ArrowLeft, 
  MessageSquare, Phone, CheckCircle2, Award, FileText, 
  Sparkles, MapPin, ChevronRight, HelpCircle, ArrowRight,
  Shield, Check, Clock, AlertCircle
} from 'lucide-react';
import { ServiceDetailed } from '../types';
import { DETAILED_SERVICES } from '../data/servicesDetailedData';
import { COMPANY_INFO, CITIES, createWhatsAppUrl, BEFORE_AFTER_ITEMS } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { AtendimentoTransparencia } from './AtendimentoTransparencia';

const iconComponents: Record<string, React.ElementType> = {
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

interface ServicePageProps {
  service: ServiceDetailed;
  onBackToHome: () => void;
  onNavigateToService: (serviceId: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ 
  service, 
  onBackToHome,
  onNavigateToService 
}) => {
  const [selectedCity, setSelectedCity] = useState<string>(CITIES[0].name);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Dynamic SEO, Title, Meta and Schema.org injection
  useEffect(() => {
    const originalTitle = document.title;
    document.title = service.seoTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', service.seoDescription);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', service.seoDescription);
      document.head.appendChild(metaDesc);
    }

    // Schema.org Service, BreadcrumbList & FAQPage
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'service-structured-data';
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${service.canonicalUrl}#service`,
          "name": service.title,
          "serviceType": service.categoryLabel,
          "description": service.geoDirectAnswer,
          "provider": {
            "@type": "GeneralContractor",
            "name": COMPANY_INFO.brand,
            "url": COMPANY_INFO.website,
            "telephone": `+${COMPANY_INFO.phoneRaw}`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": COMPANY_INFO.address,
              "addressLocality": COMPANY_INFO.city,
              "addressRegion": COMPANY_INFO.state,
              "postalCode": COMPANY_INFO.cep,
              "addressCountry": "BR"
            },
            "taxID": COMPANY_INFO.cnpj
          },
          "areaServed": [
            { "@type": "City", "name": "Caxias do Sul" },
            { "@type": "City", "name": "Farroupilha" },
            { "@type": "City", "name": "Flores da Cunha" },
            { "@type": "City", "name": "São Marcos" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `Escopo de ${service.title}`,
            "itemListElement": service.scopeIncluded.map((item, idx) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": item
              },
              "position": idx + 1
            }))
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${service.canonicalUrl}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Início",
              "item": COMPANY_INFO.website
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Serviços",
              "item": `${COMPANY_INFO.website}#servicos`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": service.title,
              "item": service.canonicalUrl
            }
          ]
        },
        {
          "@type": "FAQPage",
          "@id": `${service.canonicalUrl}#faq`,
          "mainEntity": service.serviceFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };
    schemaScript.text = JSON.stringify(structuredData);
    document.head.appendChild(schemaScript);

    // Scroll to top upon opening page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
      const existingScript = document.getElementById('service-structured-data');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [service]);

  const IconComp = iconComponents[service.iconName] || Building2;

  // Personalized WhatsApp CTA for this service
  const serviceWhatsAppUrl = createWhatsAppUrl(
    `Olá! Estava na página de "${service.title}" no site da Revitta e gostaria de um orçamento para a cidade de ${selectedCity}. Poderiam me atender?`
  );

  // Related services
  const relatedServices = DETAILED_SERVICES.filter(s => 
    service.relatedServiceIds.includes(s.id) && s.id !== service.id
  ).slice(0, 3);

  // Recommended Before/After case if available
  const beforeAfterCase = BEFORE_AFTER_ITEMS.find(item => item.id === service.recommendedBeforeAfterId);

  return (
    <div className="bg-mist min-h-screen py-6 sm:py-10">
      {/* Top Breadcrumb & Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-indigo-200/60 text-xs sm:text-sm">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-gray-600">
            <button 
              type="button"
              onClick={onBackToHome}
              className="hover:text-indigo-700 font-medium transition-colors cursor-pointer"
            >
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <button 
              type="button"
              onClick={onBackToHome}
              className="hover:text-indigo-700 font-medium transition-colors cursor-pointer"
            >
              Serviços
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-indigo-950 truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </nav>

          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-indigo-50 border border-indigo-200 text-indigo-900 font-semibold text-xs transition-colors shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-indigo-700" />
            <span>Voltar para a página inicial</span>
          </button>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Service Hero Section with H1 & E-E-A-T badges */}
        <header className="bg-white rounded-3xl p-6 sm:p-10 border border-indigo-100 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold tracking-wide uppercase mb-4">
                <IconComp className="w-3.5 h-3.5 text-indigo-700" />
                <span>{service.categoryLabel}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-indigo-950 tracking-tight leading-tight">
                {service.h1}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 mt-3 leading-relaxed">
                {service.subtitle}
              </p>

              {/* Trust Badges Bar (E-E-A-T) */}
              <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-900 font-semibold border border-indigo-100">
                  <ShieldCheck className="w-4 h-4 text-indigo-700" />
                  Equipe 100% Própria
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-900 font-semibold border border-indigo-100">
                  <Award className="w-4 h-4 text-wa-green" />
                  Garantia Contratual Formal
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-900 font-semibold border border-indigo-100">
                  <FileText className="w-4 h-4 text-indigo-700" />
                  CNPJ: {COMPANY_INFO.cnpj}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-900 font-semibold border border-indigo-100">
                  <MapPin className="w-4 h-4 text-indigo-700" />
                  Caxias do Sul & Serra Gaúcha
                </span>
              </div>
            </div>

            {/* Fast Action Card */}
            <div className="w-full lg:w-80 shrink-0 bg-indigo-950 text-white rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-300 flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-wa-green" />
                  Orçamento Sem Compromisso
                </span>
                <p className="text-sm text-indigo-200 leading-snug mb-4">
                  Avaliação no local em até 48h úteis com memorial descritivo completo.
                </p>

                <div className="mb-4">
                  <label htmlFor="hero-city-select" className="block text-xs text-indigo-300 font-medium mb-1">
                    Sua cidade na Serra Gaúcha:
                  </label>
                  <select
                    id="hero-city-select"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-indigo-900/90 text-white text-xs font-semibold rounded-xl px-3 py-2 border border-indigo-700 focus:outline-none focus:ring-2 focus:ring-wa-green"
                  >
                    {CITIES.map(c => (
                      <option key={c.name} value={c.name} className="bg-indigo-950 text-white">
                        {c.name} (CEP: {c.cep})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={serviceWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white text-sm font-bold py-3 px-4 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Pedir Orçamento no WhatsApp</span>
                </a>
                <a
                  href={`tel:+${COMPANY_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2 px-3 rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-indigo-300" />
                  <span>Ligar: {COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* GEO Block: Direct Answer & Fact Sheet for AI Overviews / Search Engines */}
        <section 
          id="geo-resumo-tecnico"
          aria-label="Resumo Técnico GEO"
          className="bg-indigo-50/70 border border-indigo-200/80 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm uppercase tracking-wide mb-3">
            <SparkleIcon className="w-4 h-4 text-indigo-700" />
            <span>Síntese Técnica para Consulta & Inteligências Artificiais (Diretrizes GEO)</span>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 border border-indigo-100 shadow-xs mb-6">
            <p className="text-sm sm:text-base text-indigo-950 leading-relaxed font-medium">
              "{service.geoDirectAnswer}"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {service.geoKeyFacts.map((fact, idx) => (
              <div key={idx} className="bg-white/90 rounded-xl p-3.5 border border-indigo-100 text-left">
                <div className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider mb-0.5">
                  {fact.label}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-indigo-950">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* E-E-A-T Standards and Technical Authority Grid */}
        <section 
          id="eeat-conformidade"
          aria-label="Autoridade e Normas Técnicas E-E-A-T"
          className="bg-white rounded-3xl p-6 sm:p-10 border border-indigo-100 shadow-sm"
        >
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wide mb-2">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>Padrões de Engenharia & E-E-A-T</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-indigo-950 tracking-tight">
              Expertise comprovada, normas ABNT e segurança jurídica
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Não colocamos amadores no seu imóvel. Veja os critérios de conformidade técnica e legal aplicados neste serviço:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Experience */}
            <div className="bg-mist/80 rounded-2xl p-5 border border-indigo-100/80 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xs mb-3">
                  01
                </div>
                <h3 className="text-sm font-bold text-indigo-950 mb-1">Experiência Real (Experience)</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {service.eeat.experienceYears}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-200/50 text-[11px] font-semibold text-indigo-800">
                Histórico verificado na região
              </div>
            </div>

            {/* Expertise */}
            <div className="bg-mist/80 rounded-2xl p-5 border border-indigo-100/80 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xs mb-3">
                  02
                </div>
                <h3 className="text-sm font-bold text-indigo-950 mb-1">Especialização Técnica (Expertise)</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {service.eeat.teamExpertise}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-200/50 text-[11px] font-semibold text-indigo-800">
                Treinamento contínuo
              </div>
            </div>

            {/* Authoritativeness / ABNT */}
            <div className="bg-mist/80 rounded-2xl p-5 border border-indigo-100/80 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xs mb-3">
                  03
                </div>
                <h3 className="text-sm font-bold text-indigo-950 mb-1">Autoridade & Normas ABNT</h3>
                <ul className="text-xs text-gray-700 space-y-1.5 mt-2">
                  {service.eeat.abntNorms.map((n, i) => (
                    <li key={i} className="flex flex-col">
                      <span className="font-semibold text-indigo-900">{n.code}</span>
                      <span className="text-[11px] text-gray-500">{n.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-200/50 text-[11px] font-semibold text-indigo-800">
                Rigidez técnica e ART/RRT
              </div>
            </div>

            {/* Trustworthiness */}
            <div className="bg-mist/80 rounded-2xl p-5 border border-indigo-100/80 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xs mb-3">
                  04
                </div>
                <h3 className="text-sm font-bold text-indigo-950 mb-1">Confiabilidade & Garantia</h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  {service.eeat.guaranteePeriod}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {service.eeat.taxCompliance}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-200/50 text-[11px] font-semibold text-indigo-800">
                CNPJ ativo e Nota Fiscal
              </div>
            </div>
          </div>
        </section>

        {/* Scope Included & Materials Used (XEO) */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Detailed Overview & Scope (2 cols) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-10 border border-indigo-100 shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold font-display text-indigo-950 tracking-tight mb-3">
                Visão Geral e Escopo Detalhado
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.overview}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-indigo-950 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-wa-green" />
                <span>O que está incluso na execução do serviço:</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.scopeIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-mist/60 border border-indigo-100/60 text-xs sm:text-sm text-gray-700">
                    <Check className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Materials & Tech Spec (1 col) */}
          <div className="bg-indigo-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-300 uppercase tracking-widest mb-3">
                <Wrench className="w-4 h-4 text-wa-green" />
                <span>Materiais & Ferramental</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-4">
                Padrão dos insumos utilizados
              </h3>
              <p className="text-xs text-indigo-200 leading-relaxed mb-6">
                Para assegurar a durabilidade exigida pelo clima da Serra Gaúcha, selecionamos exclusivamente insumos normatizados:
              </p>

              <ul className="space-y-3 text-xs text-indigo-100">
                {service.materialsAndTech.map((tech, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-wa-green mt-1.5 shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-indigo-800 text-xs text-indigo-300">
              <span className="font-semibold text-white block mb-1">Precisa de indicação de lojas parceiras?</span>
              Auxiliamos na compra de materiais com condições especiais de negociação direta na Serra Gaúcha.
            </div>
          </div>
        </section>

        {/* Execution Steps Timeline */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-indigo-100 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
              Fluxo Transparente
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-indigo-950 mt-1">
              Como funciona a contratação e execução
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.executionSteps.map((step, idx) => (
              <div key={idx} className="relative p-5 rounded-2xl bg-mist/60 border border-indigo-100 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black font-display text-indigo-700/60 block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-bold text-indigo-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Before/After study case if exists */}
        {beforeAfterCase && (
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-indigo-100 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">
                  Estudo de Caso Real
                </span>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-indigo-950">
                  {beforeAfterCase.title}
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Local: {beforeAfterCase.location}
                </p>
              </div>
              <a
                href={serviceWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-wa-green hover:text-green-700"
              >
                <span>Quero um resultado semelhante no meu imóvel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200">
                <img 
                  src={beforeAfterCase.beforeImg} 
                  alt={`Antes: ${beforeAfterCase.title}`} 
                  className="w-full h-56 sm:h-72 object-cover"
                />
                <span className="absolute top-3 left-3 bg-red-600/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                  ANTES DA INTERVENÇÃO
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-indigo-200 shadow-md">
                <img 
                  src={beforeAfterCase.afterImg} 
                  alt={`Depois: ${beforeAfterCase.title}`} 
                  className="w-full h-56 sm:h-72 object-cover"
                />
                <span className="absolute top-3 left-3 bg-wa-green/90 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs">
                  DEPOIS DA REVITTA (ENTREGA)
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-4 leading-relaxed bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
              <strong>Memorial da Obra:</strong> {beforeAfterCase.description}
            </p>
          </section>
        )}

        {/* Informações de Atendimento a Domicílio & Transparência */}
        <AtendimentoTransparencia />

        {/* Service FAQs with GEO direct answers */}
        <section 
          id="faq-servico"
          aria-label={`Dúvidas Frequentes sobre ${service.title}`}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-indigo-100 shadow-sm"
        >
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              Perguntas Frequentes & Respostas Diretas (GEO)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-indigo-950 mt-1">
              Tire suas dúvidas técnicas sobre este serviço
            </h2>
            <p className="text-xs text-gray-600 mt-2">
              Respostas claras formuladas por nossos engenheiros e mestres de obra para consulta direta e indexação em inteligências artificiais.
            </p>
          </div>

          <div className="space-y-4">
            {service.serviceFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-indigo-100 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-mist transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-indigo-950 pr-4">
                      {faq.question}
                    </span>
                    <span className="text-indigo-700 font-bold text-lg shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 bg-mist/60 border-t border-indigo-100 text-xs sm:text-sm text-gray-700 space-y-3">
                      {/* Short GEO AI Answer Pill */}
                      <div className="p-2.5 rounded-xl bg-indigo-100/70 border border-indigo-200/80 text-[11px] sm:text-xs text-indigo-900 font-semibold flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-700 shrink-0 mt-0.5" />
                        <span><strong>Resposta Rápida (GEO):</strong> {faq.geoShortAnswer}</span>
                      </div>
                      <p className="leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Local Coverage Neighborhoods & Cities */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-indigo-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-bold font-display text-indigo-950 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-700" />
                <span>Bairros e Região com Atendimento para {service.title}</span>
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Equipes móveis com deslocamento diário e pontual na Serra Gaúcha.
              </p>
            </div>
            <span className="text-xs font-semibold text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-xl border border-indigo-100">
              Atendimento presencial mediante agendamento
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {service.neighborhoodCoverage.map((bairro, idx) => (
              <span 
                key={idx}
                className="text-xs px-3 py-1.5 rounded-xl bg-mist border border-indigo-100 text-indigo-900 font-medium"
              >
                • {bairro}
              </span>
            ))}
          </div>
        </section>

        {/* Related Services Links for Cross-Navigation */}
        {relatedServices.length > 0 && (
          <section className="pt-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">
                  Serviços Complementares
                </span>
                <h3 className="text-xl font-bold font-display text-indigo-950 mt-0.5">
                  Você também pode precisar de:
                </h3>
              </div>
              <button
                type="button"
                onClick={onBackToHome}
                className="text-xs font-semibold text-indigo-700 hover:text-indigo-900 hover:underline"
              >
                Ver todos os 10 serviços →
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedServices.map(rel => {
                const RelIcon = iconComponents[rel.iconName] || Building2;
                return (
                  <div
                    key={rel.id}
                    className="p-5 rounded-2xl bg-white border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
                        <RelIcon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-indigo-950 mb-1">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {rel.subtitle}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onNavigateToService(rel.id)}
                      className="mt-4 pt-3 border-t border-indigo-50 text-xs font-bold text-indigo-700 hover:text-indigo-950 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Ver página completa</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Bottom Sticky-like High Converting WhatsApp CTA Bar */}
        <section className="bg-gradient-to-r from-indigo-950 to-indigo-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-wa-green">
              <Sparkles className="w-3.5 h-3.5 text-wa-green" />
              Atendimento Imediato pelo WhatsApp
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Pronto para iniciar sua obra de {service.title}?
            </h3>
            <p className="text-sm text-indigo-200 leading-relaxed">
              Fale agora com nosso especialista técnico. Enviamos uma estimativa orçamentária clara com prazos fixos e garantia formal.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={serviceWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onBackToHome}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar ao Menu Principal</span>
              </button>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};
