import Button from "../ui/Button"
import Container from "../ui/Container"
import Section from "../ui/Section"
import breadImg from "../../assets/images/cta/bread.webp"
import { useRef } from "react"
import { useReveal } from "@/animations"

const CTA = () => {
  const revealRef = useRef(null);
  useReveal(revealRef, { scrollEnd: "bottom 100%" });

  return (
    <Section>
      <Container className="px-4">
        <div ref={revealRef} className="relative w-full md:w-9/12 max-w-5xl mx-auto rounded-xl overflow-hidden">
          <picture className="w-full h-[50vh] block">
            <source srcSet={breadImg} type="image/avif" />
            <img src={breadImg} width="1024" height="500" alt="Crafted To Perfection, CTA IMAGE" className="w-full h-full object-cover" />
          </picture>
          <div className="text-div absolute inset-0 flex flex-col gap-3 items-center justify-center text-center bg-black/40 p-4">
            <span className="text-5xl md:text-8xl font-extrabold font-cta tracking-wider text-transparent [-webkit-text-stroke:0.1px_white]">
              Crafted To Perfection
            </span>
            <p className="text-surface/95 text-lg md:text-2xl lg:text-3xl font-semibold [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] [-webkit-text-stroke:0.5px_rgba(0,0,0,0.01)]">
              Freshly baked treats are waiting for you today.
            </p>
            <Button className="font-bold mt-[2%]"> ORDER NOW </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default CTA