import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, HardHat, CheckCircle2, ShieldCheck, Clock, 
  Coins, Users, Wrench, Sparkles, MapPin, ArrowLeft, Send, 
  FileText, Check, AlertCircle, Phone, Mail, Building2, 
  ChevronDown, HelpCircle, Star, Award, Copy, CheckCheck
} from 'lucide-react';
import { SparkleIcon } from './SparkleIcon';
import { SocialLinksRow } from './SocialLogos';
import { COMPANY_INFO, createWhatsAppUrl } from '../data/revittaData';

export const PARTNER_EMAIL = "comercialrevitta@gmail.com";

interface TrabalheConoscoProps {
  onBackToHome: () => void;
}

interface PartnerFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  neighborhood: string;
  mainSpecialty: string;
  secondarySpecialties: string[];
  experienceYears: string;
  taxStatus: string;
  hasOwnTools: string;
  hasOwnVehicle: string;
  portfolioUrl: string;
  bio: string;
  availability: string;
  agreedLgpd: boolean;
}

const SPECIALTY_OPTIONS = [
  'Eletricista / Instalações Elétricas & Padrão RGE',
  'Encanador / Hidráulica & Caça-Vazamentos',
  'Azulejista / Porcelanataria de Alto Padrão',
  'Pintor / Pintura Fina, Massas & Texturas',
  'Pedreiro / Alvenaria & Reformas Estruturais',
  'Gesseiro / Drywall & Sancas Iluminadas',
  'Telhadista / Calhas, Rufos & Impermeabilização',
  'Marceneiro / Esquadrias & Acabamentos em Madeira',
  'Serralheiro / Estruturas Metálicas & Portões',
  'Técnico em Edificações / Mestre de Obras Autônomo',
  'Outra Especialidade Civil'
];

const SECONDARY_SPECIALTIES = [
  'Elétrica básica',
  'Hidráulica básica',
  'Pintura',
  'Drywall',
  'Pequenos reparos',
  'Impermeabilização',
  'Instalação de pisos e rodapés',
  'Calhas e rufos'
];

export const TrabalheConosco: React.FC<TrabalheConoscoProps> = ({ onBackToHome }) => {
  const [formData, setFormData] = useState<PartnerFormData>({
    fullName: '',
    phone: '',
    email: '',
    city: 'Caxias do Sul',
    neighborhood: '',
    mainSpecialty: '',
    secondarySpecialties: [],
    experienceYears: '3 a 5 anos',
    taxStatus: 'MEI (Microempreendedor Individual)',
    hasOwnTools: 'Sim, ferramentas completas para meu ofício',
    hasOwnVehicle: 'Sim, veículo próprio',
    portfolioUrl: '',
    bio: '',
    availability: 'Por empreitada / projetos fechados',
    agreedLgpd: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ protocol: string; date: string } | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sent' | 'fallback'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSecondaryToggle = (item: string) => {
    setFormData(prev => {
      const exists = prev.secondarySpecialties.includes(item);
      if (exists) {
        return { ...prev, secondarySpecialties: prev.secondarySpecialties.filter(i => i !== item) };
      }
      return { ...prev, secondarySpecialties: [...prev.secondarySpecialties, item] };
    });
  };

  const generateEmailPayload = (data: PartnerFormData, protocol: string) => {
    const subject = `[Cadastro Parceiro Revitta] ${data.fullName} - ${data.mainSpecialty} (${protocol})`;
    const body = `CANDIDATURA DE PROFISSIONAL LIBERAL / PRESTADOR PARCEIRO REVITTA
========================================================================
Protocolo de Registro: ${protocol}
Data de Envio: ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}
E-mail de Destino: ${PARTNER_EMAIL}

1. DADOS DE IDENTIFICAÇÃO E CONTATO
• Nome Completo: ${data.fullName}
• Telefone / WhatsApp: ${data.phone}
• E-mail do Prestador: ${data.email || 'Não informado'}
• Cidade onde reside: ${data.city}
• Bairro: ${data.neighborhood || 'Não informado'}

2. PERFIL TÉCNICO & ESPECIALIDADE
• Especialidade Principal: ${data.mainSpecialty}
• Habilidades Secundárias: ${data.secondarySpecialties.length > 0 ? data.secondarySpecialties.join(', ') : 'Nenhuma selecionada'}
• Tempo de Experiência: ${data.experienceYears}
• Situação Fiscal / Nota: ${data.taxStatus}
• Ferramental Próprio: ${data.hasOwnTools}
• Transporte / Deslocamento: ${data.hasOwnVehicle}

3. HISTÓRICO E PORTFÓLIO
• Link Portfólio / Instagram: ${data.portfolioUrl || 'Não informado'}
• Resumo da Experiência e Obras:
${data.bio || 'Não informado'}

4. DISPONIBILIDADE & LGPD
• Disponibilidade para Obras: ${data.availability}
• Consentimento LGPD: Aceito pelo candidato em conformidade legal

========================================================================
Revitta Construção e Reformas • Caxias do Sul - RS
Encaminhado para: ${PARTNER_EMAIL}`;
    return { subject, body };
  };

  const handleCopySummary = () => {
    if (!submittedData) return;
    const { body } = generateEmailPayload(formData, submittedData.protocol);
    navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validation
    if (!formData.fullName.trim() || formData.fullName.trim().length < 4) {
      setFormError('Por favor, informe seu nome completo.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 9) {
      setFormError('Por favor, informe um telefone/WhatsApp válido com DDD.');
      return;
    }
    if (!formData.mainSpecialty) {
      setFormError('Por favor, selecione sua especialidade principal de atuação.');
      return;
    }
    if (!formData.agreedLgpd) {
      setFormError('É necessário aceitar os termos de consentimento para envio do cadastro.');
      return;
    }

    setIsSubmitting(true);
    const protocol = `REV-PARC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const submissionInfo = {
      protocol,
      date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
    };

    // Save to LocalStorage with targetEmail metadata
    try {
      const existing = JSON.parse(localStorage.getItem('revitta_partner_applications') || '[]');
      existing.unshift({
        ...formData,
        ...submissionInfo,
        targetEmail: PARTNER_EMAIL,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('revitta_partner_applications', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage save failed:', err);
    }

    // Forwarding to comercialrevitta@gmail.com via AJAX endpoint
    const { subject, body } = generateEmailPayload(formData, protocol);

    try {
      await fetch(`https://formsubmit.co/ajax/${PARTNER_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: subject,
          _replyto: formData.email || undefined,
          _template: "table",
          "Protocolo": protocol,
          "Destino": PARTNER_EMAIL,
          "Nome Completo": formData.fullName,
          "Telefone / WhatsApp": formData.phone,
          "E-mail do Prestador": formData.email || "Não informado",
          "Cidade": formData.city,
          "Bairro": formData.neighborhood || "Não informado",
          "Especialidade": formData.mainSpecialty,
          "Habilidades Secundárias": formData.secondarySpecialties.join(', ') || "Nenhuma",
          "Tempo de Experiência": formData.experienceYears,
          "Situação Fiscal": formData.taxStatus,
          "Ferramentas": formData.hasOwnTools,
          "Transporte": formData.hasOwnVehicle,
          "Portfólio": formData.portfolioUrl || "Não informado",
          "Resumo Experiência": formData.bio || "Não informado",
          "Disponibilidade": formData.availability
        })
      });
      setEmailStatus('sent');
    } catch {
      setEmailStatus('fallback');
    }

    setIsSubmitting(false);
    setSubmittedData(submissionInfo);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const faqPartner = [
    {
      q: 'Preciso ter CNPJ ou MEI ativo para prestar serviços?',
      a: 'Preferencialmente sim. A grande maioria de nossos parceiros atua como MEI (Microempreendedor Individual), o que agiliza as notas fiscais e os pagamentos diretos. Caso ainda não tenha MEI, você pode se cadastrar como autônomo enquanto orientamos os passos para regularização.'
    },
    {
      q: 'Como e quando são realizados os pagamentos?',
      a: 'Os pagamentos são efetuados pontualmente via PIX ou transferência bancária, conforme cronograma de medição pré-estabelecido em contrato para cada etapa concluída e aprovada pela nossa fiscalização técnica.'
    },
    {
      q: 'Quem é responsável pela compra e entrega dos materiais?',
      a: 'A Revitta cuida de 100% da compra, especificação e entrega dos materiais no canteiro da obra. Você e sua equipe não precisam se preocupar com logística pesada ou faturamento de insumos: você foca exclusivamente na excelência da mão de obra técnica.'
    },
    {
      q: 'Como funciona o processo de seleção após o envio do formulário?',
      a: 'Nossa coordenação técnica avalia seu perfil em até 2 dias úteis. Entraremos em contato via WhatsApp ou telefone para alinhar detalhes de experiências anteriores, apresentação de obras e agendamento de uma reunião técnica no nosso escritório em Caxias do Sul.'
    },
    {
      q: 'Posso continuar atendendo meus próprios clientes particulares?',
      a: 'Sim, com total liberdade! Trabalhamos com profissionais parceiros em regime de prestação de serviços por empreitada e projetos contratados, respeitando sua agenda e sua autonomia profissional.'
    }
  ];

  return (
    <div className="bg-mist min-h-screen pb-20">
      
      {/* Top Breadcrumb & Return Bar */}
      <div className="bg-white border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs sm:text-sm">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-indigo-950 font-bold hover:text-indigo-700 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-700 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para a Página Inicial</span>
          </button>

          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span>Revitta</span>
            <span>/</span>
            <span className="text-indigo-900 font-semibold">Trabalhe Conosco</span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative pt-10 sm:pt-14 pb-12 sm:pb-16 bg-gradient-to-b from-indigo-100/70 via-mist to-mist overflow-hidden">
        {/* Subtle architectural ambient lights */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-indigo-500/10 via-indigo-700/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-900/10 border border-indigo-700/20 text-indigo-900 text-xs sm:text-sm font-semibold tracking-wide shadow-sm mb-4">
            <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
            <span>Rede de Especialistas • Caxias do Sul e Serra Gaúcha</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-950 leading-tight font-display tracking-tight">
            Trabalhe Conosco: Seja um Prestador Parceiro <span className="text-indigo-700">Revitta</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conectamos profissionais liberais, técnicos autônomos e mestres de obra aos projetos residenciais e comerciais de alto padrão em Caxias do Sul. Tenha obras contínuas, materiais no canteiro e <strong className="text-indigo-950 font-semibold">pagamento pontual garantido</strong>.
          </p>

          {/* Quick Metrics */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-2xl border border-indigo-100 shadow-sm text-center">
              <Coins className="w-5 h-5 text-wa-green mx-auto mb-1.5" />
              <div className="text-xs sm:text-sm font-bold text-indigo-950">Pagamento Pontual</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Por etapa e medição</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-indigo-100 shadow-sm text-center">
              <HardHat className="w-5 h-5 text-indigo-700 mx-auto mb-1.5" />
              <div className="text-xs sm:text-sm font-bold text-indigo-950">Canteiro Organizado</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Materiais entregues</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-indigo-100 shadow-sm text-center">
              <ShieldCheck className="w-5 h-5 text-indigo-700 mx-auto mb-1.5" />
              <div className="text-xs sm:text-sm font-bold text-indigo-950">Segurança Jurídica</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Contrato transparente</div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-indigo-100 shadow-sm text-center">
              <Users className="w-5 h-5 text-indigo-700 mx-auto mb-1.5" />
              <div className="text-xs sm:text-sm font-bold text-indigo-950">+50 Especialistas</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Rede ativa na região</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Why Partner with Revitta & Guidance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Why Partner Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-indigo-100 shadow-xl shadow-indigo-950/5 space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-indigo-950 font-display">Vantagens para Você</h2>
                  <p className="text-xs text-gray-500">Por que os melhores profissionais escolhem a Revitta</p>
                </div>
              </div>

              <div className="space-y-4 pt-2 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-wa-green/10 flex items-center justify-center text-wa-green shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-indigo-950 text-sm">Sem tempo ocioso entre obras</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Garantimos um fluxo frequente de projetos residenciais, prediais e comerciais em Caxias do Sul.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-wa-green/10 flex items-center justify-center text-wa-green shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-indigo-950 text-sm">Você não gasta com materiais</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Toda a compra e transporte de insumos ficam sob responsabilidade da Revitta. Você traz seu conhecimento e ferramentas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-wa-green/10 flex items-center justify-center text-wa-green shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-indigo-950 text-sm">Respaldo técnico de Engenharia</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Projetos executivos bem desenhados, alinhamento técnico e equipe de engenharia para tirar dúvidas no canteiro.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-wa-green/10 flex items-center justify-center text-wa-green shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-indigo-950 text-sm">Valorização da sua mão de obra</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Remuneração justa, prazos combinados sem improviso e reconhecimento para quem entrega com alto padrão.</p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout for urgent inquiries */}
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-indigo-950 block">Dúvidas sobre o cadastro?</span>
                  <span className="text-gray-600">Fale direto com nossa equipe.</span>
                </div>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-wa-green hover:bg-[#20bd5a] text-white font-bold py-2 px-3 rounded-xl transition-all shadow-sm active:scale-95 shrink-0"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Specialties Wanted List */}
            <div className="bg-white p-6 rounded-3xl border border-indigo-100 shadow-sm space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-950 font-display flex items-center gap-2">
                <Wrench className="w-4 h-4 text-indigo-700" />
                <span>Profissionais mais requisitados</span>
              </h3>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 font-medium">Eletricistas Prediais</span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 font-medium">Encanadores & Caça-vazamento</span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 font-medium">Porcelanatistas</span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 font-medium">Pintores Airless & Fino</span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 font-medium">Drywall & Sancas</span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 font-medium">Telhadistas</span>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 font-medium">Pedreiros de Acabamento</span>
              </div>
            </div>

            {/* Address & Presence */}
            <div className="bg-indigo-950 text-indigo-100 p-6 rounded-3xl shadow-xl space-y-3 text-xs">
              <div className="flex items-center gap-2 text-wa-green font-bold text-sm">
                <MapPin className="w-4 h-4" />
                <span>Sede Revitta em Caxias do Sul</span>
              </div>
              <p className="text-indigo-200 leading-relaxed">
                {COMPANY_INFO.fullAddress}
              </p>
              <div className="pt-3 border-t border-indigo-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-indigo-300">
                <span>Nossas redes & Google:</span>
                <SocialLinksRow variant="header" />
              </div>
            </div>
          </div>

          {/* Right Column: Dedicated Partnership Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-9 rounded-3xl border border-indigo-100 shadow-2xl shadow-indigo-950/10 relative">
              
              {/* Form Title & Subtitle */}
              <div className="mb-6 pb-5 border-b border-indigo-100">
                <div className="inline-flex items-center gap-1.5 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Formulário de Credenciamento Técnico</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-indigo-950 font-display">
                  Cadastro de Profissional Liberal
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1.5">
                  Preencha as informações abaixo para fazer parte do banco de profissionais prestadores da Revitta em Caxias do Sul.
                </p>
              </div>

              {/* Success Message Card */}
              {submittedData ? (
                (() => {
                  const { subject: mailSubject, body: mailBody } = generateEmailPayload(formData, submittedData.protocol);
                  const mailtoHref = `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
                  return (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-6 px-5 sm:px-7 rounded-2xl bg-gradient-to-br from-indigo-50/90 to-emerald-50/50 border border-wa-green/30 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-wa-green/15 text-wa-green flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-wa-green block">
                          Cadastro Registrado com Sucesso!
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-indigo-950 font-display mt-1">
                          Obrigado, {formData.fullName.split(' ')[0]}!
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mt-2 leading-relaxed">
                          Seu perfil foi registrado sob o protocolo <strong className="text-indigo-950 font-semibold">{submittedData.protocol}</strong> e direcionado para a equipe comercial e de engenharia da Revitta em <strong className="text-indigo-950 font-semibold">{PARTNER_EMAIL}</strong>.
                        </p>
                      </div>

                      {/* Recipient Badge */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950 text-white text-xs font-medium shadow-sm">
                        <Mail className="w-3.5 h-3.5 text-wa-green" />
                        <span>Encaminhado para: <strong>{PARTNER_EMAIL}</strong></span>
                      </div>

                      <div className="bg-white p-4 rounded-xl border border-indigo-100 text-left max-w-md mx-auto text-xs space-y-1.5 text-gray-600 shadow-sm">
                        <div><strong className="text-indigo-950">Especialidade:</strong> {formData.mainSpecialty}</div>
                        <div><strong className="text-indigo-950">WhatsApp de Contato:</strong> {formData.phone}</div>
                        <div><strong className="text-indigo-950">Cidade:</strong> {formData.city}</div>
                        <div><strong className="text-indigo-950">E-mail de Destino:</strong> {PARTNER_EMAIL}</div>
                        <div><strong className="text-indigo-950">Protocolo:</strong> {submittedData.protocol} ({submittedData.date})</div>
                      </div>

                      {/* Action buttons */}
                      <div className="pt-2 flex flex-col gap-2.5 max-w-md mx-auto">
                        <a
                          href={mailtoHref}
                          className="w-full inline-flex items-center justify-center gap-2 bg-indigo-950 hover:bg-indigo-900 text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl shadow-md transition-all active:scale-98"
                        >
                          <Mail className="w-4 h-4 text-wa-green" />
                          <span>Abrir no seu E-mail ({PARTNER_EMAIL})</span>
                        </a>

                        <button
                          type="button"
                          onClick={handleCopySummary}
                          className="w-full inline-flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100/90 text-indigo-950 text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl border border-indigo-200/80 transition-all cursor-pointer"
                        >
                          {copied ? (
                            <>
                              <CheckCheck className="w-4 h-4 text-wa-green" />
                              <span className="text-wa-green font-bold">Resumo copiado com sucesso!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-indigo-700" />
                              <span>Copiar Resumo dos Dados</span>
                            </>
                          )}
                        </button>

                        <a
                          href={createWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-wa-green hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl shadow-sm transition-all active:scale-98"
                        >
                          <Phone className="w-4 h-4 fill-white" />
                          <span>Falar no WhatsApp da Revitta</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => setSubmittedData(null)}
                          className="text-xs font-bold text-gray-500 hover:text-indigo-900 py-1 transition-colors cursor-pointer"
                        >
                          Cadastrar Outro Profissional
                        </button>
                      </div>
                    </motion.div>
                  );
                })()
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Destination Notice */}
                  <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3 text-xs text-indigo-950">
                    <div className="w-8 h-8 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="leading-snug">
                      <span className="font-bold text-indigo-950 block">Encaminhamento Direto por E-mail</span>
                      <span className="text-gray-600">
                        Os dados cadastrados serão encaminhados para a coordenação em <strong className="text-indigo-950 font-semibold">{PARTNER_EMAIL}</strong> para análise técnica e contato.
                      </span>
                    </div>
                  </div>

                  {formError && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Section 1: Dados Pessoais & Contato */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 border-b border-indigo-50 pb-1.5 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-indigo-700" />
                      <span>1. Identificação e Contato</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label htmlFor="fullName" className="block text-xs font-semibold text-indigo-950 mb-1">
                          Nome Completo <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Ex: Carlos Eduardo de Oliveira"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-indigo-950 mb-1">
                          WhatsApp / Celular com DDD <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Ex: (54) 99999-9999"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-indigo-950 mb-1">
                          E-mail de Contato
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ex: seuemail@exemplo.com"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="city" className="block text-xs font-semibold text-indigo-950 mb-1">
                          Cidade onde reside <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white text-indigo-950"
                        >
                          <option value="Caxias do Sul">Caxias do Sul</option>
                          <option value="Farroupilha">Farroupilha</option>
                          <option value="Flores da Cunha">Flores da Cunha</option>
                          <option value="São Marcos">São Marcos</option>
                          <option value="Bento Gonçalves">Bento Gonçalves</option>
                          <option value="Outra cidade da Serra Gaúcha">Outra cidade da Serra Gaúcha</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="neighborhood" className="block text-xs font-semibold text-indigo-950 mb-1">
                          Bairro
                        </label>
                        <input
                          type="text"
                          id="neighborhood"
                          name="neighborhood"
                          value={formData.neighborhood}
                          onChange={handleInputChange}
                          placeholder="Ex: São Pelegrino, Pio X, Centro..."
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Especialidade & Qualificação */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 border-b border-indigo-50 pb-1.5 flex items-center gap-2">
                      <Wrench className="w-3.5 h-3.5 text-indigo-700" />
                      <span>2. Especialidade e Perfil Técnico</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label htmlFor="mainSpecialty" className="block text-xs font-semibold text-indigo-950 mb-1">
                          Especialidade Principal <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="mainSpecialty"
                          name="mainSpecialty"
                          required
                          value={formData.mainSpecialty}
                          onChange={handleInputChange}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white text-indigo-950"
                        >
                          <option value="">Selecione sua principal especialidade...</option>
                          {SPECIALTY_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="experienceYears" className="block text-xs font-semibold text-indigo-950 mb-1">
                          Tempo de Experiência
                        </label>
                        <select
                          id="experienceYears"
                          name="experienceYears"
                          value={formData.experienceYears}
                          onChange={handleInputChange}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white text-indigo-950"
                        >
                          <option value="Menos de 2 anos">Menos de 2 anos</option>
                          <option value="2 a 5 anos">2 a 5 anos</option>
                          <option value="5 a 10 anos">5 a 10 anos</option>
                          <option value="Mais de 10 anos">Mais de 10 anos (Mestre de ofício)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="taxStatus" className="block text-xs font-semibold text-indigo-950 mb-1">
                          Situação de Emissão de Nota
                        </label>
                        <select
                          id="taxStatus"
                          name="taxStatus"
                          value={formData.taxStatus}
                          onChange={handleInputChange}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white text-indigo-950"
                        >
                          <option value="MEI (Microempreendedor Individual)">Possuo MEI ativo</option>
                          <option value="ME ou EPP (Empresa de Pequeno Porte)">Possuo ME / EPP / Ltda</option>
                          <option value="Autônomo com emissão de RPA">Autônomo (Emissão de RPA)</option>
                          <option value="Pessoa Física (Interesse em regularizar MEI)">Pessoa Física (em regularização)</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="hasOwnTools" className="block text-xs font-semibold text-indigo-950 mb-1">
                          Ferramental Próprio
                        </label>
                        <select
                          id="hasOwnTools"
                          name="hasOwnTools"
                          value={formData.hasOwnTools}
                          onChange={handleInputChange}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white text-indigo-950"
                        >
                          <option value="Sim, ferramentas completas para meu ofício">Sim, ferramentas completas para o ofício</option>
                          <option value="Ferramentas básicas">Ferramentas básicas essenciais</option>
                          <option value="Necessito de apoio com maquinário pesado">Preciso de apoio com maquinário pesado</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="hasOwnVehicle" className="block text-xs font-semibold text-indigo-950 mb-1">
                          Transporte e Deslocamento
                        </label>
                        <select
                          id="hasOwnVehicle"
                          name="hasOwnVehicle"
                          value={formData.hasOwnVehicle}
                          onChange={handleInputChange}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white text-indigo-950"
                        >
                          <option value="Sim, carro / utilitário próprio">Sim, carro ou utilitário próprio</option>
                          <option value="Sim, moto própria">Sim, moto própria</option>
                          <option value="Transporte público / Carona">Transporte público / outros</option>
                        </select>
                      </div>

                      {/* Secondary Skills Checkbox list */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-indigo-950 mb-1.5">
                          Habilidades Secundárias (Marque o que mais domina além do seu ofício principal)
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {SECONDARY_SPECIALTIES.map((item) => {
                            const isChecked = formData.secondarySpecialties.includes(item);
                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() => handleSecondaryToggle(item)}
                                className={`text-left px-2.5 py-2 rounded-xl border text-xs transition-colors flex items-center gap-1.5 ${
                                  isChecked 
                                    ? 'bg-indigo-900 text-white border-indigo-900 font-medium' 
                                    : 'bg-indigo-50/50 hover:bg-indigo-100/60 text-indigo-950 border-indigo-100'
                                }`}
                              >
                                <span className={`w-3.5 h-3.5 rounded flex items-center justify-center shrink-0 text-[10px] ${
                                  isChecked ? 'bg-white text-indigo-900' : 'border border-indigo-300'
                                }`}>
                                  {isChecked && '✓'}
                                </span>
                                <span className="truncate">{item}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Histórico e Portfólio */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 border-b border-indigo-50 pb-1.5 flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-indigo-700" />
                      <span>3. Histórico e Portfólio</span>
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <label htmlFor="portfolioUrl" className="block text-xs font-semibold text-indigo-950 mb-1">
                          Link para Fotos / Instagram Profissional / Portfólio (opcional)
                        </label>
                        <input
                          type="text"
                          id="portfolioUrl"
                          name="portfolioUrl"
                          value={formData.portfolioUrl}
                          onChange={handleInputChange}
                          placeholder="Ex: @seuperfil no Instagram ou link do Google Drive"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white"
                        />
                      </div>

                      <div>
                        <label htmlFor="bio" className="block text-xs font-semibold text-indigo-950 mb-1">
                          Resumo da sua experiência e obras de destaque
                        </label>
                        <textarea
                          id="bio"
                          name="bio"
                          rows={3}
                          value={formData.bio}
                          onChange={handleInputChange}
                          placeholder="Conte brevemente sobre o tipo de reformas que você mais executa, bairros onde já trabalhou em Caxias do Sul e diferenciais do seu acabamento..."
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Disponibilidade & LGPD */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-900 border-b border-indigo-50 pb-1.5 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-indigo-700" />
                      <span>4. Disponibilidade e Termos</span>
                    </h3>

                    <div>
                      <label htmlFor="availability" className="block text-xs font-semibold text-indigo-950 mb-1">
                        Disponibilidade para Obras
                      </label>
                      <select
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-700 bg-white text-indigo-950"
                      >
                        <option value="Por empreitada / projetos fechados">Por empreitada / projetos fechados (Flexível)</option>
                        <option value="Integral (dedicação prioritária à Revitta)">Integral (Dedicação prioritária à Revitta)</option>
                        <option value="Atendimento pontual em manutenções rápidas">Atendimento pontual em manutenções rápidas</option>
                        <option value="Finais de semana e plantões emergenciais">Finais de semana e plantões emergenciais</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreedLgpd"
                          checked={formData.agreedLgpd}
                          onChange={handleCheckboxChange}
                          className="mt-1 w-4 h-4 rounded text-indigo-700 border-indigo-300 focus:ring-indigo-700"
                        />
                        <span className="text-xs text-gray-600 leading-snug">
                          Concordo que a <strong className="text-indigo-950 font-semibold">Revitta Construção e Reformas</strong> armazene meus dados profissionais para fins de contato e avaliação para prestação de serviços técnicos, em conformidade com a LGPD.
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-indigo-950 hover:bg-indigo-900 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg shadow-indigo-950/20 hover:shadow-xl transition-all active:scale-[0.99] disabled:opacity-75 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Enviando cadastro para análise técnica...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-wa-green" />
                          <span>Enviar Cadastro de Profissional Parceiro</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-gray-500 text-center mt-2">
                      Os dados são encaminhados diretamente para <strong className="text-indigo-950 font-semibold">{PARTNER_EMAIL}</strong>. Retorno em até 48 horas úteis.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section for Liberal Professionals */}
        <div className="mt-16 bg-white rounded-3xl border border-indigo-100 p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Dúvidas dos Prestadores</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-950 font-display">
              Perguntas Frequentes sobre a Parceria
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Transparência total desde o primeiro contato.
            </p>
          </div>

          <div className="space-y-3">
            {faqPartner.map((item, index) => {
              const isOpen = faqOpenIndex === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl border border-indigo-100/80 overflow-hidden transition-all bg-indigo-50/20"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-indigo-950 hover:text-indigo-700 transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-4 h-4 text-indigo-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-indigo-50 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
