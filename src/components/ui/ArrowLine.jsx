import { RiArrowLeftLongLine } from "@remixicon/react"

const ArrowLine = ({
  className,
  count = 21,
  direction = -1
}) => {
  return (
    <div className={`flex items-center gap-10 bg-transparent w-full overflow-hidden ${className}`}>
      {Array.from({ length: count }).map((_, idx) => (
        <RiArrowLeftLongLine 
          key={idx} 
          className={`opacity-15 shrink-0 transition-transform duration-500 ease-out ${
            direction === 1 ? 'rotate-180' : ''
          }`} 
        />
      ))}
    </div>
  )
}

export default ArrowLine