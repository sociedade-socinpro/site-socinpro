import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { fetcher } from "@/utils/fetcher";

import { PageHeader } from "@/components/shared/PageHeader";
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
      <PageHeader
        title="Conheça quem confia em nós"
        description={
          <>
            Trabalhamos com artistas renomados e emergentes, <br />
            sempre valorizando a autenticidade de cada obra.
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section className="uppercase font-bold text-center px-[6%] md:px-[14%]">
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto gap-6"
            id="artistas"
          >
            {artists.map((art, i) => (
              <li
                key={art.id}
                className="hover:scale-[101%] transition-transform duration-300"
              >
                <figure
                  className="relative rounded-lg overflow-hidden opacity-0 animate-slide-up h-[400px]"
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
                    className="absolute flex justify-between bottom-2 w-full  pr-6 left-4 text-white opacity-0 animate-fade-in"
                    style={{ animationDelay: `${i * 200 + 400}ms` }}
                  >
                    {art.titulo}
                    <Link
                      href={`https://instagram.com/${art.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 flex items-center gap-1 hover:underline"
                    >
                      <Image
                        src="/icons/instagram.svg"
                        alt="Instagram"
                        width={18}
                        height={18}
                        className="inline-block bg-white rounded-full"
                      />
                      <span className="lowercase text-white">
                        {art.instagram}
                      </span>
                    </Link>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <nav aria-label="Paginação de artistas">
            <div className="flex justify-center gap-4 mt-8 mb-1">
              {pageNum > 0 && (
                <Button asChild>
                  <Link
                    href={`/institucional/artistas/${pageNum - 1}#artistas`}
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
                    href={`/institucional/artistas/${pageNum + 1}#artistas`}
                    rel="next"
                  >
                    <span>Próximo</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              )}
            </div>
            <span className="text-xs font-medium text-gray-500">
              Página {pageNum + 1} de {totalPages}
            </span>
          </nav>
        </section>
        <SupportSection />
      </div>
    </>
  );
}
