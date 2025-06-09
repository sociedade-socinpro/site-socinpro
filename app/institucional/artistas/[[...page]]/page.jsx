import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { fetcher } from "@/utils/fetcher";

import { Button } from "@/components/ui/button";
import { SupportSection } from "@/components/shared/SupportSection";

export async function generateMetadata(props) {
  const { page } = await props.params;
  const pageNum = page?.[0] ? Number(page[0]) : 0;

  return {
    title: `SOCINPRO – Artistas - Página ${pageNum + 1}`,
    description: "Conheça alguns dos artistas que confiam na SOCINPRO.",
    alternates: { canonical: `/institucional/artistas/${pageNum}` },
  };
}

export default async function Page(props) {
  const { page } = await props.params;
  const pageNum = page?.[0] ? Number(page[0]) : 0;
  const size = 9;

  const { content: artists = [], totalPages } = await fetcher(
    `/sipa-documentacao/v1/site/publico/artistas/ativos?size=${size}&page=${pageNum}`
  );

  return (
    <>
      <Head>
        {pageNum > 0 && (
          <link rel="prev" href={`/institucional/artistas/${pageNum - 1}`} />
        )}
        {pageNum < totalPages - 1 && (
          <link rel="next" href={`/institucional/artistas/${pageNum + 1}`} />
        )}
      </Head>
      <div className="py-12 space-y-24">
        <section className="uppercase font-bold text-center px-[6%] md:px-[14%]">
          <h2 className="text-xs md:text-base text-teal opacity-0 animate-fade-in">
            Conheça quem confia em nós
          </h2>
          <h1
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 mt-4 opacity-0 animate-fade-in delay-400"
            style={{ animationDelay: "400ms" }}
          >
            Trabalhamos com artistas renomados e emergentes, sempre valorizando
            a autenticidade de cada obra.
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto gap-6 mt-10">
            {artists.map((art, i) => (
              <li
                key={art.id}
                className="hover:scale-[101%] transition-transform"
              >
                <figure
                  className="relative rounded-lg overflow-hidden opacity-0 animate-slide-up h-[450px]"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  {art.imgUrl && (
                    <Image
                      src={art.imgUrl}
                      alt={art.titulo}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)",
                    }}
                  />
                  <figcaption
                    className="absolute bottom-2 left-4 text-white opacity-0 animate-fade-in"
                    style={{ animationDelay: `${i * 200 + 400}ms` }}
                  >
                    {art.titulo}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <nav
            aria-label="Paginação de artistas"
            className="flex justify-center gap-4 mt-8"
          >
            {pageNum > 0 && (
              <Button asChild>
                <Link
                  href={`/institucional/artistas/${pageNum - 1}`}
                  rel="prev"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Anterior</span>
                </Link>
              </Button>
            )}
            {pageNum < totalPages - 1 && (
              <Button asChild>
                <Link
                  href={`/institucional/artistas/${pageNum + 1}`}
                  rel="next"
                >
                  <span>Próximo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            )}
            <span className="sr-only">
              Página {pageNum + 1} de {totalPages}
            </span>
          </nav>
        </section>
        <SupportSection />
      </div>
    </>
  );
}
