import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import MicIcon from "@/public/icons/mic.svg";
import NetworkIcon from "@/public/icons/network.svg";
import PlayIcon from "@/public/icons/play.svg";

export function NextStepsSection() {
  return (
    <section
      className="px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="proximos-passos"
    >
      <div>
        <SectionHeader
          id="proximos-passos"
          title="Assinei com a Socinpro Digital. E agora?"
          subtitle="Os próximos passos após a formalização da parceria."
        />
        <p
          className="text-center text-sm md:text-base opacity-0 animate-fade-in mt-4 2xl:px-32"
          style={{ animationDelay: "600ms" }}
        >
          Agora, o catálogo da sua Editora será incluído no sistema da
          BACKOFFICE via arquivo CWR. Solicitaremos à Editora uma lista com as
          obras que já foram distribuídas e faremos uma busca por possíveis
          royalties retidos. A relação SOCINPRO x EDITORA é uma parceria, e
          contamos com a sua colaboração para a melhor arrecadação.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 sm:justify-items-center xl:justify-items-start xl:pl-12">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
          <SectionIconItem
            title="1. Envio sem ISRC"
            description="O artista envia a música para a distribuidora sem um ISRC previamente gerado."
            icon={<Image src={MicIcon} alt="" className="h-7 w-7" />}
            level={4}
            className="w-full lg:min-h-full"
            style={{ animationDelay: "600ms" }}
          />
          <ArrowRight
            className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
            style={{ animationDelay: "700ms" }}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
          <SectionIconItem
            title="2. Geração do ISRC"
            description="A distribuidora gera um novo código ISRC para a faixa."
            icon={<Image src={NetworkIcon} alt="" className="h-7 w-7" />}
            level={4}
            className="w-full lg:min-h-full"
            style={{ animationDelay: "800ms" }}
          />
          <ArrowRight
            className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
            style={{ animationDelay: "900ms" }}
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 sm:col-span-2 xl:col-span-1 xl:w-[calc(100%-48px)]">
          <SectionIconItem
            title="3. Distribuição"
            description="A música é distribuída e fica disponível nas plataformas de streaming."
            icon={<Image src={PlayIcon} alt="" className="h-7 w-7" />}
            level={4}
            className="w-full lg:min-h-full"
            style={{ animationDelay: "1000ms" }}
          />
          <span className="w-6 xl:hidden" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
