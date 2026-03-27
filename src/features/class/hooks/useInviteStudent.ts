import { useState, useEffect } from "react";
import type { Member, AddMemberDto } from "../apis/member.api";
import { useAddMember, useUserByEmail } from "./useMemberQuery";

export type SelectedStudent = AddMemberDto & { name: string; email: string };

export function useInviteStudent(classroomId: number | null) {
    const [email, setEmail] = useState("");
    const [searchResults, setSearchResults] = useState<Member[]>([]);
    const [selectedStudents, setSelectedStudents] = useState<SelectedStudent[]>([]);

    const { data: users, refetch } = useUserByEmail(email.trim() || null);
    const addMember = useAddMember(classroomId);

    useEffect(() => {
        if (users && users.length > 0) {
            setSearchResults(users);

            if (
                users.length === 1 &&
                !selectedStudents.find(s => Number(s.userId) === Number(users[0].userId))
            ) {
                setSelectedStudents(prev => [
                    ...prev,
                    {
                        userId: Number(users[0].userId),
                        role: "STUDENT",
                        name: users[0].name,
                        email: users[0].email
                    }
                ]);
            }
        } else {
            setSearchResults([]);
        }
    }, [users, selectedStudents]);

    const selectStudent = (student: Member) => {
        if (!selectedStudents.find(s => Number(s.userId) === Number(student.userId))) {
            setSelectedStudents(prev => [
                ...prev,
                {
                    userId: Number(student.userId),
                    role: "STUDENT",
                    name: student.name,
                    email: student.email
                }
            ]);
        }
    };

    const removeSelectedStudent = (userId: number) => {
        setSelectedStudents(prev => prev.filter(s => s.userId !== userId));
    };

    const onInvite = async (): Promise<{ success: boolean; error?: string }> => {
        if (selectedStudents.length === 0)
            return { success: false, error: "No student selected" };

        try {
            await addMember.mutateAsync({ members: selectedStudents });
            setEmail("");
            setSelectedStudents([]);
            setSearchResults([]);
            return { success: true };
        } catch (err: any) {
            return { success: false, error: err?.message || "Failed to invite student" };
        }
    };

    const searchByEmail = (value: string) => {
        setEmail(value);
        refetch();
    };

    return { email, searchByEmail, searchResults, selectedStudents, selectStudent, removeSelectedStudent, onInvite };
}