import React from 'react';
import { CITIES, createWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { MapPin, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

export const Areas: React.FC = () => {
  return (
    <section id="areas" className="py-20 bg-mist relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3">
            <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
            <span>Cobertura Regional Serra Gaúcha</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-indigo-950 tracking-tight">
            Onde a Revitta atua
          </h2>
          {/* PRD §6 required phrase verbatim */}
          <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed font-medium">
            Atendimento presencial no endereço do cliente mediante agendamento em Caxias do Sul, Farroupilha, São Marcos e Flores da Cunha.
          </p>
        </div>

        {/* 4 Cities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CITIES.map((city, index) => {
            const cityWaUrl = createWhatsAppUrl(
              `Olá! Gostaria de agendar um atendimento da Revitta para serviço/reforma em ${city.name} (${city.cep}).`
            );

            return (
              <div 
                key={city.name}
                id={`card-cidade-${city.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-2xl p-6 border border-indigo-100/80 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-600 bg-mist px-2.5 py-1 rounded-md border border-indigo-50">
                      CEP {city.cep}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-indigo-950">
                    {city.name}
                  </h3>

                  <p className="text-xs text-indigo-700 font-semibold mt-1">
                    {city.highlight}
                  </p>

                  <p className="text-xs text-gray-600 mt-3 border-t border-indigo-50 pt-3 leading-relaxed">
                    <strong>Foco:</strong> {city.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-indigo-100">
                  <a
                    href={cityWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-950 font-bold py-2.5 px-3 rounded-xl text-xs transition-colors"
                  >
                    <span>Avaliação em {city.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-700" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local presence guarantee box */}
        <div className="mt-10 p-5 bg-white rounded-2xl border border-indigo-100 max-w-2xl mx-auto text-center text-xs sm:text-sm text-gray-600">
          <p>
            <strong className="text-indigo-950">Sede Operacional:</strong> Rua Pinheiro Machado, 1640 – Centro, Caxias do Sul – RS. Equipes volantes com deslocamento pontual em todas as cidades polo atendidas.
          </p>
        </div>
      </div>
    </section>
  );
};
