"use client";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 10 + Math.random() * 20,
        size: 2 + Math.random() * 4,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `linear-gradient(45deg, #0A84FF, #00C897)`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            animation: `particleFloat ${particle.duration}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
};

export const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Rotating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-portfolio-primary/20 rotate-45 animate-rotate-slow"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border-2 border-portfolio-secondary/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-portfolio-primary/10 to-portfolio-secondary/10 rotate-12 animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-portfolio-primary/15 rotate-45 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 border-2 border-portfolio-secondary/15 rounded-full animate-pulse-slow"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-portfolio-primary/10 to-transparent rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-52 h-52 bg-gradient-to-tl from-portfolio-secondary/10 to-transparent rounded-full blur-xl animate-bounce-slow"></div>
    </div>
  );
};

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 animate-gradient"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern"></div>

      {/* Dots pattern overlay */}
      <div className="absolute inset-0 dots-pattern"></div>

      {/* Geometric background */}
      <div className="absolute inset-0 geometric-bg"></div>
    </div>
  );
};

export const GlowingOrb = ({
  className = "",
  size = "w-64 h-64",
}: {
  className?: string;
  size?: string;
}) => {
  return (
    <div className={`${size} ${className} relative`}>
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-full animate-glow opacity-20 blur-xl"></div>
      <div className="absolute inset-4 bg-gradient-to-tl from-portfolio-secondary to-portfolio-primary rounded-full animate-pulse-slow opacity-30 blur-lg"></div>
    </div>
  );
};

export const CreativeCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`glassmorphism rounded-2xl p-6 card-3d hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
};

export const TechIcon = ({
  icon: Icon,
  name,
  color,
  index = 0,
}: {
  icon: IconType; // O React.ElementType
  name: string;
  color: string;
  index?: number;
}) => {
  return (
    <div
      className="group cursor-pointer transform transition-all duration-500 hover:scale-125 hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="glassmorphism rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-portfolio-primary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 flex flex-col items-center">
          <Icon
            className={`text-5xl mb-3 ${color} group-hover:animate-bounce-slow`}
          />
          <div
            className={`${color} text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm`}
          >
            {name}
          </div>
        </div>

        <div className="absolute inset-0 border-2 border-portfolio-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
      </div>
    </div>
  );
};
