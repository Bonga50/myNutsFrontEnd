"use client";

import Link from "next/link";
import type { NavItem as NavItemType } from "@/app/lib/constants";

export function SidebarNavItem({
  item,
  active,
  collapsed,
}: {
  item: NavItemType;
  active: boolean;
  collapsed: boolean;
}) {
  return (
    <Link
      href={item.href}
      title={collapsed ? item.label : undefined}
      className={[
        "flex items-center border-2 font-sans text-sm font-bold tracking-tight transition-colors",
        collapsed ? "justify-center px-0 py-2.5" : "gap-3 px-4 py-2.5",
        active
          ? "border-[#171717] bg-sage"
          : "border-transparent hover:border-[#171717]/30 hover:bg-[#171717]/5",
      ].join(" ")}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d={item.icon} />
      </svg>
      {!collapsed && item.label}
    </Link>
  );
}
