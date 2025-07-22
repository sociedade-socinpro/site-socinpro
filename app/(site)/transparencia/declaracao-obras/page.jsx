import {
  authorsWorksRegistrationUrl,
  authorWorksRegistrationUrl,
} from "@/constants/socinprotInfo";

import { PageHeader } from "@/components/shared/PageHeader";
import { OpenDocumentCard } from "@/components/OpenDocumentCard";
import { SupportSection } from "@/components/shared/SupportSection";

export const metadata = {
  title: "SOCINPRO – Declaração de Obras",
  description: "Declare suas obras de forma simples e rápida com a SOCINPRO.",
};

export default async function Page() {
  return (
    <>
      <PageHeader
        title="Ferramentas do Titular"
        description={
          <>
            Declare Suas Obras de <br /> Forma Simples e Rápida
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section className="text-center px-[6%] md:px-[14%]">
          <p
            className="text-sm md:text-base opacity-0 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            Associado Socinpro, esta área é dedicada a facilitar a gestão dos
            seus direitos. Aqui você encontra os formulários essenciais para a
            declaração de suas obras, um passo fundamental para garantir que seu
            repertório seja corretamente identificado e remunerado. Baixe os
            modelos necessários e mantenha seu cadastro sempre atualizado
            conosco.
          </p>
          <p
            className="font-bold text-xs md:text-base text-teal opacity-0 animate-fade-in mt-10"
            style={{ animationDelay: "1000ms" }}
          >
            BAIXE OS FORMULÁRIOS NECESSÁRIOS ABAIXO:
          </p>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 mt-10 w-fit mx-auto">
            <OpenDocumentCard
              title="Declaração de Obras Vários Autores"
              description="Utilize este formulário para declarar obras que possuem mais de um autor em sua composição."
              href={authorsWorksRegistrationUrl}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "1000ms" }}
            />
            <OpenDocumentCard
              title="Declaração de Obras Único Autor"
              description="Utilize este formulário para declarar obras que possuem um único autor em sua composição."
              href={authorWorksRegistrationUrl}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "1200ms" }}
            />
          </div>
        </section>
        <SupportSection />
      </div>
    </>
  );
}
