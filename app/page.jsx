import { fetcher } from "@/utils/fetcher";

import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ArtistsSection } from "@/components/home/ArtistsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { SupportSection } from "@/components/home/SupportSection";

export default async function Home() {
  const allArtists =
    (await fetcher("/sipa-documentacao/v1/publico/site/artistas/home", {
      next: { revalidate: 60 },
    })) || [];

  const artists = allArtists.filter(
    (a) => a?.ativo === "S" && a?.mostrarNaHome === "S"
  );

  return (
    <div className="space-y-16 pb-16 overflow-hidden">
      <section>
        <HeroSection />
        <FeaturesSection />
      </section>
      <ArtistsSection artists={artists} />
      <NewsSection />
      <SupportSection />
    </div>
  );
}
