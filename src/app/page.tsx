import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import Stats from "@/components/Stats";
import InquiryCTA from "@/components/InquiryCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureCards />
      <Stats />
      <InquiryCTA />
    </main>
  );
}
