import type { Member } from "../../apis/member.api";
import StudentRow from "../students/Studentrow";
import EmptyState from "../students/EmptyState";

interface StudentTableProps {
  students: Member[];
  isFiltered: boolean;
  onContextMenu: (e: React.MouseEvent, student: Member) => void;
}

export default function StudentTable({ students, isFiltered, onContextMenu }: StudentTableProps) {
  return (
    <div className="px-1 pb-6">
      <div className="border border-gray-100 rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[2fr_3fr_2fr_1fr] px-4 py-3 bg-gray-50 border-b border-gray-100">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Student</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">role</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Action</span>
        </div>

        {/* Rows */}
        {students.length === 0 ? (
          <EmptyState isFiltered={isFiltered} />
        ) : (
          students.map((student, i) => (
            <StudentRow
              key={student.id} // updated key
              student={student} // Member type
              isLast={i === students.length - 1}
              onContextMenu={onContextMenu}
            />
          ))
        )}
      </div>
    </div>
  );
}