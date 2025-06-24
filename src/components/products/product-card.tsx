"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye } from "lucide-react";
import Image from "next/image";
import { Product } from "@/constants/products";

export interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden h-full flex flex-col py-0">
        <div className="relative">
          <div className="aspect-square max-h-72 mx-auto bg-white overflow-hidden">
            <Image
              width={300}
              height={300}
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Link href={`/products/${product.id}`}>
              <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                <Eye className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <CardContent className="px-6 pb-6 flex-1 flex flex-col">
          <div className="mb-3">
            <span className="text-sm text-brand-primary font-medium bg-green-50 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors text-left">
            {product.name}
          </h3>
          <p className="text-base text-gray-600 mb-6 line-clamp-3 flex-1 leading-relaxed text-left">
            {product.shortDescription}
          </p>
          <div className="mt-auto">
            <Link href={`/products/${product.id}`}>
              <Button className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white text-base py-3">
                View Details
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
