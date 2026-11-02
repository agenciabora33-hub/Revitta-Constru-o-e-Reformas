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
import { ServicePage } from './components/ServicePage';
import { TrabalheConosco } from './components/TrabalheConosco';
import { NotFoundPage } from './components/NotFoundPage';
import { getServiceBySlugOrId } from './data/servicesDetailedData';

const PrivacyPolicyModal = lazy(() =>
  import('./components/PrivacyPolicyModal').then((module) => ({ default: module.PrivacyPolicyModal }))
);

interface AppProps {
  ssrPath?: string;
}

export default function App({ ssrPath }: AppProps) {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Helper to resolve route from current pathname or SSR path
  const resolveCurrentRoute = useCallback(() => {
    let rawPath = '';
    if (ssrPath) {
      rawPath = ssrPath;
    } else if (typeof window !== 'undefined') {
      // Check if user came with legacy hash router like #/servicos/... or #/trabalhe-conosco
      const hash = window.location.hash || '';
      if (hash.startsWith('#/servicos/')) {
        const slug = hash.replace('#/servicos/', '').split('?')[0].split('/')[0];
        const srv = getServiceBySlugOrId(slug);
        if (srv) {
          try {
            window.history.replaceState(null, '', `/${srv.slug}/`);
            rawPath = `/${srv.slug}/`;
          } catch {
            rawPath = `/${srv.slug}/`;
          }
        }
      } else if (hash === '#/trabalhe-conosco' || hash === '#trabalhe-conosco') {
        try {
          window.history.replaceState(null, '', '/trabalhe-conosco/');
          rawPath = '/trabalhe-conosco/';
        } catch {
          rawPath = '/trabalhe-conosco/';
        }
      }

      if (!rawPath) {
        rawPath = window.location.pathname || '/';
      }
    } else {
      rawPath = '/';
    }

    // Normalize path
    const trimmed = rawPath.replace(/^\/+|\/+$/g, '').trim();

    if (!trimmed || trimmed === 'index.html') {
      return { type: 'home' as const, serviceId: null };
    }

    if (trimmed === 'trabalhe-conosco') {
      return { type: 'trabalhe-conosco' as const, serviceId: null };
    }

    if (trimmed === '404' || trimmed === '404.html') {
      return { type: '404' as const, serviceId: null };
    }

    // Check service
    const foundService = getServiceBySlugOrId(trimmed);
    if (foundService) {
      return { type: 'service' as const, serviceId: foundService.id };
    }

    // Unknown route
    return { type: '404' as const, serviceId: null };
  }, [ssrPath]);

  const [routeState, setRouteState] = useState(() => resolveCurrentRoute());

  // Listen to browser back/forward and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      setRouteState(resolveCurrentRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [resolveCurrentRoute]);

  const navigateToService = (serviceId: string) => {
    const srv = getServiceBySlugOrId(serviceId);
    if (srv) {
      if (typeof window !== 'undefined') {
        window.history.pushState(null, '', `/${srv.slug}/`);
      }
      setRouteState({ type: 'service', serviceId: srv.id });
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navigateToTrabalheConosco = () => {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/trabalhe-conosco/');
    }
    setRouteState({ type: 'trabalhe-conosco', serviceId: null });
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/');
    }
    setRouteState({ type: 'home', serviceId: null });
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentService = routeState.type === 'service' && routeState.serviceId 
    ? getServiceBySlugOrId(routeState.serviceId) 
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-mist text-indigo-950 font-sans selection:bg-indigo-200 selection:text-indigo-950 relative">
      {/* Sticky Header with universal navigation */}
      <Header 
        onNavigateHome={navigateToHome} 
        onNavigateTrabalheConosco={navigateToTrabalheConosco}
        isServicePage={routeState.type === 'service'}
        isTrabalheConosco={routeState.type === 'trabalhe-conosco'}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow pt-16 sm:pt-20">
        {routeState.type === 'trabalhe-conosco' ? (
          /* Dedicated Trabalhe Conosco Page */
          <TrabalheConosco onBackToHome={navigateToHome} />
        ) : routeState.type === 'service' && currentService ? (
          /* Dedicated Service Page */
          <ServicePage
            service={currentService}
            onBackToHome={navigateToHome}
            onNavigateToService={navigateToService}
          />
        ) : routeState.type === '404' ? (
          /* Real 404 Not Found Page */
          <NotFoundPage />
        ) : (
          /* Main Architectural One-Page Content Flow */
          <>
            {/* #inicio (Hero with trust badges & primary WhatsApp CTA) */}
            <Hero />

            {/* #numeros (Social proof metrics) */}
            <Stats />

            {/* #servicos (11 service cards with dedicated page links & WhatsApp selector) */}
            <Services onSelectService={navigateToService} />

            {/* #atendimento (Atendimento no Endereço do Cliente & Transparência) */}
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

            {/* #faq (GEO direct answer-first with semantic accordion) */}
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
        onNavigateTrabalheConosco={navigateToTrabalheConosco}
      />

      {/* Fixed WhatsApp Floating Conversion Button */}
      <FloatingWhatsApp />

      {/* LGPD Cookie Consent Banner */}
      <CookieBanner onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)} />

      {/* Privacy Policy Modal */}
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
