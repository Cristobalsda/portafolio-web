import { Code, Heart, Rocket, Star, Zap } from "lucide-react";
import {
  CreativeCard,
  GeometricShapes,
  GlowingOrb,
} from "../creative-elements";

export default function AboutMe() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-green-50"></div>
      <GeometricShapes />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-transparent mb-4">
            Sobre mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <CreativeCard className="backdrop-blur-xl">
            <div className="space-y-6">
              <p className="text-lg text-portfolio-text leading-relaxed">
                Soy{" "}
                <span className="text-portfolio-primary font-bold">
                  Ingeniero Informático
                </span>{" "}
                titulado en INACAP, con experiencia en desarrollo Full Stack
                usando tecnologías modernas. Me apasiona crear
                <span className="text-portfolio-secondary font-bold">
                  {" "}
                  soluciones prácticas y bien diseñadas
                </span>{" "}
                que generen un impacto real en los usuarios.
              </p>
              <p className="text-lg text-portfolio-text leading-relaxed">
                Mi enfoque se centra en la{" "}
                <span className="text-portfolio-primary font-semibold">
                  calidad del código
                </span>
                , la{" "}
                <span className="text-portfolio-secondary font-semibold">
                  experiencia del usuario
                </span>{" "}
                y la{" "}
                <span className="text-portfolio-primary font-semibold">
                  escalabilidad
                </span>{" "}
                de las aplicaciones que desarrollo.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Heart className="text-red-500 animate-pulse" size={20} />
                  <span className="text-portfolio-neutral">
                    Apasionado por la tecnología
                  </span>
                </div>
              </div>
            </div>
          </CreativeCard>

          <div className="flex justify-center relative">
            <GlowingOrb className="absolute inset-0" size="w-96 h-96" />
            <div className="relative z-10 w-80 h-80 glassmorphism rounded-3xl flex items-center justify-center card-3d">
              <div className="text-center">
                <Code
                  size={120}
                  className="text-portfolio-primary mb-4 animate-float"
                />
                <div className="flex justify-center gap-4">
                  <Zap
                    className="text-portfolio-secondary animate-pulse"
                    size={30}
                  />
                  <Rocket
                    className="text-portfolio-primary animate-bounce-slow"
                    size={30}
                  />
                  <Star
                    className="text-portfolio-secondary animate-pulse"
                    size={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
