const manufacturingSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "We begin by understanding your requirements including garment type, fabric, colours, quantity, branding method, sizing, delivery timeline, and budget.",
  },
  {
    step: "02",
    title: "Fabric Selection",
    description:
      "Choose from premium Cotton, Cotton Pique, Poly Cotton, Dri-Fit Polyester, Interlock, French Terry, and other performance fabrics suitable for your application.",
  },
  {
    step: "03",
    title: "Pattern Making & Sampling",
    description:
      "Our design team prepares garment patterns and develops samples for approval to ensure the perfect fit, design, and finish before bulk production.",
  },
  {
    step: "04",
    title: "Cutting & Stitching",
    description:
      "Using modern cutting techniques and skilled tailoring, every garment is stitched with precision for durability, consistency, and professional appearance.",
  },
  {
    step: "05",
    title: "Printing & Embroidery",
    description:
      "Logos and artwork are applied using Screen Printing, Embroidery, DTF, Heat Transfer, Sublimation, or other suitable branding techniques.",
  },
  {
    step: "06",
    title: "Quality Inspection",
    description:
      "Every garment is inspected for fabric quality, measurements, stitching accuracy, colour consistency, branding quality, and finishing before packing.",
  },
  {
    step: "07",
    title: "Packing & Dispatch",
    description:
      "Finished garments are carefully packed, labelled, and dispatched through reliable logistics partners for safe and timely delivery across India.",
  },
];

export default function ManufacturingProcess() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block rounded-full bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#C49A00]">
            Our Process
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#0B2341]">
            Our Manufacturing Process
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every T-shirt manufactured by TES Apparels follows a structured
            production process to ensure premium quality, consistent finishing,
            and on-time delivery.
          </p>
        </div>

        <div className="mt-20 space-y-8">
          {manufacturingSteps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col md:flex-row gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:shadow-lg transition"
            >
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#0B2341] text-3xl font-bold text-[#C49A00]">
                {item.step}
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0B2341]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}