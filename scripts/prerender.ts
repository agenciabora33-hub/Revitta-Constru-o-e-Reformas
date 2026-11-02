import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { DETAILED_SERVICES } from '../src/data/servicesDetailedData';
import { COMPANY_INFO } from '../src/data/revittaData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

interface RouteConfig {
  path: string;
  outputFile: string;
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
  serviceData?: (typeof DETAILED_SERVICES)[number];
}

async function runPrerender() {
  console.log('[SSG Prerender] Starting static HTML generation...');

  if (!fs.existsSync(templatePath)) {
    console.error(`[SSG Prerender] Error: Template file not found at ${templatePath}`);
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(templatePath, 'utf-8');

  // Define canonical routes
  const routes: RouteConfig[] = [
    {
      path: '/',
      outputFile: path.resolve(distDir, 'index.html'),
      title: 'Revitta Caxias – Reformas, Manutenção e Obras em Caxias do Sul',
      description: 'Reformas residenciais e comerciais, manutenção predial, elétrica, hidráulica e pedreiro em Caxias do Sul e Serra Gaúcha. Orçamento rápido pelo WhatsApp.',
      canonical: 'https://revittacaxias.com.br/'
    },
    {
      path: '/trabalhe-conosco/',
      outputFile: path.resolve(distDir, 'trabalhe-conosco', 'index.html'),
      title: 'Trabalhe Conosco | Seja Prestador Parceiro | Revitta Caxias',
      description: 'Cadastre-se na rede de especialistas da Revitta Caxias. Obras contínuas, materiais no canteiro e pagamento pontual por etapa para eletricistas, pedreiros e encanadores.',
      canonical: 'https://revittacaxias.com.br/trabalhe-conosco/'
    },
    {
      path: '/404.html',
      outputFile: path.resolve(distDir, '404.html'),
      title: 'Página não encontrada (404) | Revitta Caxias',
      description: 'A página que você procura não foi encontrada. Conheça nossos serviços de reformas, manutenção e construção em Caxias do Sul.',
      canonical: 'https://revittacaxias.com.br/404.html',
      noindex: true
    }
  ];

  // Add all 11 detailed services
  for (const srv of DETAILED_SERVICES) {
    routes.push({
      path: `/${srv.slug}/`,
      outputFile: path.resolve(distDir, srv.slug, 'index.html'),
      title: srv.seoTitle,
      description: srv.seoDescription,
      canonical: srv.canonicalUrl,
      serviceData: srv
    });
  }

  console.log(`[SSG Prerender] Processing ${routes.length} routes...`);

  for (const route of routes) {
    try {
      // Render component tree to static string
      const appHtml = renderToString(React.createElement(App, { ssrPath: route.path }));

      let html = baseTemplate;

      // 1. Inject root markup
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      // 2. Replace Title
      html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);

      // 3. Replace Meta Description
      html = html.replace(
        /<meta name="description" content=".*?" \/>/i,
        `<meta name="description" content="${escapeHtml(route.description)}" />`
      );

      // 4. Replace Canonical Link
      html = html.replace(
        /<link rel="canonical" href=".*?" \/>/i,
        `<link rel="canonical" href="${route.canonical}" />`
      );

      // 5. Replace Open Graph tags
      html = html.replace(
        /<meta property="og:title" content=".*?" \/>/i,
        `<meta property="og:title" content="${escapeHtml(route.title)}" />`
      );
      html = html.replace(
        /<meta property="og:description" content=".*?" \/>/i,
        `<meta property="og:description" content="${escapeHtml(route.description)}" />`
      );
      html = html.replace(
        /<meta property="og:url" content=".*?" \/>/i,
        `<meta property="og:url" content="${route.canonical}" />`
      );

      // 6. Replace Twitter tags
      html = html.replace(
        /<meta name="twitter:title" content=".*?" \/>/i,
        `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
      );
      html = html.replace(
        /<meta name="twitter:description" content=".*?" \/>/i,
        `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
      );

      // 7. Robots (noindex for 404)
      if (route.noindex) {
        html = html.replace(
          /<meta name="robots" content=".*?" \/>/i,
          '<meta name="robots" content="noindex,follow" />'
        );
      }

      // 8. Inject page-specific JSON-LD for service or trabalhe-conosco
      if (route.serviceData) {
        const s = route.serviceData;
        const serviceSchema = {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': `${s.canonicalUrl}#service`,
              name: s.title,
              serviceType: s.categoryLabel,
              description: s.geoDirectAnswer,
              provider: {
                '@type': 'GeneralContractor',
                name: COMPANY_INFO.brand,
                url: COMPANY_INFO.website,
                telephone: `+${COMPANY_INFO.phoneRaw}`,
                email: COMPANY_INFO.email,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: COMPANY_INFO.address,
                  addressLocality: COMPANY_INFO.city,
                  addressRegion: COMPANY_INFO.state,
                  postalCode: COMPANY_INFO.cep,
                  addressCountry: 'BR'
                },
                taxID: COMPANY_INFO.cnpj
              },
              areaServed: [
                { '@type': 'City', name: 'Caxias do Sul' },
                { '@type': 'City', name: 'Farroupilha' },
                { '@type': 'City', name: 'Flores da Cunha' },
                { '@type': 'City', name: 'São Marcos' },
                { '@type': 'AdministrativeArea', name: 'Serra Gaúcha' }
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: `Escopo de ${s.title}`,
                itemListElement: s.scopeIncluded.map((item) => ({
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: item
                  }
                }))
              }
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Início',
                  item: 'https://revittacaxias.com.br/'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Serviços',
                  item: 'https://revittacaxias.com.br/#servicos'
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: s.title,
                  item: s.canonicalUrl
                }
              ]
            },
            {
              '@type': 'FAQPage',
              mainEntity: s.serviceFaqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: f.answer
                }
              }))
            }
          ]
        };

        const jsonLdTag = `<script type="application/ld+json">\n${JSON.stringify(serviceSchema, null, 2)}\n</script>\n</head>`;
        html = html.replace('</head>', jsonLdTag);
      } else if (route.path === '/trabalhe-conosco/') {
        const trabalheSchema = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Início',
              item: 'https://revittacaxias.com.br/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Trabalhe Conosco',
              item: 'https://revittacaxias.com.br/trabalhe-conosco/'
            }
          ]
        };
        const jsonLdTag = `<script type="application/ld+json">\n${JSON.stringify(trabalheSchema, null, 2)}\n</script>\n</head>`;
        html = html.replace('</head>', jsonLdTag);
      }

      // Ensure directory exists
      const targetDir = path.dirname(route.outputFile);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      fs.writeFileSync(route.outputFile, html, 'utf-8');
      console.log(`[SSG Prerender] ✓ Rendered: ${route.path} -> ${path.relative(rootDir, route.outputFile)} (${appHtml.length} chars)`);
    } catch (err) {
      console.error(`[SSG Prerender] ✗ Error rendering route ${route.path}:`, err);
      process.exit(1);
    }
  }

  // Generate dynamic sitemap.xml with today's date
  generateSitemap(routes.filter((r) => !r.noindex));

  console.log('[SSG Prerender] All routes successfully generated with 100% static HTML!');
}

function generateSitemap(canonicalRoutes: RouteConfig[]) {
  const today = '2026-11-02';
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const route of canonicalRoutes) {
    const isHome = route.path === '/';
    const isTrabalhe = route.path === '/trabalhe-conosco/';
    const priority = isHome ? '1.0' : isTrabalhe ? '0.7' : '0.9';
    const changefreq = isHome ? 'weekly' : 'monthly';

    xml += `  <url>\n`;
    xml += `    <loc>${route.canonical}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  // Write to both dist/sitemap.xml and public/sitemap.xml
  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), xml, 'utf-8');
  fs.writeFileSync(path.resolve(rootDir, 'public', 'sitemap.xml'), xml, 'utf-8');
  console.log(`[SSG Prerender] ✓ sitemap.xml generated with ${canonicalRoutes.length} canonical URLs.`);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

runPrerender();
