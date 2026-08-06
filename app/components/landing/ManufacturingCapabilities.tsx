const capabilities = [
  "Corporate T-Shirts",
  "Corporate Polo T-Shirts",
  "Sports T-Shirts",
  "Dri-Fit T-Shirts",
  "School Uniforms",
  "Corporate Uniforms",
  "Industrial Uniforms",
  "Hospital Uniforms",
  "Hospitality Uniforms",
  "Promotional Apparel",
  "Caps",
  "Jackets",
];

export default function ManufacturingCapabilities() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Manufacturing Capabilities
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            TES Apparels manufactures a wide range of premium apparel for
            corporate, educational, industrial, hospitality, healthcare,
            retail, and promotional applications.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#C49A00] text-xl">✓</span>

                <h3 className="font-semibold text-[#0B2341]">
                  {item}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}