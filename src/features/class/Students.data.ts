import type { Student } from "./types/Students.types.ts";

export const MOCK_STUDENTS: Student[] = [
  { id: 1, name: "Sotheara Saroeun", email: "sotheara.saroeun@student.cadt.com", initials: "SS" },
  { id: 2, name: "Deny Sokun", email: "deny.sokun@student.cadt.com", initials: "DS" },
  { id: 3, name: "Sotheara Saroeun", email: "sotheara.saroeun2@student.cadt.com", initials: "SS" },
  { id: 4, name: "Deny Sokun", email: "deny.sokun2@student.cadt.com", initials: "DS" },
  { id: 5, name: "Sotheara Saroeun", email: "sotheara.saroeun3@student.cadt.com", initials: "SS" },
  { id: 6, name: "Deny Sokun", email: "deny.sokun3@student.cadt.com", initials: "DS" },
  { id: 7, name: "Sotheara Saroeun", email: "sotheara.saroeun4@student.cadt.com", initials: "SS" },
  { id: 8, name: "Deny Sokun", email: "deny.sokun4@student.cadt.com", initials: "DS" },
  { id: 9, name: "Deny Sokun", email: "deny.sokun5@student.cadt.com", initials: "DS" },
  { id: 10, name: "Sotheara Saroeun", email: "sotheara.saroeun5@student.cadt.com", initials: "SS" },
];

// Simulates students that exist in the system (for invite validation)
export const SYSTEM_STUDENTS: string[] = [
  "sotheara saroeun",
  "deny sokun",
  "chan dara",
  "kim leakhena",
  "pov raksmey",
  "heng sreynich",
];

export const CLASS_CODE = "C1zli7n$";

export const AVATAR_GRADIENTS: string[] = [
  "from-violet-500 to-purple-600",
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-blue-600",
];