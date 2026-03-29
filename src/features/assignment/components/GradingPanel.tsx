import { useEffect } from "react";
import { Panel, PanelContent } from "@/shared/components/design/Panel";
import { PanelHeader } from "@/shared/components/design/PanelHeader";
import { Textarea } from "@/shared/components/ui/textarea";
import { Input } from "@/shared/components/ui/input";
import { User, Clock } from "lucide-react";
import { WrapIcon } from "@/shared/components/ui/wrapIcon";
import { useGradingStore } from "../stores/gradingScore";

interface GradingPanelProps {
  classroomId: number;
  assignmentId: number;
  submissionId: number;
  studentName?: string;
  submittedAt?: string;
  currentScore?: number;
}

export default function GradingPanel({
  studentName,
  submittedAt,
  currentScore,
}: GradingPanelProps) {
  const { score, feedback, setScore, setFeedback } = useGradingStore();

  // Initialise from existing data
  useEffect(() => {
    if (currentScore != null) setScore(String(currentScore));
  }, [currentScore, setScore]);

  const formattedDate = submittedAt
    ? new Date(submittedAt).toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    : "—";

  return (
    <Panel>
      <PanelHeader
        topLeft={<span className="typo-body font-semibold">Grading</span>}
      />

      <PanelContent className="flex flex-col gap-4">
        <div className="rounded-md bg-[hsl(var(--surface-muted))] p-3 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <WrapIcon icon={User} size="sm" className="text-[hsl(var(--muted-foreground))]" />
            <span className="typo-body font-medium">{studentName ?? "Unknown"}</span>
          </div>
          <div className="flex items-center gap-2 text-[hsl(var(--muted-foreground))]">
            <WrapIcon icon={Clock} size="sm" />
            <span className="typo-caption">Submitted at: {formattedDate}</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="typo-label font-medium text-[hsl(var(--foreground))]">
            Score (0 - 100)
          </label>
          <Input
            type="number"
            min={0}
            max={100}
            placeholder="Enter score..."
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <label className="typo-label font-medium text-[hsl(var(--foreground))]">
            Feedback
          </label>
          <Textarea
            placeholder="Write your feedback for the student..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="resize-none flex-1 min-h-[180px]"
          />
        </div>
      </PanelContent>
    </Panel>
  );
}
