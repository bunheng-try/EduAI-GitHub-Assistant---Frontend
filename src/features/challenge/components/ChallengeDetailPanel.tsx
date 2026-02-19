// features/challenge/components/ChallengeDetailPanel.tsx

import { useState, useEffect } from "react";
import type { LibraryChallenge } from "../types/challenge";
import { useChallengeStore } from "../stores/challengeStore";
import { ChallengeDetailHeader, type ChallengeTabKey } from "./ChallengeDetailHeader";
import { ChallengeInfoTab } from "./ChallengeInfoTab";
import { ChallengeStartCodeTab } from "./ChallengeStartCodeTab";
import { ChallengeTestCaseTab } from "./ChallengeTestCaseTab";
import { ConfirmDialog } from "@/shared/components/design/dialog/ConfirmDialog";

export const ChallengeDetailPanel = () => {
  const { selectedChallenge, updateChallenge, deleteChallenge } = useChallengeStore();

  const [activeTab, setActiveTab]     = useState<ChallengeTabKey>("description");
  const [draft, setDraft]             = useState<LibraryChallenge | null>(null);
  const [isDirty, setIsDirty]         = useState(false);
  const [showDiscard, setShowDiscard] = useState(false);
  const [showDelete, setShowDelete]   = useState(false);

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

  const handleChange = (updated: Partial<LibraryChallenge>) => {
    setDraft((prev) => prev ? { ...prev, ...updated } : prev);
    setIsDirty(true);
  };

  const handleSave = () => {
    if (!draft) return;
    updateChallenge(draft);
    setIsDirty(false);
  };

  const handleDiscard = () => {
    if (!isDirty) return;
    setShowDiscard(true);
  };

  const handleConfirmDiscard = () => {
    setDraft({ ...selectedChallenge });
    setIsDirty(false);
    setShowDiscard(false);
  };

  const handleConfirmDelete = () => {
    deleteChallenge(selectedChallenge.id);
    setShowDelete(false);
  };

  return (
    <div className="flex flex-col h-full bg-[hsl(var(--background))]">

      {/* Header */}
      <ChallengeDetailHeader
        title={draft.title}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onSave={handleSave}
        onDiscard={handleDiscard}
        onDelete={() => setShowDelete(true)}
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
          <ChallengeTestCaseTab data={draft} onChange={handleChange} />
        )}

        {activeTab === "setting" && (
          <div className="p-6 text-sm text-[hsl(var(--muted-foreground))]">
            Setting tab — coming soon
          </div>
        )}
      </div>

      {/* Discard Confirmation */}
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

      {/* Delete Confirmation */}
      <ConfirmDialog
        open={showDelete}
        onOpenChange={setShowDelete}
        title={`Delete "${selectedChallenge.title}"?`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleConfirmDelete}
      >
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          This action cannot be undone. The challenge will be permanently removed.
        </p>
      </ConfirmDialog>

    </div>
  );
};