import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TES Apparels | Premium Corporate Uniform Manufacturer",

  description:
    "TES Apparels is a leading corporate uniform manufacturer in Bengaluru offering premium uniforms, polo T-shirts, jackets, bags, caps, embroidery, screen printing and PAN India delivery.",

  keywords: [
    "Corporate Uniforms",
    "Corporate Uniform Manufacturer",
    "Uniform Supplier Bengaluru",
    "Polo T Shirts",
    "Industrial Uniforms",
    "Hospital Uniforms",
    "Hotel Uniforms",
    "Corporate Apparel",
    "Uniform Manufacturer India",
    "TES Apparels",
  ],

  authors: [
    {
      name: "TES Apparels",
    },
  ],

  creator: "TES Apparels",

  metadataBase: new URL("https://tesapparels.com"),

  openGraph: {
    title: "TES Apparels",

    description:
      "Premium Corporate Uniform Manufacturer",

    url: "https://tesapparels.com",

    siteName: "TES Apparels",

    locale: "en_IN",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
