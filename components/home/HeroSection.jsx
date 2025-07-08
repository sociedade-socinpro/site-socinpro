import Image from "next/image";

import { HeroCarousel } from "./HeroCarousel";

import Chords from "@/public/icons/chords-left.svg";

export const HeroSection = async ({ banners }) => {
  return (
    <div className="relative">
      <h1 className="sr-only">
        Socinpro - Sociedade Brasileira de Administração e Proteção de Direitos
        Intelectuais
      </h1>
      <HeroCarousel banners={banners} />
      <Image
        src={Chords}
        alt=""
        aria-hidden="true"
        className="absolute hidden md:block inset-0 m-auto w-full opacity-0 animate-slide-right"
        style={{ animationDelay: "800ms" }}
      />
    </div>
  );
};
