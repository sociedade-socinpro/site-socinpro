import { SidebarProvider } from "@/components/ui/sidebar";
import { MainSidebar } from "@/components/MainSidebar";
import { TopBanner } from "@/components/TopBanner";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title:
    "SOCINPRO - Sociedade Brasileira de Administração e Proteção de Direitos Intelectuais",
  description:
    "Desde 1962 defendendo o direito autoral no Brasil. Conheça nossos serviços de administração e proteção de direitos intelectuais.",
};

export default function SiteLayout({ children }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <MainSidebar />
      <div className="flex flex-col flex-1 min-h-screen w-screen overflow-x-hidden">
        <TopBanner />
        <MainNav />
        <main className="flex-1 w-full 2xl:max-w-[1920px] mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}
