"use client";

import { Download, Eye, Terminal as TerminalIcon, Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import {
  AnimatedBackground,
  GeometricShapes,
  GlowingOrb,
} from "../creative-elements";
import { useEffect, useState, useRef } from "react";
import { titles } from "@/data/titles";

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Terminal state
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [terminalInput, setTerminalInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);

  // Typist for the hero subheader
  useEffect(() => {
    const typeText = () => {
      const fullText = titles[currentIndex];
      if (currentText.length < fullText.length) {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      } else {
        setTimeout(() => {
          setCurrentText("");
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2200);
      }
    };

    const timer = setTimeout(typeText, 90);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex]);

  // Terminal animation simulation loop
  useEffect(() => {
    const terminalScript = [
      { type: "input", text: "cat cristobal.json" },
      {
        type: "output",
        text: JSON.stringify(
          {
            nombre: "Cristobal Pereira Vega",
            titulo: "Ingeniero Informático",
            especialidad: "Full Stack & Mobile",
            ubicacion: "Chile",
            experiencia: ["Web Apps", "Play Store Apps"],
          },
          null,
          2
        ),
      },
      { type: "input", text: "ping -c 2 googleplay" },
      { type: "output", text: "PING play.google.com: 56 data bytes\n64 bytes from 142.250.74.142: seq=0 time=14.2ms\n64 bytes from 142.250.74.142: seq=1 time=12.8ms\n--- googleplay ping statistics ---\n2 packets transmitted, 2 received, 0% loss\nstatus: ACTIVE_DEVELOPER" },
      { type: "input", text: "fetch -status projects" },
      { type: "output", text: "✔ 2 Apps Publicadas en Play Store\n✔ Integración WhatsApp Business API\n✔ Backend robusto en NestJS/Django\n✔ Frontend dinámico en Next.js" },
      { type: "clear", text: "" },
    ];

    let currentStep = 0;
    let charIndex = 0;
    let timer: NodeJS.Timeout;

    const runScript = () => {
      if (currentStep >= terminalScript.length) {
        currentStep = 0;
      }

      const step = terminalScript[currentStep];

      if (step.type === "clear") {
        setTerminalLines([]);
        setTerminalInput("");
        currentStep++;
        timer = setTimeout(runScript, 1000);
        return;
      }

      if (step.type === "input") {
        if (charIndex <= step.text.length) {
          setTerminalInput(step.text.slice(0, charIndex));
          charIndex++;
          timer = setTimeout(runScript, 80);
        } else {
          setTerminalLines((prev) => [...prev, `$ ${step.text}`]);
          setTerminalInput("");
          charIndex = 0;
          currentStep++;
          timer = setTimeout(runScript, 500);
        }
      } else if (step.type === "output") {
        setTerminalLines((prev) => [...prev, step.text]);
        currentStep++;
        timer = setTimeout(runScript, 1500);
      }
    };

    timer = setTimeout(runScript, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Auto scroll terminal to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines, terminalInput]);

  return (
    <>
      <AnimatedBackground />
      <GeometricShapes />

      <div className="container mx-auto max-w-7xl relative z-20 px-4">
        <div className="grid gap-10 xl:gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] lg:items-center">
          {/* Text Content - Left Column */}
          <div className="text-left space-y-6 animate-fadeIn lg:max-w-xl">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-portfolio-primary/10 border border-portfolio-primary/20 text-portfolio-primary text-xs sm:text-sm font-bold backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Disponible para proyectos y empleo
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gradient-primary">
                Cristobal Pereira Vega
              </h1>
              <div className="min-h-[50px] flex items-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-neon">
                  {currentText}
                  <span className="animate-pulse text-portfolio-primary ml-0.5">|</span>
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-portfolio-neutral max-w-xl leading-relaxed">
              Diseño y desarrollo de aplicaciones web y móviles de alto rendimiento. 
              Especialista en convertir ideas complejas en productos reales y escalables, 
              con <strong className="text-portfolio-text">aplicaciones en producción publicadas en Google Play.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-portfolio-primary to-indigo-600 hover:from-indigo-600 hover:to-portfolio-primary text-white font-extrabold px-8 py-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center gap-2 group relative overflow-hidden"
                size="lg"
                asChild
              >
                <a href="/Cristobal-Pereira-cv.pdf" download>
                  <Download className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  Descargar CV
                </a>
              </Button>
              
              <Button
                variant="outline"
                className="w-full sm:w-auto border-2 border-border hover:bg-portfolio-primary/5 hover:border-portfolio-primary text-portfolio-text font-bold px-8 py-6 rounded-2xl shadow-sm transition-all duration-300 transform hover:scale-[1.03] flex items-center justify-center gap-2"
                size="lg"
                asChild
              >
                <a href="#projects">
                  <Eye className="h-5 w-5 text-portfolio-primary" />
                  Ver Proyectos
                </a>
              </Button>
            </div>

            {/* Social quicklinks */}
            <div className="flex items-center gap-4 pt-4 text-portfolio-neutral">
              <span className="text-sm font-semibold uppercase tracking-wider">Conéctame:</span>
              <a 
                href="https://github.com/cristobalsda" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-portfolio-primary transition-colors duration-300"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://linkedin.com/in/cristobal-pereira-843901185" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-portfolio-primary transition-colors duration-300"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Interactive Terminal - Right Column */}
          <div className="relative flex items-center justify-center lg:justify-start">
            <GlowingOrb className="absolute -top-10 -right-10 opacity-40" size="w-72 h-72 sm:w-96 sm:h-96" />
            <GlowingOrb className="absolute -bottom-10 -left-10 opacity-30" size="w-56 h-56" />

            <div className="w-full max-w-2xl lg:max-w-none glass-card rounded-3xl overflow-hidden border border-white/10 dark:border-white/5 shadow-2xl relative z-10 card-3d-hover">
              {/* Window Controls */}
              <div className="bg-slate-900/60 dark:bg-slate-950/80 px-4 py-3.5 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="h-4 w-px bg-white/10 dark:bg-white/5 shrink-0"></span>
                  <div className="flex items-center gap-1.5 text-slate-300 text-xs sm:text-sm font-bold font-mono truncate max-w-[180px] sm:max-w-md">
                    <TerminalIcon size={14} className="text-slate-400 shrink-0" />
                    <span>bash - CristobalP</span>
                  </div>
                </div>
                <div className="text-[10px] font-mono text-slate-500 bg-slate-950/40 px-2 py-0.5 rounded border border-white/5 shrink-0">
                  tty
                </div>
              </div>

              {/* Terminal Screen */}
              <div 
                ref={terminalRef}
                className="p-4 sm:p-5 lg:p-6 h-[330px] lg:h-[360px] bg-slate-950/90 dark:bg-slate-950/95 font-mono text-[10px] sm:text-xs md:text-sm text-indigo-300 overflow-y-auto space-y-2 select-text text-left scrollbar-none"
              >
                <div className="text-slate-500 text-[10px] sm:text-xs border-b border-white/5 pb-2 mb-2">
                  Last login: {new Date().toLocaleDateString("es-CL")} on ttys001
                </div>

                {terminalLines.map((line, idx) => {
                  const isCommand = line.startsWith("$ ");
                  return (
                    <pre 
                      key={idx} 
                      className={`whitespace-pre-wrap leading-relaxed font-mono ${
                        isCommand && idx > 0 ? "mt-4 sm:mt-5 pt-2 border-t border-white/5" : ""
                      }`}
                    >
                      {isCommand ? (
                        <span>
                          <span className="text-emerald-400 font-bold">$</span>{" "}
                          <span className="text-slate-200">{line.slice(2)}</span>
                        </span>
                      ) : (
                        <span className="text-slate-300">{line}</span>
                      )}
                    </pre>
                  );
                })}

                {/* Active writing input */}
                {terminalInput && (
                  <div className={`flex items-center font-mono ${
                    terminalLines.length > 0 ? "mt-4 sm:mt-5 pt-2 border-t border-white/5" : ""
                  }`}>
                    <span className="text-emerald-400 font-bold mr-1.5">$</span>
                    <span className="text-slate-200">{terminalInput}</span>
                    <span className="w-2.5 h-4 bg-indigo-400 animate-pulse ml-0.5"></span>
                  </div>
                )}

                {/* Idle cursor */}
                {!terminalInput && (
                  <div className={`flex items-center font-mono ${
                    terminalLines.length > 0 ? "mt-4 sm:mt-5 pt-2 border-t border-white/5" : ""
                  }`}>
                    <span className="text-emerald-400 font-bold mr-1.5">$</span>
                    <span className="w-2.5 h-4 bg-indigo-400 animate-pulse"></span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce-slow hidden md:block">
        <a href="#about" className="flex flex-col items-center gap-2 group" aria-label="Ir a sobre mí">
          <span className="text-[10px] uppercase font-bold tracking-widest text-portfolio-neutral group-hover:text-portfolio-primary transition-colors duration-300">
            Explora más
          </span>
          <div className="w-7 h-11 border-2 border-border/80 rounded-full flex justify-center relative overflow-hidden group-hover:border-portfolio-primary transition-colors duration-300">
            <div className="w-1.5 h-3 bg-portfolio-primary rounded-full mt-1.5 animate-float"></div>
          </div>
        </a>
      </div>
    </>
  );
}
