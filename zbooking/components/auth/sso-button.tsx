"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { OAuthCallbackURL } from "@/app/lib/constants";

export function SSOButton({
  provider,
  icon,
}: {
  provider: string;
  icon: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/sign-in/social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider: provider.toLowerCase(),
          callbackURL: OAuthCallbackURL,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
  }

  return (
    <Button variant="social" onClick={handleClick} disabled={loading}>
      {icon}
      {provider}
    </Button>
  );
}
