import type { ReactNode } from "react";
import { XCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

interface StatusPanelProps {
    type?: "error" | "info" | "success" | "warning";
    title: string;
    description?: string;
    className?: string;
    icon?: ReactNode;
}

export const StatusPanel = ({
    type = "info",
    title,
    description,
    className = "",
    icon,
}: StatusPanelProps) => {
    const defaultIcons: Record<string, ReactNode> = {
        error: <XCircle className="w-10 h-10 text-[hsl(var(--destructive))]" />,
        info: <Info className="w-10 h-10 text-[hsl(var(--muted-foreground))]" />,
        success: <CheckCircle className="w-10 h-10 text-green-600" />,
        warning: <AlertTriangle className="w-10 h-10 text-yellow-600" />,
    };

    const chosenIcon = icon || defaultIcons[type];

    return (
        <div
            className={`w-full h-full flex flex-col items-center justify-center text-center px-6 py-12 rounded-md shadow-sm space-y-3 ${className}`}
        >
            <div className="flex items-center justify-center">{chosenIcon}</div>
            <h2 className="text-md font-semibold text-[hsl(var(--foreground))]">{title}</h2>
            {description && (
                <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-xs">{description}</p>
            )}
        </div>
    );
};