import { Code, Github, Linkedin, Mail } from "lucide-react";
import { FloatingParticles } from "../creative-elements";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-text via-gray-900 to-black"></div>
      <FloatingParticles />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-portfolio-primary bg-clip-text text-transparent mb-4">
              Cristobal Pereira
            </h3>
            <p className="text-gray-300 text-lg">
              Ingeniero Informático especializado en desarrollo Full Stack
            </p>
            <div className="flex justify-center md:justify-start mt-4">
              <Code
                className="text-portfolio-secondary animate-pulse"
                size={32}
              />
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-6">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-portfolio-primary transition-colors duration-300 text-lg"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-portfolio-primary transition-colors duration-300 text-lg"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-portfolio-primary transition-colors duration-300 text-lg"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-portfolio-primary transition-colors duration-300 text-lg"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold text-white mb-6">Sígueme</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <Button
                size="icon"
                className="glassmorphism-dark hover:bg-portfolio-primary hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/Cristobalsda">
                  <Github size={24} />
                </a>
              </Button>
              <Button
                size="icon"
                className="glassmorphism-dark hover:bg-portfolio-primary hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com/in/cristobal-pereira-843901185">
                  <Linkedin size={24} />
                </a>
              </Button>
              <Button
                size="icon"
                className="glassmorphism-dark hover:bg-portfolio-secondary hover:scale-110 transition-all duration-300"
                asChild
              >
                <a href="mailto:cristobal.pereira07@gmail.com">
                  <Mail size={24} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-4">
              &copy; 2025 Cristobal Pereira. Todos los derechos reservados.
            </p>
            <p className="text-portfolio-secondary text-sm">
              ✨ Diseñado con pasión y tecnología moderna ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
