import type {
  AuthResponse,
  SignUpInput,
  SignInInput,
} from "@/app/lib/types";
import { ERROR_MESSAGES } from "@/app/lib/constants";

async function request<T>(
  endpoint: string,
  body: Record<string, unknown>,
): Promise<T> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    const friendly = error.code ? ERROR_MESSAGES[error.code] : undefined;
    throw {
      message: friendly || error.message || "Something went wrong",
      status: res.status,
    };
  }

  return res.json();
}

export async function signUp(data: SignUpInput): Promise<AuthResponse> {
  return request<AuthResponse>("/api/auth/sign-up/email", data);
}

export async function signIn(data: SignInInput): Promise<AuthResponse> {
  return request<AuthResponse>("/api/auth/sign-in/email", data);
}

export async function getSession(): Promise<AuthResponse | null> {
  const res = await fetch("/api/auth/get-session", {
    credentials: "include",
  });
  if (!res.ok) return null;
  return res.json();
}

export async function signOut(): Promise<void> {
  await fetch("/api/auth/sign-out", {
    method: "POST",
    credentials: "include",
  });
}
