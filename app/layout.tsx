import type { Metadata } from "next";
import "./globals.css";
import "./preferred.css";
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
  title: "Specialized Trailer Rental | Preferred Trucking LLC",
  description:
    "Rent an Alpha HD extendable detachable-gooseneck trailer from Preferred Trucking LLC for $3,000 per month. Explore specifications and request availability.",
  themeColor: "#171b1c"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
