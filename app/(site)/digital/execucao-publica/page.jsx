import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/shared/PageHeader";
import { SupportSection } from "@/components/shared/SupportSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import { StreamingRoyaltySection } from "@/components/digital/StreamingRoyaltySection";
import { StreamingPaymentPeriodSection } from "@/components/digital/StreamingPaymentPeriodSection";
import { HowToReceiveRoyaltiesSection } from "@/components/digital/HowToReceiveRoyaltiesSection";
import { PlatformValuesSection } from "@/components/digital/PlatformValuesSection";
import { ImportanceGeneratingISRCSection } from "@/components/digital/ImportanceGeneratingISRCSection";
import { HowToRegisterIsrcSection } from "@/components/digital/HowToRegisterIsrcSection";
import PlayIcon from "@/public/icons/play.svg";
import NetworkIcon from "@/public/icons/network.svg";
import EcadIcon from "@/public/icons/ecad.svg";
import LogoIcon from "@/public/icons/logo-green.svg";

export const metadata = {
  title: "SOCINPRO – Execução Pública",
  description:
    "Entenda a arrecadação de direitos autorais e conexos na era digital, com foco no streaming.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="O Ecad Paga Direitos do Streaming?"
        description={
          <>
            Entendendo a Arrecadação
            <br /> na Era Digital
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
            O streaming é uma das principais fontes de receita do ECAD.
            Atualmente, o ECAD possui contratos com as principais plataformas
            digitais (DSPs) do mercado, realizando a arrecadação de direitos
            autorais e conexos tanto no streaming de audiovisual quanto no de
            áudio.
          </p>
          <SectionTitle
            id="distribuicao-digital"
            style={{ animationDelay: "600ms" }}
          >
            Caminho do Digital na Execução Pública:
          </SectionTitle>
          <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:pl-12">
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
              <SectionIconItem
                label="Plataforma de Streaming"
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
                label="ECAD"
                image={
                  <Image
                    src={EcadIcon}
                    alt="Logo do Ecad"
                    className="h-16 w-16"
                  />
                }
                style={{ animationDelay: "800ms" }}
              />
              <ArrowRight
                className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
                style={{ animationDelay: "900ms" }}
              />
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
              <SectionIconItem
                label="SOCINPRO"
                image={
                  <Image
                    src={LogoIcon}
                    alt="Logo da Socinpro"
                    className="h-14 w-40"
                  />
                }
                style={{ animationDelay: "1000ms" }}
              />
              <ArrowRight
                className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
                style={{ animationDelay: "1100ms" }}
              />
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 xl:w-[calc(100%-48px)]">
              <SectionIconItem
                label="Distribuidora"
                icon={<Image src={NetworkIcon} alt="" className="h-6 w-6" />}
                style={{ animationDelay: "1200ms" }}
              />
              <span className="w-6 xl:hidden" aria-hidden="true" />
            </li>
          </ol>
        </section>
        <div className="space-y-16">
          <StreamingRoyaltySection />
          <StreamingPaymentPeriodSection />
        </div>
        <HowToReceiveRoyaltiesSection />
        <PlatformValuesSection />
        <ImportanceGeneratingISRCSection />
        <HowToRegisterIsrcSection />
        <SupportSection />
      </div>
    </>
  );
}
