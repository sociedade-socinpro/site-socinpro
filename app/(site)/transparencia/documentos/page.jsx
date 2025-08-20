import Link from "next/link";

import { cn } from "@/utils/utils";
import { documents } from "@/constants/socinproInfo";

import { PageHeader } from "@/components/shared/PageHeader";
import { OpenDocumentCard } from "@/components/shared/OpenDocumentCard";
import { SupportSection } from "@/components/shared/SupportSection";

const categories = [
  { key: "todos", label: "Todos os Documentos" },
  { key: "governanca", label: "Governança" },
  { key: "titulares", label: "Relação de Titulares" },
  { key: "dominio-publico", label: "Obras de Domínio Público" },
  { key: "atas", label: "Atas" },
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
    <>
      <PageHeader
        title="Documentos e Demonstrativos"
        description={
          <>
            Acesse Nossos Documentos <br /> e Demonstrativos
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section className="text-center px-[6%] md:px-[14%]">
          <p
            className="text-sm md:text-base opacity-0 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            Acreditamos que a transparência é a base de uma relação de
            confiança. Nesta seção, disponibilizamos documentos e demonstrativos
            sobre a gestão e o funcionamento interno da Socinpro. Consulte
            informações sobre nossas estruturas de cargos, diretrizes de
            desenvolvimento, sistemas de avaliação e registros relevantes que
            demonstram nossa governança e administração.
          </p>
          <p
            className="text-xs font-bold uppercase md:text-base text-teal opacity-0 animate-fade-in mt-10"
            style={{ animationDelay: "1000ms" }}
          >
            Navegue pelas abas abaixo:
          </p>
          <div
            className="mt-10 flex justify-center text-sm sm:text-base sm:space-x-4 opacity-0 animate-fade-in"
            id="documentos"
          >
            {categories.map((cat) => (
              <Link
                key={cat.key}
                aria-current={activeTab === cat.key ? "page" : undefined}
                href={`/transparencia/documentos?category=${cat.key}#documentos`}
                className={cn(
                  "px-2 sm:px-4 py-2 border-b-2 transition-all uppercase",
                  activeTab === cat.key
                    ? "border-teal text-teal font-semibold"
                    : "border-transparent text-gray-600 hover:text-teal hover:font-medium"
                )}
              >
                {cat.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {filteredDocs.map((doc, index) => (
              <OpenDocumentCard
                key={doc.slug}
                title={doc.title}
                href={doc.url}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </section>
        <SupportSection />
      </div>
    </>
  );
}
