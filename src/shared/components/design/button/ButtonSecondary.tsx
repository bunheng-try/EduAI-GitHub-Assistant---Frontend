import * as React from "react"
import { Button } from "../../ui/button"

export const ButtonSecondary = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(function ButtonSecondary(props, ref) {
  return (
    <Button
      ref={ref}
      variant="secondary"
      {...props}
    />
  )
})
