import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import TargetSvg from "@/public/icons/target.svg";

export function HowToRequestSection() {
  return (
    <section aria-labelledby="como-solicitar-gestao-individual">
      <div className="px-[6%] md:px-[14%] space-y-10">
        <SectionHeader
          id="como-solicitar-gestao-individual"
          title="Como Solicitar a Gestão Individual"
          subtitle="O processo é diferente para associados e não filiados."
        />
        <p
          className="text-xs md:text-base text-teal opacity-0 animate-fade-in text-center font-bold uppercase"
          style={{ animationDelay: "600ms" }}
        >
          Escolha sua situação:
        </p>
        <div className="flex flex-col lg:flex-row gap-6 justify-center">
          <Item
            title="Sou Associado SOCINPRO"
            icon={TargetSvg}
            style={{ animationDelay: "800ms" }}
          >
            <div className="text-sm md:text-base space-y-4">
              <p>
                Se você é nosso associado, o processo é simples e direto
                conosco.
              </p>
              <p>
                <strong>Passo a passo:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  Reúna a documentação e a autorização de todos os titulares;
                </li>
                <li>
                  Envie sua solicitação para o e-mail abaixo com, no mínimo, 48
                  horas de antecedência da execução.
                </li>
              </ol>
              <p>
                <strong>E-mail de Contato:</strong>{" "}
                gestaoindividual@socinpro.org.br
              </p>
            </div>
          </Item>
          <Item
            title="Não Sou Filiado a Nenhuma Associação"
            icon={TargetSvg}
            style={{ animationDelay: "1000ms" }}
          >
            <div className="text-sm md:text-base space-y-4">
              <p>
                Titulares não filiados devem encaminhar o pedido diretamente ao
                ECAD.
              </p>
              <p>
                <strong>Passo a passo:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  Reúna as seguintes informações:
                  <ul className="list-disc justify-items-center">
                    <li>Nome completo do titular;</li>
                    <li>Documento de identidade (RG) e CPF/CNPJ;</li>
                    <li>Local, data ou período da execução;</li>
                    <li>Tipo de utilização (ao vivo ou mecânica);</li>
                    <li>Nome do evento ou turnê;</li>
                    <li>
                      Lista completa das obras e fonogramas identificando todos
                      os titulares.
                    </li>
                  </ul>
                </li>
                <li>
                  Envie seu pedido diretamente para o ECAD com a antecedência
                  necessária para análise.
                </li>
              </ol>
              <p>
                <strong>E-mail de Contato:</strong>{" "}
                gestaoindividual@socinpro.org.br
              </p>
            </div>
          </Item>
        </div>
      </div>
    </section>
  );
}

const Item = ({ icon, title, children, style }) => (
  <div
    style={style}
    className="w-full flex flex-col items-center justify-center text-center bg-gray-100 rounded-sm p-8 lg:px-12 opacity-0 animate-fade-in"
  >
    <Image src={icon} alt="" />
    <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 mb-1">
      {title}
    </p>
    {children}
  </div>
);
