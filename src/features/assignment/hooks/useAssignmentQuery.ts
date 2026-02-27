import {useQuery ,useQueryClient,useMutation} from "@tanstack/react-query";
import type { Assignment, AssignmentDto } from "@/shared/types/types";
import { assignmentsApi } from "../apis/fetchAssignments";
import { useNavigate } from "react-router-dom";

export const QUERY_KEYS = {
  ASSIGNMENTS: (classroomId: string) => ["assignments", classroomId] as const,
  ASSIGNMENTID: (assignmentId: string) => ["assignment", assignmentId] as const,
};


export const useAssignmentClassrooms = (classroomId: string | null) => {
  return useQuery<Assignment[], Error>({
    queryKey: classroomId
        ? QUERY_KEYS.ASSIGNMENTS(classroomId)
        : ["assignments", "none"],

    queryFn: () => {
        if (!classroomId) throw new Error("No classroom selected");
        return assignmentsApi.getAssignmentByClassId(classroomId);
    },
  });
};

export const useAssignment = (classroomId:string| null,assignmentId: string | null) => {
  return useQuery<Assignment, Error>({
    queryKey: assignmentId
        ? QUERY_KEYS.ASSIGNMENTID(assignmentId)
        : ["assignment","none"],

    queryFn: () => {
        if (!classroomId) throw new Error("No classroom selected");
        if (!assignmentId) throw new Error("No assignment Select selected");
        return assignmentsApi.getAssignmentById(classroomId,assignmentId);
    },
  });
};


export const usePublishAssignment = (classroomId:string| null) => {
  const queryClient = useQueryClient();

  if (!classroomId) throw new Error("No classroom selected");
  return useMutation<Assignment, Error, string>({
    mutationFn: (assignmentId) => assignmentsApi.publishAssignment(classroomId,assignmentId),
    onSuccess: (updatedAssignment: Assignment) => {
      // Update the single assignment cache
      queryClient.setQueryData(
        QUERY_KEYS.ASSIGNMENTID(updatedAssignment.id),
        updatedAssignment
      );

      // update the list of assignments for that classroom
      queryClient.setQueryData<Assignment[]>(
        QUERY_KEYS.ASSIGNMENTS(updatedAssignment.classroomId),
        (oldList = []) =>
          oldList.map((a) =>
            a.id === updatedAssignment.id ? updatedAssignment : a
          )
      );
    },
  });
};

export const useCreateAssignment = (classroomId: string | null) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<Assignment, Error, AssignmentDto>({
    mutationFn: (dto: AssignmentDto) => {
      if (!classroomId) throw new Error("No classroom selected");
      console.log(dto,classroomId);
      return assignmentsApi.createAssignment(classroomId,dto);
    },

    onSuccess: (newAssignment: Assignment) => {
      if (!classroomId) return;
      queryClient.setQueryData<Assignment[]>(
        QUERY_KEYS.ASSIGNMENTS(classroomId),
        (old = []) => [...old, newAssignment]
      );

      // Cache the new assignment individually
      queryClient.setQueryData(
        QUERY_KEYS.ASSIGNMENTID(newAssignment.id),
        newAssignment
      );

      navigate(`/classrooms/${classroomId}/assignments/${newAssignment.id}`);
    },
  });
};
