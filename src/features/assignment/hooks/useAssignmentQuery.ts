import {useQuery } from "@tanstack/react-query";
import type { Assignment } from "@/shared/types/types";
import { assignmentsApi } from "../apis/fetchAssignments";

export const QUERY_KEYS = {
    ASSIGNMENTS: (classroomId: string) => ["assignments", classroomId] as const,
    ASSIGMENTID: (assignmentId: string) => ["assignment",assignmentId] as const
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

export const useAssignment = (assignmentId: string | null) => {
    return useQuery<Assignment, Error>({
        queryKey: assignmentId
            ? QUERY_KEYS.ASSIGMENTID(assignmentId)
            : ["assignment","none"],

        queryFn: () => {
            if (!assignmentId) throw new Error("No classroom selected");
            return assignmentsApi.getAssignmentById(assignmentId);
        },
    });
};