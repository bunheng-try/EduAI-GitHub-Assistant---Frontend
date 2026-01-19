import type { Class } from "../types/classesType";

const MOCK_DATA: Class[] = [
  {
    id: "c1",
    name: "Math 101",
    assignments: [
      { id: "a1", title: "Algebra Homework", description: "Solve 10 problems", dueDate: "2025-12-05" },
      { id: "a2", title: "Geometry Project", description: "Make shapes model", dueDate: "2025-12-10" }
    ]
  },
  {
    id: "c2",
    name: "History 101",
    assignments: [
      { id: "a3", title: "Essay", description: "Write 3 pages", dueDate: "2025-12-07" }
    ]
  }
];

export const fetchClasses = async (): Promise<Class[]> => {
  // Simulate API call
  return new Promise(resolve => setTimeout(() => resolve(MOCK_DATA), 500));
};
