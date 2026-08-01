export default function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Happy Clients",
    },
    {
      number: "15+",
      title: "Years Experience",
    },
    {
      number: "10,000+",
      title: "Garments Delivered",
    },
    {
      number: "100%",
      title: "Quality Commitment",
    },
  ];

  return (
    <section className="bg-[#333333] py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#C49A00]">
                {stat.number}
              </h3>

              <p className="text-white mt-2 text-sm md:text-base">
                {stat.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}