/**
 * Container
 * 
 * Centers content and limits its maximum width
 * used inside every major section of the webiste.
 * 
 * Maximum content width
 * Horizontal padding
 * Center alignment
 */

import { forwardRef } from "react"
import { cn } from "@/utils"

const Container = forwardRef(({ children, className, as: Component = "div" }, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Component>
  )
})

Container.displayName = "Container"

export default Container