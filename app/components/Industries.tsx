import {
  Building2,
  Factory,
  Hotel,
  ShieldCheck,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Corporate Offices",
      icon: <Building2 size={18} />,
      description:
        "Premium uniforms for offices, IT companies, banks and corporate businesses.",
    },
    {
      title: "Manufacturing",
      icon: <Factory size={18} />,
      description:
        "Industrial workwear designed for factories and production units.",
    },
    {
      title: "Hospitality",
      icon: <Hotel size={18} />,
      description:
        "Elegant uniforms for hotels, restaurants and hospitality professionals.",
    },
    {
      title: "Healthcare",
      icon: <Stethoscope size={18} />,
      description:
        "Medical scrubs, lab coats and healthcare uniforms.",
    },
    {
      title: "Educational Institutions",
      icon: <GraduationCap size={18} />,
      description:
        "School, college and institutional uniforms with premium quality.",
    },
    {
      title: "Security Services",
      icon: <ShieldCheck size={18} />,
      description:
        "Professional security uniforms designed for comfort and durability.",
    },
  ];

  return (
    <section
      id="industries"
      className="py-10 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-center text-[#0B2341] mb-2">
          Industries We Serve
        </h2>

        <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-6 leading-6">
          We manufacture premium uniforms for businesses and institutions
          across multiple industries with unmatched quality and customization.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {industries.map((item) => (

            <div
              key={item.title}
              className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 border border-gray-100"
            >

              <div className="w-10 h-10 rounded-full bg-[#C49A00] text-white flex items-center justify-center mb-3">
                {item.icon}
              </div>

              <h3 className="text-base font-bold text-[#0B2341] mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-gray-600 leading-5">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}