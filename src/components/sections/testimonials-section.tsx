"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto relative z-10">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            What Our
            <span className="block text-brand-primary">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 leading-relaxed">
            Hear from businesses and individuals who&apos;ve transformed their
            transportation experience with ElectroWizard&apos;s charging
            solutions.
          </p>
        </div>

        <div className="relative mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <div className="absolute top-0 left-8 text-brand-primary/10 z-0">
            <Quote size={80} />
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-brand-primary text-brand-primary"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                        &quot;{testimonial.content}&quot;
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-brand-primary font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-100">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-brand-primary font-medium">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-8 space-x-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300" />
              <CarouselNext className="relative inset-0 translate-y-0 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
