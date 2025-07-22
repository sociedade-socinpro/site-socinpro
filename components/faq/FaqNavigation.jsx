"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Separator } from "@/components/ui/separator";

function truncate(text = "", max = 30) {
  return text.length > max ? text.slice(0, max) + "…" : text;
}

export function FaqNavigation({ categoryId, categoryTitle, faqTitle }) {
  const router = useRouter();

  const crumbs = [
    { href: "/faq/categorias", label: "SOCINPRO Responde", clickable: true },
  ];

  if (categoryId && categoryTitle) {
    crumbs.push({
      href: `/faq/categorias/${categoryId}/perguntas-frequentes`,
      label: truncate(categoryTitle, 30),
      clickable: true,
    });
  }

  if (faqTitle) {
    crumbs.push({
      label: truncate(faqTitle, 30),
      clickable: false,
    });
  }

  const prevHref = crumbs.length > 1 ? crumbs[crumbs.length - 2].href : "/faq";

  return (
    <div className="opacity-0 animate-fade-in">
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push(prevHref)}
          aria-label="Voltar"
          className="bg-white rounded-full p-1 sm:p-2 hover:bg-gray-200 transition duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-teal-400"
        >
          <ArrowLeft />
        </button>
        <nav aria-label="Breadcrumb" className="flex items-center">
          <ol className="flex flex-wrap gap-2 uppercase text-lg sm:text-xl xl:text-2xl">
            {crumbs.map((crumb, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li
                  key={i}
                  aria-current={isLast ? "page" : undefined}
                  className="flex items-center"
                >
                  {crumb.clickable && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="text-teal underline hover:text-teal-400 transition duration-200"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-coal-200">{crumb.label}</span>
                  )}
                  {!isLast && (
                    <span
                      className="text-coal-200 mx-2 select-none"
                      aria-hidden="true"
                    >
                      /
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
      <Separator className="my-8 bg-coal-300" />
    </div>
  );
}
