import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const ProductDetailPage = () => {
  return (
    <Section className="min-h-[70vh] flex items-center justify-center pt-20">
      <Container className="flex flex-col items-center justify-center text-center">
        <img src="/gifs/coming_soon.gif" alt="Coming Soon" className="w-[60%] md:w-full max-w-lg mx-auto mb-8 drop-shadow-sm" />
        <h1 className="text-3xl md:text-5xl font-bold text-text mb-4">Product Details are Coming Soon</h1>
        <p className="text-textMuted text-lg max-w-2xl mx-auto">We are working on bringing you full product details.</p>
      </Container>
    </Section>
  )
}

export default ProductDetailPage
