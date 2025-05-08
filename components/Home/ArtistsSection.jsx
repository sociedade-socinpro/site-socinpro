import Image from "next/image";

import { Button } from "@/components/ui/button";

import CesarMenottiFabiano from "@/public/images/artists/cesar_menotti_fabiano.png";
import MichelTelo from "@/public/images/artists/michel_telo.png";
import RobertoCarlos from "@/public/images/artists/roberto_carlos.png";

export const ArtistsSection = () => {
  return (
    <section>
      <div className="uppercase font-bold text-center px-[8%] xl:px-[14%] space-y-4">
        <p className="text-xs md:text-base text-teal">
          Conheça quem confia em nós
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6">
          Trabalhamos com artistas renomados e emergentes, sempre valorizando a
          autenticidade de cada obra.
        </h2>
        <p className="text-xs md:text-base font-normal normal-case px-[8%] xl:px-[14%]">
          Na SOCINPRO, temos o orgulho de representar artistas de todos os
          estilos e trajetórias. Cada talento é único, e nosso compromisso é
          garantir que suas criações sejam protegidas e valorizadas. Junte-se a
          uma comunidade que inspira e transforma o mundo da música.
        </p>
        <Button size="lg">Conheça nossos artistas</Button>
      </div>
      <div className="px-[20%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-8 justify-items-center">
        <Image
          src={CesarMenottiFabiano}
          alt="Dupla sertaneja César Menotti e Fabiano"
          className="object-contain z-10 md:scale-[110%] lg:scale-[115%] hover:scale-[110%] transition-transform ease-in-out duration-300"
        />
        <Image
          src={MichelTelo}
          alt="Cantor sertanejo Michel Teló"
          className="object-contain lg:translate-y-14 md:scale-[95%] lg:scale-[115%] lg:ml-[10%] hover:scale-[110%] transition-transform ease-in-out duration-300"
        />
        <Image
          src={RobertoCarlos}
          alt="Cantor Roberto Carlos"
          className="object-contain z-10 lg:scale-[115%] hover:scale-[110%] transition-transform ease-in-out duration-300"
        />
      </div>
    </section>
  );
};
