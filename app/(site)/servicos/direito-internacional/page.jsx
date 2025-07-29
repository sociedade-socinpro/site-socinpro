import Image from "next/image";

import { fetcher } from "@/utils/fetcher";

import { PageHeader } from "@/components/shared/PageHeader";
import { SupportSection } from "@/components/shared/SupportSection";
import ContractsExplorer from "@/components/contracts-explorer/ContractsExplorer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { RelatedRightsSection } from "@/components/direito-internacional/RelatedRightsSection";
import { PartnerFederationsSection } from "@/components/direito-internacional/PartnerFederationsSection";
import { InternationalConventionsSection } from "@/components/direito-internacional/InternationalConventionsSection";
import HeadphoneImage from "@/public/images/headphone.png";

export const metadata = {
  title: "SOCINPRO – Direito Internacional",
  description:
    "Explore como a SOCINPRO representa os direitos autorais e conexos internacionais e seus contratos com sociedades estrangeiras.",
};

export default async function Page() {
  const contracts =
    (await fetcher(
      "/sipa-documentacao/v1/site/publico/contrato-internacional/listar-por-tipo-sociedade?tipoSociedade=AUTORAL"
    )) || [];

  const relatedContracts =
    (await fetcher(
      "/sipa-documentacao/v1/site/publico/contrato-internacional/listar-por-tipo-sociedade?tipoSociedade=CONEXO"
    )) || [];

  return (
    <>
      <PageHeader
        title="Direito Autoral Internacional"
        description={
          <>
            Sua representação global
            <br />
            através da CISAC
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section
          aria-labelledby="contracts-explorer"
          className="mx-[6%] md:mx-[14%] space-y-12"
        >
          <div className="group flex flex-col-reverse 2xl:flex-row">
            <div
              className="2xl:flex flex-col justify-center items-start w-full 2xl:text-left lg:pr-8 xl:pr-12 opacity-0 animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              <p className="text-sm md:text-base">
                A SOCINPRO é associada à CISAC (Confederação de Sociedades de
                Autores e Compositores), uma organização global dedicada à
                proteção dos direitos de criadores em todo o mundo. Graças a
                essa parceria, a SOCINPRO está representada em mais de 60
                países, incluindo Portugal, Espanha, Itália, Japão e Alemanha,
                entre outros.
                <br />
                <br /> A CISAC também é responsável pela criação dos códigos IPI
                (Interested Party Information) e CAE. O sistema e o banco de
                dados do IPI garantem a identificação precisa e padronizada de
                titulares de direitos autorais em nível global. O código IPI, um
                identificador global único, garante que autores, compositores e
                editoras sejam reconhecidos com precisão nos sistemas
                internacionais, contribuindo para uma distribuição mais
                eficiente e justa da remuneração.
                <br />
                <br /> É fundamental que todos os autores e editora de uma obra
                musical estejam devidamente identificados por meio desses
                códigos. Somente após a identificação de todos os titulares, a
                obra recebe seu código exclusivo de identificação, o ISWC
                (International Standard Work Code). Uma vez atribuído o ISWC, a
                obra passa a ser reconhecida globalmente por meio do CisNET,
                garantindo que os royalties sejam devidamente enviados para a
                SOCINPRO.
              </p>
            </div>
            <div
              className="w-full mb-5 2xl:mb-0 max-h-[260px] max-w-[380px] xl:max-h-[400px] xl:max-w-[600px] 2xl:max-h-none 2xl:max-w-none mx-auto rounded-xl overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <Image
                src={HeadphoneImage}
                alt="Imagem de um fone de ouvido"
                className="w-full h-full group-hover:scale-[102%] transition-transform duration-300"
                width={654}
                height={444}
                priority
              />
            </div>
          </div>
          <SectionTitle id="contracts-explorer" className="text-center">
            REPRESENTAÇÃO AUTORAL – SOCINPRO NO MUNDO
          </SectionTitle>
          <ContractsExplorer
            contracts={contracts}
            className="opacity-0 animate-fade-in"
          />
        </section>
        <RelatedRightsSection contracts={relatedContracts} />
        <PartnerFederationsSection />
        <InternationalConventionsSection />
        <SupportSection />
      </div>
    </>
  );
}
