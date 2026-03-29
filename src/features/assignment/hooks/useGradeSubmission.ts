import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submissionsApi } from "../apis/submission.api";
import { QUERY_KEYS } from "./useSubmissionQuery";
import { useGradingStore } from "../stores/gradingScore";

export const useGradeSubmission = (
  classroomId: number,
  assignmentId: number,
  submissionId: number
) => {
  const queryClient = useQueryClient();
  const reset = useGradingStore((s) => s.reset);

  return useMutation({
    mutationFn: ({ score, feedback }: { score: string; feedback: string }) =>
      submissionsApi.grade(classroomId, assignmentId, submissionId, {
        totalScore: Number(score),
        feedback,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.SUBMISSIONS(classroomId, assignmentId),
      });
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.SUBMISSION(classroomId, assignmentId, submissionId),
      });
      reset();
    },
  });
};
