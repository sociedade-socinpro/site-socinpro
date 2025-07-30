import Image from "next/image";
import Link from "next/link";
import { Target } from "lucide-react";
import { Gem } from "lucide-react";
import { Eye } from "lucide-react";

import { PageHeader } from "@/components/shared/PageHeader";
import { SectionIconItem } from "@/components/shared/SectionIconItem";
import { SupportSection } from "@/components/shared/SupportSection";
import { DirectorsSection } from "@/components/institucional/DirectorsSection";
import { OrganizationSection } from "@/components/institucional/OrganizationSection";
import { ArticlesOfAssociationSection } from "@/components/institucional/ArticlesOfAssociationSection";
import { NewsSection } from "@/components/shared/NewsSection";
import VinylImage from "@/public/images/vinyl.png";

export const metadata = {
  title: "SOCINPRO – Quem Somos",
  description:
    "Conheça a Sociedade Brasileira de Administração e Proteção de Direitos Intelectuais",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Quem somos"
        description={
          <>
            Desde 1962, Valorizando <br /> artistas e suas obras
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section className="px-[6%] md:px-[14%]">
          <div className="flex flex-col xl:flex-row mb-10 group">
            <div
              className="w-full mb-5 xl:mb-0 max-h-[200px] max-w-[380px] lg:max-h-[400px] xl:max-h-none xl:max-w-none mx-auto overflow-hidden rounded-lg opacity-0 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <Image
                src={VinylImage}
                alt="Imagem de um disco de vinil"
                className="w-full h-full group-hover:scale-[102%] transition-transform duration-300"
                width={730}
                height={440}
              />
            </div>
            <div
              className="lg:flex flex-col justify-center xl:items-start w-full text-center xl:text-left lg:pl-8 xl:pl-12 opacity-0 animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              <p className="text-sm md:text-base">
                A{" "}
                <strong>
                  Socinpro – Sociedade Brasileira de Administração e Proteção de
                  Direitos Intelectuais
                </strong>{" "}
                é uma associação sem fins lucrativos, dedicada à administração e
                defesa dos direitos autorais e conexos de compositores, autores,
                intérpretes, músicos, produtores fonográficos e editores
                musicais. <br />
                <br /> Desde 1962, nossa missão é garantir que cada criador
                receba de forma justa e transparente a remuneração pela
                utilização de suas obras e fonogramas. Trabalhamos
                incansavelmente para simplificar a gestão desses direitos,
                atuando na arrecadação e distribuição, além de representar
                nossos associados nacional e internacionalmente.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-6 flex-wrap">
            <SectionIconItem
              title="Nossa Missão:"
              description="Arrecadar e distribuir direitos autorais e conexos com transparência e eficiência, promovendo a valorização da música e cultura de nossos associados."
              icon={<Target />}
              level={2}
              style={{ animationDelay: "900ms" }}
            />
            <SectionIconItem
              title="Nossa Visão:"
              description="Ser referência em gestão coletiva no Brasil, reconhecida pela excelência, inovação constante e total compromisso com os titulares."
              icon={<Eye />}
              level={2}
              style={{ animationDelay: "1200ms" }}
            />
            <SectionIconItem
              title="Nossos Valores:"
              description="Conduta pautada na Ética, Transparência em todas as ações, busca incessante pela Eficiência, defesa da Justiça e a contínua Valorização da Cultura."
              icon={<Gem />}
              level={2}
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
    </>
  );
}
