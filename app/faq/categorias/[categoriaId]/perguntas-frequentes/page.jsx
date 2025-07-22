import { ArrowRight } from "lucide-react";

import { fetcher } from "@/utils/fetcher";

import { FaqNavigation } from "@/components/faq/FaqNavigation";
import { FaqPagination } from "@/components/faq/FaqPagination";
import {
  FaqCard,
  FaqCardDescription,
  FaqCardHeader,
  FaqCardTitle,
} from "@/components/ui/faq-card";

export async function generateMetadata({ params, searchParams }) {
  const { categoriaId } = await params;
  const { pagina } = await searchParams;
  const pageNum = pagina?.[0] ? Number(pagina[0]) : 0;

  const category = await fetcher(
    `/sipa-documentacao/v1/site/publico/faqs/${categoriaId}`
  );

  const categoryTitle = category?.titulo || "Perguntas Frequentes";
  const title = `SOCINPRO Responde – ${categoryTitle} – Página ${pageNum + 1}`;
  const description = `Tire suas dúvidas sobre ${categoryTitle} na SOCINPRO. Encontre perguntas e respostas mais comuns sobre ${categoryTitle}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/faq/categorias/${categoriaId}/perguntas-frequentes?pagina=${pageNum}`,
    },
  };
}

export default async function Page({ params, searchParams }) {
  const { categoriaId } = await params;
  const { pagina } = await searchParams;
  const pageNum = pagina?.[0] ? Number(pagina[0]) : 0;
  const size = 5;

  const { content: faqData = [], totalPages } = await fetcher(
    `/sipa-documentacao/v1/site/publico/faqs/${categoriaId}/perguntas-repostas?size=${size}&page=${pageNum}`
  );

  const category = faqData.length > 0 ? faqData[0].siteFaqPai : null;
  const categoryTitle = category?.titulo || "Perguntas Frequentes";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.titulo,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.descricao,
              },
            })),
          }),
        }}
      />
      <section className="flex flex-col flex-1 py-10 sm:py-14 2xl:py-32 px-6 lg:px-10">
        <h1 className="sr-only">
          Socinpro Responde - {categoryTitle} – Página {pageNum + 1}
        </h1>
        <div className="flex flex-col flex-1 mx-auto w-full justify-center max-w-3xl 3xl:max-w-4xl">
          <FaqNavigation
            categoryId={category?.id}
            categoryTitle={categoryTitle}
          />
          <p className="mb-8 text-coal-200 font-bold text-base sm:text-lg lg:text-xl uppercase opacity-0 animate-fade-in">
            Selecione a opção desejada:
          </p>
          <ul className="grid grid-cols-1 gap-4" role="list">
            {faqData.map((faq, index) => (
              <FaqItem
                key={faq.id}
                href={`/faq/categorias/${categoriaId}/perguntas-frequentes/${faq.id}`}
                title={faq.titulo}
                description={faq.descricao}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              />
            ))}
          </ul>
        </div>
        <FaqPagination
          currentPage={pageNum}
          totalPages={totalPages}
          basePath={`/faq/categorias/${categoriaId}/perguntas-frequentes`}
        />
      </section>
    </>
  );
}

const FaqItem = ({ title, description, href, style }) => (
  <li className="opacity-0 animate-fade-in" style={style} role="listitem">
    <FaqCard href={href}>
      <div className="flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <FaqCardHeader>
            <FaqCardTitle>{title}</FaqCardTitle>
          </FaqCardHeader>
          <FaqCardDescription className="truncate">
            {description}
          </FaqCardDescription>
        </div>
        <div className="bg-white rounded-full p-1 sm:p-2" aria-hidden="true">
          <ArrowRight color="black" />
        </div>
      </div>
    </FaqCard>
  </li>
);
