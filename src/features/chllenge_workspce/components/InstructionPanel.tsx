import type { Challenge } from '@/features/challenge/apis/challenge.api'
import { Panel, PanelContent } from '@/shared/components/design/Panel'
import { PanelHeader } from '@/shared/components/design/PanelHeader'
import { Badge } from '@/shared/components/ui/badge'
import React from 'react'

type InstructionPanelProps = {
  challenge: Challenge
}

const challengeLevelMap: Record<string, "challenge-easy" | "challenge-medium" | "challenge-hard" | "challenge-expert"> = {
  Easy: "challenge-easy",
  Medium: "challenge-medium",
  Hard: "challenge-hard",
  Expert: "challenge-expert",
};

const InstructionPanel: React.FC<InstructionPanelProps> = ({ challenge }) => {
  return (
    <Panel>
      <PanelHeader
        topLeft={
          <>
            <Badge variant={challengeLevelMap[challenge?.difficulty || "Easy"]}>
              {challenge?.difficulty || "Easy"}
            </Badge>
            <h2 className='typo-title'> {challenge?.title || "Undefined"} </h2>
          </>
        }
      />

      <PanelContent>
        <p className='typo-body'>
          {challenge?.description || "Undefined"}
        </p>
      </PanelContent>
    </ Panel>
  )
}

export default InstructionPanel
