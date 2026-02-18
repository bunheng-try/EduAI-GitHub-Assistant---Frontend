// features/challenge/components/ChallengeInfoTab.tsx

import type { LibraryChallenge } from "../types/challenge";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";

interface ChallengeInfoTabProps {
  data: LibraryChallenge;
  onChange: (updated: Partial<LibraryChallenge>) => void;
}

export const ChallengeInfoTab = ({ data, onChange }: ChallengeInfoTabProps) => {
  return (
    <div className="flex flex-col gap-6 p-6">

      {/* Title */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[hsl(var(--foreground))]">
          Title <span className="text-[hsl(var(--destructive))]">*</span>
        </label>
        <Input
          value={String(data.title ?? "")}
          onChange={(e) => onChange({ title: e.target.value })}
          placeholder="Enter challenge title"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-[hsl(var(--foreground))]">
          Description
        </label>
        <Textarea
          value={String(data.description ?? "")}
          onChange={(e) => onChange({ description: e.target.value })}
          placeholder="What should student need to implement..."
          rows={6}
          className="resize-none"
        />
      </div>

      {/* Row — Score + Level */}
      <div className="grid grid-cols-2 gap-4">

        {/* Score */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[hsl(var(--foreground))]">
            Points
          </label>
          <Input
            type="number"
            value={String(data.score ?? "")}
            onChange={(e) => onChange({ score: Number(e.target.value) })}
            placeholder="0-100"
          />
        </div>

        {/* Level */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[hsl(var(--foreground))]">
            Difficulty <span className="text-[hsl(var(--destructive))]">*</span>
          </label>
          <select
            value={data.level ?? ""}
            onChange={(e) =>
              onChange({ level: e.target.value as LibraryChallenge["level"] })
            }
            className="h-9 w-full rounded-md border border-[hsl(var(--border))] bg-transparent px-3 py-1 text-sm text-[hsl(var(--foreground))] outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
          >
            <option value="">Select difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>

      {/* Row — Language + Topic */}
      <div className="grid grid-cols-2 gap-4">

        {/* Language */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[hsl(var(--foreground))]">
            Language <span className="text-[hsl(var(--destructive))]">*</span>
          </label>
          <select
            value={String(data.language ?? "")}
            onChange={(e) => onChange({ language: e.target.value })}
            className="h-9 w-full rounded-md border border-[hsl(var(--border))] bg-transparent px-3 py-1 text-sm text-[hsl(var(--foreground))] outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]"
          >
            <option value="">Select language</option>
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>
        </div>

        {/* Topic */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-[hsl(var(--foreground))]">
            Category <span className="text-[hsl(var(--destructive))]">*</span>
          </label>
          <Input
            value={String(data.topic ?? "")}
            onChange={(e) => onChange({ topic: e.target.value })}
            placeholder="ex: Array"
          />
        </div>
      </div>

    </div>
  );
};