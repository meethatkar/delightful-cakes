import Hero from "@/components/pages/home/Hero";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Section from "@/components/ui/Section";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Section>
        <Container>
          <Input label={"Enter test"} required helperText="We'll use this to personalize your order." />
        </Container>
      </Section>
    </div>
  );
}