import AboutUsSection from "@/components/sections/about-us-section";
import Contact from "@/components/sections/contact-section";
import { Hero } from "@/components/sections/hero-section";
import LocationsSection from "@/components/sections/locations-section";
import ProductsSection from "@/components/sections/products-section";
import Testimonials from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <ProductsSection />
      <LocationsSection />
      <Testimonials />
      <Contact />
    </main>
  );
}
