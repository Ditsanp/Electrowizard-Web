"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/cards/product-card";
import SectionHeader from "@/components/reusables/section-header";

const products = [
  {
    title: "EV Charging Cables",
    description:
      "High-quality charging cables with durable build, compatible with various EV standards for efficient and safe energy transfer.",
    imageSrc: "/products/charger.webp", // Update the image path if needed
    imageAlt: "EV Charging Cable",
    bgColor: "bg-cyan-50",
    textColor: "text-black",
  },
  {
    title: "EV Charging Adapter",
    description:
      "CCS1 to GB/T EV adapter with high voltage and current support, designed for seamless cross-standard compatibility.",
    imageSrc: "/products/adapter.webp",
    imageAlt: "EV Charging Adapter",
    bgColor: "bg-yellow-50",
    textColor: "text-black",
  },
  {
    title: "DC Fast Charging Station",
    description:
      "Olink DC fast chargers with up to 180kW power output, enabling ultra-fast EV charging for commercial and fleet operations.",
    imageSrc: "/products/station.png", // Update if necessary
    imageAlt: "DC Fast Charging Station",
    bgColor: "bg-purple-50",
    textColor: "text-black",
  },
  {
    title: "Portable EV Charger",
    description:
      "Lightweight and compact EV charging solution suitable for home use, travel, and emergency backup needs.",

    imageSrc: "/products/portable-charger.webp",
    imageAlt: "Portable EV Charger",
    bgColor: "bg-red-50",
    textColor: "text-black",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-16 bg-green-50 relative overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <SectionHeader
          title="Revolutionary EV Charging Solutions"
          subtitle="Discover our comprehensive range of cutting-edge charging products designed specifically for Nepal's unique requirements and infrastructure."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">
          {products.map((product, index) => (
            <div key={index}>
              <ProductCard
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                bgColor={product.bgColor}
                textColor={product.textColor}
              />
            </div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="rounded-2xl mt-10 px-8 group">
            <Link href="/products" className="flex items-center space-x-2">
              <span>Explore All Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
