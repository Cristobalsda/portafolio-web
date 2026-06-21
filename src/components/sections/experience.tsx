"use client";

import { Calendar, Wrench, Database, Globe, Bot, Server } from "lucide-react";
import { CreativeCard, GeometricShapes } from "../creative-elements";

const experiences = [
  {
    period: "Feb 2026 - Actualidad",
    role: "Soporte técnico e infraestructura TI",
    company: "Municipalidad de Los Sauces",
    items: [
      {
        icon: Wrench,
        text: "Soporte técnico integral a usuarios municipales, diagnóstico de hardware, mantenimiento de impresoras, administración de redes y sistemas locales.",
      },
      {
        icon: Database,
        text: "Creación de consultas SQL para extracción, estructuración y análisis de información institucional clave.",
      },
    ],
  },
  {
    period: "Oct 2025 - Dic 2025",
    role: "Desarrollador Full Stack Junior",
    company: "Sinectados Spa",
    items: [
      {
        icon: Globe,
        text: "Integración exitosa con Meta API y WhatsApp Business para flujos automáticos de mensajería comercial.",
      },
      {
        icon: Bot,
        text: "Investigación y análisis de integraciones con agentes de Inteligencia Artificial, optimizando el consumo de tokens y llamadas a modelos.",
      },
      {
        icon: Server,
        text: "QA funcional exhaustivo de tareas programadas y validación cruzada de flujos lógicos en producción.",
      },
    ],
  },
  {
    period: "Ene 2025 - Mar 2025",
    role: "Practicante Desarrollador",
    company: "Trawun Speed Spa",
    items: [
      {
        icon: Server,
        text: "Diseño y desarrollo de endpoints REST y filtros personalizados con NestJS en entornos escalables.",
      },
      {
        icon: Globe,
        text: "Integración, mapeo y consumo eficiente de APIs externas desde aplicaciones cliente en Next.js.",
      },
      {
        icon: Database,
        text: "Diseño conceptual y físico de tablas relacionales para optimizar la estructura de la base de datos.",
      },
    ],
  },
];

export default function Experience() {
  return (
    <>
      <GeometricShapes />

      <div className="container mx-auto max-w-4xl relative z-10 px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient-primary mb-4">
            Experiencia Profesional
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Glowing Line */}
          <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-portfolio-primary via-portfolio-primary/60 to-portfolio-secondary/10 sm:left-1/2 sm:-translate-x-1/2 sm:transform"></div>

          <div className="space-y-12">
            {experiences.map((experience, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={`${experience.company}-${experience.period}`}
                  className={`flex flex-col sm:flex-row items-start justify-between relative pl-10 sm:pl-0 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Pulse Node */}
                  <div className="absolute left-2.5 sm:left-1/2 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-slate-950 border-4 border-portfolio-primary shadow-[0_0_10px_var(--color-portfolio-primary)] z-20 animate-pulse"></div>

                  {/* Card Content wrapper (takes half width on desktop) */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <CreativeCard className="border border-white/10 dark:border-white/5 bg-white/30 dark:bg-card/30 p-6 shadow-xl relative hover:shadow-2xl transition-all duration-300">
                      
                      {/* Period Header */}
                      <div className="flex items-center gap-3 mb-4 text-xs font-bold text-portfolio-primary uppercase tracking-widest font-mono">
                        <Calendar size={14} className="text-portfolio-secondary" />
                        {experience.period}
                      </div>

                      {/* Job Info */}
                      <h3 className="text-xl font-extrabold text-portfolio-text mb-1">
                        {experience.role}
                      </h3>
                      <p className="text-portfolio-neutral font-bold text-sm sm:text-base mb-5 pb-3 border-b border-white/5">
                        {experience.company}
                      </p>

                      {/* Job Responsibilities List */}
                      <ul className="space-y-3.5">
                        {experience.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li
                              key={item.text}
                              className="flex items-start gap-3 text-portfolio-neutral text-sm leading-relaxed"
                            >
                              <div className="h-6 w-6 rounded-lg bg-portfolio-primary/5 border border-portfolio-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-portfolio-primary">
                                <Icon size={14} />
                              </div>
                              <span className="text-portfolio-text/90">{item.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </CreativeCard>
                  </div>

                  {/* Spacer for desktop layout balance */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
