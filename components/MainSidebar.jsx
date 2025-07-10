"use client";

import React, { useRef, useCallback } from "react";
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
                    <SidebarNode node={item} />
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

function SidebarNode({ node }) {
  const triggerRef = useRef(null);

  const attachTriggerRef = useCallback((el) => {
    if (el instanceof HTMLElement) {
      triggerRef.current = el;
    }
  }, []);

  if (Array.isArray(node.children) && node.children.length > 0) {
    return (
      <Collapsible
        onOpenChange={(open) => {
          if (!open) triggerRef.current?.focus();
        }}
      >
        <CollapsibleTrigger asChild className="group">
          <SidebarMenuButton
            ref={attachTriggerRef}
            className="flex items-center justify-between w-full transition-colors duration-200 hover:text-teal focus:text-teal focus:bg-teal/10"
          >
            <span>{node.label}</span>
            <ChevronRightIcon className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {node.children.map((child) => (
              <SidebarMenuSubItem key={child.label}>
                <SidebarNode node={child} />
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    );
  }
  return (
    <SidebarMenuSubButton
      asChild
      className="transition-colors duration-200 hover:text-teal focus:text-teal focus:bg-teal/10 hover:font-medium focus:font-medium"
    >
      {node.external ? (
        <Link href={node.href} target="_blank" rel="noopener noreferrer">
          {node.label}
        </Link>
      ) : (
        <Link href={node.href}>{node.label}</Link>
      )}
    </SidebarMenuSubButton>
  );
}
