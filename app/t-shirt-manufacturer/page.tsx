import type { Metadata } from "next";
import LandingPage from "../components/landing/LandingPage";

export const metadata: Metadata = {
  title:
    "T-Shirt Manufacturer | Corporate, Polo, Dri-Fit & Custom T-Shirts | TES Apparels",

  description:
    "TES Apparels is a leading T-Shirt Manufacturer in India specializing in premium corporate T-shirts, polo T-shirts, Dri-Fit sportswear, promotional apparel, customized uniforms and bulk garment manufacturing with PAN India delivery.",

  keywords: [
    "T-Shirt Manufacturer",
    "T-Shirt Manufacturer in Bangalore",
    "Corporate T-Shirt Manufacturer",
    "Bulk T-Shirt Manufacturer",
    "Custom T-Shirt Manufacturer",
    "Polo T-Shirt Manufacturer",
    "Dri-Fit T-Shirt Manufacturer",
    "Uniform T-Shirt Manufacturer",
    "Sports T-Shirt Manufacturer",
    "Promotional T-Shirt Manufacturer",
  ],

  alternates: {
    canonical: "/t-shirt-manufacturer",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "T-Shirt Manufacturer | Corporate, Polo, Dri-Fit & Custom T-Shirts | TES Apparels",

    description:
      "TES Apparels manufactures premium corporate T-shirts, polo T-shirts, Dri-Fit sportswear, promotional apparel, customized uniforms and bulk garments across India.",

    url: "https://tesapparels.com/t-shirt-manufacturer",

    siteName: "TES Apparels",

    type: "website",

    locale: "en_IN",
  },
};

export default function Page() {
  return (
    <>
      <LandingPage
        title="Premium T-Shirt Manufacturer in India"
        description="TES Apparels manufactures premium-quality corporate T-shirts, polo T-shirts, Dri-Fit sportswear, promotional apparel, customized uniforms, workwear and branded apparel for businesses across India."
        primaryKeyword="T-Shirt Manufacturer"
        highlights={[
          "Premium Quality Fabrics",
          "Corporate & Promotional Apparel",
          "Custom Printing & Embroidery",
          "Bulk Manufacturing",
          "PAN India Delivery",
          "Factory Direct Pricing",
        ]}
      />

      {/* Internal SEO Link */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2341]">
              Explore Our Corporate Polo T-Shirts
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              TES Apparels manufactures a wide range of corporate and
              customized T-shirts for businesses, institutions and
              organizations. Explore our{" "}
              <a
                href="/corporate-polo-t-shirts"
                className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
              >
                corporate polo T-shirts
              </a>{" "}
              for professional uniforms, company branding and bulk apparel
              requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}