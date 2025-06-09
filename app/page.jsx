import { fetcher } from "@/utils/fetcher";

import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ArtistsSection } from "@/components/home/ArtistsSection";
import { NewsSection } from "@/components/shared/NewsSection";
import { SupportSection } from "@/components/shared/SupportSection";

export default async function Home() {
  const allArtists =
    (await fetcher("/sipa-documentacao/v1/site/publico/artistas/home", {
      next: { revalidate: 60 },
    })) || [];

  const allBanners =
    (await fetcher("/sipa-documentacao/v1/site/publico/banners/home", {
      next: { revalidate: 60 },
    })) || [];

  const artists = allArtists.filter(
    (a) => a?.ativo === "S" && a?.mostrarNaHome === "S"
  );

  const banners = allBanners.filter((b) => b?.ativo === "S");

  return (
    <div className="space-y-16 pb-16 overflow-hidden">
      <section>
        <HeroSection banners={banners} />
        <FeaturesSection />
      </section>
      <ArtistsSection artists={artists} />
      <NewsSection />
      <SupportSection />
    </div>
  );
}
