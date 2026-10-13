import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ExitIntentModal } from "@/components/ui/ExitIntentModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
    "Vidyakrit",
    "Website Developer in Patna",
    "School ERP in Patna",
    "Software Company in Bihar"
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidyakrit | Premium Software & School ERP Solutions",
    description: "World-class software development company and creators of the ultimate School ERP.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${inter.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        <main style={{ flex: 1, paddingTop: 'clamp(72px, 8vw, 88px)' }}>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ExitIntentModal />
      </body>
    </html>
  );
}
