import type { Assignment, Challenge } from "../types/assignment";

export const getAssignmentsByClassroom = async (
  classroomId: string
): Promise<Assignment[]> => {
  const response = await fetch(
    `/api/classrooms/${classroomId}/assignments`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch assignments");
  }

  return response.json();
};


export const getChallengesByAssignmentId = async (
  assignmentId: string
): Promise<Challenge[]> => {
  const response = await fetch(
    `/api/assignments/${assignmentId}/challenges`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch challenges");
  }

  return response.json();
};

