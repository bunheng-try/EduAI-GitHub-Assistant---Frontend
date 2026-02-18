// features/challenge/stores/challengeStore.ts

import { create } from "zustand";
import type { LibraryChallenge } from "../types/challenge";
import { mockLibraryChallenges } from "../challenge.mock";

interface ChallengeStore {
  challenges: LibraryChallenge[];
  selectedChallenge: LibraryChallenge | null;

  setSelectedChallenge: (challenge: LibraryChallenge | null) => void;
  addChallenge: (challenge: LibraryChallenge) => void;
  updateChallenge: (updated: LibraryChallenge) => void;
  deleteChallenge: (id: string) => void;
}

export const useChallengeStore = create<ChallengeStore>((set) => ({
  challenges: mockLibraryChallenges,
  selectedChallenge: mockLibraryChallenges[0] ?? null,

  setSelectedChallenge: (challenge) =>
    set({ selectedChallenge: challenge }),

  addChallenge: (challenge) =>
    set((state) => ({
      challenges: [...state.challenges, challenge],
      selectedChallenge: challenge,
    })),

  updateChallenge: (updated) =>
    set((state) => ({
      challenges: state.challenges.map((c) =>
        c.id === updated.id ? updated : c
      ),
      selectedChallenge:
        state.selectedChallenge?.id === updated.id
          ? updated
          : state.selectedChallenge,
    })),

  deleteChallenge: (id) =>
    set((state) => {
      const remaining = state.challenges.filter((c) => c.id !== id);
      const wasSelected = state.selectedChallenge?.id === id;
      return {
        challenges: remaining,
        // Auto-select next challenge, or null if none left → shows empty state
        selectedChallenge: wasSelected
          ? (remaining[0] ?? null)
          : state.selectedChallenge,
      };
    }),
}));