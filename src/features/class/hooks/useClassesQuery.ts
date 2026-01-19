
import { useQuery } from "@tanstack/react-query";
import type { Classroom } from "../types/Classroom";
import { useClassroomStore } from "../stores/ClassroomStore";
import { getClassrooms } from "../apis/fetchClasses";


export const useClassroomLeftBar = () => {
  const { data, isLoading, isError } = useQuery<Classroom[]>({
    queryKey: ["classrooms"],
    queryFn: getClassrooms,
  });

  const selectedClassroom = useClassroomStore(
    (state) => state.selectedClassroom
  );

  const setSelectedClassroom = useClassroomStore(
    (state) => state.setSelectedClassroom
  );

  const onSelectClassroom = (classroom: Classroom) => {
    setSelectedClassroom(classroom);
  };

  return {
    classrooms: data ?? [],
    selectedClassroom,
    isLoading,
    isError,
    onSelectClassroom,
  };
};

