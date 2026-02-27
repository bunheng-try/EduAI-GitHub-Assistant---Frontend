import { httpClient } from "@/app/services/httpClient";
import type { Assignment, AssignmentDto } from "@/shared/types/types";


export const assignmentsApi = {
    getAssignmentByClassId:(classroomId:string) => httpClient.get<Assignment[]>(`/classrooms/${classroomId}/assignments`),
    getAssignmentById:(classroomId:string,id:string) => httpClient.get<Assignment>(`/classrooms/${classroomId}/assignments/${id}`),
    publishAssignment:(classroomId:string,id:string) => httpClient.patch<Assignment, {}>(`/classrooms/${classroomId}/assignments/${id}/publish`, {}),
    createAssignment:(classroomId:String,dto:AssignmentDto)=> httpClient.post<Assignment,AssignmentDto>(`/classrooms/${classroomId}/assignments`,dto)
};


