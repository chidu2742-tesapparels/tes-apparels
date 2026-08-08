const methods = [
  {
    title: "Screen Printing",
    description:
      "Ideal for bulk corporate uniforms, promotional T-shirts, events and marketing campaigns. Screen printing delivers vibrant colours, excellent durability and cost-effective branding for large orders.",
  },
  {
    title: "Embroidery",
    description:
      "Premium embroidered logos provide a professional appearance for corporate uniforms, hospitality staff, educational institutions and executive apparel.",
  },
  {
    title: "DTF Printing",
    description:
      "Direct-to-Film printing produces sharp, full-colour designs with outstanding detail. Perfect for complex logos, gradients and multi-colour artwork.",
  },
  {
    title: "Heat Transfer",
    description:
      "Suitable for names, numbers, small production runs and customized garments. Heat transfer provides flexibility with excellent print quality.",
  },
  {
    title: "Sublimation Printing",
    description:
      "Best suited for polyester and Dri-Fit sports apparel. Sublimation creates vibrant, fade-resistant prints without affecting fabric comfort.",
  },
  {
    title: "Reflective & Special Effects",
    description:
      "Reflective, puff, metallic and specialty printing options are available for safety garments, sportswear, promotional campaigns and premium branding.",
  },
];

export default function PrintingMethods() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="inline-block rounded-full bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#C49A00]">
            Branding Solutions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#0B2341]">
            T-Shirt Printing & Embroidery Services
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            TES Apparels offers complete garment branding solutions using modern
            printing and embroidery technologies. Whether you need premium
            embroidered corporate uniforms or vibrant promotional T-shirts, we
            recommend the most suitable branding technique based on your fabric,
            design and order quantity.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {methods.map((method) => (
            <div
              key={method.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-[#0B2341]">
                {method.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {method.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
