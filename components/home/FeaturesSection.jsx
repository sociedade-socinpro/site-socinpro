import Link from "next/link";

import { InfoCard } from "@/components/shared/InfoCard";
import { Button } from "@/components/ui/button";

export const FeaturesSection = () => {
  return (
    <>
      <div
        className="relative z-20 flex flex-col justify-center items-center md:flex-row px-[6%] md:px-[14%] gap-4 -mt-6 xl:-mt-10 mb-16 xl:mb-20 animate-slide-up opacity-0"
        style={{ animationDelay: "600ms" }}
      >
        <InfoCard
          title="Portal do Associado"
          description="Gerencie seus direitos autorais, acompanhe relatórios e muito mais."
          className="flex-1 w-full"
        >
          <Button size="lg">Acesse o portal</Button>
        </InfoCard>
        <InfoCard
          title="Aplicativo SOCINPRO"
          description="Leve o controle dos seus direitos autorais para onde quiser."
          className="flex-1 w-full"
        >
          <Button size="lg">Faça o download do aplicativo</Button>
        </InfoCard>
      </div>
      <div className="relative flex justify-center items-center px-[6%] md:px-[14%] py-16">
        <div className="w-full h-full z-0 absolute bg-coal-900 bg-[url('/images/music_fans.png')] bg-cover hover:transform hover:scale-[101%] transition-transform opacity-0 animate-fade-in duration-500" />
        <InfoCard
          title="Desde 1962, valorizando artistas e suas obras"
          description="A SOCINPRO é pioneira na gestão de direitos autorais no Brasil, proporcionando segurança e suporte completo para artistas e criadores."
          className="z-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <Button size="lg" asChild>
            <Link href="/institucional/quem-somos">Saiba mais</Link>
          </Button>
        </InfoCard>
      </div>
    </>
  );
};
