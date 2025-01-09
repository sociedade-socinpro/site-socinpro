import Image from "next/image";

import Bg from "@/public/images/home_bg.png";

export default async function Home() {
  return (
    <div className="relative min-h-[60%] bg-coal-900">
      <Image
        src={Bg}
        alt="Homem afinando um violão"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="pl-[10%] xl:pl-[16%] pr-[20%] absolute inset-0 z-10 flex flex-col justify-center uppercase font-bold text-left text-white bg-black bg-opacity-30 animate-fade-in-overlay">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Tudo que você precisa para
          <br className="hidden sm:block" />
          <span className="text-teal"> proteger sua obra</span> em um só lugar.
        </h1>
      </div>
    </div>
  );
}
