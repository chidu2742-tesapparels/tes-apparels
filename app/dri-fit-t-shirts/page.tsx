import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Dri-Fit T-Shirts Manufacturer | TES Apparels",
  description:
    "TES Apparels manufactures premium Dri-Fit T-shirts with moisture-wicking fabric for sports, fitness, corporate events and promotional campaigns.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Dri-Fit T-Shirts"
      description="Premium moisture-wicking Dri-Fit T-shirts manufactured for sports, fitness, corporate events and outdoor activities."
    />
  );
}