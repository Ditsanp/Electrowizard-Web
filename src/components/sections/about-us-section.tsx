import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="py-24 bg-brand-primary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:gap-16">
          <div>
            <div className="text-center lg:text-left grid items-center justify-start mb-16">
              <h2 className="text-4xl md:text-6xl  font-bold text-white mb-6">
                About Electrowizard Nepal
              </h2>
              <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
                We are a pioneering company dedicated to revolutionizing the EV
                charging landscape in Nepal. Our mission is to accelerate
                Nepal&apos;s transition to sustainable mobility by offering
                innovative, reliable, and accessible EV charging products at
                competitive prices.
              </p>
            </div>

            <div className="grid gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Our Vision
                  </h3>
                  <p className="text-white lg:text-lg leading-relaxed">
                    To be Nepal&apos;s leading provider of EV charging
                    solutions, driving the nation towards a cleaner, greener,
                    and more sustainable future with cutting-edge technology and
                    customer-centric services.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-white lg:text-lg leading-relaxed">
                    To make EV charging seamless and accessible by offering
                    affordable, high-performance chargers that support
                    Nepal&apos;s shift to sustainable transportation and
                    contribute to a cleaner environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/about-image.jpg"
            alt="Car Charging"
            className="object-cover rounded-xl saturate-[75%]"
            quality={100}
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
}
