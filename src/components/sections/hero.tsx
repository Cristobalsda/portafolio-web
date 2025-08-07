"use client";

import { Download, Eye, Rocket, Star } from "lucide-react";
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
  }, [currentText, currentIndex, titles]);
  return (
    <>
      <AnimatedBackground />
      <GeometricShapes />

      <div className="container mx text-center relative z-20">
        <div className="animate-fadeIn">
          <div className="absolute inset-0  ">
            <GlowingOrb
              className="absolute -top-32 -left-32 opacity-30"
              size="w-96 h-96"
            />
            <GlowingOrb
              className="absolute -bottom-32 -right-32 opacity-20"
              size="w-80 h-80"
            />
          </div>

          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-portfolio-text via-portfolio-primary to-portfolio-secondary bg-clip-text text-transparent mb-4 animate-glow">
              Cristobal Pereira
            </h1>
            <div className="h-20 mb-6">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-portfolio-primary to-portfolio-secondary bg-clip-text text-transparent">
                {currentText}
                <span className="animate-pulse text-portfolio-primary">|</span>
              </p>
            </div>
          </div>

          <CreativeCard className="max-w-3xl mx-auto mb-8 backdrop-blur-xl">
            <p className="text-xl text-portfolio-text font-medium">
              🚀 Desarrollo soluciones digitales escalables y funcionales que
              <span className="text-portfolio-primary font-bold">
                {" "}
                transforman ideas
              </span>{" "}
              en
              <span className="text-portfolio-secondary font-bold">
                {" "}
                realidades tecnológicas
              </span>
            </p>
          </CreativeCard>

          <div className="flex flex-col sm:flex-row gap-6 justify-center relative">
            <Button
              className="bg-gradient-to-r from-portfolio-primary to-blue-600 hover:from-blue-600 hover:to-portfolio-primary text-white px-10 py-4 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl animate-glow group"
              size="lg"
              asChild
            >
              <a href="/cv.pdf" download>
                <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Descargar CV
                <Rocket className="ml-3 h-6 w-6 group-hover:animate-bounce" />
              </a>
            </Button>
            <Button
              className="bg-gradient-to-r from-portfolio-secondary to-green-500 hover:from-green-500 hover:to-portfolio-secondary text-white px-10 py-4 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl group"
              size="lg"
              asChild
            >
              <a href="#projects">
                <Eye className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                Ver Proyectos
                <Star className="ml-3 h-6 w-6 group-hover:animate-spin" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-8 h-14 border-3 border-portfolio-primary rounded-full flex justify-center relative overflow-hidden">
          <div className="w-2 h-6 bg-gradient-to-b from-portfolio-primary to-portfolio-secondary rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </>
  );
}
