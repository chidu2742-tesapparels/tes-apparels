import { Award, Users, BriefcaseBusiness, MapPin } from "lucide-react";

export default function StatsBar() {
  const stats = [
    {
      number: "10+",
      title: "Years Experience",
      icon: <Award size={18} />,
    },
    {
      number: "500+",
      title: "Happy Clients",
      icon: <Users size={18} />,
    },
    {
      number: "2 Million+",
      title: "Garments Manufactured",
      icon: <BriefcaseBusiness size={18} />,
    },
    {
      number: "100+",
      title: "Cities Served",
      icon: <MapPin size={18} />,
    },
  ];

  return (
    <section className="bg-[#0B2341] border-t border-[#C49A00] py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={item.title}
              className={`text-center py-1 ${
                index !== stats.length - 1
                  ? "md:border-r border-white/10"
                  : ""
              }`}
            >
              <div className="flex justify-center text-[#C49A00] mb-1">
                {item.icon}
              </div>

              <h3 className="text-lg md:text-xl font-bold text-white">
                {item.number}
              </h3>

              <p className="text-[10px] md:text-xs text-gray-300">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}