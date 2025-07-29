import { Target } from "lucide-react";

import {
  berneConventionUrl,
  genevaConventionUrl,
  romeConventionUrl,
} from "@/constants/socinprotInfo";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { OpenDocumentCard } from "../shared/OpenDocumentCard";

export function InternationalConventionsSection() {
  return (
    <section
      className="text-center px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="convencoes-internacionais"
    >
      <div>
        <SectionHeader
          id="convencoes-internacionais"
          title="Convenções Internacionais"
          subtitle="Os acordos globais que fundamentam a proteção dos seus direitos."
        />
        <p
          className="text-sm md:text-base opacity-0 animate-fade-in mt-4"
          style={{ animationDelay: "600ms" }}
        >
          A proteção dos seus direitos é garantida por importantes convenções
          internacionais, que também servem de base para a legislação
          brasileira.
        </p>
      </div>
      <div className="flex justify-center gap-6 flex-wrap">
        <OpenDocumentCard
          title="Convenção de Berna"
          description="Criada em 1886 para proteger obras literárias e artísticas em todo o mundo. Garante que autores e compositores tenham seus direitos respeitados."
          buttonText="Consulte a convenção"
          href={berneConventionUrl}
          icon={<Target />}
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        />
        <OpenDocumentCard
          title="Convenção de Roma"
          description="Protege os direitos dos artistas intérpretes e executantes, garantindo que suas apresentações sejam devidamente reconhecidas e remuneradas."
          buttonText="Consulte a convenção"
          href={romeConventionUrl}
          icon={<Target />}
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "1000ms" }}
        />
        <OpenDocumentCard
          title="Convenção de Genebra"
          description="Estabelecida em 1971 para proteger os produtores fonográficos contra a reprodução não autorizada (pirataria) de suas gravações."
          buttonText="Consulte a convenção"
          href={genevaConventionUrl}
          icon={<Target />}
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "1200ms" }}
        />
      </div>
    </section>
  );
}
