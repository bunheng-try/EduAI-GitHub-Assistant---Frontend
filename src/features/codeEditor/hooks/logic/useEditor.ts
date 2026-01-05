import { useState } from 'react';
import type { RunPayload } from '../../types/editor.types';
import { useRunCodeQuery } from '../query/useEditor';

export const useEditorLogic = () => {
  const [jobId, setJobId] = useState<string | null>(null);

  const { runMutation, statusQuery } = useRunCodeQuery(jobId);

  const run = (payload: RunPayload) => {
    runMutation.mutate(payload, {
      onSuccess: (data) => {
        setJobId(data.jobId);
      },
    });
  };

  const reset = () => {
    setJobId(null);
  };

  return {
    run,
    reset,

    // derived state
    job: statusQuery.data,
    isRunning: runMutation.isPending,
    isPolling: statusQuery.isFetching,
  };
};
