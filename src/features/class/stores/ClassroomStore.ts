import { create } from "zustand";
import type { Classroom } from "../types/Classroom";

interface ClassroomState {
  selectedClassroom: Classroom | null;
  setSelectedClassroom: (classroom: Classroom) => void;
}

export const useClassroomStore = create<ClassroomState>((set) => ({
  selectedClassroom: null,
  setSelectedClassroom: (classroom) =>
    set({ selectedClassroom: classroom }),
}));
