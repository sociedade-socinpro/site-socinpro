import * as React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import { publicLinks } from "@/constants/navigationLinks";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

export function MainSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <nav aria-label="Navegação Lateral" className="w-full xl:hidden">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="transition-colors duration-200 hover:text-teal focus:text-teal"
                  >
                    <Link href="/">Início</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {publicLinks.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <Collapsible>
                      <CollapsibleTrigger asChild className="group">
                        <SidebarMenuButton className="flex items-center justify-between w-full transition-colors duration-200 hover:text-teal focus:text-teal">
                          <span>{item.label}</span>
                          <ChevronRightIcon className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.children.map((sub) => (
                            <SidebarMenuSubItem key={sub.label}>
                              <SidebarMenuSubButton
                                asChild
                                className="transition-colors duration-200 hover:text-teal focus:text-teal hover:font-medium focus:font-medium"
                              >
                                {sub.external ? (
                                  <Link
                                    href={sub.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {sub.label}
                                  </Link>
                                ) : (
                                  <Link href={sub.href}>{sub.label}</Link>
                                )}
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </nav>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
