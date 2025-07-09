import { Target } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";

export function HowIsDistributionSection() {
  return (
    <section
      className="text-center px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="como-e-feita-a-distribuicao"
    >
      <div>
        <SectionHeader
          id="como-e-feita-a-distribuicao"
          title="Como é Feita a Distribuição?"
          subtitle="As regras do repasse: percentuais, tipos de execução e o papel das associações."
        />
        <p
          className="text-sm md:text-base opacity-0 animate-fade-in mt-4"
          style={{ animationDelay: "600ms" }}
        >
          Após o recebimento dos valores arrecadados, o Ecad realiza a captação
          e identificação das músicas executadas e, em seguida, efetua a
          distribuição desses valores. Dos valores arrecadados, 85% são
          repassados aos titulares (compositores, intérpretes, músicos, etc.).
        </p>
      </div>
      <p
        className="text-xs md:text-base text-teal opacity-0 animate-fade-in font-bold uppercase"
        style={{ animationDelay: "600ms" }}
      >
        O Ecad realiza distribuições mensais, trimestrais, semestrais e anuais,
        conforme o calendário de cada rubrica. Os valores são diferenciados de
        acordo com os tipos de utilização:
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <SectionIconItem
          title="Música Mecânica"
          description="Como há utilização de fonograma, tanto os titulares de direitos de autor quanto os de direitos conexos (intérpretes, músicos e produtores) recebem."
          icon={<Target />}
          style={{ animationDelay: "800ms" }}
        />
        <SectionIconItem
          title="Música ao Vivo"
          description="Contempla apenas os titulares autorais (compositores e editoras), visto que os demais artistas recebem seus cachês."
          icon={<Target />}
          style={{ animationDelay: "1000ms" }}
        />
      </div>
      <p
        className="text-xs md:text-base opacity-0 animate-fade-in xl:px-32"
        style={{ animationDelay: "1200ms" }}
      >
        Do montante a ser distribuído, 2/3 são direcionados aos titulares de
        direitos de autor (compositores, etc.) e 1/3 para os titulares de
        direitos conexos (intérpretes, produtores, etc.).
      </p>
    </section>
  );
}
