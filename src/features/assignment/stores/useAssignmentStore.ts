import { create } from "zustand";

interface AssignmentState {
  selectedAssignmentId: string | null;
  setSelectedAssignmentId: (id: string | null) => void;
}

export const useAssignmentStore = create<AssignmentState>((set) => ({
  selectedAssignmentId: null,
  setSelectedAssignmentId: (id) =>
    set({ selectedAssignmentId: id }),
}));
