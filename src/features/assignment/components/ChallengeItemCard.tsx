import { EllipsisVerticalIcon, StarIcon, UserIcon } from "lucide-react";
import {ClipboardDocumentListIcon} from "@heroicons/react/24/outline";
import type { Challenge } from "@/shared/types/types";
interface Props {
  challenge: Challenge;
}

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const ChallengeCard = ({ challenge }: Props) => {
  return (
    <div className="bg-white rounded-lg px-4 py-3 border shadow-sm flex items-center justify-between cursor-pointer hover:shadow-blue-800">
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center">
          <ClipboardDocumentListIcon className="w-5 h-5 text-white" />
        </div>

        <div>
          <h3 className="font-semibold text-sm">
            {challenge.title}
          </h3>
          <p className="text-xs text-gray-500">
            Shared by {challenge.author} on {formatDate(challenge.date)}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button>
           <UserIcon className="w-4 h-4 text-purple-600 hover:text-yellow-400 cursor-pointer" />
        </button>
        <button>
          <StarIcon className="w-4 h-4 text-gray-400 hover:text-yellow-400 cursor-pointer" />
        </button>
        <button className="p-1">
          <EllipsisVerticalIcon className="w-4 h-4 text-gray-500 hover:text-yellow-400 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};
