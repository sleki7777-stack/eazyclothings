import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EAZY CLOTHING EXQUISITES — Crafted in Lagos. Designed for Everywhere.",
  description: "A Lagos-born men's fashion house translating craft, culture and contemporary design for everywhere.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}