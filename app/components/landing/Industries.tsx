const industries = [
  {
    title: "Corporate Offices",
    description: "Professional uniforms, polo T-shirts and employee apparel for businesses."
  },
  {
    title: "Educational Institutions",
    description: "School uniforms, college apparel, sports uniforms and event T-shirts."
  },
  {
    title: "Healthcare",
    description: "Hospital uniforms, lab coats, scrubs and healthcare apparel."
  },
  {
    title: "Hotels & Hospitality",
    description: "Premium uniforms for hotels, restaurants, resorts and catering staff."
  },
  {
    title: "Manufacturing",
    description: "Industrial uniforms, safety apparel and workwear."
  },
  {
    title: "Retail & Events",
    description: "Promotional T-shirts, event uniforms and branded apparel."
  },
];

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#0B2341]">
            Industries We Serve
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            TES Apparels delivers customized apparel solutions across multiple
            industries with consistent quality and dependable delivery.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0B2341]">
                {industry.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {industry.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
