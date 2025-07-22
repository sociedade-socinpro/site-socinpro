import { PageHeader } from "@/components/shared/PageHeader";
import { SupportSection } from "@/components/shared/SupportSection";

const paymentData = [
  {
    origem: "Show",
    meses:
      "Janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro",
  },
  {
    origem: "Rádio + Direitos Gerais",
    meses: "Janeiro, Abril, Julho, Outubro",
  },
  {
    origem: "Casa de Festas e Diversão",
    meses: "Janeiro, Abril, Julho, Outubro",
  },
  { origem: "Música ao Vivo", meses: "Janeiro, Abril, Julho, Outubro" },
  { origem: "Sonorização Ambiental", meses: "Janeiro, Abril, Julho, Outubro" },
  {
    origem: "TV Aberta + Direitos Gerais",
    meses: "Janeiro, Abril, Julho, Outubro",
  },
  { origem: "Simulcasting", meses: "Janeiro, Abril, Julho, Outubro" },
  {
    origem: "Streaming de Áudio e Vídeo",
    meses: "Fevereiro, Maio, Agosto, Novembro",
  },
  { origem: "TV por Assinatura", meses: "Fevereiro, Maio, Agosto, Novembro" },
  { origem: "Cinema", meses: "Março, Junho, Setembro, Dezembro" },
  { origem: "Internet e Demais (Webcasting)", meses: "Junho, Dezembro" },
  { origem: "Carnaval e Festas de Fim de Ano", meses: "Maio" },
  { origem: "Festa Junina", meses: "Setembro" },
  { origem: "MTG (Mov. Trad. Gaúcho)", meses: "Novembro" },
];

export const metadata = {
  title: "SOCINPRO – Entendendo os Pagamentos do Ecad",
  description:
    "Consulte a previsão de quando cada tipo de execução musical é pago",
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Entendendo os Pagamentos do Ecad"
        description={
          <>
            Consulte a previsão de quando cada <br />
            tipo de execução musical é pago
          </>
        }
      />
      <div className="py-12 space-y-24">
        <div className="text-center px-[6%] md:px-[14%] space-y-10">
          <section className="space-y-10">
            <p
              className="text-sm md:text-base opacity-0 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              O Ecad realiza distribuições mensais, trimestrais e anuais,
              dependendo da origem da execução. Se sua música tocou hoje, o
              pagamento não será imediato.
            </p>
            <p
              className="text-xs md:text-base text-teal opacity-0 animate-fade-in font-bold uppercase"
              style={{ animationDelay: "600ms" }}
            >
              Este calendário é uma previsão e pode sofrer alterações. Para
              valores e datas exatas, consulte sempre seus demonstrativos de
              pagamento enviados pela Socinpro.
            </p>
          </section>
          <section
            aria-labelledby="pagamentos-table-title"
            className="space-y-6"
          >
            <h2
              id="pagamentos-table-title"
              className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "700ms" }}
            >
              Previsão de Pagamentos por Tipo de Uso
            </h2>
            <div
              className="overflow-x-auto opacity-0 animate-fade-in"
              style={{ animationDelay: "700ms" }}
            >
              <div className="inline-block min-w-full rounded-sm border border-gray-200 overflow-hidden">
                <table className="min-w-full border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Previsão de Pagamentos por Tipo de Uso
                  </caption>
                  <thead>
                    <tr className="bg-gray-100">
                      <th
                        scope="col"
                        className="px-4 py-2 font-medium text-gray-500 border-b border-gray-200"
                      >
                        Origem do Pagamento
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 font-medium text-gray-500 border-b border-gray-200"
                      >
                        Meses da Distribuição (Previsão)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentData.map((row) => (
                      <tr
                        key={row.origem}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <th
                          scope="row"
                          className="px-4 py-2 whitespace-nowrap font-normal"
                        >
                          {row.origem}
                        </th>
                        <td className="px-4 py-2 whitespace-nowrap">
                          {row.meses}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
        <SupportSection />
      </div>
    </>
  );
}
