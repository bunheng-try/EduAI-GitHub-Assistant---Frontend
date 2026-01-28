import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchClasses } from "../apis/fetchClasses";
import type { Classroom } from "../types/classroom";

export const useClassroomMainBar = () => {
  const { classId } = useParams<{ classId: string }>();

  const { data: classrooms } = useQuery<Classroom[]>({
    queryKey: ["classrooms"],
    queryFn: fetchClasses,
  });

  const selectedClassroom = classrooms?.find(
    (c) => c.id === classId
  );

  return {
    selectedClassroom,
    hasSelection: Boolean(selectedClassroom),
  };
};
