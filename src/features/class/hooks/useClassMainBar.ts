import { useClassroomStore } from "../stores/ClassroomStore";
import { useQuery } from "@tanstack/react-query";
import { getClassrooms } from "../apis/fetchClasses";
import type { Classroom } from "../types/classroom";

export const useClassroomMainBar = () => {
    const selectedClassroomId = useClassroomStore(
        (state) => state.selectedClassroomId
    );

    const { data: classrooms } = useQuery<Classroom[]>({
        queryKey: ["classrooms"],
        queryFn: getClassrooms,
    });

    const selectedClassroom = classrooms?.find(
        (c) => c.id === selectedClassroomId
    );

    return {
        selectedClassroom,
        hasSelection: Boolean(selectedClassroom),
    };
};