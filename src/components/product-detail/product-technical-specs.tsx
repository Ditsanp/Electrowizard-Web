import { motion } from "framer-motion";
import SectionHeader from "@/components/reusables/section-header";

interface ProductTechnicalSpecsProps {
  technicalSpecificationsHtml: string;
}

export default function ProductTechnicalSpecs({
  technicalSpecificationsHtml,
}: ProductTechnicalSpecsProps) {
  if (!technicalSpecificationsHtml) return null;
  return (
    <section className="mb-12 py-16">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            headerClassName="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900"
            className="md:grid-cols-1 gap-2"
            title="Technical Specifications"
            subtitle="Detailed specifications and features of the product."
            id="technical-specifications"
          />
          <div
            dangerouslySetInnerHTML={{ __html: technicalSpecificationsHtml }}
            className="prose prose-gray max-w-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
