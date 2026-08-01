import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dhanush Dhanu",
      company: "Corporate Client",
      review:
        "Outstanding experience with TES APPARELS. The corporate uniforms were of excellent quality, perfectly fitted and delivered on schedule. The team handled our bulk requirement professionally.",
    },
    {
      name: "Jeevan Solorider",
      company: "Corporate Client",
      review:
        "Excellent quality jackets and laptop bags with premium finishing and customization. Attention to detail, embroidery quality and timely delivery exceeded our expectations.",
    },
    {
      name: "Daniel Goswami",
      company: "Sports Merchandise",
      review:
        "Great experience working with TES APPARELS. High-quality jerseys and sportswear delivered with excellent service. A reliable partner for customized apparel.",
    },
  ];

  return (
    <section className="py-12 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-center text-[#0B2341]">
          What Our Clients Say
        </h2>

        <div className="flex justify-center items-center gap-2 mt-3 mb-8">
          <span className="text-yellow-500 text-xl">★★★★★</span>

          <span className="text-sm font-semibold text-gray-700">
            Trusted by Customers Across India
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-5">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 border border-gray-100"
            >

              <div className="flex justify-between items-center mb-4">

                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i)=>(
                    <Star
                      key={i}
                      size={15}
                      className="fill-[#C49A00] text-[#C49A00]"
                    />
                  ))}
                </div>

                <span className="text-xs font-semibold text-[#4285F4]">
                  Google Review
                </span>

              </div>

              <div className="flex items-center gap-3 mb-4">

                <div className="w-11 h-11 rounded-full bg-[#0B2341] text-white flex items-center justify-center font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h3 className="font-semibold text-[#0B2341]">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {item.company}
                  </p>

                </div>

              </div>

              <p className="text-sm leading-6 text-gray-600 italic">
                "{item.review}"
              </p>

              <div className="mt-5 pt-4 border-t">

                <span className="text-xs text-green-600 font-semibold">
                  ✓ Verified Customer
                </span>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-8">

          <a
            href="https://share.google/xcM48mvCL7KRImTSE"
            target="_blank"
            className="text-[#0B2341] font-semibold hover:text-[#C49A00]"
          >
            Read More Reviews on Google →
          </a>

        </div>

      </div>
    </section>
  );
}