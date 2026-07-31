import { useRef } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CategoryCard from "@/components/common/CategoryCard";
import { useFeaturedCategoriesSpread } from "@/animations";
import "./home.css";

const categoriesData = [
  {
    id: 1,
    title: "Birthday Cakes",
    description: "Make birthdays extra sweet with handcrafted custom layers.",
    productCount: "15+ Cakes",
    imageSrc: "/products/big-cakes/birthday-cake.webp",
    cssId: "left-top"
  },
  {
    id: 2,
    title: "Wedding Tiers",
    description: "Elegant multi-tier designs tailored to your special day.",
    productCount: "8+ Styles",
    imageSrc: "/products/big-cakes/wedding-cake-1.webp",
    cssId: "right-top"
  },
  {
    id: 3,
    title: "Cupcakes",
    description: "Bite-sized, cream-topped treats for daily delights.",
    productCount: "24+ Options",
    imageSrc: "/products/bakery-items/cupcake-1.webp",
    cssId: "left-bottom"
  },
  {
    id: 4,
    title: "Artisan Pastries",
    description: "Crispy golden tarts and puff pastry baked fresh hourly.",
    productCount: "12+ Types",
    imageSrc: "/products/bakery-items/strawberry-dessert.webp",
    cssId: "center-center"
  },
  {
    id: 5,
    title: "Cookies",
    description: "Decadent chocolate chip cookies and delicate sweet treats.",
    productCount: "18+ Varieties",
    imageSrc: "/products/bakery-items/cookies.webp",
    cssId: "right-bottom"
  },
];

const FeaturedCategories = () => {
  const sectionRef = useRef(null);

  useFeaturedCategoriesSpread(sectionRef);

  return (
    <Section className="bg-background py-16">
      <Container ref={sectionRef}>
        <SectionHeader
          subtitle="Explore Categories"
          title="Featured Categories"
          description="Delve into our curated selections of handcrafted baked goods, custom designed for every celebration."
        />

        <div className="bento-wrapper">
          {categoriesData.map((category) => (
            <CategoryCard
              id={category.cssId}
              key={category.id}
              title={category.title}
              description={category.description}
              productCount={category.productCount}
              imageSrc={category.imageSrc}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedCategories;
