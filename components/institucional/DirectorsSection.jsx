import { User } from "lucide-react";

import { socinproDirectors } from "@/constants/socinprotInfo";
import { cn } from "@/utils/utils";

import { Button } from "@/components/ui/button";

export function DirectorsSection({ buttonContent }) {
  return (
    <section className="uppercase font-bold text-center px-[6%] md:px-[14%]">
      <h3 className="text-xs md:text-base text-teal opacity-0 animate-fade-in">
        Corpo Administrativo da Sociedade
      </h3>
      <h2
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-6 mt-4 opacity-0 animate-fade-in"
        style={{ animationDelay: "400ms" }}
      >
        Uma Equipe Especializada para Atender os Seus Objetivos
      </h2>
      <p
        className="mt-4 text-sm normal-case font-normal md:text-base opacity-0 animate-fade-in"
        style={{ animationDelay: "800ms" }}
      >
        Apresentamos os profissionais que compõem nossa Diretoria Executiva. São
        eles que, com dedicação e expertise, conduzem a Socinpro, zelando pelos
        interesses de nossos associados e definindo as estratégias para o
        fortalecimento da nossa atuação em defesa dos direitos autorais e
        conexos. Conheça quem está à frente das decisões que impulsionam nossa
        sociedade.
      </p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-10 mt-8 max-w-2xl mx-auto">
        {socinproDirectors.map((director, index) => (
          <DirectorItem
            key={index}
            director={director}
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: `${(index + 1) * 200 + 1000}ms` }}
          />
        ))}
      </div>
      <Button
        size="lg"
        asChild
        className="mt-10 opacity-0 animate-fade-in"
        style={{
          animationDelay: `${socinproDirectors.length * 200 + 1400}ms`,
        }}
      >
        {buttonContent ? (
          buttonContent
        ) : (
          <a href="/api/diretoria" download>
            Ver Detalhes da Gestão (baixar PDF)
          </a>
        )}
      </Button>
    </section>
  );
}

const DirectorItem = ({ director, className, ...props }) => {
  const hasImage = !!director.image;
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center gap-2 md:gap-4 w-48",
        className
      )}
      {...props}
    >
      <div className="h-32 w-32 sm:h-44 sm:w-44 flex items-center justify-center rounded-lg bg-coal-100 overflow-hidden hover:scale-[102%] transition-transform">
        {hasImage ? (
          <img
            src={director.image}
            alt={director.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <User className="w-12 h-12 sm:w-20 sm:h-20 text-teal" />
        )}
      </div>
      <h3 className="text-lg font-medium leading-6">
        {director.name}
        <span className="font-light"> ({director.nickname})</span>
      </h3>
      <p className="normal-case text-base text-gray-500 font-normal leading-5">
        {director.position}
      </p>
    </div>
  );
};
