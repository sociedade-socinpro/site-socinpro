import Image from "next/image";
import Link from "next/link";

import { socinproInstagramUrl } from "@/constants/socinprotInfo";

import { Button } from "@/components/ui/button";

export const NewsSection = async () => {
  const IG_PAGE_ID = process.env.IG_PAGE_ID;
  const IG_ACCESS_TOKEN = process.env.IG_PAGE_ACCESS_TOKEN;

  const url =
    `https://graph.facebook.com/v23.0/${IG_PAGE_ID}/media` +
    `?fields=id,caption,thumbnail_url,permalink,media_url,media_type` +
    `&limit=4` +
    `&access_token=${IG_ACCESS_TOKEN}`;

  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    return null;
  }

  const { data: posts = [] } = await res.json();

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
          {posts.map((post, i) => (
            <li key={post.id}>
              <Link
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="relative w-full h-56 lg:h-[340px] aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-[101%] transition-transform">
                  <Image
                    src={
                      post.media_type === "VIDEO"
                        ? post.thumbnail_url
                        : post.media_url
                    }
                    sizes="(max-width: 1023px) 50vw, 25vw"
                    fill
                    alt={
                      post.caption?.slice(0, 100) ??
                      "Imagem do Post do Instagram"
                    }
                    className="object-cover opacity-0 animate-fade-in"
                    style={{ animationDelay: `${800 + i * 200}ms` }}
                  />
                </figure>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={socinproInstagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: "1600ms" }}
          >
            Siga-nos no Instagram
          </Button>
        </Link>
      </div>
    </section>
  );
};
