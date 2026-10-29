import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
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
import { AtendimentoTransparencia } from './components/AtendimentoTransparencia';
import { getServiceBySlugOrId } from './data/servicesDetailedData';

// Dynamic code-splitting for secondary views and modals to optimize initial mobile bundle & FCP/LCP
const ServicePage = lazy(() =>
  import('./components/ServicePage').then((module) => ({ default: module.ServicePage }))
);
const TrabalheConosco = lazy(() =>
  import('./components/TrabalheConosco').then((module) => ({ default: module.TrabalheConosco }))
);
const PrivacyPolicyModal = lazy(() =>
  import('./components/PrivacyPolicyModal').then((module) => ({ default: module.PrivacyPolicyModal }))
);

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [currentServiceId, setCurrentServiceId] = useState<string | null>(null);
  const [isTrabalheConosco, setIsTrabalheConosco] = useState(false);

  // Sync route from URL hash (e.g. #/servicos/instalacoes-eletricas or #/trabalhe-conosco)
  const parseRouteFromHash = useCallback(() => {
    const hash = window.location.hash;
    if (hash === '#/trabalhe-conosco' || hash === '#trabalhe-conosco') {
      setIsTrabalheConosco(true);
      setCurrentServiceId(null);
      return;
    }

    const match = hash.match(/^#\/servicos\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
      const found = getServiceBySlugOrId(match[1]);
      if (found) {
        setCurrentServiceId(found.id);
        setIsTrabalheConosco(false);
        return;
      }
    }
    setCurrentServiceId(null);
    setIsTrabalheConosco(false);
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
      setIsTrabalheConosco(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToTrabalheConosco = () => {
    window.location.hash = '#/trabalhe-conosco';
    setIsTrabalheConosco(true);
    setCurrentServiceId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentServiceId(null);
    setIsTrabalheConosco(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentService = currentServiceId ? getServiceBySlugOrId(currentServiceId) : null;

  return (
    <div className="min-h-screen flex flex-col bg-mist text-indigo-950 font-sans selection:bg-indigo-200 selection:text-indigo-950 relative">
      {/* Sticky Header with adaptive navigation */}
      <Header 
        onNavigateHome={navigateToHome} 
        onNavigateTrabalheConosco={navigateToTrabalheConosco}
        isServicePage={Boolean(currentService)}
        isTrabalheConosco={isTrabalheConosco}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow pt-16 sm:pt-20">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
              <div className="w-10 h-10 border-3 border-indigo-700 border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-sm font-semibold text-indigo-950">Carregando conteúdo...</p>
            </div>
          }
        >
          {isTrabalheConosco ? (
            /* Dedicated Trabalhe Conosco Page (Prestadores & Profissionais Liberais) */
            <TrabalheConosco onBackToHome={navigateToHome} />
          ) : currentService ? (
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
        </Suspense>
      </main>

      {/* Footer with full NAP, business hours, emergency info, and dedicated service links */}
      <Footer 
        onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)} 
        onSelectService={navigateToService}
        onNavigateTrabalheConosco={navigateToTrabalheConosco}
      />

      {/* Fixed WhatsApp Floating Conversion Button with gentle pulse and tooltip (PRD §8) */}
      <FloatingWhatsApp />

      {/* LGPD Cookie Consent Banner (Compact, discrete, bottom-left) */}
      <CookieBanner onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)} />

      {/* Privacy Policy Modal (/privacidade) */}
      {privacyModalOpen && (
        <Suspense fallback={null}>
          <PrivacyPolicyModal 
            isOpen={privacyModalOpen} 
            onClose={() => setPrivacyModalOpen(false)} 
          />
        </Suspense>
      )}
    </div>
  );
}
