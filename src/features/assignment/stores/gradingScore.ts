import { create } from "zustand";

interface GradingState {
  score: string;
  feedback: string;
  setScore: (score: string) => void;
  setFeedback: (feedback: string) => void;
  reset: () => void;
}

export const useGradingStore = create<GradingState>((set) => ({
  score: "",
  feedback: "",
  setScore: (score) => set({ score }),
  setFeedback: (feedback) => set({ feedback }),
  reset: () => set({ score: "", feedback: "" }),
}));
