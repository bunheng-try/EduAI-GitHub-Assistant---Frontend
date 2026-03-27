import { useState, useMemo } from "react";
import type React from "react";
import { Edit, Trash2, Copy } from "lucide-react";
import type { ContextMenuItem } from "@/shared/components/context-menu/types";


type UseChallengeContextMenuProps = {
    onEdit: (id: number) => void;
    onDuplicate?: (id: number) => void;
    onRequestDelete: (id: number) => void;
};

export function useChallengeContextMenu({
    onEdit,
    onDuplicate,
    onRequestDelete,
}: UseChallengeContextMenuProps) {
    const [contextMenu, setContextMenu] = useState<{
        x: number;
        y: number;
        challengeId: number;
    } | null>(null);

    const handleChallengeContextMenu = (
        e: React.MouseEvent,
        challengeId: number
    ) => {
        e.preventDefault();
        setContextMenu({ x: e.clientX, y: e.clientY, challengeId });
    };

    const closeContextMenu = () => setContextMenu(null);

    const contextMenuItems: ContextMenuItem[] = useMemo(() => {
        if (!contextMenu) return [];

        const { challengeId } = contextMenu;

        const handleEditClick = () => {
            onEdit(challengeId);
            closeContextMenu();
        };

        const handleDuplicateClick = () => {
            if (onDuplicate) onDuplicate(challengeId);
            closeContextMenu();
        };

        const handleDeleteClick = () => {
            onRequestDelete(challengeId);
            closeContextMenu();
        };

        return [
            { type: "item", label: "Edit", icon: <Edit className="size-4" />, onClick: handleEditClick },
            onDuplicate
                ? { type: "item", label: "Duplicate", icon: <Copy className="size-4" />, onClick: handleDuplicateClick }
                : undefined,
            { type: "separator" },
            { type: "item", label: "Delete", icon: <Trash2 className="size-4" />, danger: true, onClick: handleDeleteClick },
        ].filter(Boolean) as ContextMenuItem[];
    }, [contextMenu, onEdit, onDuplicate, onRequestDelete]);

    return {
        contextMenu,
        contextMenuItems,
        handleChallengeContextMenu,
        closeContextMenu,
    };
}