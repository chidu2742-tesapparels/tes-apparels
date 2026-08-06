import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "T-Shirt Embroidery | TES Apparels",
  description:
    "TES Apparels provides premium logo embroidery services for corporate uniforms, polo T-shirts, workwear, caps and promotional apparel.",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="T-Shirt Embroidery"
      description="High-quality embroidery services for logos, corporate branding, uniforms and premium apparel."
    />
  );
}