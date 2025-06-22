"use client";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { categories, products } from "@/constants/products";
import ProductsHero from "@/components/products/products-hero";
import Breadcrumb from "@/components/products/breadcrumb";
import ProductSearchBar from "@/components/products/product-search-bar";
import CategorySidebar from "@/components/products/category-sidebar";
import MobileCategoryMenu from "@/components/products/mobile-category-menu";
import ProductGrid from "@/components/products/product-grid";
import NoProductsFound from "@/components/products/no-products-found";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] =
    useState<string[]>(categories);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.shortDescription
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.features.some((feature) =>
            feature.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
    return filtered;
  }, [searchTerm, selectedCategories]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleCategoryFilter = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
  };

  const getProductsByCategory = (category: string) => {
    return products.filter((product) => product.category === category);
  };

  return (
    <div className="min-h-screen bg-white">
      <ProductsHero />
      <Breadcrumb />
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="lg:hidden">
              <Button
                onClick={() => setIsMobileMenuOpen(true)}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Menu className="w-4 h-4" />
                Categories
              </Button>
            </div>
            <ProductSearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>
        </div>
      </div>
      {/* Mobile Filter Menu Overlay */}
      <MobileCategoryMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        categories={categories}
        selectedCategories={selectedCategories}
        expandedCategories={expandedCategories}
        toggleCategory={toggleCategory}
        toggleCategoryFilter={toggleCategoryFilter}
        clearFilters={clearFilters}
        getProductsByCategory={getProductsByCategory}
      />
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-8">
              <CategorySidebar
                categories={categories}
                selectedCategories={selectedCategories}
                expandedCategories={expandedCategories}
                toggleCategory={toggleCategory}
                toggleCategoryFilter={toggleCategoryFilter}
                clearFilters={clearFilters}
                getProductsByCategory={getProductsByCategory}
              />
            </div>
          </div>
          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-8">
              <p className="text-lg text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <NoProductsFound clearFilters={clearFilters} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
