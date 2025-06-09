import { socinproOrganizationalChartUrl } from "@/constants/socinprotInfo";

import { SupportSection } from "@/components/shared/SupportSection";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "SOCINPRO – Organograma",
  description:
    "Conheça nosso organograma e veja como os departamentos da Socinpro se interligam para melhor atender nossos associados.",
};

export default function Page() {
  return (
    <div className="py-12 space-y-24">
      <section className="uppercase font-bold text-center px-[6%] md:px-[14%]">
        <h2 className="text-xs md:text-base text-teal opacity-0 animate-fade-in">
          Nossa Estrutura Interna
        </h2>
        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 mt-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          SOCINPRO por Dentro: <br />
          Conheça Nossa Organização
        </h1>
        <p
          className="mt-4 text-sm normal-case font-normal md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          Para que a engrenagem da proteção aos direitos autorais funcione com
          precisão, contamos com uma estrutura organizacional clara e eficiente.
          Nosso organograma demonstra como os departamentos e equipes da
          Socinpro se interligam para oferecer o melhor suporte e serviço aos
          nossos associados. Explore como estamos organizados para servir você
        </p>
        <div
          className="relative w-full mx-auto aspect-[1344/1623] border border-gray-200 rounded-lg overflow-hidden mt-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "1200ms" }}
        >
          <iframe
            src={socinproOrganizationalChartUrl}
            title="Organograma Socinpro"
            className="absolute inset-0 w-full h-full border-0"
            style={{ border: "none" }}
          />
        </div>
        <noscript>
          <p className="mt-4 text-center">
            Este navegador não suporta visualização de PDF. Use o botão abaixo
            para baixar o organograma em PDF.
          </p>
        </noscript>
        <p
          className="mt-6 text-sm normal-case font-normal md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "1400ms" }}
        >
          O organograma ilustra a hierarquia e as relações funcionais entre as
          diferentes áreas da Socinpro, desde a Diretoria até os departamentos
          operacionais, facilitando a compreensão do nosso fluxo de trabalho e
          responsabilidades.
        </p>
        <Button
          size="lg"
          asChild
          className="mt-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "1800ms" }}
        >
          <a href="/api/organograma" download>
            Visualizar Organograma SOCINPRO (baixar PDF)
          </a>
        </Button>
      </section>
      <SupportSection />
    </div>
  );
}
