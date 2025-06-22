import { motion } from "framer-motion";
import SectionHeader from "@/components/reusables/section-header";
import ProductCard from "@/components/products/product-card";

interface RelatedProductsProps {
  relatedProducts: any[];
  currentProductName: string;
}

export default function RelatedProducts({
  relatedProducts,
  currentProductName,
}: RelatedProductsProps) {
  if (!relatedProducts.length) return null;
  return (
    <section className="mb-12">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            headerClassName="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900"
            title="Related Products"
            subtitle={
              <span>
                Explore more products that complement the{" "}
                <strong>{currentProductName}</strong>.
              </span>
            }
            className="md:grid-cols-1 gap-2"
            id="related-products"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
