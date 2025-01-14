import useSWR from "swr";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="px-[8%] xl:px-[14%] py-20 xl:py-48 bg-coal-900 bg-[url('/images/home_bg.png')] bg-cover">
      <div className="flex flex-col gap-4 uppercase font-bold text-center sm:text-left text-white animate-fade-in">
        <p className="text-xs md:text-base">
          Transparência e confiança para sua música
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-7">
          Tudo que você precisa para
          <br />
          <span className="text-teal">proteger sua obra</span> em um só lugar.
        </h1>
        <Button size="lg" className="self-center sm:self-start">
          Conheça nossas soluções
        </Button>
      </div>
    </div>
  );
};
