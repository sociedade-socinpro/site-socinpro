import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import ContractsExplorer from "../contracts-explorer/ContractsExplorer";
import BandImage from "@/public/images/band.png";

export function RelatedRightsSection({ contracts = [] }) {
  return (
    <section
      className="px-[6%] md:px-[14%] space-y-12"
      aria-labelledby="direito-conexo"
    >
      <div className="flex flex-col-reverse 2xl:flex-row group">
        <div className="2xl:flex flex-col justify-center items-start w-full 2xl:text-left lg:pr-8 xl:pr-12">
          <SectionHeader
            id="direito-conexo"
            title="Direito Conexo"
            subtitle="Proteção para intérpretes e músicos através da SCAPR e FILAIE."
            className="2xl:text-left"
            subtitleClassName="normal-case font-medium xl:text-3xl"
          />
          <p
            className="text-sm md:text-base opacity-0 animate-fade-in mt-2"
            style={{ animationDelay: "800ms" }}
          >
            A SOCINPRO é associada à SCAPR (Conselho de Sociedades para Gestão
            de Direitos dos Artistas), uma organização que reúne sociedades de
            gestão coletiva de direitos conexos em todo o mundo. Os direitos
            conexos garantem que intérpretes e músicos recebam remuneração pelo
            uso de suas performances e gravações.
            <br />
            <br /> Por meio de sistemas globais como o IPD (International
            Performer Database), os titulares têm seus direitos reconhecidos e
            protegidos internacionalmente. Através do sistema do IPD é gerado o
            IPN (International Performer Number), um identificador único
            atribuído a artistas para garantir a distribuição justa de seus
            royalties.
            <br />
            <br /> Além disso, a SOCINPRO também integra a FILAIE (Federação
            Ibero-Latino-Americana de Artistas Intérpretes e Executantes), que
            atua na representação e fortalecimento dos direitos dos artistas na
            América Latina e na Península Ibérica.
          </p>
        </div>
        <div className="w-full mb-5 2xl:mb-0 max-h-[200px] max-w-[380px] xl:max-h-[400px] xl:max-w-[600px] 2xl:max-h-none 2xl:max-w-none mx-auto rounded-xl overflow-hidden opacity-0 animate-fade-in">
          <Image
            src={BandImage}
            alt="Imagem de uma banda tocando"
            className="w-full h-full group-hover:scale-[102%] transition-transform duration-300"
            width={655}
            height={444}
            loading="lazy"
          />
        </div>
      </div>
      <h3 className="text-center text-xs md:text-base text-teal opacity-0 animate-fade-in font-bold uppercase">
        REPRESENTAÇÃO CONEXO – SOCINPRO NO MUNDO
      </h3>
      <ContractsExplorer
        contracts={contracts}
        className="opacity-0 animate-fade-in"
      />
    </section>
  );
}
