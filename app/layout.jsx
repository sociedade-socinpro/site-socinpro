import "@/styles/globals.css";
import { roboto } from "@/styles/fonts";

import Providers from "./providers";

import { SidebarProvider } from "@/components/ui/sidebar";
import { MainSidebar } from "@/components/MainSidebar";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";

export const metadata = {
  title:
    "SOCINPRO - Sociedade Brasileira de Administração e Proteção de Direitos Intelectuais",
  description:
    "Desde 1962 defendendo o direito autoral no Brasil. Conheça nossos serviços de administração e proteção de direitos intelectuais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.className} antialiased`}>
        <Providers>
          <SidebarProvider defaultOpen={false}>
            <MainSidebar />
            <div className="flex flex-col flex-1 min-h-screen w-screen overflow-x-hidden">
              <MainNav />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
