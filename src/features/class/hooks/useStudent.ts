import { useState, useMemo } from "react";
import type { Student } from "../types/Students.types";
import { MOCK_STUDENTS, SYSTEM_STUDENTS } from "../Students.data";

export type FilterBy = "all" | "name" | "email";

export function useStudents() {
  const [students, setStudents] = useState<Student[]>(MOCK_STUDENTS);
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState<FilterBy>("all");

  const filtered = useMemo(
    () =>
      students.filter((s) => {
        if (filterBy === "name")
          return s.name.toLowerCase().includes(search.toLowerCase());
        if (filterBy === "email")
          return s.email.toLowerCase().includes(search.toLowerCase());
        // "all" — searches both name and email
        return (
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.email.toLowerCase().includes(search.toLowerCase())
        );
      }),
    [students, search, filterBy]
  );

  const inviteStudent = (name: string): { success: boolean; error?: string } => {
    if (!name.trim()) return { success: false, error: "Please enter a student name." };

    if (!SYSTEM_STUDENTS.includes(name.trim().toLowerCase())) {
      return { success: false, error: "Student not found in the system. Please check the name and try again." };
    }

    if (students.find((s) => s.name.toLowerCase() === name.trim().toLowerCase())) {
      return { success: false, error: "This student is already in the class." };
    }

    const initials = name.trim().split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
    setStudents((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: name.trim(),
        email: `${name.trim().replace(/\s+/g, ".").toLowerCase()}@student.cadt.com`,
        initials,
      },
    ]);

    return { success: true };
  };

  const removeStudent = (id: number) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const exportStudents = () => {
    const csv = ["Student,Email", ...students.map((s) => `${s.name},${s.email}`)].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "students.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return {
    students,
    filtered,
    search,
    setSearch,
    filterBy,
    setFilterBy,
    inviteStudent,
    removeStudent,
    exportStudents,
  };
}