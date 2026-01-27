// src/types/index.ts

export type Class = {
  id: number;
  name: string;
};

export type AssignmentStatus = "active" | "inactive";

export interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  status: AssignmentStatus;
  totalSubmitted:number
}

export type Challenge = {
  id: number;
  assignmentId: number;
  content: string;
};
