// features/challenge/components/ChallengeStartCodeTab.tsx

import type { LibraryChallenge } from "../types/challenge";
import { Textarea } from "@/shared/components/ui/textarea";

interface ChallengeStartCodeTabProps {
  data: LibraryChallenge;
  onChange: (updated: Partial<LibraryChallenge>) => void;
}

export const ChallengeStartCodeTab = ({
  data,
  onChange,
}: ChallengeStartCodeTabProps) => {
  return (
    <div className="flex flex-col gap-4 p-6">

      {/* Label + Language badge */}
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-[hsl(var(--foreground))]">
          Starter Code
        </label>
        <span className="text-xs text-[hsl(var(--muted-foreground))] px-2 py-0.5 rounded-md bg-[hsl(var(--accent))]">
          {String(data.language ?? "C++")}
        </span>
      </div>

      {/* Code editor area */}
      <Textarea
        value={data.starterCode ?? ""}
        onChange={(e) => onChange({ starterCode: e.target.value })}
        placeholder={"void main(){\n  //Your Code\n}"}
        rows={16}
        className="font-mono text-sm resize-none bg-[hsl(var(--accent)/0.4)]"
        spellCheck={false}
      />

      <p className="text-xs text-[hsl(var(--muted-foreground))]">
        This code will be shown to students as the starting point.
      </p>

    </div>
  );
};