"use client";

import { Bot, Database, Globe2, Smartphone } from "lucide-react";
import { CreativeCard } from "../creative-elements";

const achievements = [
  {
    icon: Smartphone,
    value: "2 Apps",
    label: "Publicadas en Google Play",
    color: "from-blue-500/10 to-indigo-500/10 text-portfolio-primary",
    borderColor: "group-hover:border-blue-500/40",
  },
  {
    icon: Globe2,
    value: "Full Stack",
    label: "Desarrollo en Next.js, NestJS y Django",
    color: "from-emerald-500/10 to-teal-500/10 text-portfolio-secondary",
    borderColor: "group-hover:border-emerald-500/40",
  },
  {
    icon: Bot,
    value: "Meta API",
    label: "WhatsApp Business y agentes de IA",
    color: "from-purple-500/10 to-pink-500/10 text-purple-400",
    borderColor: "group-hover:border-purple-500/40",
  },
  {
    icon: Database,
    value: "Bases SQL",
    label: "Consultas avanzadas y análisis relacionales",
    color: "from-amber-500/10 to-orange-500/10 text-amber-500",
    borderColor: "group-hover:border-amber-500/40",
  },
];

export default function Achievements() {
  return (
    <>
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl">
            Logros y Enfoque
          </h2>
          <div className="mx-auto mb-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-portfolio-primary to-portfolio-secondary"></div>
          <p className="text-base text-portfolio-neutral sm:text-lg">
            Evidencia tangible de productos entregados, tecnologías dominadas e integraciones reales.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <CreativeCard
                key={achievement.value}
                className="group border border-white/10 dark:border-white/5 bg-white/40 dark:bg-card/40 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-default"
              >
                {/* Background colored blur effect inside the card */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-secondary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Wrapper */}
                <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${achievement.color} shadow-inner transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={30} className="animate-pulse" />
                </div>

                {/* Metric/Value */}
                <h3 className="mb-2 text-3xl font-black bg-gradient-to-r from-portfolio-text via-portfolio-primary to-portfolio-secondary bg-clip-text text-transparent">
                  {achievement.value}
                </h3>

                {/* Description */}
                <p className="text-sm font-semibold leading-relaxed text-portfolio-neutral group-hover:text-portfolio-text transition-colors duration-300">
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
