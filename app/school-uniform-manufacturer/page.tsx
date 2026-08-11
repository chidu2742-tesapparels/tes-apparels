import type { Metadata } from "next";
import PlaceholderPage from "../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "School Uniform Manufacturer | TES Apparels",
  description:
    "TES Apparels is a trusted school uniform manufacturer providing premium uniforms, sportswear, house T-shirts and customized school apparel.",
  keywords: [
    "school uniform manufacturer",
    "school uniform manufacturer in bangalore",
    "school uniform manufacturers in bangalore",
    "school uniform manufacturer in karnataka",
    "school uniform supplier in bangalore",
    "school sports uniform manufacturer",
    "school t shirt manufacturer",
    "school house t shirts",
    "custom school uniforms",
    "school uniform supplier",
    "school apparel manufacturer",
    "school uniform manufacturers in india",
  ],
  alternates: {
    canonical: "https://www.tesapparels.com/school-uniform-manufacturer",
  },
  openGraph: {
    title: "School Uniform Manufacturer | TES Apparels",
    description:
      "TES Apparels manufactures premium school uniforms, sports uniforms, house T-shirts and customized school apparel for educational institutions.",
    url: "https://www.tesapparels.com/school-uniform-manufacturer",
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },
};

export default function Page() {
  return (
    <>
      <PlaceholderPage
        title="School Uniform Manufacturer"
        description="Manufacturing premium school uniforms, sports uniforms and customized school apparel for educational institutions."
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              School Uniform Manufacturing
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#0B2341]">
              Custom School Uniforms for Educational Institutions
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              TES Apparels manufactures school uniforms, sportswear, house
              T-shirts and customized school apparel for educational
              institutions. We support schools with bulk uniform requirements
              based on fabric, colour, size, branding and quantity
              specifications.
            </p>

            <p className="mt-4 max-w-4xl leading-7 text-slate-600">
              For institutions looking for bulk customized T-shirt production
              in Bengaluru, explore our{" "}
              <a
                href="/t-shirt-manufacturer-bangalore"
                className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
              >
                T-shirt manufacturing services in Bangalore
              </a>{" "}
              for school, sports and promotional apparel requirements.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-[#0B2341]">
                  School Uniforms
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Shirts, trousers, skirts, blazers and other school uniform
                  requirements.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-[#0B2341]">
                  Sports Uniforms
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Sports T-shirts, jerseys and performance apparel for school
                  teams and activities.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-[#0B2341]">
                  House T-Shirts
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Customized house T-shirts with school colours, logos and
                  branding.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/#contact"
                className="inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
              >
                Request a School Uniform Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}