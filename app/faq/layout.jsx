import { FaqTopBanner } from "@/components/FaqTopBanner";

export const metadata = {
  title: "SOCINPRO Responde - Perguntas Frequentes",
  description:
    "Encontre respostas para suas perguntas sobre o universo da música, direitos autorais, serviços e muito mais com a SOCINPRO.",
};

export default function FaqLayout({ children }) {
  return (
    <div className="flex flex-col bg-coal-800 flex-1 min-h-screen w-screen overflow-x-hidden bg-[url('/images/faq_bg.png')] bg-center bg-cover">
      <FaqTopBanner />
      <main className="flex flex-col flex-1 w-full 2xl:max-w-[1920px] mx-auto">
        {children}
      </main>
    </div>
  );
}
