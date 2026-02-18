// features/challenge/types/challenge.ts
// Extends the shared Challenge type with library-specific fields

import type { Challenge } from "@/shared/types/types";

export type { Challenge };

export interface TestCase {
  id: string;
  name: string;
  type: "sample" | "hidden";
  input: string;
  expectedOutput: string;
}

// Extended type for the Challenge Library (teacher's management view)
export interface LibraryChallenge extends Challenge {
  starterCode: string;
  testCases: TestCase[];
}