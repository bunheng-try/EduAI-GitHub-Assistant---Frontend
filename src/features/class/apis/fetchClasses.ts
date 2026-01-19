import { classroomsStore } from "@/mock_db";
import type { Classroom } from "../types/Classroom";

export const getClassrooms = async (): Promise<Classroom[]> => {
  
  await new Promise((res) => setTimeout(res, 300));
  return classroomsStore;

  const response = await fetch("/api/classrooms");
  if (!response.ok) {
    throw new Error("Failed to fetch classrooms");
  }

  return response.json();
};
