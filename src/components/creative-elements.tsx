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
  for (let i = 0; i < 22; i++) {
    result.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * -15, // Delay negativo para que empiecen ya distribuidos
      duration: 12 + Math.random() * 18,
      size: 2 + Math.random() * 3,
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
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-45 z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `linear-gradient(135deg, var(--color-portfolio-primary), var(--color-portfolio-secondary))`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            animation: `particleFloat ${particle.duration}s linear infinite`,
            boxShadow: `0 0 8px var(--color-portfolio-primary)`,
          }}
        />
      ))}
    </div>
  );
};

export const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Círculo orbitante grande */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-portfolio-primary/10 to-transparent blur-3xl animate-pulse-slow"></div>
      
      {/* Elemento secundario cian/verde en la derecha */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-bl from-portfolio-secondary/8 to-transparent blur-3xl animate-float"></div>

      {/* Formas flotantes abstractas */}
      <div className="absolute top-[15%] left-[8%] w-16 h-16 border border-portfolio-primary/10 rounded-2xl rotate-12 animate-float"></div>
      <div className="absolute top-[45%] right-[12%] w-20 h-20 border border-portfolio-secondary/15 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-[20%] left-[15%] w-24 h-24 border border-portfolio-primary/10 rounded-xl rotate-45 animate-float" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-background transition-colors duration-500">
      {/* Gradient mesh base */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-portfolio-primary/5"></div>
      
      {/* Dynamic blurred blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-portfolio-primary/5 rounded-full filter blur-[100px] dark:bg-portfolio-primary/3 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-portfolio-secondary/5 rounded-full filter blur-[120px] dark:bg-portfolio-secondary/2 animate-float"></div>

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 grid-mesh opacity-70"></div>

      {/* Dots Pattern Mesh Overlay */}
      <div className="absolute inset-0 dots-mesh opacity-55"></div>
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
    <div className={`${size} ${className} relative select-none pointer-events-none`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-primary/20 to-portfolio-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute inset-6 bg-gradient-to-bl from-portfolio-secondary/15 to-portfolio-primary/15 rounded-full blur-2xl animate-float"></div>
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
      className={`glass-card rounded-3xl p-5 sm:p-8 hover:shadow-2xl transition-all duration-300 neon-border-hover ${className}`}
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
  icon: IconType;
  name: string;
  color: string;
  index?: number;
}) => {
  return (
    <div
      className="group transform transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center border border-border/30 hover:border-portfolio-primary/30 relative overflow-hidden h-full">
        {/* Glow overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-primary/5 to-portfolio-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          <Icon
            className={`text-4xl sm:text-5xl mb-3 transition-transform duration-300 group-hover:scale-110 ${color}`}
          />
          <span className="text-xs sm:text-sm font-semibold text-portfolio-text/80 group-hover:text-portfolio-primary transition-colors duration-300">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};
