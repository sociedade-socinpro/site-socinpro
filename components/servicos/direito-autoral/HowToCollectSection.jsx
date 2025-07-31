import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { InfoText } from "@/components/shared/InfoText";
import MicImage from "@/public/images/mic.png";

export function HowToCollectSection() {
  return (
    <section
      className="px-[6%] md:px-[14%] space-y-8 text-center"
      aria-labelledby="como-receber-o-direito-autoral"
    >
      <div className="flex flex-col-reverse 2xl:flex-row group">
        <div className="2xl:flex flex-col justify-center items-start w-full 2xl:text-left lg:pr-8 xl:pr-12">
          <SectionHeader
            id="como-receber-o-direito-autoral"
            title="Como Receber o Direito Autoral?"
            subtitle="O passo a passo para artistas: filiação, cadastro e como funciona a distribuição."
            className="2xl:text-left"
            subtitleClassName="normal-case font-medium xl:text-3xl"
          />
          <p
            className="text-sm md:text-base opacity-0 animate-fade-in mt-2"
            style={{ animationDelay: "800ms" }}
          >
            Antes de qualquer coisa, se você é compositor, intérprete, músico,
            produtor fonográfico ou editora musical, é muito importante
            filiar-se a uma das associações que compõem o ECAD. Após a filiação,
            você deve cadastrar as músicas de sua autoria ou que você interpreta
            em sua sociedade.
            <br />
            <br /> Mantenha sempre seus dados cadastrais e de suas obras
            atualizados. As sociedades enviam, periodicamente, as informações de
            seus associados ao ECAD, que possui um banco de dados para controlar
            as execuções das músicas em todo o Brasil.
            <br />
            <br /> A distribuição de direitos autorais provenientes da execução
            nas rádios é feita por amostragem e é regionalizada, o que significa
            que os valores arrecadados numa determinada região são distribuídos
            apenas aos titulares de música que tiverem suas obras executadas e
            captadas naquela região.
          </p>
        </div>
        <div className="w-full mb-5 2xl:mb-0 max-h-[200px] max-w-[380px] xl:max-h-[380px] xl:max-w-[650px] 2xl:max-h-none 2xl:max-w-none mx-auto rounded-xl overflow-hidden opacity-0 animate-fade-in">
          <Image
            src={MicImage}
            alt="Imagem de um microfone em um pedestal"
            className="w-full h-full group-hover:scale-[102%] transition-transform duration-300"
            width={730}
            height={440}
          />
        </div>
      </div>
      <InfoText style={{ animationDelay: "1000ms" }}>
        A execução da música, somente, não garante que o direito autoral será
        distribuído. Vários fatores são determinantes, como a captação da música
        pela amostragem, o envio de planilhas pelas rádios e a correta
        identificação da obra.
      </InfoText>
      <p
        className="text-sm md:text-base opacity-0 animate-fade-in xl:px-32"
        style={{ animationDelay: "1200ms" }}
      >
        Em geral, a distribuição dos direitos autorais é feita mensalmente,
        trimestralmente ou semestralmente, de acordo com o segmento. Os direitos
        referentes a shows são pagos mensalmente e somente aos autores das
        músicas interpretadas.
      </p>
    </section>
  );
}
