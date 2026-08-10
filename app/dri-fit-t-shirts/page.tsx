import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Dri-Fit T-Shirts Manufacturer | TES Apparels",
  description:
    "TES Apparels manufactures premium Dri-Fit T-shirts with moisture-wicking fabric for sports, fitness, corporate events and promotional campaigns.",
};

export default function Page() {
  return (
    <>
      <PlaceholderPage
        title="Dri-Fit T-Shirts"
        description="Premium moisture-wicking Dri-Fit T-shirts manufactured for sports, fitness, corporate events and outdoor activities."
      />

      {/* Internal SEO Link */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2341]">
              Need Custom T-Shirt Manufacturing in Bangalore?
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              TES Apparels manufactures Dri-Fit T-shirts for sports, fitness,
              corporate events and promotional requirements. Businesses
              looking for local bulk apparel production can explore our{" "}
              <a
                href="/t-shirt-manufacturer-bangalore"
                className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
              >
                custom T-shirt manufacturing services in Bangalore
              </a>{" "}
              for customized and bulk apparel requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}