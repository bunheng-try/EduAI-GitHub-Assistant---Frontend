import { useMemo } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/shared/components/ui/dropdown-menu";
import { Button } from "@/shared/components/ui/button";
import { Settings, Edit, Trash2, LogOut } from "lucide-react";
import type { Classroom } from "../apis/classroom.api";

interface MenuItem {
    label: string;
    onSelect: () => void;
    icon?: React.ReactNode;
    variant?: "default" | "destructive";
    separator?: boolean;
}

interface SettingsMenuProps {
    classroom: Classroom | undefined;
    classroomId: number;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onLeave: () => void;
}

export const SettingsMenu = ({ classroom, classroomId, onEdit, onDelete, onLeave }: SettingsMenuProps) => {
    const menuItems = useMemo<MenuItem[]>(() => {
        if (!classroom) return [];
        const items: MenuItem[] = [];

        if (["ADMIN", "OWNER"].includes(classroom.role!)) {
            items.push({ label: "Edit Classroom", onSelect: () => onEdit(classroomId), icon: <Edit size={16} /> });
            items.push({ label: "Delete Classroom", onSelect: () => onDelete(classroomId), icon: <Trash2 size={16} />, variant: "destructive" });
            items.push({ label: "", onSelect: () => { }, separator: true }); // optional separator
        }

        items.push({ label: "Leave Classroom", onSelect: onLeave, icon: <LogOut size={16} />, variant: "destructive" });
        return items;
    }, [classroom, classroomId, onEdit, onDelete, onLeave]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Settings className="w-5 h-5" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent side="top" align="start">
                {menuItems.map((item, index) =>
                    item.separator ? (
                        <DropdownMenuSeparator key={index} />
                    ) : (
                        <DropdownMenuItem
                            key={item.label + index}
                            onSelect={item.onSelect}
                            variant={item.variant ?? "default"}
                            className="flex items-center gap-2"
                        >
                            {item.icon && <span className="w-4">{item.icon}</span>}
                            {item.label}
                        </DropdownMenuItem>
                    )
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default SettingsMenu;