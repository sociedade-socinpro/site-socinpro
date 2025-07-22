import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import FaqIcon from "@/public/icons/faq.svg";
import MusicProducers from "@/public/images/music_producers.png";
import Chords from "@/public/icons/chords.svg";

export const SupportSection = () => {
  return (
    <section className="relative group" aria-labelledby="suporte">
      <h2 id="suporte" className="sr-only">
        Suporte completo para suas dúvidas
      </h2>
      <div className="px-[6%] md:px-[14%] z-10 relative opacity-0 animate-fade-in">
        <Card className="flex flex-col justify-between lg:flex-row shadow-none overflow-hidden border-l-[14px] border-l-teal">
          <div>
            <CardHeader>
              <Image
                src={FaqIcon}
                className="mb-6 mx-auto md:mx-0"
                width={48}
                alt=""
                aria-hidden="true"
              />
              <CardTitle className="md:text-left">
                Suporte completo para suas dúvidas.
              </CardTitle>
              <CardDescription className="md:text-left">
                Consulte nosso FAQ e encontre respostas para as perguntas mais
                frequentes sobre direitos autorais, filiação e mais.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/faq">
                <Button size="lg" className="mx-auto md:mx-0">
                  Acesse o FAQ
                </Button>
              </Link>
            </CardFooter>
          </div>
          <Image
            src={MusicProducers}
            alt=""
            aria-hidden="true"
            className="object-cover group-hover:scale-[101%] transition-transform"
          />
        </Card>
      </div>
      <Image
        src={Chords}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute inset-0 my-auto w-full opacity-0 animate-slide-left"
        style={{ animationDelay: "800ms" }}
      />
    </section>
  );
};
