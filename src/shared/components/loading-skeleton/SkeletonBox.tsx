import React from "react";

export interface SkeletonBoxProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
}

const SkeletonBox: React.FC<SkeletonBoxProps> = ({
  width = "100%",
  height = 12,
  borderRadius = 6,
  className = "",
}) => (
  <div
    className={`animate-pulse bg-gray-200 dark:bg-gray-700 shrink-0 ${className}`}
    style={{ width, height, borderRadius }}
  />
);

export default SkeletonBox;
