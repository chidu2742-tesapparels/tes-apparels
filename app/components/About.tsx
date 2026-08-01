import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div>
            <Image
  src="/about-new.jpg"
  alt="TES Apparels"
  width={700}
  height={700}
  priority
  className="rounded-3xl shadow-xl object-cover w-full h-[380px]"
/>
          </div>

          {/* Right Content */}
          <div>

            <p className="uppercase tracking-[2px] text-[#C49A00] font-semibold mb-2">
              About TES APPARELS
            </p>

            <h2 className="text-1xl md:text-2xl font-bold text-[#0B2341] leading-tight mb-6">
              Premium Corporate Uniform
              <br />
              Manufacturer
            </h2>

            <p className="text-gray-600 leading-7 mb-6">
              TES APPARELS specialises in designing and manufacturing
              premium corporate uniforms, polo T-shirts, industrial
              workwear, hospitality uniforms and promotional apparel.
              We combine quality fabrics, modern manufacturing and
              customised branding to help businesses present a
              professional image.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">

              <div className="flex items-center gap-3">
                <span className="text-[#C49A00] text-lg">✔</span>
                <span className="text-sm">Premium Fabrics</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#C49A00] text-xl">✔</span>
                <span className="text-sm">Premium Fabrics</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#C49A00] text-xl">✔</span>
                <span className="text-sm">Premium Fabrics</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#C49A00] text-xl">✔</span>
                <span className="text-sm">Premium Fabrics</span>
              </div>

            </div>

            <a
              href="#contact"
              className="inline-block bg-[#C49A00] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#a88400] transition"
            >
              Request Quote →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}