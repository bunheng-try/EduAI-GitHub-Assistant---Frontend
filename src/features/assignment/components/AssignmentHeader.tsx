import MenuTabs from "@/shared/components/menu_tabs/MenuTabs";
import { Button } from "@/shared/components/ui/button";
import { useAssignmentTabs } from "../hooks/useMenuTabs";
import { CodeIcon, MoreVerticalIcon, SettingsIcon, UsersIcon } from "lucide-react";
import { usePublishAssignment, useUnPublishAssignment, useUpdateAssignment } from "../hooks/useAssignmentQuery";
import type { Assignment } from "../apis/assignment.api";
import type { JSX } from "react";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PanelHeader } from "@/shared/components/design/PanelHeader";

type Props = {
  classroomId: number;
  assignment: Assignment;
  isEditing: boolean;
  isAdmin: boolean;
};

const AssignmentHeader = ({ classroomId, assignment, isEditing, isAdmin }: Props) => {
  const { activeTab, setActiveTab } = useAssignmentTabs();
  const { mutate: publishAssignment } = usePublishAssignment();
  const { mutate: unpublishAssignment } = useUnPublishAssignment();
  const { mutate: updateAssignment } = useUpdateAssignment();

  const [titleInput, setTitleInput] = useState(assignment.title);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const autoFocusTitle = location.state?.autoFocusTitle || false;

  useEffect(() => {
    if (autoFocusTitle && titleInputRef.current) {
      titleInputRef.current.focus();
      titleInputRef.current.select();
    }
  }, [autoFocusTitle]);

  const showPublishedUI = assignment.isPublished && !isEditing;

  const handlePublish = () => publishAssignment({ classroomId, assignmentId: assignment.id });
  const handleUnpublish = () => unpublishAssignment({ classroomId, assignmentId: assignment.id });
  const handleDiscard = () => console.log("Assignment discarded");
  const handleMenuClick = () => console.log("Three-dot menu clicked");

  type TabKey = "challenge" | "settings" | "submission";
  interface Tab { key: TabKey; label: string; icon: JSX.Element; }

  const tabs: Tab[] = [
    { key: "challenge", label: "Challenges", icon: <CodeIcon className="w-4 h-4 mr-2" /> },
    ...(isAdmin ? [
      { key: "settings" as TabKey, label: "Settings", icon: <SettingsIcon className="w-4 h-4 mr-2" /> },
    ] : []),
    ...(isAdmin && showPublishedUI ? [
      { key: "submission" as TabKey, label: "Submission", icon: <UsersIcon className="w-4 h-4 mr-2" /> },
    ] : []),
  ];

  return (
    <PanelHeader
      topLeft={
        <input
          ref={titleInputRef}
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          onBlur={() => {
            if (titleInput !== assignment.title) {
              updateAssignment({
                classroomId,
                assignmentId: assignment.id,
                dto: { title: titleInput },
              });
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.currentTarget.blur();
          }}
          readOnly={!isAdmin}
          className="
            text-lg font-semibold truncate 
            w-full px-2 py-1 rounded-md 
            focus:border-[hsl(var(--accent))] focus:ring-1 focus:ring-[hsl(var(--accent))] 
            bg-[hsl(var(--background))] outline-none
          "
        />
      }
      topRight={
        isAdmin && (
          <>
            {!showPublishedUI ? (
              <>
                <Button variant="secondary" onClick={handleDiscard}>Discard</Button>
                <Button variant="default" onClick={handlePublish}>Publish</Button>
                <button onClick={handleMenuClick} className="p-2 rounded-md hover:bg-[hsl(var(--accent))]">
                  <MoreVerticalIcon className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={handleUnpublish}>Unpublish</Button>
                <button onClick={handleMenuClick} className="p-2 rounded-md hover:bg-[hsl(var(--accent))]">
                  <MoreVerticalIcon className="w-5 h-5" />
                </button>
              </>
            )}
          </>
        )
      }
      tabs={
        <MenuTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      }
    />
  );
};

export default AssignmentHeader;