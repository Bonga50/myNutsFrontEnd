import { AuthErrorCode } from "./enums";

export const ERROR_MESSAGES: Record<string, string> = {
  [AuthErrorCode.INVALID_ORIGIN]:
    "Connection issue. Please refresh and try again.",
  [AuthErrorCode.FAILED_TO_CREATE_USER]:
    "Could not create account. The email may already be in use.",
  [AuthErrorCode.USER_ALREADY_EXISTS]:
    "An account with this email already exists.",
  [AuthErrorCode.INVALID_EMAIL]: "Please enter a valid email address.",
  [AuthErrorCode.INVALID_PASSWORD]:
    "Password must be at least 8 characters.",
  [AuthErrorCode.INVALID_CREDENTIALS]: "Invalid email or password.",
  [AuthErrorCode.USER_NOT_FOUND]: "No account found with this email.",
};
