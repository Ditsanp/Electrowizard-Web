"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, Download, RotateCcw } from "lucide-react";
import Image from "next/image";

export default function SolutionsPage() {
  return (
    <div>
      <section className="relative py-42">
        <Image
          src="/pagehero.webp"
          alt="Products Hero"
          className="absolute inset-0 object-cover w-full h-full object-top"
          fill
          quality={100}
        />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Solutions for Every EV Charging Need
            </h1>
            <p className="lg:text-xl text-white text-left leading-relaxed">
              Explore our range of EV charging solutions designed to meet the
              needs of every electric vehicle owner, from home charging to
              commercial installations.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto ">
        {/* Blogs Section */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Blogs</h2>
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="py-16 px-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                No Blogs Yet
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                {
                  "We're busy crafting insightful articles about EV charging. Stay tuned for updates and helpful tips!"
                }
              </p>
              <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white">
                <RotateCcw className="w-4 h-4 mr-2" />
                Check Back Soon
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* FAQs Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">FAQs</h2>
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="border-b border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-6">
                    What is the charging capacity of the portable charger?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    Our portable chargers come in various capacities, ranging
                    from 3.7 kW to 22 kW, catering to different EV models and
                    charging needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="border-b border-gray-100 px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-6">
                    How long does it take to charge an EV with a DC fast
                    charger?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    DC fast chargers can charge most EVs from 10% to 80% in
                    approximately 30-45 minutes, depending on the vehicle&apos;s
                    battery capacity and charging capabilities.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="px-6">
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-6">
                    What types of EVs are compatible with Electrowizard
                    chargers?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    Our chargers are compatible with all major EV brands
                    including Tesla, BMW, Audi, Nissan, Hyundai, and more. We
                    support both Type 1 and Type 2 connectors, as well as CCS
                    and CHAdeMO standards.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Product Manuals Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Product Manuals
          </h2>
          <div className="space-y-4">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    Portable Charger Manual
                  </span>
                </div>
                <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    DC Fast Charger Manual
                  </span>
                </div>
                <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">
                    EV Charging Solutions Manual
                  </span>
                </div>
                <Button className="bg-brand-primary hover:bg-brand-primary-dark text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
