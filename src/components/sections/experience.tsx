import { Bot, Calendar, Database, Globe, Server, Wrench } from "lucide-react";
import { CreativeCard, GeometricShapes } from "../creative-elements";

const experiences = [
  {
    period: "Feb 2026 - Actualidad",
    role: "Soporte técnico e infraestructura TI",
    company: "Municipalidad de Los Sauces",
    items: [
      {
        icon: Wrench,
        text: "Soporte técnico a usuarios municipales, equipos, impresoras, redes y sistemas",
      },
      {
        icon: Database,
        text: "Consultas SQL para extracción y análisis de información institucional",
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
        text: "Integración con Meta API y WhatsApp Business",
      },
      {
        icon: Bot,
        text: "Análisis de integraciones con agentes IA y optimización del consumo de tokens",
      },
      {
        icon: Server,
        text: "QA funcional de tareas y validación de flujos",
      },
    ],
  },
  {
    period: "Ene 2025 - Mar 2025",
    role: "Practicante desarrollador",
    company: "Trawun Speed Spa",
    items: [
      {
        icon: Server,
        text: "Desarrollo de endpoints y filtros personalizados con NestJS",
      },
      {
        icon: Globe,
        text: "Integración y consumo de APIs desde Next.js",
      },
      {
        icon: Database,
        text: "Diseño y creación de tablas para la base de datos",
      },
    ],
  },
];

export default function Experience() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-green-50"></div>
      <GeometricShapes />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-transparent mb-4">
            Experiencia Profesional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-3 h-full w-1 rounded-full bg-gradient-to-b from-portfolio-primary to-portfolio-secondary sm:left-1/2 sm:-translate-x-1/2 sm:transform"></div>

          <div className="space-y-12">
            {experiences.map((experience) => (
              <div
                key={`${experience.company}-${experience.period}`}
                className="flex items-center justify-center pl-8 sm:pl-0"
              >
                <CreativeCard className="w-full max-w-lg backdrop-blur-xl border-l-4 border-portfolio-primary">
                  <div className="flex items-center mb-6">
                    <div className="glassmorphism-dark rounded-full p-3 mr-4">
                      <Calendar
                        className="text-portfolio-primary animate-pulse"
                        size={24}
                      />
                    </div>
                    <span className="text-portfolio-neutral font-bold text-base sm:text-lg">
                      {experience.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text mb-2">
                    {experience.role}
                  </h3>
                  <p className="text-portfolio-primary font-bold text-base sm:text-lg mb-4">
                    {experience.company}
                  </p>

                  <div className="space-y-3">
                    {experience.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.text}
                          className="flex items-start glassmorphism rounded-lg p-3"
                        >
                          <Icon
                            className="mr-3 mt-1 shrink-0 text-portfolio-secondary animate-pulse"
                            size={20}
                          />
                          <span className="text-portfolio-text">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </CreativeCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
