import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/shared/PageHeader";
import { SupportSection } from "@/components/shared/SupportSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import { RoyaltyPaymentsSection } from "@/components/digital/RoyaltyPaymentsSection";
import { PublisherPartnershipSection } from "@/components/digital/PublisherPartnershipSection";
import { BenefitsOfCollectingSection } from "@/components/digital/BenefitsOfCollectingSection";
import { NextStepsSection } from "@/components/digital/NextStepsSection";
import { BackstageSection } from "@/components/digital/BackstageSection";
import PlayIcon from "@/public/icons/play.svg";
import SocinDigitalIcon from "@/public/icons/socin-digital.svg";
import NetworkIcon from "@/public/icons/network.svg";
import UserStarIcon from "@/public/icons/user-star.svg";

export const metadata = {
  title: "SOCINPRO – Direito Autoral de Reprodução",
  description:
    "Entenda o direito de Reprodução Digital e como ele garante seus royalties.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="O que é o Direito Autoral de Reprodução?"
        description={
          <>
            Entenda o direito de reprodução Digital
            <br /> e como ele garante seus royalties.
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section
          className="text-center px-[6%] md:px-[14%] space-y-10"
          aria-labelledby="reproducao-digital"
        >
          <p
            className="text-sm md:text-base opacity-0 animate-fade-in 2xl:px-32"
            style={{ animationDelay: "400ms" }}
          >
            Também conhecido como Fonomecânico Digital, trata-se de uma
            modalidade de Direito Autoral que garante o pagamento de royalties
            para Editoras e autores por cada download ou reprodução em
            plataformas de streaming. Cada vez que uma música é tocada, o autor
            tem direito a receber royalties por essas execuções.
          </p>
          <SectionTitle
            id="reproducao-digital"
            style={{ animationDelay: "600ms" }}
          >
            Como o Autor Recebe Este Direito?
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
                label="Socinpro Digital"
                image={
                  <div className="h-12 w-full relative">
                    <Image src={SocinDigitalIcon} alt="" fill />
                  </div>
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
                label="Editora"
                icon={<Image src={NetworkIcon} alt="" className="h-7 w-7" />}
                style={{ animationDelay: "1000ms" }}
              />
              <ArrowRight
                className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
                style={{ animationDelay: "1100ms" }}
              />
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 xl:w-[calc(100%-48px)]">
              <SectionIconItem
                label="Autor"
                icon={<Image src={UserStarIcon} alt="" className="h-6 w-6" />}
                style={{ animationDelay: "1200ms" }}
              />
              <span className="w-6 xl:hidden" aria-hidden="true" />
            </li>
          </ol>
          <p
            className="text-sm md:text-base opacity-0 animate-fade-in 2xl:px-32"
            style={{ animationDelay: "1200ms" }}
          >
            Para receber, o autor precisa celebrar um contrato com alguma
            Editora que ofereça esse serviço. Essa Editora, por sua vez, precisa
            estar filiada na UBEM ou na SOCINPRO DIGITAL para o recolhimento e
            distribuição dos royalties.
          </p>
        </section>
        <RoyaltyPaymentsSection />
        <PublisherPartnershipSection />
        <BenefitsOfCollectingSection />
        <NextStepsSection />
        <BackstageSection />
        <SupportSection />
      </div>
    </>
  );
}
