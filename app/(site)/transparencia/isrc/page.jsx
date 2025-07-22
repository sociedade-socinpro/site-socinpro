import { Info } from "lucide-react";

import {
  anydeskSoftwareUrl,
  sisrcSoftwareUpdateUrl,
  sisrcSoftwareUrl,
} from "@/constants/socinprotInfo";

import { PageHeader } from "@/components/shared/PageHeader";
import { OpenDocumentCard } from "@/components/OpenDocumentCard";
import { SupportSection } from "@/components/shared/SupportSection";

export const metadata = {
  title: "SOCINPRO – Software SISRC e Suporte",
  description:
    "Gere seus códigos ISRC através do software SISRC da Socinpro e receba suporte técnico especializado.",
};

export default async function Page() {
  return (
    <>
      <PageHeader
        title="Software SISRC e Suporte"
        description={
          <>
            ISRC (International <br /> Standard Recording Code)
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section className="text-center px-[6%] md:px-[14%]">
          <p
            className="text-sm md:text-base opacity-0 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            O ISRC (International Standard Recording Code ou Código de Gravação
            Padrão Internacional) é o código único de identificação para
            gravações sonoras (fonogramas) e videoclipes musicais. Ele funciona
            como um &apos;RG&apos; da gravação, essencial para o controle e
            distribuição de direitos autorais. A Socinpro auxilia seus
            associados na obtenção do ISRC através do software SISRC.
          </p>
          <p
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 uppercase text-xs md:text-base font-normal text-teal opacity-0 animate-fade-in mt-8 border border-teal rounded-lg p-4"
            style={{ animationDelay: "1000ms" }}
          >
            <Info className="shrink-0" />
            <span>
              <strong>Para obter o ISRC através da Socinpro</strong>, é
              fundamental que você seja um artista filiado à nossa associação e
              que seu cadastro esteja completamente atualizado.
            </span>
          </p>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 w-fit mx-auto">
            <OpenDocumentCard
              title="Gerador de ISRC (SISRC)"
              description="O SISRC é um utilitário para a geração dos seus códigos ISRC. Faça o download do instalador completo."
              buttonText="Baixar instalador"
              href={sisrcSoftwareUrl}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "1000ms" }}
            />
            <OpenDocumentCard
              title="Atualizar SISRC (v2.0.06)"
              description="Se você já possui uma versão anterior do SISRC instalada, utilize este arquivo para atualizá-la."
              buttonText="Baixar atualização"
              href={sisrcSoftwareUpdateUrl}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "1200ms" }}
            />
            <OpenDocumentCard
              title="AnyDesk (Suporte Remoto)"
              description="Software utilizado por nossa equipe para fornecer suporte técnico remoto, caso necessário."
              buttonText="Baixar anydesk"
              href={anydeskSoftwareUrl}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "1400ms" }}
            />
          </div>
        </section>
        <SupportSection />
      </div>
    </>
  );
}
