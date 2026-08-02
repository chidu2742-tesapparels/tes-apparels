import Image from "next/image";

export default function FeaturedProducts() {
  const featured = [
    {
      title: "Premium Polo T-Shirts",
      category: "Corporate Apparel",
      image: "/products/polo.jpg",
      description:
        "Premium cotton polo T-shirts with embroidery and custom branding.",
    },
    {
      title: "Corporate Shirts",
      category: "Executive Wear",
      image: "/products/corporate.jpg",
      description:
        "Professional formal shirts for offices, institutions and executives.",
    },
    {
  title: "Industrial Uniforms",
  category: "Workwear",
  image: "/products/uniform.jpg",
      description:
        "Durable industrial uniforms designed for manufacturing and engineering teams.",
    },
    {
      title: "Hospitality Uniforms",
      category: "Hospitality",
      image: "/products/hospitality.jpg",
      description:
        "Elegant uniforms for hotels, restaurants and hospitality professionals.",
    },
    {
      title: "Medical Uniforms",
      category: "Healthcare",
      image: "/products/medical.jpg",
      description:
        "Comfortable medical scrubs, lab coats and hospital uniforms.",
    },
    {
      title: "Security Uniforms",
      category: "Security",
      image: "/products/security.jpg",
      description:
        "Professional security uniforms with premium stitching and comfort.",
    },
  ];

  return (
    <section id="featured-products" className="py-14 bg-[#F8F9FB]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="uppercase tracking-[3px] text-[#C49A00] font-semibold text-lg">
            OUR COLLECTION
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#0B2341]">
            Featured Products
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-600">
            Premium corporate apparel designed to reflect your brand identity
            with quality fabrics and superior craftsmanship.
          </p>

        </div>

        {/* Products */}

        <div className="space-y-5">

          {featured.map((item) => (

            <div
              key={item.title}
              className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >

              {/* Image */}

              <div className="md:w-72 bg-gray-50 flex items-center justify-center p-4">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={350}
                  height={250}
                  className="w-full h-48 object-contain"
                />

              </div>

              {/* Content */}

              <div className="flex-1 p-6 flex flex-col justify-center">

                <span className="inline-block w-fit bg-[#C49A00]/10 text-[#C49A00] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold text-[#0B2341] mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-6 mb-5">
                  {item.description}
                </p>

                <button className="w-fit bg-[#0B2341] hover:bg-[#C49A00] text-white px-5 py-2 rounded-lg text-sm font-semibold transition">
                  Request Quote
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}