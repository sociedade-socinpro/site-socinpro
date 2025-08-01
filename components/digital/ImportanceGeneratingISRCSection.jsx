import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import MicIcon from "@/public/icons/mic.svg";
import PlayIcon from "@/public/icons/play.svg";
import MoneyBlockIcon from "@/public/icons/money-block.svg";
import LogoIcon from "@/public/icons/logo-green.svg";
import EcadIcon from "@/public/icons/ecad.svg";
import IsrcFlowSimpleIcon from "@/public/icons/isrc-flow-simple.svg";
import IsrcFlowIcon from "@/public/icons/isrc-flow.svg";
import MoneyIcon from "@/public/icons/money.svg";

export function ImportanceGeneratingISRCSection() {
  return (
    <section
      className="px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="importancia-gerar-isrc"
    >
      <div>
        <SectionHeader
          id="importancia-gerar-isrc"
          title="A Importância de Gerar o ISRC pela Socinpro"
          subtitle="Por que o controle sobre o ISRC é fundamental para a execução pública."
        />
        <p
          className="text-center text-sm md:text-base opacity-0 animate-fade-in mt-4 2xl:px-32"
          style={{ animationDelay: "600ms" }}
        >
          Hoje, é possível distribuir uma música deixando que a própria
          distribuidora gere o ISRC. No entanto, quando isso acontece e o código
          não é informado à sua associação, você perde a distribuição da
          execução pública.
        </p>
      </div>
      <div className="space-y-6">
        <h3
          className="text-center text-xs md:text-base text-teal opacity-0 animate-fade-in font-bold uppercase"
          style={{ animationDelay: "600ms" }}
        >
          O Caminho que Gera Perdas (Problemático):
        </h3>
        <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 sm:justify-items-center xl:justify-items-start xl:pl-12">
          <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
            <SectionIconItem
              title="1. Envio sem ISRC"
              description="O artista envia a música para a distribuidora sem um ISRC previamente gerado."
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
              title="2. Geração do ISRC"
              description="A distribuidora gera um novo código ISRC para a faixa."
              image={
                <Image src={IsrcFlowSimpleIcon} alt="" className="h-12 w-44" />
              }
              style={{ animationDelay: "800ms" }}
            />
            <ArrowRight
              className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
              style={{ animationDelay: "900ms" }}
            />
          </li>
          <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 sm:col-span-2 xl:col-span-1 xl:w-[calc(100%-48px)]">
            <SectionIconItem
              title="3. Distribuição"
              description="A música é distribuída e fica disponível nas plataformas de streaming."
              icon={<Image src={PlayIcon} alt="" className="h-7 w-7" />}
              style={{ animationDelay: "1000ms" }}
            />
            <span className="w-6 xl:hidden" aria-hidden="true" />
          </li>
        </ol>
        <SectionIconItem
          title="Resultado: Perda de Direitos de Execução Pública"
          description="Como o ISRC não foi informado à associação, o Ecad não tem conhecimento sobre a titularidade da gravação e, portanto, não há pagamento dos direitos de execução pública."
          icon={<Image src={MoneyBlockIcon} alt="" className="h-7 w-7" />}
          className="md:max-w-full lg:max-w-full xl:max-w-full border border-teal"
          style={{ animationDelay: "1000ms" }}
        />
      </div>
      <div className="space-y-6">
        <h3
          className="text-center text-xs md:text-base text-teal opacity-0 animate-fade-in font-bold uppercase"
          style={{ animationDelay: "600ms" }}
        >
          O Caminho Completo (Recomendado):
        </h3>
        <ol className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 sm:justify-items-center xl:justify-items-start 2xl:pl-12">
          <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
            <SectionIconItem
              title="1. Cadastro"
              description="O artista cadastra o fonograma no portal da Socinpro e gera o código ISRC."
              image={
                <Image
                  src={LogoIcon}
                  alt="Logo da Socinpro"
                  className="h-14 w-40"
                />
              }
              style={{ animationDelay: "600ms" }}
            />
            <ArrowRight
              className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
              style={{ animationDelay: "700ms" }}
            />
          </li>
          <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
            <SectionIconItem
              title="2. Registro no Ecad"
              description="A Socinpro registra o ISRC e a titularidade da gravação no banco de dados do Ecad."
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
              title="3. Envio com ISRC"
              description="O artista envia a música para a distribuidora, informando o ISRC já existente."
              image={<Image src={IsrcFlowIcon} alt="" className="h-14 w-56" />}
              style={{ animationDelay: "1000ms" }}
            />
            <ArrowRight
              className="shrink-0 transform sm:rotate-0 rotate-90 opacity-0 animate-fade-in w-6"
              style={{ animationDelay: "1100ms" }}
            />
          </li>
          <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 xl:w-[calc(100%-48px)]">
            <SectionIconItem
              title="4. Distribuição"
              description="A música é distribuída nas plataformas, já com seu ISRC oficial."
              icon={<Image src={PlayIcon} alt="" className="h-7 w-7" />}
              style={{ animationDelay: "1200ms" }}
            />
            <span className="w-6 xl:hidden" aria-hidden="true" />
          </li>
        </ol>
        <SectionIconItem
          title="Resultado: Pagamento Garantido"
          description={
            <span>
              Quando a música toca, o Ecad identifica o ISRC, reconhece os
              titulares e realiza o <strong>pagamento correto</strong> dos
              direitos de execução pública através da Socinpro.
            </span>
          }
          icon={<Image src={MoneyIcon} alt="" className="h-7 w-7" />}
          className="md:max-w-full lg:max-w-full xl:max-w-full border border-teal"
          style={{ animationDelay: "1300ms" }}
        />
      </div>
    </section>
  );
}
