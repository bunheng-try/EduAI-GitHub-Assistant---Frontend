import { create } from "zustand";
import type { Classroom } from "../types/classroom";

// interface ClassroomState {
//   selectedClassroom: Classroom | null;
//   setSelectedClassroom: (classroom: Classroom) => void;
// }

// export const useClassroomStore = create<ClassroomState>((set) => ({
//   selectedClassroom: null,
//   setSelectedClassroom: (classroom) =>
//     set({ selectedClassroom: classroom }),
// }));

// import { create } from 'zustand'

interface ClassroomState {
  selectedClassroomId: string | null
  setSelectedClassroomId: (id: string | null) => void
}

export const useClassroomStore = create<ClassroomState>((set) => ({
  selectedClassroomId: null,
  setSelectedClassroomId: (id) => set({ selectedClassroomId: id }),
}))


