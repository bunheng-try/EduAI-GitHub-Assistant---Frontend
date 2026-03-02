import { MoreHorizontal } from "lucide-react";
import { ButtonGhost } from "../../../../shared/components/design/button";
import type { Member } from "../../apis/member.api";
import Avatar from "./Avatar";

interface StudentRowProps {
  student: Member;
  isLast: boolean;
  onContextMenu: (e: React.MouseEvent, student: Member) => void;
}

export default function StudentRow({ student, isLast, onContextMenu }: StudentRowProps) {
  // Compute initials from name
  const initials = student.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`grid grid-cols-[2fr_3fr_2fr_1fr] items-center px-4 py-3.5 hover:bg-gray-50 transition-colors ${!isLast ? "border-b border-gray-100" : ""
        }`}
    >
      {/* Name + Avatar */}
      <div className="flex items-center gap-3 truncate">
        <Avatar name={student.name} initials={initials} />
        <span className="text-sm font-semibold text-gray-800 truncate">{student.name}</span>
      </div>

      {/* Email */}
      <span className="text-sm text-gray-500 truncate">
        {student.email ?? `${student.name.replace(/\s+/g, ".").toLowerCase()}@student.cadt.com`}
      </span>

      {/* Role */}
      <span className="text-sm text-gray-500 truncate">{student.role}</span>

      {/* Action */}
      <div className="flex justify-center">
        <ButtonGhost onClick={(e) => onContextMenu(e, student)}>
          <MoreHorizontal size={16} />
        </ButtonGhost>
      </div>
    </div>
  );
}