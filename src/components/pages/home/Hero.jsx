import { heroData } from "./data"
import heroBg from "../../../assets/images/hero/hero_bg.webp"
import Button from "@/components/ui/Button"

/**
 * Reusable card component for the Hero section carousel
 */
const HeroCard = ({ item, position }) => {
  const positionClasses = {
    left: "-translate-x-[115%] shadow-[0_15px_35px_rgba(0,0,0,0.08)] rotate-[-3deg] scale-[0.85] opacity-65 z-10",
    center: "-translate-x-1/2 shadow-[0_25px_60px_rgba(183,110,121,0.22)] scale-[1.05] z-20",
    right: "translate-x-[15%] shadow-[0_15px_35px_rgba(0,0,0,0.08)] rotate-[3deg] scale-[0.85] opacity-65 z-10",
  }

  const borderClass = position === "center" ? "border-secondary/30" : "border-white"

  return (
    <div className={`absolute top-1/2 left-1/2 -translate-y-1/2 w-[210px] sm:w-[300px] md:w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden border-[6px] bg-white transition-all duration-300 ${borderClass} ${positionClasses[position]}`}>
      <img
        src={item.imgSrc}
        alt={item.title}
        className="w-full h-full object-cover select-none pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}

const Hero = () => {
  // Statically rendering index 1 (left), index 2 (center), and index 3 (right)
  const leftItem = heroData[1]
  const centerItem = heroData[2]
  const rightItem = heroData[3]

  return (
    <section className="relative h-screen w-full py-12 md:py-16 overflow-hidden">
      {/* Background Image Layer at 50% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1] bg-no-repeat opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="relative z-20 max-w-[1280px] w-full h-full px-4 mx-auto flex flex-col items-center justify-center gap-[2rem] pt-[2%]">

        {/* Section Header */}
        {/* <div className="text-center mb-8 md:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-2 block">
            Crafted with Love & Quality
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-text tracking-tight">
            Our Sweet Masterpieces
          </h2>
        </div> */}

        {/* Carousel Visuals Wrapper */}
        <div className="relative w-full max-w-4xl h-[285px] sm:h-[415px] md:h-[615px] flex items-center justify-center select-none">
          <HeroCard item={leftItem} position="left" />
          <HeroCard item={centerItem} position="center" />
          <HeroCard item={rightItem} position="right" />
        </div>

        {/* Slide Details */}
        <div className="w-full max-w-lg flex flex-col items-center">
          <div className="text-center min-h-[110px] flex flex-col items-center justify-start">
            <h3 className="text-2xl md:text-5xl whitespace-nowrap font-semibold text-text mb-2 px-4">
              {centerItem.title}
            </h3>
            <p className="text-textMuted text-base md:text-base max-w-sm px-6 leading-relaxed mb-6">
              {centerItem.hoveredDesc}
            </p>
            <div className="flex items-center justify-center gap-[4rem] w-full">
              <Button variant="primary"> Order now </Button>
              <Button variant="secondary"> View Menu </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero