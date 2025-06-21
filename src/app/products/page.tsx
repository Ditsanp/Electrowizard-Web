"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  Eye,
  ChevronDown,
  ChevronRight,
  Filter,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  features: string[];
}

const products: Product[] = [
  // Charging Stations (2 products)
  {
    id: 1,
    name: "Dual-Gun Wall-Mounted Charging Station",
    category: "Charging Stations",
    image: "/placeholder.svg?height=300&width=300",
    shortDescription:
      "High-performance dual-gun wall-mounted charging station with smart connectivity features.",
    features: [
      "22kW Power Output",
      "Dual Charging Ports",
      "Smart App Control",
      "Weather Resistant",
    ],
  },
  {
    id: 2,
    name: "21-Inch Advertising Screen DC EV Charging Pile",
    category: "Charging Stations",
    image: "/placeholder.svg?height=300&width=300",
    shortDescription:
      "Advanced DC charging pile with integrated 21-inch advertising display for commercial use.",
    features: [
      "120kW Fast Charging",
      "21-inch Touch Screen",
      "Advertisement Display",
      "Payment Integration",
    ],
  },
  // Charging Cables (1 product)
  {
    id: 3,
    name: "Type 2 to Type 2 Charging Cable",
    category: "Charging Cables",
    image: "/placeholder.svg?height=300&width=300",
    shortDescription:
      "High-quality Type 2 to Type 2 charging cable for AC charging with excellent durability.",
    features: [
      "32A Current Rating",
      "5 Meter Length",
      "IP55 Protection",
      "Temperature Resistant",
    ],
  },
  // Adapters (multiple products)
  {
    id: 4,
    name: "CCS to CHAdeMO Adapter",
    category: "Adapters",
    image: "/placeholder.svg?height=300&width=300",
    shortDescription:
      "Universal adapter for connecting CCS vehicles to CHAdeMO charging stations.",
    features: [
      "High Current Capacity",
      "Safety Certified",
      "Compact Design",
      "Universal Compatibility",
    ],
  },
  {
    id: 5,
    name: "Type 1 to Type 2 Adapter",
    category: "Adapters",
    image: "/placeholder.svg?height=300&width=300",
    shortDescription:
      "Adapter for connecting Type 1 vehicles to Type 2 charging infrastructure.",
    features: ["32A Rating", "Weatherproof", "Easy Connection", "Safety Lock"],
  },
  {
    id: 6,
    name: "Tesla to CCS Adapter",
    category: "Adapters",
    image: "/placeholder.svg?height=300&width=300",
    shortDescription:
      "Enables Tesla vehicles to charge at CCS charging stations worldwide.",
    features: [
      "Fast Charging Support",
      "Tesla Compatible",
      "Robust Construction",
      "Portable Design",
    ],
  },
];

const categories = ["Charging Stations", "Charging Cables", "Adapters"];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] =
    useState<string[]>(categories);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search term
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

    // Filter by categories
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-green-600">Products</span>
            </h1>
            <p className="text-xl text-white mx-auto leading-relaxed">
              ElectroWizard is a manufacturer of EV charging stations and offers
              numerous advantages for electric vehicle owners. We provide fast
              and efficient charging experiences, advanced safety features, and
              compatibility with all types of electric vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span>ElectroWizard</span>
            <span>›</span>
            <span className="text-gray-900 font-medium">Products</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          {/* Mobile Filter Button and Search */}
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

            <div className="relative max-w-3xl w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300 focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                Categories
              </h3>
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                variant="ghost"
                size="sm"
                className="w-8 h-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-4">
              {selectedCategories.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    clearFilters();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-green-600 mb-4"
                >
                  Clear All
                </Button>
              )}

              <div className="space-y-4">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="border-b border-gray-100 pb-4 last:border-b-0"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategoryFilter(category)}
                          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        />
                        <span className="font-medium text-gray-900">
                          {category}
                        </span>
                      </label>
                      <button
                        onClick={() => toggleCategory(category)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        {expandedCategories.includes(category) ? (
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-500" />
                        )}
                      </button>
                    </div>

                    {expandedCategories.includes(category) && (
                      <div className="ml-7 space-y-2">
                        {getProductsByCategory(category).map((product) => (
                          <div
                            key={product.id}
                            className="text-sm text-gray-700 py-1"
                          >
                            {product.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-8">
              <Card className="border border-gray-200">
                <CardContent className="px-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Filter className="w-5 h-5" />
                      Categories
                    </h3>
                    {selectedCategories.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="text-green-600"
                      >
                        Clear All
                      </Button>
                    )}
                  </div>

                  <div className="space-y-4">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="border-b border-gray-100 pb-4 last:border-b-0"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category)}
                              onChange={() => toggleCategoryFilter(category)}
                              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                            />
                            <span className="font-medium text-gray-900">
                              {category}
                            </span>
                          </label>
                          <button
                            onClick={() => toggleCategory(category)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            {expandedCategories.includes(category) ? (
                              <ChevronDown className="w-4 h-4 text-gray-500" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-gray-500" />
                            )}
                          </button>
                        </div>

                        {expandedCategories.includes(category) && (
                          <div className="ml-7 space-y-2">
                            {getProductsByCategory(category).map((product) => (
                              <div
                                key={product.id}
                                className="text-sm text-gray-700 py-1"
                              >
                                {product.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-8">
              <p className="text-lg text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden h-full flex flex-col py-0">
                    <div className="relative">
                      <div className="aspect-square bg-gray-100 overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link href={`/products/${product.id}`}>
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

                    <CardContent className="px-6 pb-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
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
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-base py-3">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={clearFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
