import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const pointsData = [
  {
    usuario: "Apple Music",
    identificacaoPosCorte: "92,73%",
    linhaDeCorte: "630",
    valorPontoAutoral: "0,001945216",
    valorPontoConexo: "-",
  },
  {
    usuario: "Deezer",
    identificacaoPosCorte: "92,27%",
    linhaDeCorte: "39.909",
    valorPontoAutoral: "0,000425346",
    valorPontoConexo: "-",
  },
  {
    usuario: "Facebook",
    identificacaoPosCorte: "69,61%",
    linhaDeCorte: "304.450",
    valorPontoAutoral: "0,000003334",
    valorPontoConexo: "-",
  },
  {
    usuario: "Napster",
    identificacaoPosCorte: "76,62%",
    linhaDeCorte: "74",
    valorPontoAutoral: "0,058523081",
    valorPontoConexo: "-",
  },
  {
    usuario: "Spotify",
    identificacaoPosCorte: "91,31%",
    linhaDeCorte: "11.056",
    valorPontoAutoral: "0,000346224",
    valorPontoConexo: "-",
  },
  {
    usuario: "Spotify GE (Podcasts)",
    identificacaoPosCorte: "-",
    linhaDeCorte: "-",
    valorPontoAutoral: "-",
    valorPontoConexo: "-",
  },
  {
    usuario: "Tidal",
    identificacaoPosCorte: "97,52%",
    linhaDeCorte: "567",
    valorPontoAutoral: "0,003490855",
    valorPontoConexo: "-",
  },
  {
    usuario: "TikTok",
    identificacaoPosCorte: "59,04%",
    linhaDeCorte: "520.541",
    valorPontoAutoral: "0,000002021",
    valorPontoConexo: "-",
  },
];

export function PlatformValuesSection() {
  return (
    <section
      className="px-[6%] md:px-[14%] space-y-8"
      aria-labelledby="valores-plataformas"
    >
      <div>
        <SectionHeader
          id="valores-plataformas"
          title="Os Valores do Ponto por Plataforma (DSP)"
          subtitle="Confira os valores de referência do ponto autoral e conexo"
        />
        <p
          className="text-center text-sm md:text-base opacity-0 animate-fade-in mt-4"
          style={{ animationDelay: "600ms" }}
        >
          Consulte a tabela de referência com os valores do ponto autoral e
          conexo por DSP (Digital Service Provider).
        </p>
      </div>
      <div
        className="text-left rounded-md border opacity-0 animate-fade-in"
        style={{ animationDelay: "700ms" }}
      >
        <Table>
          <caption className="sr-only">
            Valores de referência do ponto autoral e conexo por plataforma (DSP)
          </caption>
          <TableHeader>
            <TableRow>
              <TableHead>Usuário</TableHead>
              <TableHead>Identificação Pós-Corte (Média)</TableHead>
              <TableHead>Linha de Corte (Qtd. Execuções) (Média)</TableHead>
              <TableHead>Valor Ponto Autoral (Média)</TableHead>
              <TableHead>Valor do Ponto Conexo (Média)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pointsData.map((row) => (
              <TableRow key={row.usuario}>
                <TableCell>{row.usuario}</TableCell>
                <TableCell>{row.identificacaoPosCorte}</TableCell>
                <TableCell>{row.linhaDeCorte}</TableCell>
                <TableCell>{row.valorPontoAutoral}</TableCell>
                <TableCell>{row.valorPontoConexo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
