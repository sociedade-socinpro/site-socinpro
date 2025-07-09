import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import MicImage from "@/public/images/mic_filter.png";

export function RequirementsSection() {
  return (
    <section
      className="flex flex-col-reverse lg:flex-row px-[6%] md:px-[14%] group"
      aria-labelledby="requisitos-gestao-individual"
    >
      <div className="lg:flex flex-col justify-center items-start w-full text-center lg:text-left lg:pr-8 xl:pr-12">
        <SectionHeader
          id="requisitos-gestao-individual"
          title="Ponto de Atenção: Requisitos Essenciais"
          subtitle="Antes de prosseguir, garanta que você cumpre estas duas condições."
          className="lg:text-left"
          subtitleClassName="normal-case font-medium xl:text-3xl"
        />
        <div
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>
              <p>
                Para exercer essa opção, é necessário formalizar a comunicação
                junto à SOCINPRO com, no mínimo, 48 horas de antecedência da
                execução pública.
              </p>
            </li>
            <li>
              <p>
                Ressaltamos que, por envolver o direito de outros titulares, a
                gestão individual exige a concordância e a documentação completa
                de todos os envolvidos na obra (autores, compositores,
                intérpretes, produtores fonográficos, entre outros).
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mb-5 lg:mb-0 max-h-[200px] max-w-[380px] lg:max-h-none lg:max-w-none mx-auto rounded-lg overflow-hidden">
        <Image
          src={MicImage}
          alt="Imagem de um microfone em um pedestal com filtro"
          className="w-full h-full opacity-0 animate-fade-in group-hover:scale-[102%] transition-transform"
          width={730}
          height={440}
        />
      </div>
    </section>
  );
}
