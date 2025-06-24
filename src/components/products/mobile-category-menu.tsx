import { Button } from "@/components/ui/button";
import { Product } from "@/constants/products";
import { ChevronDown, ChevronRight, X } from "lucide-react";

interface MobileCategoryMenuProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  selectedCategories: string[];
  expandedCategories: string[];
  toggleCategory: (category: string) => void;
  toggleCategoryFilter: (category: string) => void;
  clearFilters: () => void;
  getProductsByCategory: (category: string) => Product[];
}

export default function MobileCategoryMenu({
  isOpen,
  onClose,
  categories,
  selectedCategories,
  expandedCategories,
  toggleCategory,
  toggleCategoryFilter,
  clearFilters,
  getProductsByCategory,
}: MobileCategoryMenuProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
          <Button
            onClick={onClose}
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
                onClose();
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
  );
}
