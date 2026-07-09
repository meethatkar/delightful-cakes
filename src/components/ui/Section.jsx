/**
 * Section
 * 
 * Provides consistent vertical spacing
 * and sematic section warpper
 */

import { cn } from "@/utils"


const Section = ({
  children,
  className,
  id,
  as: Component = "section",
}) => {
  return (
    <Component
    id={id}
    className={cn(
      "py-10 md:py-20 lg:py-24",
      className
    )}
    >
      {children}
    </Component>
  )
}

export default Section