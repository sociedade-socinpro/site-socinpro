import Image from "next/image";
import Link from "next/link";

import QrCodeImage from "@/public/images/qr_code.png";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <section className="flex flex-col flex-1 py-10 sm:py-16 2xl:py-32 px-6 lg:px-10 gap-6 sm:gap-10 lg:gap-20">
      <div className="flex flex-col flex-1 mx-auto items-center justify-center max-w-xl 2xl:max-w-2xl gap-10 sm:gap-20 2xl:gap-32">
        <div className="text-center space-y-4 sm:space-y-6">
          <h1 className="uppercase text-dust text-base sm:text-lg lg:text-2xl opacity-0 animate-fade-in">
            socinpro responde
          </h1>
          <h2
            className="uppercase text-white font-bold text-2xl lg:text-4xl xl:text-6xl opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            como a socinpro pode te ajudar
          </h2>
          <p
            className="text-white text-base lg:text-lg opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            Este serviço foi criado para acolher todos os interessados em
            explorar o universo da música e eliminar suas dúvidas.
          </p>
        </div>
        <div
          className="flex flex-wrap items-center justify-around gap-10 sm:gap-16 2xl:gap-28 opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <QrCodeItem src={QrCodeImage} title="Filiação Socinpro" />
          <QrCodeItem src={QrCodeImage} title="Aplicativo Socinpro" />
          <QrCodeItem src={QrCodeImage} title="Site Socinpro" />
        </div>
      </div>
      <div
        className="flex items-center sm:justify-between opacity-0 animate-fade-in"
        style={{ animationDelay: "600ms" }}
      >
        <span className="hidden sm:block uppercase text-dust text-sm lg:text-base xl:text-lg">
          Clique no botão
          <br /> ao lado para navegar
        </span>
        <Button size="xl" className="w-full sm:w-auto" asChild>
          <Link href="/faq/categorias">Ver Perguntas Frequentes (FAQ)</Link>
        </Button>
      </div>
    </section>
  );
}

const QrCodeItem = ({ title, src }) => (
  <div className="flex flex-col gap-2 items-center justify-center">
    <Image
      src={src}
      alt={title}
      className="w-20 h-20 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32"
    />
    <span className="text-dust text-sm lg:text-base xl:text-lg font-bold">
      {title}
    </span>
  </div>
);
