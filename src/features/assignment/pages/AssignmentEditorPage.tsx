import MainPanel from "@/shared/components/layout/MainPanel";
import AssignmentHeader from "../components/AssignmentHeader";
import ChallengeTab from "../components/ChallengesTab";
import { SettingsTab } from "../components/SettingsTab";
import { useAssignmentTabs } from "../hooks/useMenuTabs";
import { useClassroomRoute } from "@/features/class/hooks/useClassroomRoute";
import { useAssignment } from "../hooks/useAssignmentQuery";


const AssignmentEditor = () => {
  const { activeTab } = useAssignmentTabs();
  const { assignmentId } = useClassroomRoute()
  const { data: assignment, isLoading } =useAssignment(assignmentId||null)

    if (!assignment) {
      return (
        <div className="p-6 text-muted-foreground">
          Select an assignment
        </div>
      )
    }
  return (
    <MainPanel
      header={<AssignmentHeader title={assignment.title} />}
      emptyState={<div className="p-6 text-gray-400">No content</div>}
    >
      {activeTab === "challenge" && <ChallengeTab />}
      {activeTab === "settings" && <SettingsTab />}
    </MainPanel>
  );
};

export default AssignmentEditor;
