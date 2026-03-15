import TopBar from "../components/TopBar";
import {
  ResizablePanel,
  ResizablePanelContainer,
  ResizablePanelDivider,
} from "@/shared/components/layout/ResizablePanel";
import ChallengeSidebar from "../components/ChallengeSidebar";
import InstructionPanel from "../components/InstructionPanel";
import IDEPanel from "../components/IDEPanel";
import ResultPanel from "../components/ResultPanel";
import { useAssignment } from "@/features/assignment/hooks/useAssignmentQuery";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWorkspaceStore } from "../stores/useWorkspaceStore";

function ChallengeWorkspace() {
  const { classroomId, assignmentId } = useParams();
  const assignmentQuery = useAssignment(Number(classroomId), Number(assignmentId));
  const assignment = assignmentQuery.data;
  const challenges = assignment?.codingChallenges ?? [];

  const { currentChallengeId, setCurrentChallenge } = useWorkspaceStore();

  useEffect(() => {
    if (challenges.length && currentChallengeId === null) {
      setCurrentChallenge(challenges[0].id);
    }
  }, [challenges, currentChallengeId, setCurrentChallenge]);

  const currentChallenge = challenges.find((c) => c.id === currentChallengeId);

  if (assignmentQuery.isLoading) return <div>Loading assignment...</div>;
  if (!currentChallenge) return <div>No challenge selected</div>;

  return (
    <div className="flex-col h-screen w-screen overflow-hidden">
      <TopBar title={assignment?.title} />
      <div className="flex h-full">
        <ChallengeSidebar challenges={challenges} />
        <ResizablePanelContainer direction="horizontal" className="flex-1">
          <ResizablePanel>
            <InstructionPanel challenge={currentChallenge} />
          </ResizablePanel>

          <ResizablePanelDivider />

          <ResizablePanel>
            <IDEPanel challengeId={currentChallengeId!} />
          </ResizablePanel>

          <ResizablePanelDivider />

          <ResizablePanel>
            <ResultPanel challengeId={currentChallengeId!} />
          </ResizablePanel>
        </ResizablePanelContainer>
      </div>
    </div>
  );
}

export default ChallengeWorkspace;