import Image from "next/image";
import Link from "next/link";

import { cn } from "@/utils/utils";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";

export const ArtistsSection = ({ artists }) => {
  const slice = artists.slice(0, 3);
  return (
    <section aria-labelledby="artistas">
      <div className="flex flex-col md:flex-col-reverse">
        <div className="grid grid-cols-3 mb-8 md:mt-8 md:mb-5 justify-items-center px-[14%] lg:px-[20%]">
          {slice.map(
            (artist, index) =>
              artist.imgUrl && (
                <Image
                  key={artist.id}
                  src={artist.imgUrl}
                  alt={artist.titulo}
                  height={index === 1 ? 864 : 768}
                  width={index === 1 ? 780 : 586}
                  className={cn(
                    "object-contain z-10 w-full max-w-xs hover:scale-[102%] transition-transform opacity-0 animate-fade-in",
                    {
                      "translate-y-2 md:translate-y-5": index === 1,
                    }
                  )}
                  style={{ animationDelay: `${index * 200 + 1000}ms` }}
                />
              )
          )}
        </div>
        <div className="text-center px-[6%] md:px-[14%] space-y-4">
          <SectionHeader
            id="artistas"
            title="Conheça quem confia em nós"
            subtitle="Trabalhamos com artistas renomados e emergentes, sempre valorizando
            a autenticidade de cada obra."
          />
          <p
            className="text-xs md:text-base px-[6%] xl:px-[14%] opacity-0 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            Na SOCINPRO, temos o orgulho de representar artistas de todos os
            estilos e trajetórias. Cada talento é único, e nosso compromisso é
            garantir que suas criações sejam protegidas e valorizadas. Junte-se
            a uma comunidade que inspira e transforma o mundo da música.
          </p>
          <Link
            href="/institucional/artistas"
            className="inline-block opacity-0 animate-fade-in"
            style={{ animationDelay: "1000ms" }}
          >
            <Button size="lg">Conheça nossos artistas</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
