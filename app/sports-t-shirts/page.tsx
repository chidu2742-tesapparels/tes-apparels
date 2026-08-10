import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Sports T-Shirts Manufacturer | TES Apparels",
  description:
    "TES Apparels manufactures premium sports T-shirts for teams, schools, colleges, clubs, events and corporate sports activities.",
};

export default function Page() {
  return (
    <>
      <PlaceholderPage
        title="Sports T-Shirts"
        description="High-performance sports T-shirts manufactured using premium fabrics for maximum comfort and durability."
      />

      {/* Internal SEO Link */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2341]">
              Looking for a Bangalore-Based T-Shirt Manufacturer?
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              TES Apparels manufactures high-performance sports T-shirts for
              teams, schools, colleges, clubs, events and corporate sports
              activities. For businesses and organizations seeking local bulk
              apparel production, explore our{" "}
              <a
                href="/t-shirt-manufacturer-bangalore"
                className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
              >
                Bangalore-based T-shirt manufacturer
              </a>{" "}
              services for customized and bulk apparel requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}