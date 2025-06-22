import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface NoProductsFoundProps {
  clearFilters: () => void;
}

export default function NoProductsFound({
  clearFilters,
}: NoProductsFoundProps) {
  return (
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
  );
}
