import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import RecentProjects from "@/components/RecentProjects";
import InquiryCTA from "@/components/InquiryCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <RecentProjects />
      <InquiryCTA />
    </main>
  );
}
