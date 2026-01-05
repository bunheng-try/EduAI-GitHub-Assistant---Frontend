// src/types/auth.ts
export type AuthFormData = {
  email: string;
  password: string;
  name?: string; // For signup only
  confirmPassword?: string; // For signup only
};

export type AuthResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
};