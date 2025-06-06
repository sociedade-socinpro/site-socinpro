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

export const socinproOrganizationalChartUrl =
  "https://socinpro-publico.s3.us-east-1.amazonaws.com/site/documentos/organograma-socinpro.pdf";
