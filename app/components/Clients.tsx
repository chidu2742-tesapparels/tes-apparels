export default function Clients() {
  const clients = [
    "BOSCH",
    "TATA",
    "Infosys",
    "ABB",
    "Toyota",
    "Wipro",
    "TVS",
    "Hitachi",
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-[#0B2341] mb-5">
          Trusted by Leading Businesses
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-20">
          We proudly manufacture premium corporate uniforms for companies,
          industries, institutions and organizations across India.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {clients.map((client) => (

            <div
              key={client}
              className="bg-[#F8F9FB] rounded-2xl h-36 flex items-center justify-center shadow hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold tracking-wider text-gray-700">
                {client}
              </h3>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}