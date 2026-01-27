import MenuTabs from "@/shared/components/menu_tabs/MenuTabs";
import Button from "@/shared/components/ui/button";
import { useAssignmentTabsStore } from "../hooks/useMenuTabs";

const AssignmentHeader = () => {
  const activeTab = useAssignmentTabsStore((state) => state.activeTab);
  const setActiveTab = useAssignmentTabsStore((state) => state.setActiveTab);
  const selectedAssignmentTitle = useAssignmentTabsStore(
    (state) => state.selectedAssignmentTitle
  );

  return (
    <div className="bg-white px-4 sm:px-6 py-4 border-b">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <h2 className="text-lg font-semibold truncate w-full sm:w-auto">
          {selectedAssignmentTitle ?? "Assignment Editor"}
        </h2>

        <div className="flex flex-wrap gap-2">
          <Button
            variant="secondary"
            onClick={() => alert("Changes discarded")}
          >
            Discard
          </Button>

          <Button
            variant="primary"
            onClick={() => alert("Assignment published")}
          >
            Publish
          </Button>
        </div>
      </div>
      
      <div className="mt-3 overflow-x-auto">
        <MenuTabs
          tabs={[
            { key: "challenge", label: "Challenges" },
            { key: "settings", label: "Settings" },
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>
    </div>
  );
};

export default AssignmentHeader;
