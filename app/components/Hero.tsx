export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex items-center"
      style={{
        backgroundImage: "url('/hero-banner.png')", // Change to .jpg if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full pt-12">

        <div className="max-w-2xl">

          <p className="uppercase tracking-[3px] text-[#C49A00] font-semibold mb-4">
            PREMIUM CORPORATE APPAREL MANUFACTURER
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">
  <span className="text-white">
    Corporate Uniforms
  </span>
  <br />
  <span className="text-[#C49A00]">
    That Build Your Brand
  </span>
</h1>

          <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8">
            Manufacturing premium corporate uniforms, polo T-shirts,
            industrial workwear, safety apparel and promotional clothing
            for businesses across India.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#products"
              className="bg-[#C49A00] text-white px-8 py-4 rounded-lg font-bold hover:bg-yellow-600 transition"
            >
              Explore Products →
            </a>

            <a
  href="#contact"
  className="bg-[#C49A00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
>
  Request Quote
</a>

          </div>

        </div>

      </div>
    </section>
  );
}