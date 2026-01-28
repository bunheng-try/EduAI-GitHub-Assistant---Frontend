import { useSearchParams } from "react-router-dom"

export function useAssignmentTabs() {
  const [params, setParams] = useSearchParams()

  const activeTab =
    (params.get("tab") as "challenge" | "settings") ??
    "challenge"

  const setActiveTab = (tab: "challenge" | "settings") => {
    setParams((prev) => {
      prev.set("tab", tab)
      return prev
    })
  }

  return {
    activeTab,
    setActiveTab,
  }
}
