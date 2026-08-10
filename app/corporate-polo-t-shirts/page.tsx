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

      {/* Internal SEO Links */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2341]">
              Explore Corporate & Performance T-Shirt Options
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              TES Apparels manufactures corporate polo T-shirts for businesses,
              institutions, events and promotional branding. If you need
              performance apparel for sports, fitness or outdoor activities,
              explore our{" "}
              <a
                href="/dri-fit-t-shirts"
                className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
              >
                Dri-Fit T-shirts
              </a>{" "}
              made with moisture-wicking fabrics. For businesses looking for
              local bulk production, you can also explore our{" "}
              <a
                href="/t-shirt-manufacturer-bangalore"
                className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
              >
                Bangalore T-shirt manufacturing services
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}