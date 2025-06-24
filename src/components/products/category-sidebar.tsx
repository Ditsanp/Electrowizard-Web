import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown, ChevronRight } from "lucide-react";
import { Product } from "@/constants/products";

interface CategorySidebarProps {
  categories: string[];
  selectedCategories: string[];
  expandedCategories: string[];
  toggleCategory: (category: string) => void;
  toggleCategoryFilter: (category: string) => void;
  clearFilters: () => void;
  getProductsByCategory: (category: string) => Product[];
}

export default function CategorySidebar({
  categories,
  selectedCategories,
  expandedCategories,
  toggleCategory,
  toggleCategoryFilter,
  clearFilters,
  getProductsByCategory,
}: CategorySidebarProps) {
  return (
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
                  <span className="font-medium text-gray-900">{category}</span>
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
  );
}
