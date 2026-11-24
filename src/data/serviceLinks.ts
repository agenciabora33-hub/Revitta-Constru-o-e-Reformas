export interface ServiceLinkItem {
  id: string;
  slug: string;
  title: string;
}

export const SERVICE_LINKS: ServiceLinkItem[] = [
  {
    id: 'reformas-residenciais',
    slug: 'reformas-residenciais-caxias-do-sul',
    title: 'Reformas residenciais',
  },
  {
    id: 'reformas-comerciais',
    slug: 'reformas-comerciais-caxias-do-sul',
    title: 'Reformas comerciais',
  },
  {
    id: 'manutencao-predial',
    slug: 'manutencao-predial-caxias-do-sul',
    title: 'Manutenção predial e em condomínios',
  },
  {
    id: 'instalacoes-eletricas',
    slug: 'eletricista-caxias-do-sul',
    title: 'Eletricista e instalações elétricas',
  },
  {
    id: 'encanamento-hidraulica',
    slug: 'encanador-caxias-do-sul',
    title: 'Encanador e instalações hidráulicas',
  },
  {
    id: 'alvenaria-pedreiro',
    slug: 'pedreiro-caxias-do-sul',
    title: 'Pedreiro e alvenaria',
  },
  {
    id: 'pintura-completa',
    slug: 'pintor-caxias-do-sul',
    title: 'Pintor e pintura predial / residencial',
  },
  {
    id: 'drywall-forros',
    slug: 'drywall-caxias-do-sul',
    title: 'Drywall e forros de gesso',
  },
  {
    id: 'pisos-acabamentos',
    slug: 'piso-vinilico-caxias-do-sul',
    title: 'Piso vinílico, laminado e porcelanato',
  },
  {
    id: 'reforma-telhados',
    slug: 'conserto-telhado-caxias-do-sul',
    title: 'Conserto e reforma de telhado',
  },
  {
    id: 'faz-tudo-reparos',
    slug: 'faz-tudo-caxias-do-sul',
    title: 'Faz-tudo e pequenos reparos',
  },
];

export const LEGACY_SLUG_MAP: Record<string, string> = {
  'reformas-gerais': 'reformas-residenciais-caxias-do-sul',
  'reformas-residenciais-comerciais': 'reformas-residenciais-caxias-do-sul',
  'reformas-residenciais': 'reformas-residenciais-caxias-do-sul',
  'reformas-comerciais': 'reformas-comerciais-caxias-do-sul',
  'reformas-comerciais-em-caxias-do-sul-lojas-escritorios-e-salas-or-revitta': 'reformas-comerciais-caxias-do-sul',
  'reforma-comercial-em-caxias-do-sul-agilidade-e-projetos': 'reformas-comerciais-caxias-do-sul',
  'instalacoes-eletricas': 'eletricista-caxias-do-sul',
  'manutencao-eletrica-caxias-do-sul': 'eletricista-caxias-do-sul',
  'eletricista': 'eletricista-caxias-do-sul',
  'encanamento-hidraulica': 'encanador-caxias-do-sul',
  'encanador': 'encanador-caxias-do-sul',
  'alvenaria-pedreiro': 'pedreiro-caxias-do-sul',
  'pedreiro-em-caxias-do-sul': 'pedreiro-caxias-do-sul',
  'pedreiro-alvenaria-caxias-do-sul': 'pedreiro-caxias-do-sul',
  'pedreiro': 'pedreiro-caxias-do-sul',
  'pintura-completa': 'pintor-caxias-do-sul',
  'pintor': 'pintor-caxias-do-sul',
  'drywall-forros': 'drywall-caxias-do-sul',
  'drywall-e-forros': 'drywall-caxias-do-sul',
  'drywall': 'drywall-caxias-do-sul',
  'pisos-acabamentos': 'piso-vinilico-caxias-do-sul',
  'pisos-e-acabamentos': 'piso-vinilico-caxias-do-sul',
  'piso-vinilico': 'piso-vinilico-caxias-do-sul',
  'reforma-telhados': 'conserto-telhado-caxias-do-sul',
  'conserto-telhado': 'conserto-telhado-caxias-do-sul',
  'manutencao-predial': 'manutencao-predial-caxias-do-sul',
  'faz-tudo-reparos': 'faz-tudo-caxias-do-sul',
  'faz-tudo': 'faz-tudo-caxias-do-sul',
};

export function resolveServiceLink(identifier: string): ServiceLinkItem | undefined {
  if (!identifier) return undefined;
  const clean = identifier.toLowerCase().replace(/^\/+|\/+$/g, '').trim();

  const direct = SERVICE_LINKS.find((s) => s.id === clean || s.slug === clean);
  if (direct) return direct;

  const mappedSlug = LEGACY_SLUG_MAP[clean];
  if (mappedSlug) {
    return SERVICE_LINKS.find((s) => s.slug === mappedSlug || s.id === mappedSlug);
  }

  return undefined;
}
