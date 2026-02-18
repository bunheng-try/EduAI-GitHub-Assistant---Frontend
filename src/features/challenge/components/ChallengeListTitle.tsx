// features/challenge/components/ChallengeListTitle.tsx
// Note: file is in components/ (flat), not in components/library/

import { useState, useRef, useEffect } from "react";
import { Trash2 } from "lucide-react";
import type { LibraryChallenge } from "../types/challenge";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { ContextMenu } from "@/shared/components/context-menu/ContextMenu";
import { cn } from "@/lib/utils";

interface ChallengeListTitleProps {
  challenge: LibraryChallenge;
  isSelected: boolean;
  onClick: () => void;
  onDelete: (id: string) => void;
}

// Easy=green, Medium=yellow, Hard/High=red
const levelStyles: Record<string, string> = {
  Easy:   "border-transparent bg-green-100  text-green-700  dark:bg-green-900/40  dark:text-green-400",
  Medium: "border-transparent bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400",
  Hard:   "border-transparent bg-red-100    text-red-700    dark:bg-red-900/40    dark:text-red-400",
  High:   "border-transparent bg-red-100    text-red-700    dark:bg-red-900/40    dark:text-red-400",
};

export const ChallengeListTitle = ({
  challenge,
  isSelected,
  onClick,
  onDelete,
}: ChallengeListTitleProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [menuPos, setMenuPos]     = useState<{ x: number; y: number } | null>(null);
  const menuRef                   = useRef<HTMLDivElement>(null);

  // Close context menu on outside click
  useEffect(() => {
    if (!menuPos) return;
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuPos(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [menuPos]);

  const handleMenuOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPos({ x: rect.left, y: rect.bottom + 4 });
  };

  const contextMenuItems = [
    {
      type: "item" as const,
      label: "Delete",
      icon: <Trash2 className="w-4 h-4" />,
      danger: true,
      onClick: () => {
        setMenuPos(null);
        onDelete(challenge.id);
      },
    },
  ];

  return (
    <>
      <div
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative flex flex-col gap-2 px-4 py-3 cursor-pointer",
          "border-b border-[hsl(var(--border))] transition-colors",
          isSelected
            ? "bg-[hsl(var(--accent))] border-l-2 border-l-[hsl(var(--primary))]"
            : "hover:bg-[hsl(var(--accent)/0.5)]"
        )}
      >
        {/* Row 1 — Icon + Title + Hover Actions */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            {/* Icon */}
            <div className="w-7 h-7 rounded-md bg-[hsl(var(--primary))] flex items-center justify-center shrink-0">
              <svg
                className="w-4 h-4 text-[hsl(var(--primary-foreground))]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            {/* Title */}
            <span className="text-sm font-semibold text-[hsl(var(--foreground))] truncate">
              {challenge.title}
            </span>
          </div>

          {/* "..." button — only visible on hover */}
          {isHovered && (
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={handleMenuOpen}
              className="shrink-0"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </Button>
          )}
        </div>

        {/* Row 2 — Description (truncated) */}
        {challenge.description && (
          <p className="text-xs text-[hsl(var(--muted-foreground))] truncate">
            {challenge.description}
          </p>
        )}

        {/* Row 3 — Topic badge */}
        {challenge.topic && (
          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary" className="text-xs">
              {String(challenge.topic)}
            </Badge>
          </div>
        )}

        {/* Row 4 — Language (LEFT) + Level (RIGHT) */}
        <div className="flex items-center justify-between">

          {/* Language — LEFT */}
          <div className="flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))]">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span>{String(challenge.language)}</span>
          </div>

          {/* Level — RIGHT */}
          <Badge className={cn("text-xs", levelStyles[challenge.level])}>
            {challenge.level}
          </Badge>

        </div>
      </div>

      {/* Context Menu */}
      {menuPos && (
        <div ref={menuRef}>
          <ContextMenu x={menuPos.x} y={menuPos.y} items={contextMenuItems} />
        </div>
      )}
    </>
  );
};