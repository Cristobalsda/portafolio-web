"use client";

import { skillCategories } from "@/data/skills";
import { TechIcon } from "../creative-elements";

export default function Skills() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-bg via-white to-blue-50"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-transparent mb-4">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-xl text-portfolio-neutral">
            Stack organizado por áreas de trabajo
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-3xl border border-white/30 bg-white/40 p-4 shadow-lg backdrop-blur-xl sm:p-6"
            >
              <h3 className="mb-5 text-xl font-bold text-portfolio-text">
                {category.name}
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
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
