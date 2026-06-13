import { Bot, Database, Globe2, Smartphone } from "lucide-react";
import { CreativeCard } from "../creative-elements";

const achievements = [
  {
    icon: Smartphone,
    value: "2 apps",
    label: "publicadas en Google Play",
  },
  {
    icon: Globe2,
    value: "Full Stack",
    label: "con Next.js, NestJS y Django",
  },
  {
    icon: Bot,
    value: "Meta API",
    label: "WhatsApp Business y agentes IA",
  },
  {
    icon: Database,
    value: "SQL",
    label: "consultas y análisis de datos",
  },
];

export default function Achievements() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white"></div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="mb-4 bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            Logros y Enfoque
          </h2>
          <div className="mx-auto mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-portfolio-primary to-portfolio-secondary"></div>
          <p className="text-base text-portfolio-neutral sm:text-xl">
            Evidencia concreta de productos, experiencia e integraciones reales
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <CreativeCard
                key={achievement.value}
                className="border border-white/30 bg-white/50 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-portfolio-primary/10 text-portfolio-primary">
                  <Icon size={28} />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-portfolio-text">
                  {achievement.value}
                </h3>
                <p className="text-sm leading-relaxed text-portfolio-neutral">
                  {achievement.label}
                </p>
              </CreativeCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
