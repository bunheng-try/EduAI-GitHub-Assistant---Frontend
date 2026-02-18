import { useSearchParams } from "react-router-dom"

export type AssignmentTab = "challenge" | "settings" | "submission";

export function useAssignmentTabs() {
  const [params, setParams] = useSearchParams()

  const activeTab =
    (params.get("tab") as AssignmentTab | null) ?? "challenge";

  const validatedTab: AssignmentTab =
    activeTab && ["challenge", "settings", "submission"].includes(activeTab)
      ? activeTab
      : "challenge";
  
  const setActiveTab = (tab: AssignmentTab) => {
    setParams((prev) => {
      prev.set("tab", tab)
      return prev
    },
    { replace: true }
    );
  }

  return {
    activeTab: validatedTab,
    setActiveTab,
  }
}
