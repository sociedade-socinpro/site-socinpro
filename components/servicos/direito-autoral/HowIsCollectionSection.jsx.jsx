import { Target } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";

export function HowIsCollectionSection() {
  return (
    <section
      className="text-center px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="como-e-feita-a-arrecadacao"
    >
      <div>
        <SectionHeader
          id="como-e-feita-a-arrecadacao"
          title="Como é Feita a Arrecadação?"
          subtitle="O processo de cobrança do Ecad: quem paga e como os valores são calculados."
        />
        <p
          className="text-sm md:text-base opacity-0 animate-fade-in mt-4"
          style={{ animationDelay: "600ms" }}
        >
          O Ecad calcula e cobra os valores que devem ser pagos pelos usuários
          de música (promotores de eventos, cinemas, rádios, TVs, lojas, etc.)
          de acordo com os critérios do Regulamento de Arrecadação.
          <br />
          <br /> O Regulamento classifica o nível de importância da música para
          a atividade (indispensável, necessária ou secundária) e considera a
          periodicidade da utilização. Os valores são calculados com base em um
          percentual sobre a receita bruta (quando há venda de ingressos) ou com
          base na área sonorizada do estabelecimento.
        </p>
      </div>
      <p
        className="text-xs md:text-base text-teal opacity-0 animate-fade-in font-bold uppercase"
        style={{ animationDelay: "600ms" }}
      >
        Princípios e procedimentos para usuários:
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <SectionIconItem
          description="O pagamento da retribuição autoral deve ser efetuado previamente."
          icon={<Target />}
          level={4}
          style={{ animationDelay: "800ms" }}
        />
        <SectionIconItem
          description="O usuário fica obrigado a fornecer os dados necessários para o cálculo e para a distribuição."
          icon={<Target />}
          level={4}
          style={{ animationDelay: "1000ms" }}
        />
        <SectionIconItem
          description="Todos os pagamentos são realizados somente através de boleto bancário."
          icon={<Target />}
          level={4}
          style={{ animationDelay: "1200ms" }}
        />
      </div>
    </section>
  );
}
