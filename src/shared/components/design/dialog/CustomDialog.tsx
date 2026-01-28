// src/shared/components/design/dialog/CustomDialog.tsx
import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type ActionButton = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "destructive" | "ghost";
  disabled?: boolean;
};

type CustomDialogProps = {
  open: boolean;
  onCancel: () => void;
  title: string | React.ReactNode;
  bodyContent: React.ReactNode;
  actionButtons: ActionButton[];
  className?: string;
};

export function CustomDialog({
  open,
  onCancel,
  title,
  bodyContent,
  actionButtons,
  className,
}: CustomDialogProps) {
  // Handle ESC key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onCancel();
      }
    };
    
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onCancel]);

  // Prevent body scroll when dialog is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  // Button variant styles
  const getButtonStyles = (variant?: string) => {
    const base = "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    switch (variant) {
      case "primary":
        return `${base} bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 focus:ring-[hsl(var(--ring))]`;
      case "secondary":
        return `${base} bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/80 focus:ring-[hsl(var(--ring))]`;
      case "destructive":
        return `${base} bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] hover:opacity-90 focus:ring-[hsl(var(--destructive))]`;
      case "ghost":
        return `${base} hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))] focus:ring-[hsl(var(--ring))]`;
      default:
        return `${base} bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 focus:ring-[hsl(var(--ring))]`;
    }
  };

  return (
    <>
      {/* Overlay - 50% black transparent, blocks background interaction */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onCancel}
        aria-hidden="true"
      />

      {/* Dialog - Centered vertically and horizontally */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className={cn(
            "bg-[hsl(var(--card))] text-[hsl(var(--foreground))] rounded-lg shadow-lg max-w-md w-full max-h-[90vh] flex flex-col",
            className
          )}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
        >
          {/* Header with Title and Close Button */}
          <div className="px-6 py-4 border-b border-[hsl(var(--border))] flex items-start justify-between">
            <h2
              id="dialog-title"
              className="text-lg font-semibold text-[hsl(var(--foreground))]"
            >
              {title}
            </h2>
            
            {/* Close (X) Button */}
            <button
              onClick={onCancel}
              className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body Content - Scrollable if needed */}
          <div className="px-6 py-4 overflow-y-auto flex-1">
            {bodyContent}
          </div>

          {/* Footer - Action Buttons */}
          {actionButtons.length > 0 && (
            <div className="px-6 py-4 border-t border-[hsl(var(--border))] flex justify-end gap-3">
              {actionButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={button.onClick}
                  disabled={button.disabled}
                  className={cn(
                    getButtonStyles(button.variant),
                    button.disabled && "opacity-50 cursor-not-allowed"
                  )}
                >
                  {button.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}