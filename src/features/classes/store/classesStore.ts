import { create } from "zustand";
import type { Class, Assignment } from "../types/classesType";

interface ClassesState {
  classes: Class[];
  selectedClass?: Class;
  selectedAssignment?: Assignment;
  setClasses: (classes: Class[]) => void;
  selectClass: (cls: Class) => void;
  selectAssignment: (assignment: Assignment) => void;
}

export const useClassesStore = create<ClassesState>(set => ({
  classes: [],
  selectedClass: undefined,
  selectedAssignment: undefined,
  setClasses: (classes: Class[]) => set({ classes }),
  selectClass: (selectedClass: Class) => set({ selectedClass, selectedAssignment: undefined }),
  selectAssignment: (selectedAssignment: Assignment) => set({ selectedAssignment }),
}));
