"use client";

import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="container mx-auto max-w-6xl relative z-10 px-4">
      <div className="grid gap-10 mb-10 md:grid-cols-3 md:gap-12 md:mb-12 text-center md:text-left">
        
        {/* Author Details */}
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-transparent">
            Cristobal Pereira
          </h3>
          <p className="text-sm sm:text-base text-portfolio-neutral max-w-xs leading-relaxed mx-auto md:mx-0">
            Ingeniero Informático especializado en desarrollo de software Full Stack y aplicaciones móviles nativas.
          </p>
          <div className="flex justify-center md:justify-start">
            <Code2
              className="text-portfolio-secondary animate-pulse"
              size={28}
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-base font-extrabold text-portfolio-text uppercase tracking-widest font-mono">
            Enlaces rápidos
          </h4>
          <ul className="grid grid-cols-2 gap-3 sm:block sm:space-y-3 font-semibold text-sm">
            <li>
              <a
                href="#about"
                className="text-portfolio-neutral hover:text-portfolio-primary transition-colors duration-200"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-portfolio-neutral hover:text-portfolio-primary transition-colors duration-200"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-portfolio-neutral hover:text-portfolio-primary transition-colors duration-200"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-portfolio-neutral hover:text-portfolio-primary transition-colors duration-200"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Social channels */}
        <div className="space-y-4 md:text-right">
          <h4 className="text-base font-extrabold text-portfolio-text uppercase tracking-widest font-mono">
            Sociales
          </h4>
          <div className="flex justify-center md:justify-end gap-3 pt-2">
            <Button
              size="icon"
              variant="outline"
              className="rounded-xl border-border hover:bg-portfolio-primary/5 hover:text-portfolio-primary hover:border-portfolio-primary/30 transition-all duration-300 hover:scale-110"
              asChild
              aria-label="GitHub de Cristobal"
            >
              <a href="https://github.com/Cristobalsda" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
              </a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-xl border-border hover:bg-portfolio-primary/5 hover:text-portfolio-primary hover:border-portfolio-primary/30 transition-all duration-300 hover:scale-110"
              asChild
              aria-label="LinkedIn de Cristobal"
            >
              <a href="https://linkedin.com/in/cristobal-pereira-843901185" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-xl border-border hover:bg-portfolio-secondary/5 hover:text-portfolio-secondary hover:border-portfolio-secondary/30 transition-all duration-300 hover:scale-110"
              asChild
              aria-label="Correo de Cristobal"
            >
              <a href="mailto:cristobal.pereira07@gmail.com">
                <Mail size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Copywrite Section */}
      <div className="border-t border-border/40 pt-8 mt-8 text-center text-xs sm:text-sm text-portfolio-neutral space-y-2">
        <p>
          &copy; {new Date().getFullYear()} Cristobal Pereira. Todos los derechos reservados.
        </p>
        <p className="inline-flex items-center gap-1.5 text-portfolio-secondary text-[11px] font-bold tracking-wide">
          <span>✨</span> Diseñado con arquitectura limpia y tecnología de vanguardia <span>✨</span>
        </p>
      </div>
    </div>
  );
}
