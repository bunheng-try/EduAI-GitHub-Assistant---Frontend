import React from "react";
import SkeletonBox from "./SkeletonBox";

interface FormSkeletonProps {
  fields?: number;
}

const FormSkeleton: React.FC<FormSkeletonProps> = ({ fields = 4 }) => (
  <div className="flex flex-col gap-5 p-6">
    {Array.from({ length: fields }).map((_, i) => (
      <div key={i} className="flex flex-col gap-2">
        {/* Label */}
        <SkeletonBox width={100} height={12} borderRadius={4} />
        {/* Input */}
        <SkeletonBox width="100%" height={38} borderRadius={6} />
      </div>
    ))}

    {/* Action buttons */}
    <div className="flex gap-2 mt-2">
      <SkeletonBox width={100} height={36} borderRadius={6} />
      <SkeletonBox width={80} height={36} borderRadius={6} />
    </div>
  </div>
);

export default FormSkeleton;
