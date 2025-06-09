import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import MicImage from "@/public/images/mic.png";

export function ArticlesOfAssociationSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row px-[6%] md:px-[14%] group">
      <div className="lg:flex flex-col justify-center items-start w-full font-bold text-center lg:text-left lg:px-8 xl:px-12 opacity-0 animate-fade-in">
        <h3 className="uppercase text-xs md:text-base text-teal opacity-0 animate-fade-in">
          Nossas Diretrizes
        </h3>
        <h2 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-6 mt-2">
          Estatuto Social SOCINPRO: As Bases do Nosso Compromisso
        </h2>
        <p className="text-sm normal-case font-normal md:text-base">
          A transparência e a clareza são fundamentais em tudo o que fazemos.
          Nosso Estatuto Social é o documento que rege a Socinpro, detalhando
          nossa estrutura, funcionamento, os direitos e deveres dos associados e
          as normas que garantem uma gestão ética e eficaz. Convidamos você a
          conhecer as diretrizes que solidificam nosso compromisso com a música
          e seus criadores.
        </p>
        <Button size="lg" className="mt-4" asChild>
          <Link href="/institucional/estatuto">Acessar Estatuto Completo</Link>
        </Button>
      </div>
      <div className="w-full mb-5 lg:mb-0 max-h-[200px] max-w-[380px] lg:max-h-none lg:max-w-none mx-auto rounded-lg overflow-hidden">
        <Image
          src={MicImage}
          alt="Imagem de um microfone em um pedestal"
          className="w-full h-full opacity-0 animate-fade-in group-hover:scale-[102%] transition-transform"
          style={{ animationDelay: "400ms" }}
          width={730}
          height={440}
        />
      </div>
    </section>
  );
}
