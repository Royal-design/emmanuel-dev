import { AboutMe } from "@/components/aboutMe";
import { Contact } from "@/components/Contact";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Home } from "@/components/home";
import { Layout } from "@/components/Layout";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import ScrollToTop from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";

export default function LandingPage() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}
