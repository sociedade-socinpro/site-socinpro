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
      <div className="flex flex-col gap-8 items-center">
        <div className="px-[6%] md:px-[14%] uppercase font-bold text-center">
          <p className="text-xs md:text-base text-teal mb-4 opacity-0 animate-fade-in">
            Últimas publicações
          </p>
          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            Fique por dentro do que acontece na SOCINPRO
          </h2>
        </div>
        <ul className="px-[6%] md:px-[14%] grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          <li>
            <ImageLink
              src={News1}
              alt="Notícia sobre a SOCINPRO"
              style={{ animationDelay: "800ms" }}
            />
          </li>
          <li>
            <ImageLink
              src={News2}
              alt="Notícia sobre a SOCINPRO"
              style={{ animationDelay: "1000ms" }}
            />
          </li>
          <li>
            <ImageLink
              src={News3}
              alt="Notícia sobre a SOCINPRO"
              style={{ animationDelay: "1200ms" }}
            />
          </li>
          <li>
            <ImageLink
              src={News4}
              alt="Notícia sobre a SOCINPRO"
              style={{ animationDelay: "1400ms" }}
            />
          </li>
        </ul>
        <Button
          size="lg"
          className="opacity-0 animate-fade-in"
          style={{ animationDelay: "1600ms" }}
        >
          Siga-nos no Instagram
        </Button>
      </div>
    </section>
  );
};

const ImageLink = ({ src, alt, ...props }) => (
  <Link href="/">
    <Image
      src={src}
      alt={alt}
      className="cursor-pointer hover:scale-[101%] transition-transform opacity-0 animate-fade-in"
      {...props}
    />
  </Link>
);
