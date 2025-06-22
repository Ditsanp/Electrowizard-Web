import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProductContactCTAProps {
  productName: string;
}

export default function ProductContactCTA({
  productName,
}: ProductContactCTAProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in this product?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Contact our team to learn more about pricing, installation, and
            customization options for the {productName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Contact Us
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
            >
              Request Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
