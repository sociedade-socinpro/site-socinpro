import Image from "next/image";
import Link from "next/link";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import MusicProducerStudioImage from "@/public/images/music_producer_studio.png";

export function PublisherPartnershipSection() {
  return (
    <section
      className="flex flex-col 2xl:flex-row px-[6%] md:px-[14%] group"
      aria-labelledby="parceria-editora"
    >
      <div className="w-full mb-5 2xl:mb-0 max-h-[289px] max-w-[766px] 2xl:max-h-none 2xl:max-w-none mx-auto rounded-lg overflow-hidden opacity-0 animate-fade-in">
        <Image
          src={MusicProducerStudioImage}
          alt="Imagem de um produtor musical em um estúdio"
          className="w-full h-full group-hover:scale-[101%] transition-transform duration-300"
          width={766}
          height={289}
        />
      </div>
      <div
        className="2xl:flex flex-col justify-center items-start w-full text-center 2xl:text-left lg:pl-8 xl:pl-12 opacity-0 animate-fade-in"
        style={{ animationDelay: "400ms" }}
      >
        <SectionHeader
          id="parceria-editora"
          title="Sou uma Editora, Como Recolher com a Socinpro Digital?"
          subtitle="Entre em contato conosco para iniciar a nossa parceria."
          className="2xl:text-left"
          subtitleClassName="normal-case font-medium xl:text-3xl"
        />
        <div
          className="space-y-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-sm md:text-base">
            Você pode clicar no botão abaixo e nos enviar uma solicitação.
            Iremos analisar a situação da sua Editora e entrar em contato para
            dar os próximos passos.
          </p>
          <Button size="lg" asChild>
            <Link href="/contato">Entrar em contato</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
