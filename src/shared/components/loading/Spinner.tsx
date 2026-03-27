import React from "react";

interface SpinnerProps {
    size?: number;
    className?: string;
}

export default function Spinner({ size = 48, className = "" }: SpinnerProps) {
    return (
        <div
            className={`relative rounded-full animate-rotate360 ${className}`}
            style={{ width: size, height: size }}
        >
            <div
                className="absolute inset-0 rounded-full border-[5px] spinner-primary animate-prixClipFix"
                style={{ borderStyle: "solid", boxSizing: "border-box", content: '""' }}
            />
        </div>
    );
}