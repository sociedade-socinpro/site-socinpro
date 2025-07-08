import Image from "next/image";
import Link from "next/link";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import ListenImage from "@/public/images/music_listening.png";

export function OrganizationSection() {
  return (
    <section
      className="flex flex-col lg:flex-row px-[6%] md:px-[14%] group"
      aria-labelledby="estrutura-interna"
    >
      <div className="w-full mb-5 lg:mb-0 max-h-[200px] max-w-[380px] lg:max-h-none lg:max-w-none mx-auto rounded-lg overflow-hidden">
        <Image
          src={ListenImage}
          alt="Imagem de uma pessoa ouvindo música"
          className="w-full h-full opacity-0 animate-fade-in group-hover:scale-[102%] transition-transform"
          width={730}
          height={440}
        />
      </div>
      <div
        className="lg:flex flex-col justify-center items-start w-full font-bold text-center lg:text-left lg:px-8 xl:px-12 opacity-0 animate-fade-in"
        style={{ animationDelay: "400ms" }}
      >
        <SectionHeader
          id="estrutura-interna"
          title="Nossa Estrutura Interna"
          subtitle="SOCINPRO por Dentro: Conheça Nossa Organização"
          className="lg:text-left"
          subtitleClassName="normal-case font-medium xl:text-3xl"
        />
        <div
          className="space-y-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-sm normal-case font-normal md:text-base">
            Para que a engrenagem da proteção aos direitos autorais funcione com
            precisão, contamos com uma estrutura organizacional clara e
            eficiente. Nosso organograma demonstra como os departamentos e
            equipes da Socinpro se interligam para oferecer o melhor suporte e
            serviço aos nossos associados. Explore como estamos organizados para
            servir você
          </p>
          <Button size="lg" asChild>
            <Link href="/institucional/organograma">
              Conheça Nossa Estrutura Interna
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
