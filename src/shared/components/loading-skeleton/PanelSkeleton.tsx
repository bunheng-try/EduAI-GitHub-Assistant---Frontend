import React from "react";
import SkeletonBox from "./SkeletonBox";

const PanelSkeleton: React.FC = () => (
  <div className="flex flex-col gap-5 p-6">
    {/* Header */}
    <div className="flex items-center justify-between">
      <SkeletonBox width={220} height={24} borderRadius={6} />
      <div className="flex gap-2">
        <SkeletonBox width={80} height={32} borderRadius={6} />
        <SkeletonBox width={80} height={32} borderRadius={6} />
      </div>
    </div>

    {/* Section blocks */}
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex flex-col gap-2">
        <SkeletonBox width={140} height={14} borderRadius={4} />
        <SkeletonBox width="100%" height={12} borderRadius={4} />
        <SkeletonBox width="88%" height={12} borderRadius={4} />
        <SkeletonBox width="75%" height={12} borderRadius={4} />
      </div>
    ))}
  </div>
);

export default PanelSkeleton;
