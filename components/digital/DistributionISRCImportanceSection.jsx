import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import ISRCImage from "@/public/images/isrc.png";
import ISRCCodeIcon from "@/public/icons/isrc-code.svg";

export function DistributionISRCImportanceSection() {
  return (
    <section
      className="flex flex-col items-center xl:flex-row px-[6%] md:px-[14%] group"
      aria-labelledby="importancia-isrc"
    >
      <div className="xl:flex flex-col justify-center items-start w-full text-center xl:text-left xl:pr-12 2xl:pr-20">
        <Image
          src={ISRCImage}
          alt="Logo do ISRC"
          className="mx-auto xl:mx-0 w-32 h-10 mb-3 opacity-0 animate-fade-in"
        />
        <SectionHeader
          id="importancia-isrc"
          title="A Importância do ISRC"
          subtitle="O código que garante a identidade e a titularidade da sua gravação."
          className="xl:text-left"
          subtitleClassName="normal-case font-medium xl:text-3xl"
        />
        <p
          className="text-sm md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          Quando falamos em distribuição digital, o ISRC é um dado fundamental.
          Além de identificar a master (a gravação original), o ISRC também
          assegura a titularidade ao produtor fonográfico. Por isso, é essencial
          que o produtor fonográfico gere o ISRC de cada fonograma em sua
          associação antes de realizar a distribuição.
        </p>
      </div>
      <figure
        className="w-full mx-auto mt-5 xl:mt-0 max-h-[168px] shrink-0 max-w-[540px] opacity-0 animate-fade-in"
        style={{ animationDelay: "800ms" }}
      >
        <picture>
          <Image
            src={ISRCCodeIcon}
            alt="Como é formado o código ISRC"
            className="w-full h-full group-hover:scale-[99%] transition-transform duration-300"
            width={528}
            height={168}
          />
        </picture>
        <figcaption className="sr-only">
          Como é formado o código ISRC: 12 caracteres alfanuméricos, sendo os
          dois primeiros o país de origem, os próximos três o IFPI -
          identificação do produtor fonográfico, os próximos dois o ano de
          gravação e os últimos cinco o número de série sequencial da gravação.
        </figcaption>
      </figure>
    </section>
  );
}
