export const MESSAGES = {
  AUTH: {
    REGISTER_SUCCESS: "User registered successfully",
    LOGIN_SUCCESS: "Login successful",
    INVALID_CREDENTIALS: "Invalid email or password",
    EMAIL_ALREADY_EXISTS: "Email already in use",
    ROLE_MISSING: "Role missing",
    INVALID_ROLE: "Invalid role",
    UNAUTHORIZED: "Unauthorized",
    TOKEN_EXPIRED: "Token expired or invalid",
    REFRESH_TOKEN_INVALID: "Invalid refresh token",
    REFRESH_TOKEN_EXPIRED: "Refresh token expired",
  },

  USER: {
    PROFILE_FETCH_SUCCESS: "User profile fetched successfully",
  },

  ADMIN: {
    USERS_FETCH_SUCCESS: "Users fetched successfully",
    ADMIN_ONLY: "Admin access only",
  },

  COMMON: {
    INTERNAL_SERVER_ERROR: "Internal server error",
    BAD_REQUEST: "Bad request",
  },
} as const;
