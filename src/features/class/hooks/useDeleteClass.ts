// features/class/hooks/useDeleteClass.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteClass } from "../apis/deleteClass";

export const useDeleteClass = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteClass,
    onSuccess: () => {
      // Refresh the classes list after deletion
      queryClient.invalidateQueries({ queryKey: ["classes"] });
    },
  });
};