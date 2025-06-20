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
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Nepal&apos;s leading provider of EV charging solutions,
                driving the nation towards a cleaner, greener, and more
                sustainable future with cutting-edge technology and
                customer-centric services.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To make EV charging seamless and accessible by offering
                affordable, high-performance chargers that support Nepal&apos;s
                shift to sustainable transportation and contribute to a cleaner
                environment.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Choose Electrowizard Nepal?
            </h3>
            <p className="text-lg text-gray-600">
              Powering Nepal&apos;s EV Revolution – One Charge at a Time! ⚡
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#00b87f] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Affordable & Reliable
              </h4>
              <p className="text-gray-600">
                High-quality EV chargers at reasonable prices, making
                sustainable transportation more accessible.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#00b87f] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Portable & Fast Charging
              </h4>
              <p className="text-gray-600">
                Portable chargers for on-the-go convenience and DC fast chargers
                for rapid charging solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#00b87f] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Customer-Centric Approach
              </h4>
              <p className="text-gray-600">
                Excellent after-sales support and technical assistance with
                customer satisfaction as our priority.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#00b87f] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Future-Ready Technology
              </h4>
              <p className="text-gray-600">
                Compatible with a wide range of electric vehicles, ensuring
                long-term usability and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#00b87f] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Eco-Friendly Commitment
              </h4>
              <p className="text-gray-600">
                Contributing to a greener, more sustainable future by promoting
                widespread EV adoption.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#00b87f] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">
                Nepal-Focused Solutions
              </h4>
              <p className="text-gray-600">
                Innovative charging solutions tailored to the unique needs of
                Nepalese EV users and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
