import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import { InfoText } from "@/components/shared/InfoText";
import MicIcon from "@/public/icons/mic.svg";
import AudioIcon from "@/public/icons/audio.svg";

export function RecordProducerRoleSection() {
  return (
    <section
      className="px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="papel-produtor-fonografico"
    >
      <div className="flex flex-col 2xl:flex-row">
        <div className="2xl:flex flex-col justify-center items-start w-full text-center 2xl:text-left 2xl:pr-12">
          <SectionHeader
            id="papel-produtor-fonografico"
            title="O Papel do Produtor Fonográfico"
            subtitle='Quem é o "dono da conta" e por que essa definição é crucial.'
            className="2xl:text-left"
            subtitleClassName="normal-case font-medium xl:text-3xl"
          />
          <p
            className="text-sm md:text-base opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            O produtor fonográfico é o responsável por financiar a gravação e
            pelo cadastro e distribuição do fonograma. Para as distribuidoras,
            ele é visto como o "dono da conta" – o selo ou a pessoa física que
            cria e gerencia uma conta na plataforma para realizar a
            distribuição.
          </p>
        </div>
        <ol className="mt-5 2xl:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 sm:pl-12 w-full">
          <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
            <SectionIconItem
              description="Prod. Fonográfico cria uma conta numa distribuidora"
              icon={<Image src={MicIcon} alt="" className="h-7 w-7" />}
              style={{ animationDelay: "600ms" }}
            />
            <ArrowRight
              className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
              style={{ animationDelay: "700ms" }}
            />
          </li>
          <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 lg:w-[calc(100%-48px)]">
            <SectionIconItem
              description="Faz o envio do áudio e dos metadados para a distribuidora"
              icon={<Image src={AudioIcon} alt="" className="h-6 w-6" />}
              style={{ animationDelay: "800ms" }}
            />
            <span className="w-6 xl:hidden" aria-hidden="true" />
          </li>
        </ol>
      </div>
      <InfoText style={{ animationDelay: "1000ms" }}>
        Saber quem é o responsável pela distribuição do fonograma é essencial
        para evitar problemas futuros, como a distribuição duplicada de músicas,
        conflitos de propriedade e, o mais comum, contas criadas por empresas ou
        pessoas que não são os verdadeiros produtores fonográficos, resultando
        no envio indevido de conteúdos.
      </InfoText>
    </section>
  );
}
