"use client";

import {
  Calendar,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Star,
} from "lucide-react";
import { CreativeCard, GeometricShapes } from "../creative-elements";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-green-50"></div>
      <GeometricShapes />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-transparent mb-4">
            Contacto Profesional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-portfolio-neutral">
            Estoy disponible para nuevas oportunidades laborales
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <CreativeCard className="backdrop-blur-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-transparent mb-6">
                Información de Contacto
              </h3>
              <p className="text-portfolio-neutral text-lg">
                Soy Ingeniero Informático con experiencia en desarrollo Full
                Stack, buscando activamente oportunidades para contribuir en
                equipos de desarrollo innovadores.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="glassmorphism-dark rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Mail className="text-portfolio-primary" size={28} />
                </div>
                <h4 className="font-semibold text-portfolio-text mb-2">
                  Email Profesional
                </h4>
                <p className="text-portfolio-neutral">
                  cristobal.pereira@gmail.com
                </p>
              </div>

              <div className="text-center">
                <div className="glassmorphism-dark rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="text-portfolio-primary" size={28} />
                </div>
                <h4 className="font-semibold text-portfolio-text mb-2">
                  Ubicación
                </h4>
                <p className="text-portfolio-neutral">Chile</p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-portfolio-text mb-6">
                Redes Profesionales
              </h4>
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com/cristobalsda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glassmorphism hover:bg-portfolio-primary hover:text-white transition-all duration-300 card-3d p-4 rounded-xl group"
                >
                  <Github size={32} />
                  <p className="text-sm mt-2 group-hover:text-white">GitHub</p>
                </a>
                <a
                  href="https://linkedin.com/in/cristobal-pereira-843901185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glassmorphism hover:bg-portfolio-primary hover:text-white transition-all duration-300 card-3d p-4 rounded-xl group"
                >
                  <Linkedin size={32} />
                  <p className="text-sm mt-2 group-hover:text-white">
                    LinkedIn
                  </p>
                </a>
                <a
                  href="mailto:cristobal.pereira07@gmail.com"
                  className="glassmorphism hover:bg-portfolio-secondary hover:text-white transition-all duration-300 card-3d p-4 rounded-xl group"
                >
                  <Mail size={32} />
                  <p className="text-sm mt-2 group-hover:text-white">Email</p>
                </a>
              </div>
            </div>
          </CreativeCard>
        </div>
      </div>
    </>
  );
}
