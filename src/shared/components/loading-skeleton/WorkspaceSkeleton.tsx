import React from "react";
import SkeletonBox from "./SkeletonBox";
import SidebarSkeleton from "./SidebarSkeleton";

const WorkspaceSkeleton: React.FC = () => (
  <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <div className="border-r border-gray-200 dark:border-gray-700 shrink-0">
      <SidebarSkeleton />
    </div>

    {/* Instruction Panel */}
    <div className="flex flex-col gap-4 p-4 w-[300px] border-r border-gray-200 dark:border-gray-700 shrink-0">
      <SkeletonBox width={160} height={20} borderRadius={5} />
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex flex-col gap-2">
          <SkeletonBox width="100%" height={12} borderRadius={4} />
          <SkeletonBox width="90%" height={12} borderRadius={4} />
          <SkeletonBox width="70%" height={12} borderRadius={4} />
        </div>
      ))}
    </div>

    {/* Editor */}
    <div className="flex flex-col flex-1 border-r border-gray-200 dark:border-gray-700 min-w-0">
      {/* Tab bar */}
      <div className="flex gap-2 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <SkeletonBox width={80} height={26} borderRadius={5} />
        <SkeletonBox width={80} height={26} borderRadius={5} />
      </div>
      {/* Code lines */}
      <div className="flex flex-col gap-3 p-4">
        {[90, 70, 55, 80, 40, 65, 75, 50, 85, 60].map((w, i) => (
          <SkeletonBox key={i} width={`${w}%`} height={12} borderRadius={4} />
        ))}
      </div>
    </div>

    {/* Result Panel */}
    <div className="flex flex-col gap-3 p-4 w-[280px] shrink-0">
      <SkeletonBox width={120} height={18} borderRadius={5} />
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex flex-col gap-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <SkeletonBox width={80} height={12} borderRadius={4} />
          <SkeletonBox width="100%" height={10} borderRadius={4} />
          <SkeletonBox width="60%" height={10} borderRadius={4} />
        </div>
      ))}
    </div>
  </div>
);

export default WorkspaceSkeleton;
