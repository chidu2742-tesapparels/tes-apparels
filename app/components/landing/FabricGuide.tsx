const fabrics = [
  {
    name: "100% Cotton",
    bestFor: "Corporate Wear, Premium T-Shirts, Casual Apparel",
    features: [
      "Soft & breathable",
      "Excellent comfort",
      "Natural fabric",
      "Premium appearance",
    ],
  },
  {
    name: "Cotton Pique",
    bestFor: "Polo T-Shirts, Corporate Uniforms",
    features: [
      "Textured premium finish",
      "Excellent durability",
      "Professional look",
      "Comfortable all day",
    ],
  },
  {
    name: "Dri-Fit Polyester",
    bestFor: "Sports, Events, Marathons, Outdoor Teams",
    features: [
      "Moisture wicking",
      "Quick drying",
      "Lightweight",
      "Ideal for active wear",
    ],
  },
  {
    name: "Poly Cotton",
    bestFor: "Industrial Uniforms, Staff Uniforms",
    features: [
      "Wrinkle resistant",
      "Durable",
      "Easy maintenance",
      "Cost effective",
    ],
  },
  {
    name: "Interlock Knit",
    bestFor: "Premium Corporate Apparel",
    features: [
      "Smooth finish",
      "Excellent shape retention",
      "Soft feel",
      "Long-lasting quality",
    ],
  },
  {
    name: "French Terry",
    bestFor: "Premium Jackets & Sweatshirts",
    features: [
      "Soft inner texture",
      "Warm & comfortable",
      "Premium finish",
      "Excellent durability",
    ],
  },
];

export default function FabricGuide() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block rounded-full bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#C49A00]">
            Fabric Guide
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#0B2341]">
            Choose the Right Fabric for Your T-Shirts
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Selecting the right fabric is essential for comfort, durability,
            appearance, and long-term performance. At TES Apparels, we
            manufacture T-shirts using premium-quality fabrics suitable for
            corporate uniforms, promotional events, sports teams, educational
            institutions, hospitality, healthcare, and industrial workwear.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {fabrics.map((fabric) => (
            <div
              key={fabric.name}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-[#0B2341]">
                {fabric.name}
              </h3>

              <p className="mt-3 font-semibold text-[#C49A00]">
                Best For
              </p>

              <p className="text-slate-600">
                {fabric.bestFor}
              </p>

              <div className="mt-6 space-y-3">
                {fabric.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-600 font-bold">✓</span>

                    <span className="text-slate-600">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}