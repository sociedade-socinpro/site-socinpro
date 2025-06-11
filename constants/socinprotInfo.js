import Image from "next/image";

export const socinproPhone = "+55 (21) 2220-3580";

export const socinproAddress =
  "Av. Pres. Wilson, 210 - Centro Rio de Janeiro - RJ, 20030-021";

export const socinproEmail = "sede.rj@socinpro.org.br";

export const socialLinks = [
  {
    href: "https://www.facebook.com/socinpro",
    icon: (
      <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} />
    ),
  },
  {
    href: "https://x.com/socinpro",
    icon: <Image src="/icons/x.svg" alt="X" width={20} height={20} />,
  },
  {
    href: "https://www.linkedin.com/company/socinpro",
    icon: (
      <Image src="/icons/linkedin.svg" alt="LinkedIn" width={20} height={20} />
    ),
  },
];

export const socinproDirectors = [
  {
    name: "ADONIS MARCELO RAMOS DE OLIVEIRA",
    nickname: "DONY",
    position: "Diretor Geral",
    image: "",
  },
  {
    name: "ALTAY VELLOSO DA SILVA",
    nickname: "ALTAY VELLOSO",
    position: "Diretor Secretário",
    image: "",
  },
  {
    name: "FERNANDO JOSE VITALE",
    nickname: "FERNANDO VITALE",
    position: "Diretor Administrativo e Financeiro",
    image: "",
  },
  {
    name: "JOSÉ ORLANDO DOS SANTOS MOTA",
    nickname: "ORLANDO MOTTA",
    position: "Diretor de Controle de Arrecadação e Distribuição",
    image: "",
  },
  {
    name: "TALITA FERRAZ ZIOLI",
    nickname: "TALITA ZIOLI",
    position: "Diretora de Comunicação, Cultural e Social",
    image: "",
  },
];

export const socinproOrganizationalChartUrl =
  "https://socinpro-publico.s3.us-east-1.amazonaws.com/site/documentos/organograma-socinpro.pdf";

export const socinproArticlesOfAssociationUrl =
  "https://socinpro-publico.s3.us-east-1.amazonaws.com/site/documentos/estatuto-socinpro.pdf";

export const socinproDirectorsUrl =
  "https://socinpro-publico.s3.us-east-1.amazonaws.com/site/documentos/diretoria-eleita-e-duracao-mandato.pdf";

export const documents = [
  {
    slug: "gestao-pessoas-carreiras",
    title: "Gestão de Pessoas e Carreiras",
    url: "https://socinpro-publico.s3.us-east-1.amazonaws.com/site/documentos/descricoes-de-cargos.pdf",
    filename: "ART-2-INCISO-VI-Descricoes-de-Cargos-2021.PDF",
    category: "gestao",
  },
  {
    slug: "diretrizes-carreiras",
    title: "Diretrizes de Carreiras",
    url: "https://socinpro-publico.s3.us-east-1.amazonaws.com/site/documentos/descricoes-de-cargos.pdf",
    filename: "ART-2-INCISO-VI-Diretrizes-de-Carreiras-2021.pdf",
    category: "gestao",
  },
  {
    slug: "mapeamento-competencias-i",
    title: "Mapeamento de Competências I",
    url: "https://socinpro-publico.s3.us-east-1.amazonaws.com/site/documentos/ART-2-INCISO-VI-Mapeamento-Competencias-2021.pdf",
    filename: "ART-2-INCISO-VI-Mapeamento-Competencias-2021.pdf",
    category: "gestao",
  },
  {
    slug: "mapeamento-competencias-ii",
    title: "Mapeamento de Competências II",
    url: "https://socinpro-publico.s3.us-east-1.amazonaws.com/site/documentos/ART-2-INCISO-VI-Mapeamento-Competencias-2021-2.pdf",
    filename: "ART-2-INCISO-VI-Mapeamento-Competencias-2021-2.pdf",
    category: "gestao",
  },
  {
    slug: "avaliacao-desempenho",
    title: "Sistema de Avaliação de Desempenho por Competências",
    url: "https://socinpro-publico.s3.us-east-1.amazonaws.com/site/documentos/sistema-de-avaliacao-de-desempenho-por-competencias.pdf",
    filename:
      "Sistema-de-Avaliacao-de-Desempenho-por-Competencias-SOCINPRO.pdf",
    category: "registros",
  },
  {
    slug: "ata-eleicao-diretoria-2020-2023",
    title: "Ata da Eleição da Diretoria (Gestão 2020-2023)",
    url: "https://socinpro-publico.s3.us-east-1.amazonaws.com/site/documentos/ata-eleicao-socinpro.pdf",
    filename:
      "ATA-DE-AGO-DA-ELEICAO-2020-A-2023-COM-FUNDAMENTO-LEGAL-DA-ELEICAO.pdf",
    category: "registros",
  },
];
