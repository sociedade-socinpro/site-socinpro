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
    title: `SOCINPRO – Notícias - Página ${pageNum + 1}`,
    description: "Fique por dentro das últimas notícias da SOCINPRO.",
    alternates: { canonical: `/comunicacao/noticias/${pageNum}` },
  };
}

export default async function Page(props) {
  const { page } = await props.params;
  const pageNum = page?.[0] ? Number(page[0]) : 0;
  const size = 9;

  const { content: news = [], totalPages } = await fetcher(
    `/sipa-documentacao/v1/site/publico/noticias/todas?size=${size}&page=${pageNum}`,
    {
      next: { revalidate: 60 },
    }
  );

  return (
    <>
      <Head>
        {pageNum > 0 && (
          <link rel="prev" href={`/comunicacao/noticias/${pageNum - 1}`} />
        )}
        {pageNum < totalPages - 1 && (
          <link rel="next" href={`/comunicacao/noticias/${pageNum + 1}`} />
        )}
      </Head>
      <div className="py-12 space-y-24">
        <section className="uppercase font-bold text-center px-[6%] md:px-[14%]">
          <h2 className="text-xs md:text-base text-teal opacity-0 animate-fade-in">
            últimas publicações
          </h2>
          <h1
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 mt-4 opacity-0 animate-fade-in delay-400"
            style={{ animationDelay: "400ms" }}
          >
            fique por dentro do que acontece na SOCINPRO
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto gap-6 mt-10">
            {news.map((post, i) => (
              <li key={post.id}>
                <article
                  itemScope
                  itemType="https://schema.org/NewsArticle"
                  className="rounded-lg overflow-hidden bg-white shadow-sm h-full opacity-0 animate-slide-up group"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  {post.imgUrl && (
                    <div className="relative w-full h-64">
                      <Image
                        src={post.imgUrl}
                        alt={post.titulo}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover group-hover:scale-[102%] transition-transform duration-300"
                        loading="lazy"
                        itemProp="image"
                      />
                    </div>
                  )}
                  <div className="p-4 normal-case text-left">
                    <h3
                      itemProp="headline"
                      className="text-2xl normal-case font-medium mb-2"
                    >
                      {post.titulo}
                    </h3>
                    <p
                      itemProp="description"
                      className="text-sm sm:text-base font-normal"
                    >
                      {post.descricao}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <nav aria-label="Paginação de notícias">
            <div className="flex justify-center gap-4 mt-8 mb-1">
              {pageNum > 0 && (
                <Button asChild>
                  <Link
                    href={`/comunicacao/noticias/${pageNum - 1}`}
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
                    href={`/comunicacao/noticias/${pageNum + 1}`}
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
