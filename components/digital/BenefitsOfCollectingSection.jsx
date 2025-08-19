import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import MoneyIcon from "@/public/icons/money.svg";
import TimerIcon from "@/public/icons/timer.svg";
import EyeIcon from "@/public/icons/eye.svg";
import CallIcon from "@/public/icons/call.svg";
import GearsIcon from "@/public/icons/gears.svg";

export function BenefitsOfCollectingSection() {
  return (
    <section
      className="px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="beneficios-de-recolher"
    >
      <SectionHeader
        id="beneficios-de-recolher"
        title="Vantagens de Recolher com a Socinpro Digital"
        subtitle="Benefícios que fazem a diferença na sua gestão."
      />
      <div className="flex justify-center gap-6 flex-wrap">
        <SectionIconItem
          title="Economia"
          description="Nossa taxa de administração é de apenas 10%."
          icon={<Image src={MoneyIcon} alt="" className="h-7 w-7" />}
          style={{ animationDelay: "400ms" }}
        />
        <SectionIconItem
          title="Praticidade"
          description="Você só realiza o cadastro da obra uma vez, para execução pública e reprodução."
          icon={<Image src={TimerIcon} alt="" className="h-7 w-7" />}
          style={{ animationDelay: "500ms" }}
        />
        <SectionIconItem
          title="Transparência"
          description="Oferecemos relatórios detalhados das distribuições com contabilidade separada por autor."
          icon={<Image src={EyeIcon} alt="" className="h-7 w-7" />}
          style={{ animationDelay: "600ms" }}
        />
        <SectionIconItem
          title="Atendimento"
          description="Realizamos os cadastros via CWR no sistema da BACKOFFICE, atuamos na resolução de duplicidades e associação de retroativos."
          icon={<Image src={CallIcon} alt="" className="h-7 w-7" />}
          style={{ animationDelay: "700ms" }}
        />
        <SectionIconItem
          title="Operacional"
          description="Realizamos os cadastros via CWR no sistema da BACKOFFICE, atuamos na resolução de duplicidades e associação de retroativos."
          icon={<Image src={GearsIcon} alt="" className="h-7 w-7" />}
          style={{ animationDelay: "800ms" }}
        />
      </div>
    </section>
  );
}
