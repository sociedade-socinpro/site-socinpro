import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ArtistsSection } from "@/components/home/ArtistsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { SupportSection } from "@/components/home/SupportSection";
import { SignupSection } from "@/components/home/SignupSection";
import { ContactSection } from "@/components/home/ContactSection";

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
      <section className="flex flex-col justify-center lg:flex-row bg-neutral-100 py-16 gap-12 lg:gap-20 px-[8%] xl:px-[20%]">
        <div className="flex-1 lg:max-w-xl">
          <SignupSection />
        </div>
        <div className="flex-1 lg:max-w-xl">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
