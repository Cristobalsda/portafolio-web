import { projects } from "@/data/projects";
import { CreativeCard } from "../creative-elements";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import Image from "next/image";

export default function Projects() {
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

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group transform transition-all duration-700 md:hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CreativeCard className="h-full backdrop-blur-xl border border-white/20 hover:border-portfolio-primary/30 overflow-hidden">
                <div
                  className={`relative h-40 sm:h-44 bg-gradient-to-br ${project.gradient} rounded-xl mb-5 sm:mb-6 overflow-hidden`}
                >
                  {project.screenshots.length > 0 ? (
                    <div className="absolute inset-0 flex items-end justify-center gap-1.5 px-3 pt-5 sm:gap-2 sm:px-4">
                      {project.screenshots.map((screenshot, screenshotIndex) => (
                        <div
                          key={screenshot}
                          className={`relative w-16 overflow-hidden rounded-t-2xl border-2 border-white/70 bg-white shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 sm:w-20 md:group-hover:-translate-y-2 ${
                            screenshotIndex === 1
                              ? "h-32 sm:h-36"
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
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>

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
                        className="w-full flex-1 bg-gradient-to-r from-portfolio-primary to-blue-600 hover:from-blue-600 hover:to-portfolio-primary text-white transition-all duration-500 transform hover:scale-105 group-hover:shadow-xl"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4 group-hover:animate-spin" />
                          GitHub
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        className="w-full flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 text-white transition-all duration-500 transform hover:scale-105 group-hover:shadow-xl"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                          {project.demoLabel}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CreativeCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
