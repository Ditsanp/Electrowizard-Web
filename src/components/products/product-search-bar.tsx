import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ProductSearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function ProductSearchBar({
  searchTerm,
  setSearchTerm,
}: ProductSearchBarProps) {
  return (
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
  );
}
