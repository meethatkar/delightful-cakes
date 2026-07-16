import Hero from "@/components/pages/home/Hero";
import Whyus from "@/components/pages/home/Whyus";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function HomePage() {
  return (
    <div>
      <Hero />

      <Section className="bg-stone-50/40">
        <Container className="max-w-md">
          <SectionHeader
            subtitle="Featured Cake"
            title="Strawberry Red Velvet Dream"
          />

          <ProductCard
            image="https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?q=80&w=933&auto=format&fit=crop"
            title="Strawberry Red Velvet Dream"
            // price="$55.00"
            alt="Strawberry Red Velvet Dream"
          />
        </Container>
      </Section>

      <Whyus />
    </div>
  );
}