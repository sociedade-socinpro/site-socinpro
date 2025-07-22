import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/icons/logo.svg";

export function FaqTopBanner() {
  return (
    <div className="flex items-center justify-center bg-teal">
      <Link
        href="/faq"
        className="cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-coal-100 opacity-0 animate-fade-in"
      >
        <Image
          src={Logo}
          alt="Logo"
          className="h-16 xl:h-20 w-auto"
          fetchPriority="high"
        />
      </Link>
    </div>
  );
}
