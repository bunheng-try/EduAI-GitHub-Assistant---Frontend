import * as React from "react"
import { Button } from "../../ui/button"

export const ButtonGhost = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(function ButtonGhost(props, ref) {
  return (
    <Button
      ref={ref}
      variant="ghost"
      {...props}
    />
  )
})
