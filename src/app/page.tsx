import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import ProjectsGallery from "@/components/ProjectsGallery";
import Stats from "@/components/Stats";
import BrandLogos from "@/components/BrandLogos";
import WorkCases from "@/components/WorkCases";
import InquiryCTA from "@/components/InquiryCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <ProjectsGallery />
      <Stats />
      <BrandLogos />
      <WorkCases />
      <InquiryCTA />
    </main>
  );
}
