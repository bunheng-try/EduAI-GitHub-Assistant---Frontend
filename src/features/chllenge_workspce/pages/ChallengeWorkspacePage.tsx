import TopBar from "../components/TopBar";
import {
  ResizablePanel,
  ResizablePanelContainer,
  ResizablePanelDivider,
} from "@/shared/components/layout/ResizablePanel";
import { useParams } from "react-router-dom";
import ChallengeSidebar from "../components/ChallengeSidebar";
import InstructionPanel from "../components/InstructionPanel";
import IDEPanel from "../components/IDEPanel";
import ResultPanel from "../components/ResultPanel";
import { useAssignment } from "@/features/assignment/hooks/useAssignmentQuery";

function ChallengeWorkspace() {
  const { classroomId, assignmentId, challengeId } = useParams();

  const assignmentQuery = useAssignment(
    Number(classroomId),
    Number(assignmentId)
  );

  const assignment = assignmentQuery.data;
  const challenges = assignment?.codingChallenges ?? [];

  const currentChallenge = challenges.find(
    (c) => c.id === Number(challengeId)
  );

  // if (assignmentQuery.isLoading) return <div>Loading assignment...</div>;
  // if (!currentChallenge) return <div>Challenge not found</div>;
  
  return (
    <div className="flex-col h-screen w-screen overflow-hidden">
      <TopBar title={assignment?.title}/>
      <div className="flex">
        <ChallengeSidebar />
        <ResizablePanelContainer direction="horizontal" className="flex-1">
          <ResizablePanel>
            <InstructionPanel/>
          </ResizablePanel>

          <ResizablePanelDivider />

          <ResizablePanel>
            <IDEPanel />
          </ResizablePanel>

          <ResizablePanelDivider />

          <ResizablePanel>
            <ResultPanel />
          </ResizablePanel>
        </ResizablePanelContainer>
      </div>
    </div>
  );
}

export default ChallengeWorkspace;