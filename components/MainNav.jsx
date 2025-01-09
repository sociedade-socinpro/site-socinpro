import Link from "next/link";
import Image from "next/image";

import { publicLinks } from "@/constants/navigationLinks";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

import Logo from "@/public/icons/logo.svg";

export function MainNav() {
  return (
    <header className="flex flex-col sm:flex-row bg-coal-900 px-4 py-2 sm:gap-4 sm:items-center min-h-20 lg:px-[10%] xl:px-[16%]">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="absolute sm:relative lg:hidden" />
        <Link
          href="/"
          className="flex flex-1 items-center justify-center h-18 min-w-24 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal"
        >
          <Image src={Logo} alt="Logo" height={76} priority />
        </Link>
      </div>
      <div className="hidden lg:flex min-h-full w-0.5 bg-white/10" />
      <NavigationMenu className="hidden lg:flex shrink">
        <NavigationMenuList>
          {publicLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="mx-auto sm:mx-0 sm:ml-auto flex gap-4">
        <Button variant="outline" size="lg">
          Filie-se
        </Button>
        <Button size="lg">Contato</Button>
      </div>
    </header>
  );
}
