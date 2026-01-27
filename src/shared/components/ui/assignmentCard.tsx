import { useState } from "react";
import {type Assignment } from "@/shared/types/types";
import { Check} from "lucide-react"

interface Props {
  assignment: Assignment;
  onDelete: (id: string) => void;
  onClick: (assignment: Assignment) => void;
  isSelect?: boolean;
  totalStudent: number;
}

const AssignmentCard = ({
  assignment,
  onDelete,
  onClick,
  isSelect=false,
  totalStudent
}: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); 
    setPosition({ x: e.pageX, y: e.pageY });
    setMenuOpen(true);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    onDelete(assignment.id);
    setMenuOpen(false);
  };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();

        const optionsSameYear: Intl.DateTimeFormatOptions = {
            month: "short",
            day: "numeric",
        };

        const optionsDifferentYear: Intl.DateTimeFormatOptions = {
            month: "short",
            day: "numeric",
            year: "numeric",
        };

        // Compare year
        if (date.getFullYear() === now.getFullYear()) {
            return date.toLocaleDateString("en-US", optionsSameYear); // Oct 21
        } else {
            return date.toLocaleDateString("en-US", optionsDifferentYear); // Oct 21, 2027
        }
    };

  return (
    <>
      <div
        onClick={() => onClick(assignment)}
        onContextMenu={handleContextMenu}
        className={`flex py-4 px-10 cursor-pointer items-center justify-between rounded-lg ${isSelect ? "bg-gray-300" : "bg-white hover:bg-gray-50"} `}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
            <span className="text-sm font-semibold">Q</span>
          </div>

          <div>
            <p className="font-medium text-gray-900">
              {assignment.title}
            </p>
            <p className="text-sm text-gray-500">
              Due {formatDate(assignment.dueDate)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm capitalize text-gray-500">
        
        <button
            className={`ml-2 rounded-full p-1 ${assignment.status === "active"?'text-green-600':'text-gray-400'}`}
        >
            <Check className={`h-6 w-6 `} />
        </button>
          {assignment.status === "active"
            ?`${assignment.totalSubmitted}/${totalStudent}`
            :assignment.status
            }
        </div>
      </div>

      {menuOpen && (
        <div
          style={{ top: position.y, left: position.x }}
          className="absolute z-50 w-44 rounded-md bg-white shadow-lg"
          onMouseLeave={() => setMenuOpen(false)}
        >
          <button
            onClick={handleDelete}
            className="flex w-full items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            Delete assignment
          </button>
        </div>
      )} 
    </>
  );
};

export default AssignmentCard;
