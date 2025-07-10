import fs from "fs";
import path from "path";
import Link from "next/link";

import { cn } from "@/utils/utils";

import { PageHeader } from "@/components/shared/PageHeader";
import { SupportSection } from "@/components/shared/SupportSection";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = {
  title: "SOCINPRO – Legislação de Direito Autoral",
  description:
    "Conheça as leis que garantem a proteção dos direitos autorais no Brasil.",
};

const legislationTab = [
  { key: "l9610", label: "Lei 9.610/98" },
  { key: "l12853", label: "Lei 12.853" },
];

async function loadText(key) {
  const filePath = path.join(process.cwd(), "data/legislations", `${key}.html`);
  return fs.promises.readFile(filePath, "utf-8");
}

export default async function Page({ searchParams }) {
  const { legislation: rawLegislation } = await searchParams;
  const activeTab = legislationTab.some((l) => l.key === rawLegislation)
    ? rawLegislation
    : "l9610";
  const text = await loadText(activeTab);

  return (
    <>
      <PageHeader
        title="As Leis que Protegem a Música"
        description={
          <>
            conheça a base legal que garante <br />o direito dos criadores no
            Brasil
          </>
        }
      />
      <div className="py-12 space-y-24">
        <section
          className="text-center px-6 md:px-14 space-y-10"
          aria-labelledby="legislacao-direito-autoral"
        >
          <p
            className="text-sm md:text-base opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            O trabalho da Socinpro e do Ecad é fundamentado em um conjunto de
            leis e decretos que garantem a proteção e a justa remuneração dos
            titulares de direitos autorais.
          </p>
          <SectionTitle
            id="normas-de-direito-autoral"
            style={{ animationDelay: "500ms" }}
          >
            Principais Normas de Direito Autoral:
          </SectionTitle>
          <div
            className="flex justify-center text-sm sm:text-base sm:space-x-4 opacity-0 animate-fade-in"
            id="tabs"
          >
            {legislationTab.map((l) => (
              <Link
                key={l.key}
                aria-current={activeTab === l.key ? "page" : undefined}
                href={`/servicos/direito-autoral/legislacao?legislation=${l.key}#tabs`}
                className={cn(
                  "flex-1 sm:flex-none px-2 sm:px-8 py-2 border-b-2 transition-all uppercase",
                  activeTab === l.key
                    ? "border-teal text-teal font-semibold"
                    : "border-transparent text-gray-600 hover:text-teal hover:font-medium"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div
            className="opacity-0 animate-fade-in legislation"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </section>
        <SupportSection />
      </div>
    </>
  );
}
