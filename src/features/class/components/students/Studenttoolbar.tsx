import { useState } from "react"
import { Search, SlidersHorizontal, Upload, X, Check } from "lucide-react"
import { ButtonSecondary } from "../../../../shared/components/design/button"
import type { FilterBy } from "../../hooks/useStudent"

interface StudentToolbarProps {
  search: string
  onSearchChange: (value: string) => void
  onExport: () => void
  filterBy: FilterBy
  onFilterChange: (value: FilterBy) => void
}

export default function StudentToolbar({
  search,
  onSearchChange,
  onExport,
  filterBy,
  onFilterChange,
}: StudentToolbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const filterOptions: { label: string; value: FilterBy }[] = [
    { label: "All", value: "all" },
    { label: "By Name", value: "name" },
    { label: "By Email", value: "email" },
  ]

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

      {/* Filtering dropdown */}
      <div className="relative">
        <ButtonSecondary
          onClick={() => setDropdownOpen((v) => !v)}
          className="flex items-center gap-2"
        >
          <SlidersHorizontal size={15} />
          Filtering
          {filterBy !== "all" && (
            <span className="text-violet-600 font-semibold">· {filterBy}</span>
          )}
        </ButtonSecondary>

        {dropdownOpen && (
          <>
            {/* Backdrop to close on outside click */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setDropdownOpen(false)}
            />
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden z-20 min-w-[150px]">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onFilterChange(option.value)
                    setDropdownOpen(false)
                  }}
                  className={`flex items-center justify-between w-full text-left px-4 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors
                    ${filterBy === option.value ? "text-violet-600" : "text-gray-700"}`}
                >
                  {option.label}
                  {filterBy === option.value && <Check size={14} />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Export */}
      <ButtonSecondary onClick={onExport} className="flex items-center gap-2">
        <Upload size={15} />
        Export
      </ButtonSecondary>
    </div>
  )
}
