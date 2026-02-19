import { httpClient } from "@/app/services/httpClient";
import { useAuthStore } from "@/app/store/autStore";

export interface ClassroomMember {
    userId: number;
    name: string;
    role: "STUDENT" | "ADMIN";
}

export const userApi = {

    getClassroomRole: (classroomId: number) => {
        const currentUserId = useAuthStore.getState().user?.id;
        if (!currentUserId) throw new Error("User not logged in");
        return httpClient.get<ClassroomMember>(
            `/classrooms/${classroomId}/members/${currentUserId}`
        );
    },
};
