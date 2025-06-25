"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about-us" },
  { name: "Solutions", href: "/solutions" },
  { name: "Contact", href: "/#contact" },
  { name: "Gallery", href: "/gallery" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full py-3 transition-colors duration-300 ease-in-out",
        isScrolled
          ? "bg-black/60 text-white backdrop-blur-md shadow-sm"
          : "bg-transparent text-white"
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image src={"/logo.png"} width={120} height={40} alt="Logo" />
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex gap-8">
            {navigation.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="hover:text-green-500 font-medium transition-colors relative group"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <Button
              className={`hidden border-brand-primary lg:flex border bg-brand-primary hover:bg-transparent hover:text-brand-primary
                `}
            >
              Get a Quote
            </Button>
          </motion.div>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-5">
              <SheetTitle className="text-lg font-semibold">
                <Link href="/" className="flex items-center space-x-2 group">
                  <Image src={"/logo.png"} width={120} height={40} alt="Logo" />
                </Link>
              </SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsSheetOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-4 w-full">Get a Quote</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
