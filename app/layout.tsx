import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/personal/footer";

import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Home",
  description: "Yume Yokujo Oasis Retreat - Home",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="w-[100vw] bg-white font-inter text-black">
        {children}
        <Footer />
      </body>
    </html>
  );
}
