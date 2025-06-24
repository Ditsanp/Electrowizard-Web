import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { Product } from "@/constants/products";

interface ProductDetailInfoProps {
  product: Product;
}

export default function ProductDetailInfo({ product }: ProductDetailInfoProps) {
  return (
    <div className="mb-12">
      {/* Mobile Layout */}
      <div className="flex flex-col h-full lg:hidden">
        {/* Product Image - Top on mobile */}
        <div className="h-[50%] ">
          <div className="h-full flex items-center justify-center">
            <div className="max-w-md w-full">
              <Image
                height={400}
                width={400}
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* Product Info - Bottom on mobile */}
        <div className="h-[50%] bg-white overflow-y-auto">
          <div className="py-6">
            <Badge className="bg-green-100 text-green-700 mb-4">
              {product.category}
            </Badge>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.shortDescription}
            </p>
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Key Features:</h3>
              {product.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-full">
        {/* Product Image - Left Side */}
        <div className="flex-1 border-r border-gray-200">
          <div className="h-full flex items-center justify-center p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl w-full"
            >
              <Image
                height={400}
                width={400}
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </div>
        </div>
        {/* Product Info - Right Side */}
        <div className="w-[600px] lg:w-[750px] xl:w-[900px] bg-white overflow-y-auto">
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="bg-green-100 text-green-700 mb-6">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {product.shortDescription}
              </p>
              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
