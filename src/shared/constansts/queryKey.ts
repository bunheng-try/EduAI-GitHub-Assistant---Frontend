export const QUERY_KEYS = {
  JOB_STATUS: (jobId: string | null) => ['job-status', jobId] as const,
};
