type AuthResponse = {
  user: {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image: string | null;
    role: string;
    createdAt: string;
    updatedAt: string;
  };
  session: {
    id: string;
    userId: string;
    token: string;
    expiresAt: string;
    ipAddress: string | null;
    userAgent: string | null;
    createdAt: string;
    updatedAt: string;
  };
};

const ERROR_MESSAGES: Record<string, string> = {
  INVALID_ORIGIN: "Connection issue. Please refresh and try again.",
  FAILED_TO_CREATE_USER: "Could not create account. The email may already be in use.",
  USER_ALREADY_EXISTS: "An account with this email already exists.",
  INVALID_EMAIL: "Please enter a valid email address.",
  INVALID_PASSWORD: "Password must be at least 8 characters.",
  INVALID_CREDENTIALS: "Invalid email or password.",
  USER_NOT_FOUND: "No account found with this email.",
};

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
    throw { message: friendly || error.message || "Something went wrong", status: res.status };
  }

  return res.json();
}

export async function signUp(data: {
  name: string;
  email: string;
  password: string;
}): Promise<AuthResponse> {
  return request<AuthResponse>("/api/auth/sign-up/email", data);
}

export async function signIn(data: {
  email: string;
  password: string;
  rememberMe?: boolean;
}): Promise<AuthResponse> {
  return request<AuthResponse>("/api/auth/sign-in/email", data);
}
