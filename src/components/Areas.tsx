import React from 'react';
import { motion } from 'motion/react';
import { CITIES, createWhatsAppUrl } from '../data/revittaData';
import { SparkleIcon } from './SparkleIcon';
import { MapPin, MessageSquare, ArrowRight, Building } from 'lucide-react';
import { SectionReveal } from './SectionReveal';

export const Areas: React.FC = () => {
  return (
    <section id="areas" className="py-20 sm:py-24 bg-mist relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Reveal */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/90 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-3 border border-indigo-200/50">
              <SparkleIcon className="w-3.5 h-3.5 text-indigo-700" />
              <span>Cobertura Regional Serra Gaúcha</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-indigo-950 tracking-tight">
              Onde a Revitta atua
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed font-normal">
              Atendimento presencial no endereço do cliente mediante agendamento em Caxias do Sul, Farroupilha, São Marcos e Flores da Cunha.
            </p>
          </div>
        </SectionReveal>

        {/* 4 Cities Cards with Motion Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CITIES.map((city, index) => {
            const cityWaUrl = createWhatsAppUrl(
              `Olá! Gostaria de agendar um atendimento da Revitta para serviço/reforma em ${city.name} (${city.cep}).`
            );

            return (
              <motion.div 
                key={city.name}
                id={`card-cidade-${city.name.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-indigo-100 shadow-sm hover:shadow-xl hover:shadow-indigo-950/6 hover:border-indigo-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:bg-indigo-700 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-600 bg-mist px-2.5 py-1 rounded-md border border-indigo-100/60">
                      CEP {city.cep}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-indigo-950 group-hover:text-indigo-700 transition-colors">
                    {city.name}
                  </h3>

                  <p className="text-xs text-indigo-700 font-semibold mt-1">
                    {city.highlight}
                  </p>

                  <p className="text-xs text-gray-600 mt-3 border-t border-indigo-50 pt-3 leading-relaxed">
                    <strong>Foco operacional:</strong> {city.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-indigo-100">
                  <motion.a
                    href={cityWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-50 hover:bg-indigo-100/80 text-indigo-950 font-bold py-2.5 px-3 rounded-xl text-xs transition-all border border-indigo-200/60 group-hover:border-indigo-300 cursor-pointer"
                  >
                    <span>Avaliação em {city.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-700" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Local presence guarantee box */}
        <SectionReveal delay={0.2}>
          <div className="mt-12 p-6 bg-white rounded-3xl border border-indigo-100 shadow-sm max-w-3xl mx-auto text-center text-xs sm:text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2 text-indigo-950 font-bold text-sm mb-1.5">
              <Building className="w-4 h-4 text-indigo-700" />
              <span>Sede Central em Caxias do Sul</span>
            </div>
            <p className="leading-relaxed">
              <strong className="text-indigo-950">Endereço:</strong> Rua Pinheiro Machado, 1640 – Centro, Caxias do Sul – RS. Equipes volantes com atendimento pontual nos bairros Centro, Lourdes, São Pelegrino, Pio X, Cinquentenário, Exposição, Villagio Iguatemi, Panazzolo, Cruzeiro e em toda a Serra Gaúcha.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};
