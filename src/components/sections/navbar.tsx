"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X, Award, Briefcase, Code, FolderGit2, Mail, User } from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
  { label: "Sobre mí", href: "#about", icon: User },
  { label: "Logros", href: "#achievements", icon: Award },
  { label: "Habilidades", href: "#skills", icon: Code },
  { label: "Experiencia", href: "#experience", icon: Briefcase },
  { label: "Proyectos", href: "#projects", icon: FolderGit2 },
  { label: "Contacto", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Evitar problemas de hidratación en Next.js
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 sm:py-4 backdrop-blur-md"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="h-10 w-10 rounded-xl bg-gradient-to-tr from-portfolio-primary to-portfolio-secondary flex items-center justify-center text-white font-black text-xl shadow-lg transition-transform duration-300 group-hover:scale-110">
            CP
          </span>
          <span className="hidden sm:inline-block font-extrabold text-xl tracking-tight bg-gradient-to-r from-portfolio-text to-portfolio-primary bg-clip-text text-transparent group-hover:to-portfolio-secondary transition-colors duration-300">
            Cristobal Pereira
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-portfolio-neutral hover:text-portfolio-primary hover:bg-portfolio-primary/5 transition-all duration-200"
              >
                <Icon size={16} />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions (Theme toggle + Mobile menu toggle) */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-xl hover:bg-portfolio-primary/10 text-portfolio-text transition-all duration-300 relative overflow-hidden"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? (
              <Sun className="h-[1.2rem] w-[1.2rem] text-amber-400 rotate-0 scale-100 transition-all duration-300" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] text-indigo-600 rotate-0 scale-100 transition-all duration-300" />
            )}
          </Button>

          {/* Contact Button */}
          <Button
            className="hidden sm:flex bg-gradient-to-r from-portfolio-primary to-indigo-600 hover:from-indigo-600 hover:to-portfolio-primary text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-[1.03]"
            asChild
          >
            <a href="#contact-info">Contacto</a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-xl hover:bg-portfolio-primary/10 text-portfolio-text"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Modal/Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[64px] z-40 bg-background/90 backdrop-blur-xl md:hidden animate-fadeIn">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-2xl text-lg font-bold text-portfolio-text hover:text-portfolio-primary hover:bg-portfolio-primary/5 transition-all duration-200"
                >
                  <div className="h-10 w-10 rounded-xl bg-portfolio-primary/10 text-portfolio-primary flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  {item.label}
                </a>
              );
            })}
            <Button
              className="mt-4 w-full bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-white font-bold py-6 rounded-2xl text-base shadow-lg"
              asChild
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="#contact-info">Contáctame ahora</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
