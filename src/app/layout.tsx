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
  title: "Vidyakrit | Premium Software & School ERP Solutions",
  description: "A world-class software company building enterprise-grade solutions and empowering education with our flagship School ERP.",
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
