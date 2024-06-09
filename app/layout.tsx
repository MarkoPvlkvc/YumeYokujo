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
      <body className="font-inter w-[100vw] bg-white text-black">
        {children}
        <Footer />
      </body>
    </html>
  );
}
