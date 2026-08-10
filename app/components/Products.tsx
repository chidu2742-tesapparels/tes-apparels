import Link from "next/link";

export default function Products() {
  const products = [
    {
      name: "Polo T-Shirts",
      image: "/products/polo.jpg",
      link: "/products/polo-tshirts",
    },
    {
      name: "Round Neck T-Shirts",
      image: "/products/round-neck.jpg",
      link: "/products/round-neck-tshirts",
    },
    {
      name: "Sports / Dri-Fit T-Shirts",
      image: "/products/dri-fit.jpg",
      link: "/products/sports-dri-fit-tshirts",
    },
    {
      name: "Formal Shirts",
      image: "/products/corporate-shirt.jpg",
      link: "/products/formal-shirts",
    },
    {
      name: "Hoodies",
      image: "/products/hoodie.jpg",
      link: "/products/hoodies",
    },
    {
      name: "Jackets",
      image: "/products/jacket.jpg",
      link: "/products/jackets",
    },
    {
      name: "Bags",
      image: "/products/bag.jpg",
      link: "/products/bags",
    },
    {
      name: "Caps",
      image: "/products/cap.jpg",
      link: "/products/caps",
    },
    {
      name: "School Uniforms",
      image: "/products/school.jpg",
      link: "/products/school-uniforms",
    },
    {
      name: "Industrial Uniforms",
      image: "/products/uniform.jpg",
      link: "/products/industrial-uniforms",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[3px] text-[#C49A00] font-semibold text-xs">
            OUR COLLECTION
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#0B2341]">
            Our Product Range
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-600">
            Premium uniforms and corporate apparel manufactured with superior
            fabrics, modern production techniques and customized branding.
          </p>

          <p className="mt-4 max-w-3xl mx-auto text-sm leading-6 text-gray-600">
            Looking for bulk apparel manufacturing? Explore our{" "}
            <Link
              href="/t-shirt-manufacturer"
              className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
            >
              T-Shirt Manufacturer
            </Link>{" "}
            services for corporate, promotional, sports and customized
            apparel requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-36 object-contain p-3"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-[#0B2341] h-10 flex items-center justify-center">
                  {product.name}
                </h3>

                <Link
                  href={product.link}
                  className="inline-block mt-3 bg-[#C49A00] hover:bg-[#a88400] text-white text-xs px-4 py-2 rounded-lg transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}