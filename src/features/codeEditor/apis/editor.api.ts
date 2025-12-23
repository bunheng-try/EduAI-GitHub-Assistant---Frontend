import { httpClient } from '@/app/services/httpClient';
import type {
    RunPayload,
    RunResponse,
    JobStatusResponse,
} from '../types/editor.types';

export const runCode = (payload: RunPayload) =>
  httpClient.post<RunResponse, RunPayload>('/run', payload);

export const getJobStatus = (jobId: string) =>
  httpClient.get<JobStatusResponse>(`/status/${jobId}`);
