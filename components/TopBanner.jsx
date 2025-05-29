import Link from "next/link";

import { socialLinks } from "@/constants/socinprotInfo";

export function TopBanner() {
  return (
    <div className="hidden lg:flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4 px-[6%] xl:px-[14%] py-2 bg-teal text-white text-center text-[10px] sm:text-xs">
      <p className="font-bold">
        SOCINPRO - Sociedade Brasileira de Administração e Proteção de Direitos
        Intelectuais
        <span className="font-normal">
          {" "}
          - Desde 1962 defendendo o direito autoral.
        </span>
      </p>
      <div className="flex gap-4 items-center">
        <p>Nos Siga nas Redes Sociais</p>
        <ul className="flex gap-4">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <div className="h-5 w-5 lg:h-6 lg:w-6 rounded-full bg-white flex items-center justify-center p-1">
                  {link.icon}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
