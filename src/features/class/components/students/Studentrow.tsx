import { MoreHorizontal } from "lucide-react";
import { ButtonGhost } from "../../../../shared/components/design/button";
import type { Student } from "../../types/Students.types";
import Avatar from "./Avatar";

interface StudentRowProps {
  student: Student;
  isLast: boolean;
  onContextMenu: (e: React.MouseEvent, student: Student) => void;
}

export default function StudentRow({ student, isLast, onContextMenu }: StudentRowProps) {
  return (
    <div className={`flex items-center px-4 py-3.5 hover:bg-gray-50 transition-colors ${!isLast ? "border-b border-gray-50" : ""}`}>
  <div className="flex items-center gap-3 w-[38%] shrink-0 min-w-0">
    <Avatar name={student.name} initials={student.initials} />
    <span className="text-sm font-semibold text-gray-800 truncate">{student.name}</span>
  </div>
  <span className="text-sm text-gray-500 truncate flex-1 px-6">{student.email}</span>
  <div className="flex justify-center w-[56px] shrink-0">
    <ButtonGhost onClick={(e) => onContextMenu(e, student)}>
      <MoreHorizontal size={16} />
    </ButtonGhost>
  </div>
</div>
  );
}
