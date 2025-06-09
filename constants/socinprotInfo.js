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
