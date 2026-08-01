"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession, signOut } from "@/app/lib/auth";
import { ROUTES } from "@/app/lib/constants";
import type { User } from "@/app/lib/types";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    getSession()
      .then((session) => {
        if (!session?.user) {
          router.replace(ROUTES.SIGN_IN);
        } else {
          setUser(session.user);
        }
      })
      .finally(() => setChecking(false));
  }, [router]);

  async function handleLogout() {
    await signOut();
    router.replace(ROUTES.SIGN_IN);
  }

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm font-bold tracking-tight text-[#171717]/60">
          Checking session...
        </p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="flex min-h-screen flex-col bg-cream lg:flex-row">
      <Sidebar user={user} onLogout={handleLogout} />
      <main className="flex-1 px-4 py-6 sm:px-8 sm:py-8">{children}</main>
    </div>
  );
}
