"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Briefcase, Rocket, Users, Leaf, Cpu } from "lucide-react";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with padding to account for fixed navbar */}
      <section className="relative bg-gradient-to-r from-green-50 to-green-100 pt-28 pb-20">
        <Image
          src="/pagehero.webp"
          alt="Car Charging"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block bg-green-100 p-2 rounded-lg mb-4">
              <Zap className="h-6 w-6 text-brand-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Electrowizard Nepal
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Pioneering the EV charging landscape in Nepal with innovative and
              reliable solutions for a sustainable future.
            </p>
            <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Electrowizard Nepal is a pioneering company dedicated to
              revolutionizing the EV charging landscape in Nepal. We provide
              high-quality portable EV chargers and DC fast chargers at
              competitive prices, ensuring
              <span className="text-brand-primary font-medium">
                {" "}
                convenient and efficient charging solutions{" "}
              </span>
              for all electric vehicle users. Our mission is to
              <span className="text-brand-primary font-medium">
                {" "}
                accelerate Nepal&apos;s transition to sustainable mobility{" "}
              </span>
              by offering innovative, reliable, and
              <span className="text-brand-primary font-medium">
                {" "}
                accessible EV charging products
              </span>
              .
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            <div className="flex-1">
              <Image
                width={600}
                height={400}
                src="/placeholder.svg?height=400&width=600"
                alt="EV Charging Station"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🔌 Powering Nepal&apos;s EV Revolution – One Charge at a Time!
              </h2>
              <p className="text-gray-700 mb-6">
                We&apos;re committed to making sustainable transportation
                accessible to everyone in Nepal through our innovative charging
                solutions and customer-centric approach.
              </p>
              <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white self-start">
                Learn More About Our Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Vision & Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Rocket className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 mb-4">
                  To be Nepal&apos;s leading provider of EV charging solutions,
                  driving the nation towards a cleaner, greener, and more
                  sustainable future with cutting-edge technology and
                  customer-centric services.
                </p>
                <p className="font-medium text-gray-900">
                  Leading the transition to a sustainable and eco-friendly
                  transportation future in Nepal.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2">•</span>
                    <span>
                      To make EV charging seamless and accessible by offering
                      affordable, high-performance chargers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2">•</span>
                    <span>
                      To support Nepal&apos;s shift to sustainable
                      transportation by reducing dependency on fossil fuels.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2">•</span>
                    <span>
                      To provide innovative charging solutions tailored to the
                      unique needs of Nepalese EV users.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-primary mr-2">•</span>
                    <span>
                      To contribute to a cleaner environment by promoting the
                      widespread adoption of electric vehicles.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Why Choose Electrowizard Nepal?
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We&apos;re committed to providing the best EV charging solutions in
            Nepal with a focus on quality, reliability, and customer
            satisfaction.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Affordable & Reliable
                </h3>
                <p className="text-gray-700">
                  We provide high-quality EV chargers at reasonable prices,
                  making sustainable transportation more accessible.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Portable & Fast Charging
                </h3>
                <p className="text-gray-700">
                  Our portable chargers ensure on-the-go convenience, while our
                  DC fast chargers enable rapid charging.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Customer-Centric Approach
                </h3>
                <p className="text-gray-700">
                  We prioritize customer satisfaction with excellent after-sales
                  support and technical assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Future-Ready Technology
                </h3>
                <p className="text-gray-700">
                  Our chargers are designed to be compatible with a wide range
                  of electric vehicles, ensuring long-term usability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Eco-Friendly Commitment
                </h3>
                <p className="text-gray-700">
                  By choosing Electrowizard Nepal, you contribute to a greener,
                  more sustainable future.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Local Expertise
                </h3>
                <p className="text-gray-700">
                  Our team understands Nepal&apos;s unique energy landscape and
                  provides solutions tailored to local needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Nepal&apos;s EV Revolution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our EV charging solutions and
            how we can help you transition to sustainable transportation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-brand-primary-dark hover:bg-gray-100">
              Get a Quote
            </Button>
            <Button className="text-white bg-brand-primary hover:bg-brand-primary-dark">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
