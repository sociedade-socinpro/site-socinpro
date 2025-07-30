import { Target } from "lucide-react";
import { Info } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import { distributionRegulationUrl } from "@/constants/socinprotInfo";

export function HowToRegisterSection() {
  return (
    <section
      className="text-center px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="como-registrar-obra"
    >
      <div>
        <SectionHeader
          id="como-registrar-obra"
          title="Como Registrar uma Obra?"
          subtitle="Requisitos essenciais para garantir o recebimento dos seus direitos."
        />
        <p
          className="text-sm md:text-base opacity-0 animate-fade-in mt-4"
          style={{ animationDelay: "600ms" }}
        >
          O Ecad representa somente os titulares filiados às associações que o
          compõem. Para que os artistas possam receber seus direitos autorais de
          execução pública, são necessárias algumas regras básicas:
        </p>
      </div>
      <div className="flex justify-center gap-6 flex-wrap">
        <SectionIconItem
          description="Ser filiado a uma das associações que compõem o Ecad."
          icon={<Target />}
          level={4}
          style={{ animationDelay: "800ms" }}
        />
        <SectionIconItem
          description="Ter o repertório cadastrado e constantemente atualizado na sua associação."
          icon={<Target />}
          level={4}
          style={{ animationDelay: "900ms" }}
        />
        <SectionIconItem
          description="Ter a música executada e captada pelo Ecad."
          icon={<Target />}
          level={4}
          style={{ animationDelay: "1000ms" }}
        />
        <SectionIconItem
          description="O usuário onde a música foi executada deve pagar direitos autorais ao Ecad."
          icon={<Target />}
          level={4}
          style={{ animationDelay: "1100ms" }}
        />
        <SectionIconItem
          description="No caso de shows, o organizador deve enviar o roteiro com as músicas tocadas."
          icon={<Target />}
          level={4}
          style={{ animationDelay: "1200ms" }}
        />
      </div>
      <p
        className="text-xs md:text-base text-teal opacity-0 animate-fade-in font-bold uppercase"
        style={{ animationDelay: "600ms" }}
      >
        Existem três tipos de distribuição:
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <SectionIconItem
          title="Direta"
          description="Baseada em roteiros musicais (shows, cinema, etc.)."
          icon={<Target />}
          level={4}
          style={{ animationDelay: "800ms" }}
        />
        <SectionIconItem
          title="Indireta"
          description="Utiliza o critério de amostragem (rádio, TV, direitos gerais)."
          icon={<Target />}
          level={4}
          style={{ animationDelay: "1000ms" }}
        />
        <SectionIconItem
          title="Indireta Especial"
          description="Amostragem específica para eventos como Carnaval e Festas Juninas."
          icon={<Target />}
          level={4}
          style={{ animationDelay: "1200ms" }}
        />
      </div>
      <a
        href={distributionRegulationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 uppercase text-xs md:text-base font-bold text-teal opacity-0 animate-fade-in border border-teal rounded-lg p-4"
        style={{ animationDelay: "1400ms" }}
      >
        <Info className="shrink-0" />
        Clique aqui para ler o regulamento de Distribuição do Ecad e aqui para
        ver as perguntas mais frequentes sobre este assunto.
      </a>
    </section>
  );
}
