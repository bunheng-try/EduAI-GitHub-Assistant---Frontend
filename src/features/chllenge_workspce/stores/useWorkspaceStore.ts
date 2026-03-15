import { create } from "zustand";

type WorkspaceState = {
    codes: Record<number, string>;
    currentChallengeId: number | null;

    setCurrentChallenge: (id: number) => void;
    setCode: (challengeId: number, code: string) => void;
    getCode: (challengeId: number) => string;
};

export const useWorkspaceStore = create<WorkspaceState>((set, get) => ({
    codes: {},
    currentChallengeId: null,

    setCurrentChallenge: (id) => set({ currentChallengeId: id }),

    setCode: (challengeId, code) =>
        set((state) => ({
            codes: { ...state.codes, [challengeId]: code },
        })),

    getCode: (challengeId) => get().codes[challengeId] ?? "",
}));