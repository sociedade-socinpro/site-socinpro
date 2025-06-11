import { receivableCreditsUrl } from "@/constants/socinprotInfo";

import { OpenDocumentCard } from "@/components/OpenDocumentCard";
import { SupportSection } from "@/components/shared/SupportSection";

export const metadata = {
  title: "SOCINPRO – Créditos Recebíveis",
  description: "Consulte seus créditos recebíveis na SOCINPRO",
};

export default async function Page() {
  return (
    <div className="py-12 space-y-24">
      <section className="uppercase font-bold text-center px-[6%] md:px-[14%]">
        <h2 className="text-xs md:text-base text-teal opacity-0 animate-fade-in">
          Comunicado especial aos associados
        </h2>
        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 mt-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Consulte Seus Créditos Recebíveis
        </h1>
        <p
          className="mt-4 text-sm normal-case font-normal md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          Informamos que os titulares constantes da relação de créditos
          recebíveis, que se encontra no link abaixo, referente ao ano de 2022.
          A Socinpro conclama aos seus assegurados que constam na referida
          relação, a fazer contato com o nosso setor financeiro pelo e-mail
          financeiro@socinpro.org.br e ou por telefone (21) 2220-3580, para que
          seja efetuado o pagamento.
        </p>
        <p
          className="text-xs md:text-base text-teal opacity-0 animate-fade-in mt-10"
          style={{ animationDelay: "1000ms" }}
        >
          ACESSE A LISTA NOMINAL ABAIXO:
        </p>
        <OpenDocumentCard
          title="LISTAGEM NONIMAL (PDF)"
          href={receivableCreditsUrl}
          className="opacity-0 animate-fade-in mt-10 mx-auto"
          style={{ animationDelay: "1000ms" }}
        />
        <p
          className="mt-6 sm:mx-[20%] text-sm normal-case font-normal md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "1200ms" }}
        >
          A Socinpro não solicita dados bancários por e-mail ou telefone de
          forma não requisitada. Certifique-se de que está em contato com nossos
          canais oficiais.
        </p>
      </section>
      <SupportSection />
    </div>
  );
}
