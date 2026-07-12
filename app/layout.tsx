import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Syphon Apparel",
    template: "%s | Syphon Apparel",
  },
  description:
    "Premium apparel manufacturing for startups, established brands, wholesalers, sports teams, and e-commerce businesses worldwide.",
  keywords: [
    "Syphon Apparel",
    "Apparel Manufacturer",
    "Custom Clothing",
    "Sportswear Manufacturer",
    "Leather Jackets",
    "Racing Gear",
    "Private Label Clothing",
    "OEM Clothing Manufacturer",
  ],
  authors: [
    {
      name: "Syphon Apparel",
    },
  ],
  creator: "Syphon Apparel",
  publisher: "Syphon Apparel",
  applicationName: "Syphon Apparel",
  metadataBase: new URL("https://www.syphonapparel.com"),
  openGraph: {
    title: "Syphon Apparel",
    description:
      "Premium apparel manufacturing for startups, established brands, wholesalers, sports teams, and e-commerce businesses worldwide.",
    url: "https://www.syphonapparel.com",
    siteName: "Syphon Apparel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syphon Apparel",
    description:
      "Premium apparel manufacturing for startups, established brands, wholesalers, sports teams, and e-commerce businesses worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}