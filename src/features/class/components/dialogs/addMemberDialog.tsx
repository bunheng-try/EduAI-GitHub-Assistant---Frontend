import { CustomDialog } from "@/shared/components/design/dialog/CustomDialog";
import type { Member, AddMemberDto } from "../../apis/member.api";
import type { SelectedStudent } from "../../hooks/useInviteStudent";
import { useState } from "react";
import { Badge } from "@/shared/components/ui/badge";

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
        <div className="flex flex-col gap-3">
          {/* Email input */}
          <input
            type="email"
            value={email}
            placeholder="Enter student email"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
            onChange={(e) => onEmailChange(e.target.value)}
          />

          {/* Selected students badges */}
          {selectedStudents.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedStudents.map((s) => (
                <Badge
                  key={s.userId}
                  className="flex items-center gap-2 cursor-pointer bg-[hsl(var(--surface-muted))] text-[hsl(var(--foreground))] px-3 py-1"
                  onClick={() => removeSelectedStudent(s.userId)}
                >
                  <div className="flex flex-col leading-tight">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-[0.7rem] text-[hsl(var(--muted-foreground))]">{s.email}</span>
                  </div>
                  <span className="text-[hsl(var(--destructive))] font-bold">×</span>
                </Badge>
              ))}
            </div>
          )}

          {/* Search results */}
          {searchResults.length > 0 && (
            <div className="border rounded-md mt-1 bg-white shadow max-h-44 overflow-y-auto">
              {searchResults.map((s) => (
                <div
                  key={s.userId}
                  className="p-2 hover:bg-[hsl(var(--surface-hover))] cursor-pointer flex flex-col"
                  onClick={() => selectStudent(s)}
                >
                  <span className="font-medium">{s.name}</span>
                  <span className="text-[0.75rem] text-[hsl(var(--muted-foreground))]">{s.email}</span>
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