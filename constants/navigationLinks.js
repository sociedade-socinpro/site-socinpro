import { webConsultationUrl } from "./socinproInfo";

export const publicLinks = [
  {
    label: "Institucional",
    children: [
      { label: "Quem Somos", href: "/institucional/quem-somos" },
      { label: "Estatuto", href: "/institucional/estatuto" },
      { label: "Diretoria", href: "/institucional/diretoria" },
      { label: "Nossos Artistas", href: "/institucional/artistas" },
      { label: "Organograma", href: "/institucional/organograma" },
    ],
  },
  {
    label: "Transparência",
    children: [
      {
        label: "Consulta Web",
        href: webConsultationUrl,
        external: true,
      },
      {
        label: "Documentos e Demonstrativos",
        href: "/transparencia/documentos",
      },
      {
        label: "Créditos Recebíveis",
        href: "/transparencia/creditos-recebiveis",
      },
      { label: "Declaração de Obras", href: "/transparencia/declaracao-obras" },
      { label: "ISRC", href: "/transparencia/isrc" },
    ],
  },
  {
    label: "Serviços",
    children: [
      { label: "Gestão Individual", href: "/servicos/gestao-individual" },
      {
        label: "Direito Autoral",
        children: [
          {
            label: "O que é direito autoral?",
            href: "/servicos/direito-autoral/o-que-e-direito-autoral",
          },
          {
            label: "ECAD",
            href: "/servicos/direito-autoral/ecad",
          },
          {
            label: "Calendário",
            href: "/servicos/direito-autoral/calendario",
          },
          {
            label: "Legislação",
            href: "/servicos/direito-autoral/legislacao",
          },
        ],
      },
      // {
      //   label: "Digital",
      //   children: [
      //     { label: "Distribuição", href: "/digital/distribuicao" },
      //     { label: "Execução Pública", href: "/digital/execucao-publica" },
      //     { label: "Reprodução", href: "/digital/reproducao" },
      //   ],
      // },

      { label: "Filiação Socinpro", href: "/servicos/filiacao-socinpro" },
    ],
  },
  {
    label: "Digital",
    children: [
      { label: "Distribuição", href: "/digital/distribuicao" },
      { label: "Execução Pública", href: "/digital/execucao-publica" },
      { label: "Reprodução", href: "/digital/reproducao" },
    ],
  },
  {
    label: "Internacional",
    href: "/servicos/direito-internacional",
  },

  {
    label: "Comunicação",
    children: [{ label: "Notícias", href: "/comunicacao/noticias" }],
  },
];
