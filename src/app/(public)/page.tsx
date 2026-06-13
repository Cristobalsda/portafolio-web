import { FloatingParticles } from "@/components/creative-elements";
import Footer from "@/components/sections/footer";
import AboutMe from "@/components/sections/about-me";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";

export default function Portfolio() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />

      <section className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-20 relative">
        <Hero />
      </section>

      <section id="about" className="py-14 px-4 sm:py-20 relative">
        <AboutMe />
      </section>

      <section id="skills" className="py-14 px-4 sm:py-20 relative">
        <Skills />
      </section>

      <section id="experience" className="py-14 px-4 sm:py-20 relative">
        <Experience />
      </section>
      <section id="projects" className="py-14 px-4 sm:py-20 relative">
        <Projects />
      </section>

      <section id="contact" className="py-14 px-4 sm:py-20 relative">
        <Contact />
      </section>
      <footer className="relative py-12 px-4 sm:py-16 overflow-hidden">
        <Footer />
      </footer>
    </div>
  );
}
