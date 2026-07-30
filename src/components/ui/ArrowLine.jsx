import { RiArrowLeftLongLine } from "@remixicon/react"

const ArrowLine = ({
  className,
  count = 21
}) => {
  return (
    <div className={`flex items-center gap-10 bg-transparent w-full ${className}`}>
      {Array.from({ length: count }).map((_, idx) => (
        <RiArrowLeftLongLine className="opacity-15" key={idx} />
      ))}
    </div>
  )
}

export default ArrowLine