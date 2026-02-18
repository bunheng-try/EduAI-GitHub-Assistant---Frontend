// features/challenge/components/ChallengeDetailPanel.tsx

import { useState, useEffect } from "react";
import type { LibraryChallenge } from "../types/challenge";
import { useChallengeStore } from "../stores/challengeStore";
import { ChallengeDetailHeader, type ChallengeTabKey } from "./ChallengeDetailHeader";
import { ChallengeInfoTab } from "./ChallengeInfoTab";
import { ChallengeStartCodeTab } from "./ChallengeStartCodeTab";
import { ConfirmDialog } from "@/shared/components/design/dialog/ConfirmDialog";

export const ChallengeDetailPanel = () => {
  const { selectedChallenge, updateChallenge } = useChallengeStore();

  const [activeTab, setActiveTab]     = useState<ChallengeTabKey>("description");
  const [draft, setDraft]             = useState<LibraryChallenge | null>(null);
  const [isDirty, setIsDirty]         = useState(false);
  const [showDiscard, setShowDiscard] = useState(false);

  // Sync draft when selected challenge changes
  useEffect(() => {
    if (selectedChallenge) {
      setDraft({ ...selectedChallenge });
      setIsDirty(false);
    }
  }, [selectedChallenge]);

  // No challenge selected
  if (!selectedChallenge || !draft) {
    return (
      <div className="flex items-center justify-center h-full text-sm text-[hsl(var(--muted-foreground))]">
        Select a challenge from the library
      </div>
    );
  }

  // Update draft fields and mark as dirty
  const handleChange = (updated: Partial<LibraryChallenge>) => {
    setDraft((prev) => prev ? { ...prev, ...updated } : prev);
    setIsDirty(true);
  };

  // Save — persist to store
  const handleSave = () => {
    if (!draft) return;
    updateChallenge(draft);
    setIsDirty(false);
  };

  // Discard — show confirmation if dirty
  const handleDiscard = () => {
    if (!isDirty) return;
    setShowDiscard(true);
  };

  // Confirmed discard — revert to original
  const handleConfirmDiscard = () => {
    setDraft({ ...selectedChallenge });
    setIsDirty(false);
    setShowDiscard(false);
  };

  return (
    <div className="flex flex-col h-full bg-[hsl(var(--background))]">

      {/* Header — Title + Tabs + Save/Discard */}
      <ChallengeDetailHeader
        title={draft.title}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onSave={handleSave}
        onDiscard={handleDiscard}
        isDirty={isDirty}
      />

      {/* Tab Content */}
      <div
        className="flex-1 overflow-y-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {activeTab === "description" && (
          <ChallengeInfoTab data={draft} onChange={handleChange} />
        )}

        {activeTab === "startCode" && (
          <ChallengeStartCodeTab data={draft} onChange={handleChange} />
        )}

        {activeTab === "testCase" && (
          <div className="p-6 text-sm text-[hsl(var(--muted-foreground))]">
            Test Case tab — coming in Subtask 4
          </div>
        )}

        {activeTab === "setting" && (
          <div className="p-6 text-sm text-[hsl(var(--muted-foreground))]">
            Setting tab — coming soon
          </div>
        )}
      </div>

      {/* Discard Confirmation Dialog */}
      <ConfirmDialog
        open={showDiscard}
        onOpenChange={setShowDiscard}
        title="Discard Changes?"
        confirmText="Discard"
        cancelText="Keep Editing"
        onConfirm={handleConfirmDiscard}
      >
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          You have unsaved changes. Are you sure you want to discard them?
        </p>
      </ConfirmDialog>

    </div>
  );
};