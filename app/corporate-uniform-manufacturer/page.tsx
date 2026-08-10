import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Corporate Uniform Manufacturer | TES Apparels",
};

export default function Page() {
  return (
    <>
      <PlaceholderPage
        title="Corporate Uniform Manufacturer"
        description="High-quality corporate uniforms designed for businesses across India."
      />

      {/* Internal SEO Link */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2341]">
              Looking for a T-Shirt Manufacturer in Bangalore?
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              TES Apparels manufactures high-quality corporate uniforms for
              businesses across India. For companies looking for customized
              T-shirts, polo shirts and bulk apparel production in Bengaluru,
              explore our{" "}
              <a
                href="/t-shirt-manufacturer-bangalore"
                className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
              >
                T-shirt manufacturer in Bangalore
              </a>{" "}
              services for corporate and customized apparel requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}