import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
  textColor?: string;
}

const ProductCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  bgColor,
  textColor = "text-gray-800",
}: ProductCardProps) => {
  return (
    <div
      className={`${bgColor} rounded-2xl border border-gray-200 p-6 relative overflow-hidden h-full transition-transform transform hover:scale-[1.02]`}
    >
      <div className="relative z-10 grid lg:grid-cols-2 justify-between h-full">
        {/* Header */}
        <div className="flex flex-col justify-between h-full">
          <div className="mb-4">
            <h3 className={`text-2xl lg:text-3xl font-bold mb-2 ${textColor}`}>
              {title}
            </h3>
            <p className={`text-lg lg:text-xl mt-5 opacity-90 ${textColor}`}>
              {description}
            </p>
          </div>

          {/* Learn more button */}
          <div className="mb-4">
            <button
              className={`flex items-center gap-2 ${textColor} hover:opacity-80 transition-opacity group`}
            >
              <span className="text-lg font-medium">Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Product image */}
        <div className="flex items-center justify-center lg:justify-end h-full">
          <Image
            width={800}
            height={800}
            src={imageSrc}
            alt={imageAlt}
            className="w-40 lg:w-60 xl:w-68 drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
