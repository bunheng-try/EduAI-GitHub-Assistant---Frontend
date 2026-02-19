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
    <div
      className={`grid grid-cols-[2fr_3fr_56px] px-4 py-3.5 items-center hover:bg-gray-50 transition-colors ${
        !isLast ? "border-b border-gray-50" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <Avatar name={student.name} initials={student.initials} />
        <span className="text-sm font-semibold text-gray-800 truncate">{student.name}</span>
      </div>

      <span className="text-sm text-gray-500 truncate pr-4">{student.email}</span>

      <div className="flex justify-center">
        <ButtonGhost onClick={(e) => onContextMenu(e, student)}>
          <MoreHorizontal size={16} />
        </ButtonGhost>
      </div>
    </div>
  );
}
