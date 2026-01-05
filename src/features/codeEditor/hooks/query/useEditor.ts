import { QUERY_KEYS } from '@/shared/constansts/queryKey';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getJobStatus, runCode } from '../../apis/editor.api';

export const useRunCodeQuery = (jobId: string | null) => {
  const runMutation = useMutation({
    mutationFn: runCode,
  });

  const statusQuery = useQuery({
    queryKey: QUERY_KEYS.JOB_STATUS(jobId),
    queryFn: () => getJobStatus(jobId!),
    enabled: !!jobId,
    refetchInterval: (query) => {
      const state = query.state.data?.state;
      return state === 'completed' || state === 'failed'
        ? false
        : 1000;
    },
  });

  return {
    runMutation,
    statusQuery,
  };
};
