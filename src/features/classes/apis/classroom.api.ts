import { httpClient } from "@/app/services/httpClient";

export interface Classroom {
    id: string;
    name: string;
    classCode: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
}

export const classroomApi = {
    getAll: () => httpClient.get<Classroom[]>("/classrooms"),
    getById: (id: string) => httpClient.get<Classroom>(`/classrooms/${id}`),
    create: (data: { name: string; description?: string }) =>
        httpClient.post<Classroom, { name: string; description?: string }>("/classrooms", data),
    update: (id: string, data: { name?: string; description?: string }) =>
        httpClient.patch<Classroom, { name?: string; description?: string }>(`/classrooms/${id}`, data),
    delete: (id: string) => httpClient.delete<void>(`/classrooms/${id}`),
};
