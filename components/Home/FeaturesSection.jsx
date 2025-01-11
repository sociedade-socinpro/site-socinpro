import { InfoCard } from "@/components/InfoCard";
import { Button } from "@/components/ui/button";

export const FeaturesSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center md:flex-row px-[8%] xl:px-[14%] gap-4 -mt-6 xl:-mt-10 mb-16 xl:mb-20 opacity-0 translate-y-full transform animate-slide-up delay-300">
        <InfoCard
          title="Portal do Associado"
          description="Gerencie seus direitos autorais, acompanhe relatórios e muito mais."
          className="flex-1"
        >
          <Button size="lg">Acesse o portal</Button>
        </InfoCard>
        <InfoCard
          title="Aplicativo SOCINPRO"
          description="Leve o controle dos seus direitos autorais para onde quiser."
          className="flex-1"
        >
          <Button size="lg">Faça o download do aplicativo</Button>
        </InfoCard>
      </div>
      <div className="relative flex justify-center items-center px-[8%] py-16">
        <div className="w-full h-full z-0 absolute bg-coal-900 bg-[url('/images/music_fans.png')] bg-cover hover:transform hover:scale-[102%] transition-transform ease-in-out duration-300" />
        <InfoCard
          title="Desde 1962, valorizando artistas e suas obras"
          description="A SOCINPRO é pioneira na gestão de direitos autorais no Brasil, proporcionando segurança e suporte completo para artistas e criadores."
          className="z-10"
        >
          <Button size="lg">Saiba mais</Button>
        </InfoCard>
      </div>
    </>
  );
};
