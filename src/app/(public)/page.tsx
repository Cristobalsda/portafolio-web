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

      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <Hero />
      </section>

      <section id="about" className="py-20 px-4 relative">
        <AboutMe />
      </section>

      <section id="skills" className="py-20 px-4 relative">
        <Skills />
      </section>

      <section id="experience" className="py-20 px-4 relative">
        <Experience />
      </section>
      <section id="projects" className="py-20 px-4 relative">
        <Projects />
      </section>

      <section id="contact" className="py-20 px-4 relative">
        <Contact />
      </section>
      <footer className="relative py-16 px-4 overflow-hidden">
        <Footer />
      </footer>
    </div>
  );
}
