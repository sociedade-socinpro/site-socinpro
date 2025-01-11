import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import News1 from "@/public/images/news/news_1.png";
import News2 from "@/public/images/news/news_2.png";
import News3 from "@/public/images/news/news_3.png";
import News4 from "@/public/images/news/news_4.png";

export const NewsSection = () => {
  return (
    <section>
      <div className="flex flex-col gap-8 items-center -mt-4 lg:mt-32">
        <div className="px-[8%] xl:px-[14%] uppercase font-bold text-center">
          <p className="text-xs md:text-base text-teal mb-4">
            Últimas publicações
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6">
            Fique por dentro do que acontece na SOCINPRO
          </h2>
        </div>
        <ul className="px-[20%] md:px-[8%] xl:px-[14%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <li>
            <ImageLink src={News1} alt="Notícia sobre a SOCINPRO" />
          </li>
          <li>
            <ImageLink src={News2} alt="Notícia sobre a SOCINPRO" />
          </li>
          <li>
            <ImageLink src={News3} alt="Notícia sobre a SOCINPRO" />
          </li>
          <li>
            <ImageLink src={News4} alt="Notícia sobre a SOCINPRO" />
          </li>
        </ul>
        <Button size="lg">Siga-nos no Instagram</Button>
      </div>
    </section>
  );
};

const ImageLink = ({ src, alt }) => (
  <Link href="/">
    <Image
      src={src}
      alt={alt}
      className="cursor-pointer hover:scale-[102%] transition-transform ease-in-out duration-300"
    />
  </Link>
);
