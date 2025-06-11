import Link from "next/link";

import { cn } from "@/utils/utils";
import { documents } from "@/constants/socinprotInfo";

import { DocumentDownloadCard } from "@/components/DocumentDownloadCard";
import { SupportSection } from "@/components/shared/SupportSection";

const categories = [
  { key: "todos", label: "Todos os Documentos" },
  { key: "gestao", label: "Gestão de Pessoas e Carreiras" },
  { key: "registros", label: "Registros e Atas" },
];

export const metadata = {
  title: "SOCINPRO – Documentos e Demonstrativos",
  description:
    "Acesse nossos documentos e demonstrativos para entender melhor a gestão e funcionamento da Socinpro.",
};

export default async function Page({ searchParams }) {
  const { category: rawCategory } = await searchParams;

  const validKeys = categories.map((c) => c.key);
  const activeTab = validKeys.includes(rawCategory) ? rawCategory : "todos";

  const filteredDocs =
    activeTab === "todos"
      ? documents
      : documents.filter((d) => d.category === activeTab);

  return (
    <div className="py-12 space-y-24">
      <section className="uppercase font-bold text-center px-[6%] md:px-[14%]">
        <h2 className="text-xs md:text-base text-teal opacity-0 animate-fade-in">
          DOCUMENTOS E DEMONSTRATIVOS
        </h2>
        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 mt-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Acesse Nossos Documentos e Demonstrativos
        </h1>
        <p
          className="mt-4 text-sm normal-case font-normal md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          Acreditamos que a transparência é a base de uma relação de confiança.
          Nesta seção, disponibilizamos documentos e demonstrativos sobre a
          gestão e o funcionamento interno da Socinpro. Consulte informações
          sobre nossas estruturas de cargos, diretrizes de desenvolvimento,
          sistemas de avaliação e registros relevantes que demonstram nossa
          governança e administração.
        </p>
        <p
          className="text-xs md:text-base text-teal opacity-0 animate-fade-in mt-10"
          style={{ animationDelay: "1000ms" }}
        >
          Navegue pelas abas abaixo:
        </p>
        <div className="mt-10 flex justify-center text-sm sm:text-base sm:space-x-4 opacity-0 animate-fade-in">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              aria-current={activeTab === cat.key ? "page" : undefined}
              href={`/transparencia/documentos?category=${cat.key}`}
              className={cn(
                "px-2 sm:px-4 py-2 border-b-2 transition-all",
                activeTab === cat.key
                  ? "border-teal text-teal font-semibold"
                  : "border-transparent text-gray-600 hover:text-teal hover:font-medium font-normal"
              )}
            >
              {cat.label}
            </Link>
          ))}
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {filteredDocs.map((doc, index) => (
            <DocumentDownloadCard
              key={doc.slug}
              title={doc.title}
              path={`/api/documents/${doc.slug}`}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            />
          ))}
        </div>
      </section>
      <SupportSection />
    </div>
  );
}
