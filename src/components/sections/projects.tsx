"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { CreativeCard } from "../creative-elements";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, Smartphone, Code2, Sparkles, Filter } from "lucide-react";
import Image from "next/image";

type ProjectType = (typeof projects)[number];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "mobile" | "web" | "ai">("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "mobile") return project.type.toLowerCase().includes("móvil");
    if (filter === "web") return project.type.toLowerCase() === "web" || project.status.toLowerCase().includes("sitio");
    if (filter === "ai") return project.type.toLowerCase().includes("ia") || project.tech.some(t => t.toLowerCase().includes("api") || t.toLowerCase().includes("ai") || t.toLowerCase().includes("chatbot"));
    return true;
  });

  const renderProjectCard = (project: ProjectType) => {
    const hasScreenshots = project.screenshots && project.screenshots.length > 0;

    return (
      <div
        key={project.name}
        className="group transform transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
      >
        <CreativeCard className="h-full border border-white/10 dark:border-white/5 bg-white/20 dark:bg-card/20 p-5 flex flex-col justify-between overflow-hidden relative">
          
          {/* Visual Showcase (Phone / Image / Gradient) */}
          <div className="relative h-56 w-full rounded-2xl mb-6 overflow-hidden bg-slate-950 flex items-center justify-center border border-white/5 shadow-inner">
            
            {/* Project Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            {hasScreenshots ? (
              /* Premium Overlapping Smartphone Mockups */
              <div className="absolute inset-0 flex items-end justify-center gap-2 px-4 pt-10 select-none">
                {project.screenshots.map((screenshot, idx) => {
                  // Central phone is larger and on top
                  const isCenter = idx === 1;
                  const isLeft = idx === 0;
                  
                  return (
                    <div
                      key={screenshot}
                      className={`relative rounded-t-xl bg-slate-900 border-[2px] border-slate-700/80 shadow-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-1.5 ${
                        isCenter
                          ? "w-20 h-44 z-10 scale-110 border-slate-600/90"
                          : `w-16 h-36 opacity-75 z-0 ${
                              isLeft ? "rotate-[-6deg] translate-x-1" : "rotate-[6deg] -translate-x-1"
                            }`
                      }`}
                    >
                      {/* Notch / Speaker Simulator */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-slate-800 rounded-full z-20"></div>
                      
                      {/* Screenshot */}
                      <Image
                        src={screenshot}
                        alt={`${project.name} screen ${idx + 1}`}
                        fill
                        sizes="96px"
                        className="object-cover object-top"
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Desktop/Logo Visual */
              <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-white/15 bg-white/5 shadow-xl transition-all duration-500 group-hover:scale-[1.03] flex items-center justify-center p-5">
                {project.icon ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={project.icon}
                      alt={project.name}
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                ) : (
                  <Code2 className="text-portfolio-primary" size={32} />
                )}
              </div>
            )}

            {/* Badges Overlay */}
            <div className="absolute left-3 right-3 top-3 z-20 flex items-start justify-between gap-2">
              <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-slate-900/80 border border-white/10 px-2.5 py-1 text-[10px] font-bold text-white shadow-lg backdrop-blur-sm">
                <Smartphone size={12} className="text-portfolio-secondary" />
                {project.type}
              </div>

              <div className="max-w-[62%] rounded-full bg-portfolio-primary/90 text-center text-white px-2.5 py-1 text-[10px] font-bold leading-tight shadow-lg backdrop-blur-sm border border-portfolio-primary/20">
                {project.status}
              </div>
            </div>
          </div>

          {/* Details Content */}
          <div className="space-y-4 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-portfolio-text group-hover:text-portfolio-primary transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-portfolio-neutral text-sm leading-relaxed mt-2 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-portfolio-primary/5 hover:bg-portfolio-primary/10 text-portfolio-primary border border-portfolio-primary/10 text-[10px] px-2 py-0.5 rounded-md transition-colors duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2.5 pt-2">
                {project.github && (
                  <Button
                    variant="outline"
                    className="flex-1 border-border hover:bg-portfolio-primary/5 hover:text-portfolio-primary font-bold text-xs rounded-xl transition-all duration-300 py-4"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-3.5 w-3.5" />
                      Code
                    </a>
                  </Button>
                )}

                {project.demo && (
                  <Button
                    className="flex-1 bg-gradient-to-r from-portfolio-primary to-indigo-600 hover:from-indigo-600 hover:to-portfolio-primary text-white font-extrabold text-xs rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02] py-4"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      {project.demoLabel === "Ver en Play Store" ? "Play Store" : "Demo"}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CreativeCard>
      </div>
    );
  };

  return (
    <>
      <div className="container mx-auto max-w-6xl relative z-10 px-4">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient-primary mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-base text-portfolio-neutral sm:text-lg">
            Explora mis creaciones más relevantes en desarrollo móvil, web e integraciones de IA.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {([
            { id: "all", label: "Todos", icon: Sparkles },
            { id: "mobile", label: "Mobile Apps", icon: Smartphone },
            { id: "web", label: "Web Sites", icon: Code2 },
            { id: "ai", label: "IA & APIs", icon: Filter },
          ] as const).map((btn) => {
            const Icon = btn.icon;
            const isActive = filter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`flex items-center gap-1.5 px-4.5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-portfolio-primary text-white shadow-lg shadow-portfolio-primary/20 scale-[1.02]"
                    : "glass-card text-portfolio-neutral hover:text-portfolio-primary border-transparent hover:border-portfolio-primary/20"
                }`}
              >
                <Icon size={14} />
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => renderProjectCard(project))}
          </div>
        ) : (
          <div className="text-center py-12 glass-card rounded-3xl max-w-md mx-auto">
            <Code2 size={48} className="mx-auto text-portfolio-neutral animate-bounce-slow mb-4" />
            <h3 className="font-bold text-portfolio-text mb-2">No se encontraron proyectos</h3>
            <p className="text-sm text-portfolio-neutral">Intenta cambiar los filtros de búsqueda.</p>
          </div>
        )}
      </div>
    </>
  );
}
