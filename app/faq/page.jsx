import Image from "next/image";
import Link from "next/link";
import { getOrigin } from "@/lib/get-origin";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default async function Page() {
  const origin = await getOrigin(); // ex.: https://socinpro.org.br
  const smartUrl = `${origin}/smart`;

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
          <QrCodeItem
            title="Filiação Socinpro"
            url="https://associado.socinpro.org.br/portal-web/pages/public/solicitacao-filiacao.xhtml"
          />
          <QrCodeItem title="Aplicativo Socinpro" url={smartUrl} />
          <QrCodeItem title="Site Socinpro" url="https://www.socinpro.org.br" />
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
          <Link href="/faq/categorias" className="flex items-center gap-2">
            Comece por Aqui
          </Link>
        </Button>
      </div>
    </section>
  );
}

// components/QrCodeItem.tsx

export function QrCodeItem({ title, url }) {
  const apiSrc = `/api/qr?u=${encodeURIComponent(url)}`;
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Image
        src={apiSrc}
        alt={title}
        width={128}
        height={128}
        className="w-20 h-20 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32"
        priority
      />
      <Link
        href={url}
        className="text-dust text-sm lg:text-base xl:text-lg font-bold  hover:underline hover:decoration-dust  transition duration-200"
      >
        {title}
      </Link>
    </div>
  );
}
