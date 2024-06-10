import type { Metadata } from "next";
import "@/app/globals.css";
import NavbarStatic from "@/components/ui/personal/navbar_static";

export const metadata: Metadata = {
  title: "Offers",
  description: "Yume Yokujo Oasis Retreat",
};

export default function StaticLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavbarStatic />

      {children}
    </section>
  );
}
