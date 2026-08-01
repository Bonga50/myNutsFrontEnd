"use client";

import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/app/lib/constants";
import { SidebarNavItem } from "./sidebar-nav-item";

export function SidebarNav({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col gap-1.5 p-4">
      {NAV_ITEMS.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <SidebarNavItem
            key={item.href}
            item={item}
            active={active}
            collapsed={collapsed}
          />
        );
      })}
    </nav>
  );
}
