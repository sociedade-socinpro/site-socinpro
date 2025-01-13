import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ArtistsSection } from "@/components/home/ArtistsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { SupportSection } from "@/components/home/SupportSection";

export default function Home() {
  return (
    <div className="space-y-16 pb-16 overflow-hidden">
      <section>
        <HeroSection />
        <FeaturesSection />
      </section>
      <ArtistsSection />
      <NewsSection />
      <SupportSection />
    </div>
  );
}
