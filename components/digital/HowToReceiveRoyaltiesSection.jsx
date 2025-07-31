import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import { InfoText } from "../shared/InfoText";
import FormCheckIcon from "@/public/icons/form-check.svg";
import ISRCImage from "@/public/images/isrc.png";
import EcadIcon from "@/public/icons/ecad.svg";
import IdeaCheckIcon from "@/public/icons/idea-check.svg";

export function HowToReceiveRoyaltiesSection() {
  return (
    <section
      className="px-[6%] md:px-[14%] space-y-10"
      aria-labelledby="como-receber-direitos-ecad"
    >
      <div>
        <SectionHeader
          id="como-receber-direitos-ecad"
          title="passos essenciais para garantir seu pagamento"
          subtitle="Como Receber Direitos do Ecad (Sendo Autor)"
        />
        <p
          className="text-center text-sm md:text-base opacity-0 animate-fade-in mt-4"
          style={{ animationDelay: "600ms" }}
        >
          Siga os passos essenciais, do cadastro da obra à liberação no Ecad,
          para garantir seu pagamento.
        </p>
      </div>
      <div className="flex justify-center gap-6 flex-wrap">
        <SectionIconItem
          title="1. Cadastre a Obra"
          description="O primeiro passo é realizar o cadastro da obra no nosso Portal do Associado. Se a obra já existe, garanta que ela esteja corretamente inserida no cadastro do ISRC que será distribuído."
          icon={<Image src={FormCheckIcon} alt="" className="h-7 w-7" />}
          style={{ animationDelay: "600ms" }}
        />
        <SectionIconItem
          title="2. Associe a Obra ao ISRC:"
          description="Para garantir o recebimento, o cadastro da sua obra precisa estar associado ao código ISRC que foi distribuído."
          image={
            <Image src={ISRCImage} alt="Logo do ISRC" className="w-32 h-10" />
          }
          style={{ animationDelay: "700ms" }}
        />
        <SectionIconItem
          title="3. Verifique o Status no Ecad"
          description="O cadastro da obra precisa estar liberado no sistema do ECAD, sem bloqueios ou conflitos de duplicidade. Caso contrário, o dinheiro é arrecadado, mas não é repassado até que a pendência seja resolvida."
          image={
            <Image src={EcadIcon} alt="Logo do Ecad" className="w-16 h-16" />
          }
          style={{ animationDelay: "800ms" }}
        />
        <SectionIconItem
          title="4. Garanta a Execução"
          description='No ambiente digital, o lema é "grandes números, pequenas cifras". Devido ao enorme volume de dados, sua música precisa ser bem executada para gerar um bom número de royalties.'
          icon={<Image src={IdeaCheckIcon} alt="" className="h-7 w-7" />}
          style={{ animationDelay: "900ms" }}
        />
      </div>
      <InfoText style={{ animationDelay: "1100ms" }}>
        Se você possui contrato com alguma Editora, ela é a responsável pelo
        cadastro da obra.
      </InfoText>
    </section>
  );
}
