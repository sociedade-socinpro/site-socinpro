import Link from "next/link";

import {
  socialLinks,
  socinproAddress,
  socinproEmail,
  socinproPhone,
} from "@/constants/socinprotInfo";

export const ContactSection = () => {
  return (
    <div className="flex flex-1 flex-col gap-8 font-bold text-base sm:text-lg md:text-xl lg:text-2xl uppercase">
      <div>
        <p className="normal-case font-normal text-sm lg:text-base">Endereço</p>
        <p>{socinproAddress}</p>
      </div>
      <div>
        <p className="normal-case font-normal text-sm lg:text-base">Contato</p>
        <p>{socinproPhone}</p>
        <p>{socinproEmail}</p>
      </div>
      <div>
        <p className="normal-case font-normal text-sm lg:text-base">
          Siga-nos nas Redes Sociais
        </p>
        <ul className="flex gap-4 mt-2">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <div className="h-6 w-6">{link.icon}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
