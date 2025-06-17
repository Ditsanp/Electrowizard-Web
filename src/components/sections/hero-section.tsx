"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative h-auto min-h-screen xl:min-h-0 xl:h-screen 2xl:max-h-[1080px] flex flex-col">
      <Image
        src="/hero-image.jpg"
        alt="Car Charging"
        className="object-cover saturate-[75%]"
        fill
        priority
      />
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <div
        aria-hidden
        className="absolute inset-0 z-20 w-full h-full pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main content */}

      <div className="text-white flex-1 flex flex-col md:flex-row items-center justify-center relative z-10 py-12 md:py-20 gap-8">
        <motion.div
          className="flex container mt-32 sm:mt-0 flex-col items-center text-left max-w-3xl space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-green-400/30 bg-green-400/10 text-green-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Zap className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">
              Powering Nepal&apos;s EV Revolution
            </span>
          </motion.div>

          <div className="w-full">
            <h1 className="text-5xl text-center md:text-6xl xl:text-7xl lg:text-6xl font-medium tracking-normal">
              Charge <span className="text-brand-primary">Smart,</span> Drive
              Clean
              <span className="text-brand-primary">.</span>
            </h1>
          </div>

          <motion.p
            className="text-lg sm:text-xl font-normal text-center text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Electrowizard Nepal provides high-quality portable EV chargers and
            DC fast chargers at competitive prices, ensuring convenient and
            efficient charging solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button
              size="lg"
              className="gap-2 group relative overflow-hidden bg-brand-primary font-bold text-white hover:bg-green-600 transition-colors cursor-pointer"
            >
              <span className="relative z-10">Explore Products</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 text-primary hover:bg-primary/10 hover:text-primary font-bold"
            >
              About Us
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-16 sm:gap-32 pt-8 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {[
              { value: "Fast", label: "DC Charging" },
              { value: "Portable", label: "Solutions" },
              { value: "Affordable", label: "Pricing" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className={`flex flex-col items-center sm:items-start ${
                  i === 2
                    ? "col-span-2 justify-self-center sm:col-span-1 sm:justify-self-auto"
                    : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
              >
                <div className="text-xl font-bold text-brand-primary">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-bounce"
          >
            <ChevronDown className="h-6 w-6 text-white" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
