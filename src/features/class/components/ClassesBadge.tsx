import type { Classroom } from "../types/Classroom";

interface ClassroomBadgeProps {
  classroom: Classroom;
  isActive: boolean,
  onClick: (classroom: Classroom) => void;
}

export const ClassroomBadge = ({
  classroom,
  isActive,
  onClick,
}: ClassroomBadgeProps) => {
  return (
    <button
      onClick={() => onClick(classroom)}
      title={classroom.name}
      aria-pressed={isActive}
      className={`
        mb-2 p-3 rounded-2xl text-white cursor-pointer group
        transition-all duration-200
        ${
          isActive
            ? "bg-[#2d3748]"
            : "bg-[#1a202c] hover:bg-[#2d3748]"
        }
      `}
    >
      <img
        src={classroom.logo}
        alt={classroom.name}
         className={`
          w-8 h-8 rounded-lg transition-transform duration-200
          ${isActive ? "scale-110" : "group-hover:scale-105"}
        `}
      />
    </button>
  );
};