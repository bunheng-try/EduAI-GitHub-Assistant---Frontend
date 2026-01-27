import { CalendarIcon, ChevronDownIcon, ClockIcon, StarIcon } from "lucide-react";
import { useState } from "react";


export const SettingsTab = () => {
  const [dueDate, setDueDate] = useState("");
  const [timeDue, setTimeDue] = useState("");
  const [points, setPoints] = useState("");

  return (
    <div className="p-6 max-w-2xl space-y-6">
      
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Date due <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

          <input
            type="date"
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full h-12 pl-12 pr-10 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Time Due <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <ClockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

          <input
            type="time"
            required
            value={timeDue}
            onChange={(e) => setTimeDue(e.target.value)}
            className="w-full h-12 pl-12 pr-10 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Points <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <StarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

          <input
            type="number"
            required
            min={0}
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            className="w-full h-12 pl-12 pr-10 rounded-xl border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
