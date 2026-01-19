  import type { Classroom } from "./features/class/types/classroom";
import type { Assignment } from "./shared/types/types";
import Logo from "@/assets/logo/logo.png";
export const assignmentsStore: Record<number, Assignment[]> = {
  1: [
    { id: 1, title: "Math Homework 1", classId: 1 },
    { id: 2, title: "Math Project", classId: 1 },
    { id: 3, title: "Math Quiz 1", classId: 1 }
  ],
  2: [
    { id: 1, title: "Science Lab Report", classId: 2 },
    { id: 2, title: "Physics Assignment", classId: 2 },
    { id: 3, title: "Chemistry Quiz", classId: 2 }
  ],
  3: [
    { id: 1, title: "History Essay", classId: 3 },
    { id: 2, title: "Geography Project", classId: 3 },
    { id: 3, title: "Civics Assignment", classId: 3 }
  ]
};

export const classroomsStore: Classroom[] = [
  { id: "1", name: "C1 - Mobile Development", logo: Logo},
  { id: "2", name: "C2 - Web Development", logo: Logo },
  { id: "3", name: "C3 - AI Basic", logo: Logo },
  { id: "4", name: "C3 - AI Basic", logo: Logo },
   { id: "1", name: "C1 - Mobile Development", logo: Logo},
  { id: "2", name: "C2 - Web Development", logo: Logo },
  { id: "3", name: "C3 - AI Basic", logo: Logo },
  { id: "4", name: "C3 - AI Basic", logo: Logo },
   { id: "1", name: "C1 - Mobile Development", logo: Logo},
  { id: "2", name: "C2 - Web Development", logo: Logo },
  { id: "3", name: "C3 - AI Basic", logo: Logo },
  { id: "4", name: "C3 - AI Basic", logo: Logo },
   { id: "1", name: "C1 - Mobile Development", logo: Logo},
  { id: "2", name: "C2 - Web Development", logo: Logo },
  { id: "3", name: "C3 - AI Basic", logo: Logo },
  { id: "4", name: "C3 - AI Basic", logo: Logo },
];