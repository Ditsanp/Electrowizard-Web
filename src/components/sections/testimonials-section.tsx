"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/reusables/section-header";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Fleet Manager",
    company: "Green Transport Co.",
    content:
      "ElectroWizard's charging network has revolutionized our electric fleet operations. The reliability and speed of their chargers have exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sunita Gurung",
    role: "Hotel Owner",
    company: "Himalayan Resort",
    content:
      "Installing ElectroWizard's charging stations at our hotel has been a game-changer. Our guests love the convenience, and it's become a unique selling point.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anil Thapa",
    role: "Taxi Service Owner",
    company: "City Cabs Nepal",
    content:
      "The cost savings from switching to electric with ElectroWizard's support have been substantial. Their 24/7 customer service makes operations worry-free.",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Shrestha",
    role: "Restaurant Owner",
    company: "Mountain View Dining",
    content:
      "Our restaurant's EV charging station has attracted many new customers. ElectroWizard's installation was professional and the support excellent.",
    rating: 5,
  },
  {
    id: 5,
    name: "Kumar Maharjan",
    role: "Tech Entrepreneur",
    company: "StartUp Nepal",
    content:
      "As someone who drives extensively for business, ElectroWizard's network gives me confidence. I never worry about finding a charging station anymore.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sita Rai",
    role: "Government Official",
    company: "Ministry of Transport",
    content:
      "ElectroWizard is playing a crucial role in Nepal's green transportation initiative. Their commitment aligns perfectly with our sustainability goals.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionHeader
          title={
            <span>
              Don&apos;t Take Our Word For It, Hear From{" "}
              <span className="text-brand-primary">Our Customers</span>
            </span>
          }
          subtitle="Discover how ElectroWizard is transforming the EV charging experience in Nepal through real customer stories."
          id="testimonials"
        />

        {/* Main testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="border-0 shadow-lg bg-gray-50">
                <CardContent className="p-8 md:p-12">
                  {/* Rating */}
                  <div className="flex items-center justify-center mb-8">
                    {[...Array(testimonials[activeIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-green-500 text-green-500 mx-1"
                        />
                      )
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl text-gray-800 text-center mb-8 leading-relaxed font-light">
                    &quot;{testimonials[activeIndex].content}&quot;
                  </blockquote>

                  {/* Author */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                      {testimonials[activeIndex].name.charAt(0)}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-600 mb-1">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-green-600 font-medium">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Progress dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-green-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: "500+", label: "Happy Customers" },
            { number: "50+", label: "Charging Stations" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
