"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export function SiteFooter() {
  return (
    <footer className="bg-background border-t relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-green-500/10 rounded-full animate-spin-slow opacity-20"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-green-500/5 rounded-md rotate-12 animate-float"></div>

      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-green-600 transition-transform duration-300 group-hover:scale-110">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">Electro Wizard</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Providing innovative electrical solutions and services across
              Nepal with expertise and reliability.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
              ].map((social, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-8 items-start justify-between">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "#services" },
                  { name: "Projects", href: "#projects" },
                  { name: "About Us", href: "#about" },
                  { name: "Contact", href: "#contact" },
                ].map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                    >
                      {link.name}
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Kathmandu, Nepal
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">+977 1 4123456</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">
                    info@electrowizard.com.np
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Electro Wizard Nepal. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
