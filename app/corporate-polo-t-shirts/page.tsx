import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Corporate Polo T-Shirts | TES Apparels",
  description:
    "TES Apparels manufactures premium corporate polo T-shirts for businesses, institutions, events, and promotional branding across India.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Corporate Polo T-Shirts"
      description="Premium corporate polo T-shirts designed for businesses, offices, institutions and promotional events."
    />
  );
}