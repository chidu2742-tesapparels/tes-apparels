const qualityChecks = [
  {
    title: "Fabric Quality Inspection",
    description:
      "We inspect incoming fabrics for quality, GSM, colour consistency, texture, and suitability for the intended garment before production begins.",
  },
  {
    title: "Pattern & Measurement Check",
    description:
      "Garment patterns and measurements are checked carefully to maintain consistent sizing and fit across the production batch.",
  },
  {
    title: "Stitching & Construction",
    description:
      "Our production team checks stitching quality, seams, collars, sleeves, hems, and overall garment construction for consistency and durability.",
  },
  {
    title: "Printing & Embroidery Inspection",
    description:
      "Customized logos and artwork are inspected for correct placement, colour, clarity, stitching quality, and overall finish.",
  },
  {
    title: "Garment Finishing",
    description:
      "Finished garments are checked for loose threads, stains, visible defects, uneven stitching, and other finishing issues before packing.",
  },
  {
    title: "Final Quantity & Packing Check",
    description:
      "Before dispatch, garments are checked against the order requirements, size quantities, customization details, and packing instructions.",
  },
];

export default function QualityAssurance() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-block rounded-full bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#C49A00]">
            Quality Assurance
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#0B2341] md:text-5xl">
            Quality Control at Every Stage
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Quality is an important part of every garment we manufacture.
            From fabric selection to final packing, our production process
            includes multiple checks designed to maintain consistency,
            professional finishing, and reliable bulk-order quality.
          </p>

        </div>

        {/* Quality Checks */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {qualityChecks.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B2341] text-lg font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0B2341]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Trust Message */}
        <div className="mt-16 rounded-2xl bg-[#0B2341] px-8 py-10 text-center text-white md:px-12">

          <h3 className="text-2xl font-bold md:text-3xl">
            Built for Consistent Bulk Manufacturing
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-200">
            Whether you require corporate T-shirts, polo T-shirts, sportswear,
            promotional apparel, or customized uniforms, our quality checks
            help maintain consistency across your order.
          </p>

        </div>

      </div>
    </section>
  );
}
