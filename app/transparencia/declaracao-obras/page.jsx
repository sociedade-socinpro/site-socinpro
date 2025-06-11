import {
  authorsWorksRegistrationUrl,
  authorWorksRegistrationUrl,
} from "@/constants/socinprotInfo";

import { OpenDocumentCard } from "@/components/OpenDocumentCard";
import { SupportSection } from "@/components/shared/SupportSection";

export const metadata = {
  title: "SOCINPRO – Declaração de Obras",
  description: "Declare suas obras de forma simples e rápida com a SOCINPRO.",
};

export default async function Page() {
  return (
    <div className="py-12 space-y-24">
      <section className="uppercase font-bold text-center px-[6%] md:px-[14%]">
        <h2 className="text-xs md:text-base text-teal opacity-0 animate-fade-in">
          Ferramentas do Titular
        </h2>
        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 mt-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Declare Suas Obras de Forma Simples e Rápida
        </h1>
        <p
          className="mt-4 text-sm normal-case font-normal md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          Associado Socinpro, esta área é dedicada a facilitar a gestão dos seus
          direitos. Aqui você encontra os formulários essenciais para a
          declaração de suas obras, um passo fundamental para garantir que seu
          repertório seja corretamente identificado e remunerado. Baixe os
          modelos necessários e mantenha seu cadastro sempre atualizado conosco.
        </p>
        <p
          className="text-xs md:text-base text-teal opacity-0 animate-fade-in mt-10"
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
  );
}
