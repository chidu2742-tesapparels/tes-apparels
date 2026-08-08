const advantages = [
  {
    number: "01",
    title: "Factory-Direct Manufacturing",
    description:
      "Work directly with TES Apparels for bulk T-shirt manufacturing without unnecessary intermediaries. This helps businesses achieve better control over quality, customization, pricing, and delivery.",
  },
  {
    number: "02",
    title: "Consistent Bulk Quality",
    description:
      "Our production process is designed to maintain consistent fabric quality, sizing, stitching, colour, finishing, and branding across large-volume orders.",
  },
  {
    number: "03",
    title: "Complete Custom Branding",
    description:
      "Create apparel that represents your organization with embroidery, screen printing, DTF, heat transfer, sublimation, and other suitable branding solutions.",
  },
  {
    number: "04",
    title: "Multiple Fabric Options",
    description:
      "Select fabrics according to your application, comfort requirements, durability expectations, climate, branding needs, and budget.",
  },
  {
    number: "05",
    title: "Flexible Bulk Production",
    description:
      "We support corporate, promotional, institutional, sports, and customized apparel requirements across different order sizes and specifications.",
  },
  {
    number: "06",
    title: "Reliable PAN India Delivery",
    description:
      "From Bengaluru to businesses across India, we coordinate production, packing, and dispatch to help ensure your apparel reaches you on schedule.",
  },
];

export default function BusinessAdvantages() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-[#0B2341]/10 px-4 py-2 text-sm font-semibold text-[#0B2341]">
            Built for Business
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B2341] md:text-5xl">
            Why Businesses Choose TES Apparels
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            More than just a T-shirt supplier, TES Apparels provides a
            complete manufacturing solution for organizations looking for
            dependable quality, customization, bulk production, and
            professional service.
          </p>

        </div>

        {/* Advantages */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {advantages.map((advantage) => (
            <article
              key={advantage.number}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Number */}
              <div className="flex items-center justify-between">

                <span className="text-4xl font-extrabold text-[#C49A00]/30">
                  {advantage.number}
                </span>

                <div className="h-1 w-12 rounded-full bg-[#C49A00] transition-all duration-300 group-hover:w-16" />

              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-[#0B2341]">
                {advantage.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-slate-600">
                {advantage.description}
              </p>

            </article>
          ))}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 rounded-2xl bg-[#0B2341] px-8 py-10 text-center text-white shadow-xl md:px-12">

          <h3 className="text-2xl font-bold md:text-3xl">
            Looking for a reliable T-Shirt Manufacturing Partner?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-200">
            Share your product requirements, quantity, fabric preference,
            branding requirements, and delivery location with our team.
            We can help you plan the right apparel solution for your
            organization.
          </p>

          <a
            href="/#contact"
            className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-7 py-3.5 font-semibold text-[#0B2341] transition hover:opacity-90"
          >
            Request a Manufacturing Quote
          </a>

        </div>

      </div>
    </section>
  );
}