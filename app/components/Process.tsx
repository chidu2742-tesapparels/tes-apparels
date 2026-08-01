import {
  ClipboardCheck,
  PencilRuler,
  Scissors,
  Factory,
  BadgeCheck,
  Truck,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      title: "Requirement",
      description: "Understanding your uniform requirements and branding needs.",
      icon: <ClipboardCheck size={18} />,
    },
    {
      title: "Design",
      description: "Creating designs, fabric selection and logo placement.",
      icon: <PencilRuler size={18} />,
    },
    {
      title: "Production",
      description: "Precision cutting, stitching and manufacturing.",
      icon: <Scissors size={18} />,
    },
    {
      title: "Manufacturing",
      description: "Bulk production with strict quality standards.",
      icon: <Factory size={18} />,
    },
    {
      title: "Quality Check",
      description: "Every garment undergoes detailed inspection.",
      icon: <BadgeCheck size={18} />,
    },
    {
      title: "Delivery",
      description: "Safe packaging and on-time delivery across India.",
      icon: <Truck size={18} />,
    },
  ];

  return (
    <section className="py-10 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-center text-[#0B2341] mb-2">
          Our Manufacturing Process
        </h2>

        <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-6 leading-6">
          Every order follows a systematic process to ensure premium quality,
          perfect finishing and timely delivery.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 p-4"
            >

              <div className="absolute -top-3 left-4 w-7 h-7 rounded-full bg-[#C49A00] text-white flex items-center justify-center text-xs font-bold">
                {index + 1}
              </div>

              <div className="w-10 h-10 rounded-full bg-[#0B2341] text-white flex items-center justify-center mt-2 mb-3">
                {step.icon}
              </div>

              <h3 className="text-base font-bold text-[#0B2341] mb-2">
                {step.title}
              </h3>

              <p className="text-xs text-gray-600 leading-5">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}