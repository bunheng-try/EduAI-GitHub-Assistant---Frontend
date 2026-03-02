import { useContextMenu } from "@/shared/components/context-menu/ContextMenuProvider";
import type { ContextMenuItem } from "../context-menu/types";
import {Code } from "lucide-react";
import type { Assignment } from "@/features/assignment/apis/assignment.api";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  assignment: Assignment;
  onDelete: (id: number) => void;
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
  const { openMenu,closeMenu } = useContextMenu();
  const [openDialog,setOpenDialog]=useState<boolean>(false);

  const navigate = useNavigate();

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

  const items: ContextMenuItem[] = [
    {
      type: "item",
      label: "Edit",
      onClick: () => {
        navigate(`/classrooms/${assignment.classroomId}/assignments/${assignment.id}?tab=settings`);
        closeMenu();
      },
    },
    {
      type: "separator",
    },
    {
      type: "item",
      label: "Delete assignment",
      danger: true,
      onClick: () => {
        setOpenDialog(true);
        closeMenu();
      },
    },
  ];

    openMenu({
      x: e.clientX,
      y: e.clientY,
      items,
    });
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
        className={`flex py-4 px-8 cursor-pointer items-center justify-between rounded-lg ${isSelect ? "bg-gray-300" : " hover:bg-gray-100"} `}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
            <span className="text-sm font-semibold"><Code /></span>
          </div>

          <div className="w-40">
            <p className="font-medium text-gray-900 truncate">
              {assignment.title}
            </p>
            <p className="text-sm text-gray-500">
              Due {assignment.dueAt ? formatDate(assignment.dueAt) : "No date"}
            </p>
          </div>
        </div>

        <div className="w-20 flex items-center flex-col gap-2 text-sm capitalize text-gray-500">
        
        <button
            className={`w-full rounded-full py-1 px-2 ${assignment.isPublished?'bg-green-50 text-green-600':'bg-white text-gray-800'}`}
        >
            {assignment.isPublished?"Published":"Draft"}
        </button>
          {assignment.isPublished 
            ?`${10}/${totalStudent}`
            :"Inactive"
            }
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Delete Assignment</DialogTitle>
            <DialogDescription>
              Do you want to delete this assignment?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-4">
            <Button variant="default" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            <Button variant="outline" onClick={()=> onDelete(assignment.id)}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};



export default AssignmentCard;
