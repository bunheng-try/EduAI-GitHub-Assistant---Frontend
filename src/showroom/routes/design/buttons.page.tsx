import { ButtonDestructive, ButtonGhost, ButtonPrimary, ButtonSecondary } from "@/shared/components/design/button";

export function ButtonsShowroom() {
  return (
    <div className="space-y-6">
      <h1>Buttons</h1>

      <div className="flex gap-4">
        <ButtonPrimary>Primary</ButtonPrimary>
        <ButtonSecondary>Secondary</ButtonSecondary>
        <ButtonGhost>Ghost</ButtonGhost>
        <ButtonDestructive>Destructive</ButtonDestructive>
      </div>

      <div className="flex gap-4">
        <ButtonPrimary disabled>Disabled</ButtonPrimary>
      </div>
    </div>
  )
}