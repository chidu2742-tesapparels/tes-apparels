import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Corporate Polo T-Shirts | TES Apparels",
  description:
    "TES Apparels manufactures premium corporate polo T-shirts for businesses, institutions, events, and promotional branding across India.",
};

export default function Page() {
  return (
    <>
      <PlaceholderPage
        title="Corporate Polo T-Shirts"
        description="Premium corporate polo T-shirts designed for businesses, offices, institutions and promotional events."
      />

      {/* Internal SEO Link */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2341]">
              Looking for T-Shirt Manufacturing in Bangalore?
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              TES Apparels provides corporate polo T-shirts and customized
              apparel for businesses and organizations. For local
              manufacturing requirements, explore our{" "}
              <a
                href="/t-shirt-manufacturer-bangalore"
                className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
              >
                Bangalore T-Shirt Manufacturing Services
              </a>{" "}
              for bulk corporate, promotional and customized apparel.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}