import { HeroSection } from "@/components/Home/HeroSection";
import { FeaturesSection } from "@/components/Home/FeaturesSection";
import { ArtistsSection } from "@/components/Home/ArtistsSection";
import { NewsSection } from "@/components/Home/NewsSection";
import { SupportSection } from "@/components/Home/SupportSection";

export default function Home() {
  return (
    <div className="space-y-16 overflow-hidden">
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
