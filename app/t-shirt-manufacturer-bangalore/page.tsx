import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "T-Shirt Manufacturer in Bangalore | TES Apparels",
  description:
    "TES Apparels is a T-Shirt Manufacturer in Bangalore supplying corporate T-shirts, polo T-shirts, sportswear, Dri-Fit T-shirts, promotional apparel and customized garments for businesses across India.",
  keywords: [
    "T-Shirt Manufacturer in Bangalore",
    "T Shirt Manufacturer Bangalore",
    "T-Shirt Manufacturer Bangalore",
    "Corporate T-Shirt Manufacturer Bangalore",
    "Polo T-Shirt Manufacturer Bangalore",
    "Bulk T-Shirt Manufacturer Bangalore",
    "Custom T-Shirt Manufacturer Bangalore",
    "Sports T-Shirt Manufacturer Bangalore",
    "Dri-Fit T-Shirt Manufacturer Bangalore",
    "Corporate Uniform Manufacturer Bangalore",
    "Promotional T-Shirt Manufacturer Bangalore",
    "TES Apparels",
  ],
  alternates: {
    canonical: "/t-shirt-manufacturer-bangalore",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "T-Shirt Manufacturer in Bangalore | TES Apparels",
    description:
      "Premium corporate T-shirts, polo T-shirts, sportswear, Dri-Fit T-shirts, promotional apparel and customized garments manufactured in Bangalore by TES Apparels.",
    url: "https://tesapparels.com/t-shirt-manufacturer-bangalore",
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-[#0B2341]">
      {/* Hero Section */}
      <section className="bg-[#0B2341] px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
            TES Apparels
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            T-Shirt Manufacturer in Bangalore
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
            TES Apparels manufactures premium-quality corporate T-shirts,
            polo T-shirts, sportswear, Dri-Fit T-shirts, promotional apparel
            and customized garments for businesses, institutions and
            organizations in Bangalore and across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#contact"
              className="rounded-md bg-[#C49A00] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Request a Quote
            </a>

            <a
              href="tel:+919880038910"
              className="rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Call +91 9880038910
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Premium T-Shirt Manufacturing in Bangalore
          </h2>

          <div className="mt-6 max-w-4xl space-y-5 text-lg leading-8 text-gray-700">
            <p>
              TES Apparels is a Bangalore-based apparel manufacturer providing
              bulk T-shirt and customized apparel solutions for companies,
              institutions, sports teams, schools and organizations.
            </p>

            <p>
              We manufacture corporate T-shirts, polo T-shirts, sports
              T-shirts, Dri-Fit apparel, promotional garments and customized
              uniforms based on your requirements for fabric, color, size,
              branding and quantity.
            </p>

            <p>
              Our focus is on consistent quality, professional finishing,
              reliable production and practical solutions for bulk apparel
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            T-Shirts and Apparel We Manufacture
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Our manufacturing capabilities cover a range of corporate,
            promotional, sports and customized apparel requirements.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Corporate T-Shirts",
                description:
                  "Professional T-shirts for employees, corporate events, campaigns, teams and company branding.",
                href: "/t-shirt-manufacturer",
              },
              {
                title: "Polo T-Shirts",
                description:
                  "Customized polo T-shirts suitable for corporate uniforms, staff apparel and promotional requirements.",
                href: "/corporate-polo-t-shirts",
              },
              {
                title: "Sports T-Shirts",
                description:
                  "Sports and team apparel designed for comfort, movement and customized team branding.",
                href: "/sports-t-shirts",
              },
              {
                title: "Dri-Fit T-Shirts",
                description:
                  "Lightweight performance apparel for sports, fitness, outdoor activities and promotional campaigns.",
                href: "/dri-fit-t-shirts",
              },
              {
                title: "Corporate Uniforms",
                description:
                  "Customized corporate uniform solutions for businesses requiring consistent professional apparel.",
                href: "/corporate-uniform-manufacturer",
              },
              {
                title: "Promotional Apparel",
                description:
                  "Branded T-shirts and apparel for marketing campaigns, events, product promotions and corporate activities.",
                href: "/t-shirt-printing",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-[#0B2341]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>

                <span className="mt-4 inline-block font-semibold text-[#C49A00]">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Customized T-Shirt Manufacturing
          </h2>

          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-lg leading-8 text-gray-700">
                Businesses often require apparel that matches their brand
                identity. TES Apparels supports customized requirements for
                colors, fabrics, sizes, branding and finishing.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-700">
                Depending on the project, apparel can be customized with
                printing, embroidery, logos and other branding requirements.
              </p>
            </div>

            <div className="rounded-xl bg-[#0B2341] p-8 text-white">
              <h3 className="text-2xl font-bold">
                Branding & Finishing Options
              </h3>

              <ul className="mt-6 space-y-4 text-white/90">
                <li>✓ Custom colors and sizes</li>
                <li>✓ Corporate logos and branding</li>
                <li>✓ Screen and other printing requirements</li>
                <li>✓ Embroidery</li>
                <li>✓ Customized uniforms</li>
                <li>✓ Bulk production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why TES */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Why Choose TES Apparels?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Bangalore-based apparel manufacturer",
              "Corporate and promotional apparel expertise",
              "Customized manufacturing solutions",
              "Bulk apparel production",
              "Printing and embroidery support",
              "PAN India delivery",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="text-2xl text-[#C49A00]">✓</div>
                <h3 className="mt-3 font-semibold text-[#0B2341]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Apparel Solutions for Different Requirements
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-gray-700">
            TES Apparels supplies customized apparel for businesses,
            institutions, sports teams, schools, promotional campaigns and
            other organizational requirements.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Corporate Offices",
              "Manufacturing Companies",
              "Startups",
              "Schools",
              "Sports Teams",
              "Events",
              "Promotional Campaigns",
              "Institutions",
              "Retail & Brands",
            ].map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-sm font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bangalore */}
      <section className="bg-[#0B2341] px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Serving Businesses in Bangalore
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/85">
            Located in Basaveshwar Nagar, Bengaluru, TES Apparels serves
            businesses and organizations looking for dependable T-shirt and
            apparel manufacturing solutions in Bangalore. We also support
            apparel requirements from customers across India.
          </p>

          <div className="mt-8 rounded-xl border border-white/20 bg-white/10 p-6">
            <h3 className="text-xl font-bold">TES Apparels</h3>

            <p className="mt-3 leading-7 text-white/80">
              No.483, 2nd Floor, 3rd Stage,
              <br />
              Basaveshwar Nagar,
              <br />
              Bengaluru – 560079, Karnataka
            </p>

            <p className="mt-4 text-white/90">
              Phone:{" "}
              <a
                href="tel:+919880038910"
                className="font-semibold text-[#C49A00]"
              >
                +91 9880038910
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-6">
            <div>
              <h3 className="text-xl font-bold">
                Where is TES Apparels located?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                TES Apparels is located in Basaveshwar Nagar, Bengaluru,
                Karnataka.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                What types of T-shirts does TES Apparels manufacture?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                TES Apparels manufactures corporate T-shirts, polo T-shirts,
                sports T-shirts, Dri-Fit apparel, promotional T-shirts and
                customized garments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Can T-shirts be customized with company branding?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. Apparel can be customized according to requirements for
                branding, colors, sizes, printing and embroidery.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Does TES Apparels supply outside Bangalore?
              </h3>
              <p className="mt-2 leading-7 text-gray-700">
                Yes. TES Apparels provides apparel manufacturing and delivery
                solutions for customers across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Looking for a T-Shirt Manufacturer in Bangalore?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Contact TES Apparels to discuss your corporate, promotional,
            sportswear or customized apparel requirements.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/#contact"
              className="rounded-md bg-[#0B2341] px-7 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Send an Enquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}