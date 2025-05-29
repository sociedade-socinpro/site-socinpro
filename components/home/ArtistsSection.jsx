import Image from "next/image";

import { cn } from "@/utils/utils";

import { Button } from "@/components/ui/button";

export const ArtistsSection = ({ artists }) => {
  const slice = artists.slice(0, 3);
  return (
    <section>
      <div className="flex flex-col md:flex-col-reverse">
        <div className="grid grid-cols-3 mb-8 md:mt-8 md:mb-5 justify-items-center px-[14%] lg:px-[20%]">
          {slice.map((artist, index) => (
            <Image
              key={artist.id}
              src={artist.imgUrl}
              alt={artist.titulo}
              height={index === 1 ? 864 : 768}
              width={index === 1 ? 780 : 586}
              className={cn(
                "object-contain z-10 w-full max-w-xs hover:scale-[102%] transition-transform duration-300",
                {
                  "translate-y-2 md:translate-y-5": index === 1,
                }
              )}
            />
          ))}
        </div>
        <div className="uppercase font-bold text-center px-[6%] md:px-[14%] space-y-4">
          <p className="text-xs md:text-base text-teal">
            Conheça quem confia em nós
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6">
            Trabalhamos com artistas renomados e emergentes, sempre valorizando
            a autenticidade de cada obra.
          </h2>
          <p className="text-xs md:text-base font-normal normal-case px-[6%] xl:px-[14%]">
            Na SOCINPRO, temos o orgulho de representar artistas de todos os
            estilos e trajetórias. Cada talento é único, e nosso compromisso é
            garantir que suas criações sejam protegidas e valorizadas. Junte-se
            a uma comunidade que inspira e transforma o mundo da música.
          </p>
          <Button size="lg">Conheça nossos artistas</Button>
        </div>
      </div>
    </section>
  );
};
