import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import RoyaltyPaymentsImage from "@/public/images/royalty_payments.png";

export function RoyaltyPaymentsSection() {
  return (
    <section
      className="flex flex-col 2xl:flex-row px-[6%] md:px-[14%] group"
      aria-labelledby="pagamentos-direitos-autorais"
    >
      <div className="2xl:flex flex-col justify-center items-start w-full text-center 2xl:text-left 2xl:pr-12">
        <SectionHeader
          id="pagamentos-direitos-autorais"
          title="Então, no Digital, o Autor Recebe Duas Vezes?"
          subtitle="Sim! Entenda as duas frentes de pagamento de direitos autorais."
          className="2xl:text-left"
          subtitleClassName="normal-case font-medium xl:text-3xl"
        />
        <p
          className="text-sm md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          Quando uma música é reproduzida em plataformas de streaming, o autor
          tem direito a receber por duas frentes:
        </p>
      </div>
      <div
        className="w-full mt-5 2xl:mt-0 max-h-[230px] max-w-[766px] mx-auto 2xl:max-h-none 2xl:max-w-none rounded-lg overflow-hidden opacity-0 animate-fade-in"
        style={{ animationDelay: "800ms" }}
      >
        <Image
          src={RoyaltyPaymentsImage}
          alt="Fluxograma de pagamentos de direitos autorais"
          className="w-full h-full group-hover:scale-[99%] transition-transform duration-300"
          width={766}
          height={230}
        />
      </div>
    </section>
  );
}
