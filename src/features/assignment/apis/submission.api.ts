export interface SubmissionCode {
    id?: number;
    challengeId: number;
    code: string;
}

export type SubmissionStatus =
    | "DRAFT"
    | "SUBMITTED"
    | "GRADING"
    | "GRADED"
    | "EVALUATED";

export interface Submission {
    id: number;
    assignmentId: number;
    userId: number;

    status: SubmissionStatus;

    totalScore?: number;
    submittedAt?: string;

    createdAt: string;
    updatedAt: string;

    codeSubmissions?: SubmissionCode[];
}

export interface CreateSubmissionDto {
    content: string;
}

export interface UpdateSubmissionDto {
    codes: SubmissionCode[];
}

export interface GradeSubmissionDto {
    totalScore: number;
    feedback?: string;
}

//Joined with student name
export interface SubmissionWithStudentName extends Submission {
    name: string;
}

import { httpClient } from "@/app/services/httpClient";

export const submissionsApi = {
    create: (classroomId: number, assignmentId: number, dto: CreateSubmissionDto) =>
        httpClient.post<Submission, CreateSubmissionDto>(
            `/classrooms/${classroomId}/assignments/${assignmentId}/submissions`,
            dto
        ),

    getAll: (classroomId: number, assignmentId: number) =>
        httpClient.get<Submission[]>(
            `/classrooms/${classroomId}/assignments/${assignmentId}/submissions`
        ),

    getById: (classroomId: number, assignmentId: number, submissionId: number) =>
        httpClient.get<Submission>(
            `/classrooms/${classroomId}/assignments/${assignmentId}/submissions/${submissionId}`
        ),

    update: (classroomId: number, assignmentId: number, submissionId: number, dto: UpdateSubmissionDto) =>
        httpClient.patch<Submission, UpdateSubmissionDto>(
            `/classrooms/${classroomId}/assignments/${assignmentId}/submissions/${submissionId}`,
            dto
        ),

    turnIn: (classroomId: number, assignmentId: number, submissionId: number) =>
        httpClient.post<Submission, void>(
            `/classrooms/${classroomId}/assignments/${assignmentId}/submissions/${submissionId}/turn-in`,
            undefined
        ),
    grade: (classroomId: number, assignmentId: number, submissionId: number, dto: GradeSubmissionDto) =>
        httpClient.patch<Submission, GradeSubmissionDto>(
            `/classrooms/${classroomId}/assignments/${assignmentId}/submissions/${submissionId}/grade`,
            dto
        ), 
};