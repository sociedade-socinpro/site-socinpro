import { Target } from "lucide-react";

import { PageHeader } from "@/components/shared/PageHeader";
import { SupportSection } from "@/components/shared/SupportSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import { RequirementsSection } from "@/components/servicos/individual-management/RequirementsSection";
import { HowToRequestSection } from "@/components/servicos/individual-management/HowToRequestSection";
import { RequestTemplateSection } from "@/components/servicos/individual-management/RequestTemplateSection";

export const metadata = {
  title: "SOCINPRO – Gestão Individual",
  description: "Gerencie seus direitos autorais pessoalmente com a SOCINPRO",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Gerenciando Seus Direitos Pessoalmente"
        description={
          <>
            A opção de administrar diretamente <br />A execução pública de suas
            obras
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section
          className="text-center px-[6%] md:px-[14%] space-y-10"
          aria-labelledby="gestao-individual"
        >
          <p
            className="text-sm md:text-base opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            A gestão individual é o direito que o titular tem de exercer,
            pessoalmente, a defesa de seus direitos autorais, autorizando o uso
            de suas criações de forma onerosa ou gratuita. Esta prerrogativa
            está prevista na Lei Federal nº 9.610/98.
          </p>
          <SectionTitle
            id="gestao-individual"
            style={{ animationDelay: "800ms" }}
          >
            Você pode solicitar a gestão individual para utilizações como:
          </SectionTitle>
          <div className="flex justify-center gap-6 flex-wrap">
            <SectionIconItem
              title="Apresentações ao vivo"
              description="Em shows, concertos, festivais, etc."
              icon={<Target />}
              style={{ animationDelay: "800ms" }}
            />
            <SectionIconItem
              title="Sonorização ambiental"
              description="Em bares, restaurantes, lojas, etc."
              icon={<Target />}
              style={{ animationDelay: "1000ms" }}
            />
            <SectionIconItem
              title="Trilhas sonoras"
              description="Em Obras audiovisuais."
              icon={<Target />}
              style={{ animationDelay: "1200ms" }}
            />
          </div>
        </section>
        <RequirementsSection />
        <HowToRequestSection />
        <RequestTemplateSection />
        <SupportSection />
      </div>
    </>
  );
}
