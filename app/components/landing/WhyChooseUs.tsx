export default function WhyChooseUs() {
  const features = [
    {
      title: "Premium Fabric Quality",
      description:
        "We manufacture T-shirts using premium cotton, cotton pique, poly-cotton, polyester, and Dri-Fit fabrics to deliver exceptional comfort, durability, and long-lasting performance.",
    },
    {
      title: "Complete Customization",
      description:
        "From logo embroidery and screen printing to DTF, sublimation, heat transfer, custom colours, neck labels, and packaging, every garment is tailored to your brand.",
    },
    {
      title: "Bulk Manufacturing Expertise",
      description:
        "Whether your requirement is 100 pieces or thousands of garments, our manufacturing process ensures consistent quality, timely production, and dependable delivery.",
    },
    {
      title: "Strict Quality Assurance",
      description:
        "Every T-shirt passes through multiple quality inspections covering stitching, measurements, fabric quality, colour consistency, printing accuracy, and finishing.",
    },
    {
      title: "Competitive Factory Pricing",
      description:
        "As a manufacturer, we offer competitive pricing without compromising on quality, making us a preferred apparel partner for businesses and institutions.",
    },
    {
      title: "PAN India Delivery",
      description:
        "Headquartered in Bengaluru, TES Apparels supplies premium corporate uniforms, promotional apparel, sportswear, and customised T-shirts to customers across India.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-block rounded-full bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#C49A00]">
            Why TES Apparels
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#0B2341]">
            Your Trusted T-Shirt Manufacturing Partner
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            TES Apparels is a trusted <strong>T-Shirt Manufacturer</strong>
            specializing in premium corporate T-shirts, polo T-shirts,
            Dri-Fit sportswear, promotional apparel, uniforms, and customised
            garments. We combine modern manufacturing, premium materials,
            advanced branding techniques, and reliable customer service to help
            businesses build a professional brand image.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C49A00] text-xl font-bold text-[#0B2341]">
                ✓
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#0B2341]">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

        <div className="mt-20 rounded-3xl bg-[#0B2341] px-8 py-12 text-white">

          <div className="grid gap-10 md:grid-cols-4 text-center">

            <div>
              <h3 className="text-4xl font-bold text-[#C49A00]">24+</h3>
              <p className="mt-2 text-slate-300">
                Years of Industry Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C49A00]">Premium</h3>
              <p className="mt-2 text-slate-300">
                Quality Manufacturing
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C49A00]">Bulk</h3>
              <p className="mt-2 text-slate-300">
                Production Capability
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#C49A00]">PAN India</h3>
              <p className="mt-2 text-slate-300">
                Delivery & Support
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}