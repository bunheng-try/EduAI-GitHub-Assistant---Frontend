import { useState } from "react";
import { Users, Link2, Mail, MoreHorizontal, Check } from "lucide-react";
import { ButtonPrimary, ButtonSecondary, ButtonGhost } from "../../../../shared/components/design/button";
import { CLASS_CODE } from "../../Students.data";

interface StudentHeaderProps {
  totalCount: number;
  onInviteClick: () => void;
}

export default function StudentHeader({ totalCount, onInviteClick }: StudentHeaderProps) {
  const [codeCopied, setCodeCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(CLASS_CODE).catch(() => {});
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
      {/* Title */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
          <Users size={20} className="text-violet-600" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 leading-tight">Students</h1>
          <span className="text-xs text-violet-600 font-semibold bg-violet-50 px-2 py-0.5 rounded-full">
            {totalCount} students
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <ButtonSecondary onClick={handleCopyCode} className="flex items-center gap-2">
          {codeCopied ? <Check size={15} className="text-emerald-500" /> : <Link2 size={15} />}
          Copy Class Code
        </ButtonSecondary>

        <ButtonPrimary onClick={onInviteClick} className="flex items-center gap-2">
          <Mail size={15} />
          Invite Students
        </ButtonPrimary>

        <ButtonGhost>
          <MoreHorizontal size={18} />
        </ButtonGhost>
      </div>
    </div>
  );
}
