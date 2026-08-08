import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "T-Shirt Manufacturer in Bangalore | TES Apparels",

  description:
    "TES Apparels is a T-Shirt Manufacturer in Bangalore specializing in corporate T-shirts, polo T-shirts, sportswear, promotional apparel, customized uniforms and bulk garment manufacturing.",

  keywords: [
    "T-Shirt Manufacturer Bangalore",
    "T Shirt Manufacturer in Bangalore",
    "T-Shirt Manufacturer Bengaluru",
    "Corporate T-Shirt Manufacturer Bangalore",
    "Bulk T-Shirt Manufacturer Bangalore",
    "Polo T-Shirt Manufacturer Bangalore",
    "Sports T-Shirt Manufacturer Bangalore",
    "Custom T-Shirt Manufacturer Bangalore",
    "TES Apparels",
  ],

  alternates: {
    canonical: "/t-shirt-manufacturer-bangalore",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "T-Shirt Manufacturer in Bangalore | TES Apparels",
    description:
      "TES Apparels manufactures corporate T-shirts, polo T-shirts, sportswear, promotional apparel and customized garments in Bangalore and across India.",
    url: "https://tesapparels.com/t-shirt-manufacturer-bangalore",
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },
};

export default function Page() {
  return (
    <PlaceholderPage
      title="T-Shirt Manufacturer in Bangalore"
      description="Premium custom T-shirt manufacturing solutions in Bangalore from TES Apparels, including corporate T-shirts, polo T-shirts, sportswear, promotional apparel and customized garments."
    />
  );
}