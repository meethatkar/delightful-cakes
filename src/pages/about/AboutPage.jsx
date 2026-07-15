import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const AboutPage = () => {
  return (
    <Section className="min-h-[60vh] flex items-center">
      <Container className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-text mb-6">About Delightful Cakes</h1>
        <p className="text-textMuted text-lg leading-relaxed mb-6">
          We are a premium boutique bakery dedicated to crafting the finest desserts and custom cakes using only natural, high-quality ingredients.
        </p>
        <p className="text-textMuted text-base leading-relaxed">
          From weddings to simple weekend treats, our pastry chefs pour love and precision into every single batch.
        </p>
      </Container>
    </Section>
  )
}

export default AboutPage