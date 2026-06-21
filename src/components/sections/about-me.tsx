"use client";

import { Code2, Heart, Rocket, Star, Zap, CheckCircle2, Terminal } from "lucide-react";
import { CreativeCard, GeometricShapes, GlowingOrb } from "../creative-elements";

const pillars = [
  {
    icon: Code2,
    title: "Código Limpio",
    description: "Priorizo arquitecturas limpias, escalables y mantenibles en todos mis proyectos.",
    color: "text-indigo-500",
  },
  {
    icon: Zap,
    title: "Rendimiento y QA",
    description: "Enfoque riguroso en optimización de endpoints, bases de datos y flujos de usuario.",
    color: "text-emerald-500",
  },
  {
    icon: Heart,
    title: "Experiencia de Usuario (UX)",
    description: "Diseño interfaces intuitivas y dinámicas que hagan agradable la navegación diaria.",
    color: "text-rose-500",
  },
];

export default function AboutMe() {
  return (
    <>
      <GeometricShapes />

      <div className="container mx-auto max-w-6xl relative z-10 px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient-primary mb-4">
            Sobre mí
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Text Content - Left Column (ColSpan: 7) */}
          <div className="lg:col-span-7 space-y-6">
            <CreativeCard className="backdrop-blur-xl border border-white/10 dark:border-white/5 shadow-xl">
              <div className="space-y-5">
                <h3 className="text-2xl font-extrabold text-portfolio-text">
                  Hola, soy Cristóbal Pereira Vega
                </h3>
                <p className="text-base sm:text-lg text-portfolio-neutral leading-relaxed">
                  Soy <strong className="text-portfolio-text font-bold">Ingeniero Informático</strong> titulado en INACAP, con una sólida pasión por el desarrollo de software. Mi enfoque está centrado en crear soluciones funcionales y atractivas, abarcando desde el diseño de APIs hasta aplicaciones móviles en manos de usuarios reales.
                </p>
                <p className="text-base sm:text-lg text-portfolio-neutral leading-relaxed">
                  Mi trayectoria incluye proyectos Full Stack e integraciones avanzadas (Meta APIs, chatbots de inteligencia artificial) y el despliegue de <strong className="text-portfolio-text font-bold">aplicaciones nativas en Google Play Store</strong>. Me considero una persona proactiva, con alta velocidad de aprendizaje y enfocada en resolver problemas reales a través del código.
                </p>

                {/* Quick Checks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <div className="flex items-center gap-2.5 text-portfolio-neutral text-sm sm:text-base">
                    <CheckCircle2 size={18} className="text-portfolio-primary shrink-0" />
                    <span>Metodologías ágiles y QA</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-portfolio-neutral text-sm sm:text-base">
                    <CheckCircle2 size={18} className="text-portfolio-secondary shrink-0" />
                    <span>Publicación en tiendas móviles</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-portfolio-neutral text-sm sm:text-base">
                    <CheckCircle2 size={18} className="text-portfolio-secondary shrink-0" />
                    <span>Integración con APIs e IA</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-portfolio-neutral text-sm sm:text-base">
                    <CheckCircle2 size={18} className="text-portfolio-primary shrink-0" />
                    <span>Diseño UX/UI interactivo</span>
                  </div>
                </div>
              </div>
            </CreativeCard>
          </div>

          {/* Visual Showcase - Right Column (ColSpan: 5) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <GlowingOrb className="absolute inset-0 scale-90" size="w-72 h-72 sm:w-96 sm:h-96" />
            
            <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 glass-card rounded-3xl flex items-center justify-center card-3d-hover shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-primary/5 to-portfolio-secondary/5 opacity-50"></div>
              
              {/* Central Circle */}
              <div className="text-center p-6 flex flex-col items-center">
                <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-portfolio-primary to-portfolio-secondary flex items-center justify-center text-white shadow-xl animate-float">
                  <Terminal size={48} className="animate-pulse" />
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <Star className="text-amber-400 animate-pulse" size={24} />
                  <Rocket className="text-portfolio-primary animate-bounce-slow" size={24} />
                  <Zap className="text-portfolio-secondary animate-pulse" size={24} />
                </div>
              </div>

              {/* Floating badges around the card inside layout */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-bold font-mono">
                Full Stack
              </div>
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold font-mono">
                Mobile Dev
              </div>
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold font-mono">
                QA Testing
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold font-mono">
                SQL & DB
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Core Principles */}
        <div className="grid gap-6 md:grid-cols-3 mt-12 sm:mt-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 neon-border-hover"
              >
                <div className={`h-12 w-12 rounded-xl bg-portfolio-primary/10 flex items-center justify-center mb-4 ${pillar.color}`}>
                  <Icon size={24} className="animate-pulse" />
                </div>
                <h4 className="text-lg font-extrabold text-portfolio-text mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-portfolio-neutral leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
