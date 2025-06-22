"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getProductById, getRelatedProducts } from "@/constants/products";
import ProductDetailHero from "./product-detail-hero";
import ProductBreadcrumb from "./product-breadcrumb";
import ProductDetailInfo from "./product-detail-info";
import ProductDescription from "./product-description";
import ProductTechnicalSpecs from "./product-technical-specs";
import RelatedProducts from "./related-products";
import ProductContactCTA from "./product-contact-cta";

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
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center justify-center mx-auto">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    );
  }
  const relatedProducts = getRelatedProducts(productId);
  return (
    <div className="min-h-screen bg-white">
      <ProductDetailHero
        productName={product.name}
        shortDescription={product.shortDescription}
      />
      <ProductBreadcrumb productName={product.name} />
      <div className="mx-auto container py-6">
        <Link href="/products">
          <button
            className="text-green-600 !px-0 hover:text-green-700 flex items-center"
            style={{ background: "none", border: "none", padding: 0 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </button>
        </Link>
      </div>
      <div className="container mx-auto pb-12">
        <ProductDetailInfo product={product} />
        {product.longDescription && (
          <ProductDescription longDescription={product.longDescription} />
        )}
        {product.technicalSpecificationsHtml && (
          <ProductTechnicalSpecs
            technicalSpecificationsHtml={product.technicalSpecificationsHtml}
          />
        )}
        <RelatedProducts
          relatedProducts={relatedProducts}
          currentProductName={product.name}
        />
        <ProductContactCTA productName={product.name} />
      </div>
    </div>
  );
}
