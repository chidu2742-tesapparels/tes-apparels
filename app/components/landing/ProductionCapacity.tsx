const capabilities = [
  {
    number: "01",
    title: "Bulk T-Shirt Manufacturing",
    description:
      "We support bulk requirements for corporate uniforms, promotional campaigns, events, sports teams, institutions, and other organizational apparel programs.",
  },
  {
    number: "02",
    title: "Flexible Order Quantities",
    description:
      "Our manufacturing approach is designed to accommodate different order sizes while maintaining consistent garment quality, sizing, colours, and branding.",
  },
  {
    number: "03",
    title: "Multiple Product Categories",
    description:
      "We manufacture a wide range of T-shirts including corporate polos, crew-neck T-shirts, sports T-shirts, Dri-Fit apparel, promotional T-shirts, and customized uniforms.",
  },
  {
    number: "04",
    title: "Custom Sizes & Designs",
    description:
      "Garments can be developed according to your required size specifications, colours, designs, branding requirements, and application.",
  },
  {
    number: "05",
    title: "Consistent Production",
    description:
      "Standardized production processes and quality checks help maintain consistency across bulk orders, making the garments suitable for organized corporate and institutional requirements.",
  },
  {
    number: "06",
    title: "Planned Production & Dispatch",
    description:
      "We coordinate production, quality inspection, packing, and dispatch according to the agreed order requirements and delivery schedule.",
  },
];

export default function ProductionCapacity() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-block rounded-full bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#C49A00]">
            Bulk Manufacturing
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#0B2341] md:text-5xl">
            Production Capacity for Bulk T-Shirt Orders
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            TES Apparels provides organized T-shirt manufacturing solutions
            for businesses, institutions, sports teams, schools, events, and
            other organizations requiring customized apparel in bulk.
          </p>

        </div>

        {/* Capability Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {capabilities.map((capability) => (
            <div
              key={capability.number}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B2341] text-sm font-bold text-white">
                  {capability.number}
                </div>

                <span className="text-3xl font-bold text-slate-200 transition group-hover:text-[#C49A00]/30">
                  +
                </span>

              </div>

              <h3 className="mt-7 text-xl font-bold text-[#0B2341]">
                {capability.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {capability.description}
              </p>

            </div>
          ))}

        </div>

        {/* Bulk Order Highlight */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-[#0B2341]">

          <div className="grid lg:grid-cols-2">

            {/* Left */}
            <div className="p-8 text-white md:p-12 lg:p-14">

              <span className="text-sm font-semibold uppercase tracking-wider text-[#C49A00]">
                Designed for Organizations
              </span>

              <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                Reliable Manufacturing for Bulk Apparel Requirements
              </h3>

              <p className="mt-6 leading-8 text-slate-200">
                From a coordinated corporate uniform program to a large
                promotional campaign, TES Apparels helps businesses manage
                their apparel requirements from product selection through
                manufacturing and dispatch.
              </p>

              <p className="mt-5 leading-8 text-slate-200">
                Our team can work with your requirements for fabric, colour,
                sizing, branding, quantity, packaging, and delivery schedule
                to develop an appropriate manufacturing plan.
              </p>

            </div>

            {/* Right */}
            <div className="bg-[#12345A] p-8 md:p-12 lg:p-14">

              <h4 className="text-2xl font-bold text-white">
                Ideal For
              </h4>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {[
                  "Corporate Uniforms",
                  "Promotional Campaigns",
                  "Sports Teams",
                  "Schools & Institutions",
                  "Events & Conferences",
                  "Dealers & Distributors",
                  "Workwear Programs",
                  "Customized Apparel",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm text-white"
                  >
                    <span className="font-bold text-[#C49A00]">
                      ✓
                    </span>

                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">

          <h3 className="text-2xl font-bold text-[#0B2341] md:text-3xl">
            Planning a Bulk T-Shirt Order?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Share your product, quantity, fabric, branding, and delivery
            requirements with our team to discuss your apparel requirement.
          </p>

          <a
            href="/#contact"
            className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-8 py-4 font-semibold text-[#0B2341] transition hover:opacity-90"
          >
            Request a Bulk Quote
          </a>

        </div>

      </div>
    </section>
  );
}