import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import CatalogIcon from "@/public/icons/catalog.svg";
import DdexImage from "@/public/images/ddex.png";
import ArrowsIcon from "@/public/icons/arrows.svg";
import CreditCardIcon from "@/public/icons/credit-card.svg";
import ReportIcon from "@/public/icons/report.svg";
import PlayGearIcon from "@/public/icons/play-gear.svg";

export function BackstageSection() {
  return (
    <section
      className="px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="caminho-dos-royalties"
    >
      <div>
        <SectionHeader
          id="caminho-dos-royalties"
          title="Backstage: Como a Mágica Acontece"
          subtitle="O caminho completo dos royalties, do cadastro ao pagamento."
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
      <div className="flex justify-center gap-6 flex-wrap">
        <SectionIconItem
          title="1. Inclusão do Catálogo"
          description="O primeiro passo é a inclusão do seu catálogo na BACKOFFICE, uma empresa parceira que atua como vínculo operacional entre a Socinpro Digital e as plataformas.."
          image={<Image src={CatalogIcon} alt="" className="h-10 w-10" />}
          level={4}
          style={{ animationDelay: "600ms" }}
        />
        <SectionIconItem
          title="2. Recebimento de Metadados"
          description="A BACKOFFICE recebe os metadados (ISRC, autores, título) das plataformas de streaming."
          image={
            <Image src={DdexImage} alt="DDEX Logo" className="h-12 w-32" />
          }
          level={4}
          style={{ animationDelay: "700ms" }}
        />
        <SectionIconItem
          title="3. Cruzamento de Dados"
          description="As informações são cruzadas com os metadados, e se coincidirem, a BACKOFFICE cria a associação entre o ISRC e a obra, tornando possível calcular os royalties."
          icon={<Image src={ArrowsIcon} alt="" className="h-6 w-6" />}
          level={4}
          style={{ animationDelay: "800ms" }}
        />
        <SectionIconItem
          title="4. Notificação e Pagamento"
          description="A BACKOFFICE notifica a plataforma (DSP) sobre o valor a ser pago. A DSP faz o pagamento para a Socinpro Digital."
          icon={<Image src={CreditCardIcon} alt="" className="h-7 w-7" />}
          level={4}
          style={{ animationDelay: "900ms" }}
        />
        <SectionIconItem
          title="5. Relatórios e Repasse"
          description="A BACKOFFICE emite relatórios para a Socinpro Digital, que os trata, entrega para as Editoras e realiza o pagamento."
          icon={<Image src={ReportIcon} alt="" className="h-6 w-6" />}
          level={4}
          style={{ animationDelay: "1000ms" }}
        />
        <SectionIconItem
          title="6. Você Cria, a Gente Trabalha"
          description="O processo chega ao fim quando a Editora repassa os royalties para seus autores."
          icon={<Image src={PlayGearIcon} alt="" className="h-7 w-7" />}
          level={4}
          style={{ animationDelay: "1200ms" }}
        />
      </div>
    </section>
  );
}
