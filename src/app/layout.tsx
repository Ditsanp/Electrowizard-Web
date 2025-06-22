import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import AppThemeProvider from "@/providers/theme-provider";
import { SiteFooter } from "@/components/global/site-footer";
import { SiteHeader } from "@/components/global/site-header";

const outfit = Afacad({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Electro Wizard Nepal | Pioneering EV Solutions in Kathmandu",
  description:
    "We are Electro Wizard Nepal, your trusted partner for innovative electric vehicle solutions in Kathmandu. Specializing in EV charging infrastructure, we provide high-quality products and services to power the future of transportation in Nepal.",
  keywords:
    "Electro Wizard Nepal, EV solutions, electric vehicle charging, Kathmandu, EV infrastructure, sustainable transportation, electric vehicle products, EV charging stations, Nepal EV market, innovative EV solutions",
  openGraph: {
    title: "Electro Wizard Nepal | Pioneering EV Solutions in Kathmandu",
    description:
      "We are Electro Wizard Nepal, your trusted partner for innovative electric vehicle solutions in Kathmandu. Specializing in EV charging infrastructure, we provide high-quality products and services to power the future of transportation in Nepal.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Electro Wizard Nepal - Pioneering EV Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electro Wizard Nepal | Pioneering EV Solutions in Kathmandu",
    description:
      "We are Electro Wizard Nepal, your trusted partner for innovative electric vehicle solutions in Kathmandu. Specializing in EV charging infrastructure, we provide high-quality products and services to power the future of transportation in Nepal.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} antialiased`}>
        <AppThemeProvider>
          <SiteHeader />

          {children}
          <SiteFooter />
        </AppThemeProvider>
      </body>
    </html>
  );
}
