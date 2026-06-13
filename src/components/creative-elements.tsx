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

function generateParticles(): Particle[] {
  const result: Particle[] = [];
  for (let i = 0; i < 18; i++) {
    result.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 10 + Math.random() * 20,
      size: 2 + Math.random() * 4,
    });
  }
  return result;
}

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(generateParticles());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-40"
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
      <div className="absolute top-20 left-10 w-32 h-32 border border-portfolio-primary/10 rotate-45"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border border-portfolio-secondary/10 rounded-full"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-secondary/5 rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 border border-portfolio-secondary/10 rounded-full"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-portfolio-primary/10 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-52 h-52 bg-gradient-to-tl from-portfolio-secondary/10 to-transparent rounded-full blur-xl"></div>
    </div>
  );
};

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>

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
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-full opacity-15 blur-xl"></div>
      <div className="absolute inset-4 bg-gradient-to-tl from-portfolio-secondary to-portfolio-primary rounded-full opacity-20 blur-lg"></div>
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
      className={`glassmorphism rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 ${className}`}
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
      className="group transform transition-all duration-300 md:hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="glassmorphism rounded-2xl p-4 sm:p-5 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-portfolio-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/5 to-portfolio-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 flex flex-col items-center">
          <Icon
            className={`text-4xl sm:text-5xl mb-3 ${color}`}
          />
          <div
            className={`${color} text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm`}
          >
            {name}
          </div>
        </div>

        <div className="absolute inset-0 border border-portfolio-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};
