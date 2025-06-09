import Image from "next/image";
import Link from "next/link";
import { Target } from "lucide-react";
import { Gem } from "lucide-react";
import { Eye } from "lucide-react";

import { SupportSection } from "@/components/shared/SupportSection";
import { DirectorsSection } from "@/components/institucional/DirectorsSection";
import { OrganizationSection } from "@/components/institucional/OrganizationSection";
import { ArticlesOfAssociationSection } from "@/components/institucional/ArticlesOfAssociationSection";
import { NewsSection } from "@/components/shared/NewsSection";
import VinylImage from "@/public/images/vinyl.png";

export const metadata = {
  title: "Socinpro por Dentro – Quem Somos",
  description:
    "Conheça a Sociedade Brasileira de Administração e Proteção de Direitos Intelectuais",
};

export default function Page() {
  return (
    <div className="py-12 space-y-24">
      <section className="px-[6%] md:px-[14%]">
        <div className="flex flex-col xl:flex-row mb-10 group">
          <div className="w-full mb-5 xl:mb-0 max-h-[200px] max-w-[380px] lg:max-h-[400px] xl:max-h-none lg:max-w-none mx-auto overflow-hidden rounded-lg">
            <Image
              src={VinylImage}
              alt="Imagem de um disco de vinil"
              className="w-full h-full opacity-0 animate-fade-in group-hover:scale-[102%] transition-transform"
              style={{ animationDelay: "300ms" }}
              width={730}
              height={440}
            />
          </div>
          <div
            className="lg:flex flex-col justify-center xl:items-start w-full font-bold text-center xl:text-left lg:px-8 xl:px-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <h1 className="uppercase text-xs md:text-base text-teal opacity-0 animate-fade-in">
              Quem somos
            </h1>
            <h2 className="uppercase text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl leading-6 mt-4 opacity-0 animate-fade-in">
              Desde 1962, Valorizando artistas e suas obras
            </h2>
            <p className="text-sm normal-case font-normal md:text-base mt-4">
              A{" "}
              <strong>
                Socinpro – Sociedade Brasileira de Administração e Proteção de
                Direitos Intelectuais
              </strong>{" "}
              é uma associação sem fins lucrativos, dedicada à administraçãoe
              defesa dos direitos autorais e conexos de compositores, autores,
              intérpretes, músicos, produtores fonográficos e editores musicais.{" "}
              <br />
              <br /> Desde 1962, nossa missão é garantir que cada criador receba
              de forma justae transparente a remuneração pela utilização de suas
              obras e fonogramas. Trabalhamos incansavelmente para simplificar a
              gestão desses direitos, atuando na arrecadação e distribuição,
              além de representar nossos associados nacional e
              internacionalmente.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          <Item
            title="Nossa Missão:"
            description="Arrecadar e distribuir direitos autorais e conexos com transparência e eficiência, promovendo a valorização da música e cultura de nossos associados."
            icon={<Target />}
            style={{ animationDelay: "900ms" }}
          />
          <Item
            title="Nossa Visão:"
            description="Ser referência em gestão coletiva no Brasil, reconhecida pela excelência, inovação constante e total compromisso com os titulares."
            icon={<Eye />}
            style={{ animationDelay: "1200ms" }}
          />
          <Item
            title="Nossos Valores:"
            description="Conduta pautada na Ética, Transparência em todas as ações, busca incessante pela Eficiência, defesa da Justiça e a contínua Valorização da Cultura."
            icon={<Gem />}
            style={{ animationDelay: "1500ms" }}
          />
        </div>
      </section>
      <ArticlesOfAssociationSection />
      <DirectorsSection
        buttonContent={
          <Link href="/institucional/diretoria">Ver Detalhes da Gestão</Link>
        }
      />
      <OrganizationSection />
      <NewsSection />
      <SupportSection />
    </div>
  );
}

const Item = ({ title, description, icon, ...props }) => (
  <div
    className="bg-gray-100 p-6 rounded-lg text-center w-full sm:max-w-[250px] lg:max-w-[300px] xl:max-w-[400px] opacity-0 animate-fade-in hover:scale-[101%] transition-transform"
    {...props}
  >
    <div className="text-white bg-teal rounded-full h-10 w-10 mx-auto mb-4 flex items-center justify-center">
      {icon}
    </div>
    <p className="text-base lg:text-xl xl:text-2xl font-medium mb-2">{title}</p>
    <p className="text-sm lg:text-base">{description}</p>
  </div>
);
