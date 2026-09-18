import { ServiceItem, CityCoverage, ProcessStep, FaqItem, ReviewItem, BeforeAfterItem } from '../types';

export const COMPANY_INFO = {
  name: "Revitta Construção e Reformas | P/ Comércio, Indústria e Residência",
  shortName: "Revitta Manutenções e Reformas",
  brand: "Revitta",
  cnpj: "50.463.095/0001-58",
  foundedDate: "Abril de 2020",
  phoneRaw: "5554992162361",
  phoneFormatted: "(54) 99216-2361",
  address: "Rua Pinheiro Machado, 1640 – Centro",
  city: "Caxias do Sul",
  state: "RS",
  cep: "95020-170",
  fullAddress: "Rua Pinheiro Machado, 1640 – Centro, Caxias do Sul – RS, CEP 95020-170",
  website: "https://revittacaxias.com.br/",
  hoursWeekday: "Segunda a Sexta: 07h30 às 20h30",
  hoursSaturday: "Sábado: 08h00 às 14h30",
  hoursSunday: "Domingo: Fechado (Plantão Emergencial 24h)",
  emergency: "Atendimento emergencial 24h para vazamentos e falhas elétricas",
  payments: ["PIX", "Dinheiro", "Cartões de Débito", "Cartões de Crédito parcelado"],
  socials: {
    instagram: "https://www.instagram.com/revittacaxias/",
    facebook: "https://www.facebook.com/revittarevittacaxias",
    linkedin: "https://www.linkedin.com/company/revittacaxias/"
  },
  technicalManagerPlaceholder: "[NOME + REGISTRO CREA/CFT]"
};

export const CITIES: CityCoverage[] = [
  {
    name: "Caxias do Sul",
    cep: "95020-170",
    highlight: "Sede central com atendimento presencial e avaliação rápida.",
    focus: "Residencial, Comercial e Predial no Centro e bairros"
  },
  {
    name: "Farroupilha",
    cep: "95180-000",
    highlight: "Equipe volante com deslocamento diário e pontual.",
    focus: "Reformas completas, telhados, alvenaria e elétrica"
  },
  {
    name: "São Marcos",
    cep: "95190-000",
    highlight: "Atendimento ágil para imóveis residenciais e galpões.",
    focus: "Manutenção estrutural, hidráulica e acabamentos"
  },
  {
    name: "Flores da Cunha",
    cep: "95270-000",
    highlight: "Atendimento no local mediante agendamento e avaliação prévia pelo WhatsApp.",
    focus: "Pinturas, forros, pisos vinílicos e restauração"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "reformas-gerais",
    title: "Reformas residenciais e comerciais",
    shortDesc: "Gestão completa da obra da demolição ao acabamento de alto padrão sem dor de cabeça.",
    longDesc: "Planejamento estruturado com cronograma físico-financeiro, compra consciente de insumos, acompanhamento técnico rigoroso e equipe própria multidisciplinar.",
    highlights: ["Gestão completa da obra", "Projetos residenciais e comerciais", "Cronograma com prazos fixos", "Sem cobranças surpresa"],
    iconName: "Building2",
    category: "civil",
    popular: true
  },
  {
    id: "instalacoes-eletricas",
    title: "Instalações elétricas",
    shortDesc: "Quadros de distribuição, fiação certificada, iluminação técnica e segurança total.",
    longDesc: "Dimensionamento correto de circuitos para residências, escritórios e indústrias, substituição de fiação antiga, DPS, tomadas 20A e plantão de emergência.",
    highlights: ["Quadros de comando e DR", "Iluminação LED e perfis embutidos", "Revisão e laudo de carga", "Emergência 24h para curto-circuito"],
    iconName: "Zap",
    category: "instalacoes",
    popular: true
  },
  {
    id: "encanamento-hidraulica",
    title: "Encanamento e hidráulica",
    shortDesc: "Localização precisa de vazamentos, novas redes de água quente/fria e esgoto.",
    longDesc: "Instalação de tubulações termofusão (PPR/PEX), caixas d'água, registros, louças sanitárias, desentupimentos preventivos e contenção de vazamentos 24h.",
    highlights: ["Caça-vazamentos estruturado", "Redes PPR, CPVC e PVC", "Instalação de válvulas e metais", "Atendimento emergencial 24h"],
    iconName: "Droplets",
    category: "instalacoes"
  },
  {
    id: "reforma-telhados",
    title: "Reforma de telhados",
    shortDesc: "Impermeabilização, troca de telhas, rufos, calhas e contenção de goteiras.",
    longDesc: "Restauração de madeiramento e estrutura metálica, instalação de manta térmica e asfáltica, limpeza técnica e vedação completa contra o clima da Serra Gaúcha.",
    highlights: ["Substituição de telhas e telhas sanduíche", "Calhas, rufos e condutores", "Manta térmica e isolamento", "Manutenção preventiva pós-inverno"],
    iconName: "Home",
    category: "civil"
  },
  {
    id: "pisos-acabamentos",
    title: "Pisos e acabamentos (laminados, vinílicos, parquet)",
    shortDesc: "Nivelamento térmico, assentamento milimétrico e restauração de madeiras nobres.",
    longDesc: "Aplicação profissional de porcelanatos em grandes formatos, pisos vinílicos colados ou clicados, laminados de alta resistência e sinteco/raspagem de parquets.",
    highlights: ["Pisos vinílicos e laminados", "Porcelanatos e cerâmicas retificadas", "Nivelamento autonivelante", "Rodapés em poliestireno e MDF"],
    iconName: "Layers",
    category: "acabamentos",
    popular: true
  },
  {
    id: "drywall-forros",
    title: "Drywall e forros",
    shortDesc: "Divisórias acústicas, rebaixo de gesso tabicado, sancas iluminadas e forros modulares.",
    longDesc: "Soluções rápidas e limpas para transformar ambientes residenciais ou corporativos, com isolamento acústico em lã de vidro/rocha e nichos decorativos.",
    highlights: ["Paredes e divisórias em drywall", "Forro tabicado com cortineiro", "Isolamento termoacústico", "Forro mineral para comércios"],
    iconName: "Maximize2",
    category: "acabamentos"
  },
  {
    id: "pintura-completa",
    title: "Pintura completa",
    shortDesc: "Pintura interna, externa, massa corrida, efeitos texturizados e restauração de fachadas.",
    longDesc: "Tratamento prévio de trincas e umidade, proteção de pisos e móveis com lona e fita crepe, aplicação com rolos especiais ou sistema airless de alta precisão.",
    highlights: ["Massa corrida e acrílica nivelada", "Pintura externa impermeabilizante", "Efeitos cimento queimado e texturas", "Isolamento e proteção impecáveis"],
    iconName: "Paintbrush",
    category: "acabamentos"
  },
  {
    id: "alvenaria-pedreiro",
    title: "Alvenaria e pedreiro",
    shortDesc: "Abertura de vãos, construção de paredes, reboco sarrafeado e reforço estrutural.",
    longDesc: "Serviços essenciais de alvenaria com amarração técnica, vigamento, contrapisos nivelados, bancadas de alvenaria e adaptações de layout.",
    highlights: ["Demolição controlada e descarte legal", "Reboco e contrapiso no prumo", "Abertura para portas e janelas", "Bancadas e muretas estruturadas"],
    iconName: "Hammer",
    category: "civil"
  },
  {
    id: "manutencao-predial",
    title: "Manutenção predial",
    shortDesc: "Contratos preventivos e corretivos para condomínios, lojas e indústrias.",
    longDesc: "Equipe técnica unificada para zelar pela integridade de prédios comerciais e residenciais, laudos visuais, reparo em áreas comuns e adequações às normas.",
    highlights: ["Atendimento a condomínios e síndicos", "Rotinas preventivas periódicas", "Emissão de relatórios técnicos", "Prioridade no atendimento emergencial"],
    iconName: "ShieldCheck",
    category: "manutencao"
  },
  {
    id: "faz-tudo-reparos",
    title: "Faz-tudo e pequenos reparos",
    shortDesc: "Instalação de suportes, conserto de portas, luminárias, torneiras e ajustes pontuais.",
    longDesc: "Para aquelas pendências da casa ou empresa que demandam mão de obra confiável, pontual e que deixa o ambiente perfeitamente limpo ao sair.",
    highlights: ["Instalação de cortinas, quadros e TV", "Ajuste de fechaduras e dobradiças", "Troca de torneiras e sifões", "Pequenos retoques de gesso e tinta"],
    iconName: "Wrench",
    category: "manutencao"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Avaliação & Triagem",
    description: "Avaliação prévia pelo WhatsApp sempre que possível e atendimento no endereço do cliente mediante agendamento para entender o problema e avaliar a situação.",
    tag: "Triagem ágil pelo WhatsApp"
  },
  {
    step: "02",
    title: "Orçamento com Transparência",
    description: "Apresentamos as informações necessárias para que você decida sobre o reparo: escopo detalhado, materiais recomendados, prazos e condições comerciais.",
    tag: "Transparência total e sem surpresas"
  },
  {
    step: "03",
    title: "Execução no Local",
    description: "Equipe própria especializada com ferramentas adequadas. Isenção da taxa técnica de deslocamento quando o conserto é realizado no ato da visita.",
    tag: "Isenção de taxa no conserto aprovado"
  },
  {
    step: "04",
    title: "Entrega com Garantia",
    description: "Checklist final na companhia do cliente, garantia de serviços conforme a legislação aplicável e termos da ordem de serviço, com suporte contínuo no WhatsApp.",
    tag: "Garantia formal e suporte"
  }
];

export const STATS = [
  { value: "+6", label: "Anos de atuação", detail: "Desde abril de 2020 construindo história e confiança na Serra Gaúcha" },
  { value: "+1200", label: "Obras & atendimentos", detail: "Casos residenciais, comerciais e prediais concluídos com sucesso" },
  { value: "+50", label: "Especialistas na equipe", detail: "Eletricistas, encanadores, pedreiros, telhadistas e pintores" },
  { value: "4", label: "Cidades da Serra", detail: "Caxias do Sul, Farroupilha, São Marcos e Flores da Cunha" }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    name: "Rodrigo Meneghel",
    location: "Centro, Caxias do Sul",
    date: "Agosto/2024",
    rating: 5,
    service: "Reforma Completa de Apartamento",
    text: "Contratei a Revitta para uma reforma completa de 110m². O diferencial foi o cumprimento à risca do cronograma e a limpeza ao final de cada dia. A equipe própria de elétrica e drywall resolveu tudo sem intermediários."
  },
  {
    name: "Mariana Silveira",
    location: "Bairro Panazzolo, Caxias do Sul",
    date: "Novembro/2024",
    rating: 5,
    service: "Instalação Elétrica & Iluminação",
    text: "Precisava refazer todo o quadro elétrico e a iluminação em trilho da minha loja. Responderam no WhatsApp em menos de 10 minutos, fizeram a visita no dia seguinte e entregaram o trabalho com nota fiscal e garantia."
  },
  {
    name: "Carlos Eduardo Boff",
    location: "Bairro Pio X, Farroupilha",
    date: "Janeiro/2025",
    rating: 5,
    service: "Reforma de Telhado & Calhas",
    text: "Depois de um vendaval, tivemos infiltrações sérias no telhado. A equipe da Revitta veio rapidamente, trocou as telhas trincadas e refez a calha com manta térmica. Trabalho impecável e preço justo."
  },
  {
    name: "Luciana Perini",
    location: "Centro, Flores da Cunha",
    date: "Março/2025",
    rating: 5,
    service: "Pisos Vinílicos & Pintura",
    text: "Instalaram piso vinílico em toda a casa e fizeram a pintura interna com massa corrida. O acabamento dos rodapés e cantos ficou perfeito. Recomendo de olhos fechados pela pontualidade e respeito."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como funciona o atendimento a domicílio e a taxa de deslocamento?",
    answer: "Quando necessário, a Revitta realiza atendimento no endereço do cliente mediante agendamento. Quando é necessária uma visita e o serviço não é realizado, poderá haver cobrança referente ao deslocamento e diagnóstico. Quando o conserto é aprovado e realizado no momento da visita, essa taxa é isenta, conforme as condições da empresa. Sempre que possível, realizamos a avaliação prévia pelo WhatsApp.",
    tag: "Atendimento & Taxa"
  },
  {
    question: "Quanto custa uma reforma em Caxias do Sul e região?",
    answer: "O custo depende do escopo, dos materiais e do estado do imóvel. Realizamos avaliação prévia pelo WhatsApp com fotos/vídeos e, quando necessário, visita técnica no endereço mediante agendamento, com isenção da taxa no conserto aprovado. Enviamos proposta clara e detalhada para você decidir com segurança.",
    tag: "Valores & Proposta"
  },
  {
    question: "Quais regiões a Revitta atende?",
    answer: "Atendemos Caxias do Sul, Farroupilha (95180-000), São Marcos (95190-000) e Flores da Cunha (95270-000), no Rio Grande do Sul, para reformas, manutenções e construções residenciais, comerciais e industriais.",
    tag: "Cobertura Regional"
  },
  {
    question: "A Revitta atende emergências 24h?",
    answer: "Sim. Nossa equipe presta atendimento de emergência 24h para vazamentos graves, falhas elétricas e imprevistos que ofereçam risco ao imóvel. Chame no WhatsApp, descreva a situação e receba orientação e agendamento prioritário.",
    tag: "Plantão 24h"
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos Dinheiro, PIX e Cartão de crédito (com parcelamento conforme condições comerciais). Tudo é informado com transparência prévia no orçamento.",
    tag: "Pagamento"
  },
  {
    question: "Como funciona a garantia dos serviços?",
    answer: "As condições de garantia dos serviços prestados pela Revitta seguem rigorosamente a legislação aplicável (Código de Defesa do Consumidor) e as condições informadas no orçamento e/ou ordem de serviço, com suporte pós-obra direto pelo WhatsApp.",
    tag: "Garantia & Legislação"
  },
  {
    question: "Quais serviços a Revitta realiza?",
    answer: "Reformas residenciais e comerciais, instalação elétrica, encanamento e hidráulica, reforma de telhados, pisos laminados, vinílicos e parquet, drywall, forros, pintura, alvenaria e manutenção predial, com gestão completa.",
    tag: "Serviços"
  },
  {
    question: "Como pedir atendimento ou orçamento?",
    answer: "Clique no botão de WhatsApp do site, chame no (54) 99216-2361 ou selecione seu serviço. Realizamos avaliação prévia com fotos e medidas pelo WhatsApp para facilitar sua rotina e agendamos atendimento quando necessário.",
    tag: "Como Solicitar"
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "reforma-sala",
    title: "Reforma Residencial Integrada & Iluminação",
    category: "Residencial",
    location: "Centro, Caxias do Sul",
    description: "Eliminação de parede divisória, forro tabicado de gesso com iluminação cênica e piso laminado de alta resistência.",
    beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    beforeLabel: "Antes (Estado original desgastado)",
    afterLabel: "Depois (Entrega Revitta com garantia)"
  },
  {
    id: "banheiro-porcelanato",
    title: "Banheiro Moderno em Grandes Formatos",
    category: "Acabamentos",
    location: "Bairro Cinquentenário, Caxias do Sul",
    description: "Substituição completa de encanamento antigo por tubulações PPR, nicho embutido esculpido e porcelanato 90x90 retificado.",
    beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=70",
    afterImg: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    beforeLabel: "Antes (Tubulação aparente e cerâmica antiga)",
    afterLabel: "Depois (Nicho iluminado e porcelanato acetinado)"
  },
  {
    id: "reforma-comercial",
    title: "Espaço Corporativo e Forro Acústico",
    category: "Comercial",
    location: "Farroupilha - RS",
    description: "Divisórias em drywall acústico com lã de vidro, nova fiação trifásica e pintura corporativa de alta durabilidade.",
    beforeImg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=70",
    afterImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    beforeLabel: "Antes (Galpão desestruturado)",
    afterLabel: "Depois (Escritório executivo pronto para uso)"
  }
];

// Helper to generate WhatsApp URL with sanitized encoding
export function createWhatsAppUrl(customMessage?: string): string {
  const defaultText = "Olá! Vim pelo site da Revitta e gostaria de um orçamento sem compromisso.";
  const text = customMessage && customMessage.trim().length > 0 ? customMessage : defaultText;
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
}

export function createServiceCityWhatsAppUrl(serviceTitle: string, cityName: string): string {
  const text = `Olá! Quero um orçamento de ${serviceTitle} em ${cityName}. (Vim pelo site da Revitta.)`;
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
}
