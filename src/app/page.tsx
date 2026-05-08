import Hero from "@/components/Hero";
import WhereUsed from "@/components/WhereUsed";
import FeatureCards from "@/components/FeatureCards";
import RecentProjects from "@/components/RecentProjects";
import InquiryCTA from "@/components/InquiryCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhereUsed />
      <FeatureCards />
      <RecentProjects />
      <InquiryCTA />
    </main>
  );
}
