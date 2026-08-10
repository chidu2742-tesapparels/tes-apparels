import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Custom T-Shirt Printing | TES Apparels",
  description:
    "TES Apparels offers professional custom T-shirt printing services including screen printing, DTF, DTG, heat transfer and sublimation printing.",
};

export default function Page() {
  return (
    <>
      <PlaceholderPage
        title="Custom T-Shirt Printing"
        description="Professional T-shirt printing services using advanced printing technologies for premium quality results."
      />

      {/* Internal SEO Link */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2341]">
              Need T-Shirt Manufacturing Services in Bangalore?
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              TES Apparels provides professional T-shirt printing solutions
              including screen printing, DTF, DTG, heat transfer and
              sublimation. For businesses requiring bulk customized apparel
              production, explore our{" "}
              <a
                href="/t-shirt-manufacturer-bangalore"
                className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
              >
                T-shirt manufacturing services in Bangalore
              </a>{" "}
              for corporate, promotional and customized apparel requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}