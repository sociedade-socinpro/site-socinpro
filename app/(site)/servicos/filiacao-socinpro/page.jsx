import { Target } from "lucide-react";

import { membershipRequestFormUrl } from "@/constants/socinprotInfo";

import { PageHeader } from "@/components/shared/PageHeader";
import { SupportSection } from "@/components/shared/SupportSection";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { InfoText } from "@/components/shared/InfoText";

export const metadata = {
  title: "SOCINPRO – Filição Socinpro",
  description:
    "Faça Parte da Nossa Comunidade de Criadores e Proteja Seus Direitos Autorais em apenas 4 passos",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Filiação socinpro"
        description={
          <>
            Faça Parte da Nossa <br />
            Comunidade de Criadores
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section
          className="text-center px-[6%] md:px-[14%] space-y-10"
          aria-labelledby="filacao-socinpro"
        >
          <p className="text-sm md:text-base opacity-0 animate-fade-in">
            Filiar-se à Socinpro é o passo fundamental para garantir que seu
            trabalho seja reconhecido e remunerado de forma justa. Nossa equipe
            está pronta para cuidar dos seus direitos autorais, permitindo que
            você se concentre no mais importante: a sua arte.
          </p>
          <SectionHeader
            id="filacao-socinpro"
            title=" O processo é simples, digital e seguro."
            subtitle="Nosso Processo de Filiação em 4 Passos"
            subtitleClassName="normal-case font-medium xl:text-3xl"
          />
          <div className="flex justify-center gap-6 flex-wrap">
            <SectionIconItem
              title="1. Solicitação Inicial"
              description='Clique no botão "Solicitar Filiação" ao final desta página e preencha um breve formulário de solicitação. Este é o nosso primeiro contato para iniciar seu processo.'
              icon={<Target />}
              style={{ animationDelay: "400ms" }}
            />
            <SectionIconItem
              title="2. Análise e Convite"
              description="Nossa equipe analisará sua solicitação. Após a aprovação, você receberá um e-mail com um link exclusivo para acessar o formulário cadastral completo."
              icon={<Target />}
              style={{ animationDelay: "600ms" }}
            />
            <SectionIconItem
              title="3. Cadastro Completo"
              description="Preencha o formulário cadastral com seus dados e repertório. Ao finalizar, você será direcionado para a etapa da assinatura."
              icon={<Target />}
              style={{ animationDelay: "800ms" }}
            />
            <SectionIconItem
              title="4. Assinatura Digital"
              description="Para finalizar, você fará a assinatura digital do seu contrato de filiação de forma segura através da plataforma D4. Pronto, você faz parte da Socinpro!"
              icon={<Target />}
              style={{ animationDelay: "1000ms" }}
            />
          </div>
          <InfoText style={{ animationDelay: "1200ms" }}>
            <span>
              Para saber mais, acesse:{" "}
              <a
                href="https://www4.ecad.org.br"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                https://www4.ecad.org.br
              </a>
              . Caso o titular já seja filiado à nossa sociedade, por favor,
              entre em contato com a representação mais próxima para mais
              informações.
            </span>
          </InfoText>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-6 opacity-0 animate-fade-in font-medium mb-3">
              Pronto para começar?
            </h3>
            <p
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              Clique abaixo para dar o primeiro passo na proteção dos seus
              direitos.
            </p>
            <Button
              size="lg"
              asChild
              className="mt-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href={membershipRequestFormUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Filiação
              </a>
            </Button>
          </div>
        </section>
        <SupportSection />
      </div>
    </>
  );
}
