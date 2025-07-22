import Image from "next/image";

import { PageHeader } from "@/components/shared/PageHeader";
import { SupportSection } from "@/components/shared/SupportSection";
import Ecad from "@/public/icons/ecad.svg";

export const metadata = {
  title: "SOCINPRO – O papel do Ecad",
  description:
    "Entenda o papel do Ecad na arrecadação e distribuição de direitos autorais musicais.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Impulsionando a Música"
        description={
          <>
            O elo entre os criadores e os locais <br />
            onde a música acontece
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section
          className="flex flex-col lg:flex-row gap-4 lg:gap-8 px-[6%] md:px-[14%]"
          aria-labelledby="ecad-intro"
        >
          <h2 id="ecad-intro" className="sr-only">
            O papel do ECAD
          </h2>
          <div
            className="w-[200px] lg:w-[300px] m-auto shrink-0 opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <Image src={Ecad} alt="Logo do Ecad" />
          </div>
          <article
            className="text-sm md:text-base text-center lg:text-left opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            O Ecad é o elo que conecta compositores, intérpretes, músicos,
            editores e produtores fonográficos aos canais e espaços onde a
            música toca e emociona as pessoas.
            <br />
            <br />
            Administrado por sete associações de música (Abramus, Amar, Assim,
            Sbacem, Sicam, Socinpro e UBC), o Ecad atua como facilitador no
            processo de pagamento e distribuição dos direitos autorais de
            execução pública de músicas.
            <br />
            <br />A atuação do Ecad é amparada pela Lei Federal 9.610/98, com as
            alterações da Lei Federal 12.853/13. O Ecad realiza a cobrança de
            direitos autorais sempre que existe execução pública de músicas,
            como em emissoras de rádio e TV, shows, eventos, estabelecimentos
            comerciais, cinemas, plataformas de streaming, dentre outros canais
            e espaços.
            <br />
            <br />
            Após arrecadar esses valores, o Ecad faz a identificação das músicas
            tocadas e a posterior distribuição dos direitos autorais para as
            associações de música, que remuneram os compositores e demais
            artistas filiados a elas.
            <br />
            <br />
            <strong>
              O Ecad existe para manter a música viva, onde quer que ela
              aconteça.
            </strong>
          </article>
        </section>
        <SupportSection />
      </div>
    </>
  );
}
