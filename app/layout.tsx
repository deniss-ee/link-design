import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link Design Studio — Design on Demand",
  description:
    "A design partner for marketing teams that move fast. Banners, social, print, HTML5. Usually shipped in 48 hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} bg-background`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
