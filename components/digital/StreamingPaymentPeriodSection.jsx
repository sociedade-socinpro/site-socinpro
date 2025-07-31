import Image from "next/image";

import { SectionHeader } from "@/components/shared/SectionHeader";
import PaymentPeriodImage from "@/public/images/payment_period.png";

export function StreamingPaymentPeriodSection() {
  return (
    <section
      className="flex flex-col-reverse 2xl:flex-row px-[6%] md:px-[14%] group"
      aria-labelledby="periodo-pagamento-streaming"
    >
      <div
        className="w-full mx-auto mt-5 2xl:mt-0 shrink-0 max-w-[600px] opacity-0 animate-fade-in"
        style={{ animationDelay: "800ms" }}
      >
        <Image
          src={PaymentPeriodImage}
          alt="Calendário de meses de pagamento do streaming"
          className="w-full h-full group-hover:scale-[99%] transition-transform duration-300"
          width={655}
          height={127}
        />
      </div>
      <div className="2xl:flex flex-col justify-center items-start w-full text-center 2xl:text-left 2xl:pl-12">
        <SectionHeader
          id="periodo-pagamento-streaming"
          title="Distribuição do streaming"
          subtitle="Período de Pagamento do Streaming"
          className="2xl:text-left"
          subtitleClassName="normal-case font-medium xl:text-3xl"
        />
        <p
          className="text-sm md:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          O ECAD realiza a distribuição do streaming trimestralmente, nos meses
          de <strong>Fevereiro</strong>, <strong>Maio</strong>,{" "}
          <strong>Agosto</strong> e <strong>Novembro</strong>, junto com o
          pagamento de Shows e TVs por assinatura.
        </p>
      </div>
    </section>
  );
}
