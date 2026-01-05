// features/auth/apis/auth.api.ts
import type { AuthFormData, AuthResponse } from "@/shared/types/auth";

export const authApi = {
  signIn: async (data: { email: string; password: string }) => {
    return new Promise<AuthResponse>((resolve, reject) => {
      setTimeout(() => {
        if (data.email && data.password) {
          resolve({
            token: "mock-jwt-token-12345",
            user: {
              id: "user_123",
              email: data.email,
              name: data.email.split("@")[0],
            },
          });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  },

  signUp: async (data: AuthFormData) => {
    return new Promise<AuthResponse>((resolve, reject) => {
      setTimeout(() => {
        if (data.email && data.password && data.name) {
          resolve({
            token: "mock-jwt-token-67890",
            user: {
              id: `user_${Date.now()}`,
              email: data.email,
              name: data.name,
            },
          });
        } else {
          reject(new Error("Invalid signup data"));
        }
      }, 1000);
    });
  },
};