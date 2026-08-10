import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "T-Shirt Embroidery | TES Apparels",
  description:
    "TES Apparels provides premium logo embroidery services for corporate uniforms, polo T-shirts, workwear, caps and promotional apparel.",
};

export default function Page() {
  return (
    <>
      <PlaceholderPage
        title="T-Shirt Embroidery"
        description="High-quality embroidery services for logos, corporate branding, uniforms and premium apparel."
      />

      {/* Internal SEO Link */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2341]">
              Looking for Bangalore T-Shirt Manufacturing Services?
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              TES Apparels provides professional embroidery services for
              corporate uniforms, polo T-shirts, workwear, caps and
              promotional apparel. For businesses requiring bulk customized
              garments, explore our{" "}
              <a
                href="/t-shirt-manufacturer-bangalore"
                className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
              >
                Bangalore T-shirt manufacturing services
              </a>{" "}
              for corporate, promotional and customized apparel requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}