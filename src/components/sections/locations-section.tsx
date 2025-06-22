"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Zap, Navigation, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/reusables/section-header";

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locations = [
    {
      id: 1,
      name: "Electro Wizard Station",
      address: "Kathmandu, Nepal",
      city: "Kathmandu, Nepal",
      coordinates: [27.6905, 85.2734] as [number, number],
      status: "Available",
      chargers: 15,
      fastChargers: 6,
      hours: "24/7",
      amenities: ["Technical Support", "WiFi", "Parking"],
      // Your provided Google Maps embed URL
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.4335770832947!2d85.27343033558189!3d27.690500500737446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190047cae3df%3A0xe797efe9caa3076f!2sElectro%20Wizard%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1750508186827!5m2!1sen!2snp",
    },
    {
      id: 2,
      name: "Electro Wizard Station",
      address: "Kathmandu, Nepal",
      city: "Kathmandu, Nepal",
      coordinates: [27.6905, 85.2734] as [number, number],
      status: "Available",
      chargers: 15,
      fastChargers: 6,
      hours: "24/7",
      amenities: ["Technical Support", "WiFi", "Parking"],
      // Your provided Google Maps embed URL
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.4335770832947!2d85.27343033558189!3d27.690500500737446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190047cae3df%3A0xe797efe9caa3076f!2sElectro%20Wizard%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1750508186827!5m2!1sen!2snp",
    },
    {
      id: 3,
      name: "Electro Wizard Station",
      address: "Kathmandu, Nepal",
      city: "Kathmandu, Nepal",
      coordinates: [27.6905, 85.2734] as [number, number],
      status: "Available",
      chargers: 15,
      fastChargers: 6,
      hours: "24/7",
      amenities: ["Technical Support", "WiFi", "Parking"],
      // Your provided Google Maps embed URL
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.4335770832947!2d85.27343033558189!3d27.690500500737446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190047cae3df%3A0xe797efe9caa3076f!2sElectro%20Wizard%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1750508186827!5m2!1sen!2snp",
    },
  ];

  const handleLocationSelect = (index: number) => {
    setSelectedLocation(index);
  };

  const GoogleMapEmbed = ({
    location,
  }: {
    location: (typeof locations)[0];
  }) => {
    return (
      <div className="relative w-full min-h-[250px] sm:min-h-[400px] h-full bg-gray-100 overflow-hidden">
        <iframe
          src={location.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full min-h-[250px] sm:min-h-[400px]"
          title={`Map of ${location.name}`}
        />

        <div className="absolute bottom-4 right-4">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates[0]},${location.coordinates[1]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Open in Maps
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="py-16 container bg-white">
      {/* Header */}
      <div>
        <SectionHeader
          title={
            <span className="text-black">Available EV Charging Locations</span>
          }
          subtitle={
            <span className="text-gray-600 block">
              We have electric vehicle charging stations across different
              locations. Checkout the available locations below to find the
              nearest charging station. We are constantly expanding our network
              to provide more convenient charging options for you.
            </span>
          }
        />
      </div>

      {/* Responsive layout */}
      <div>
        {/* Mobile Layout */}
        <div className="flex flex-col h-full lg:hidden">
          {/* Locations section - takes 40% of screen on mobile */}
          <div className="h-[55%] bg-white border-b border-gray-200 overflow-y-auto">
            <div className="py-4 px-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 bg-white z-10 pb-2">
                Available Locations
              </h3>
              <div className="space-y-3 pb-4">
                {locations.map((location, index) => (
                  <Card
                    key={location.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      selectedLocation === index
                        ? "ring-2 ring-green-500 shadow-lg"
                        : ""
                    }`}
                    onClick={() => handleLocationSelect(index)}
                  >
                    <CardContent className="px-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-gray-900 mb-1">
                            {location.name}
                          </h4>
                          <div className="flex items-center text-gray-600 mb-1">
                            <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                            <span className="text-xs">{location.address}</span>
                          </div>
                          <p className="text-gray-500 text-xs">
                            {location.city}
                          </p>
                        </div>
                        <Badge
                          className={`ml-2 text-xs ${
                            location.status === "Available"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {location.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mb-2">
                        <div className="flex items-center">
                          <Zap className="w-3 h-3 text-green-500 mr-1" />
                          <span className="text-xs text-gray-600">
                            {location.chargers} Chargers
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 text-blue-500 mr-1" />
                          <span className="text-xs text-gray-600">
                            {location.hours}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center mb-2">
                        <Navigation className="w-3 h-3 text-purple-500 mr-1" />
                        <span className="text-xs text-gray-600">
                          {location.fastChargers} Fast Chargers
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {location.amenities
                          .slice(0, 3)
                          .map((amenity, amenityIndex) => (
                            <span
                              key={amenityIndex}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                            >
                              {amenity}
                            </span>
                          ))}
                        {location.amenities.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{location.amenities.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Map section - takes 60% of screen on mobile */}
          <div className="h-[60%] border-t border-gray-200">
            <GoogleMapEmbed location={locations[selectedLocation]} />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden border lg:flex h-full">
          {/* Locations sidebar - fixed width on desktop */}
          <div className="w-130 bg-white border-r border-gray-200 overflow-y-auto">
            <div className="p-6">
              <h3 className="text-3xl font-semibold text-gray-900 mb-6 bg-white z-10 pb-2">
                Available Locations
              </h3>
              <div className="space-y-4 pb-4">
                {locations.map((location, index) => (
                  <Card
                    key={location.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      selectedLocation === index
                        ? "ring-2 ring-green-500 shadow-lg"
                        : ""
                    }`}
                    onClick={() => handleLocationSelect(index)}
                  >
                    <CardContent className="px-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-2xl font-semibold text-gray-900 mb-1">
                            {location.name}
                          </h4>
                          <div className="flex items-center text-gray-600 mb-1">
                            <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                            <span className="text-lg">{location.address}</span>
                          </div>
                          <p className="text-gray-500 text-xs">
                            {location.city}
                          </p>
                        </div>
                        <Badge
                          className={`ml-2 text-xs ${
                            location.status === "Available"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {location.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="flex items-center">
                          <Zap className="w-3 h-3 text-green-500 mr-1" />
                          <span className="text-xs text-gray-600">
                            {location.chargers} Chargers
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 text-blue-500 mr-1" />
                          <span className="text-xs text-gray-600">
                            {location.hours}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center mb-2">
                        <Navigation className="w-3 h-3 text-purple-500 mr-1" />
                        <span className="text-xs text-gray-600">
                          {location.fastChargers} Fast Chargers
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {location.amenities
                          .slice(0, 3)
                          .map((amenity, amenityIndex) => (
                            <span
                              key={amenityIndex}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                            >
                              {amenity}
                            </span>
                          ))}
                        {location.amenities.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{location.amenities.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Map section - takes remaining width on desktop */}
          <div className="flex-1">
            <GoogleMapEmbed location={locations[selectedLocation]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
