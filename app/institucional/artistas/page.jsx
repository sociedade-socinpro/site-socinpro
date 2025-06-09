import Head from "next/head";
import Image from "next/image";

import { fetcher } from "@/utils/fetcher";

import { SupportSection } from "@/components/shared/SupportSection";

export const metadata = {
  title: "Artistas – SOCINPRO",
  description: "Conheça alguns dos artistas que confiam na SOCINPRO.",
};

export default async function Page() {
  const allArtists =
    (await fetcher("/sipa-documentacao/v1/site/publico/artistas/ativos", {
      next: { revalidate: 60 },
    })) || [];
  const artists = allArtists.filter((a) => a.ativo === "S");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: artists.map((art, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: art.titulo,
      image: art.imgUrl || "",
    })),
  };

  return (
    <div className="py-12 space-y-24">
      <Head>
        <script
          key="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <section className="uppercase font-bold text-center px-[6%] md:px-[14%]">
        <h2 className="text-xs md:text-base text-teal opacity-0 animate-fade-in">
          Conheça quem confia em nós
        </h2>
        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 mt-4 opacity-0 animate-fade-in delay-400"
          style={{ animationDelay: "400ms" }}
        >
          Trabalhamos com artistas renomados e emergentes, sempre valorizando a
          autenticidade de cada obra.
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto gap-6 mt-10">
          {artists.map((art, i) => (
            <li
              key={art.id}
              className="hover:scale-[101%] transition-transform"
            >
              <figure
                className="relative rounded-lg overflow-hidden opacity-0 animate-slide-up h-[450px]"
                style={{ animationDelay: `${i * 200 + 1000}ms` }}
              >
                <Image
                  src={art.imgUrl}
                  alt={art.titulo}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)",
                  }}
                />
                <figcaption
                  className="absolute bottom-2 left-4 text-white opacity-0 animate-fade-in"
                  style={{ animationDelay: `${i * 200 + 1400}ms` }}
                >
                  {art.titulo}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      <SupportSection />
    </div>
  );
}
