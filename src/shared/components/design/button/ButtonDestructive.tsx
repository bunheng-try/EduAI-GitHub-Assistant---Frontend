import * as React from "react"
import { Button } from "../../ui/button"

export const ButtonDestructive = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(function ButtonDestructive(props, ref) {
  return (
    <Button
      ref={ref}
      variant="destructive"
      {...props}
    />
  )
})
