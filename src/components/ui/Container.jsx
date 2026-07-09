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

import { cn } from "@/utils"

export default function  Container({
  children,
  className,
  as: Component = "div",
}){
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8",
        className
      )}
      >
        {children}
      </Component>
  )
}