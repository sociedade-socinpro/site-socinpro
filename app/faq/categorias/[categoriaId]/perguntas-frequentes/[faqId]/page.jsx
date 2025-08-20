import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

import { fetcher } from "@/utils/fetcher";

import { FaqNavigation } from "@/components/faq/FaqNavigation";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }) {
  const { faqId } = await params;
  const data = await fetcher(
    `/sipa-documentacao/v1/site/publico/faqs/${faqId}`
  );

  const question = data.titulo || "Pergunta Frequente";
  const answerSnippet = data.descricao
    ? data.descricao.replace(/\s+/g, " ").slice(0, 140) + "…"
    : "";
  const title = `${question} | SOCINPRO Responde`;
  const description = answerSnippet;
  const canonical = `/faq/categorias/${data.siteFaqPai.id}/perguntas-frequentes/${faqId}`;

  return {
    title,
    description,
    alternates: { canonical },
  };
}

export default async function Page({ params }) {
  const { faqId } = await params;
  function toEmbedUrl(watchUrl) {
    try {
      const url = new URL(watchUrl);
      const id = url.searchParams.get("v");
      if (!id) return null;
      return `https://www.youtube.com/embed/${id}`;
    } catch {
      return null;
    }
  }
  const data = await fetcher(
    `/sipa-documentacao/v1/site/publico/faqs/${faqId}`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: data.titulo,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: data.descricao,
                },
              },
            ],
          }),
        }}
      />
      <article className="flex flex-col flex-1 py-10 sm:py-14 2xl:py-32 px-6 lg:px-10">
        <div className="flex flex-col flex-1 mx-auto w-full justify-center max-w-3xl 3xl:max-w-4xl text-base sm:text-lg text-center sm:text-left">
          <FaqNavigation
            categoryId={data.siteFaqPai.id}
            categoryTitle={data.siteFaqPai.titulo}
            faqTitle={data.titulo}
          />
          <header>
            <h1
              id="faq-title"
              className="font-bold uppercase text-dust md:text-xl xl:text-2xl leading-none tracking-tight opacity-0 animate-fade-in"
            >
              {data.titulo}
            </h1>
          </header>
          <section
            aria-labelledby="faq-title"
            className="text-neutral-200 opacity-0 animate-fade-in mt-2 mb-10"
            style={{ animationDelay: "200ms" }}
          >
            <p>{data.descricao}</p>
          </section>
          <div className="flex flex-col items-center gap-8">
            {data.imgUrl && (
              <div
                className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg opacity-0 animate-fade-in"
                style={{ animationDelay: "400ms" }}
              >
                <Image
                  src={data.imgUrl}
                  alt={data.titulo}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}
            {data.videoUrl && (
              <figure className="…">
                <iframe
                  src={toEmbedUrl(data.videoUrl)}
                  title={data.titulo}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                <figcaption className="sr-only">
                  Vídeo explicativo: {data.titulo}
                </figcaption>
              </figure>
            )}
          </div>
        </div>
        <nav aria-label="Voltar para FAQ" className="flex justify-center mt-10">
          <Link
            href="/faq"
            className="flex items-center gap-3 group opacity-0 animate-fade-in"
          >
            <Button className="sm:[&_svg]:size-5 sm:h-12">
              <Home />
            </Button>
            <span className="hidden sm:block uppercase text-dust text-sm lg:text-base xl:text-lg group-hover:text-teal transition-colors duration-300">
              Clique para <br /> voltar ao início
            </span>
          </Link>
        </nav>
      </article>
    </>
  );
}
