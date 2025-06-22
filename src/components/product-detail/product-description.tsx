interface ProductDescriptionProps {
  longDescription: string;
}

export default function ProductDescription({
  longDescription,
}: ProductDescriptionProps) {
  if (!longDescription) return null;
  return (
    <div className="mb-8">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
        Product Description
      </h3>
      <div className="prose prose-gray max-w-none">
        {longDescription.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-gray-600 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
