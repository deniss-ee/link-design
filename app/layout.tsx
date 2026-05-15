import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
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
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
