
import { useQuery } from "@tanstack/react-query";
import type { Classroom } from "../types/classroom";
import { useClassroomStore } from "../stores/ClassroomStore";
import { getClassrooms } from "../apis/fetchClasses";

export const useClassroomLeftBar = () => {
  const { data, isLoading, isError } = useQuery<Classroom[]>({
    queryKey: ["classrooms"],
    queryFn: getClassrooms,
  });

  const selectedClassroomId = useClassroomStore(
    (state) => state.selectedClassroomId
  );

  return {
    classrooms: data ?? [],
    selectedClassroomId,
    isLoading,
    isError,
  };
};

