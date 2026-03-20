import React from "react";
import SkeletonBox from "./SkeletonBox";

const HeaderSkeleton: React.FC = () => (
  <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 dark:border-gray-700">
    {/* Left: icon + title */}
    <div className="flex items-center gap-3">
      <SkeletonBox width={28} height={28} borderRadius={6} />
      <SkeletonBox width={180} height={18} borderRadius={5} />
    </div>

    {/* Right: action buttons + avatar */}
    <div className="flex items-center gap-2">
      <SkeletonBox width={90} height={32} borderRadius={6} />
      <SkeletonBox width={90} height={32} borderRadius={6} />
      <SkeletonBox width={32} height={32} borderRadius="50%" />
    </div>
  </div>
);

export default HeaderSkeleton;
