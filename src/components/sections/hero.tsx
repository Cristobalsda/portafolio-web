"use client";

import { Download, Eye } from "lucide-react";
import { Button } from "../ui/button";
import {
  AnimatedBackground,
  CreativeCard,
  GeometricShapes,
  GlowingOrb,
} from "../creative-elements";
import { useEffect, useState } from "react";
import { titles } from "@/data/titles";

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typeText = () => {
      const fullText = titles[currentIndex];
      if (currentText.length < fullText.length) {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    };

    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex]);
  return (
    <>
      <AnimatedBackground />
      <GeometricShapes />

      <div className="container mx-auto max-w-6xl text-center relative z-20">
        <div className="animate-fadeIn">
          <div className="absolute inset-0  ">
            <GlowingOrb
              className="absolute -top-24 -left-24 opacity-30 sm:-top-32 sm:-left-32"
              size="w-64 h-64 sm:w-96 sm:h-96"
            />
            <GlowingOrb
              className="absolute -bottom-24 -right-24 opacity-20 sm:-bottom-32 sm:-right-32"
              size="w-56 h-56 sm:w-80 sm:h-80"
            />
          </div>

          <div className="relative">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-portfolio-text via-portfolio-primary to-portfolio-secondary bg-clip-text text-transparent mb-4">
              Cristobal Pereira
            </h1>
            <div className="min-h-20 mb-6 px-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-portfolio-primary to-portfolio-secondary bg-clip-text text-transparent">
                {currentText}
                <span className="animate-pulse text-portfolio-primary">|</span>
              </p>
            </div>
          </div>

          <CreativeCard className="max-w-3xl mx-auto mb-8 backdrop-blur-xl">
            <p className="text-base sm:text-lg md:text-xl text-portfolio-text font-medium leading-relaxed">
              Creo aplicaciones web y móviles que
              <span className="text-portfolio-primary font-bold">
                {" "}
                transforman ideas
              </span>{" "}
              en productos reales,
              <span className="text-portfolio-secondary font-bold">
                {" "}
                incluyendo apps publicadas en Play Store
              </span>
            </p>
          </CreativeCard>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center relative">
            <Button
              className="w-full sm:w-auto bg-portfolio-primary hover:bg-blue-600 text-white px-6 sm:px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              size="lg"
              asChild
            >
              <a href="/Cristobal-Pereira-cv.pdf" download>
                <Download className="mr-3 h-6 w-6" />
                Descargar CV
              </a>
            </Button>
            <Button
              className="w-full sm:w-auto bg-portfolio-secondary hover:bg-green-500 text-white px-6 sm:px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              size="lg"
              asChild
            >
              <a href="#projects">
                <Eye className="mr-3 h-6 w-6" />
                Ver Proyectos
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform animate-bounce-slow sm:block">
        <div className="w-8 h-14 border-3 border-portfolio-primary rounded-full flex justify-center relative overflow-hidden">
          <div className="w-2 h-6 bg-gradient-to-b from-portfolio-primary to-portfolio-secondary rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </>
  );
}
