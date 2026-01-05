import * as React from "react"
import { Button } from "../../ui/button"

export const ButtonPrimary = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(function ButtonPrimary(props, ref) {
  return (
    <Button
      ref={ref}
      variant="default"
      {...props}
    />
  )
})
