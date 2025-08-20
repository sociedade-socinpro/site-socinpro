import Image from "next/image";
import Link from "next/link";

import {
  socialLinks,
  socinproAddress,
  socinproEmail,
  socinproPhone,
} from "@/constants/socinproInfo";
import { publicLinks } from "@/constants/navigationLinks";

import { CopyrightFooter } from "@/components/CopyrightFooter";
import { NewsletterForm } from "./NewsletterForm";

import Logo from "@/public/icons/logo.svg";

export function Footer() {
  return (
    <footer>
      <div className="px-[6%] md:px-[14%] bg-coal-900">
        <div className="py-8 lg:py-12 text-white text-xs sm:text-sm text-center md:text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 2xl:max-w-[1920px] mx-auto">
          <div className="flex flex-col uppercase">
            <Image
              src={Logo}
              alt="Logo"
              height={84}
              className="-mt-6 mx-auto md:mx-0"
            />
            <span className="space-y-4">
              <p>
                Referência em gestão de direitos autorais, valorizando artistas
                e suas obras desde 1962
              </p>
              <p>{socinproPhone}</p>
              <p>{socinproAddress}</p>
              <p>{socinproEmail}</p>
            </span>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-normal text-sm sm:text-base mb-6">Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 uppercase">
              {publicLinks.map((section) => (
                <div key={section.label}>
                  {section.href ? (
                    <Link
                      href={section.href}
                      className="font-semibold text-xs sm:text-sm mb-2"
                    >
                      {section.label}
                    </Link>
                  ) : (
                    <h4 className="font-semibold text-xs sm:text-sm mb-2">
                      {section.label}
                    </h4>
                  )}
                  <FooterLinksTree items={section.children} />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div>
              <h3 className="font-normal text-sm sm:text-base mb-6">
                Redes Sociais
              </h3>
              <ul className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
      <CopyrightFooter />
    </footer>
  );
}

function FooterLinksTree({ items }) {
  return (
    <ul className="space-y-1 pl-1">
      {items?.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <Link
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="hover:text-teal transition-colors duration-200 block"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium mb-1 block">{item.label}</span>
          )}
          {Array.isArray(item.children) && item.children.length > 0 && (
            <FooterLinksTree items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
}
