import Bestsellers from "@/components/pages/home/Bestsellers";
import Hero from "@/components/pages/home/Hero";
import Whyus from "@/components/pages/home/Whyus";
import FeaturedCategories from "@/components/pages/home/FeaturedCategories";
import Reviews from "@/components/pages/home/Reviews";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Bestsellers />
      <Whyus />
      <FeaturedCategories />
      <Reviews />
    </div>
  );
}