import { useState } from "react";
import { Input } from "@/shared/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/shared/components/ui/dropdown-menu";
import { Button } from "@/shared/components/ui/button";
import { FilterIcon } from "lucide-react";
import type { Submission } from "@/shared/types/types";
import { SubmissionCard } from "./SubmissionCard";

interface SubmissionsTabProps {
  submissions: Submission[];
}

export const SubmissionsTab = ({ submissions }: SubmissionsTabProps) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"name" | "date">("name");

  const filteredSubmissions = submissions
    .filter((sub) => sub.studentName.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (filter === "date") {
        return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
      }
      return a.studentName.localeCompare(b.studentName);
    });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Input
            placeholder="Search student"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <FilterIcon className="w-4 h-4" />
              Filtering: {filter === "name" ? "By Name" : "By Date"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setFilter("name")}>
              By Name
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFilter("date")}>
              By Submission Date
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-4">
        {filteredSubmissions.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No submissions found</p>
        ) : (
          filteredSubmissions.map((sub) => (
            <SubmissionCard key={sub.id} submission={sub} />
          ))
        )}
      </div>
    </div>
  );
};