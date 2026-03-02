// pages/StudentManagement.tsx
import { useState } from "react";
import { useMembers, useAddMember, useRemoveMember, useUserByEmail } from "../hooks/useMemberQuery";
import StudentHeader from "../components/students/Studentheader";
import StudentTab from "./students/StudentTaps";
import StudentToolbar from "./students/Studenttoolbar";
import StudentTable from "./students/StudentTables";
import StudentDialogs from "./dialogs/StudentDialogs";
import type { Member } from "../apis/member.api";
import { useClassroomRoute } from "@/features/classes/hooks/useClassroomRoute";

export default function StudentManagement() {
  const { classroomId } = useClassroomRoute();
  // ---------------------------
  // 1️⃣ Members list
  // ---------------------------
  const { data: members = [] } = useMembers(classroomId);

  // ---------------------------
  // 2️⃣ Remove member mutation
  // ---------------------------
  const removeMember = useRemoveMember(classroomId);

  // ---------------------------
  // 3️⃣ Dialog state
  // ---------------------------
  const [inviteOpen, setInviteOpen] = useState(false);
  const [confirmStudent, setConfirmStudent] = useState<any>(null); // selected member for removal
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; student: any } | null>(null);

  // ---------------------------
  // 4️⃣ Context menu handlers
  // ---------------------------
  const handleContextMenu = (student: Member, e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, student });
  };
  
  const closeContextMenu = () => setContextMenu(null);
  const openConfirmRemove = (student: any) => setConfirmStudent(student);

  // ---------------------------
  // 5️⃣ Remove confirm handler
  // ---------------------------
  const handleRemoveConfirm = () => {
    if (!confirmStudent) return;
    removeMember.mutate(confirmStudent.userId);
    setConfirmStudent(null);
  };

  // ---------------------------
  // 6️⃣ CSV Export
  // ---------------------------
  const exportStudents = () => {
    const csv = ["Student,Email", ...members.map(m => `${m.name},${m.id}@student.cadt.com`)].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "students.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full overflow-hidden">
        <StudentHeader totalCount={members.length} onInviteClick={() => setInviteOpen(true)} />
        <StudentTab />
        <StudentToolbar
          search="" // optional: hook up a search state if needed
          onSearchChange={() => { }}
          filterBy="all"
          onFilterChange={() => { }}
          onExport={exportStudents}
        />
        <StudentTable
          students={members}
          isFiltered={false} // optional: hook up search/filter if needed
          onContextMenu={(e, student) => handleContextMenu(student, e)}
        />
      </div>

      <StudentDialogs
        classroomId={classroomId}
        inviteOpen={inviteOpen}
        onInviteOpenChange={setInviteOpen}
        confirmStudent={confirmStudent}
        onConfirmRemoveOpenChange={(open) => { if (!open) setConfirmStudent(null) }}
        onConfirmRemove={handleRemoveConfirm}
        contextMenu={contextMenu}
        onContextMenuRemove={openConfirmRemove}
        onContextMenuClose={closeContextMenu}
      />
    </div>
  );
}