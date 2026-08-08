const tshirtTypes = [
  {
    title: "Corporate T-Shirts",
    description:
      "Professional corporate T-shirts designed for employees, office staff, conferences, promotional events, and brand representation.",
    features: [
      "Premium Cotton & Pique",
      "Logo Embroidery",
      "Company Branding",
      "Bulk Orders",
    ],
  },
  {
    title: "Polo T-Shirts",
    description:
      "Classic polo T-shirts with superior stitching and premium fabrics for executive uniforms, hospitality, retail, and corporate teams.",
    features: [
      "Cotton Pique",
      "Custom Colours",
      "Embroidery",
      "Premium Finish",
    ],
  },
  {
    title: "Dri-Fit T-Shirts",
    description:
      "Moisture-wicking sportswear manufactured using performance fabrics for sports teams, marathons, gyms, schools, and outdoor events.",
    features: [
      "Quick Dry",
      "Breathable Fabric",
      "Sports Printing",
      "Lightweight",
    ],
  },
  {
    title: "Promotional T-Shirts",
    description:
      "Customized promotional apparel for exhibitions, marketing campaigns, product launches, roadshows, and corporate giveaways.",
    features: [
      "Screen Printing",
      "Budget Friendly",
      "Bulk Manufacturing",
      "Fast Delivery",
    ],
  },
  {
    title: "Uniform T-Shirts",
    description:
      "Uniform T-shirts for manufacturing industries, warehouses, educational institutions, hospitals, security agencies, and service organizations.",
    features: [
      "Durable Fabrics",
      "Corporate Identity",
      "Easy Maintenance",
      "Bulk Supply",
    ],
  },
  {
    title: "Sports T-Shirts",
    description:
      "High-performance sports jerseys and athletic T-shirts for schools, colleges, clubs, tournaments, fitness centres, and corporate sports events.",
    features: [
      "Sublimation",
      "Custom Names",
      "Numbers",
      "Performance Fit",
    ],
  },
];

export default function TShirtTypes() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-block rounded-full bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#C49A00]">
            Product Range
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#0B2341]">
            Types of T-Shirts We Manufacture
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            As a leading <strong>T-Shirt Manufacturer</strong>, TES Apparels
            produces premium-quality apparel for businesses, educational
            institutions, sports teams, hospitals, hospitality brands,
            manufacturing industries, retail chains, and promotional campaigns.
            Every garment is manufactured with precision, premium fabrics, and
            customized branding options.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {tshirtTypes.map((type) => (
            <div
              key={type.title}
              className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#0B2341]">
                {type.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {type.description}
              </p>

              <ul className="mt-6 space-y-2">

                {type.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <span className="text-[#C49A00] font-bold">✓</span>
                    {feature}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
