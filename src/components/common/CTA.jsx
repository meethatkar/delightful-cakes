import Button from "../ui/Button"
import Container from "../ui/Container"
import Section from "../ui/Section"

const CTA = () => {
  return (
    <Container>
      <Section className={"relative"}>
        <img src="src/assets/images/cta/bread.webp" alt="" className="w-full md:w-9/12 max-w-5xl mx-auto h-[50vh] object-cover rounded-xl" />
        <div className="text-div absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 items-center justify-center text-center w-full max-w-5xl bg-black/40 h-[50vh] rounded-xl">
          <span className="text-5xl md:text-8xl font-extrabold font-cta tracking-wider text-transparent [-webkit-text-stroke:0.1px_white]">
            Crafted To Perfection
          </span>
          <p className="text-surface/95 text-lg md:text-2xl lg:text-3xl font-semibold [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] [-webkit-text-stroke:0.5px_rgba(0,0,0,0.01)]">
            Freshly baked treats are waiting for you today.
          </p>
          <Button className="font-bold mt-[2%]"> ORDER NOW </Button>
        </div>
      </Section>
    </Container>
  )
}

export default CTA