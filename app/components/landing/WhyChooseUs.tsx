const features = [
  {
    title: "Premium Quality Fabrics",
    description:
      "We source high-quality cotton, polyester, Dri-Fit, and blended fabrics for superior comfort and durability.",
  },
  {
    title: "Complete Customization",
    description:
      "Choose from embroidery, screen printing, DTF, sublimation, heat transfer, and custom branding options.",
  },
  {
    title: "Bulk Manufacturing",
    description:
      "Efficient production capacity for small, medium, and large corporate orders with consistent quality.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Factory-direct pricing with excellent value for businesses, institutions, and distributors.",
  },
  {
    title: "Quality Assurance",
    description:
      "Every garment undergoes strict quality checks before dispatch to ensure premium standards.",
  },
  {
    title: "PAN India Delivery",
    description:
      "Reliable logistics network delivering customized apparel across India on schedule.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose TES Apparels?
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            We combine premium manufacturing, modern customization
            technologies, and customer-focused service to deliver apparel
            solutions trusted by businesses across India.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0B2341]">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}