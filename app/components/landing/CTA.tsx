export default function CTA() {
  return (
    <section className="bg-[#0B2341] text-white py-20">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold">
          Looking for a Reliable Apparel Manufacturing Partner?
        </h2>

        <p className="mt-6 text-xl text-slate-300">
          TES Apparels manufactures premium corporate uniforms, polo T-shirts,
          sportswear, promotional apparel and customized garments for
          businesses across India.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href="/#contact"
            className="rounded-lg bg-[#C49A00] px-8 py-4 font-semibold text-[#0B2341] hover:opacity-90 transition"
          >
            Request a Quote
          </a>

          <a
            href="tel:+919880038910"
            className="rounded-lg border border-white px-8 py-4 font-semibold hover:bg-white hover:text-[#0B2341] transition"
          >
            Call +91 98800 38910
          </a>

        </div>

      </div>

    </section>
  );
}
