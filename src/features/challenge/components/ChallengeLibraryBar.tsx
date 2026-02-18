// features/challenge/components/ChallengeLibraryBar.tsx
// All files are flat in components/ — no subfolders

import { useState } from "react";
import { Plus, MoreVertical } from "lucide-react";
import { useChallengeStore } from "../stores/challengeStore";
import { ChallengeListTitle } from "./ChallengeListTitle";
import { ChallengeEmptyState } from "./ChallengeEmptyState";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/shared/components/ui/tooltip";

interface ChallengeLibraryBarProps {
  onCreateChallenge: () => void;
}

export const ChallengeLibraryBar = ({
  onCreateChallenge,
}: ChallengeLibraryBarProps) => {
  const [search, setSearch] = useState("");

  const {
    challenges,
    selectedChallenge,
    setSelectedChallenge,
    deleteChallenge,
  } = useChallengeStore();

  const filtered = challenges.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full w-full border-r border-[hsl(var(--border))] bg-[hsl(var(--background))]">

      {/* Header */}
      <div className="px-4 pt-6 pb-3 border-b border-[hsl(var(--border))] shrink-0">
        <div className="flex items-center justify-between">

          {/* Title + Count */}
          <div>
            <h2 className="text-lg font-bold tracking-tight text-[hsl(var(--foreground))]">
              Library
            </h2>
            <p className="text-xs text-[hsl(var(--muted-foreground))]">
              {challenges.length} Challenge{challenges.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={onCreateChallenge}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8}>
                Create Challenge
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8}>
                More options
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Search */}
        <div className="mt-3">
          <Input
            placeholder="Search challenge..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-8 text-xs"
          />
        </div>
      </div>

      {/* Challenge List or Empty State */}
      <div
        className="flex-1 overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filtered.length === 0 ? (
          <ChallengeEmptyState onCreate={onCreateChallenge} />
        ) : (
          filtered.map((challenge) => (
            <ChallengeListTitle
              key={challenge.id}
              challenge={challenge}
              isSelected={selectedChallenge?.id === challenge.id}
              onClick={() => setSelectedChallenge(challenge)}
              onDelete={deleteChallenge}
            />
          ))
        )}
      </div>

    </div>
  );
};