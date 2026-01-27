import { useAssignmentTabsStore } from "../stores/assignmentEditorStore";

export const useAssignmentTabs = () => {
  const activeTab = useAssignmentTabsStore((s) => s.activeTab);
  const setActiveTab = useAssignmentTabsStore((s) => s.setActiveTab);
  const selectedAssignmentTitle = useAssignmentTabsStore(
    (s) => s.selectedAssignmentTitle
  );

  return {
    activeTab,
    setActiveTab,
    selectedAssignmentTitle,
  };
};