import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/shared/PageHeader";
import { SupportSection } from "@/components/shared/SupportSection";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import { InfoText } from "@/components/shared/InfoText";
import { RecordProducerRoleSection } from "@/components/digital/RecordProducerRoleSection";
import { StreamingRevenueSplitSection } from "@/components/digital/StreamingRevenueSplitSection";
import { DistributionISRCImportanceSection } from "@/components/digital/DistributionISRCImportanceSection";
import { MetadataRelevanceSection } from "@/components/digital/MetadataRelevanceSection";
import MicIcon from "@/public/icons/mic.svg";
import NetworkIcon from "@/public/icons/network.svg";
import PlayIcon from "@/public/icons/play.svg";

export const metadata = {
  title: "SOCINPRO - Distribuição Digital",
  description:
    "Entenda como sua música chega às plataformas de streaming e o papel das distribuidoras.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Como sua Música Chega às Plataformas?"
        description={
          <>
            O papel fundamental das distribuidoras
            <br /> no ecossistema do streaming.
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section
          className="text-center px-[6%] md:px-[14%] space-y-10"
          aria-labelledby="distribuicao-digital"
        >
          <p
            className="text-sm md:text-base opacity-0 animate-fade-in 2xl:px-32"
            style={{ animationDelay: "400ms" }}
          >
            A distribuição de música nas plataformas de streaming (como Spotify,
            Deezer, etc.) é feita através das distribuidoras. Essas empresas são
            responsáveis por fazer o upload do seu álbum ou single,
            disponibilizando-o para o mundo todo.
          </p>
          <h2 className="sr-only" id="distribuicao-digital">
            O papel das distribuidoras no ecossistema do streaming
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 sm:pl-12">
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
              <SectionIconItem
                label="Prod. Fonográfico"
                icon={<Image src={MicIcon} alt="" className="h-7 w-7" />}
                style={{ animationDelay: "600ms" }}
              />
              <ArrowRight
                className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
                style={{ animationDelay: "700ms" }}
              />
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
              <SectionIconItem
                label="Distribuidora"
                icon={<Image src={NetworkIcon} alt="" className="h-7 w-7" />}
                style={{ animationDelay: "800ms" }}
              />
              <ArrowRight
                className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
                style={{ animationDelay: "900ms" }}
              />
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 lg:w-[calc(100%-48px)]">
              <SectionIconItem
                label="Plataforma de Streaming"
                icon={<Image src={PlayIcon} alt="" className="h-7 w-7" />}
                style={{ animationDelay: "1200ms" }}
              />
              <span className="w-6 xl:hidden" aria-hidden="true" />
            </li>
          </ol>
          <h3
            className="text-xs md:text-base text-teal opacity-0 animate-fade-in font-bold uppercase"
            style={{ animationDelay: "600ms" }}
          >
            A distribuidora é responsável pelo pagamento dos royalties para o
            produtor fonográfico. O processo funciona assim:
          </h3>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 sm:pl-12">
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
              <SectionIconItem
                label="A faixa gera royalties por play"
                icon={<Image src={PlayIcon} alt="" className="h-7 w-7" />}
                style={{ animationDelay: "600ms" }}
              />
              <ArrowRight
                className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
                style={{ animationDelay: "700ms" }}
              />
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
              <SectionIconItem
                label="A distribuidora desconta a taxa de administração"
                icon={<Image src={NetworkIcon} alt="" className="h-7 w-7" />}
                style={{ animationDelay: "800ms" }}
              />
              <ArrowRight
                className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
                style={{ animationDelay: "900ms" }}
              />
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 lg:w-[calc(100%-48px)]">
              <SectionIconItem
                label="E paga para o produtor fonográfico"
                icon={<Image src={MicIcon} alt="" className="h-7 w-7" />}
                style={{ animationDelay: "1200ms" }}
              />
              <span className="w-6 xl:hidden" aria-hidden="true" />
            </li>
          </ol>
          <InfoText style={{ animationDelay: "1200ms" }}>
            <span>
              E o Intérprete?
              <span className="block mt-2 font-normal normal-case text-black">
                O prod. fonográfico reparte os royalties com o intérprete,
                algumas distribuidoras já colocam a opção de “share out” na
                própria plataforma, assim o intérprete recebe seus royalties
                direto na conta!
              </span>
            </span>
          </InfoText>
        </section>
        <RecordProducerRoleSection />
        <StreamingRevenueSplitSection />
        <DistributionISRCImportanceSection />
        <MetadataRelevanceSection />
        <SupportSection />
      </div>
    </>
  );
}
