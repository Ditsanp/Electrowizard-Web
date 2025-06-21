import { Building, Check, Heart, Phone, Shield, Wrench } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-brand-primary" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left grid lg:grid-cols-2 items-center justify-start mb-16">
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

        <div className="grid  gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-white lg:text-lg leading-relaxed">
                To be Nepal&apos;s leading provider of EV charging solutions,
                driving the nation towards a cleaner, greener, and more
                sustainable future with cutting-edge technology and
                customer-centric services.
              </p>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white lg:text-lg leading-relaxed">
                To make EV charging seamless and accessible by offering
                affordable, high-performance chargers that support Nepal&apos;s
                shift to sustainable transportation and contribute to a cleaner
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
