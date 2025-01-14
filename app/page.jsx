import { HeroSection } from "@/components/home1/HeroSection";
import { FeaturesSection } from "@/components/home1/FeaturesSection";
import { ArtistsSection } from "@/components/home1/ArtistsSection";
import { NewsSection } from "@/components/home1/NewsSection";
import { SupportSection } from "@/components/home1/SupportSection";
import { SignupSection } from "@/components/home1/SignupSection";
import { ContactSection } from "@/components/home1/ContactSection";

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
