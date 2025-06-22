import Link from "next/link";

interface ProductBreadcrumbProps {
  productName: string;
}

export default function ProductBreadcrumb({
  productName,
}: ProductBreadcrumbProps) {
  return (
    <div>
      <div className="container mx-auto py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <span>ElectroWizard</span>
          <span>›</span>
          <Link href="/products" className="hover:text-green-600">
            Products
          </Link>
          <span>›</span>
          <span className="text-gray-900 font-medium">{productName}</span>
        </nav>
      </div>
    </div>
  );
}
