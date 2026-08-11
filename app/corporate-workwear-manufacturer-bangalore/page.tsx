import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Workwear Manufacturer in Bangalore | TES Apparels",
  description:
    "TES Apparels is a corporate workwear manufacturer in Bangalore supplying customized work shirts and work trousers for factories, industrial teams, corporate employees, hotels, hospitals and institutions in bulk.",
  keywords: [
    "corporate workwear manufacturer in bangalore",
    "workwear manufacturer in bangalore",
    "workwear manufacturers in bangalore",
    "corporate workwear supplier in bangalore",
    "industrial workwear manufacturer in bangalore",
    "industrial uniform manufacturer in bangalore",
    "work shirt manufacturer in bangalore",
    "work trousers manufacturer in bangalore",
    "corporate work shirts bangalore",
    "corporate work trousers bangalore",
    "employee workwear manufacturer bangalore",
    "factory uniform manufacturer in bangalore",
    "industrial uniform supplier bangalore",
    "bulk workwear manufacturer in bangalore",
    "custom workwear manufacturer bangalore",
    "work uniform manufacturer in bangalore",
    "corporate uniform manufacturer in bangalore",
    "workwear manufacturer in Karnataka",
    "workwear manufacturer in India",
    "customized workwear manufacturer",
    "bulk corporate uniforms",
  ],
  alternates: {
    canonical:
      "https://www.tesapparels.com/corporate-workwear-manufacturer-bangalore",
  },
  openGraph: {
    title: "Corporate Workwear Manufacturer in Bangalore | TES Apparels",
    description:
      "Customized work shirts and work trousers for factories, industrial teams, corporate employees, hotels, hospitals and institutions. Bulk workwear manufacturing by TES Apparels.",
    url:
      "https://www.tesapparels.com/corporate-workwear-manufacturer-bangalore",
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Workwear Manufacturer in Bangalore | TES Apparels",
    description:
      "Bulk corporate and industrial workwear manufacturing in Bangalore including customized work shirts and work trousers.",
  },
};

const faqs = [
  {
    question: "Is TES Apparels a workwear manufacturer in Bangalore?",
    answer:
      "Yes. TES Apparels is a Bangalore-based apparel manufacturer providing customized workwear solutions for factories, industrial teams, corporate employees, hotels, hospitals and institutions.",
  },
  {
    question: "What workwear products does TES Apparels manufacture?",
    answer:
      "TES Apparels focuses on customized work shirts and work trousers for employees, industrial teams, corporate staff, hospitality teams, healthcare institutions and other organizations requiring professional workwear.",
  },
  {
    question: "Can workwear be customized with our company logo?",
    answer:
      "Yes. Workwear can be customized with company logos, employee identification and other branding requirements using suitable embroidery or printing methods depending on the garment and application.",
  },
  {
    question: "Do you manufacture workwear in bulk?",
    answer:
      "Yes. TES Apparels provides bulk workwear manufacturing for organizations that require employee uniforms, industrial uniforms, corporate workwear and institutional apparel.",
  },
  {
    question: "Can we choose the fabric and colours?",
    answer:
      "Yes. Fabric type, colour, garment construction, sizing, branding and finishing requirements can be discussed according to the application and approved specifications.",
  },
  {
    question: "Do you supply workwear outside Bangalore?",
    answer:
      "Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India through PAN India delivery.",
  },
  {
    question: "Can you manufacture work shirts and trousers as a uniform set?",
    answer:
      "Yes. Work shirts and trousers can be planned as coordinated employee uniform sets based on the organization's preferred colours, branding, sizing and garment specifications.",
  },
  {
    question: "How can I request a bulk workwear quotation?",
    answer:
      "Share your required workwear products, approximate quantity, preferred colours, fabric requirements, branding details and delivery location with TES Apparels. Our team can discuss the requirement and guide you through the quotation and production process.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.tesapparels.com/#organization",
      name: "TES Apparels",
      url: "https://www.tesapparels.com/",
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
      "@id": "https://www.tesapparels.com/#localbusiness",
      name: "TES Apparels",
      url: "https://www.tesapparels.com/",
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
        "https://www.tesapparels.com/corporate-workwear-manufacturer-bangalore#service",
      name: "Corporate Workwear Manufacturing in Bangalore",
      serviceType: "Corporate Workwear Manufacturing",
      provider: {
        "@id": "https://www.tesapparels.com/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Bengaluru",
      },
      description:
        "Customized corporate and industrial workwear manufacturing in Bangalore, including work shirts and work trousers for factories, industrial teams, corporate employees, hotels, hospitals and institutions.",
      url:
        "https://www.tesapparels.com/corporate-workwear-manufacturer-bangalore",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tesapparels.com/corporate-workwear-manufacturer-bangalore#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tesapparels.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Corporate Workwear Manufacturer in Bangalore",
          item:
            "https://www.tesapparels.com/corporate-workwear-manufacturer-bangalore",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.tesapparels.com/corporate-workwear-manufacturer-bangalore#faq",
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

export default function CorporateWorkwearManufacturerBangalorePage() {
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
            <nav
              aria-label="Breadcrumb"
              className="mb-8 text-sm text-slate-300"
            >
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <span className="mx-2">/</span>

              <span className="text-white">
                Corporate Workwear Manufacturer in Bangalore
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
                Bangalore-Based Corporate & Industrial Workwear
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Corporate Workwear Manufacturer in Bangalore
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                TES Apparels manufactures customized work shirts and work
                trousers for factories, industrial teams, corporate employees,
                hotels, hospitals and institutions requiring professional
                employee workwear in bulk.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                From fabric and colour selection to sizing, company branding
                and bulk production, we help organizations develop practical
                workwear solutions aligned with their employee uniform
                requirements.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#A98200]"
                >
                  Request Bulk Quote
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

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Workwear Manufacturing in Bangalore
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Professional Workwear for Employees and Industrial Teams
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Workwear is an important part of an organization's
                  professional identity. Employees need garments that are
                  comfortable, practical and suitable for their daily working
                  environment while maintaining a consistent company
                  appearance.
                </p>

                <p>
                  TES Apparels provides customized workwear manufacturing for
                  businesses and institutions in Bangalore. Our workwear
                  solutions are suitable for factories, industrial teams,
                  corporate offices, hotels, hospitals and other organizations
                  that require employee uniforms in bulk.
                </p>

                <p>
                  We focus on work shirts and work trousers that can be
                  customized according to fabric, colour, sizing, branding,
                  garment construction and organizational requirements.
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
                    Workwear
                  </dt>

                  <dd className="mt-1 font-semibold text-slate-900">
                    Work Shirts & Work Trousers
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Applications
                  </dt>

                  <dd className="mt-1 font-semibold text-slate-900">
                    Corporate, Industrial & Institutional
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

        {/* WORKWEAR PRODUCTS */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Workwear Products
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Customized Work Shirts & Work Trousers
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                TES Apparels manufactures coordinated workwear for
                organizations that need consistent employee appearance,
                practical everyday garments and professional corporate
                branding.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B2341] text-xl font-bold text-white">
                  01
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#0B2341]">
                  Work Shirts
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Customized work shirts for employees, factory teams,
                  industrial workers, corporate staff, hospitality teams and
                  institutional personnel.
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Corporate branding",
                    "Custom colours",
                    "Employee uniforms",
                    "Industrial applications",
                    "Multiple size options",
                    "Bulk manufacturing",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#C49A00] text-xl font-bold text-white">
                  02
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#0B2341]">
                  Work Trousers
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Coordinated work trousers for corporate uniforms, factories,
                  industrial teams, hotels, hospitals and institutional
                  employees.
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Matching uniform sets",
                    "Custom colours",
                    "Practical workwear",
                    "Corporate uniforms",
                    "Multiple size options",
                    "Bulk manufacturing",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      ✓ {item}
                    </li>
                  ))}
                </ul>
              </article>
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
              Workwear for Different Business Environments
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Workwear requirements vary according to the workplace. TES
              Apparels provides customized apparel solutions for different
              employee and institutional environments.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Factories & Industrial Teams",
                text: "Work shirts and trousers for manufacturing units, engineering companies, industrial facilities and factory employees.",
              },
              {
                title: "Corporate Offices",
                text: "Professional employee workwear for corporate offices, service companies, operational teams and business organizations.",
              },
              {
                title: "Hotels & Hospitality",
                text: "Coordinated workwear for hotel employees, housekeeping teams, support staff and hospitality operations.",
              },
              {
                title: "Hospitals & Healthcare",
                text: "Customized employee apparel for hospitals, healthcare institutions and support teams requiring consistent professional clothing.",
              },
              {
                title: "Institutions",
                text: "Uniform solutions for institutions and organizations that require standardized employee appearance and branding.",
              },
              {
                title: "Business Operations",
                text: "Bulk workwear for organizations that require practical, branded and consistent employee uniforms.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0B2341]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CUSTOMIZATION */}
        <section className="bg-[#0B2341] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                  Customized Corporate Workwear
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Build Workwear Around Your Company Requirements
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  A good employee uniform should provide a professional
                  appearance while fitting the practical needs of the
                  workplace. TES Apparels works with organizations to define
                  garment specifications before bulk production.
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  Your workwear can be planned around company colours,
                  employee sizing, branding, garment requirements and the
                  intended working environment.
                </p>

                <Link
                  href="/#contact"
                  className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-7 py-3 font-bold text-white transition hover:bg-[#A98200]"
                >
                  Discuss Bulk Requirement
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Fabric selection",
                  "Custom colours",
                  "Size specifications",
                  "Company logo",
                  "Embroidery",
                  "Printing",
                  "Matching shirts & trousers",
                  "Bulk production",
                  "Employee uniforms",
                  "Corporate branding",
                  "Institutional workwear",
                  "PAN India delivery",
                ].map((item) => (
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

        {/* MANUFACTURING PROCESS */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Manufacturing Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              From Workwear Requirement to Bulk Production
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A structured production process helps ensure that bulk workwear
              follows the approved garment and branding specifications.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "Requirement",
                text: "Share workwear type, quantity, colours, sizes, branding and delivery requirements.",
              },
              {
                number: "02",
                title: "Specification",
                text: "Discuss fabric, garment construction, sizing and branding requirements.",
              },
              {
                number: "03",
                title: "Sampling",
                text: "Where required, sample garments and artwork can be reviewed before bulk production.",
              },
              {
                number: "04",
                title: "Production",
                text: "Approved specifications are followed during the bulk manufacturing process.",
              },
              {
                number: "05",
                title: "Delivery",
                text: "Finished workwear is prepared for delivery in Bangalore or other locations across India.",
              },
            ].map((step) => (
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
                  A Practical Partner for Bulk Workwear Requirements
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  TES Apparels focuses on customized apparel requirements where
                  consistent specifications, professional appearance, branding
                  and dependable bulk production are important.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Bangalore-based apparel manufacturer",
                  "Corporate and industrial workwear",
                  "Customized work shirts",
                  "Customized work trousers",
                  "Corporate employee uniforms",
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

        {/* LOCAL BANGALORE SECTION */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Serving Bangalore
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Corporate Workwear Manufacturer Serving Bengaluru Businesses
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  TES Apparels is located in Basaveshwar Nagar, Bengaluru,
                  Karnataka. We support businesses and organizations across
                  Bangalore looking for customized corporate and industrial
                  workwear.
                </p>

                <p>
                  Our workwear solutions are suitable for organizations across
                  manufacturing, corporate, hospitality, healthcare and
                  institutional environments.
                </p>

                <p>
                  We also support customers outside Bangalore with apparel
                  delivery solutions across India.
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
                  "Jayanagar",
                  "Electronic City",
                  "Whitefield",
                  "Koramangala",
                  "HSR Layout",
                  "Bommanahalli",
                ].map((area) => (
                  <div
                    key={area}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
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
                  <strong className="text-white">Business Hours:</strong>
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
                Send Bulk Enquiry
              </Link>
            </aside>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
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
                  title: "Corporate Uniform Manufacturer",
                  href: "/corporate-uniform-manufacturer",
                },
                {
                  title: "Formal Shirt Manufacturer",
                  href: "/formal-shirt-manufacturer-bangalore",
                },
                {
                  title: "Uniform T-Shirt Manufacturer",
                  href: "/uniform-t-shirt-manufacturers-bangalore",
                },
                {
                  title: "Corporate Polo T-Shirts",
                  href: "/corporate-polo-t-shirts",
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
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Corporate Workwear Manufacturer in Bangalore – FAQs
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
              Bulk Workwear Manufacturing
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for a Corporate Workwear Manufacturer in Bangalore?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Share your workwear requirements, approximate quantity, preferred
              fabric and colours, branding requirements and delivery location
              with TES Apparels. Our team can discuss your bulk requirement and
              guide you through the next steps.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-lg bg-[#C49A00] px-8 py-4 font-bold text-white transition hover:bg-[#A98200]"
              >
                Request a Bulk Quote
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

        {/* FOOTER CREDIT */}
        <footer className="bg-[#071A30] py-5 text-center text-sm text-slate-400">
          Designed and Developed by TES Apparels
        </footer>
      </main>
    </>
  );
}