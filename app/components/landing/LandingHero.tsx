import { HeroProps } from "./types";

export default function LandingHero({
  title,
  description,
  primaryKeyword,
  heroImage,
  highlights = [],
}: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#0B2341] via-[#12345A] to-[#0B2341] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-block rounded-full bg-[#C49A00] px-4 py-2 text-sm font-semibold text-[#0B2341]">
              Premium Apparel Manufacturing
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight">
              {title}
            </h1>

            <p className="mt-6 text-xl leading-8 text-slate-200">
              {description}
            </p>

            <p className="mt-6 text-lg text-slate-300">
              Trusted by businesses across India for premium-quality{" "}
              <strong>{primaryKeyword}</strong> with customized branding,
              superior fabrics and reliable bulk manufacturing.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="/#contact"
                className="rounded-lg bg-[#C49A00] px-8 py-4 font-semibold text-[#0B2341] transition hover:opacity-90"
              >
                Request a Quote
              </a>

              <a
                href="tel:+919880038910"
                className="rounded-lg border border-white px-8 py-4 font-semibold hover:bg-white hover:text-[#0B2341] transition"
              >
                Call Now
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl bg-white/10 backdrop-blur-md p-8 shadow-2xl">

            <h2 className="text-2xl font-bold">
              Why Choose TES Apparels?
            </h2>

            <div className="mt-8 grid gap-4">

              {(highlights.length
                ? highlights
                : [
                    "Premium Quality Fabrics",
                    "Corporate & Sports Apparel",
                    "Custom Printing & Embroidery",
                    "Bulk Manufacturing",
                    "Competitive Pricing",
                    "PAN India Delivery",
                  ]).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-4"
                >
                  <span className="text-[#C49A00] text-xl">✓</span>

                  <span>{item}</span>
                </div>
              ))}

            </div>

            {heroImage && (
              <img
                src={heroImage}
                alt={title}
                className="mt-8 w-full rounded-2xl"
              />
            )}

          </div>

        </div>

      </div>
    </section>
  );
}