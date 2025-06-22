export default function Breadcrumb() {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <span>ElectroWizard</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">Products</span>
        </nav>
      </div>
    </div>
  );
}
