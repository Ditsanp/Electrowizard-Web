import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function SectionHeader({
  title,
  subtitle,
  id,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  id?: string;
}) {
  return (
    <motion.div
      className="text-left grid md:grid-cols-2 justify-center items-center mx-auto mb-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id={id}
      // className="text-center lg:text-left grid lg:grid-cols-2 items-center justify-start mb-16"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-6">{title}</h2>
      <p className="text-xl max-w-4xl text-gray-600 mx-auto leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}
