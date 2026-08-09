import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://www.tesapparels.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "TES Apparels | Corporate & Sports Apparel Manufacturer in India",
    template: "%s | TES Apparels",
  },

  description:
    "TES Apparels is a leading manufacturer of premium corporate uniforms, polo T-shirts, sports jerseys, promotional apparel, customized apparel, and workwear with PAN India delivery.",

  keywords: [
    "TES Apparels",
    "Corporate T-Shirts",
    "Corporate Uniforms",
    "Sports Jerseys",
    "Polo T-Shirts",
    "Custom T-Shirts",
    "Promotional Apparel",
    "Uniform Manufacturer",
    "Corporate Apparel",
    "Sports Apparel",
    "Customized Apparel",
    "Bulk T-Shirt Manufacturer",
    "Bangalore",
    "India",
  ],

  authors: [
    {
      name: "TES Apparels",
    },
  ],

  creator: "TES Apparels",
  publisher: "TES Apparels",
  category: "Business",
  applicationName: "TES Apparels",

  alternates: {
    canonical: "/",
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
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "TES Apparels",

    title:
      "TES Apparels | Premium Corporate & Sports Apparel Manufacturer",

    description:
      "Premium corporate uniforms, polo T-shirts, sports jerseys and customized apparel with PAN India delivery.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TES Apparels - Corporate and Sports Apparel Manufacturer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "TES Apparels | Premium Corporate & Sports Apparel Manufacturer",

    description:
      "Premium corporate uniforms, sports jerseys, polo T-shirts and customized apparel.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,

        name: "TES Apparels",

        url: siteUrl,

        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
        },

        image: `${siteUrl}/logo.png`,

        email: "mailto:chidanand@tesapparels.com",

        telephone: "+91 9880038910",

        description:
          "TES Apparels is a T-Shirt and apparel manufacturer specializing in corporate uniforms, polo T-shirts, sportswear, promotional apparel, customized garments, and bulk apparel manufacturing.",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "No.483, 2nd Floor, 3rd Stage, Basaveshwar Nagar",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560079",
          addressCountry: "IN",
        },
      },

      {
        "@type": "ClothingStore",
        "@id": `${siteUrl}/#localbusiness`,

        name: "TES Apparels",

        url: siteUrl,

        image: `${siteUrl}/logo.png`,

        telephone: "+91 9880038910",

        email: "chidanand@tesapparels.com",

        priceRange: "$$",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "No.483, 2nd Floor, 3rd Stage, Basaveshwar Nagar",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560079",
          addressCountry: "IN",
        },

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",

            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],

            opens: "09:30",
            closes: "18:30",
          },
        ],

        areaServed: {
          "@type": "Country",
          name: "India",
        },

        hasMap:
          "https://share.google/QaZztMcf6YFnD3lKW",
      },

      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,

        url: siteUrl,

        name: "TES Apparels",

        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YY25EWRKRX');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}