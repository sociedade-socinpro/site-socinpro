import { socinproArticlesOfAssociationUrl } from "@/constants/socinprotInfo";

import { SupportSection } from "@/components/shared/SupportSection";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Socinpro Estatuto Social – Nossas Diretrizes",
  description:
    "Conheça o Estatuto Social da Socinpro, que rege nossa estrutura, funcionamento e compromisso com a transparência e ética na gestão dos direitos autorais.",
};

export default function Page() {
  return (
    <div className="py-12 space-y-24">
      <section className="uppercase font-bold text-center px-[6%] md:px-[14%]">
        <h2 className="text-xs md:text-base text-teal opacity-0 animate-fade-in">
          Nossas Diretrizes
        </h2>
        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 mt-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Estatuto Social SOCINPRO: <br />
          As Bases do Nosso Compromisso
        </h1>
        <p
          className="mt-4 text-sm normal-case font-normal md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          A transparência e a clareza são fundamentais em tudo o que fazemos.
          Nosso Estatuto Social é o documento que rege a Socinpro, detalhando
          nossa estrutura, funcionamento, os direitos e deveres dos associados e
          as normas que garantem uma gestão ética e eficaz. Convidamos você a
          conhecer as diretrizes que solidificam nosso compromisso com a música
          e seus criadores.
        </p>
        <div
          className="relative w-full mx-auto aspect-[1344/1623] border border-gray-200 rounded-lg overflow-hidden mt-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "1200ms" }}
        >
          <iframe
            src={socinproArticlesOfAssociationUrl}
            title="Estatuto Social SOCINPRO"
            className="absolute inset-0 w-full h-full border-0"
            style={{ border: "none" }}
          />
        </div>
        <noscript>
          <p className="mt-4 text-center">
            Este navegador não suporta visualização de PDF. Use o botão abaixo
            para baixar o estatuto em PDF.
          </p>
        </noscript>
        <p
          className="mt-6 text-sm normal-case font-normal md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "1400ms" }}
        >
          Este documento é a espinha dorsal da nossa governança e reflete nosso
          empenho em atuar com integridade e em total conformidade com as
          melhores práticas de gestão associativa. Ao consultá-lo, você terá uma
          visão completa de como a Socinpro opera para defender seus interesses
        </p>
        <Button
          size="lg"
          asChild
          className="mt-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "1800ms" }}
        >
          <a href="/api/estatuto" download>
            Ver Detalhes da Gestão (baixar PDF)
          </a>
        </Button>
      </section>
      <SupportSection />
    </div>
  );
}
