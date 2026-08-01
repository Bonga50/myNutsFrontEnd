"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IconButton } from "@/components/ui";
import { SidebarNav } from "./sidebar-nav";
import { UserBadge } from "./user-badge";

function CollapseIcon({ collapsed }: { collapsed: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <line x1="9" y1="4" x2="9" y2="20" />
      {collapsed ? (
        <path d="M15.5 10l2 2-2 2" />
      ) : (
        <path d="M11.5 10l-2 2 2 2" />
      )}
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isDesktop;
}

export function Sidebar({
  user,
  onLogout,
}: {
  user: { name: string; email: string };
  onLogout: () => void;
}) {
  const pathname = usePathname();
  const isDesktop = useIsDesktop();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setCollapsed(localStorage.getItem("sidebar-collapsed") === "true");
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function toggleCollapsed() {
    setCollapsed((prev) => {
      localStorage.setItem("sidebar-collapsed", String(!prev));
      return !prev;
    });
  }

  const navCollapsed = isDesktop && collapsed;

  return (
    <>
      <header className="flex h-14 w-full items-center justify-between border-b-2 border-[#171717] bg-white px-4 lg:hidden">
        <span className="text-xl font-black tracking-tighter">zBooking</span>
        <IconButton
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#171717]/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r-2 border-[#171717] bg-white",
          "transition-transform duration-200 lg:static lg:translate-x-0 lg:transition-[width]",
          collapsed && "lg:w-20",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
      >
        <div className="flex h-14 items-center justify-between border-b-2 border-[#171717] px-4 lg:h-16">
          <span className="flex-1 px-2 text-xl font-black tracking-tighter lg:hidden">
            zBooking
          </span>
          <span
            className={[
              "hidden flex-1 text-xl font-black tracking-tighter lg:block",
              collapsed ? "text-center" : "px-2",
            ].join(" ")}
          >
            {collapsed ? "zB" : "zBooking"}
          </span>
          <IconButton
            className="lg:hidden"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            className="hidden lg:inline-flex"
            onClick={toggleCollapsed}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <CollapseIcon collapsed={collapsed} />
          </IconButton>
        </div>

        <SidebarNav collapsed={navCollapsed} />

        <UserBadge user={user} collapsed={navCollapsed} onLogout={onLogout} />
      </aside>
    </>
  );
}
