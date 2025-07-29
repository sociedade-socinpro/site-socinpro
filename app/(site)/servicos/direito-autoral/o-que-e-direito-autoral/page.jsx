import { Target } from "lucide-react";

import { PageHeader } from "@/components/shared/PageHeader";
import { SupportSection } from "@/components/shared/SupportSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import { HowToCollectSection } from "@/components/servicos/direito-autoral/HowToCollectSection";
import { HowIsCollectionSection } from "@/components/servicos/direito-autoral/HowIsCollectionSection.jsx";
import { HowIsDistributionSection } from "@/components/servicos/direito-autoral/HowIsDistributionSection";
import { HowToRegisterSection } from "@/components/servicos/direito-autoral/HowToRegisterSection";

export const metadata = {
  title: "SOCINPRO – O que é Direito Autoral?",
  description:
    "Entenda o direito autoral musical: conceitos, tipos, registro, arrecadação e distribuição.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="O que é Direito Autoral?"
        description={
          <>
            Definições, conceitos e os diferentes <br />
            tipos de direitos aplicáveis à música
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section
          className="text-center px-[6%] md:px-[14%] space-y-10"
          aria-labelledby="o-que-e-direito-autoral"
        >
          <article
            className="text-sm md:text-base opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            Direito autoral é um conjunto de prerrogativas conferidas por lei à
            pessoa física ou jurídica criadora da obra intelectual, para que ela
            possa gozar dos benefícios morais e patrimoniais resultantes da
            exploração de suas criações. O direito autoral está regulamentado
            pela Lei de Direitos Autorais (Lei 9.610/98) e protege as relações
            entre o criador e quem utiliza suas criações artísticas, literárias
            ou científicas.
            <br />
            <br /> Uma música instrumental também é uma obra musical, mesmo não
            possuindo letra. O fonograma é a fixação de sons de uma
            interpretação de obra musical ou de outros sons. Cada faixa do CD,
            DVD ou LP é um fonograma distinto.
          </article>
          <SectionTitle
            id="o-que-e-direito-autoral"
            style={{ animationDelay: "800ms" }}
          >
            Existem diversos tipos de direitos relacionados à exploração das
            obras musicais e dos fonogramas:
          </SectionTitle>
          <div className="flex justify-center gap-6 flex-wrap">
            <SectionIconItem
              title="Direito de edição gráfica"
              description="relativo à exploração comercial de partituras musicais impressas."
              icon={<Target />}
              style={{ animationDelay: "800ms" }}
            />
            <SectionIconItem
              title="Direito fonomecânico"
              description="referente à exploração comercial de músicas gravadas em suporte material"
              icon={<Target />}
              style={{ animationDelay: "900ms" }}
            />
            <SectionIconItem
              title="Direito de representação pública"
              description="relaciona-se à exploração comercial de obras teatrais."
              icon={<Target />}
              style={{ animationDelay: "1000ms" }}
            />
            <SectionIconItem
              title="Direito de execução pública"
              description="referente à execução de obras musicais em locais de frequência coletiva. Esse direito é exercido coletivamente pelas sociedades de titulares de música representadas"
              icon={<Target />}
              style={{ animationDelay: "1100ms" }}
            />
            <SectionIconItem
              title="Direito de inclusão ou de sincronização"
              description="relativo à autorização para que determinada obra musical ou fonograma faça parte da trilha sonora de uma produção audiovisual."
              icon={<Target />}
              style={{ animationDelay: "1200ms" }}
            />
          </div>
        </section>
        <HowToCollectSection />
        <HowIsCollectionSection />
        <HowIsDistributionSection />
        <HowToRegisterSection />
        <SupportSection />
      </div>
    </>
  );
}
