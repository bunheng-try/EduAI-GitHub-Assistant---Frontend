import React from "react";
import SkeletonBox from "./SkeletonBox";

const SidebarSkeleton: React.FC = () => (
  <div className="flex flex-col items-center gap-4 py-4 w-14">
    {/* Avatar */}
    <SkeletonBox width={32} height={32} borderRadius="50%" />

    {/* Divider */}
    <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />

    {/* Nav icons */}
    {Array.from({ length: 6 }).map((_, i) => (
      <SkeletonBox key={i} width={32} height={32} borderRadius={8} />
    ))}
  </div>
);

export default SidebarSkeleton;
