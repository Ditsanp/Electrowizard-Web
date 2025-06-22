import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeader({
  title,
  subtitle,
  id,
  className = "",
  headerClassName = "",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  headerClassName?: string;
  id?: string;
}) {
  return (
    <motion.div
      className={cn(
        "text-left grid md:grid-cols-2 justify-center items-center mx-auto mb-10",
        className
      )}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id={id}
    >
      <h2
        className={cn(
          "text-3xl lg:text-5xl font-bold text-gray-900 ",
          headerClassName
        )}
      >
        {title}
      </h2>
      <p className="lg:text-xl max-w-4xl text-gray-600 leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}
