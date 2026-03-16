import { Textarea } from "@/shared/components/ui/textarea";
import { CalendarIcon, ChevronDownIcon, ClockIcon } from "lucide-react";
import { useAssignmentSettings } from "../hooks/useAssignmentSettings";
import type { Assignment } from "../apis/assignment.api";
import { useUpdateAssignment } from "../hooks/useAssignmentQuery";

interface SettingsTabProps {
  assignment: Assignment;
  isEditing: boolean;
  onEditChange: (editing: boolean) => void;
  onAssignmentUpdate?: (updated: Partial<Assignment>) => void;
  onDelete?: () => void;
}

export const SettingsTab = ({ assignment, onAssignmentUpdate }: SettingsTabProps) => {
  const {
    dueDate,
    setDueDate,
    timeDue,
    setTimeDue,
    points,
    setPoints,
    description,
    setDescription,
    handleSave,
  } = useAssignmentSettings(assignment);

  const { mutate: updateAssignment} = useUpdateAssignment();

  const autoSave = () => {
    setTimeout(() => {
      const updatedData = handleSave();

      updateAssignment({
        classroomId: assignment.classroomId,
        assignmentId: assignment.id,
        dto: updatedData,
      });

      onAssignmentUpdate?.(updatedData);
    }, 0);
  };
  
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
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
              autoSave();
            }}
            className="w-full h-12 pl-12 pr-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            value={timeDue}
            onChange={(e) => {
              setTimeDue(e.target.value);
              autoSave();
            }}
            className="w-full h-12 pl-12 pr-10 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Points
        </label>

        <input
          type="number"
          value={points ?? ""}
          onChange={(e) => {
            setPoints(Number(e.target.value));
            autoSave();
          }}
          className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter assignment points"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Description
        </label>
        <Textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            autoSave();
          }}
          rows={5}
          className="rounded-xl"
          placeholder="Enter assignment description..."
        />
      </div>

    </div>
  );
};