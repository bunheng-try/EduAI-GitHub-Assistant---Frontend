import React from "react";
import { cn } from "@/lib/utils";
import { Loader2, type LucideIcon } from "lucide-react";
// Ensure this path matches your file structure (lowercase 'icon' vs uppercase 'Icon')
import { Icon } from "@/shared/components/core/icon"; 
// 👇 IMPORT ButtonProps HERE
import { Button, type ButtonProps } from "@/shared/components/ui/button";

// 👇 CHANGE THIS: Extend ButtonProps, not just HTML attributes
interface IconButtonProps extends ButtonProps {
  icon: LucideIcon;
  isLoading?: boolean;
  tooltip?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, isLoading, className, variant = "ghost", size = "icon", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn("rounded-full", className)}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Icon icon={icon} size="md" /> // Helper icon component
        )}
      </Button>
    );
  }
);
IconButton.displayName = "IconButton";