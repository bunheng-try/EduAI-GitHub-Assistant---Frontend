import MainPanel from "@/shared/components/layout/MainPanel";
import AssignmentHeader from "../components/AssignmentHeader";
import ChallengeTab from "../components/ChallengesTab";
import { SettingsTab } from "../components/SettingsTab";
import { useAssignmentTabs } from "../hooks/useMenuTabs";

const AssignmentEditor = () => {
  const { activeTab } = useAssignmentTabs();

  return (
    <MainPanel
      header={<AssignmentHeader />}
      emptyState={<div className="p-6 text-gray-400">No content</div>}
    >
      {activeTab === "challenge" && <ChallengeTab />}
      {activeTab === "settings" && <SettingsTab />}
    </MainPanel>
  );
};

export default AssignmentEditor;
