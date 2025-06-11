"use client";

import React, { useMemo, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/utils/utils";

import DefaultBanner from "@/public/images/home_bg.png";

export const HeroCarousel = ({ banners }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const autoplay = useMemo(
    () => Autoplay({ delay: 8000, stopOnInteraction: false }),
    []
  );

  const [viewportRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay]
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="md:px-[6%] xl:px-[8%] mx-auto">
      <div
        className="z-10 relative embla md:rounded-b-2xl overflow-hidden opacity-0 animate-fade-in"
        role="region"
        aria-roledescription="carousel"
        aria-label="Banner principal"
      >
        <div className="embla__viewport overflow-hidden" ref={viewportRef}>
          <div className="embla__container flex">
            {banners.map((b) => (
              <figure
                key={b.id}
                className="embla__slide flex-shrink-0 w-full h-[300px] md:h-[400px] xl:h-[500px] relative"
              >
                <picture className="relative block w-full h-full">
                  {b.imgUrlMobile && (
                    <source
                      srcSet={b.imgUrlMobile || DefaultBanner}
                      media="(max-width: 768px)"
                    />
                  )}
                  <Image
                    src={b.imgUrl || DefaultBanner}
                    alt={b.titulo}
                    fill
                    sizes="(max-width: 1536px) 100vw, 100vw"
                    className="object-cover bg-coal-300"
                    priority={b.id === banners[0].id}
                  />
                </picture>
                <figcaption className="absolute inset-0 mb-5 flex flex-col px-10 md:px-24 text-center md:text-left justify-center bg-black/30 text-white p-6 opacity-0 animate-fade-in">
                  <h2 className="text-2xl md:text-4xl font-bold uppercase">
                    {b.titulo}
                  </h2>
                  <p className="mt-2">{b.descricao}</p>
                  {b.ctaUrl && (
                    <Link
                      href={b.ctaUrl}
                      target={
                        b.ctaUrl.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        b.ctaUrl.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="self-center md:self-start mt-4"
                    >
                      <Button size="lg">{b.ctaTitulo || "Saiba mais"}</Button>
                    </Link>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <button
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Anterior"
          className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 shadow-md opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <ChevronLeft size={20} className="text-black" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Próximo"
          className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 shadow-md opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <ChevronRight size={20} className="text-black" />
        </button>
        <nav aria-label="Paginação do carrossel">
          <div
            className="absolute bottom-10 md:bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 opacity-0 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
                className={cn(
                  "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300",
                  idx === selectedIndex
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white"
                )}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};
