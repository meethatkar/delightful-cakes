import Button from "../ui/Button"
import Container from "../ui/Container"
import Section from "../ui/Section"

const CTA = () => {
  return (
    <Container>
      <Section className={"relative"}>
        <img src="src/assets/images/background/CTA.png" alt="" className="w-full h-[80vh] object-cover rounded-xl" />
        <div className="text-div absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 md:gap-8 items-center text-center w-full px-4 max-w-5xl">
          <h2 className="text-5xl md:text-7xl font-extrabold text-text leading-tight">
            Satisfy Your Sweet Tooth
          </h2>
          <p className="text-surface/95 text-lg md:text-2xl lg:text-3xl font-semibold [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] [-webkit-text-stroke:0.5px_rgba(0,0,0,0.01)]">
            Freshly baked treats are waiting for you today.
          </p>
          <Button className="font-bold"> ORDER NOW</Button>
        </div>
      </Section>
    </Container>
  )
}

export default CTA