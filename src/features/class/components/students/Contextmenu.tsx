import { useEffect, useRef } from "react";
import { UserX } from "lucide-react";
import { ButtonGhost } from "../../../../shared/components/design/button/ButtonGhost";

interface ContextMenuProps {
  x: number;
  y: number;
  onRemove: () => void;
  onClose: () => void;
}

export default function ContextMenu({ x, y, onRemove, onClose }: ContextMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="fixed z-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1 min-w-[160px]"
      style={{ top: y, left: x }}
    >
      <ButtonGhost
        onClick={onRemove}
        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 justify-start"
      >
        <UserX size={15} />
        Remove Student
      </ButtonGhost>
    </div>
  );
}
