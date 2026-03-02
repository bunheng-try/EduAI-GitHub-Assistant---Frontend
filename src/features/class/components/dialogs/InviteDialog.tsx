import { CustomDialog } from "@/shared/components/design/dialog/CustomDialog";
import type { Member, AddMemberDto } from "../../apis/member.api";
import type { SelectedStudent } from "../../hooks/useInviteStudent";

interface InviteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  email: string;
  onEmailChange: (email: string) => void;
  searchResults: Member[];
  selectedStudents: SelectedStudent[];
  selectStudent: (student: Member) => void;
  removeSelectedStudent: (userId: number) => void;
  onInvite: () => Promise<{ success: boolean; error?: string }>;
}

export default function InviteDialog({
  open,
  onOpenChange,
  email,
  onEmailChange,
  searchResults,
  selectedStudents,
  selectStudent,
  removeSelectedStudent,
  onInvite,
}: InviteDialogProps) {
  const handleInvite = async () => {
    const result = await onInvite();
    if (result.success) {
      onOpenChange(false);
    }
  };

  return (
    <CustomDialog
      open={open}
      onCancel={() => onOpenChange(false)}
      title="Invite Students"
      bodyContent={
        <div className="flex flex-col gap-2">
          {/* Input field */}
          <input
            type="email"
            value={email}
            placeholder="Enter student email"
            className="w-full border rounded-md p-2"
            onChange={(e) => onEmailChange(e.target.value)}
          />

          {/* Selected student tags */}
          {selectedStudents.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedStudents.map((s) => (
                <div
                  key={s.userId}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center gap-1"
                >
                  {s.name}
                  <button
                    className="text-blue-600 hover:text-blue-900"
                    onClick={() => removeSelectedStudent(s.userId)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Search results dropdown */}
          {searchResults.length > 0 && (
            <div className="border rounded-md mt-1 bg-white shadow max-h-40 overflow-y-auto">
              {searchResults.map((s) => (
                <div
                  key={s.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectStudent(s)}
                >
                  {s.name}
                </div>
              ))}
            </div>
          )}
        </div>
      }
      actionButtons={[
        {
          label: "Cancel",
          onClick: () => onOpenChange(false),
          variant: "secondary",
        },
        {
          label: "Invite",
          onClick: handleInvite,
          variant: "primary",
          disabled: selectedStudents.length === 0,
        },
      ]}
    />
  );
}