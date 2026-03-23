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
import { Panel, PanelContent } from "@/shared/components/design/Panel";
import { PanelHeader } from "@/shared/components/design/PanelHeader";
import { Button } from "@/shared/components/ui/button";
import { WrapIcon } from "@/shared/components/ui/wrapIcon";
import { GraduationCap } from "lucide-react";

export default function StudentManagement() {
  const { classroomId } = useClassroomRoute();
  const { data: members = [] } = useMembers(classroomId);

  const removeMember = useRemoveMember(classroomId);

  const [inviteOpen, setInviteOpen] = useState(false);
  const [confirmStudent, setConfirmStudent] = useState<any>(null); // selected member for removal
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; student: any } | null>(null);

  const handleContextMenu = (student: Member, e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY, student });
  };
  
  const closeContextMenu = () => setContextMenu(null);
  const openConfirmRemove = (student: any) => setConfirmStudent(student);

  const handleRemoveConfirm = () => {
    if (!confirmStudent) return;
    removeMember.mutate(confirmStudent.userId);
    setConfirmStudent(null);
  };

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
    <>
      <Panel>
        <PanelHeader
          topLeft={
            <div className="flex gap-(--spacing-sm) items-center">
              <WrapIcon icon={GraduationCap} size={"panel"} withBg/>
              <h2 className="typo-heading">Students</h2>
            </div>
            
          }
          bottomContent={
            <span className="typo-caption">{members.length} Member{ members.length > 1 ? "s" : "" }</span>   
          }

          topRight={
            <>
              <Button variant={"secondary"}>Copy ClassCode</Button>
              <Button onClick={() => setInviteOpen(true)} >Add Member</Button>
            </>
          }
        />
        <PanelContent>
          <StudentToolbar
            search="" 
            onSearchChange={() => { }}
            filterBy="all"
            onFilterChange={() => { }}
            onExport={exportStudents}
          />
          <StudentTable
            students={members}
            isFiltered={false}
            onContextMenu={(e, student) => handleContextMenu(student, e)}
          />
        </PanelContent>
      </Panel>

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
    </>
  );
}