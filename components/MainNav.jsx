import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

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
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
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
            {publicLinks.map((group) => (
              <NavSection key={group.label} item={group} />
            ))}
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
        <div className="mx-auto sm:mx-0 sm:ml-auto flex gap-4">
          <Button variant="outline" size="lg" asChild>
            <Link href="/servicos/filiacao-socinpro">Filie-se</Link>
          </Button>
          <Link href="/contato">
            <Button size="lg">Contato</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavSection({ item }) {
  if (!Array.isArray(item.children) || item.children.length === 0) return null;

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[200px]">
          <NavSubmenu items={item.children} />
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function NavSubmenu({ items }) {
  return items.map((node) => {
    if (Array.isArray(node.children) && node.children.length > 0) {
      return (
        <li key={node.label}>
          <Collapsible>
            <CollapsibleTrigger asChild className="group">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 hover:bg-teal/10 hover:font-semibold focus:font-semibold focus:bg-teal/10 text-sm leading-none text-teal font-medium transition-colors duration-200"
              >
                <span>{node.label}</span>
                <ChevronRightIcon className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul className="pl-4">
                <NavSubmenu items={node.children} />
              </ul>
            </CollapsibleContent>
          </Collapsible>
        </li>
      );
    } else {
      return <NavLinkItem key={node.label} item={node} />;
    }
  });
}

function NavLinkItem({ item }) {
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
