import Image from "next/image";
import Link from "next/link";

import {
  socialLinks,
  socinproAddress,
  socinproEmail,
  socinproPhone,
} from "@/constants/socinprotInfo";
import { publicLinks } from "@/constants/navigationLinks";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CopyrightFooter } from "@/components/CopyrightFooter";

import Logo from "@/public/icons/logo.svg";

export function Footer() {
  return (
    <footer>
      <div className="px-[6%] md:px-[14%] py-8 lg:py-12 bg-coal-900 text-white text-xs sm:text-sm text-center md:text-left justify-items-center md:justify-items-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col uppercase">
          <Image
            src={Logo}
            alt="Logo"
            height={84}
            className="-mt-6 mx-auto md:mx-0"
          />
          <span className="space-y-4">
            <p>
              Referência em gestão de direitos autorais, valorizando artistas e
              suas obras desde 1962
            </p>
            <p>{socinproPhone}</p>
            <p>{socinproAddress}</p>
            <p>{socinproEmail}</p>
          </span>
        </div>
        <div>
          <h3 className="font-normal text-sm sm:text-base mb-6">Links</h3>
          <ul className="space-y-4 uppercase">
            {publicLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href={"/"}>Termos Legais</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-normal text-sm sm:text-base mb-6">
            Redes Sociais
          </h3>
          <ul className="flex gap-4">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center p-1">
                    {link.icon}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base sm:text-lg uppercase mb-6">
            Fique por dentro de todas as novidades do mercado da música:
          </h3>
          <div className="flex flex-col gap-2">
            <Input
              placeholder="Seu melhor e-mail"
              type="email"
              className="border border-neutral-600 bg-transparent placeholder:text-neutral-200 text-white"
            />
            <Button size="lg">Inscreva-se</Button>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </footer>
  );
}
