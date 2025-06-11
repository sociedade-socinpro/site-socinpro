import Link from "next/link";
import Image from "next/image";

import { publicLinks } from "@/constants/navigationLinks";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

import Logo from "@/public/icons/logo.svg";

export function MainNav() {
  return (
    <header className="z-20 bg-coal-900 px-[6%] xl:px-[14%]">
      <div className="flex flex-col sm:flex-row sm:gap-4 sm:items-center pt-2 pb-4 sm:py-0 min-h-20 2xl:max-w-[1920px] mx-auto">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="absolute sm:relative xl:hidden z-10" />
          <Link
            href="/"
            className="flex-1 flex items-center justify-center h-16 min-w-24 xl:min-w-32 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal"
          >
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="hidden xl:flex min-h-full w-0.5 bg-white/10" />
        <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList>
            {publicLinks.map((link) => (
              <Submenu key={link.label} item={link} />
            ))}
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
        <div className="mx-auto sm:mx-0 sm:ml-auto flex gap-4">
          <Button variant="outline" size="lg">
            Filie-se
          </Button>
          <Button size="lg">Contato</Button>
        </div>
      </div>
    </header>
  );
}

function Submenu({ item }) {
  if (!Array.isArray(item.children) || item.children.length === 0) {
    return null;
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[200px]">
          {item.children.map((sub) => (
            <ListItem key={sub.label} item={sub} />
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function ListItem({ item }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={item.href}
          {...(item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <p className="px-4 py-3 hover:bg-teal/10 hover:font-semibold focus:font-semibold focus:bg-teal/10 text-sm leading-none text-teal font-medium transition-colors duration-200">
            {item.label}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
