"use client";

import { Github, Linkedin, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { CreativeCard, GeometricShapes, GlowingOrb } from "../creative-elements";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <>
      <GeometricShapes />

      <div className="container mx-auto max-w-5xl relative z-10 px-4">
        <div className="max-w-3xl mx-auto relative">


          <CreativeCard className="backdrop-blur-xl border border-white/10 dark:border-white/5 bg-white/20 dark:bg-card/25 shadow-2xl relative z-10">
            <div className="text-center mb-10">
              <h3 id="contact-info" className="scroll-mt-28 text-2xl font-extrabold text-portfolio-text mb-4">
                Información de Contacto
              </h3>
              <p className="text-portfolio-neutral text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Podés contactarme directamente por correo, LinkedIn o WhatsApp.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid gap-6 mb-12 sm:grid-cols-2">
              <div className="glass-card rounded-2xl p-5 flex flex-col items-center text-center border border-white/5 hover:border-portfolio-primary/30 transition-all duration-300">
                <div className="rounded-xl p-3.5 bg-portfolio-primary/10 text-portfolio-primary mb-4">
                  <Mail size={24} className="animate-pulse" />
                </div>
                <h4 className="font-bold text-portfolio-text text-sm sm:text-base mb-1">
                  Email
                </h4>
                <a
                  href="mailto:cristobal.pereira07@gmail.com"
                  className="text-sm text-portfolio-neutral hover:text-portfolio-primary transition-colors duration-300 font-mono"
                >
                  cristobal.pereira07@gmail.com
                </a>
              </div>

              <div className="glass-card rounded-2xl p-5 flex flex-col items-center text-center border border-white/5 hover:border-portfolio-secondary/30 transition-all duration-300">
                <div className="rounded-xl p-3.5 bg-portfolio-secondary/10 text-portfolio-secondary mb-4">
                  <MapPin size={24} className="animate-pulse" />
                </div>
                <h4 className="font-bold text-portfolio-text text-sm sm:text-base mb-1">
                  Ubicación
                </h4>
                <p className="text-sm text-portfolio-neutral">
                  Temuco, Araucanía — Chile
                </p>
              </div>
            </div>

            {/* Social channels */}
            <div className="text-center">
              <h4 className="text-lg font-extrabold text-portfolio-text mb-6">
                Canales de Comunicación
              </h4>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a
                  href="https://github.com/cristobalsda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:bg-portfolio-primary hover:text-white border border-white/5 hover:border-transparent transition-all duration-300 p-4 rounded-2xl flex flex-col items-center group w-28 text-portfolio-text"
                >
                  <Github size={28} className="transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-bold mt-2">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/cristobal-pereira-843901185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:bg-portfolio-primary hover:text-white border border-white/5 hover:border-transparent transition-all duration-300 p-4 rounded-2xl flex flex-col items-center group w-28 text-portfolio-text"
                >
                  <Linkedin size={28} className="transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-bold mt-2">LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/56930966952" // Assuming the number structure, or general fallback
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card hover:bg-emerald-500 hover:text-white border border-white/5 hover:border-transparent transition-all duration-300 p-4 rounded-2xl flex flex-col items-center group w-28 text-portfolio-text"
                >
                  <MessageSquare size={28} className="transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs font-bold mt-2">WhatsApp</span>
                </a>
              </div>

              {/* Direct Mail Call to Action */}
              <div className="mt-10">
                <Button
                  className="bg-gradient-to-r from-portfolio-primary to-indigo-600 hover:from-indigo-600 hover:to-portfolio-primary text-white font-extrabold px-8 py-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.03] group"
                  asChild
                >
                  <a href="mailto:cristobal.pereira07@gmail.com">
                    <Send className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    Enviar un correo directo
                  </a>
                </Button>
              </div>
            </div>
          </CreativeCard>
        </div>
      </div>
    </>
  );
}
