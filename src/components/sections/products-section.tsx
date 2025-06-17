"use client";
import { motion } from "framer-motion";
import { Cable, Plug, Zap, Car, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/cards/product-card";

export default function ProductsSection() {
  return (
    <section id="products" className="py-32 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Zap className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Our Products</span>
          </motion.div>
          <h2 className="text-4xl mt-6 md:text-6xl font-bold mb-8">
            Revolutionary EV
            <span className="block text-green-600">Charging Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our comprehensive range of cutting-edge charging products
            designed specifically for Nepal&apos;s unique requirements and
            infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          <ProductCard
            icon={Cable}
            title="Charging Cables"
            description="Premium quality cables with advanced safety features and universal compatibility."
            features={[
              "Universal compatibility",
              "Weather-resistant design",
              "Smart chip technology",
            ]}
            link="/products/cables"
            delayIndex={0}
            gradient="from-blue-500 to-cyan-500"
          />
          <ProductCard
            icon={Plug}
            title="Universal Adaptors"
            description="Seamlessly connect different charging standards with our intelligent adaptor solutions."
            features={[
              "Multi-standard support",
              "Auto-detection",
              "Safety certified",
            ]}
            link="/products/adaptors"
            delayIndex={1}
            gradient="from-purple-500 to-pink-500"
          />
          <ProductCard
            icon={Zap}
            title="DC Fast Chargers"
            description="High-power charging stations for commercial use with advanced monitoring and control systems."
            features={[
              "Up to 350kW power",
              "Remote monitoring",
              "Billing integration",
            ]}
            link="/products/stations"
            delayIndex={2}
            gradient="from-green-500 to-emerald-500"
          />
          <ProductCard
            icon={Car}
            title="Portable Chargers"
            description="Compact and lightweight charging solutions perfect for travel and emergency situations."
            features={[
              "Lightweight design",
              "Multiple outlets",
              "Emergency backup",
            ]}
            link="/products/portable"
            delayIndex={3}
            gradient="from-orange-500 to-red-500"
          />
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" className="rounded-2xl px-8 group">
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
