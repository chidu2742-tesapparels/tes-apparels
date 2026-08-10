import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "School Uniform Manufacturer | TES Apparels",
  description:
    "TES Apparels is a trusted school uniform manufacturer providing premium uniforms, sportswear, house T-shirts and customized school apparel.",
};

export default function Page() {
  return (
    <>
      <PlaceholderPage
        title="School Uniform Manufacturer"
        description="Manufacturing premium school uniforms, sports uniforms and customized school apparel for educational institutions."
      />

      {/* Internal SEO Link */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2341]">
              Need Custom T-Shirts for Your Institution?
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              TES Apparels manufactures school uniforms, sportswear, house
              T-shirts and customized school apparel for educational
              institutions. For institutions looking for bulk customized
              T-shirt production in Bengaluru, explore our{" "}
              <a
                href="/t-shirt-manufacturer-bangalore"
                className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
              >
                T-shirt manufacturing services in Bangalore
              </a>{" "}
              for school, sports and promotional apparel requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}