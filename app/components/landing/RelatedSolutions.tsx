const solutions = [
  {
    title: "Corporate Polo T-Shirts",
    description:
      "Premium polo T-shirts for companies, teams, institutions, and corporate uniforms with custom branding.",
    href: "/corporate-polo-t-shirts",
  },
  {
    title: "Corporate Uniform Manufacturer",
    description:
      "Complete corporate uniform manufacturing solutions with customized garments for businesses across India.",
    href: "/corporate-uniform-manufacturer",
  },
  {
    title: "Dri-Fit T-Shirts",
    description:
      "Performance-oriented Dri-Fit T-shirts designed for sports teams, events, activewear, and promotional campaigns.",
    href: "/dri-fit-t-shirts",
  },
  {
    title: "Sports T-Shirts",
    description:
      "Customized sports T-shirts and team apparel manufactured for clubs, institutions, events, and organizations.",
    href: "/sports-t-shirts",
  },
  {
    title: "School Uniform Manufacturer",
    description:
      "Customized school uniform manufacturing for educational institutions with consistent quality and bulk production.",
    href: "/school-uniform-manufacturer",
  },
  {
    title: "T-Shirt Printing",
    description:
      "Professional T-shirt printing solutions including screen printing, DTF, heat transfer, and other branding methods.",
    href: "/t-shirt-printing",
  },
  {
    title: "T-Shirt Embroidery",
    description:
      "Premium embroidery solutions for company logos, institutional branding, uniforms, and customized apparel.",
    href: "/t-shirt-embroidery",
  },
  {
    title: "T-Shirt Manufacturer in Bangalore",
    description:
      "Explore our Bengaluru-based T-shirt manufacturing capabilities for corporate, promotional, sports, and customized apparel.",
    href: "/t-shirt-manufacturer-bangalore",
  },
];

export default function RelatedSolutions() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-block rounded-full bg-[#0B2341]/10 px-4 py-2 text-sm font-semibold text-[#0B2341]">
            Explore Our Solutions
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#0B2341] md:text-5xl">
            Related Apparel Manufacturing Solutions
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore our specialized manufacturing solutions for corporate,
            sports, institutional, promotional, and customized apparel
            requirements.
          </p>

        </div>

        {/* Links */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {solutions.map((solution) => (
            <a
              key={solution.href}
              href={solution.href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C49A00] hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">

                <h3 className="text-lg font-bold leading-7 text-[#0B2341] transition group-hover:text-[#C49A00]">
                  {solution.title}
                </h3>

                <span
                  className="mt-1 shrink-0 text-xl text-[#C49A00] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>

              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {solution.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-[#0B2341]">
                Explore solution →
              </span>
            </a>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">

          <p className="text-slate-600">
            Looking for a customized apparel manufacturing solution?
          </p>

          <a
            href="/#contact"
            className="mt-4 inline-flex rounded-lg bg-[#C49A00] px-7 py-3.5 font-semibold text-[#0B2341] transition hover:opacity-90"
          >
            Discuss Your Requirement
          </a>

        </div>

      </div>
    </section>
  );
}