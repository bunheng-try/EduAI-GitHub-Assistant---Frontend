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
    <div className="flex gap-6 border-b">
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;

        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`pb-2 text-sm font-medium cursor-pointer ${
              isActive
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default MenuTabs;
