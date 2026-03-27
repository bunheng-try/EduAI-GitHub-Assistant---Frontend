import React from "react";
import SkeletonBox from "./SkeletonBox";

interface CardListSkeletonProps {
  count?: number;
}

const CardListSkeleton: React.FC<CardListSkeletonProps> = ({ count = 4 }) => (
  <div className="flex flex-col gap-3 p-4">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="flex flex-col gap-2 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg"
      >
        <div className="flex items-center justify-between">
          <SkeletonBox width={180} height={14} borderRadius={4} />
          <SkeletonBox width={60} height={20} borderRadius={10} />
        </div>
        <SkeletonBox width="70%" height={12} borderRadius={4} />
      </div>
    ))}
  </div>
);

export default CardListSkeleton;
