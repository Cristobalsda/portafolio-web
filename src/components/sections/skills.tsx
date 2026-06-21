"use client";

import { skillCategories } from "@/data/skills";
import { TechIcon } from "../creative-elements";

export default function Skills() {
  return (
    <>
      <div className="container mx-auto max-w-6xl relative z-10 px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient-primary mb-4">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-base text-portfolio-neutral sm:text-lg">
            Stack tecnológico especializado organizado por áreas de competencia.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="glass-card rounded-3xl border border-white/10 dark:border-white/5 bg-white/20 dark:bg-card/20 p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Subtle decorative glow in card corner */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-portfolio-primary/5 rounded-full blur-3xl group-hover:bg-portfolio-primary/10 transition-colors duration-500"></div>
              
              {/* Category Header */}
              <div className="relative z-10 flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-portfolio-text">
                  {category.name}
                </h3>
                <span className="text-xs font-mono text-portfolio-neutral uppercase tracking-widest px-2.5 py-1 rounded-full bg-portfolio-primary/5 border border-portfolio-primary/10">
                  {category.skills.length} Tecnologías
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 relative z-10">
                {category.skills.map((skill, index) => (
                  <TechIcon
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                    color={skill.color}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
