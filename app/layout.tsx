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
  metadataBase: new URL("https://www.syphonapparel.com"),

  title: {
    default: "Syphon Apparel | Premium Custom Apparel Manufacturer",
    template: "%s | Syphon Apparel",
  },

  description:
    "Syphon Apparel is a premium apparel manufacturer in Sialkot, Pakistan specializing in custom clothing, sportswear, hoodies, polo shirts, tracksuits, leather jackets, racing wear, women's activewear and private label manufacturing for brands worldwide.",

  keywords: [
    "Syphon Apparel",
    "custom apparel manufacturer",
    "clothing manufacturer Pakistan",
    "Sialkot apparel manufacturer",
    "sportswear manufacturer",
    "gym wear manufacturer",
    "private label clothing",
    "OEM apparel manufacturer",
    "custom t shirts",
    "polo shirt manufacturer",
    "hoodie manufacturer",
    "tracksuit manufacturer",
    "tank top manufacturer",
    "women activewear manufacturer",
    "leather jacket manufacturer",
    "racing wear manufacturer",
    "bulk apparel supplier",
  ],

  authors: [
    {
      name: "Syphon Apparel",
    },
  ],

  creator: "Syphon Apparel",

  publisher: "Syphon Apparel",

  applicationName: "Syphon Apparel",

  verification: {
    google: "8hsUwRLq_vVluJbcWnYDRG8dB-RiS2J14SeLbsGYDoY",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Syphon Apparel | Premium Custom Apparel Manufacturer",

    description:
      "Premium custom apparel manufacturing for startups, fashion brands, wholesalers, sports teams and e-commerce businesses worldwide.",

    url: "https://www.syphonapparel.com",

    siteName: "Syphon Apparel",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Syphon Apparel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Syphon Apparel | Premium Custom Apparel Manufacturer",

    description:
      "Premium custom apparel manufacturing for startups, fashion brands, wholesalers, sports teams and e-commerce businesses worldwide.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  alternates: {
    canonical: "https://www.syphonapparel.com",
  },

  category: "Business",

  classification: "Apparel Manufacturing",
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Syphon Apparel",
              url: "https://www.syphonapparel.com",
              logo: "https://www.syphonapparel.com/logo.png",
              description:
                "Premium apparel manufacturing for startups, established brands, wholesalers, sports teams, and e-commerce businesses worldwide.",
              email: "suppor@syphonapparel.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sialkot",
                addressRegion: "Punjab",
                addressCountry: "PK",
              },
              sameAs: [],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Syphon Apparel",
              url: "https://www.syphonapparel.com",
              description:
                "Premium custom apparel manufacturing for fashion brands, startups, wholesalers, sports teams and e-commerce businesses worldwide.",
              publisher: {
                "@type": "Organization",
                name: "Syphon Apparel",
              },
              inLanguage: "en",
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}