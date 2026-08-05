import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tesapparels.com"),

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
    url: "https://tesapparels.com",
    siteName: "TES Apparels",
    title:
      "TES Apparels | Premium Corporate & Sports Apparel Manufacturer",
    description:
      "Premium corporate uniforms, polo T-Shirts, sports jerseys and customized apparel with PAN India delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TES Apparels",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "TES Apparels | Premium Corporate & Sports Apparel Manufacturer",
    description:
      "Premium corporate uniforms, sports jerseys, polo T-Shirts and customized apparel.",
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
        "@id": "https://tesapparels.com/#organization",
        name: "TES Apparels",
        url: "https://tesapparels.com",
        logo: {
          "@type": "ImageObject",
          url: "https://tesapparels.com/logo.png",
        },
        email: "mailto:chidanand@tesapparels.com",
        telephone: "+91 9880038910",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://tesapparels.com/#localbusiness",
        name: "TES Apparels",
        image: "https://tesapparels.com/logo.png",
        url: "https://tesapparels.com",
        telephone: "+91 9880038910",
        email: "chidanand@tesapparels.com",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "No.483, 2nd Floor, 3rd Stage, Basaveshwar Nagar",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560079",
          addressCountry: "IN",
        },
        openingHours: "Mo-Sa 09:30-18:30",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasMap: "https://share.google/QaZztMcf6YFnD3lKW",
      },
      {
        "@type": "WebSite",
        "@id": "https://tesapparels.com/#website",
        url: "https://tesapparels.com",
        name: "TES Apparels",
        publisher: {
          "@id": "https://tesapparels.com/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YY25EWRKRX"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
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