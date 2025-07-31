import { Target } from "lucide-react";

import { distributionRegulationUrl } from "@/constants/socinprotInfo";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import { InfoText } from "@/components/shared/InfoText";

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
          style={{ animationDelay: "800ms" }}
        />
        <SectionIconItem
          description="Ter o repertório cadastrado e constantemente atualizado na sua associação."
          icon={<Target />}
          style={{ animationDelay: "900ms" }}
        />
        <SectionIconItem
          description="Ter a música executada e captada pelo Ecad."
          icon={<Target />}
          style={{ animationDelay: "1000ms" }}
        />
        <SectionIconItem
          description="O usuário onde a música foi executada deve pagar direitos autorais ao Ecad."
          icon={<Target />}
          style={{ animationDelay: "1100ms" }}
        />
        <SectionIconItem
          description="No caso de shows, o organizador deve enviar o roteiro com as músicas tocadas."
          icon={<Target />}
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
          style={{ animationDelay: "800ms" }}
        />
        <SectionIconItem
          title="Indireta"
          description="Utiliza o critério de amostragem (rádio, TV, direitos gerais)."
          icon={<Target />}
          style={{ animationDelay: "1000ms" }}
        />
        <SectionIconItem
          title="Indireta Especial"
          description="Amostragem específica para eventos como Carnaval e Festas Juninas."
          icon={<Target />}
          style={{ animationDelay: "1200ms" }}
        />
      </div>
      <InfoText style={{ animationDelay: "1400ms" }}>
        <a
          href={distributionRegulationUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique aqui para ler o regulamento de Distribuição do Ecad e aqui para
          ver as perguntas mais frequentes sobre este assunto.
        </a>
      </InfoText>
    </section>
  );
}
