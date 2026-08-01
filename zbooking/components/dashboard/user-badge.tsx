"use client";

import { Button, IconButton } from "@/components/ui";

function LogOutIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  );
}

export function UserBadge({
  user,
  collapsed,
  onLogout,
}: {
  user: { name: string; email: string };
  collapsed: boolean;
  onLogout: () => void;
}) {
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="border-t-2 border-[#171717] p-4">
      <div
        className={[
          "flex items-center border-2 border-[#171717] bg-cream",
          collapsed ? "justify-center p-2" : "gap-3 p-3",
        ].join(" ")}
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center bg-coral font-sans text-sm font-black tracking-tight text-cream"
          title={collapsed ? `${user.name} (${user.email})` : undefined}
        >
          {initials}
        </div>
        {!collapsed && (
          <div className="min-w-0 flex-1">
            <p className="truncate font-sans text-sm font-bold tracking-tight">
              {user.name}
            </p>
            <p className="truncate text-xs tracking-tight text-[#171717]/60">
              {user.email}
            </p>
          </div>
        )}
      </div>
      {collapsed ? (
        <IconButton
          className="mt-3 w-full"
          onClick={onLogout}
          aria-label="Log out"
        >
          <LogOutIcon />
        </IconButton>
      ) : (
        <Button
          variant="outline"
          fullWidth
          className="mt-3"
          onClick={onLogout}
        >
          <LogOutIcon />
          Log out
        </Button>
      )}
    </div>
  );
}
