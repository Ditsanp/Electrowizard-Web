import Image from "next/image";

interface ProductDetailHeroProps {
  productName: string;
  shortDescription: string;
}

export default function ProductDetailHero({
  productName,
  shortDescription,
}: ProductDetailHeroProps) {
  return (
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {productName}
          </h1>
          <p className="lg:text-xl text-white text-left leading-relaxed">
            {shortDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
