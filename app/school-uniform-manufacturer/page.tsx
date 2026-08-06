import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "School Uniform Manufacturer | TES Apparels",
  description:
    "TES Apparels is a trusted school uniform manufacturer providing premium uniforms, sportswear, house T-shirts and customized school apparel.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="School Uniform Manufacturer"
      description="Manufacturing premium school uniforms, sports uniforms and customized school apparel for educational institutions."
    />
  );
}