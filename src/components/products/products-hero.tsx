import Image from "next/image";

export default function ProductsHero() {
  return (
    <section className="relative py-42">
      <Image
        src="/page-hero.jpg"
        alt="Products Hero"
        className="absolute inset-0 object-cover object-center w-full h-full"
        fill
        quality={100}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-20 w-full h-full pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-brand-primary">Products</span>
          </h1>
          <p className="text-xl lg:max-w-4xl text-white leading-relaxed">
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
