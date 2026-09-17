import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { About } from './components/About';
import { Areas } from './components/Areas';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { ServicePage } from './components/ServicePage';
import { AtendimentoTransparencia } from './components/AtendimentoTransparencia';
import { getServiceBySlugOrId } from './data/servicesDetailedData';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [currentServiceId, setCurrentServiceId] = useState<string | null>(null);

  // Sync route from URL hash (e.g. #/servicos/instalacoes-eletricas)
  const parseRouteFromHash = useCallback(() => {
    const hash = window.location.hash;
    const match = hash.match(/^#\/servicos\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      const found = getServiceBySlugOrId(match[1]);
      if (found) {
        setCurrentServiceId(found.id);
        return;
      }
    }
    setCurrentServiceId(null);
  }, []);

  useEffect(() => {
    parseRouteFromHash();
    window.addEventListener('hashchange', parseRouteFromHash);
    window.addEventListener('popstate', parseRouteFromHash);

    return () => {
      window.removeEventListener('hashchange', parseRouteFromHash);
      window.removeEventListener('popstate', parseRouteFromHash);
    };
  }, [parseRouteFromHash]);

  const navigateToService = (serviceId: string) => {
    const service = getServiceBySlugOrId(serviceId);
    if (service) {
      window.location.hash = `#/servicos/${service.slug}`;
      setCurrentServiceId(service.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentServiceId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentService = currentServiceId ? getServiceBySlugOrId(currentServiceId) : null;

  return (
    <div className="min-h-screen flex flex-col bg-mist text-indigo-950 font-sans selection:bg-indigo-200 selection:text-indigo-950 relative">
      {/* Sticky Header with adaptive navigation */}
      <Header 
        onNavigateHome={navigateToHome} 
        isServicePage={Boolean(currentService)}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow pt-16 sm:pt-20">
        {currentService ? (
          /* Dedicated Service Page (SEO, GEO, XEO & E-E-A-T) */
          <ServicePage
            service={currentService}
            onBackToHome={navigateToHome}
            onNavigateToService={navigateToService}
          />
        ) : (
          /* Main One-Page Architectural Content Flow (PRD §5) */
          <>
            {/* #inicio (Hero with trust badges & primary WhatsApp CTA) */}
            <Hero />

            {/* #numeros (Social proof metrics) */}
            <Stats />

            {/* #servicos (10 service cards with dedicated page links & WhatsApp selector) */}
            <Services onSelectService={navigateToService} />

            {/* #atendimento (Atendimento a Domicílio & Transparência com o Cliente) */}
            <AtendimentoTransparencia />

            {/* #processo (4 structured steps from evaluation to guaranteed delivery) */}
            <Process />

            {/* #obras (Interactive Before/After comparison slider) */}
            <BeforeAfterGallery />

            {/* #sobre (E-E-A-T company foundation, specialists, technical manager) */}
            <About />

            {/* #areas (Coverage cards for Caxias do Sul, Farroupilha, São Marcos, Flores da Cunha) */}
            <Areas />

            {/* #depoimentos (Verified Google Business Profile reviews) */}
            <Testimonials />

            {/* #faq (GEO direct answer-first 40-60 words with semantic details accordion) */}
            <FaqSection />

            {/* #contato (Final high-converting CTA section) */}
            <CtaFinal />
          </>
        )}
      </main>

      {/* Footer with full NAP, business hours, emergency info, and dedicated service links */}
      <Footer 
        onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)} 
        onSelectService={navigateToService}
      />

      {/* Fixed WhatsApp Floating Conversion Button with gentle pulse and tooltip (PRD §8) */}
      <FloatingWhatsApp />

      {/* LGPD Cookie Consent Banner (Compact, discrete, bottom-left) */}
      <CookieBanner onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)} />

      {/* Privacy Policy Modal (/privacidade) */}
      <PrivacyPolicyModal 
        isOpen={privacyModalOpen} 
        onClose={() => setPrivacyModalOpen(false)} 
      />
    </div>
  );
}
