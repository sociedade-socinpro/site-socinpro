import { PageHeader } from "@/components/shared/PageHeader";
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
      <PageHeader
        title="Corpo Administrativo da Sociedade"
        description={
          <>
            Uma Equipe Especializada para <br />
            Atender os Seus Objetivos
          </>
        }
      />
      <div className="py-12 space-y-24">
        <DirectorsSection showHeader={false} />
        <OrganizationSection />
        <SupportSection />
      </div>
    </>
  );
}
