import { useState } from "react";
import { ChallengeCard } from "../components/ChallengeItemCard";
import { EllipsisVerticalIcon, PlusIcon } from "lucide-react";
import type { Challenge } from "../types/assignment";

const ChallengeTab = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: "1",
      title: "To-do list",
      author: "ronan.ogor",
      date: new Date("2025-12-03"),
    },
    {
      id: "2",
      title: "To-do list",
      author: "ronan.ogor",
      date: new Date("2025-12-03"),
    },
  ]);

  const handleAdd = () => {
    const newChallenge: Challenge = {
      id: crypto.randomUUID(),
      title: "New Challenge",
      author: "you",
      date: new Date(),
    };

    setChallenges((prev) => [newChallenge, ...prev]);
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-end mb-2 space-x-2">
        <button
          onClick={handleAdd}
          className="w-8 h-8 rounded-md bg-green-600 hover:bg-green-700 
          flex items-center justify-center text-white hover:text-yellow-400 cursor-pointer"
          aria-label="Add challenge"
        >
          <PlusIcon />
        </button>
        <button 
          onClick={handleAdd}
          className="w-8 h-8 rounded-md border border-gray-200 
               hover:bg-gray-100 flex items-center justify-center hover:text-yellow-400 cursor-pointer"
          aria-label="More options"
        >
          <EllipsisVerticalIcon className="h-4 w-4  " />
        </button>
      </div>

      {challenges.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          challenge={challenge}
        />
      ))}
    </div>
  );
};

export default ChallengeTab;
