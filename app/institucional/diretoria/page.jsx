import { SupportSection } from "@/components/shared/SupportSection";
import { DirectorsSection } from "@/components/institucional/DirectorsSection";
import { OrganizationSection } from "@/components/institucional/OrganizationSection";

export const metadata = {
  title: "SOCINPRO – Diretoria",
  description:
    "Conheça a equipe que lidera a Sociedade Brasileira de Direitos Autorais e Conexos",
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Diretoria da Socinpro – Conheça Nossa Equipe</h1>
      <div className="py-12 space-y-24">
        <DirectorsSection />
        <OrganizationSection />
        <SupportSection />
      </div>
    </>
  );
}
