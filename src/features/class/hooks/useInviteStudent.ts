import { useState, useEffect } from "react";
import type { Member, AddMemberDto } from "../apis/member.api";
import { useAddMember, useUserByEmail } from "./useMemberQuery";

export type SelectedStudent = AddMemberDto & { name: string };

export function useInviteStudent(classroomId: number | null) {
    const [email, setEmail] = useState("");
    const [searchResults, setSearchResults] = useState<Member[]>([]);
    const [selectedStudents, setSelectedStudents] = useState<SelectedStudent[]>([]);

    const { data: users, refetch } = useUserByEmail(email.trim() || null);
    const addMember = useAddMember(classroomId);

    useEffect(() => {
        if (users && users.length > 0) {
            setSearchResults(users);

            // Auto-select if only 1 match
            if (users.length === 1) {
                setSelectedStudents([{ userId: users[0].id, role: "STUDENT" , name: users[0].name}]);
            }
        } else {
            setSearchResults([]);
            setSelectedStudents([]);
        }
    }, [users]);

    const selectStudent = (student: Member) => {
        if (!selectedStudents.find((s) => s.userId === student.id)) {
            setSelectedStudents([...selectedStudents, { userId: student.id, role: "STUDENT", name: student.name }]);
        }
    };

    const removeSelectedStudent = (userId: number) => {
        setSelectedStudents(selectedStudents.filter((s) => s.userId !== userId));
    };

    const onInvite = async (): Promise<{ success: boolean; error?: string }> => {
        if (selectedStudents.length === 0)
            return { success: false, error: "No student selected" };

        try {
            // Wrap in { members: [...] } to match backend expectation
            await addMember.mutateAsync({members: selectedStudents});
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