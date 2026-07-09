
// const HomePage = () => {
//   return (
//     <div>
//       HOMEPage
//     </div>
//   )
// }

// export default HomePage
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function HomePage() {
  return (
    <Section className="bg-orange-100">
      <Container>
        <h1 className="text-5xl font-bold bg-green-100">
          Premium Cakes
        </h1>
      </Container>
    </Section>
  );
}