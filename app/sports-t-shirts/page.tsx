import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Sports T-Shirts Manufacturer | TES Apparels",
  description:
    "TES Apparels manufactures premium sports T-shirts for teams, schools, colleges, clubs, events and corporate sports activities.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Sports T-Shirts"
      description="High-performance sports T-shirts manufactured using premium fabrics for maximum comfort and durability."
    />
  );
}