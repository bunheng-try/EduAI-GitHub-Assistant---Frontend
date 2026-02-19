import { Search, SlidersHorizontal, Upload, X } from "lucide-react";
import { ButtonSecondary } from "../../../../shared/components/design/button";

interface StudentToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onExport: () => void;
}

export default function StudentToolbar({ search, onSearchChange, onExport }: StudentToolbarProps) {
  return (
    <div className="flex items-center gap-3 px-6 py-4">
      {/* Search */}
      <div className="relative flex-1">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search student by name or email..."
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 transition-all placeholder:text-gray-400"
        />
        {search && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      <ButtonSecondary className="flex items-center gap-2">
        <SlidersHorizontal size={15} />
        Filtering
      </ButtonSecondary>

      <ButtonSecondary onClick={onExport} className="flex items-center gap-2">
        <Upload size={15} />
        Export
      </ButtonSecondary>
    </div>
  );
}
