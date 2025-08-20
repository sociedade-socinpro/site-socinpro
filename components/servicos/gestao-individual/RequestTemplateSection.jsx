import { individualManagementModelUrl } from "@/constants/socinproInfo";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

export function RequestTemplateSection() {
  return (
    <section aria-labelledby="modelo-solicitacao-gestao-individual">
      <div className="flex flex-col items-center px-[6%] md:px-[14%] space-y-10">
        <SectionHeader
          id="modelo-solicitacao-gestao-individual"
          title="Modelo de Solicitação"
          subtitle="Utilize nosso modelo para formalizar seu pedido e garantir que todas as informações necessárias sejam incluídas."
        />
        <p
          className="text-sm md:text-base text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          Após o recebimento dos valores arrecadados, o Ecad realiza a captação
          e identificação das músicas executadas e, em seguida, efetua a
          distribuição desses valores. Dos valores arrecadados, 85% são
          repassados aos titulares (compositores, intérpretes, músicos, etc.).
        </p>
        <Button
          size="lg"
          asChild
          className="opacity-0 animate-fade-in w-full lg:w-auto"
          style={{ animationDelay: "800ms" }}
        >
          <a
            href={individualManagementModelUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Baixar Modelo de Gestão Individual
          </a>
        </Button>
      </div>
    </section>
  );
}
