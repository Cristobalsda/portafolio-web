import { projects } from "@/data/projects";
import { CreativeCard } from "../creative-elements";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const featuredProjects = projects.slice(0, 3);
  const secondaryProjects = projects.slice(3);

  const renderProjectCard = (project: (typeof projects)[number], featured = false) => (
    <div
      key={project.name}
      className="group transform transition-all duration-300 md:hover:-translate-y-1"
    >
      <CreativeCard className="h-full backdrop-blur-xl border border-white/20 hover:border-portfolio-primary/30 overflow-hidden">
        <div
          className={`relative ${featured ? "h-56" : "h-40 sm:h-44"} bg-gradient-to-br ${project.gradient} rounded-xl mb-5 sm:mb-6 overflow-hidden`}
        >
          {project.screenshots.length > 0 ? (
            <div className="absolute inset-0 flex items-end justify-center gap-1.5 px-3 pt-5 sm:gap-2 sm:px-4">
              {project.screenshots.map((screenshot, screenshotIndex) => (
                <div
                  key={screenshot}
                  className={`relative overflow-hidden rounded-t-2xl border-2 border-white/70 bg-white shadow-2xl transition-transform duration-300 group-hover:-translate-y-1 ${
                    featured ? "w-20 sm:w-24" : "w-16 sm:w-20"
                  } ${
                    screenshotIndex === 1
                      ? featured
                        ? "h-44 sm:h-48"
                        : "h-32 sm:h-36"
                      : featured
                        ? "h-40 opacity-90 sm:h-44"
                        : "h-28 opacity-90 sm:h-32"
                  }`}
                >
                  <Image
                    src={screenshot}
                    alt={`${project.name} captura ${screenshotIndex + 1}`}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
          ) : (
            <Image
              src={project.icon}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>

          <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-portfolio-text shadow-lg backdrop-blur sm:left-4 sm:top-4 sm:text-xs">
            <Smartphone size={14} />
            {project.type}
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 sm:bottom-4 sm:left-4 sm:right-4 sm:gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border-2 border-white bg-white shadow-lg sm:h-12 sm:w-12">
              <Image
                src={project.icon}
                alt={`${project.name} icono`}
                fill
                className="object-cover"
              />
            </div>
            <span className="truncate rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-portfolio-primary shadow-lg backdrop-blur sm:text-xs">
              {project.status}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-portfolio-text group-hover:text-portfolio-primary transition-colors duration-300">
            {project.name}
          </h3>

          <p className="text-portfolio-neutral text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                className="bg-white text-xs text-portfolio-text border-portfolio-primary/20 hover:border-portfolio-primary/50 transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            {project.github && (
              <Button
                className="w-full flex-1 bg-portfolio-primary hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            )}

            {project.demo && (
              <Button
                className="w-full flex-1 bg-portfolio-secondary hover:bg-green-500 text-white transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {project.demoLabel}
                </a>
              </Button>
            )}
          </div>
        </div>
      </CreativeCard>
    </div>
  );

  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-bg via-white to-purple-50"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-transparent mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-xl text-portfolio-neutral">
            Soluciones innovadoras que he desarrollado
          </p>
        </div>

        <div className="mb-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {featuredProjects.map((project) => renderProjectCard(project, true))}
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {secondaryProjects.map((project) => renderProjectCard(project))}
        </div>
      </div>
    </>
  );
}
