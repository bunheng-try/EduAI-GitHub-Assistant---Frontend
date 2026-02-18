// features/challenge/challenge.mock.ts
// Mock data since backend CRUD is not ready yet
// Uses correct fields from shared Challenge type:
// id, title, description, author, date, score, language, topic, level

import type { LibraryChallenge } from "./types/challenge";

export const mockLibraryChallenges: LibraryChallenge[] = [
  {
    id: "ch-1",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    author: "Mr. Sokha",
    date: new Date("2026-01-10"),
    score: 10,
    language: "C++",
    topic: "Array",
    level: "Easy",
    starterCode: "void main(){\n  //Your Code\n}",
    testCases: [
      { id: "tc1", name: "Test case 0", type: "sample", input: "2 3", expectedOutput: "5" },
      { id: "tc2", name: "Test case 1", type: "hidden", input: "2 8", expectedOutput: "10" },
    ],
  },
  {
    id: "ch-2",
    title: "Binary Tree Traversal",
    description:
      "Implement an in-order traversal of a binary tree and return the values in a list.",
    author: "Ms. Lina",
    date: new Date("2026-01-11"),
    score: 20,
    language: "Java",
    topic: "Tree",
    level: "Medium",
    starterCode: "public class Solution {\n  public void main() {\n    //Your Code\n  }\n}",
    testCases: [
      { id: "tc3", name: "Test case 0", type: "sample", input: "[1,null,2,3]", expectedOutput: "[1,3,2]" },
      { id: "tc4", name: "Test case 1", type: "hidden", input: "[]", expectedOutput: "[]" },
    ],
  },
  {
    id: "ch-3",
    title: "Longest Substring",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    author: "Dr. Dara",
    date: new Date("2026-01-12"),
    score: 30,
    language: "Python",
    topic: "String",
    level: "Hard",
    starterCode: "def main():\n  #Your Code\n  pass",
    testCases: [
      { id: "tc5", name: "Test case 0", type: "sample", input: "abcabcbb", expectedOutput: "3" },
      { id: "tc6", name: "Test case 1", type: "hidden", input: "bbbbb", expectedOutput: "1" },
    ],
  },
];