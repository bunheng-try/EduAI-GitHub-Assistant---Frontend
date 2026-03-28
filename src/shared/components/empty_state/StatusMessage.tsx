import { XCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import type { JSX } from "react";

interface StatusPanelProps {
    message: string;
    type?: "error" | "info" | "success" | "warning";
    className?: string;
}

export default function StatusPanel({
    message,
    type = "info",
    className = "",
}: StatusPanelProps) {
    const config: Record<
        string,
        { icon: JSX.Element; bg: string; border: string; text: string }
    > = {
        error: {
            icon: <XCircle className="w-5 h-5" />,
            bg: "bg-red-100",
            border: "border-red-500",
            text: "text-red-700",
        },
        info: {
            icon: <Info className="w-5 h-5" />,
            bg: "bg-gray-100",
            border: "border-gray-300",
            text: "text-gray-700",
        },
        success: {
            icon: <CheckCircle className="w-5 h-5" />,
            bg: "bg-green-100",
            border: "border-green-500",
            text: "text-green-700",
        },
        warning: {
            icon: <AlertTriangle className="w-5 h-5" />,
            bg: "bg-yellow-100",
            border: "border-yellow-500",
            text: "text-yellow-800",
        },
    };

    const { icon, bg, border, text } = config[type];

    return (
        <div
            className={`flex items-center gap-3 p-4 border-l-4 rounded-md shadow-sm ${bg} ${border} ${text} ${className}`}
        >
            {icon}
            <span className="font-medium text-sm">{message}</span>
        </div>
    );
}