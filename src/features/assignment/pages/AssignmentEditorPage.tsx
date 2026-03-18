import { useState } from "react";
import AssignmentHeader from "../components/AssignmentHeader";
import ChallengeTab from "../components/ChallengesTab";
import { SettingsTab } from "../components/SettingsTab";
import { SubmissionsTab } from "../components/SubmissionTab";
import { useAssignmentTabs } from "../hooks/useMenuTabs";
import { useClassroomRoute } from "@/features/classes/hooks/useClassroomRoute";
import { useAssignment, useDeleteAssignment } from "../hooks/useAssignmentQuery";
import { mockSubmissions } from "@/shared/types/types";
import { useClassroomRole } from "@/features/classes/hooks/useClassroomRole";
import type { Assignment } from "../apis/assignment.api";
import { Panel } from "react-resizable-panels";
import { PanelContent } from "@/shared/components/design/Panel";

const AssignmentEditor = () => {
  const { activeTab } = useAssignmentTabs();
  const { classroomId, assignmentId } = useClassroomRoute();
  const { data: assignment, isLoading } = useAssignment(classroomId || null, assignmentId || null);
  const { mutate: deleteAssignment } = useDeleteAssignment();
  const { data: roleData } = useClassroomRole(classroomId);
  const isAdmin = roleData?.role === "OWNER";

  const [isEditing, setIsEditing] = useState(false);

  if (isLoading) {
    return <div className="p-6 text-muted-foreground">Loading assignment...</div>;
  }

  if (!assignmentId || !assignment) {
    return <div className="p-6 text-muted-foreground">Select an assignment</div>;
  }

  const handleAssignmentUpdate = (updated: Partial<Assignment>) => { };

  const handleDelete = () => {
    deleteAssignment({ classroomId, assignmentId });
  };

  return (
    <Panel>
        <AssignmentHeader
          classroomId={classroomId}
          assignment={assignment}
          isEditing={isEditing}
          isAdmin={isAdmin}
        />

      <PanelContent>
        {activeTab === "challenge" && (
          <ChallengeTab challenges={assignment.codingChallenges} />
        )}

        {isAdmin && activeTab === "settings" && (
          <SettingsTab
            assignment={assignment}
            isEditing={isEditing}
            onEditChange={setIsEditing}
            onAssignmentUpdate={handleAssignmentUpdate}
            onDelete={handleDelete}
          />
        )}

        {isAdmin && activeTab === "submission" && (
          <SubmissionsTab submissions={mockSubmissions ?? []} />
        )}
      </PanelContent>
    </Panel>
  );
};

export default AssignmentEditor;