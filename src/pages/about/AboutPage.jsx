import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const AboutPage = () => {
  return (
    <Section className="min-h-[70vh] flex items-center justify-center pt-20">
      <Container className="max-w-4xl text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-text mb-6">About Delightful Cakes</h1>
        <p className="text-textMuted text-lg leading-relaxed mb-6">
          We are a premium boutique bakery dedicated to crafting the finest desserts and custom cakes using only natural, high-quality ingredients.
        </p>
        <p className="text-textMuted text-base leading-relaxed mb-10">
          From weddings to simple weekend treats, our pastry chefs pour love and precision into every single batch.
        </p>
        <img src="/gifs/coming_soon.gif" alt="Coming Soon" className="w-[60%] md:w-full max-w-lg mx-auto mb-4 drop-shadow-sm" />
        <h2 className="text-2xl font-bold text-text mt-4">Full story coming soon!</h2>
      </Container>
    </Section>
  )
}

export default AboutPage