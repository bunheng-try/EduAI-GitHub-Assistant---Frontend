import { useAssignmentStore } from "@/features/assignment/stores/useAssignmentStore";
import ClassroomFormModal from "@/features/class/components/ClassroomFormModal";
import CreateClassroomButton from "@/features/class/components/CreateClassroomButton";
import { ClassroomLeftBar } from "@/features/class/pages/ClassroomLeftBar";
import { ClassroomMainBar } from "@/features/class/pages/ClassroomMainBar";
import { useClassroomStore } from "@/features/class/stores/ClassroomStore";
import { AppShell } from "@/shared/components/appShell/AppShell";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ClassroomScene() {
  const navigate = useNavigate();
  const { classId, assignmentId } = useParams();

  const [openCreate, setOpenCreate] = useState(false);

  const setClassId = useClassroomStore(
    (s) => s.setSelectedClassroomId
  );
  const setAssignmentId = useAssignmentStore(
    (s) => s.setSelectedAssignmentId
  );

  const selectedClassId = useClassroomStore(
    (s) => s.selectedClassroomId
  );
  const selectedAssignmentId = useAssignmentStore(
    (s) => s.selectedAssignmentId
  );

  // Sync classroom from URL
  useEffect(() => {
    setClassId(classId ?? null);

    // important: assignment belongs to classroom
    setAssignmentId(null);
  }, [classId]);

  // Sync assignment from URL
  useEffect(() => {
    setAssignmentId(assignmentId ?? null);
  }, [assignmentId]);

  // ------------------------
  // Content decision
  // ------------------------

  let mainContent = null;
  let panelContent = null;

  if (selectedClassId) {
    mainContent = "<AssignmentList />";

    panelContent = selectedAssignmentId
      ? "<AssignmentDetail />"
      : "<NoAssignmentSelected />";
  }

  return (
    <>
      <AppShell
        left={{
          top: <div className="font-bold">EduAI</div>,
          content: <ClassroomLeftBar />,
          bottom: (
            <CreateClassroomButton
              onClick={() => setOpenCreate(true)}
            />
          ),
        }}
        mainHeader={<ClassroomMainBar />}
        main={mainContent}
        panel={panelContent}
      />

      {/* CREATE CLASS MODAL */}
      <ClassroomFormModal
        open={openCreate}
        onOpenChange={setOpenCreate}
        onCreated={(classroom: { id: string; }) => {
          navigate(`/classrooms/${classroom.id}`);
        }}
      />
    </>
  );
}