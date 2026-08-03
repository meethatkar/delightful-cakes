import { lazy, Suspense } from "react";
import Hero from "@/components/pages/home/Hero";

const Bestsellers = lazy(() => import("@/components/pages/home/Bestsellers"));
const Whyus = lazy(() => import("@/components/pages/home/Whyus"));
const FeaturedCategories = lazy(() => import("@/components/pages/home/FeaturedCategories"));
const Reviews = lazy(() => import("@/components/pages/home/Reviews"));
const CTA = lazy(() => import("@/components/common/CTA"));

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Bestsellers />
        <Whyus />
        <FeaturedCategories />
        <Reviews />
        <CTA />
      </Suspense>
    </div>
  );
}