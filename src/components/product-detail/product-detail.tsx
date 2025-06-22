"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Eye } from "lucide-react";
import Link from "next/link";
import { getProductById, getRelatedProducts } from "@/constants/products";
import SectionHeader from "@/components/reusables/section-header";
import Image from "next/image";

interface ProductDetailPageProps {
  productId: string;
}

export default function ProductDetailPage({
  productId,
}: ProductDetailPageProps) {
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link href="/products">
            <Button className="bg-green-600 hover:bg-green-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = getRelatedProducts(productId);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-42">
        <Image
          src="/pagehero.webp"
          alt="Products Hero"
          className="absolute inset-0 object-cover w-full h-full object-top"
          fill
          quality={100}
        />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {product.name}
            </h1>
            <p className="lg:text-xl text-white text-left leading-relaxed">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </section>
      {/* Breadcrumb */}
      <div>
        <div className="container mx-auto py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span>ElectroWizard</span>
            <span>›</span>
            <Link href="/products" className="hover:text-green-600">
              Products
            </Link>
            <span>›</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Back Button */}
      <div className="mx-auto container py-6">
        <Link href="/products">
          <Button
            variant="link"
            className="text-green-600 !px-0 hover:text-green-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto pb-12">
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
                  {product.features.map((feature, index) => (
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
                      {product.features.map((feature, index) => (
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

        {/* Long Description */}
        {product.longDescription && (
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Product Description
            </h3>
            <div className="prose prose-gray max-w-none">
              {product.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Technical Specifications Section */}
        {product.technicalSpecificationsHtml && (
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
                  dangerouslySetInnerHTML={{
                    __html: product.technicalSpecificationsHtml,
                  }}
                  className="prose prose-gray max-w-none"
                />
              </motion.div>
            </div>
          </section>
        )}

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="mb-12">
            <div className=" mx-auto">
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
                      <strong>{product.name}</strong>.
                    </span>
                  }
                  className="md:grid-cols-1 gap-2"
                  id="related-products"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                  {relatedProducts.map((relatedProduct, index) => (
                    <motion.div
                      key={relatedProduct.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 pb-6 pt-0 overflow-hidden h-full">
                        <div className="relative">
                          <div className="aspect-square max-h-72 mx-auto bg-gray-100 overflow-hidden">
                            <img
                              src={relatedProduct.image || "/placeholder.svg"}
                              alt={relatedProduct.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Link href={`/products/${relatedProduct.id}`}>
                              <Button
                                size="sm"
                                variant="secondary"
                                className="w-8 h-8 p-0"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>

                        <CardContent>
                          <div className="mb-2">
                            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                              {relatedProduct.category}
                            </span>
                          </div>

                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                            {relatedProduct.name}
                          </h3>

                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {relatedProduct.shortDescription}
                          </p>

                          <Link href={`/products/${relatedProduct.id}`}>
                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                              View Details
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Contact CTA Section */}
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
                customization options for the {product.name}.
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
      </div>
    </div>
  );
}
