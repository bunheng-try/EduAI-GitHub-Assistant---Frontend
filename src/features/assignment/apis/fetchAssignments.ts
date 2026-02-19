import { httpClient } from "@/app/services/httpClient";
import type { Assignment, AssignmentDto } from "@/shared/types/types";


export const assignmentsApi = {
    getAssignmentByClassId:(id:string) => httpClient.get<Assignment[]>(`/assignments/classroom/${id}`),
    getAssignmentById:(id:string) => httpClient.get<Assignment>(`/assignments/${id}`),
    publishAssignment:(id:string) => httpClient.patch<Assignment, {}>(`/assignments/${id}/publish`, {}),
    createAssignment:(dto:AssignmentDto)=> httpClient.post<Assignment,AssignmentDto>(`/assignments`,dto)
};


