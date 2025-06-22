import Image from "next/image";

export default function ProductsHero() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-green-600">Products</span>
          </h1>
          <p className="text-xl text-white mx-auto leading-relaxed">
            ElectroWizard is a manufacturer of EV charging stations and offers
            numerous advantages for electric vehicle owners. We provide fast and
            efficient charging experiences, advanced safety features, and
            compatibility with all types of electric vehicles.
          </p>
        </div>
      </div>
    </section>
  );
}
