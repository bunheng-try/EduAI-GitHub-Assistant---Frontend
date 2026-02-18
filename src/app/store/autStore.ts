import { create } from "zustand";

type AuthState = {
    user: { id: number; name: string; email: string } | null;
    token: string | null;
    setAuth: (user: AuthState["user"], token: string) => void;
    clearAuth: () => void;
    getToken: () => string | null;
};

export const useAuthStore = create<AuthState>((set, get) => ({
    user: null,
    token: null,
    setAuth: (user, token) => set({ user, token }),
    clearAuth: () => set({ user: null, token: null }),
    getToken: () => get().token,
}));

export const getAuthToken = () => useAuthStore.getState().token;
