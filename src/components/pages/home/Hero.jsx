import { useState, useEffect, useRef } from "react"
import heroBg from "../../../assets/images/hero/hero_bg.webp"
import Button from "@/components/ui/Button"
import Section from "@/components/ui/Section"
import Container from "@/components/ui/Container"
import { heroData } from "@/data/data"
import { gsap, ScrollTrigger, useCarousel, useGSAP, useStagger } from "@/animations"

/**
 * Reusable card component for the Hero section carousel
 */
const HeroCard = ({ item, position, onClick }) => {
  const borderClass = position === "center" ? "border-secondary/30" : "border-white"
  const pointerClass = position !== "center" ? "cursor-pointer" : ""

  return (
    <div
      onClick={position !== "center" ? onClick : undefined}
      data-position={position}
      // GSAP handles x/y transforms, scale, rotation, opacity, and box-shadow
      // CSS only handles border-color transitions now
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] sm:w-[280px] md:w-[360px] lg:w-[420px] aspect-[4/5] rounded-[2rem] overflow-hidden border-[6px] bg-white transition-colors duration-300 ${borderClass} ${pointerClass}`}
    >
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
  const [activeIndex, setActiveIndex] = useState(2);
  const timerTweenRef = useRef(null);
  const carouselRef = useRef(null);
  const staggerRef = useRef(null);

  const leftIndex = (activeIndex - 1 + heroData.length) % heroData.length;
  const rightIndex = (activeIndex + 1) % heroData.length;

  const centerItem = heroData[activeIndex];

  const startAutoplay = () => {
    if (timerTweenRef.current) timerTweenRef.current.kill();
    timerTweenRef.current = gsap.delayedCall(5, () => {
      setActiveIndex((prev) => (prev + 1) % heroData.length);
    });
  };

  useEffect(() => {
    startAutoplay();
    return () => timerTweenRef.current?.kill();
  }, [activeIndex]);


  useStagger(staggerRef, {
    useScrollTrigger: false,
    dependencies: [activeIndex],
    y: 30, // smaller offset for the hero text
    duration: 0.6,
  });

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: carouselRef.current,
      start: "top bottom",
      end: "bottom top",
      onLeave: () => timerTweenRef.current?.pause(),
      onLeaveBack: () => timerTweenRef.current?.pause(),
      onEnter: () => timerTweenRef.current?.resume(),
      onEnterBack: () => timerTweenRef.current?.resume(),
    });
  }, { scope: carouselRef });

  const handleCardClick = (newIndex) => {
    setActiveIndex(newIndex);
  };

  // Wire up GSAP animation hook
  useCarousel(carouselRef, activeIndex);

  return (
    <Section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">
      {/* Background Image Layer at 50% opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1] bg-no-repeat opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="wrapper-gradient bg-linear-to-b from-transparent from-90% to-background absolute inset-0 pointer-events-none z-1"></div>

      <Container className="relative z-20 flex flex-col items-center gap-[1.5rem]">

        {/* Carousel Visuals Wrapper */}
        <div ref={carouselRef} className="relative w-full h-[285px] sm:h-[380px] md:h-[490px] lg:h-[570px] flex items-center justify-center select-none">
          {heroData.map((item, index) => {
            let position = "hidden";
            if (index === leftIndex) position = "left";
            else if (index === activeIndex) position = "center";
            else if (index === rightIndex) position = "right";

            return (
              <HeroCard
                key={item.id}
                item={item}
                position={position}
                onClick={() => handleCardClick(index)}
              />
            )
          })}
        </div>

        {/* Slide Details */}
        <div className="w-full max-w-lg flex flex-col items-center">
          <div className="text-center min-h-[110px] flex flex-col items-center justify-start">
            <div ref={staggerRef}>
              <h3 data-stagger className="text-2xl md:text-5xl whitespace-nowrap font-semibold text-text mb-2 px-4">
                {centerItem.title}
              </h3>
              <p data-stagger className="text-textMuted text-base md:text-base max-w-sm px-6 leading-relaxed mb-6 mx-auto">
                {centerItem.hoveredDesc}
              </p>
            </div>
            <div className="flex items-center justify-center gap-[4rem] w-full">
              <Button variant="primary"> Order now </Button>
              <Button variant="secondary"> View Menu </Button>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  )
}

export default Hero