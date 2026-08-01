export default function WhyChoose() {
  const features = [
    {
      title: "Premium Quality",
      description: "High-quality fabrics with superior stitching and finishing.",
      icon: "⭐",
    },
    {
      title: "Custom Branding",
      description: "Embroidery, screen printing and customised logo solutions.",
      icon: "🎨",
    },
    {
      title: "Bulk Manufacturing",
      description: "Reliable production capacity for companies and institutions.",
      icon: "🏭",
    },
    {
      title: "On-Time Delivery",
      description: "Fast production and timely delivery across India.",
      icon: "🚚",
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-center text-[#333333] mb-8">
          Why Choose TES APPARELS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl shadow-md p-5 text-center hover:-translate-y-1 hover:shadow-lg transition duration-300"
            >
              <div className="text-3xl mb-3">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-[#333333]">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}