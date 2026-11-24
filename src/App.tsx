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
import { resolveServiceLink } from './data/serviceLinks';

const LazyServicePage = lazy(() =>
  import('./components/ServicePage').then((module) => ({ default: module.ServicePage }))
);
const LazyTrabalheConosco = lazy(() =>
  import('./components/TrabalheConosco').then((module) => ({ default: module.TrabalheConosco }))
);
const LazyNotFoundPage = lazy(() =>
  import('./components/NotFoundPage').then((module) => ({ default: module.NotFoundPage }))
);
const PrivacyPolicyModal = lazy(() =>
  import('./components/PrivacyPolicyModal').then((module) => ({ default: module.PrivacyPolicyModal }))
);
const LazyBioPage = lazy(() =>
  import('./components/BioPage').then((module) => ({ default: module.BioPage }))
);

export interface AppSsrComponents {
  ServicePage?: React.ComponentType<{
    serviceId?: string;
    onBackToHome: () => void;
    onNavigateToService: (serviceId: string) => void;
  }>;
  TrabalheConosco?: React.ComponentType<{
    onBackToHome: () => void;
  }>;
  NotFoundPage?: React.ComponentType;
  BioPage?: React.ComponentType;
}

interface AppProps {
  ssrPath?: string;
  ssrComponents?: AppSsrComponents;
}

export default function App({ ssrPath, ssrComponents }: AppProps) {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const resolveCurrentRoute = useCallback(() => {
    let rawPath = '';
    if (ssrPath) {
      rawPath = ssrPath;
    } else if (typeof window !== 'undefined') {
      const hash = window.location.hash || '';
      if (hash.startsWith('#/servicos/')) {
        const slug = hash.replace('#/servicos/', '').split('?')[0].split('/')[0];
        const srv = resolveServiceLink(slug);
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

    const trimmed = rawPath.replace(/^\/+|\/+$/g, '').trim();

    if (!trimmed || trimmed === 'index.html') {
      return { type: 'home' as const, serviceId: null };
    }

    if (trimmed === 'trabalhe-conosco') {
      return { type: 'trabalhe-conosco' as const, serviceId: null };
    }

    if (trimmed === 'bio') {
      return { type: 'bio' as const, serviceId: null };
    }

    if (trimmed === '404' || trimmed === '404.html') {
      return { type: '404' as const, serviceId: null };
    }

    const foundService = resolveServiceLink(trimmed);
    if (foundService) {
      return { type: 'service' as const, serviceId: foundService.id };
    }

    return { type: '404' as const, serviceId: null };
  }, [ssrPath]);

  const [routeState, setRouteState] = useState(() => resolveCurrentRoute());

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
    const srv = resolveServiceLink(serviceId);
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

  const ActiveServicePage = ssrComponents?.ServicePage ?? LazyServicePage;
  const ActiveTrabalheConosco = ssrComponents?.TrabalheConosco ?? LazyTrabalheConosco;
  const ActiveNotFoundPage = ssrComponents?.NotFoundPage ?? LazyNotFoundPage;
  const ActiveBioPage = ssrComponents?.BioPage ?? LazyBioPage;

  if (routeState.type === 'bio') {
    if (ssrComponents?.BioPage) {
      return <ActiveBioPage />;
    }
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#170F3D]" />}>
        <ActiveBioPage />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-mist text-indigo-950 font-sans selection:bg-indigo-200 selection:text-indigo-950 relative">
      <Header
        onNavigateHome={navigateToHome}
        onNavigateTrabalheConosco={navigateToTrabalheConosco}
        isServicePage={routeState.type === 'service'}
        isTrabalheConosco={routeState.type === 'trabalhe-conosco'}
      />

      <main id="main-content" className="flex-grow pt-16 sm:pt-20">
        {routeState.type === 'trabalhe-conosco' ? (
          ssrComponents?.TrabalheConosco ? (
            <ActiveTrabalheConosco onBackToHome={navigateToHome} />
          ) : (
            <Suspense fallback={<div className="min-h-[60vh] bg-mist" />}>
              <ActiveTrabalheConosco onBackToHome={navigateToHome} />
            </Suspense>
          )
        ) : routeState.type === 'service' && routeState.serviceId ? (
          ssrComponents?.ServicePage ? (
            <ActiveServicePage
              serviceId={routeState.serviceId}
              onBackToHome={navigateToHome}
              onNavigateToService={navigateToService}
            />
          ) : (
            <Suspense fallback={<div className="min-h-[60vh] bg-mist" />}>
              <ActiveServicePage
                serviceId={routeState.serviceId}
                onBackToHome={navigateToHome}
                onNavigateToService={navigateToService}
              />
            </Suspense>
          )
        ) : routeState.type === '404' ? (
          ssrComponents?.NotFoundPage ? (
            <ActiveNotFoundPage />
          ) : (
            <Suspense fallback={<div className="min-h-[60vh] bg-mist" />}>
              <ActiveNotFoundPage />
            </Suspense>
          )
        ) : (
          <>
            <Hero />
            <Stats />
            <Services onSelectService={navigateToService} />
            <AtendimentoTransparencia />
            <Process />
            <BeforeAfterGallery />
            <About />
            <Areas />
            <Testimonials />
            <FaqSection />
            <CtaFinal />
          </>
        )}
      </main>

      <Footer
        onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)}
        onSelectService={navigateToService}
        onNavigateTrabalheConosco={navigateToTrabalheConosco}
      />

      <FloatingWhatsApp />

      <CookieBanner onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)} />

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
