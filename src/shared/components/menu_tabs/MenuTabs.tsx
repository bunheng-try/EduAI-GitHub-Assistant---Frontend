export interface TabItem<T extends string> {
  key: T;
  label: string;
}

interface MenuTabsProps<T extends string> {
  tabs: TabItem<T>[];
  activeTab: T;
  onChange: (key: T) => void;
}

const MenuTabs = <T extends string>({
  tabs,
  activeTab,
  onChange,
}: MenuTabsProps<T>) => {
  return (
    <div className="flex gap-6 mt-4 -mb-px">
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab

        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`
              pb-3 text-sm font-medium transition-colors
              ${isActive
                ? "border-b-2 border-[hsl(var(--primary))] text-[hsl(var(--foreground))]"
                : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"}
            `}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}



export default MenuTabs;
