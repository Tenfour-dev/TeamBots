import type { Metadata } from "next";
import "./globals.css";
import { Barlow, Barlow_Condensed } from "next/font/google";

const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow"
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed"
});

export const metadata: Metadata = {
  title: "TENFOUR | Trailer Rentals",
  description: "TenFour LLC — Dry van & flatbed trailer rentals across CT & New England."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="min-h-screen bg-brand-paper text-brand-ink">
        {children}
      </body>
    </html>
  );
}
