export const APP_URL = "http://localhost:3000";

export const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  DASHBOARD: "/dashboard",
} as const;

export const OAuthCallbackURL = `${APP_URL}${ROUTES.DASHBOARD}`;
