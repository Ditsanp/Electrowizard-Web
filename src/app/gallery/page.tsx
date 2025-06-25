"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Download,
  Share2,
} from "lucide-react";
import Image from "next/image";

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  description: string;
  src: string;
  alt: string;
  location?: string;
  date?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Dual-Gun Wall-Mounted Station Installation",
    category: "Charging Stations",
    description:
      "Professional installation of our dual-gun wall-mounted charging station at a commercial facility.",
    src: "/products/listings/charging-station.png",
    alt: "Dual-gun charging station mounted on wall",
    location: "Kathmandu, Nepal",
    date: "March 2024",
  },
  {
    id: 2,
    title: "DC Fast Charging Pile with Advertising Screen",
    category: "Charging Stations",
    description:
      "21-inch advertising screen DC charging pile in operation at a busy commercial location.",
    src: "/products/listings/charging-station.png",
    alt: "DC charging pile with large screen",
    location: "Pokhara, Nepal",
    date: "February 2024",
  },
  {
    id: 3,
    title: "Type 2 Charging Cable in Use",
    category: "Charging Cables",
    description:
      "High-quality Type 2 to Type 2 charging cable connecting an electric vehicle.",
    src: "/products/listings/charging-station.png",
    alt: "Type 2 charging cable connected to EV",
    location: "Lalitpur, Nepal",
    date: "January 2024",
  },
  {
    id: 4,
    title: "CCS to CHAdeMO Adapter",
    category: "Adapters",
    description:
      "Universal adapter enabling CCS vehicles to charge at CHAdeMO stations.",
    src: "/products/listings/charging-station.png",
    alt: "CCS to CHAdeMO adapter",
    location: "Bhaktapur, Nepal",
    date: "December 2023",
  },
  {
    id: 5,
    title: "Commercial Charging Hub",
    category: "Installations",
    description:
      "Complete charging hub installation with multiple charging points for commercial use.",
    src: "/products/listings/charging-station.png",
    alt: "Commercial charging hub with multiple stations",
    location: "Kathmandu, Nepal",
    date: "November 2023",
  },
  {
    id: 6,
    title: "Tesla to CCS Adapter",
    category: "Adapters",
    description:
      "Compact adapter allowing Tesla vehicles to charge at CCS charging stations.",
    src: "/products/listings/charging-station.png",
    alt: "Tesla to CCS adapter",
    location: "Kathmandu, Nepal",
    date: "October 2023",
  },
  {
    id: 7,
    title: "Floor-Mounted AC Charging Station",
    category: "Charging Stations",
    description:
      "Robust floor-mounted AC charging station installed at a parking facility.",
    src: "/products/listings/charging-station.png",
    alt: "Floor-mounted charging station",
    location: "Pokhara, Nepal",
    date: "September 2023",
  },
  {
    id: 8,
    title: "Smart Wall Charger Installation",
    category: "Installations",
    description:
      "Smart wall-mounted charger with WiFi connectivity and mobile app control.",
    src: "/products/listings/charging-station.png",
    alt: "Smart wall charger installation",
    location: "Lalitpur, Nepal",
    date: "August 2023",
  },
];

const categories = [
  "All",
  "Charging Stations",
  "Charging Cables",
  "Adapters",
  "Installations",
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(
      filteredImages.findIndex((img) => img.id === image.id)
    );
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}

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
              Explore Our <span className="text-brand-primary">Gallery</span>
            </h1>
            <p className="text-xl lg:max-w-4xl text-white leading-relaxed">
              Explore our collection of EV charging solutions in action. From
              installations to product showcases, see how ElectroWizard is
              powering the future of electric transportation across Nepal.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span>ElectroWizard</span>
            <span>›</span>
            <span className="text-gray-900 font-medium">Gallery</span>
          </nav>
        </div>
      </div>

      {/* Split Layout */}
      <div>
        {/* Mobile Layout */}
        <div className="flex flex-col h-full lg:hidden">
          {/* Categories - Top on mobile */}
          <div className="h-[20%] bg-gray-50 border-b border-gray-200 overflow-x-auto">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h3>
              <div className="flex gap-2 pb-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    className={`whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Grid - Bottom on mobile */}
          <div className="h-[80%] bg-white overflow-y-auto">
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="cursor-pointer group"
                    onClick={() => openLightbox(image)}
                  >
                    <Card className="overflow-hidden py-0 border border-gray-200 hover:shadow-lg transition-all duration-300">
                      <div className="relative aspect-square">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-1">
                          {image.title}
                        </h4>
                        <p className="text-xs text-green-600 font-medium">
                          {image.category}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex h-full">
          {/* Categories Sidebar - Left Side */}
          <div className="w-80 bg-gray-50 border-r border-gray-200 overflow-y-auto">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={
                      selectedCategory === category ? "default" : "ghost"
                    }
                    className={`w-full justify-start text-left ${
                      selectedCategory === category
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Gallery Stats
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Images</span>
                    <span className="font-medium text-gray-900">
                      {galleryImages.length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Categories</span>
                    <span className="font-medium text-gray-900">
                      {categories.length - 1}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Showing</span>
                    <span className="font-medium text-gray-900">
                      {filteredImages.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Grid - Right Side */}
          <div className="flex-1 bg-white overflow-y-auto">
            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {selectedCategory === "All" ? "All Images" : selectedCategory}
                </h3>
                <p className="text-gray-600">
                  Showing {filteredImages.length} images
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="cursor-pointer group"
                    onClick={() => openLightbox(image)}
                  >
                    <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 py-0">
                      <div className="relative aspect-square">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300 flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="mb-2">
                          <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                            {image.category}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {image.title}
                        </h4>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                          {image.description}
                        </p>
                        {image.location && (
                          <p className="text-xs text-gray-500">
                            📍 {image.location}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                onClick={closeLightbox}
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white hover:bg-opacity-20 w-10 h-10 p-0"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    variant="ghost"
                    size="sm"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white hover:bg-opacity-20 w-12 h-12 p-0"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    variant="ghost"
                    size="sm"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white hover:bg-opacity-20 w-12 h-12 p-0"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                </>
              )}

              {/* Image */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-[70vh] object-contain"
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300 mb-2">
                    {selectedImage.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      {selectedImage.location && (
                        <span>📍 {selectedImage.location}</span>
                      )}
                      {selectedImage.date && (
                        <span>📅 {selectedImage.date}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white hover:bg-opacity-20"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white hover:bg-opacity-20"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image Counter */}
              {filteredImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {filteredImages.length}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
