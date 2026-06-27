import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vidyakrit.in'),
  title: {
    default: "Vidyakrit | Premium Software & School ERP Solutions",
    template: "%s | Vidyakrit"
  },
  description: "Vidyakrit is a world-class software development company specializing in custom website development, mobile apps, and our flagship School ERP software in India.",
  keywords: [
    "Software Development Company", 
    "School ERP India", 
    "Custom Website Development", 
    "Website Development",
    "Ed-Tech Software", 
    "Mobile App Development", 
    "UI/UX Design", 
    "Vidyakrit"
  ],
  authors: [{ name: "Vidyakrit" }],
  creator: "Vidyakrit",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vidyakrit.in",
    siteName: "Vidyakrit",
    title: "Vidyakrit | Premium Software & School ERP Solutions",
    description: "Vidyakrit is a world-class software development company specializing in custom website development, mobile apps, and our flagship School ERP software in India.",
    images: [
      {
        url: "/og-image.jpg", // We will use a generic placeholder path, standard practice
        width: 1200,
        height: 630,
        alt: "Vidyakrit Premium Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidyakrit | Premium Software & School ERP Solutions",
    description: "World-class software development company and creators of the ultimate School ERP.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
