import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "T-Shirt Manufacturer | TES Apparels",
  description:
    "TES Apparels is a leading T-Shirt Manufacturer in India specializing in bulk corporate, promotional and sports apparel.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="T-Shirt Manufacturer"
      description="India's trusted manufacturer of premium corporate, sports and promotional T-shirts."
    />
  );
}