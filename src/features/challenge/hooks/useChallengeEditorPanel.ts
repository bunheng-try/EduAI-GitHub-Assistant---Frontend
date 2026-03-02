// features/challenge/hooks/useChallengeEditorPanel.ts
import { useState } from "react";
import { useChallengeEditor } from "./useChallengeEditor";
import { useDeleteChallenge } from "./useChallengeQuery";

export const useChallengeEditorPanel = (initialMode: "create" | "edit", initialId?: number) => {
    const [mode, setMode] = useState<"create" | "edit">(initialMode);
    const [challengeId, setChallengeId] = useState<number | undefined>(initialId);

    const { draft, updateField, save: saveChallenge, remove, isLoading, isSaving, isDeleting } =
        useChallengeEditor({ mode, challengeId });

    const deleteChallenge = useDeleteChallenge();

    const handleSave = async () => {
        const saved = await saveChallenge();
        if (mode === "create" && saved?.id) {
            setChallengeId(saved.id);
            setMode("edit");
        }
        return saved;
    };

    const handleCancel = async (onClose: () => void) => {
        if (mode === "create" && challengeId) {
            await deleteChallenge.mutateAsync(challengeId);
        }
        onClose();
    };

    return {
        mode,
        setMode,
        challengeId,
        draft,
        updateField,
        remove,
        isLoading,
        isSaving,
        isDeleting,
        handleSave,
        handleCancel,
    };
};