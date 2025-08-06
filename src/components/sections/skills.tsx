"use client";

import { skills } from "@/data/skills";
import { TechIcon } from "../creative-elements";

export default function Skills() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-bg via-white to-blue-50"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-transparent mb-4">
            Habilidades Técnicas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-portfolio-neutral">
            Tecnologías que domino para crear soluciones increíbles
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
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
    </>
  );
}
