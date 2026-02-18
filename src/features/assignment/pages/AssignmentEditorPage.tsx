import { useState, useEffect } from "react";
import MainPanel from "@/shared/components/layout/MainPanel";
import AssignmentHeader from "../components/AssignmentHeader";
import ChallengeTab from "../components/ChallengesTab";
import { SettingsTab } from "../components/SettingsTab";
import { SubmissionsTab } from "../components/SubmissionTab";
import { useAssignmentTabs } from "../hooks/useMenuTabs";
import { useParams } from "react-router-dom";
import { assignments, mockSubmissions } from "@/shared/types/types";
import type { Assignment } from "@/shared/types/types";

const AssignmentEditor = () => {
  const { activeTab } = useAssignmentTabs();
  const { assignmentId } = useParams<{ assignmentId: string }>();

  const [currentAssignment, setCurrentAssignment] = useState<Assignment | null>(null);

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const found = assignments.find((a) => a.id === assignmentId);
    setCurrentAssignment(found ?? null);
    setIsEditing(false);
  }, [assignmentId]);

  if (!assignmentId || !currentAssignment) {
    return (
      <div className="p-6 text-muted-foreground">
        Select an assignment
      </div>
    );
  }

  const handleAssignmentUpdate = (updated: Partial<Assignment>) => {
    setCurrentAssignment((prev) => {
      if (!prev) return null;
      return { ...prev, ...updated };
    });
  };

  const handleDelete = () => {
    const index = assignments.findIndex((a) => a.id === assignmentId);
    if (index !== -1) {
      assignments.splice(index, 1);
    }
    setCurrentAssignment(null);
    console.log("Assignment deleted and removed from list");
  };

  return (
    <MainPanel
      header={<AssignmentHeader
        assignment={currentAssignment}
        isEditing={isEditing}
      />}
      emptyState={<div className="p-6 text-gray-400">No content</div>}
    >
      <div className="flex-1 overflow-auto">
        {activeTab === "challenge" && <ChallengeTab assignmentId={assignmentId} />}
        {activeTab === "settings" && <SettingsTab
          assignment={currentAssignment}
          isEditing={isEditing}
          onEditChange={setIsEditing}
          onAssignmentUpdate={handleAssignmentUpdate}
          onDelete={handleDelete}
        />}
        {activeTab === "submission" && <SubmissionsTab submissions={mockSubmissions} />}
      </div>
    </MainPanel>
  );
};

export default AssignmentEditor;