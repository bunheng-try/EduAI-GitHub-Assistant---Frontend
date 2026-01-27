// src/types/index.ts

export type Class = {
  id: number;
  name: string;
};

export type Section ={
  id: string;
  title: string;
  assignments: Assignment[];
};

export type Assignment = {
  id: string;
  title: string;
  // classId: number;
};

export type Challenge = {
  id: number;
  assignmentId: number;
  content: string;
};
