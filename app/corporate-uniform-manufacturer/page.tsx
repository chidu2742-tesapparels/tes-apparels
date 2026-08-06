import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Corporate Uniform Manufacturer | TES Apparels",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="Corporate Uniform Manufacturer"
      description="High-quality corporate uniforms designed for businesses across India."
    />
  );
}