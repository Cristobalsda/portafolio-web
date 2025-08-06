import { projects } from "@/data/projects";
import { CreativeCard } from "../creative-elements";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-bg via-white to-purple-50"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-transparent mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-portfolio-neutral">
            Soluciones innovadoras que he desarrollado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group cursor-pointer transform transition-all duration-700 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CreativeCard className="h-full backdrop-blur-xl border border-white/20 hover:border-portfolio-primary/30 overflow-hidden">
                <div
                  className={`relative h-32 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center overflow-hidden`}
                >
                  <Image
                    src={project.icon}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-portfolio-text group-hover:text-portfolio-primary transition-colors duration-300">
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

                  <Button
                    className="w-full bg-gradient-to-r from-portfolio-primary to-blue-600 hover:from-blue-600 hover:to-portfolio-primary text-white transition-all duration-500 transform hover:scale-105 group-hover:shadow-xl"
                    asChild
                  >
                    <a href={project.github}>
                      <Github className="mr-2 h-4 w-4 group-hover:animate-spin" />
                      Ver en GitHub
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                    </a>
                  </Button>
                </div>
              </CreativeCard>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
