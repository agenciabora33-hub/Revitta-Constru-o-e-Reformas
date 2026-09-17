export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  highlights: string[];
  iconName: string;
  category: 'civil' | 'instalacoes' | 'acabamentos' | 'manutencao';
  popular?: boolean;
}

export interface ServiceDetailedFAQ {
  question: string;
  answer: string;
  geoShortAnswer: string;
}

export interface ServiceDetailed {
  id: string;
  slug: string;
  title: string;
  h1: string;
  subtitle: string;
  category: 'civil' | 'instalacoes' | 'acabamentos' | 'manutencao';
  categoryLabel: string;
  iconName: string;
  popular?: boolean;
  // SEO
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  canonicalUrl: string;
  // GEO (Generative Engine Optimization)
  geoDirectAnswer: string; // 40-60 words concise factual answer for AI Overviews
  geoKeyFacts: { label: string; value: string; icon?: string }[];
  // E-E-A-T
  eeat: {
    experienceYears: string;
    teamExpertise: string;
    abntNorms: { code: string; title: string }[];
    technicalResponsibility: string;
    safetyAndInsurance: string;
    guaranteePeriod: string;
    taxCompliance: string;
  };
  // Detailed Scope & XEO
  overview: string;
  scopeIncluded: string[];
  materialsAndTech: string[];
  executionSteps: { step: string; title: string; desc: string }[];
  serviceFaqs: ServiceDetailedFAQ[];
  neighborhoodCoverage: string[];
  relatedServiceIds: string[];
  recommendedBeforeAfterId?: string;
}

export interface CityCoverage {
  name: string;
  cep: string;
  highlight: string;
  focus: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  tag: string;
}

export interface ReviewItem {
  name: string;
  location: string;
  date: string;
  rating: number;
  text: string;
  service: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
}
