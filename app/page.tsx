import { AboutMe } from "@/components/aboutMe";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Home } from "@/components/home";
import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import ScrollToTop from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="bg-secondary py-24" id="about">
        <Layout className="flex flex-col md:flex-row gap-8 md:gap-12">
          <AboutMe />
          <Services />
        </Layout>
      </div>
      <Skills />
      <Resume />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
