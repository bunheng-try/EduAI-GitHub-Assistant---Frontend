// features/classes/components/NoClassSelected.tsx

import { FolderOpen } from "lucide-react"

export function NoClassSelected() {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-center">
                <div className="p-4 rounded-full bg-[hsl(var(--accent))]">
                    <FolderOpen className="h-6 w-6 text-[hsl(var(--muted-foreground))]" />
                </div>

                <div>
                    <h2 className="text-lg font-semibold">
                        No class selected
                    </h2>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">
                        Select a class from the sidebar to get started.
                    </p>
                </div>
            </div>
        </div>
    )
}
