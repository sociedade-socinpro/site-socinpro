import Image from "next/image";
import Link from "next/link";

import { SectionHeader } from "@/components//shared/SectionHeader";
import { Button } from "@/components/ui/button";
import MicImage from "@/public/images/mic.png";

export function ArticlesOfAssociationSection() {
  return (
    <section
      className="flex flex-col-reverse lg:flex-row px-[6%] md:px-[14%] group"
      aria-labelledby="estatuto-social"
    >
      <div className="lg:flex flex-col justify-center items-start w-full text-center lg:text-left lg:pr-8 xl:pr-12">
        <SectionHeader
          id="estatuto-social"
          title="Nossas Diretrizes"
          subtitle="Estatuto Social SOCINPRO: As Bases do Nosso Compromisso"
          className="lg:text-left"
          subtitleClassName="normal-case font-medium xl:text-3xl"
        />
        <div
          className="space-y-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-sm md:text-base">
            A transparência e a clareza são fundamentais em tudo o que fazemos.
            Nosso Estatuto Social é o documento que rege a Socinpro, detalhando
            nossa estrutura, funcionamento, os direitos e deveres dos associados
            e as normas que garantem uma gestão ética e eficaz. Convidamos você
            a conhecer as diretrizes que solidificam nosso compromisso com a
            música e seus criadores.
          </p>
          <Button size="lg" asChild>
            <Link href="/institucional/estatuto">
              Acessar Estatuto Completo
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full mb-5 lg:mb-0 max-h-[200px] max-w-[380px] lg:max-h-none lg:max-w-none mx-auto rounded-lg overflow-hidden opacity-0 animate-fade-in">
        <Image
          src={MicImage}
          alt="Imagem de um microfone em um pedestal"
          className="w-full h-full group-hover:scale-[102%] transition-transform duration-300"
          width={730}
          height={440}
        />
      </div>
    </section>
  );
}
