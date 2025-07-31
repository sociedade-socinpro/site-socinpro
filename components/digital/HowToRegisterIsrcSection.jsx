import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { InfoText } from "@/components/shared/InfoText";
import RegisterIsrcImage from "@/public/images/register_isrc.png";

export function HowToRegisterIsrcSection() {
  return (
    <section
      className="px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="como-cadastrar-isrc"
    >
      <div className="flex flex-col items-center 2xl:flex-row group">
        <div className="2xl:flex flex-col justify-center items-start w-full text-center 2xl:text-left 2xl:pr-12">
          <SectionHeader
            id="como-cadastrar-isrc"
            title="Como Cadastrar um ISRC Gerado pela Distribuidora"
            subtitle="Garanta seus royalties de execução pública mesmo quando o ISRC não foi gerado na Socinpro."
            className="2xl:text-left"
            subtitleClassName="normal-case font-medium xl:text-3xl"
          />
          <p
            className="text-sm md:text-base opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            O Portal do Associado da SOCINPRO está preparado para receber o ISRC
            gerado pela sua distribuidora. Siga os passos no nosso cadastro de
            fonogramas:
          </p>
        </div>
        <figure
          className="w-full mx-auto mt-5 2xl:mt-0 opacity-0 animate-fade-in space-y-4"
          style={{ animationDelay: "800ms" }}
        >
          <picture className="max-h-[45px] max-w-[680px]">
            <Image
              src={RegisterIsrcImage}
              alt="Passos para cadastrar ISRC gerado pela distribuidora no Portal do Associado Socinpro"
              className="w-full h-auto group-hover:scale-[99%] transition-transform duration-300"
              width={680}
              height={45}
            />
          </picture>
          <figcaption className="text-center text-xs lg:text-sm text-gray-600">
            <span className="sr-only">Passos no cadastro de fonogramas</span>
            <ol className="list-decimal list-inside">
              <li>
                <strong>Marque a opção</strong> &quot;ISRC Agregadora&quot; como
                &quot;Sim&quot;.
              </li>
              <li>
                <strong>Selecione a distribuidora</strong> que gerou o ISRC na
                lista.
              </li>
              <li>
                <strong>Insira o código de ISRC</strong> fornecido pela
                distribuidora.
              </li>
            </ol>
          </figcaption>
        </figure>
      </div>
      <InfoText style={{ animationDelay: "1000ms" }}>
        Assim você garante que o ISRC gerado pela distribuidora esteja no banco
        de dados do ECAD e seus direitos sejam pagos.
      </InfoText>
    </section>
  );
}
