import { httpClient } from "@/app/services/httpClient";
import type { Assignment } from "@/shared/types/types";

export const assignmentsApi = {
    getAssignmentByClassId:(id:string) => httpClient.get<Assignment[]>(`/assignments/classroom/${id}`),
    getAssignmentById:(id:string) => httpClient.get<Assignment>(`/assignments/${id}`)
};


