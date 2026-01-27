import { create } from "zustand";

interface AssignmentTabsState {
  activeTab: string;
  selectedAssignmentTitle: string | null;
  setActiveTab: (tab: string) => void;
  setSelectedAssignmentTitle: (title: string) => void;
}

export const useAssignmentTabsStore = create<AssignmentTabsState>((set) => ({
  activeTab: "challenge",
  selectedAssignmentTitle: null,
  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedAssignmentTitle: (title) =>
    set({ selectedAssignmentTitle: title }),
}));