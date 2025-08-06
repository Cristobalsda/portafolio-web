import { Calendar, Database, Globe, Server } from "lucide-react";
import { CreativeCard, GeometricShapes } from "../creative-elements";

export default function Experience() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-green-50"></div>
      <GeometricShapes />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-transparent mb-4">
            Experiencia Profesional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-portfolio-primary to-portfolio-secondary rounded-full"></div>

          <div className="space-y-12">
            <div className="flex items-center justify-center">
              <CreativeCard className="w-full max-w-lg backdrop-blur-xl border-l-4 border-portfolio-primary">
                <div className="flex items-center mb-6">
                  <div className="glassmorphism-dark rounded-full p-3 mr-4">
                    <Calendar
                      className="text-portfolio-primary animate-pulse"
                      size={24}
                    />
                  </div>
                  <span className="text-portfolio-neutral font-bold text-lg">
                    2025
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-portfolio-text mb-2">
                  Práctica Profesional
                </h3>
                <p className="text-portfolio-primary font-bold text-lg mb-4">
                  Trawun Speed Spa
                </p>

                <div className="space-y-3">
                  <div className="flex items-start glassmorphism rounded-lg p-3">
                    <Server
                      className="mr-3 mt-1 text-portfolio-secondary animate-pulse"
                      size={20}
                    />
                    <span className="text-portfolio-text">
                      Desarrollo de APIs robustas en NestJS
                    </span>
                  </div>
                  <div className="flex items-start glassmorphism rounded-lg p-3">
                    <Globe
                      className="mr-3 mt-1 text-portfolio-secondary animate-pulse"
                      size={20}
                    />
                    <span className="text-portfolio-text">
                      Integración frontend moderna con Next.js
                    </span>
                  </div>
                  <div className="flex items-start glassmorphism rounded-lg p-3">
                    <Database
                      className="mr-3 mt-1 text-portfolio-secondary animate-pulse"
                      size={20}
                    />
                    <span className="text-portfolio-text">
                      Diseño y optimización de bases de datos
                    </span>
                  </div>
                </div>
              </CreativeCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
