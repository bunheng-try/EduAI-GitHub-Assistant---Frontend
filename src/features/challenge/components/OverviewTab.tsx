import type { ChallengeDto } from "../apis/challenge.api";
import { SectionContainer } from "@/shared/components/design/SectionContainer";
import { LabeledSection } from "@/shared/components/design/LabeledSection";
import { EditableField } from "@/shared/components/design/EditableField";

interface Props {
    draft: ChallengeDto;
    updateField: <K extends keyof ChallengeDto>(key: K, value: ChallengeDto[K]) => void;
}

export default function OverviewTab({ draft, updateField }: Props) {
    return (
        <div className="max-w-4xl space-y-8">

            {/* ---------- BASIC INFO SECTION ---------- */}
            <SectionContainer title="Basic Information">
                <LabeledSection label="Challenge Title">
                    <EditableField
                        value={draft.title}
                        onChange={(val) => updateField("title", val)}
                        placeholder="e.g. Two Sum Problem"
                    />
                </LabeledSection>

                <LabeledSection label="Programming Language" className="mt-4">
                    <select
                        value={draft.language}
                        onChange={(e) => updateField("language", e.target.value)}
                        className="
                            w-full
                            rounded-md
                            border
                            border-[hsl(var(--border))]
                            bg-[hsl(var(--background))]
                            px-3 py-2
                            text-sm
                            focus:outline-none
                            focus:ring-2
                            focus:ring-[hsl(var(--primary))]
                        "
                    >
                        <option value="">Select language</option>
                        <option value="javascript">JavaScript</option>
                        <option value="typescript">TypeScript</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="cpp">C++</option>
                    </select>
                </LabeledSection>
            </SectionContainer>

            {/* ---------- DESCRIPTION SECTION ---------- */}
            <SectionContainer title="Problem Description">
                <LabeledSection>
                    <EditableField
                        value={draft.description}
                        onChange={(val) => updateField("description", val)}
                        placeholder="Write the full problem statement..."
                        multiline
                        className="h-40" // sets a fixed height like rows=10
                    />
                </LabeledSection>
            </SectionContainer>

        </div>
    );
}