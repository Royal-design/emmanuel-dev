import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import { Skills } from "@/components/Skills";

export default function LandingPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[9999] rounded-full bg-accent px-5 py-2 font-mono text-xs text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <div className="grain-overlay" aria-hidden="true" />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
