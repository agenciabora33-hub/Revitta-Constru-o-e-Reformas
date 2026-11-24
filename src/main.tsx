import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App, { AppSsrComponents } from './App.tsx';
import { resolveServiceLink } from './data/serviceLinks';
import './index.css';

async function bootstrap() {
  const rootEl = document.getElementById('root')!;
  const pathname = window.location.pathname || '/';
  const hash = window.location.hash || '';
  const trimmed = pathname.replace(/^\/+|\/+$/g, '').trim();

  let preloadedComponents: AppSsrComponents | undefined;

  if (trimmed === 'trabalhe-conosco' || hash === '#/trabalhe-conosco' || hash === '#trabalhe-conosco') {
    const mod = await import('./components/TrabalheConosco');
    preloadedComponents = { TrabalheConosco: mod.TrabalheConosco };
  } else if (trimmed === '404' || trimmed === '404.html') {
    const mod = await import('./components/NotFoundPage');
    preloadedComponents = { NotFoundPage: mod.NotFoundPage };
  } else if (trimmed && trimmed !== 'index.html') {
    const isService = resolveServiceLink(trimmed);
    if (isService) {
      const mod = await import('./components/ServicePage');
      preloadedComponents = { ServicePage: mod.ServicePage };
    } else {
      const mod = await import('./components/NotFoundPage');
      preloadedComponents = { NotFoundPage: mod.NotFoundPage };
    }
  } else if (hash.startsWith('#/servicos/')) {
    const mod = await import('./components/ServicePage');
    preloadedComponents = { ServicePage: mod.ServicePage };
  }

  const appTree = (
    <StrictMode>
      <App ssrComponents={preloadedComponents} />
    </StrictMode>
  );

  if (rootEl.firstElementChild) {
    hydrateRoot(rootEl, appTree);
  } else {
    createRoot(rootEl).render(appTree);
  }
}

bootstrap();
