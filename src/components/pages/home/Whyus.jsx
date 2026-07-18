import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import SectionHeader from '@/components/ui/SectionHeader'
import { RiCake2Fill, RiHeart2Fill, RiSparkling2Fill, RiTruckFill } from '@remixicon/react'

const features = [
  {
    icon: RiCake2Fill,
    title: "Artisan Craftsmanship",
    description: "Every cake is handcrafted with meticulous detail by our master pastry chefs, combining traditional recipes with modern culinary artistry.",
    color: "primary"
  },
  {
    icon: RiSparkling2Fill,
    title: "Premium Ingredients",
    description: "We source only the finest organic ingredients, fresh local berries, and imported Belgian chocolate to ensure an extraordinary taste in every bite.",
    color: "accent"
  },
  {
    icon: RiTruckFill,
    title: "Fresh Doorstep Delivery",
    description: "Baked fresh to order and hand-delivered in specialized temperature-controlled packaging, guaranteeing perfect presentation and texture.",
    color: "primary"
  },
  {
    icon: RiHeart2Fill,
    title: "Bespoke Celebrations",
    description: "From custom birthday layers to grand wedding tiers, work closely with our designers to customize your flavor profiles and aesthetic themes.",
    color: "accent"
  }
]

const Whyus = () => {
  return (
    <Section className="bg-surfaceAlt/10">
      <Container>
        <SectionHeader
          subtitle="Experience Delight"
          title="Why Choose Delightful Cakes"
          description="We bring your sweet visions to life with passion, premium ingredients, and unmatched attention to detail."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isPrimary = feature.color === "primary"

            return (
              <div
                key={index}
                className="group flex flex-col p-8 rounded-[2.5rem] bg-white border border-border/20 shadow-xs hover:shadow-[0_20px_40px_rgba(183,110,121,0.05)] hover:border-primary/10 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Icon wrapper with soft color backgrounds */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-500 ${isPrimary
                  ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
                  : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white'
                  }`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl text-center font-semibold text-text mb-3 tracking-wide group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-textMuted text-sm leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

export default Whyus