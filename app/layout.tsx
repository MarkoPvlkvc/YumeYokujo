import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/ui/personal/footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Yume Yokujo Oasis Retreat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="w-[100vw] bg-white font-inter text-black">
        {children}
        <Footer />
      </body>
    </html>
  );
}
