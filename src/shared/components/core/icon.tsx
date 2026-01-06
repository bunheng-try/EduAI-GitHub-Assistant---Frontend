import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconSizes = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
};

interface IconProps extends React.HTMLAttributes<SVGElement> {
  icon: LucideIcon;
  size?: keyof typeof iconSizes;
}

export const Icon = ({
  icon: IconComponent,
  size = "md",
  className,
  ...props
}: IconProps) => {
  return (
    <IconComponent className={cn(iconSizes[size], className)} {...props} />
  );
};
