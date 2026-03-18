import { Button } from "@/shared/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/shared/components/ui/dialog";
import { CalendarIcon, ClockIcon, Save, Trash2, X } from "lucide-react";
import { useAssignmentSettings } from "../hooks/useAssignmentSettings";
import type { Assignment } from "../apis/assignment.api";
import { useUpdateAssignment } from "../hooks/useAssignmentQuery";
import { EditableField } from "@/shared/components/design/EditableField";
import { SectionContainer } from "@/shared/components/design/SectionContainer";
import { LabeledSection } from "@/shared/components/design/LabeledSection";

interface SettingsTabProps {
  assignment: Assignment;
  onAssignmentUpdate?: (updated: Partial<Assignment>) => void;
  onDelete?: () => void;
}

export const SettingsTab = ({ assignment, onAssignmentUpdate, onDelete }: SettingsTabProps) => {
  const {
    dueDate,
    setDueDate,
    timeDue,
    setTimeDue,
    description,
    setDescription,
    showDeleteDialog,
    setShowDeleteDialog,
    handleSave,
    handleCancel,
    handleDeleteRequest,
  } = useAssignmentSettings(assignment);

  const { mutate: updateAssignment } = useUpdateAssignment();

  const onSave = () => {
    const updatedData = handleSave();
    updateAssignment({
      classroomId: assignment.classroomId,
      assignmentId: assignment.id,
      dto: updatedData,
    });
  };

  const onCancel = () => handleCancel();

  return (
    <div className="p-6 max-w-3xl space-y-6">

      {/* Assignment Details Section */}
      <SectionContainer title="Assignment Details">
        <div className="grid grid-cols-2 gap-4">
          <LabeledSection label="Due Date">
            <EditableField
              value={dueDate}
              onChange={setDueDate}
              icon={<CalendarIcon className="w-5 h-5 text-gray-400" />}
              placeholder="Select due date"
            />
          </LabeledSection>

          <LabeledSection label="Time Due">
            <EditableField
              value={timeDue}
              onChange={setTimeDue}
              icon={<ClockIcon className="w-5 h-5 text-gray-400" />}
              placeholder="Select due time"
            />
          </LabeledSection>

          <LabeledSection label="Points">
            <span>{assignment.points ?? "Not set"}</span>
          </LabeledSection>

          <LabeledSection label="Status">
            <span className="capitalize">{assignment.isPublished ? "Published" : "Not Published"}</span>
          </LabeledSection>
        </div>
      </SectionContainer>

      {/* Description Section */}
      <SectionContainer title="Description">
        <EditableField
          value={description}
          onChange={setDescription}
          multiline
          placeholder="Enter assignment description..."
        />
      </SectionContainer>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button variant="default" onClick={onSave}>
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button variant="outline" onClick={onCancel}>
          <X className="w-4 h-4 mr-2" />
          Cancel
        </Button>
        <Button variant="destructive" onClick={handleDeleteRequest}>
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </Button>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Delete Assignment</DialogTitle>
            <DialogDescription>Do you want to delete this assignment?</DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-4">
            <Button variant="default" onClick={() => setShowDeleteDialog(false)}>Cancel</Button>
            <Button variant="outline" onClick={onDelete}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
};