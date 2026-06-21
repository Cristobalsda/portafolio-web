import { FloatingParticles } from "@/components/creative-elements";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import AboutMe from "@/components/sections/about-me";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Achievements from "@/components/sections/achievements";

export default function Portfolio() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background text-foreground transition-colors duration-500">
      <Navbar />
      <FloatingParticles />

      <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 sm:py-20 relative overflow-hidden">
        <Hero />
      </section>

      <section id="about" className="py-20 px-4 relative overflow-hidden">
        <AboutMe />
      </section>

      <section id="achievements" className="py-20 px-4 relative overflow-hidden">
        <Achievements />
      </section>

      <section id="skills" className="py-20 px-4 relative overflow-hidden">
        <Skills />
      </section>

      <section id="experience" className="py-20 px-4 relative overflow-hidden">
        <Experience />
      </section>

      <section id="projects" className="py-20 px-4 relative overflow-hidden">
        <Projects />
      </section>

      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <Contact />
      </section>

      <footer className="relative py-16 px-4 overflow-hidden border-t border-border bg-card/30">
        <Footer />
      </footer>
    </div>
  );
}
