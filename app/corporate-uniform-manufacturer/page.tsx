import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Uniform Manufacturer in Bangalore | TES Apparels",
  description:
    "TES Apparels is a corporate uniform manufacturer in Bangalore supplying customized employee uniforms, polo T-shirts, formal shirts, trousers, jackets, caps and bags for IT companies and corporate offices.",
  keywords: [
    "corporate uniform manufacturer in bangalore",
    "corporate uniform manufacturers in bangalore",
    "corporate uniform manufacturer bangalore",
    "corporate uniform suppliers in bangalore",
    "company uniform manufacturer in bangalore",
    "employee uniform manufacturer in bangalore",
    "office uniform manufacturer in bangalore",
    "corporate workwear manufacturer in bangalore",
    "customized corporate uniforms bangalore",
    "custom corporate uniform manufacturer bangalore",
    "bulk corporate uniform manufacturer bangalore",
    "IT company uniform manufacturer bangalore",
    "IT corporate uniform supplier bangalore",
    "employee uniform supplier bangalore",
    "corporate clothing manufacturer bangalore",
    "corporate apparel manufacturer bangalore",
    "corporate polo t shirt manufacturer bangalore",
    "uniform t shirt manufacturer bangalore",
    "corporate shirt manufacturer bangalore",
    "corporate uniform supplier in Karnataka",
    "corporate uniform manufacturer in Karnataka",
    "corporate uniform manufacturer in India",
  ],
  alternates: {
    canonical: "https://tesapparels.com/corporate-uniform-manufacturer",
  },
  openGraph: {
    title: "Corporate Uniform Manufacturer in Bangalore | TES Apparels",
    description:
      "Customized corporate uniforms for IT companies and offices in Bangalore including polo T-shirts, formal shirts, trousers, jackets, caps and bags.",
    url: "https://tesapparels.com/corporate-uniform-manufacturer",
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Uniform Manufacturer in Bangalore | TES Apparels",
    description:
      "Customized employee uniforms, corporate T-shirts, polo T-shirts, formal shirts, trousers, jackets, caps and bags for businesses in Bangalore.",
  },
};

const faqs = [
  {
    question: "Is TES Apparels a corporate uniform manufacturer in Bangalore?",
    answer:
      "Yes. TES Apparels is a Bangalore-based apparel manufacturer providing customized corporate uniforms and employee apparel for IT companies, corporate offices, businesses and organizations.",
  },
  {
    question: "What types of corporate uniforms does TES Apparels manufacture?",
    answer:
      "TES Apparels provides customized corporate uniform solutions including polo T-shirts, round-neck T-shirts, formal shirts, trousers, jackets, caps, bags and complete employee uniform programs.",
  },
  {
    question: "Can you manufacture uniforms for IT companies?",
    answer:
      "Yes. TES Apparels provides corporate apparel solutions for IT companies, technology businesses, startups and professional offices requiring branded employee uniforms and corporate clothing.",
  },
  {
    question: "Can corporate uniforms include our company logo?",
    answer:
      "Yes. Corporate uniforms can be customized with company logos and branding using suitable embroidery, printing and other branding methods depending on the garment and design.",
  },
  {
    question: "Can we choose the fabric and colours?",
    answer:
      "Yes. Corporate uniform specifications can be discussed based on fabric type, GSM, colour, fit, size requirements, branding method and intended use.",
  },
  {
    question: "Do you supply uniforms in bulk?",
    answer:
      "Yes. TES Apparels supports bulk corporate apparel requirements for companies, offices, institutions and organizations. Production requirements can be discussed based on product specifications and quantity.",
  },
  {
    question: "Do you manufacture both T-shirts and formal uniforms?",
    answer:
      "Yes. TES Apparels can provide different corporate apparel categories including polo T-shirts, T-shirts, formal shirts, trousers, jackets and accessories such as caps and bags.",
  },
  {
    question: "Do you supply corporate uniforms outside Bangalore?",
    answer:
      "Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India through PAN India delivery.",
  },
  {
    question: "How can I request a corporate uniform quotation?",
    answer:
      "Share your company requirement, approximate employee count or quantity, preferred products, branding requirements and delivery location with TES Apparels. Our team can discuss the specifications and guide you through the quotation process.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tesapparels.com/#organization",
      name: "TES Apparels",
      url: "https://tesapparels.com/",
      telephone: "+91 9880038910",
      email: "chidanand@tesapparels.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No.483, 2nd Floor, 3rd Stage",
        addressLocality: "Basaveshwar Nagar",
        addressRegion: "Karnataka",
        postalCode: "560079",
        addressCountry: "IN",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://tesapparels.com/#localbusiness",
      name: "TES Apparels",
      url: "https://tesapparels.com/",
      telephone: "+91 9880038910",
      email: "chidanand@tesapparels.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No.483, 2nd Floor, 3rd Stage",
        addressLocality: "Basaveshwar Nagar",
        addressRegion: "Karnataka",
        postalCode: "560079",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Bengaluru",
        },
        {
          "@type": "State",
          name: "Karnataka",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
    },
    {
      "@type": "Service",
      "@id":
        "https://tesapparels.com/corporate-uniform-manufacturer#service",
      name: "Corporate Uniform Manufacturing in Bangalore",
      serviceType: "Corporate Uniform Manufacturing",
      provider: {
        "@id": "https://tesapparels.com/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Bengaluru",
      },
      description:
        "Customized corporate uniform manufacturing for IT companies, corporate offices and businesses in Bangalore, including polo T-shirts, T-shirts, formal shirts, trousers, jackets, caps and bags.",
      url: "https://tesapparels.com/corporate-uniform-manufacturer",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://tesapparels.com/corporate-uniform-manufacturer#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://tesapparels.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Corporate Uniform Manufacturer in Bangalore",
          item:
            "https://tesapparels.com/corporate-uniform-manufacturer",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://tesapparels.com/corporate-uniform-manufacturer#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

const uniformProducts = [
  {
    title: "Corporate Polo T-Shirts",
    text:
      "Professional polo T-shirts for IT companies, office teams, employee uniforms, corporate events and everyday workplace apparel.",
    href: "/corporate-polo-t-shirts",
  },
  {
    title: "Corporate T-Shirts",
    text:
      "Customized round-neck and corporate T-shirts for employee programs, team activities, campaigns and branded company apparel.",
    href: "/t-shirt-manufacturer-bangalore",
  },
  {
    title: "Formal Shirts & Trousers",
    text:
      "Professional formal shirts and trousers for employees, management teams, customer-facing staff and corporate offices.",
    href: "/formal-shirt-manufacturer-bangalore",
  },
  {
    title: "Corporate Jackets",
    text:
      "Customized jackets for outdoor teams, travel, events, winter requirements and corporate employee apparel programs.",
    href: "/products/jackets",
  },
  {
    title: "Corporate Caps",
    text:
      "Branded caps for employee activities, events, outdoor programs, promotions and corporate campaigns.",
    href: "/products/caps",
  },
  {
    title: "Corporate Bags",
    text:
      "Laptop bags, backpacks and promotional bags customized with company branding for employees and corporate programs.",
    href: "/products/bags",
  },
];

const customizationOptions = [
  "Company colours",
  "Fabric selection",
  "GSM selection",
  "Custom sizing",
  "Company logo",
  "Embroidery",
  "Screen printing",
  "DTF printing",
  "Custom labels",
  "Employee uniforms",
  "Bulk production",
  "Corporate branding",
];

const industries = [
  "IT Companies",
  "Technology Companies",
  "Corporate Offices",
  "Startups",
  "BPO & KPO Companies",
  "Software Companies",
  "Consulting Companies",
  "Financial Services",
  "Manufacturing Companies",
  "Hospitality",
  "Healthcare",
  "Educational Institutions",
];

const processSteps = [
  {
    number: "01",
    title: "Requirement",
    text:
      "Share your employee uniform requirement, product types, approximate quantity, branding and delivery location.",
  },
  {
    number: "02",
    title: "Specification",
    text:
      "Discuss fabric, GSM, colours, sizes, garment construction, logo placement and branding requirements.",
  },
  {
    number: "03",
    title: "Sampling",
    text:
      "Where required, samples and artwork can be reviewed before proceeding with bulk production.",
  },
  {
    number: "04",
    title: "Production",
    text:
      "Approved specifications are followed during the corporate apparel manufacturing process.",
  },
  {
    number: "05",
    title: "Delivery",
    text:
      "Finished corporate uniforms are prepared for delivery in Bangalore or other locations across India.",
  },
];

export default function CorporateUniformManufacturerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="bg-white text-slate-900">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#0B2341]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,154,0,0.18),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-5xl">
              <nav
                aria-label="Breadcrumb"
                className="mb-8 text-sm text-slate-300"
              >
                <Link
                  href="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>

                <span className="mx-2">/</span>

                <span className="text-white">
                  Corporate Uniform Manufacturer in Bangalore
                </span>
              </nav>

              <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
                Bangalore-Based Corporate Apparel Manufacturer
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Corporate Uniform Manufacturer in Bangalore for IT Companies
                & Offices
              </h1>

              <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
                TES Apparels is a corporate uniform manufacturer in Bangalore
                supplying customized employee uniforms, polo T-shirts,
                corporate T-shirts, formal shirts, trousers, jackets, caps and
                bags for IT companies, corporate offices and businesses.
              </p>

              <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
                From fabric selection and garment specifications to company
                branding, embroidery, printing and bulk production, we help
                businesses develop professional corporate apparel programs
                according to their requirements.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#A98200]"
                >
                  Request a Corporate Uniform Quote
                </Link>

                <a
                  href="tel:+919880038910"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/20"
                >
                  Call +91 9880038910
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Corporate Uniform Manufacturing
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Customized Corporate Uniforms for Bangalore Businesses
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  A professional corporate uniform helps create a consistent
                  visual identity across employees, departments, events and
                  customer-facing teams. The right combination of fabric,
                  colour, fit and branding can make employee apparel look
                  professional while remaining comfortable for everyday use.
                </p>

                <p>
                  TES Apparels works with IT companies, corporate offices,
                  startups and other businesses in Bangalore looking for
                  customized employee uniforms and corporate clothing.
                </p>

                <p>
                  Requirements can be developed around polo T-shirts,
                  round-neck T-shirts, formal shirts, trousers, jackets, caps,
                  bags or a complete corporate uniform program.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B2341]">
                TES Apparels at a Glance
              </h3>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Location
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    Basaveshwar Nagar, Bengaluru
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Focus
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    Corporate & Employee Apparel
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Products
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    Polos, T-Shirts, Shirts, Trousers & Jackets
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Service Area
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    Bangalore, Karnataka & PAN India
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Corporate Uniform Products
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Complete Corporate Uniform Solutions for Employees
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Choose individual corporate apparel products or develop a
                complete customized employee uniform program for your
                organization.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {uniformProducts.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-[#0B2341]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.text}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-5 inline-flex font-bold text-[#0B2341] hover:text-[#C49A00]"
                  >
                    Explore solution →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* IT COMPANIES */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                For IT & Corporate Offices
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Corporate Uniforms Designed for Professional Workplaces
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  IT companies and corporate offices often require employee
                  apparel that looks professional, reflects the company's
                  brand and remains comfortable throughout the working day.
                </p>

                <p>
                  TES Apparels provides customized corporate clothing options
                  suitable for technology companies, software businesses,
                  startups, BPOs, consulting firms and professional offices.
                </p>

                <p>
                  Uniform programs can be developed around company colours,
                  employee roles, departments, office events, outdoor
                  activities and customer-facing requirements.
                </p>
              </div>

              <Link
                href="/#contact"
                className="mt-7 inline-flex rounded-lg bg-[#0B2341] px-6 py-3 font-bold text-white transition hover:bg-[#123762]"
              >
                Discuss Your Company Requirement
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Professional employee appearance",
                "Company colour matching",
                "Custom company branding",
                "Department-wise requirements",
                "Employee size specifications",
                "Office & event apparel",
                "Bulk employee uniforms",
                "PAN India delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B2341] text-sm font-bold text-white">
                    ✓
                  </span>

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOMIZATION */}
        <section className="bg-[#0B2341] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                  Corporate Uniform Customization
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Customize Every Detail of Your Corporate Uniform
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  Corporate apparel should be aligned with your brand identity
                  and employee requirements. TES Apparels supports customization
                  across garment specifications, branding and finishing.
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  Whether you need branded polo T-shirts for an IT company,
                  formal shirts for office staff or a complete employee
                  uniform program, requirements can be discussed before bulk
                  production.
                </p>

                <Link
                  href="/t-shirt-embroidery"
                  className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
                >
                  Explore Embroidery & Branding
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {customizationOptions.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C49A00] text-sm font-bold text-white">
                      ✓
                    </span>

                    <span className="font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FABRIC */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Fabric & Quality
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Select Corporate Uniform Fabrics Based on Your Requirements
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Fabric selection depends on the garment type, workplace
              environment, comfort requirements, appearance and intended use.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Cotton",
                text:
                  "Comfortable fabric options for everyday corporate and promotional apparel.",
              },
              {
                title: "Poly Cotton",
                text:
                  "Suitable for uniforms where durability, easy maintenance and comfort are important.",
              },
              {
                title: "Performance Fabrics",
                text:
                  "Suitable for sports, outdoor activities and active employee requirements.",
              },
              {
                title: "Formal Fabrics",
                text:
                  "Suitable for professional shirts and corporate office wear.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#0B2341]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BRANDING */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Corporate Branding
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  Professional Logo Branding for Employee Uniforms
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  Company logos and brand elements can be incorporated into
                  corporate uniforms using suitable embroidery and printing
                  techniques.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  Logo placement, size, artwork and branding method can be
                  discussed based on the garment, fabric and intended
                  application.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "Embroidery",
                    "Screen Printing",
                    "DTF Printing",
                    "Logo Branding",
                    "Custom Labels",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#0B2341] p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold">
                  Need Branded Employee Uniforms?
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Share your logo, preferred products, approximate quantity and
                  company uniform requirements with TES Apparels.
                </p>

                <Link
                  href="/#contact"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Corporate Uniform Manufacturing Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              From Company Requirement to Finished Uniform
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A structured process helps keep corporate apparel aligned with
              the approved specifications.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-3xl font-black text-[#C49A00]">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold text-[#0B2341]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHY TES */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Why TES Apparels
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  A Corporate Apparel Partner for Bangalore Businesses
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  TES Apparels focuses on customized corporate apparel where
                  professional appearance, branding, comfort and production
                  consistency are important.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Bangalore-based apparel manufacturer",
                  "Corporate and employee uniform expertise",
                  "Polo T-shirts and corporate T-shirts",
                  "Formal shirts and trousers",
                  "Jackets, caps and corporate bags",
                  "Printing and embroidery support",
                  "Bulk manufacturing",
                  "PAN India delivery support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C49A00] font-bold text-white">
                      ✓
                    </span>

                    <span className="font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Industries We Serve
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Corporate Uniforms for IT Companies & Businesses
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our corporate apparel solutions can be customized for different
              workplace environments and organizational requirements.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </section>

        {/* BANGALORE */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Corporate Uniforms in Bangalore
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  Corporate Uniform Manufacturer Serving Businesses Across
                  Bengaluru
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">
                  <p>
                    TES Apparels is located in Basaveshwar Nagar, Bengaluru,
                    Karnataka. We support companies and organizations looking
                    for customized corporate uniforms and branded employee
                    apparel.
                  </p>

                  <p>
                    Our Bangalore location enables us to work with businesses
                    across major commercial and technology areas while also
                    supporting customers outside Bangalore.
                  </p>

                  <p>
                    Whether you need polo T-shirts for an IT company, formal
                    shirts for office employees, jackets for outdoor teams or
                    a complete corporate uniform program, our team can discuss
                    your requirement.
                  </p>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Basaveshwar Nagar",
                    "Rajajinagar",
                    "Peenya",
                    "Yeshwanthpur",
                    "Malleshwaram",
                    "Vijayanagar",
                    "Electronic City",
                    "Whitefield",
                    "Koramangala",
                    "HSR Layout",
                    "Jayanagar",
                    "Bommanahalli",
                  ].map((area) => (
                    <div
                      key={area}
                      className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {area}, Bengaluru
                    </div>
                  ))}
                </div>
              </div>

              <aside className="rounded-2xl bg-[#0B2341] p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold">TES Apparels</h3>

                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                  <p>
                    No.483, 2nd Floor,
                    <br />
                    3rd Stage, Basaveshwar Nagar,
                    <br />
                    Bengaluru – 560079,
                    <br />
                    Karnataka, India
                  </p>

                  <p>
                    <strong className="text-white">Phone:</strong>{" "}
                    <a
                      href="tel:+919880038910"
                      className="hover:text-[#E4C65A]"
                    >
                      +91 9880038910
                    </a>
                  </p>

                  <p>
                    <strong className="text-white">Email:</strong>{" "}
                    <a
                      href="mailto:chidanand@tesapparels.com"
                      className="break-all hover:text-[#E4C65A]"
                    >
                      chidanand@tesapparels.com
                    </a>
                  </p>

                  <p>
                    <strong className="text-white">
                      Business Hours:
                    </strong>
                    <br />
                    Monday – Saturday
                    <br />
                    9:30 AM – 6:30 PM
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
                >
                  Send an Enquiry
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Related Apparel Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Explore More TES Apparels Solutions
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "T-Shirt Manufacturer in Bangalore",
                href: "/t-shirt-manufacturer-bangalore",
              },
              {
                title: "Corporate Polo T-Shirts",
                href: "/corporate-polo-t-shirts",
              },
              {
                title: "T-Shirt Printing",
                href: "/t-shirt-printing",
              },
              {
                title: "T-Shirt Embroidery",
                href: "/t-shirt-embroidery",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-white p-6 font-bold text-[#0B2341] shadow-sm transition hover:-translate-y-1 hover:border-[#C49A00] hover:text-[#C49A00]"
              >
                {item.title}

                <span className="mt-3 block text-sm font-medium text-slate-500">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Corporate Uniform Manufacturer in Bangalore – FAQs
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-[#0B2341]">
                    {faq.question}
                  </summary>

                  <p className="mt-4 leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#0B2341]">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
              Corporate Apparel Requirement
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for a Corporate Uniform Manufacturer in Bangalore?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Share your company uniform requirements, approximate quantity,
              preferred products, branding requirements and delivery location
              with TES Apparels. Our team will discuss your requirement and
              guide you through the next steps.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-lg bg-[#C49A00] px-8 py-4 font-bold text-white transition hover:bg-[#A98200]"
              >
                Request a Corporate Uniform Quote
              </Link>

              <a
                href="tel:+919880038910"
                className="rounded-lg border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Call +91 9880038910
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}