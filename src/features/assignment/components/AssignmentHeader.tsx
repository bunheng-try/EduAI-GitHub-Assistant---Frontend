import MenuTabs from "@/shared/components/menu_tabs/MenuTabs";
import { Button } from "@/shared/components/ui/button";
import { useAssignmentTabs } from "../hooks/useMenuTabs";

type Props = {
  title: string
}

const AssignmentHeader = ({title}: Props) => {
  const { activeTab, setActiveTab } = useAssignmentTabs()

  return (
    <div className="
      bg-[hsl(var(--background))]
      px-6 py-4
    ">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h2 className="
          text-lg font-semibold
          text-[hsl(var(--foreground))]
          truncate
        ">
          {title}
        </h2>

        <div className="flex gap-2">
          <Button variant="secondary">
            Discard
          </Button>

          <Button variant="default">
            Publish
          </Button>
        </div>
      </div>

        <MenuTabs
          tabs={[
            { key: "challenge", label: "Challenges" },
            { key: "settings", label: "Settings" },
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
    </div>

  );
};

export default AssignmentHeader;
