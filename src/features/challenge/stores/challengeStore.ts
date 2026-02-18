import { create } from "zustand";
import type { Challenge }  from "../types/challenge";

interface ChallengeState {
    challenges: Challenge[];
    selectedChallengeId: string | null;

    selectChallenge: (id: string) => void;

    createChallenge: (challenge: Challenge) => void;
    updateChallenge: (challenge: Challenge) => void;
    deleteChallenge: (id: string) => void;
}

export const useChallengeStore = create<ChallengeState>((set, get) => ({
    challenges: [],
    selectedChallengeId: null,

    selectChallenge: (id) => set({ selectedChallengeId: id }),

    createChallenge: (challenge) =>
        set((state) => ({
            challenges: [...state.challenges, challenge],
            selectedChallengeId: challenge.id,
        })),

    updateChallenge: (updated) =>
        set((state) => ({
            challenges: state.challenges.map((c) =>
                c.id === updated.id ? updated : c
            ),
        })),

    deleteChallenge: (id) => {
        const filtered = get().challenges.filter((c) => c.id !== id);

        set({
            challenges: filtered,
            selectedChallengeId: filtered.length > 0 ? filtered[0].id : null,
        });
    },
}));
