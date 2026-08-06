import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Custom T-Shirt Printing | TES Apparels",
  description:
    "TES Apparels offers professional custom T-shirt printing services including screen printing, DTF, DTG, heat transfer and sublimation printing.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Custom T-Shirt Printing"
      description="Professional T-shirt printing services using advanced printing technologies for premium quality results."
    />
  );
}