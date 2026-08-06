import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "T-Shirt Manufacturer in Bangalore | TES Apparels",
};

export default function Page() {
  return (
    <PlaceholderPage
      title="T-Shirt Manufacturer in Bangalore"
      description="Premium custom T-shirt manufacturing solutions in Bangalore."
    />
  );
}