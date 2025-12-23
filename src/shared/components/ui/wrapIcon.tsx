import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icon as LucideIcon } from "lucide-react";

// Define icon variants
const iconVariants = cva(
  "inline-block shrink-0 transition-colors [&_svg]:block",
  {
    variants: {
      size: {
        default: "w-6 h-6",
        sm: "w-4 h-4",
        lg: "w-8 h-8",
      },
      variantColor: {  // renamed to avoid conflict with SVGProps
        default: "text-gray-600",
        primary: "text-blue-500",
        secondary: "text-green-500",
        destructive: "text-red-500",
      },
    },
    defaultVariants: {
      size: "default",
      variantColor: "default",
    },
  }
);

interface WrapIconProps
  extends VariantProps<typeof iconVariants>,
    React.SVGProps<SVGSVGElement> {
  as?: React.ElementType; // optional custom component
}

// Component
const WrapIcon = ({
  className,
  size,
  variantColor,
  as: Comp = LucideIcon,
  ...props
}: WrapIconProps) => {
  return (
    <Comp
      className={cn(iconVariants({ size, variantColor, className }))}
      {...props}
    />
  );
};

export { WrapIcon, iconVariants };
