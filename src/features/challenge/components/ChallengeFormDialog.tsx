// features/challenge/components/ChallengeFormDialog.tsx

import { useState, useEffect } from "react";
import { FormDialog } from "@/shared/components/design/dialog/FormDialog";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import type { LibraryChallenge, TestCase } from "../types/challenge";

type FormErrors = Partial<Record<keyof LibraryChallenge, string>>;

interface ChallengeFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  // If editData is provided → Edit mode, otherwise → Create mode
  editData?: LibraryChallenge | null;
  onSubmit: (data: Omit<LibraryChallenge, "id" | "author" | "date">) => void;
}

const EMPTY_FORM = {
  title: "",
  description: "",
  language: "",
  level: "" as LibraryChallenge["level"],
  topic: "",
  score: "" as unknown as number,
  starterCode: "",
  testCases: [] as TestCase[],
};

export const ChallengeFormDialog = ({
  open,
  onOpenChange,
  editData,
  onSubmit,
}: ChallengeFormDialogProps) => {
  const isEdit = !!editData;

  const [form, setForm]     = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});

  // Pre-fill form when editing
  useEffect(() => {
    if (editData) {
      setForm({
        title:       editData.title ?? "",
        description: String(editData.description ?? ""),
        language:    String(editData.language ?? ""),
        level:       editData.level,
        topic:       String(editData.topic ?? ""),
        score:       editData.score as unknown as number,
        starterCode: editData.starterCode ?? "",
        testCases:   editData.testCases ?? [],
      });
    } else {
      setForm(EMPTY_FORM);
    }
    setErrors({});
  }, [editData, open]);

  const update = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // Validate required fields
  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.title.trim())       newErrors.title    = "Title is required";
    if (!form.description.trim()) newErrors.description = "Description is required";
    if (!form.language)           newErrors.language = "Language is required";
    if (!form.level)              newErrors.level    = "Difficulty is required";
    if (!form.topic)              newErrors.topic    = "Category is required";
    if (!form.score)              newErrors.score    = "Points is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSubmit({
      title:       form.title,
      description: form.description,
      language:    form.language,
      level:       form.level,
      topic:       form.topic,
      score:       Number(form.score),
      starterCode: form.starterCode,
      testCases:   form.testCases,
    });
    onOpenChange(false);
  };

  return (
    <FormDialog
      open={open}
      onOpenChange={onOpenChange}
      title={isEdit ? "Edit Challenge" : "Create New Challenge"}
      submitText={isEdit ? "Save" : "Create"}
      cancelText="Cancel"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4 py-4">

        {/* Title */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[hsl(var(--foreground))]">
            Title <span className="text-[hsl(var(--destructive))]">*</span>
          </label>
          <Input
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="An Implement Binary Search"
            aria-invalid={!!errors.title}
          />
          {errors.title && (
            <p className="text-xs text-[hsl(var(--destructive))]">{errors.title}</p>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[hsl(var(--foreground))]">
            Description <span className="text-[hsl(var(--destructive))]">*</span>
          </label>
          <Textarea
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="Description what student need to implement..."
            rows={4}
            className="resize-none"
            aria-invalid={!!errors.description}
          />
          {errors.description && (
            <p className="text-xs text-[hsl(var(--destructive))]">{errors.description}</p>
          )}
        </div>

        {/* Row — Score + Difficulty */}
        <div className="grid grid-cols-2 gap-4">

          {/* Score */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[hsl(var(--foreground))]">
              Points <span className="text-[hsl(var(--destructive))]">*</span>
            </label>
            <Input
              type="number"
              value={form.score}
              onChange={(e) => update("score", e.target.value)}
              placeholder="0-100"
              aria-invalid={!!errors.score}
            />
            {errors.score && (
              <p className="text-xs text-[hsl(var(--destructive))]">{errors.score}</p>
            )}
          </div>

          {/* Difficulty */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[hsl(var(--foreground))]">
              Difficulty <span className="text-[hsl(var(--destructive))]">*</span>
            </label>
            <select
              value={form.level}
              onChange={(e) => update("level", e.target.value)}
              aria-invalid={!!errors.level}
              className="h-9 w-full rounded-md border border-[hsl(var(--border))] bg-transparent px-3 py-1 text-sm text-[hsl(var(--foreground))] outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
            >
              <option value="">Select difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            {errors.level && (
              <p className="text-xs text-[hsl(var(--destructive))]">{errors.level}</p>
            )}
          </div>
        </div>

        {/* Row — Language + Category */}
        <div className="grid grid-cols-2 gap-4">

          {/* Language */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[hsl(var(--foreground))]">
              Language <span className="text-[hsl(var(--destructive))]">*</span>
            </label>
            <select
              value={form.language}
              onChange={(e) => update("language", e.target.value)}
              aria-invalid={!!errors.language}
              className="h-9 w-full rounded-md border border-[hsl(var(--border))] bg-transparent px-3 py-1 text-sm text-[hsl(var(--foreground))] outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
            >
              <option value="">Select language</option>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
            </select>
            {errors.language && (
              <p className="text-xs text-[hsl(var(--destructive))]">{errors.language}</p>
            )}
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[hsl(var(--foreground))]">
              Category <span className="text-[hsl(var(--destructive))]">*</span>
            </label>
            <Input
              value={String(form.topic)}
              onChange={(e) => update("topic", e.target.value)}
              placeholder="ex: Array"
              aria-invalid={!!errors.topic}
            />
            {errors.topic && (
              <p className="text-xs text-[hsl(var(--destructive))]">{errors.topic}</p>
            )}
          </div>
        </div>

      </div>
    </FormDialog>
  );
};