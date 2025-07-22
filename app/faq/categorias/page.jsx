import { AudioLines } from "lucide-react";

import { fetcher } from "@/utils/fetcher";

import { FaqNavigation } from "@/components/faq/FaqNavigation";
import {
  FaqCard,
  FaqCardDescription,
  FaqCardHeader,
  FaqCardTitle,
} from "@/components/ui/faq-card";
import { FaqPagination } from "@/components/faq/FaqPagination";

export async function generateMetadata({ searchParams }) {
  const { pagina } = await searchParams;
  const pageNum = pagina?.[0] ? Number(pagina[0]) : 0;

  return {
    title: `SOCINPRO Responde – Categorias - Página ${pageNum + 1}`,
    description:
      "Navegue pelas categorias de perguntas frequentes da SOCINPRO.",
    alternates: { canonical: `/faq/categorias?pagina=${pageNum}` },
  };
}

export default async function Page({ searchParams }) {
  const { pagina } = await searchParams;
  const pageNum = pagina?.[0] ? Number(pagina[0]) : 0;
  const size = 6;

  const { content: categories = [], totalPages } = await fetcher(
    `/sipa-documentacao/v1/site/publico/faqs/categorias?size=${size}&page=${pageNum}`
  );
  return (
    <section className="flex flex-col flex-1 py-10 sm:py-14 2xl:py-32 px-6 lg:px-10">
      <h1 className="sr-only">
        SOCINPRO Responde - Categorias – Página {pageNum + 1}
      </h1>
      <div className="flex flex-col flex-1 mx-auto w-full justify-center max-w-3xl 3xl:max-w-4xl">
        <FaqNavigation />
        <p className="mb-8 text-coal-200 font-bold text-base sm:text-lg lg:text-xl uppercase opacity-0 animate-fade-in">
          Selecione a opção desejada:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
          {categories.map((category, index) => (
            <CategoryItem
              key={category.id}
              href={`/faq/categorias/${category.id}/perguntas-frequentes`}
              title={category.titulo}
              description={category.descricao}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            />
          ))}
        </ul>
      </div>
      <FaqPagination
        currentPage={pageNum}
        totalPages={totalPages}
        basePath="/faq/categorias"
      />
    </section>
  );
}

const CategoryItem = ({ title, description, href, style }) => (
  <li className="opacity-0 animate-fade-in" style={style} role="listitem">
    <FaqCard href={href}>
      <FaqCardHeader>
        <div
          className="flex items-center justify-center p-2 rounded-full bg-coal-200/10"
          aria-hidden="true"
        >
          <AudioLines />
        </div>
        <FaqCardTitle>{title}</FaqCardTitle>
      </FaqCardHeader>
      <FaqCardDescription>{description}</FaqCardDescription>
    </FaqCard>
  </li>
);
