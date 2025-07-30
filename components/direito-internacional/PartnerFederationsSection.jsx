import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import CisacImage from "@/public/images/cisac.png";
import ScaprImage from "@/public/images/scapr.png";
import FilaieImage from "@/public/images/filaie.png";

export function PartnerFederationsSection() {
  return (
    <section
      className="text-center px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="nossas-confederacoes-parceiras"
    >
      <div>
        <SectionHeader
          id="nossas-confederacoes-parceiras"
          title="Nossas Confederações Parceiras"
          subtitle="Conexão global para proteger e valorizar sua arte!"
        />
        <p
          className="text-sm md:text-base opacity-0 animate-fade-in mt-4"
          style={{ animationDelay: "600ms" }}
        >
          A SOCINPRO faz parte de grandes federações internacionais que garantem
          que intérpretes, editores, músicos e compositores tenham seus direitos
          protegidos e recebam pelos usos de suas obras e performances,
          independentemente do país.
        </p>
      </div>
      <div className="flex justify-center gap-6 flex-wrap">
        <SectionIconItem
          title="CISAC"
          description={
            <>
              <span className="mb-3 block text-base lg:text-lg">
                Confederação Internacional das Sociedades de Autores e
                Compositores
              </span>
              É a maior rede mundial de sociedades autorais. Ela garante padrões
              globais para o cadastro e gestão de obras, facilitando a
              identificação e proteção dos direitos autorais no mundo inteiro.
            </>
          }
          image={
            <Image
              src={CisacImage}
              alt="Logo da CISAC"
              className="h-[75px] w-[75px]"
            />
          }
          level={4}
          style={{ animationDelay: "800ms" }}
        />
        <SectionIconItem
          title="SCAPR"
          description={
            <>
              <span className="mb-3 block text-base lg:text-lg">
                Conselho de Sociedades para Gestão de Direitos dos Artistas
              </span>
              Esta entidade une sociedades que cuidam dos direitos conexos. Ela
              cria ferramentas tecnológicas para garantir que os direitos sobre
              performances sejam rastreados e pagos corretamente.
            </>
          }
          image={
            <Image
              src={ScaprImage}
              alt="Logo da SCAPR"
              className="h-[75px] w-[215px]"
            />
          }
          level={4}
          style={{ animationDelay: "1000ms" }}
        />
        <SectionIconItem
          title="FILAIE"
          description={
            <>
              <span className="mb-3 block text-base lg:text-lg">
                Federação Ibero-Latino-Americana de Artistas Intérpretes ou
                Executantes
              </span>
              Atua na representação e fortalecimento dos direitos dos artistas
              na América Latina e na Península Ibérica, promovendo a cooperação
              regional e internacional.
            </>
          }
          image={
            <Image
              src={FilaieImage}
              alt="Logo da FILAIE"
              className="h-[75px] w-[215px]"
            />
          }
          level={4}
          style={{ animationDelay: "1200ms" }}
        />
      </div>
      <p
        className="text-sm md:text-base opacity-0 animate-fade-in xl:px-32"
        style={{ animationDelay: "1200ms" }}
      >
        Essas parcerias garantem que os valores arrecadados no exterior sejam
        repassados para a Socinpro e distribuídos a você.
      </p>
    </section>
  );
}
