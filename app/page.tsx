import { AboutMe } from "@/components/aboutMe";
import { Home } from "@/components/home";
import { Layout } from "@/components/Layout";
import { Services } from "@/components/Services";

export default function LandingPage() {
  return (
    <div className="">
      <Home />
      <div className="bg-secondary py-20" id="about">
        <Layout className="flex flex-col md:flex-row gap-8 md:gap-12">
          <AboutMe />
          <Services />
        </Layout>
      </div>
    </div>
  );
}
