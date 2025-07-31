import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import StreamingPlatformsImage from "@/public/images/streaming_platforms.png";

export function StreamingRoyaltySection() {
  return (
    <section
      className="flex flex-col 2xl:flex-row px-[6%] md:px-[14%] group"
      aria-labelledby="streaming-royalty"
    >
      <div className="2xl:flex flex-col justify-center items-start w-full text-center 2xl:text-left 2xl:pr-12">
        <SectionHeader
          id="streaming-royalty"
          title="Direitos no Ambiente Digital"
          subtitle="Entendendo o pagamento de direitos conexos"
          className="2xl:text-left"
          subtitleClassName="normal-case font-medium xl:text-3xl"
        />
        <p
          className="text-sm md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          Atualmente, algumas plataformas de streaming já realizam o pagamento
          de direitos conexos. No entanto, a maioria ainda se limita ao
          pagamento apenas dos direitos autorais.
        </p>
      </div>
      <figure
        className="w-full mx-auto mt-5 2xl:mt-0 max-h-[100px] shrink-0 max-w-[766px] opacity-0 animate-fade-in"
        style={{ animationDelay: "800ms" }}
      >
        <picture>
          <Image
            src={StreamingPlatformsImage}
            alt="Plataformas de Streaming que pagam direitos conexos: Kwai, Sua Música, Youtube, Globo Play, Palco MP3"
            className="w-full h-full group-hover:scale-[99%] transition-transform duration-300"
            width={766}
            height={100}
          />
        </picture>
        <figcaption className="text-center text-xs lg:text-sm text-gray-600">
          Plataformas que pagam conexo.
        </figcaption>
      </figure>
    </section>
  );
}
