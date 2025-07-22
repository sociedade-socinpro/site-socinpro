"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

export function FaqPagination({ currentPage, totalPages, basePath }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <nav aria-label="Paginação do FAQ" className="mt-8">
      <ul
        className="flex justify-center items-center gap-2 opacity-0 animate-fade-in"
        role="list"
      >
        <li>
          <Button asChild className="sm:[&_svg]:size-5 sm:h-12">
            <Link href="/faq" aria-label="Ir para a página inicial do FAQ">
              <Home size={24} />
            </Link>
          </Button>
        </li>
        {pages.length > 0 && (
          <li role="presentation" aria-hidden="true">
            <Separator
              orientation="vertical"
              className="bg-coal-300 h-10 sm:h-12 mx-2"
            />
          </li>
        )}
        {currentPage > 0 && (
          <li>
            <Button asChild className="sm:[&_svg]:size-5 sm:h-12">
              <Link
                href={`${basePath}?${new URLSearchParams({
                  pagina: currentPage - 1,
                })}`}
                rel="prev"
                aria-label={`Página anterior, página ${currentPage}`}
              >
                <ArrowLeft size={20} />
              </Link>
            </Button>
          </li>
        )}
        {pages.map((page) => (
          <li key={page}>
            <Link
              href={`${basePath}?${new URLSearchParams({ pagina: page })}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              <Button
                className="sm:h-12 sm:px-6"
                variant={page === currentPage ? "outline" : "ghost"}
              >
                {page + 1}
              </Button>
            </Link>
          </li>
        ))}
        {currentPage < totalPages - 1 && (
          <li>
            <Button asChild className="sm:[&_svg]:size-5 sm:h-12">
              <Link
                href={`${basePath}?${new URLSearchParams({
                  pagina: currentPage + 1,
                })}`}
                rel="next"
                aria-label={`Próxima página, página ${currentPage + 2}`}
              >
                <ArrowRight size={20} />
              </Link>
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
