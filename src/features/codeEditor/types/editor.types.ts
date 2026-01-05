export interface RunPayload {
  language: string;
  code: string;
}

export interface RunResponse {
  jobId: string;
  status: 'queued';
}

export type JobState =
  | 'waiting'
  | 'queued'
  | 'active'
  | 'completed'
  | 'failed';

export interface JobStatusResponse {
  jobId: string;
  state: JobState;
  result: string | null;
}
