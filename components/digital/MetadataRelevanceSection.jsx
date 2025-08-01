import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import DdexImage from "@/public/images/ddex.png";

export function MetadataRelevanceSection() {
  return (
    <section
      className="flex flex-col xl:flex-row items-center px-[6%] md:px-[14%] group"
      aria-labelledby="relevancia-metadados"
    >
      <div className="w-full mb-5 xl:mb-0 mx-auto rounded-lg overflow-hidden opacity-0 animate-fade-in">
        <Image
          src={DdexImage}
          alt="DDEX Logo"
          className="max-h-[90px] max-w-[200px] xl:max-h-[143px] xl:max-w-[380px] mx-auto group-hover:scale-[101%] transition-transform duration-300"
          width={380}
          height={143}
        />
      </div>
      <div
        className="xl:flex flex-col justify-center items-start w-full text-center xl:text-left xl:pl-12 opacity-0 animate-fade-in"
        style={{ animationDelay: "400ms" }}
      >
        <SectionHeader
          id="relevancia-metadados"
          title="A Relevância dos Metadados"
          subtitle="As informações que dão contexto e garantem a correta atribuição dos direitos."
          className="xl:text-left"
          subtitleClassName="normal-case font-medium xl:text-3xl"
        />
        <p
          className="text-sm md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          Os metadados são informações essenciais de uma gravação, responsáveis
          por detalhar aspectos autorais como os autores da obra, a existência
          de editoras, gravadoras e o nome dos intérpretes. Embora algumas
          dessas informações já estejam presentes no ISRC, outras não estão. Por
          isso, é fundamental preencher os metadados corretamente, garantindo
          que todas as informações relevantes sejam incluídas.
        </p>
      </div>
    </section>
  );
}
