import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import RevenueSplitImage from "@/public/images/revenue_split.png";
import RevenueSplitMobileImage from "@/public/images/revenue_split_mobile.png";
import MicIcon from "@/public/icons/mic.svg";

export function StreamingRevenueSplitSection() {
  return (
    <section
      className="px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="divisao-receita-streaming"
    >
      <div>
        <SectionHeader
          id="divisao-receita-streaming"
          title="Responsabilidades na Divisão da Receita"
          subtitle="Entendendo a divisão do bolo no streaming."
        />
        <p
          className="text-center text-sm md:text-base opacity-0 animate-fade-in mt-4 2xl:px-32"
          style={{ animationDelay: "600ms" }}
        >
          Dentro do streaming, os direitos conexos representam a maior parte da
          receita gerada (58%), e esse percentual é justamente a parte recolhida
          e repassada pelas distribuidoras ao produtor fonográfico.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center group">
        <figure
          className="w-full mx-auto mb-10 xl:mb-0 max-h-[400px] shrink-0 max-w-[580px] opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <picture className="hidden xl:block">
            <Image
              src={RevenueSplitImage}
              alt="Divisão de receita no streaming"
              className="w-full h-full group-hover:scale-[101%] transition-transform duration-300"
              width={611}
              height={434}
            />
          </picture>
          <picture className="xl:hidden">
            <Image
              src={RevenueSplitMobileImage}
              alt="Divisão de receita no streaming"
              className="w-full h-full group-hover:scale-[101%] transition-transform duration-300"
              width={611}
              height={434}
            />
          </picture>
          <figcaption className="sr-only">
            Gráfico em pizza mostrando a divisão de receita gerada no streaming:
            58% para direitos conexos, 30% lucro das plataformas, 9% para
            direitos autorais e 3% Exec. Pública.
          </figcaption>
        </figure>
        <SectionIconItem
          description="O Produtor Fonográfico pode receber os royalties e repassar para os intérpretes, ou pode já dentro da plataforma da sua distribuidora fazer o “share-out” e dividir a receita, assim o intérprete recebe seus royalties direto na sua conta."
          icon={<Image src={MicIcon} alt="" className="h-7 w-7" />}
          className="md:max-w-none lg:max-w-[620px] xl:max-w-none"
          style={{ animationDelay: "1000ms" }}
        />
      </div>
    </section>
  );
}
