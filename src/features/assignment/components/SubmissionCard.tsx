import { Check, Clock, AlertTriangle } from "lucide-react";
import type { Submission } from "@/shared/types/types";

interface SubmissionCardProps {
  submission: Submission;
}

export const SubmissionCard = ({ submission }: SubmissionCardProps) => {
  const { studentName, submittedAt, status, score } = submission;

  const formattedDate = new Date(submittedAt).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).replace(",", ", ");

  const initials = studentName
    .split(" ")
    .map(n => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const getStatusConfig = () => {
    const safeStatus = status ?? "unknown";

    switch (safeStatus) {
      case "graded":
        return {
          label: "Graded",
          bg: "bg-green-100",
          text: "text-green-700",
          icon: <Check className="h-3.5 w-3.5" />
        };
      case "pending":
        return {
          label: "Pending",
          bg: "bg-amber-100",
          text: "text-amber-700",
          icon: <Clock className="h-3.5 w-3.5" />
        };
      case "late":
        return {
          label: "Late",
          bg: "bg-yellow-100",
          text: "text-yellow-700",
          icon: <AlertTriangle className="h-3.5 w-3.5" />
        };
      default:
        return {
          label: (safeStatus as string).charAt(0).toUpperCase() + (safeStatus as string).slice(1),          
          bg: "bg-red-100",
          text: "text-red-700",
          icon: <AlertTriangle className="h-3.5 w-3.5" />
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-medium">
            {initials}
          </div>
          <div>
            <p className="font-medium text-gray-900">{studentName}</p>
            <p className="text-sm text-gray-500 mt-0.5">
              Submitted {formattedDate}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1.5">
          <div
            className={`
              inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium
              ${config.bg} ${config.text}
            `}
          >
            {config.icon}
            <span>{config.label}</span>
          </div>

          {status === "graded" && score != null && (
            <p className="text-sm font-medium text-green-700">{score}%</p>
          )}
        </div>
      </div>
    </div>
  );
};