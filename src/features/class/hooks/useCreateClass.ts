import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClass } from "../apis/fetchClasses";

export const useCreateClass = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createClass,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["classrooms"] });
    },
  });
};
