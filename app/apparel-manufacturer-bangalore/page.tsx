import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://tesapparels.com";
const PAGE_URL = `${SITE_URL}/apparel-manufacturer-bangalore`;

export const metadata: Metadata = {
  title:
    "Apparel Manufacturer in Bangalore | Apparel Manufacturers in Bangalore | TES Apparels",

  description:
    "TES Apparels is an apparel manufacturer in Bangalore supplying customized T-shirts, uniforms, corporate apparel, polo T-shirts, sportswear, workwear and bulk garments for businesses and institutions across India.",

  keywords: [
    "apparel manufacturer in bangalore",
    "apparel manufacturers in bangalore",
    "apparel manufacturer bangalore",
    "apparel manufacturers bangalore",
    "apparel manufacturing company in bangalore",
    "apparel manufacturing companies in bangalore",
    "garment manufacturer in bangalore",
    "garment manufacturers in bangalore",
    "garment manufacturing company in bangalore",
    "garment manufacturing companies in bangalore",
    "clothing manufacturer in bangalore",
    "clothing manufacturers in bangalore",
    "clothing manufacturer bangalore",
    "custom apparel manufacturer bangalore",
    "custom apparel manufacturers bangalore",
    "bulk apparel manufacturer bangalore",
    "bulk apparel manufacturers bangalore",
    "t shirt manufacturer in bangalore",
    "t shirt manufacturers in bangalore",
    "t shirt manufacturer bangalore",
    "t shirt manufacturers bangalore",
    "uniform manufacturer in bangalore",
    "uniform manufacturers in bangalore",
    "corporate apparel manufacturer bangalore",
    "corporate apparel manufacturers bangalore",
    "corporate uniform manufacturer bangalore",
    "sports apparel manufacturer bangalore",
    "sports apparel manufacturers bangalore",
    "polo t shirt manufacturer bangalore",
    "polo t shirt manufacturers bangalore",
    "dri fit t shirt manufacturer bangalore",
    "dri fit t shirt manufacturers bangalore",
    "workwear manufacturer bangalore",
    "workwear manufacturers bangalore",
    "industrial uniform manufacturer bangalore",
    "industrial uniform manufacturers bangalore",
    "school uniform manufacturer bangalore",
    "school uniform manufacturers bangalore",
    "college uniform manufacturer bangalore",
    "college uniform manufacturers bangalore",
    "event t shirt manufacturer bangalore",
    "event t shirt manufacturers bangalore",
    "sports jersey manufacturer bangalore",
    "sports jersey manufacturers bangalore",
    "apparel manufacturer in karnataka",
    "apparel manufacturers in karnataka",
    "garment manufacturer in karnataka",
    "apparel manufacturer in india",
    "apparel manufacturers in india",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Apparel Manufacturer in Bangalore | Apparel Manufacturers in Bangalore | TES Apparels",
    description:
      "Bangalore-based apparel manufacturer supplying customized T-shirts, uniforms, corporate apparel, sportswear, workwear and bulk garments.",
    url: PAGE_URL,
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Apparel Manufacturer in Bangalore | Apparel Manufacturers in Bangalore | TES Apparels",
    description:
      "Customized apparel, T-shirts, uniforms, sportswear, corporate apparel and bulk garment manufacturing from Bangalore.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const products = [
  {
    title: "T-Shirt Manufacturing",
    text:
      "Customized T-shirts for corporate programs, promotional campaigns, events, institutions, teams and bulk apparel requirements.",
    href: "/t-shirt-manufacturer-bangalore",
  },
  {
    title: "Corporate Apparel",
    text:
      "Corporate T-shirts, polo T-shirts, uniforms and branded apparel designed around company requirements and employee programs.",
    href: "/corporate-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Polo T-Shirts",
    text:
      "Customized polo T-shirts for companies, institutions, promotional programs, hospitality, retail and professional teams.",
    href: "/corporate-polo-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Sports Apparel",
    text:
      "Sports T-shirts, jerseys and performance apparel for teams, academies, schools, events and sporting activities.",
    href: "/sports-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Uniform Manufacturing",
    text:
      "Customized school, college, corporate, industrial and institutional uniforms manufactured according to approved specifications.",
    href: "/corporate-uniform-manufacturer",
  },
  {
    title: "Dri-Fit Apparel",
    text:
      "Performance-focused Dri-Fit T-shirts and activewear for sports, events, fitness programs and outdoor activities.",
    href: "/dri-fit-t-shirt-manufacturers-bangalore",
  },
  {
    title: "Workwear",
    text:
      "Customized workwear and industrial apparel for organizations requiring consistent employee clothing and branding.",
    href: "/corporate-workwear-manufacturer-bangalore",
  },
  {
    title: "Event T-Shirts",
    text:
      "Bulk event T-shirts for conferences, corporate events, college events, promotional campaigns, marathons and public events.",
    href: "/event-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Sports Jerseys",
    text:
      "Customized jerseys for schools, colleges, clubs, corporate teams, sports academies and competitions.",
    href: "/sports-jersey-manufacturer-bangalore",
  },
];

const industries = [
  "Corporate Companies",
  "IT & Technology",
  "Manufacturing",
  "Healthcare",
  "Education",
  "Schools",
  "Colleges",
  "Universities",
  "Sports Academies",
  "Fitness & Wellness",
  "Hospitality",
  "Retail",
  "Events & Promotions",
  "Industrial Organizations",
  "Startups",
  "NGOs & Institutions",
];

const capabilities = [
  "Bulk apparel manufacturing",
  "Customized garment development",
  "Corporate branding",
  "School and college uniforms",
  "Sportswear and jerseys",
  "Dri-Fit performance apparel",
  "Polo T-shirts",
  "Workwear and industrial apparel",
  "Printing and embroidery",
  "Custom labels",
  "Multiple size requirements",
  "PAN India delivery",
];

const processSteps = [
  {
    number: "01",
    title: "Requirement",
    text:
      "Share the products, quantities, design requirements, target users and delivery location.",
  },
  {
    number: "02",
    title: "Specifications",
    text:
      "Discuss fabric, GSM, colours, sizing, garment construction, branding and other specifications.",
  },
  {
    number: "03",
    title: "Sampling",
    text:
      "Where required, samples, artwork and specifications can be reviewed before bulk production.",
  },
  {
    number: "04",
    title: "Production",
    text:
      "Approved specifications are followed during bulk manufacturing to maintain product consistency.",
  },
  {
    number: "05",
    title: "Delivery",
    text:
      "Finished apparel is prepared for delivery in Bangalore, Karnataka and other locations across India.",
  },
];

const faqs = [
  {
    question: "Is TES Apparels an apparel manufacturer in Bangalore?",
    answer:
      "Yes. TES Apparels is a Bangalore-based apparel manufacturer supplying customized T-shirts, polo T-shirts, uniforms, sportswear, corporate apparel, workwear and other bulk garment solutions.",
  },
  {
    question: "What products do your apparel manufacturers supply?",
    answer:
      "TES Apparels supplies customized T-shirts, polo T-shirts, Dri-Fit T-shirts, sports jerseys, corporate uniforms, school uniforms, college uniforms, workwear, event apparel and other customized garments.",
  },
  {
    question: "Do you handle bulk apparel manufacturing?",
    answer:
      "Yes. TES Apparels focuses on bulk and customized apparel requirements. Production can be discussed based on garment specifications, quantities, sizes, fabric, branding requirements and delivery schedules.",
  },
  {
    question: "Can you manufacture customized T-shirts in Bangalore?",
    answer:
      "Yes. Customized T-shirts can be developed according to the required fabric, GSM, colour, design, sizing, branding and printing or embroidery requirements.",
  },
  {
    question: "Do you manufacture corporate uniforms?",
    answer:
      "Yes. TES Apparels supplies customized corporate uniforms and branded apparel for organizations that require consistent employee clothing and company branding.",
  },
  {
    question: "Do you manufacture school and college uniforms?",
    answer:
      "Yes. TES Apparels can manufacture customized school and college uniforms including shirts, trousers, T-shirts, polo T-shirts and sports apparel.",
  },
  {
    question: "Can you manufacture sports T-shirts and jerseys?",
    answer:
      "Yes. Sports T-shirts, Dri-Fit apparel and customized jerseys can be developed for sports teams, academies, schools, colleges, corporate teams and events.",
  },
  {
    question: "Can apparel be customized with company or institution logos?",
    answer:
      "Yes. Depending on the garment and fabric, branding options such as embroidery, screen printing, DTF printing, labels and other suitable methods can be considered.",
  },
  {
    question: "Do you supply apparel outside Bangalore?",
    answer:
      "Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India through PAN India delivery.",
  },
  {
    question: "How can I request an apparel manufacturing quotation?",
    answer:
      "You can share your required products, approximate quantity, preferred fabric, design or artwork, branding requirements, sizes and delivery location with TES Apparels to discuss the requirement and quotation.",
  },
];

const relatedPages = [
  {
    title: "T-Shirt Manufacturer in Bangalore",
    href: "/t-shirt-manufacturer-bangalore",
  },
  {
    title: "Corporate T-Shirt Manufacturer",
    href: "/corporate-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Corporate Polo T-Shirt Manufacturer",
    href: "/corporate-polo-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Corporate Uniform Manufacturer",
    href: "/corporate-uniform-manufacturer",
  },
  {
    title: "School Uniform Manufacturer",
    href: "/school-uniform-manufacturer-bangalore",
  },
  {
    title: "College Uniform Manufacturer",
    href: "/college-uniform-manufacturer-bangalore",
  },
  {
    title: "Sports T-Shirt Manufacturer",
    href: "/sports-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Event T-Shirt Manufacturer",
    href: "/event-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Dri-Fit T-Shirt Manufacturer",
    href: "/dri-fit-t-shirt-manufacturers-bangalore",
  },
  {
    title: "Sports Jersey Manufacturer",
    href: "/sports-jersey-manufacturer-bangalore",
  },
  {
    title: "Industrial Uniform Manufacturer",
    href: "/industrial-uniform-manufacturer-bangalore",
  },
  {
    title: "Formal Shirt Manufacturer",
    href: "/formal-shirt-manufacturer-bangalore",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "TES Apparels",
      url: SITE_URL,
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
      "@id": `${SITE_URL}/#localbusiness`,
      name: "TES Apparels",
      url: SITE_URL,
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
      "@id": `${PAGE_URL}#service`,
      name: "Apparel Manufacturing in Bangalore",
      serviceType: "Apparel Manufacturing",
      provider: {
        "@id": `${SITE_URL}/#organization`,
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
      description:
        "Customized and bulk apparel manufacturing in Bangalore including T-shirts, uniforms, corporate apparel, sportswear, workwear, polo T-shirts and event apparel.",
      url: PAGE_URL,
    },

    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name:
        "Apparel Manufacturer in Bangalore | Apparel Manufacturers in Bangalore",
      description:
        "TES Apparels is an apparel manufacturer in Bangalore supplying customized T-shirts, uniforms, corporate apparel, sportswear, workwear and bulk garments.",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Apparel Manufacturer in Bangalore",
          item: PAGE_URL,
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
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

export default function ApparelManufacturerBangalorePage() {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,154,0,0.20),transparent_38%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_35%)]" />

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
                Apparel Manufacturer in Bangalore
              </span>
            </nav>

            <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
              Bangalore Apparel Manufacturing
            </div>

            <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Apparel Manufacturer in Bangalore for Customized & Bulk
              Apparel Manufacturing
            </h1>

            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
              TES Apparels is an apparel manufacturer in Bangalore supplying
              customized T-shirts, polo T-shirts, corporate apparel, uniforms,
              sportswear, workwear, event apparel and other bulk garment
              solutions for businesses and institutions.
            </p>

            <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
              As one of the apparel manufacturers serving Bangalore and
              customers across India, we work with organizations requiring
              consistent product specifications, branding, sizing and bulk
              production.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#A98200]"
              >
                Request Apparel Quote
              </Link>

              <a
                href="tel:+919880038910"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/20"
              >
                Call +91 9880038910
              </a>
            </div>

            <div className="mt-12 grid max-w-5xl gap-4 sm:grid-cols-3">
              {[
                "Customized Apparel",
                "Bulk Manufacturing",
                "PAN India Delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Apparel Manufacturing in Bangalore
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Customized Apparel Manufacturing for Businesses &
                Institutions
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Apparel requirements vary from organization to organization.
                  Some businesses need branded corporate T-shirts and polo
                  T-shirts, while schools, colleges, sports teams and
                  industrial organizations may require uniforms, sportswear or
                  workwear.
                </p>

                <p>
                  TES Apparels provides customized apparel manufacturing
                  solutions based on product specifications, fabric, GSM,
                  colours, sizing, branding and quantity requirements.
                </p>

                <p>
                  Our Bangalore-based operation supports organizations looking
                  for a reliable apparel manufacturer for recurring programs,
                  promotional campaigns, institutional clothing and bulk
                  garment requirements.
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
                    Manufacturing
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    Customized & Bulk Apparel
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Product Range
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    T-Shirts, Uniforms, Sportswear & Workwear
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Service Area
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    Bangalore, Karnataka & India
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
                Apparel Products
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Apparel Manufacturing Solutions from One Bangalore Partner
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Explore customized apparel categories for corporate,
                institutional, sports, promotional and industrial requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-[#0B2341]">
                    {product.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {product.text}
                  </p>

                  <Link
                    href={product.href}
                    className="mt-5 inline-flex font-bold text-[#0B2341] transition hover:text-[#C49A00]"
                  >
                    Explore solution →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MANUFACTURING CAPABILITIES */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Manufacturing Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                What You Can Expect from a Bangalore Apparel Manufacturer
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  A successful bulk apparel program depends on clear
                  specifications, consistent sizing, suitable fabrics,
                  accurate branding and coordinated production.
                </p>

                <p>
                  TES Apparels can discuss these requirements before production
                  so the apparel program is aligned with the organization&apos;s
                  intended use and approved specifications.
                </p>
              </div>

              <Link
                href="/#contact"
                className="mt-7 inline-flex rounded-lg bg-[#0B2341] px-6 py-3 font-bold text-white transition hover:bg-[#123762]"
              >
                Discuss Your Requirement
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B2341] text-sm font-bold text-white">
                    ✓
                  </span>

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-[#0B2341] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                Industries & Organizations
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Apparel Manufacturing for Businesses & Institutions
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Customized apparel can be developed for different industries,
                teams and institutional programs based on their requirements.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOMIZATION */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Customization & Branding
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Customize Apparel for Your Brand, Team or Institution
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Customized apparel can include company colours, institution
                  colours, logos, artwork, garment specifications, fabric
                  selection, GSM, sizing and branding requirements.
                </p>

                <p>
                  Depending on the garment and application, embroidery,
                  screen printing, DTF printing, labels and other suitable
                  branding methods can be considered.
                </p>
              </div>

              <Link
                href="/t-shirt-embroidery"
                className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
              >
                Explore Apparel Branding
              </Link>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#0B2341]">
                Common Customization Requirements
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Custom Colours",
                  "Company Logo",
                  "Institution Logo",
                  "Fabric Selection",
                  "GSM Selection",
                  "Custom Sizes",
                  "Embroidery",
                  "Screen Printing",
                  "DTF Printing",
                  "Custom Labels",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FABRIC */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Fabric & Product Specifications
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Choose Apparel Specifications Based on Intended Use
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Fabric and garment specifications can vary depending on
                comfort, durability, appearance, climate, activity level,
                maintenance requirements and budget.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Cotton",
                  text:
                    "Comfort-focused options for everyday T-shirts and institutional apparel.",
                },
                {
                  title: "Poly Cotton",
                  text:
                    "Suitable for applications requiring a balance of comfort, durability and easy maintenance.",
                },
                {
                  title: "Performance",
                  text:
                    "Suitable for sports, events, fitness and active-use apparel.",
                },
                {
                  title: "Polo & Formal",
                  text:
                    "Suitable for professional corporate and institutional apparel programs.",
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
          </div>
        </section>

        {/* PROCESS */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Manufacturing Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              From Apparel Requirement to Bulk Production
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A structured process helps organizations keep production aligned
              with approved garment and branding specifications.
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
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Why TES Apparels
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  A Bangalore Apparel Manufacturing Partner for Bulk
                  Requirements
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">
                  <p>
                    Organizations often need apparel that represents their
                    brand consistently across employees, students, teams or
                    events.
                  </p>

                  <p>
                    TES Apparels supports customized apparel requirements with
                    attention to product specifications, branding, sizing and
                    bulk production requirements.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Bangalore-based apparel manufacturer",
                  "Customized and bulk apparel",
                  "T-shirts and polo T-shirts",
                  "Corporate apparel and uniforms",
                  "School and college uniforms",
                  "Sportswear and jerseys",
                  "Dri-Fit performance apparel",
                  "Workwear and industrial apparel",
                  "Printing and embroidery support",
                  "PAN India delivery support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C49A00] font-bold text-white">
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

        {/* BANGALORE SERVICE */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="rounded-3xl bg-[#0B2341] p-8 text-white shadow-xl sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                  Bangalore Apparel Manufacturer
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Serving Businesses & Institutions Across Bangalore
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-300">
                  <p>
                    TES Apparels is based in Basaveshwar Nagar, Bengaluru and
                    supports organizations across Bangalore looking for
                    customized and bulk apparel manufacturing.
                  </p>

                  <p>
                    We can discuss requirements for corporate apparel,
                    uniforms, T-shirts, sportswear, workwear, promotional
                    apparel and other customized garments.
                  </p>

                  <p>
                    Our service extends beyond Bangalore, with support for
                    customers across Karnataka and other parts of India.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
                >
                  Start Your Apparel Enquiry
                </Link>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <h3 className="text-2xl font-bold">TES Apparels</h3>

                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
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
              </div>
            </div>
          </div>
        </section>

        {/* RELATED PAGES */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Explore TES Apparels
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Apparel Manufacturing Solutions in Bangalore
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Explore our specialized apparel manufacturing and customized
                garment solutions.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPages.map((item) => (
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
                Apparel Manufacturer in Bangalore – FAQs
              </h2>

              <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-600">
                Answers to common questions about customized apparel
                manufacturing, bulk garments, uniforms and T-shirt production
                in Bangalore.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
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
              Customized & Bulk Apparel Manufacturing
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for an Apparel Manufacturer in Bangalore?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Share your apparel requirements, approximate quantity, preferred
              products, fabric specifications, branding requirements and
              delivery location with TES Apparels.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-lg bg-[#C49A00] px-8 py-4 font-bold text-white transition hover:bg-[#A98200]"
              >
                Request Apparel Quote
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