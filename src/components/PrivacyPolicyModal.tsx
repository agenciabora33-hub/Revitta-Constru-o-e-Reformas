import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, FileText, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/revittaData';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-indigo-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-privacy-title"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-indigo-100 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-indigo-100 flex items-center justify-between bg-mist">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-privacy-title" className="text-xl font-bold font-display text-indigo-950">
                Política de Privacidade & Proteção de Dados (LGPD)
              </h2>
              <p className="text-xs text-gray-600">
                Em conformidade com a Lei Federal nº 13.709/2018
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-gray-600 hover:text-indigo-950 hover:bg-indigo-100/60 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-700"
            aria-label="Fechar modal de privacidade"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-600 leading-relaxed">
          <div>
            <h3 className="text-base font-bold text-indigo-950 mb-2">1. Identificação do Controlador</h3>
            <p>
              Esta política é regida pela <strong>REVITTA CONSTRUÇÃO E REFORMAS</strong> (nome fantasia Revitta Manutenções e Reformas), pessoa jurídica de direito privado inscrita no CNPJ sob o nº <strong>50.463.095/0001-58</strong>, sediada na <strong>Rua Pinheiro Machado, 1640 – Centro, Caxias do Sul – RS, CEP 95020-170</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-indigo-950 mb-2">2. Princípio da Coleta Mínima (Privacy by Design)</h3>
            <p>
              O site da Revitta foi projetado estritamente com base no princípio da coleta mínima de dados. <strong>Não possuímos formulários de cadastro ou armazenamento de banco de dados no site.</strong> Todo o contato é iniciado ativamente pelo próprio usuário através do aplicativo WhatsApp.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-indigo-950 mb-2">3. Dados Coletados e Finalidade</h3>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>
                <strong>Cookies Técnicos e de Navegação:</strong> Utilizados para garantir a estabilidade do site, memorizar sua preferência de cookies e permitir o carregamento rápido de componentes.
              </li>
              <li>
                <strong>Métricas Analíticas Anônimas (Google Analytics com Consent Mode v2):</strong> Caso você autorize, coletamos dados estatísticos agregados sem identificação direta (por exemplo, contagem de cliques em botões de WhatsApp para mensuração de tráfego).
              </li>
              <li>
                <strong>Comunicação WhatsApp:</strong> Ao clicar nos links do site, você é direcionado ao WhatsApp da Revitta (54) 99216-2361. Os dados compartilhados na conversa (nome, endereço da obra, fotos e medidas) são utilizados exclusivamente para elaboração do orçamento e execução dos serviços contratados.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-indigo-950 mb-2">4. Compartilhamento e Sigilo de Dados</h3>
            <p>
              A Revitta não comercializa, aluga ou repassa quaisquer informações ou números de telefone a terceiros. As informações da sua obra são acessadas unicamente pela nossa equipe técnica interna e pelos profissionais alocados para a execução do serviço.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-indigo-950 mb-2">5. Seus Direitos (Art. 18 da LGPD)</h3>
            <p>
              Como titular dos dados, você tem o direito de solicitar a qualquer momento a confirmação da existência de tratamento, o acesso, a correção ou a exclusão dos dados fornecidos em nossas conversas de orçamento, bastando enviar uma mensagem para nosso canal de atendimento.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-indigo-950 mb-2">6. Canal de Atendimento do Titular</h3>
            <p>
              Para qualquer dúvida sobre privacidade ou exercício de direitos da LGPD, entre em contato diretamente pelo WhatsApp <strong>(54) 99216-2361</strong> ou presencialmente em nossa sede na <strong>Rua Pinheiro Machado, 1640 – Centro, Caxias do Sul – RS</strong>.
            </p>
          </div>

          <div className="pt-4 border-t border-indigo-50 text-xs text-gray-600">
            Última atualização desta política: Abril de 2026. Revitta Construção e Reformas.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-mist border-t border-indigo-100 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-indigo-700 hover:bg-indigo-900 text-white text-xs font-bold transition-colors"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
