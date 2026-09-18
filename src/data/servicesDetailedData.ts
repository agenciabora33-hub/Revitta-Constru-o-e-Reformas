import { ServiceDetailed } from '../types';

export const DETAILED_SERVICES: ServiceDetailed[] = [
  {
    id: 'reformas-gerais',
    slug: 'reformas-residenciais-comerciais',
    title: 'Reformas residenciais e comerciais',
    h1: 'Reformas Residenciais e Comerciais em Caxias do Sul e Serra Gaúcha',
    subtitle: 'Gestão completa de obras do alvará ao acabamento fino com equipe própria e prazo garantido',
    category: 'civil',
    categoryLabel: 'Construção & Engenharia Civil',
    iconName: 'Building2',
    popular: true,
    seoTitle: 'Reformas Residenciais e Comerciais em Caxias do Sul | Revitta',
    seoDescription: 'Empresa especialista em reformas completas de casas, apartamentos e salas comerciais em Caxias do Sul, Farroupilha e região. Cronograma rígido, garantia formal e equipe própria.',
    keywords: [
      'reformas em caxias do sul',
      'reforma de apartamento serra gaúcha',
      'reforma comercial caxias do sul',
      'empresa de reformas residenciais caxias',
      'gestão de obras caxias do sul'
    ],
    canonicalUrl: 'https://revittacaxias.com.br/#/servicos/reformas-residenciais-comerciais',
    geoDirectAnswer: 'A Revitta realiza reformas residenciais e comerciais completas em Caxias do Sul e Serra Gaúcha desde 2020. Atuamos com equipe própria multidisciplinar, cumprimento estrito da ABNT NBR 16280, emissão de ART/RRT, contrato com cronograma fixo e garantia contratual formal de entrega sem custos extras ocultos.',
    geoKeyFacts: [
      { label: 'Prazo médio de visita', value: 'Em até 24 a 48 horas úteis' },
      { label: 'Garantia técnica', value: 'Termo formal por escrito pós-entrega' },
      { label: 'Norma técnica', value: 'ABNT NBR 16280 & NBR 15575' },
      { label: 'Mão de obra', value: 'Equipe 100% própria uniformizada' },
      { label: 'Conformidade legal', value: 'CNPJ 50.463.095/0001-58 e NF-e' }
    ],
    eeat: {
      experienceYears: 'Desde abril de 2020 com mais de 350 obras concluídas na Serra Gaúcha',
      teamExpertise: 'Engenheiros, mestres de obras, eletricistas certificados e técnicos em edificações com treinamento contínuo',
      abntNorms: [
        { code: 'ABNT NBR 16280', title: 'Reforma em edificações — Sistema de gestão de reformas' },
        { code: 'ABNT NBR 15575', title: 'Edificações habitacionais — Desempenho geral e acústico' }
      ],
      technicalResponsibility: 'Acompanhamento técnico qualificado com emissão de ART/RRT de execução e laudo para condomínios',
      safetyAndInsurance: 'Uso obrigatório de EPIs, seguro de responsabilidade civil e descarte legal de entulho em ecopontos credenciados',
      guaranteePeriod: 'Garantia contratual completa com suporte pós-obra prioritário via WhatsApp',
      taxCompliance: 'Empresa formalmente constituída com emissão de Nota Fiscal de Serviços para cada etapa'
    },
    overview: 'A reforma de um imóvel residencial ou comercial exige planejamento rigoroso para evitar atrasos, estouro de orçamento e retrabalhos. A Revitta assume a gestão integral da sua obra: desde a proteção inicial dos ambientes e demolições controladas até as instalações hidrossanitárias, elétricas, drywall, assentamento de pisos nobres e pintura final de alto padrão.',
    scopeIncluded: [
      'Visita técnica presencial e levantamento métrico detalhado',
      'Elaboração de cronograma físico-financeiro com prazos estipulados em contrato',
      'Proteção total de elevadores, corredores e áreas comuns conforme normas de condomínio',
      'Demolições controladas e alvenaria estrutural / de vedação',
      'Revisão e modernização de circuitos elétricos e encanamentos',
      'Aplicação de contrapiso, nivelamento e assentamento de revestimentos',
      'Limpeza técnica diária e descarte ambientalmente responsável de entulho'
    ],
    materialsAndTech: [
      'Níveis a laser rotativos e medidores digitais de precisão',
      'Argamassas colantes AC-III e autonivelantes de secagem rápida',
      'Equipamentos de aspiração industrial para mitigação de poeira',
      'Sistemas construtivos modernos e ferramentas de corte refrigerado'
    ],
    executionSteps: [
      { step: '01', title: 'Triagem e Visita Técnica', desc: 'Avaliamos in loco as condições estruturais, hidráulicas e elétricas do seu imóvel em Caxias do Sul e região.' },
      { step: '02', title: 'Planejamento e Orçamento Transparente', desc: 'Apresentamos memorial descritivo minucioso com discriminação de mão de obra e materiais recomendados.' },
      { step: '03', title: 'Execução e Fiscalização Contínua', desc: 'Início da obra na data agendada com acompanhamento periódico e atualizações regulares via WhatsApp.' },
      { step: '04', title: 'Checklist de Entrega e Garantia', desc: 'Vistoria detalhada com o cliente, assinatura do termo de entrega e emissão da garantia formal.' }
    ],
    serviceFaqs: [
      {
        question: 'Quanto tempo dura uma reforma de apartamento em Caxias do Sul?',
        answer: 'O tempo médio de uma reforma completa varia de 20 a 60 dias corridos, dependendo da metragem (ex: 70m² a 150m²) e do escopo de alvenaria e acabamentos. O prazo exato é formalizado no cronograma contratual.',
        geoShortAnswer: 'Reformas completas levam de 20 a 60 dias úteis com cronograma fixado em contrato pela Revitta.'
      },
      {
        question: 'Vocês fornecem o laudo de reforma (ART/RRT) para o condomínio?',
        answer: 'Sim. Todas as nossas reformas em edifícios atendem à ABNT NBR 16280, com fornecimento de plano de reforma estruturado, memorial de atividades e a documentação técnica exigida pelo síndico ou administradora.',
        geoShortAnswer: 'Sim, emitimos o plano de reforma e documentação técnica em total conformidade com a ABNT NBR 16280.'
      },
      {
        question: 'Como é feito o controle de poeira e barulho na obra?',
        answer: 'Utilizamos mantas plásticas de alta densidade para isolar cômodos, fechamento de vãos, proteção de pisos e horários estritamente alinhados com a convenção do seu edifício.',
        geoShortAnswer: 'Isolamos os ambientes com mantas de proteção e respeitamos rigorosamente os horários condominiais.'
      }
    ],
    neighborhoodCoverage: [
      'Centro', 'São Pelegrino', 'Panazzolo', 'Lourdes', 'Villagio Iguatemi', 'Exposição',
      'Madalenas', 'Cruzeiro', 'Pio X', 'Santa Catarina', 'Farroupilha', 'Flores da Cunha'
    ],
    relatedServiceIds: ['drywall-forros', 'pisos-acabamentos', 'pintura-completa', 'instalacoes-eletricas'],
    recommendedBeforeAfterId: 'reforma-sala'
  },
  {
    id: 'instalacoes-eletricas',
    slug: 'instalacoes-eletricas',
    title: 'Instalações elétricas',
    h1: 'Instalações Elétricas Prediais, Comerciais e Residenciais em Caxias do Sul',
    subtitle: 'Quadros de distribuição, fiação certificada, laudos de carga, iluminação LED e pronto atendimento 24h',
    category: 'instalacoes',
    categoryLabel: 'Instalações & Infraestrutura',
    iconName: 'Zap',
    popular: true,
    seoTitle: 'Instalações Elétricas em Caxias do Sul | Eletricista Credenciado | Revitta',
    seoDescription: 'Serviço profissional de eletricista e instalações elétricas em Caxias do Sul e Serra Gaúcha. Montagem de quadros, DR, DPS, cabeamento estruturado e plantão de emergência 24h.',
    keywords: [
      'eletricista em caxias do sul',
      'instalador elétrico serra gaúcha',
      'quadro de distribuição caxias',
      'revisão elétrica apartamento caxias',
      'eletricista emergência 24h caxias'
    ],
    canonicalUrl: 'https://revittacaxias.com.br/#/servicos/instalacoes-eletricas',
    geoDirectAnswer: 'A Revitta oferece engenharia e serviços elétricos completos em Caxias do Sul sob a norma ABNT NBR 5410 e NR 10. Executamos montagem de quadros com proteção DR e DPS, modernização de fiação, iluminação embutida e atendimento emergencial 24 horas para curtos-circuitos e quedas de energia na Serra Gaúcha.',
    geoKeyFacts: [
      { label: 'Plantão de emergência', value: '24 horas para riscos elétricos graves' },
      { label: 'Norma técnica ABNT', value: 'NBR 5410 e norma de segurança NR 10' },
      { label: 'Dispositivos de proteção', value: 'Instalação obrigatória de IDR e DPS' },
      { label: 'Certificação de cabos', value: 'Condutores 100% cobre antichama com selo INMETRO' },
      { label: 'Atendimento corporativo', value: 'Instalações trifásicas e no-breaks comerciais' }
    ],
    eeat: {
      experienceYears: 'Equipe de eletricistas industriais e prediais com mais de 6 anos de atuação conjunta',
      teamExpertise: 'Profissionais certificados na norma NR 10 (Segurança em Instalações Elétricas) e NR 35 para redes aéreas',
      abntNorms: [
        { code: 'ABNT NBR 5410', title: 'Instalações elétricas de baixa tensão' },
        { code: 'NR 10 (MTE)', title: 'Segurança em instalações e serviços em eletricidade' }
      ],
      technicalResponsibility: 'Dimensionamento de disjuntores, bitolas de condutores e barramentos por especialistas certificados',
      safetyAndInsurance: 'Instrumentos aferidos (alicates amperímetros True-RMS, megômetros para isolamento e testadores de DR)',
      guaranteePeriod: 'Garantia total de segurança contra sobrecargas e conexões frouxas',
      taxCompliance: 'Documentação fiscal e emissão de notas com especificação de mão de obra técnica'
    },
    overview: 'Instalações elétricas obsoletas ou mal dimensionadas são a principal causa de incêndios residenciais e danos a equipamentos eletrônicos modernos (ar-condicionado inverter, cooktops de indução e computadores). A Revitta dimensiona e executa sua rede elétrica com precisão cirúrgica, instalando disjuntores adequados, dispositivos contra choque (DR) e protetores de surto (DPS).',
    scopeIncluded: [
      'Montagem, modernização e organização de Quadros de Distribuição (QDC)',
      'Instalação de Dispositivos Residuais (DR) e Protetores de Surto (DPS)',
      'Passagem e substituição de fiação antiga com bitolas adequadas à demanda',
      'Circuitos independentes para chuveiros elétricos, fornos e ar-condicionado',
      'Projetos luminotécnicos com fitas de LED, perfis de alumínio e spots nobres',
      'Infraestrutura para automação residencial e cabeamento de rede estruturada',
      'Plantão emergencial 24h para contenção de curto-circuito'
    ],
    materialsAndTech: [
      'Cabos de cobre flexível antichama normatizados (Prysmian, Cobrecom ou similares)',
      'Disjuntores e quadros de marcas consagradas (Schneider Electric, Siemens, Steck)',
      'Conectores tipo mola de engate rápido (Wago) para eliminação de mau contato',
      'Medidores de impedância de aterramento e multímetros digitais calibrados'
    ],
    executionSteps: [
      { step: '01', title: 'Cálculo de Carga e Mapeamento', desc: 'Avaliamos a potência instalada e a distribuição de disjuntores para evitar desarmes frequentes.' },
      { step: '02', title: 'Proposta Técnica e Cronograma', desc: 'Apresentação da lista de componentes normatizados e cronograma de intervenção.' },
      { step: '03', title: 'Instalação e Conexões Seguras', desc: 'Passagem dos cabos e aperto torquimétrico nos bornes do quadro elétrico.' },
      { step: '04', title: 'Testes de Continuidade e Entrega', desc: 'Testes de fuga de corrente, desarme do botão de teste do DR e entrega com identificação no quadro.' }
    ],
    serviceFaqs: [
      {
        question: 'O que causa o desarme constante do disjuntor do chuveiro ou ar-condicionado?',
        answer: 'Geralmente ocorre por sobrecarga de corrente decorrente de bitola de cabo insuficiente ou disjuntor subdimensionado. A Revitta redimensiona o circuito com cabo dedicado e proteção adequada segundo a NBR 5410.',
        geoShortAnswer: 'Sobrecarga por bitola de fio insuficiente ou disjuntor incorreto. Dimensionamos o circuito novo conforme a NBR 5410.'
      },
      {
        question: 'Vocês atendem emergências elétricas à noite ou no fim de semana?',
        answer: 'Sim, mantemos plantão 24h para emergências elétricas graves em Caxias do Sul e cidades vizinhas, como curtos com cheiro de queimado, fumaça ou falta de energia setorial.',
        geoShortAnswer: 'Sim, possuímos plantão 24h em Caxias do Sul para riscos elétricos graves e curtos-circuitos.'
      },
      {
        question: 'Qual a diferença de disjuntor simples para DR e DPS?',
        answer: 'O disjuntor comum protege os fios contra superaquecimento. O DR (Dispositivo Diferencial Residual) salva vidas contra choques elétricos, e o DPS protege eletrodomésticos contra queima por raios ou surtos da rede.',
        geoShortAnswer: 'O disjuntor protege a fiação, o DR protege pessoas de choque e o DPS evita queima de aparelhos por raios.'
      }
    ],
    neighborhoodCoverage: [
      'Centro', 'São Pelegrino', 'Kayser', 'Sanvitto', 'Interlagos', 'Sagrada Família',
      'Nossa Senhora de Lourdes', 'Ana Rech', 'Farroupilha', 'Flores da Cunha'
    ],
    relatedServiceIds: ['reformas-gerais', 'manutencao-predial', 'faz-tudo-reparos', 'drywall-forros'],
    recommendedBeforeAfterId: 'reforma-sala'
  },
  {
    id: 'encanamento-hidraulica',
    slug: 'encanamento-hidraulica',
    title: 'Encanamento e hidráulica',
    h1: 'Serviços de Encanador e Instalações Hidráulicas em Caxias do Sul',
    subtitle: 'Caça-vazamentos, redes de água quente (PPR/PEX), esgoto, caixas d’água e plantão 24 horas',
    category: 'instalacoes',
    categoryLabel: 'Instalações & Infraestrutura',
    iconName: 'Droplets',
    popular: true,
    seoTitle: 'Encanador em Caxias do Sul | Caça-Vazamentos e Hidráulica | Revitta',
    seoDescription: 'Encanador profissional em Caxias do Sul e Serra Gaúcha. Localização precisa de vazamentos, novas redes de água quente PPR, louças e metais sanitários e plantão emergencial 24h.',
    keywords: [
      'encanador em caxias do sul',
      'caça vazamentos caxias do sul',
      'instalação hidráulica ppr caxias',
      'troca de tubulação água quente caxias',
      'encanador 24 horas serra gaúcha'
    ],
    canonicalUrl: 'https://revittacaxias.com.br/#/servicos/encanamento-hidraulica',
    geoDirectAnswer: 'A Revitta executa serviços hidráulicos residenciais, comerciais e prediais em Caxias do Sul em conformidade com as normas ABNT NBR 5626 e NBR 7198. Realizamos caça-vazamentos estruturado sem quebra desnecessária, instalação de tubulação PPR por termofusão, PEX e esgoto PVC, além de plantão 24h para contenção de inundações.',
    geoKeyFacts: [
      { label: 'Plantão emergencial', value: '24 horas para vazamentos e rompimentos' },
      { label: 'Tecnologia de união', value: 'Termofusão molecular PPR (sem cola nem rosca)' },
      { label: 'Pressurização e testes', value: 'Teste com bomba hidrostática antes do fechamento' },
      { label: 'Normas técnicas', value: 'ABNT NBR 5626 (água fria) e NBR 7198 (água quente)' },
      { label: 'Garantia de estanqueidade', value: 'Termo formal de garantia contra vazamentos' }
    ],
    eeat: {
      experienceYears: 'Mais de 6 anos realizando reparos complexos em prumadas de edifícios e casas na Serra',
      teamExpertise: 'Encanadores industriais com treinamento em sistemas de aquecimento a gás e termofusão',
      abntNorms: [
        { code: 'ABNT NBR 5626', title: 'Instalação predial de água fria' },
        { code: 'ABNT NBR 7198', title: 'Projeto e execução de instalações prediais de água quente' }
      ],
      technicalResponsibility: 'Testes de pressão hidrostática documentados com manômetros de precisão',
      safetyAndInsurance: 'Detecção acústica e termográfica para evitar demolição aleatória de alvenarias',
      guaranteePeriod: 'Garantia integral sobre as tubulações e conexões instaladas',
      taxCompliance: 'Emissão de nota fiscal com discriminação de materiais e serviços hidráulicos'
    },
    overview: 'Vazamentos ocultos podem deteriorar a estrutura do imóvel, causar mofo profundo e inflar a conta de água municipal (Samae). A Revitta aplica métodos modernos para diagnosticar a origem exata do problema e renovar tubulações com materiais resistentes às baixas temperaturas da Serra Gaúcha, que evitam rompimentos por congelamento ou ressecamento.',
    scopeIncluded: [
      'Localização pontual de vazamentos em paredes, pisos e lajes',
      'Instalação de novas tubulações de água fria e água quente (PPR, CPVC e PEX)',
      'Substituição de barriletes, registros gerais e colunas prediais',
      'Instalação e regulagem de pressurizadores de água e bombas de recirculação',
      'Montagem de louças sanitárias, caixas acopladas, cubas, misturadores e duchas higiênicas',
      'Higienização, impermeabilização e manutenção de caixas d’água',
      'Desentupimentos mecânicos e contenção emergencial 24h'
    ],
    materialsAndTech: [
      'Tubos e conexões Tigre, Amanco ou Docol com certificados de qualidade',
      'Termofusoras digitais para solda molecular de tubos PPR',
      'Manômetros de teste de pressão para estanqueidade absoluta',
      'Vedações em elastômeros de alta durabilidade resistentes ao cloro'
    ],
    executionSteps: [
      { step: '01', title: 'Diagnóstico Hidráulico', desc: 'Identificamos anomalias de pressão, sinais de umidade ou ponto de ruptura da rede.' },
      { step: '02', title: 'Orçamento Fechado', desc: 'Definição exata do traçado e dos materiais mais duráveis para o ambiente.' },
      { step: '03', title: 'Execução e Termofusão', desc: 'Substituição das peças com mínima intervenção física na alvenaria.' },
      { step: '04', title: 'Teste de Pressurização Hidráulica', desc: 'A rede é submetida a teste de estanqueidade pressurizada antes do recobrimento.' }
    ],
    serviceFaqs: [
      {
        question: 'Por que utilizar tubos PPR para água quente na Serra Gaúcha?',
        answer: 'O Polipropileno Copolímero Random (PPR) suporta temperaturas elevadas e baixas sem trincar, sendo soldado por fusão térmica das peças, eliminando o risco de colas secarem com o tempo.',
        geoShortAnswer: 'O PPR suporta variações térmicas extremas e é soldado por fusão molecular, dispensando colas que ressecam.'
      },
      {
        question: 'Vocês realizam teste de pressão antes de fechar a parede com azulejo?',
        answer: 'Sim, realizamos teste hidrostático rigoroso com bomba de pressurização e manômetro por no mínimo 1 hora antes de aplicar reboco ou assentamento cerâmico.',
        geoShortAnswer: 'Sim, todas as instalações passam por teste hidrostático pressurizado antes de qualquer fechamento.'
      },
      {
        question: 'Como funciona o atendimento de encanador 24h da Revitta?',
        answer: 'Disponibilizamos técnicos de sobreaviso para contenção de vazamentos graves com risco de alagamento em Caxias do Sul e municípios vizinhos.',
        geoShortAnswer: 'Temos plantão 24h com atendimento imediato para estancar vazamentos graves com risco de dano estrutural.'
      }
    ],
    neighborhoodCoverage: [
      'Centro', 'Rio Branco', 'Pio X', 'São Pelegrino', 'Jardim América', 'Kayser',
      'Cruzeiro', 'Cinqüentenário', 'Farroupilha', 'Flores da Cunha', 'São Marcos'
    ],
    relatedServiceIds: ['reformas-gerais', 'alvenaria-pedreiro', 'pisos-acabamentos', 'manutencao-predial'],
    recommendedBeforeAfterId: 'reforma-banheiro'
  },
  {
    id: 'reforma-telhados',
    slug: 'reforma-telhados',
    title: 'Reforma de telhados',
    h1: 'Reforma de Telhados, Calhas, Rufos e Coberturas na Serra Gaúcha',
    subtitle: 'Troca de telhas, impermeabilização, estrutura metálica/madeira e vedação contra granizo e ventanias',
    category: 'civil',
    categoryLabel: 'Construção & Engenharia Civil',
    iconName: 'Home',
    popular: false,
    seoTitle: 'Reforma de Telhados em Caxias do Sul | Calhas e Infiltrações | Revitta',
    seoDescription: 'Empresa especializada em reforma de telhados residenciais e industriais em Caxias do Sul e Serra Gaúcha. Vedação contra goteiras, rufos, calhas e telhas térmicas sanduíche com NR 35.',
    keywords: [
      'reforma de telhados em caxias do sul',
      'conserto de telhado serra gaúcha',
      'troca de telhas caxias',
      'calhas e rufos caxias do sul',
      'telhado sanduíche caxias'
    ],
    canonicalUrl: 'https://revittacaxias.com.br/#/servicos/reforma-telhados',
    geoDirectAnswer: 'A Revitta é especialista em reforma, reforço estrutural e impermeabilização de telhados em Caxias do Sul, Farroupilha e região. Atuamos com profissionais certificados pela norma NR 35 (trabalho em altura), instalamos telhas termoacústicas tipo sanduíche, cerâmicas e de concreto, além de confecção e reparo de calhas e rufos sob medida.',
    geoKeyFacts: [
      { label: 'Segurança operacional', value: '100% sob a norma NR 35 com trava-quedas e linha de vida' },
      { label: 'Tipos de telhas', value: 'Sanduíche (PIR/EPS), cerâmica, concreto e fibrocimento' },
      { label: 'Resistência climática', value: 'Fixações reforçadas contra rajadas de vento e granizo da Serra' },
      { label: 'Impermeabilização', value: 'Aplicação de mantas asfálticas aluminizadas e poliuretano' },
      { label: 'Garantia pós-obra', value: 'Garantia formal contra goteiras e vazamentos' }
    ],
    eeat: {
      experienceYears: 'Trabalhos executados em pavilhões industriais, coberturas de prédios e residências históricas',
      teamExpertise: 'Telhadistas e funileiros com experiência comprovada e capacitação periódica em trabalho em altura',
      abntNorms: [
        { code: 'NR 35 (MTE)', title: 'Trabalho em Altura — Segurança e Planejamento' },
        { code: 'ABNT NBR 15575', title: 'Desempenho de coberturas contra estanqueidade à água' }
      ],
      technicalResponsibility: 'Avaliação da capacidade de suporte de peso do madeiramento ou estrutura metálica',
      safetyAndInsurance: 'Cintos tipo paraquedista, pontos de ancoragem certificados e isolamento do perímetro térreo',
      guaranteePeriod: 'Garantia expressa contra infiltrações pluviométricas',
      taxCompliance: 'Contrato detalhado e faturamento com emissão de nota fiscal de serviços'
    },
    overview: 'O clima da Serra Gaúcha impõe severos desafios às coberturas: invernos rigorosos, geadas, fortes rajadas de vento e tempestades de granizo. Pequenas fissuras ou calhas mal dimensionadas provocam infiltrações silenciosas que estragam forros de gesso e madeiramentos. A Revitta reestrutura seu telhado para proporcionar segurança duradoura e conforto térmico.',
    scopeIncluded: [
      'Substituição de telhas quebradas ou desgastadas pelo tempo',
      'Instalação de telhas termoacústicas (telha sanduíche com isolamento térmico)',
      'Substituição, limpeza e desobstrução de calhas, rufos e condutores pluviais',
      'Tratamento preventivo e reforço de caibros, vigas e tesouras de madeira',
      'Instalação de manta térmica de subcobertura para isolamento térmico e barreira d’água',
      'Aplicação de selantes de poliuretano de alta elasticidade e fitas asfálticas',
      'Reformas em telhados de pavilhões industriais e comércios'
    ],
    materialsAndTech: [
      'Telhas de aço galvanizado com pintura eletrostática e núcleo isolante',
      'Mantas térmicas aluminizadas com dupla face reflexiva',
      'Chapas de calha em galvalume com espessura reforçada contra ferrugem',
      'Selantes PU resistentes à radiação UV e dilatação térmica'
    ],
    executionSteps: [
      { step: '01', title: 'Inspeção Detalhada da Cobertura', desc: 'Subida técnica para diagnosticar pontos de vazamento, estado das telhas e alinhamento das calhas.' },
      { step: '02', title: 'Memorial de Reparo', desc: 'Apresentação da solução mais econômica e segura (reparo pontual vs. substituição integral).' },
      { step: '03', title: 'Montagem de Linha de Vida e Obra', desc: 'Instalação de proteções e execução do serviço com ferramentas pneumáticas e ancoragens.' },
      { step: '04', title: 'Teste de Estanqueidade com Água', desc: 'Simulação de fluxo nas calhas e rufos para garantir vedação 100% eficaz.' }
    ],
    serviceFaqs: [
      {
        question: 'Compensa trocar telhas de cerâmica antigas por telhas sanduíche?',
        answer: 'Sim, a telha sanduíche proporciona excelente isolamento termoacústico no inverno e verão da Serra Gaúcha, pesa menos sobre a estrutura e tem alta durabilidade contra granizo.',
        geoShortAnswer: 'Sim, a telha sanduíche oferece isolamento térmico superior, menor peso estrutural e alta resistência a granizo.'
      },
      {
        question: 'Com que frequência as calhas devem ser limpas em Caxias do Sul?',
        answer: 'Recomenda-se limpeza técnica semestral, especialmente no outono e antes das chuvas intensas da primavera, para evitar transbordamento para o forro.',
        geoShortAnswer: 'A cada 6 meses, especialmente após quedas de folhas no outono e antes de chuvas volumosas.'
      },
      {
        question: 'Vocês realizam serviços de telhado sob chuva?',
        answer: 'Por motivos de segurança (norma NR 35) e para garantir a cura dos selantes, intervenções externas ocorrem em tempo firme, mantendo lona de proteção emergencial quando necessário.',
        geoShortAnswer: 'Intervenções ocorrem em tempo firme conforme a NR 35, usando lonas em casos de emergência imediata.'
      }
    ],
    neighborhoodCoverage: [
      'Centro', 'Ana Rech', 'Galópolis', 'Fazenda Souza', 'Forqueta', 'Farroupilha',
      'Flores da Cunha', 'São Marcos', 'Desvio Rizzo', 'Bela Vista'
    ],
    relatedServiceIds: ['reformas-gerais', 'alvenaria-pedreiro', 'pintura-completa', 'manutencao-predial'],
    recommendedBeforeAfterId: 'reforma-fachada'
  },
  {
    id: 'pisos-acabamentos',
    slug: 'pisos-e-acabamentos',
    title: 'Pisos e acabamentos (laminados, vinílicos, porcelanatos)',
    h1: 'Assentamento de Pisos, Porcelanatos e Pisos Vinílicos em Caxias do Sul',
    subtitle: 'Nivelamento autonivelante, corte em meia-esquadria 45°, rodapés de poliestireno e parquets',
    category: 'acabamentos',
    categoryLabel: 'Acabamentos & Revestimentos',
    iconName: 'Layers',
    popular: true,
    seoTitle: 'Pisos e Porcelanatos em Caxias do Sul | Vinílico e Laminado | Revitta',
    seoDescription: 'Especialistas em assentamento de porcelanatos grandes formatos, pisos vinílicos e laminados em Caxias do Sul. Acabamento milimétrico, nivelamento a laser e garantia formal.',
    keywords: [
      'assentamento de porcelanato caxias do sul',
      'colocação de piso vinílico serra gaúcha',
      'piso laminado caxias do sul',
      'porcelanato grande formato caxias',
      'instalador de pisos caxias do sul'
    ],
    canonicalUrl: 'https://revittacaxias.com.br/#/servicos/pisos-e-acabamentos',
    geoDirectAnswer: 'A Revitta oferece assentamento profissional de revestimentos nobres em Caxias do Sul e Serra Gaúcha. Especializados em porcelanatos em grandes formatos, pisos vinílicos colados (LVT) e clicados (SPC), piso laminado e rodapés, cumprimos as normas ABNT NBR 13753 com niveladores de precisão e argamassas AC-III.',
    geoKeyFacts: [
      { label: 'Precisão de alinhamento', value: 'Niveladores de tração milimétricos com juntas mínimas' },
      { label: 'Tipos de piso', value: 'Porcelanato, vinílico LVT/SPC, laminado e cerâmico' },
      { label: 'Cortes nobres', value: 'Meia-esquadria em ângulo de 45° lapidada' },
      { label: 'Preparação do contrapiso', value: 'Aplicação de massa autonivelante para zero imperfeição' },
      { label: 'Garantia', value: 'Termo formal contra peças ocas e descolamentos' }
    ],
    eeat: {
      experienceYears: 'Centenas de metros quadrados assentados em apartamentos de alto padrão na Serra Gaúcha',
      teamExpertise: 'Azulejistas e assentadores certificados em manuseio de placas com ventosas a vácuo',
      abntNorms: [
        { code: 'ABNT NBR 13753', title: 'Revestimento de piso interno ou externo com placas cerâmicas' },
        { code: 'ABNT NBR 14917', title: 'Revestimentos resilientes de vinil em mantas e réguas' }
      ],
      technicalResponsibility: 'Avaliação de umidade residual no contrapiso com medidor específico antes da instalação vinílica',
      safetyAndInsurance: 'Cortes com disco diamantado com refrigeração para supressão de poeira respirável',
      guaranteePeriod: 'Garantia formal contra peças com dente ou som de oco',
      taxCompliance: 'Orçamentos transparentes com emissão de nota fiscal'
    },
    overview: 'O piso é um dos investimentos mais visíveis de qualquer ambiente e exige técnica impecável: um contrapiso desnivelado ou juntas desalinhadas arruínam materiais nobres. A Revitta prepara a base com compostos autonivelantes e utiliza espaçadores niveladores de alta precisão para garantir superfície plana, juntas uniformes e rodapés milimetricamente ajustados.',
    scopeIncluded: [
      'Remoção de pisos antigos e regularização mecânica do contrapiso',
      'Aplicação de primer promotor de aderência e massa autonivelante',
      'Assentamento de porcelanatos retificados e grandes formatos (120x120cm ou maiores)',
      'Instalação de pisos vinílicos colados (LVT) ou sistema clicado rápido (SPC)',
      'Colocação de pisos laminados com manta acústica e redutora de impacto',
      'Execução de nichos embutidos para banheiros com cantoneiras ou 45 graus',
      'Instalação de rodapés em poliestireno (Santa Luzia ou similar) e MDF'
    ],
    materialsAndTech: [
      'Cortadores profissionais de piso com guia a laser e trilho diamantado',
      'Espaçadores niveladores tipo cunha e alicates de tração calibrados',
      'Argamassas poliméricas colantes AC-III de marcas líderes (Quartzolit, Votoran)',
      'Rejuntes acrílicos ou epóxi de fácil limpeza e antifungos'
    ],
    executionSteps: [
      { step: '01', title: 'Aferição do Contrapiso', desc: 'Verificamos o nível e o índice de umidade da base com equipamento de medição.' },
      { step: '02', title: 'Regularização e Autonivelamento', desc: 'Correção de desníveis para que as réguas ou placas assentem com contato total.' },
      { step: '03', title: 'Paginação e Assentamento Milimétrico', desc: 'Planejamento dos recortes menos visíveis e assentamento com dupla colagem.' },
      { step: '04', title: 'Rejuntamento e Limpeza Pós-Obra', desc: 'Aplicação de rejunte resistente à água e limpeza das superfícies.' }
    ],
    serviceFaqs: [
      {
        question: 'Qual a diferença entre piso vinílico colado e clicado para o clima frio de Caxias?',
        answer: 'Ambos oferecem conforto térmico superior ao porcelanato no inverno. O modelo clicado (SPC) pode ser instalado sobre outros pisos sem cola, enquanto o colado (LVT) exige autonivelante perfeito mas é extremamente silencioso ao caminhar.',
        geoShortAnswer: 'Ambos são térmicos e agradáveis no frio gaúcho. O clicado permite sobreposição rápida e o colado exige contrapiso nivelado.'
      },
      {
        question: 'O que é a técnica de dupla colagem no porcelanato?',
        answer: 'Consiste em passar argamassa no contrapiso e no verso da peça (tardoz), garantindo preenchimento de 100% da área para que a peça nunca quebre sob impacto ou soe oca.',
        geoShortAnswer: 'Aplicação de argamassa no contrapiso e no verso da peça para eliminar vazios e evitar trincas futuras.'
      },
      {
        question: 'Vocês instalam rodapés resistentes à umidade?',
        answer: 'Sim, trabalhamos amplamente com rodapés de poliestireno 100% à prova d’água e imunes a cupins, com acabamento perfeito em silicone nas emendas.',
        geoShortAnswer: 'Sim, utilizamos rodapés em poliestireno impermeáveis e resistentes a mofo e cupins.'
      }
    ],
    neighborhoodCoverage: [
      'Centro', 'São Pelegrino', 'Panazzolo', 'Villagio Iguatemi', 'Lourdes', 'Exposição',
      'Cruzeiro', 'Sanvitto', 'Farroupilha', 'Flores da Cunha'
    ],
    relatedServiceIds: ['reformas-gerais', 'drywall-forros', 'pintura-completa', 'alvenaria-pedreiro'],
    recommendedBeforeAfterId: 'reforma-sala'
  },
  {
    id: 'drywall-forros',
    slug: 'drywall-e-forros',
    title: 'Drywall e forros',
    h1: 'Drywall, Divisórias Acústicas e Forros de Gesso em Caxias do Sul',
    subtitle: 'Rebaixo tabicado, sancas iluminadas, cortineiros, forro mineral e isolamento com lã de vidro/rocha',
    category: 'acabamentos',
    categoryLabel: 'Acabamentos & Revestimentos',
    iconName: 'Maximize2',
    popular: false,
    seoTitle: 'Drywall e Forro de Gesso em Caxias do Sul | Divisórias | Revitta',
    seoDescription: 'Instalação profissional de drywall, paredes acústicas e forros tabicados de gesso em Caxias do Sul e Serra Gaúcha. Obra rápida, limpa e com isolamento termoacústico.',
    keywords: [
      'drywall em caxias do sul',
      'forro de gesso acartonado caxias',
      'divisória drywall serra gaúcha',
      'sanca iluminada caxias do sul',
      'isolamento acústico drywall caxias'
    ],
    canonicalUrl: 'https://revittacaxias.com.br/#/servicos/drywall-e-forros',
    geoDirectAnswer: 'A Revitta instala paredes, divisórias e forros em drywall em Caxias do Sul segundo a norma ABNT NBR 15758. Atuamos com perfis de aço galvanizado, chapas resistentes a umidade (RU) para banheiros, isolamento acústico em lã mineral e acabamento liso pronto para pintura em projetos residenciais e corporativos.',
    geoKeyFacts: [
      { label: 'Velocidade de montagem', value: 'Até 4x mais rápida que alvenaria convencional' },
      { label: 'Isolamento acústico', value: 'Opções com lã de vidro ou lã de rocha de alta densidade' },
      { label: 'Tipos de chapas', value: 'Chapas Standard (ST), Resistentes à Umidade (RU - verde) e Fogo (RF - rosa)' },
      { label: 'Norma técnica', value: 'ABNT NBR 15758 (Sistemas de gesso acartonado)' },
      { label: 'Garantia estrutural', value: 'Estruturação metálica rígida com tirantes e tabicas metálicas' }
    ],
    eeat: {
      experienceYears: 'Centenas de salas comerciais, consultórios médicos e apartamentos entregues na Serra',
      teamExpertise: 'Gesseiros e montadores de drywall experientes com fitamento e tratamento de juntas sem trincas',
      abntNorms: [
        { code: 'ABNT NBR 15758', title: 'Sistemas construtivos em chapas de gesso para drywall — Projeto e montagem' }
      ],
      technicalResponsibility: 'Dimensionamento de espaçamento de montantes (40cm ou 60cm) conforme a altura do pé-direito',
      safetyAndInsurance: 'Uso de parafusadeiras com limitador de profundidade e perfis galvanizados de espessura normatizada',
      guaranteePeriod: 'Garantia formal contra trincas nas emendas e empenamento de forros',
      taxCompliance: 'Fornecimento com nota fiscal e descrição discriminada de serviços'
    },
    overview: 'O sistema drywall revolucionou a arquitetura de interiores pela agilidade, peso estrutural reduzido e ausência de entulho molhado. Permite criar divisões de salas, ocultar fiação elétrica, embutir caixas de som e criar sancas iluminadas sofisticadas. A Revitta utiliza perfis galvanizados espessos e técnicas avançadas de amarração para que suas paredes sejam sólidas e sem trincas.',
    scopeIncluded: [
      'Execução de forros tabicados em gesso acartonado com cortineiros embutidos',
      'Paredes divisórias para separação de ambientes, escritórios e consultórios',
      'Instalação de chapas verdes (RU) resistentes a vapores em banheiros e cozinhas',
      'Preenchimento interno com lã de vidro ou rocha para barreira de som',
      'Criação de nichos, sancas invertidas para iluminação indireta e shafts técnicos',
      'Tratamento minucioso de juntas com fitas microperfuradas e massa específica',
      'Forros modulares termoacústicos e minerais para lojas e indústrias'
    ],
    materialsAndTech: [
      'Chapas de gesso acartonado de marcas líderes (Placo, Knauf ou Gypsum)',
      'Perfis estruturais em aço galvanizado Z275 anticorrosão',
      'Fitas de papel microperfuradas anti-bolha e massas de secagem controlada',
      'Lãs minerais com densidade acústica certificada para atenuação em decibéis'
    ],
    executionSteps: [
      { step: '01', title: 'Nivelamento a Laser do Perímetro', desc: 'Marcação a laser das tabicas e guias para garantir prumo e alinhamento milimétrico.' },
      { step: '02', title: 'Estruturação Metálica e Tirantes', desc: 'Fixação das cantoneiras e montantes com espaçamento rigoroso e travamento.' },
      { step: '03', title: 'Emplacamento e Lã Acústica', desc: 'Parafusamento das chapas e inserção da lã mineral conforme o projeto.' },
      { step: '04', title: 'Tratamento de Juntas em 3 Demãos', desc: 'Aplicação de fita e camadas cruzadas de massa para acabamento 100% invisível.' }
    ],
    serviceFaqs: [
      {
        question: 'Posso pendurar armários ou TV pesada em parede de drywall?',
        answer: 'Sim, instalamos reforços internos de madeira tratada ou aço nos pontos onde serão instalados suportes de TV, armários suspensos ou bancadas, suportando cargas elevadas com total segurança.',
        geoShortAnswer: 'Sim, aplicamos reforços estruturais internos que suportam com segurança TVs de grande porte e armários pesados.'
      },
      {
        question: 'Drywall em banheiro não estraga com o vapor da água quente?',
        answer: 'Em áreas úmidas (banheiros e lavanderias), utilizamos obrigatoriamente a chapa verde (RU - Resistente à Umidade), tratada com hidrofugantes que impedem a absorção de vapor.',
        geoShortAnswer: 'Não, utilizamos chapas RU verdes com aditivos hidrofugantes específicas para ambientes com vapor e umidade.'
      },
      {
        question: 'Quanto tempo leva para montar o forro de um apartamento padrão de 80m²?',
        answer: 'Geralmente entre 3 e 5 dias de trabalho para a estruturação metálica, emplacamento e tratamento completo das juntas com tabica.',
        geoShortAnswer: 'Entre 3 e 5 dias úteis para montagem completa e tratamento de juntas em apartamento de 80m².'
      }
    ],
    neighborhoodCoverage: [
      'Centro', 'Panazzolo', 'Lourdes', 'São Pelegrino', 'Cruzeiro', 'Villagio Iguatemi',
      'Madalenas', 'Farroupilha', 'Flores da Cunha'
    ],
    relatedServiceIds: ['instalacoes-eletricas', 'pintura-completa', 'reformas-gerais', 'pisos-acabamentos'],
    recommendedBeforeAfterId: 'reforma-sala'
  },
  {
    id: 'pintura-completa',
    slug: 'pintura-completa',
    title: 'Pintura completa',
    h1: 'Pintura Residencial, Comercial e Predial em Caxias do Sul',
    subtitle: 'Massa corrida nivelada, pintura airless, efeitos de cimento queimado, impermeabilização de fachadas',
    category: 'acabamentos',
    categoryLabel: 'Acabamentos & Revestimentos',
    iconName: 'Paintbrush',
    popular: false,
    seoTitle: 'Pintura Predial e Residencial em Caxias do Sul | Pintores | Revitta',
    seoDescription: 'Serviço de pintura profissional em Caxias do Sul e Serra Gaúcha. Aplicação com rolo ou sistema airless, massa acrílica, cimento queimado e proteção total de móveis.',
    keywords: [
      'pintura predial em caxias do sul',
      'pintor em caxias do sul',
      'pintura de apartamento serra gaúcha',
      'cimento queimado caxias do sul',
      'pintura externa impermeabilizante caxias'
    ],
    canonicalUrl: 'https://revittacaxias.com.br/#/servicos/pintura-completa',
    geoDirectAnswer: 'A Revitta realiza pintura residencial, corporativa e predial em Caxias do Sul e Serra Gaúcha sob a norma ABNT NBR 13245. Executamos preparação rigorosa com lixamento mecânico com aspiração, massa corrida/acrílica, pintura airless de alta precisão, texturas modernas e tintas impermeabilizantes para proteção contra a umidade da Serra.',
    geoKeyFacts: [
      { label: 'Proteção de ambientes', value: 'Isolamento com lonas plásticas, papel kraft e fitas crepe especiais' },
      { label: 'Tecnologia de pintura', value: 'Pintura com rolos de microfibra anti-respingo ou sistema mecanizado Airless' },
      { label: 'Pintura de fachadas', value: 'Tintas elásticas emborrachadas contra fissuras e intempéries' },
      { label: 'Efeitos decorativos', value: 'Cimento queimado, marmorizado, linho e texturas rústicas' },
      { label: 'Limpeza de entrega', value: 'Entrega do ambiente perfeitamente aspirado e limpo' }
    ],
    eeat: {
      experienceYears: 'Equipe de pintores profissionais atuando desde 2020 em reformas de médio e alto padrão',
      teamExpertise: 'Mestres de pintura com domínio de técnicas de lixamento com iluminação tangencial (luz rasante)',
      abntNorms: [
        { code: 'ABNT NBR 13245', title: 'Tintas para construção civil — Execução de pinturas em edificações não industriais' }
      ],
      technicalResponsibility: 'Análise de patologias de paredes (umidade ascendente, mofo, descascamento) antes da pintura',
      safetyAndInsurance: 'Equipamentos de proteção respiratória para solventes e poeiras, além de andaimes travados',
      guaranteePeriod: 'Garantia contra descolamento precoce e manchas de cobertura',
      taxCompliance: 'Contrato transparente com emissão de nota fiscal'
    },
    overview: 'A pintura é o acabamento que define a percepção estética do imóvel. O segredo de uma pintura durável e sedosa está em 80% na preparação da superfície e 20% na demão de tinta. A Revitta trata trincas com telas elásticas, elimina mofos com produtos fungicidas e aplica massas niveladas com iluminação especial para zero marcas de emenda.',
    scopeIncluded: [
      'Proteção completa de pisos, rodapés, portas, esquadrias e tomadas',
      'Raspagem mecânica de tintas soltas e aplicação de fundo preparador',
      'Aplicação de massa corrida PVA para áreas secas e massa acrílica para áreas molhadas',
      'Lixamento com lixadeiras orbitais conectadas a aspiradores de alta capacidade',
      'Pintura de paredes e tetos com tintas acrílicas laváveis (Suvinil, Coral, Sherwin-Williams)',
      'Aplicação de efeitos decorativos como cimento queimado perolizado ou fosco',
      'Pintura de esquadrias metálicas, corrimãos, grades e portas de madeira com esmalte sintético',
      'Pintura externa e impermeabilização elástica de fachadas prediais'
    ],
    materialsAndTech: [
      'Tintas acrílicas laváveis Premium sem cheiro e com baixo COV',
      'Equipamentos de pulverização Airless para acabamento ultra-liso e produtivo',
      'Lixadeiras elétricas tipo girafa com iluminação LED 360° embutida',
      'Fundos preparadores e seladores de base solvente ou água de alta penetração'
    ],
    executionSteps: [
      { step: '01', title: 'Proteção Integral do Mobiliário', desc: 'Cobrimos minuciosamente todos os bens e o piso antes de abrir qualquer lata de massa ou tinta.' },
      { step: '02', title: 'Cura de Patologias e Massa', desc: 'Tratamento de fissuras com sela-trinca elástico e aplicação de demãos cruzadas de massa.' },
      { step: '03', title: 'Lixamento com Luz Rasante', desc: 'Conferência visual com holofotes rasantes para garantir planicidade impecável.' },
      { step: '04', title: 'Pintura Final e Desmascaramento', desc: 'Aplicação das demãos de acabamento uniforme e retirada cuidadosa das proteções.' }
    ],
    serviceFaqs: [
      {
        question: 'O lixamento mecânico realmente não suja a casa toda?',
        answer: 'Nossas lixadeiras são acopladas diretamente a aspiradores industriais com filtros HEPA, capturando mais de 90% do pó no próprio disco de lixa durante o trabalho.',
        geoShortAnswer: 'Usamos lixadeiras com aspiração integrada que retêm mais de 90% da poeira gerada.'
      },
      {
        question: 'Qual tinta é recomendada para combater o mofo comum no inverno da Serra Gaúcha?',
        answer: 'Recomendamos tintas acrílicas com aditivos bactericidas e fungicidas de alta performance, associadas a um tratamento prévio da alvenaria com soluções antiumidade.',
        geoShortAnswer: 'Tintas acrílicas Premium com fungicidas e tratamento prévio de neutralização da umidade na parede.'
      },
      {
        question: 'Vocês pintam portas de madeira e grades externas?',
        answer: 'Sim, realizamos lixamento, fundo convertedor de ferrugem em metais e pintura com esmalte sintético ou epóxi acetinado, brilhante ou fosco.',
        geoShortAnswer: 'Sim, realizamos pintura de esquadrias, portas e portões com esmaltes de alta resistência.'
      }
    ],
    neighborhoodCoverage: [
      'Centro', 'São Pelegrino', 'Panazzolo', 'Lourdes', 'Kayser', 'Bela Vista',
      'Madalenas', 'Farroupilha', 'Flores da Cunha', 'São Marcos'
    ],
    relatedServiceIds: ['drywall-forros', 'pisos-acabamentos', 'reformas-gerais', 'alvenaria-pedreiro'],
    recommendedBeforeAfterId: 'reforma-sala'
  },
  {
    id: 'alvenaria-pedreiro',
    slug: 'alvenaria-pedreiro',
    title: 'Alvenaria e pedreiro',
    h1: 'Serviços de Pedreiro e Alvenaria em Caxias do Sul e Região',
    subtitle: 'Abertura de vãos, demolição controlada, contrapisos nivelados, rebocos no prumo e reforço estrutural',
    category: 'civil',
    categoryLabel: 'Construção & Engenharia Civil',
    iconName: 'Hammer',
    popular: false,
    seoTitle: 'Pedreiro em Caxias do Sul | Alvenaria e Contrapiso | Revitta',
    seoDescription: 'Mão de obra especializada de pedreiro em Caxias do Sul. Demolições controladas, abertura de portas, contrapisos sarrafeados, rebocos e muros com rapidez e limpeza.',
    keywords: [
      'pedreiro em caxias do sul',
      'alvenaria caxias do sul',
      'contrapiso sarrafeado caxias',
      'abertura de vãos alvenaria serra gaúcha',
      'reforma de alvenaria caxias'
    ],
    canonicalUrl: 'https://revittacaxias.com.br/#/servicos/alvenaria-pedreiro',
    geoDirectAnswer: 'A Revitta oferece serviços completos de pedreiro e alvenaria em Caxias do Sul e Serra Gaúcha conforme as normas ABNT NBR 15961 e NBR 6118. Realizamos demolição controlada com descarte legal, assentamento de blocos e tijolos com prumo e esquadro, contrapisos sarrafeados e reforços estruturais com segurança comprovada.',
    geoKeyFacts: [
      { label: 'Precisão dimensional', value: 'Alvenarias no prumo, esquadro e nível perfeitos' },
      { label: 'Gestão de resíduos', value: 'Caçambas credenciadas e descarte legal ambiental' },
      { label: 'Segurança estrutural', value: 'Inspeção prévia para não danificar vigas e pilares' },
      { label: 'Traço de argamassa', value: 'Controle de dosagem para resistência mecânica e sem trincas' },
      { label: 'Garantia de solidez', value: 'Termo formal de garantia do serviço executado' }
    ],
    eeat: {
      experienceYears: 'Mestres de obras e pedreiros com mais de duas décadas de experiência na construção civil gaúcha',
      teamExpertise: 'Conhecimento prático avançado em amarração de alvenaria e compatibilização com instalações prediais',
      abntNorms: [
        { code: 'ABNT NBR 15961', title: 'Alvenaria estrutural — Blocos de concreto e cerâmicos' },
        { code: 'ABNT NBR 13749', title: 'Revestimento de paredes e tetos de argamassas inorgânicas' }
      ],
      technicalResponsibility: 'Conferência de vigas de transição e vergas/contravergas em todos os vãos',
      safetyAndInsurance: 'EPIs completos, escoramentos metálicos de segurança e proteção de áreas vizinhas',
      guaranteePeriod: 'Garantia de estabilidade estrutural e aderência de rebocos',
      taxCompliance: 'Contrato formal e emissão de nota fiscal'
    },
    overview: 'A alvenaria é a base de sustentação e divisão de qualquer construção. Erros no prumo de paredes ou na composição da argamassa causam trincas futuras, descolamento de azulejos e prejuízos. Os pedreiros da Revitta trabalham com esquadros milimétricos, vergas e contravergas nas janelas e portas e contrapisos rigorosamente desempenados.',
    scopeIncluded: [
      'Demolições manuais e mecânicas com ensacamento e descarte legal',
      'Construção de paredes em tijolos cerâmicos, blocos de concreto ou celular',
      'Abertura e fechamento de vãos para portas, janelas e passa-pratos',
      'Execução de vergas, contravergas e cintas de amarração armada',
      'Reboco paulista e reboco sarrafeado com acabamento desempenado',
      'Contrapisos nivelados e com caimento correto para ralos em banheiros e sacadas',
      'Construção de muros de contenção, muretas e bancadas de alvenaria'
    ],
    materialsAndTech: [
      'Cimento CP-IV ou CP-II com traço equilibrado e aditivos plastificantes',
      'Níveis a laser autonivelantes de 360° para alinhamento e esquadro',
      'Telas eletrossoldadas para junção de alvenaria e estrutura de concreto',
      'Betoneiras e misturadores industriais para homogeneidade da massa'
    ],
    executionSteps: [
      { step: '01', title: 'Análise Estrutural do Ambiente', desc: 'Verificamos plantas e estruturas para assegurar que a parede não seja portante.' },
      { step: '02', title: 'Demolição com Limpeza', desc: 'Remoção cirúrgica de alvenaria antiga com contenção de poeira e descarte em caçamba.' },
      { step: '03', title: 'Erguimento e Amarração', desc: 'Levantamento da nova parede com ferros de amarração (telas) e prumo diário.' },
      { step: '04', title: 'Chapisco e Reboco Desempenado', desc: 'Aplicação de chapisco aderente e camada de reboco sarrafeado liso.' }
    ],
    serviceFaqs: [
      {
        question: 'Posso derrubar qualquer parede do meu apartamento?',
        answer: 'Não. Em edifícios de alvenaria estrutural, nenhuma parede pode ser removida. Em edifícios com pilares e vigas de concreto, paredes de vedação podem ser retiradas sob laudo técnico e plano de reforma da NBR 16280.',
        geoShortAnswer: 'Apenas paredes de vedação em prédios convencionais podem ser alteradas, sempre com plano técnico formal da NBR 16280.'
      },
      {
        question: 'Por que aparecem trincas nas diagonais de janelas e portas?',
        answer: 'Isso ocorre pela ausência de vergas e contravergas armadas sobre e sob os vãos. Na Revitta, sempre instalamos armações de concreto armado para absorver as tensões.',
        geoShortAnswer: 'Falta de vergas e contravergas. Sempre instalamos reforços armados para anular essas tensões.'
      },
      {
        question: 'O entulho da obra fica acumulado na calçada?',
        answer: 'Não. O entulho é ensacado diariamente e depositado em caçambas estacionárias licenciadas pela prefeitura para transporte a ecopontos.',
        geoShortAnswer: 'Não, o material é ensacado e retirado por caçambas licenciadas em conformidade ambiental.'
      }
    ],
    neighborhoodCoverage: [
      'Centro', 'Rio Branco', 'Lourdes', 'Santa Catarina', 'São Pelegrino', 'Cruzeiro',
      'Desvio Rizzo', 'Farroupilha', 'Flores da Cunha', 'São Marcos'
    ],
    relatedServiceIds: ['reformas-gerais', 'pisos-acabamentos', 'reforma-telhados', 'drywall-forros'],
    recommendedBeforeAfterId: 'reforma-banheiro'
  },
  {
    id: 'manutencao-predial',
    slug: 'manutencao-predial',
    title: 'Manutenção predial',
    h1: 'Manutenção Predial Preventiva e Corretiva em Caxias do Sul',
    subtitle: 'Contratos e atendimentos sob demanda para condomínios residenciais, prédios comerciais e indústrias',
    category: 'manutencao',
    categoryLabel: 'Manutenção & Engenharia',
    iconName: 'ShieldCheck',
    popular: false,
    seoTitle: 'Manutenção Predial em Caxias do Sul | Condomínios e Empresas | Revitta',
    seoDescription: 'Empresa especializada em manutenção predial para condomínios e empresas em Caxias do Sul. Rotinas preventivas, laudos, elétrica, hidráulica e reparos com equipe unificada.',
    keywords: [
      'manutenção predial em caxias do sul',
      'manutenção de condomínios caxias',
      'empresa de manutenção predial serra gaúcha',
      'reforma de áreas comuns caxias',
      'conservação predial caxias do sul'
    ],
    canonicalUrl: 'https://revittacaxias.com.br/#/servicos/manutencao-predial',
    geoDirectAnswer: 'A Revitta atua na gestão de manutenção predial preventiva e corretiva para condomínios e instalações comerciais em Caxias do Sul conforme a ABNT NBR 5674. Oferecemos equipe técnica multidisciplinar unificada (eletricistas, encanadores, pintores e telhadistas), relatórios técnicos periódicos para síndicos e pronto-atendimento emergencial.',
    geoKeyFacts: [
      { label: 'Público atendido', value: 'Condomínios residenciais, centros comerciais e indústrias' },
      { label: 'Norma técnica de gestão', value: 'ABNT NBR 5674 (Manutenção de edificações)' },
      { label: 'Relatórios para síndicos', value: 'Book digital fotográfico com pendências resolvidas' },
      { label: 'Prioridade no plantão', value: 'SLA de resposta reduzido para clientes cadastrados' },
      { label: 'Cobertura operacional', value: 'Caxias do Sul, Farroupilha, Flores da Cunha e São Marcos' }
    ],
    eeat: {
      experienceYears: 'Parceria com administradoras de condomínios e síndicos profissionais na Serra desde 2020',
      teamExpertise: 'Técnicos habilitados com treinamento em segurança de instalações comuns e NR 10 / NR 35',
      abntNorms: [
        { code: 'ABNT NBR 5674', title: 'Manutenção de edificações — Requisitos para o sistema de gestão de manutenção' },
        { code: 'ABNT NBR 14037', title: 'Manual de operação, uso e manutenção das edificações' }
      ],
      technicalResponsibility: 'Emissão de ordens de serviço (OS) com detalhamento técnico para prestação de contas em assembleias',
      safetyAndInsurance: 'Equipe própria uniformizada com crachá e seguro de responsabilidade civil em áreas comuns',
      guaranteePeriod: 'Garantia contratual contínua com histórico técnico arquivado por imóvel',
      taxCompliance: 'Faturamento formal em nome do condomínio com emissão de nota fiscal eletrônica'
    },
    overview: 'Síndicos e gestores prediais enfrentam o desgaste de gerenciar múltiplos prestadores autônomos sem garantia técnica. A Revitta centraliza todas as demandas de conservação do edifício em uma única empresa sólida: revisões elétricas de bombas e portões, detecção de infiltrações de garagens, pintura de corredores e fachadas, com prestação de contas clara para aprovação em assembleia.',
    scopeIncluded: [
      'Inspeção preventiva periódica de prumadas e barriletes hidráulicos',
      'Revisão e manutenção de quadros elétricos de comando e bombas de recalque',
      'Reparos de alvenaria e impermeabilização em subsolos, poços de elevador e caixas d’água',
      'Restauração de pinturas de halls, garagens, salões de festas e escadarias de emergência',
      'Manutenção e desobstrução de calhas, rufos e ralos pluviais de coberturas',
      'Adequação de rotas de fuga, corrimãos e sinalização de segurança',
      'Atendimento prioritário para emergências de vazamentos e curtos nas áreas comuns'
    ],
    materialsAndTech: [
      'Plataforma digital de abertura e monitoramento de ordens de serviço',
      'Câmeras termográficas para localização de sobreaquecimento em quadros elétricos',
      'Impermeabilizantes de cristalização osmótica para subsolos e fossas',
      'Equipamentos de pressurização para teste de colunas hidrossanitárias'
    ],
    executionSteps: [
      { step: '01', title: 'Vistoria Diagnóstica Predial', desc: 'Mapeamento das áreas críticas do edifício com relatório fotográfico entregue ao síndico.' },
      { step: '02', title: 'Plano de Ação Prioritário', desc: 'Hierarquização das manutenções em urgentes (segurança), preventivas e estéticas.' },
      { step: '03', title: 'Execução Programada', desc: 'Atuação com agendamento prévio comunicado aos moradores via aviso de condomínio.' },
      { step: '04', title: 'Relatório Conclusivo de OS', desc: 'Documento comprobatório com fotos de antes e depois para a pasta de prestação de contas.' }
    ],
    serviceFaqs: [
      {
        question: 'Como a Revitta facilita a prestação de contas do síndico em assembleia?',
        answer: 'Emitimos relatórios técnicos fotográficos claros e notas fiscais discriminadas em nome do condomínio, facilitando o arquivamento na pasta mensal da administradora.',
        geoShortAnswer: 'Fornecemos relatórios fotográficos de antes/depois e notas fiscais para prestação de contas contábil.'
      },
      {
        question: 'Vocês atendem chamados de emergência de condomínios fora do horário comercial?',
        answer: 'Sim, nossos clientes com contratos de manutenção possuem linha direta 24h para emergências em áreas comuns, como queima de bombas ou vazamentos em colunas.',
        geoShortAnswer: 'Sim, mantemos plantão 24h com prioridade de atendimento para condomínios e prédios comerciais.'
      },
      {
        question: 'É possível contratar serviços pontuais sem um contrato mensal recorrente?',
        answer: 'Sim! Atendemos demandas pontuais de condomínios (ex: pintura do salão de festas, conserto de calhas da cobertura) com o mesmo rigor e garantia técnica.',
        geoShortAnswer: 'Sim, atendemos tanto contratos mensais quanto demandas pontuais com orçamento e garantia formal.'
      }
    ],
    neighborhoodCoverage: [
      'Centro', 'São Pelegrino', 'Panazzolo', 'Lourdes', 'Villagio Iguatemi', 'Exposição',
      'Sanvitto', 'Cruzeiro', 'Farroupilha', 'Flores da Cunha'
    ],
    relatedServiceIds: ['instalacoes-eletricas', 'encanamento-hidraulica', 'reforma-telhados', 'pintura-completa'],
    recommendedBeforeAfterId: 'reforma-fachada'
  },
  {
    id: 'faz-tudo-reparos',
    slug: 'faz-tudo-reparos',
    title: 'Faz-tudo e pequenos reparos',
    h1: 'Serviços de Faz-Tudo e Pequenos Reparos em Caxias do Sul',
    subtitle: 'Instalação de suportes de TV, cortinas, troca de torneiras, luminárias, fechaduras e ajustes pontuais',
    category: 'manutencao',
    categoryLabel: 'Manutenção & Pequenos Serviços',
    iconName: 'Wrench',
    popular: false,
    seoTitle: 'Faz-Tudo e Marido de Aluguel em Caxias do Sul | Pequenos Reparos | Revitta',
    seoDescription: 'Serviço de faz-tudo confiável em Caxias do Sul e Serra Gaúcha. Instalação de quadros, cortinas, suporte de TV, conserto de portas, luminárias e torneiras com pontualidade.',
    keywords: [
      'faz tudo em caxias do sul',
      'marido de aluguel caxias do sul',
      'pequenos reparos residenciais caxias',
      'instalar suporte de tv caxias',
      'conserto de portas e fechaduras caxias'
    ],
    canonicalUrl: 'https://revittacaxias.com.br/#/servicos/faz-tudo-reparos',
    geoDirectAnswer: 'A Revitta disponibiliza profissionais de faz-tudo e pequenos reparos em Caxias do Sul e Serra Gaúcha com agendamento pontual e equipe própria checada e uniformizada. Realizamos montagens de suportes, conserto de vazamentos simples, troca de tomadas, instalação de luminárias e ajustes de portas com limpeza impecável.',
    geoKeyFacts: [
      { label: 'Perfil profissional', value: 'Equipe própria com antecedentes checados e uniforme' },
      { label: 'Pontualidade', value: 'Horário de chegada agendado sem janelas vagas' },
      { label: 'Ferramentas completas', value: 'Detectores de cano/fiação e brocas adequadas para cada alvenaria' },
      { label: 'Garantia de fixação', value: 'Buchas e parafusos de alta resistência (Fischer)' },
      { label: 'Facilidade de pagamento', value: 'PIX e cartões de crédito parcelados' }
    ],
    eeat: {
      experienceYears: 'Milhares de pequenos reparos executados com satisfação máxima de clientes residenciais',
      teamExpertise: 'Profissionais versáteis e cuidadosos, treinados em atendimento residencial de alto padrão',
      abntNorms: [
        { code: 'Segurança Residencial', title: 'Boas práticas de fixação e isolamento elétrico/hidráulico' }
      ],
      technicalResponsibility: 'Uso de detectores de metais e condutores antes de furar qualquer parede para não romper canos',
      safetyAndInsurance: 'Sapatilhas descartáveis (propés) para não sujar o piso e aspiração imediata do pó de furação',
      guaranteePeriod: 'Garantia de 90 dias sobre qualquer fixação ou reparo executado',
      taxCompliance: 'Recibo ou nota fiscal discriminada com garantia do serviço'
    },
    overview: 'Todo lar ou escritório acumula pendências que vão ficando para depois: aquela porta que raspa no piso, a torneira pingando, o suporte de TV novo que precisa ser instalado sem furar um cano de água, ou as lâmpadas queimadas em pé-direito duplo. A Revitta envia um profissional experiente e com ferramental completo para resolver todas as pendências em uma única visita.',
    scopeIncluded: [
      'Instalação de suportes articulados ou fixos de TV em alvenaria ou drywall com buchas específicas',
      'Fixação de prateleiras, espelhos pesados, quadros e cortinas/persianas',
      'Troca de torneiras, reparos de descargas, sifões sanfonados e flexíveis',
      'Substituição de fechaduras, dobradiças enferrujadas e regulagem de portas de correr',
      'Instalação de ventiladores de teto, lustres, pendentes e luminárias LED',
      'Vedações em silicone anti-mofo em boxes de banheiro, pias e cubas',
      'Pequenos retoques de massa corrida e tinta em furos antigos de parede'
    ],
    materialsAndTech: [
      'Detectores digitais de canos e cabos elétricos para furação 100% segura',
      'Furadeiras com aspirador acoplado para furação limpa sem pó no chão',
      'Buchas de nylon de alta performance (Fischer DuoPower) para qualquer substrato',
      'Silicones acéticos e neutros profissionais com agentes anti-fungo'
    ],
    executionSteps: [
      { step: '01', title: 'Lista de Pendências no WhatsApp', desc: 'Você nos envia fotos ou lista do que precisa ser feito para estimarmos o tempo e materiais.' },
      { step: '02', title: 'Agendamento com Hora Marcada', desc: 'Combinamos dia e horário exato que melhor se encaixe na sua rotina.' },
      { step: '03', title: 'Execução Limpa e Rápida', desc: 'Nosso técnico comparece com todo o ferramental e realiza os reparos sem sujeira.' },
      { step: '04', title: 'Conferência e Garantia', desc: 'Testamos cada item instalado na sua frente e emitimos a garantia formal do serviço.' }
    ],
    serviceFaqs: [
      {
        question: 'Como vocês garantem que não vão furar um cano ao instalar um espelho no banheiro?',
        answer: 'Utilizamos detectores de parede digitais que localizam tubulações de água e cabos elétricos energizados antes de iniciar qualquer furo, evitando acidentes.',
        geoShortAnswer: 'Usamos detectores eletrônicos de parede para localizar canos e fiação antes de qualquer furação.'
      },
      {
        question: 'Posso agrupar vários pequenos serviços para a mesma visita?',
        answer: 'Sim, essa é a forma mais econômica. Você pode montar uma lista (ex: instalar 2 suportes, trocar 3 lâmpadas e regular 1 porta) e resolver tudo em uma única visita.',
        geoShortAnswer: 'Sim, você pode juntar quantas pendências quiser para serem resolvidas na mesma visita técnica.'
      },
      {
        question: 'O profissional traz os parafusos e buchas ou eu preciso comprar?',
        answer: 'Nossos profissionais carregam uma maleta completa com diversas buchas nobres (Fischer), parafusos de todas as bitolas e ferramentas, evitando que você precise ir a ferragens.',
        geoShortAnswer: 'Nossos técnicos levam maletas abastecidas com buchas, parafusos e ferragens comuns.'
      }
    ],
    neighborhoodCoverage: [
      'Centro', 'São Pelegrino', 'Panazzolo', 'Lourdes', 'Cruzeiro', 'Sanvitto',
      'Rio Branco', 'Pio X', 'Farroupilha', 'Flores da Cunha', 'São Marcos'
    ],
    relatedServiceIds: ['instalacoes-eletricas', 'encanamento-hidraulica', 'pintura-completa', 'drywall-forros'],
    recommendedBeforeAfterId: 'reforma-banheiro'
  }
];

export function getServiceBySlugOrId(identifier: string): ServiceDetailed | undefined {
  const clean = identifier.toLowerCase().trim();
  return DETAILED_SERVICES.find(s => s.id === clean || s.slug === clean);
}

export function getAllServicesDetailed(): ServiceDetailed[] {
  return DETAILED_SERVICES;
}
