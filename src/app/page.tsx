import { Hero } from "@/components/sections/hero-section";
import ProductsSection from "@/components/sections/products-section";
import Testimonials from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductsSection />
      <Testimonials />
    </main>
  );
}
