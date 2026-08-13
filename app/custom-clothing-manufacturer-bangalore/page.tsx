import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://tesapparels.com";
const PAGE_URL = `${SITE_URL}/custom-clothing-manufacturer-bangalore`;

export const metadata: Metadata = {
  title:
    "Custom Clothing Manufacturer in Bangalore | Custom Clothing Manufacturers | TES Apparels",

  description:
    "TES Apparels is a custom clothing manufacturer in Bangalore offering customized and bulk T-shirts, polo T-shirts, uniforms, sportswear, workwear and promotional clothing for businesses and institutions.",

  keywords: [
    "custom clothing manufacturer in bangalore",
    "custom clothing manufacturers in bangalore",
    "custom clothing manufacturer bangalore",
    "custom clothing manufacturers bangalore",
    "custom clothes manufacturer bangalore",
    "custom apparel manufacturer bangalore",
    "custom apparel manufacturers bangalore",
    "custom garment manufacturer bangalore",
    "custom garment manufacturers bangalore",
    "custom clothing manufacturing company bangalore",
    "custom clothing manufacturing companies bangalore",
    "custom clothing manufacturer in karnataka",
    "custom clothing manufacturers in karnataka",
    "custom clothing manufacturer in india",
    "custom clothing manufacturers in india",
    "bulk custom clothing manufacturer bangalore",
    "bulk custom clothing manufacturers bangalore",
    "custom t shirt manufacturer bangalore",
    "custom t shirt manufacturers bangalore",
    "custom polo t shirt manufacturer bangalore",
    "custom uniform manufacturer bangalore",
    "custom uniform manufacturers bangalore",
    "corporate clothing manufacturer bangalore",
    "corporate clothing manufacturers bangalore",
    "custom corporate apparel bangalore",
    "custom sportswear manufacturer bangalore",
    "custom sportswear manufacturers bangalore",
    "custom workwear manufacturer bangalore",
    "custom promotional clothing bangalore",
    "apparel manufacturer in bangalore",
    "apparel manufacturers in bangalore",
    "clothing manufacturer in bangalore",
    "clothing manufacturers in bangalore",
    "garment manufacturer in bangalore",
    "garment manufacturers in bangalore",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Custom Clothing Manufacturer in Bangalore | Custom Clothing Manufacturers",
    description:
      "Customized and bulk clothing manufacturing in Bangalore for T-shirts, polo T-shirts, uniforms, sportswear, workwear and promotional apparel.",
    url: PAGE_URL,
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Custom Clothing Manufacturer in Bangalore | Custom Clothing Manufacturers",
    description:
      "Bangalore-based custom clothing manufacturer for corporate, institutional, sports and promotional apparel.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    title: "Custom T-Shirts",
    description:
      "Customized T-shirts manufactured according to fabric, colour, sizing, artwork and branding requirements.",
    href: "/custom-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Custom Polo T-Shirts",
    description:
      "Professional customized polo T-shirts for corporate teams, institutions, hospitality and branded apparel programs.",
    href: "/corporate-polo-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Corporate Clothing",
    description:
      "Customized employee clothing designed around company colours, logos and corporate identity.",
    href: "/corporate-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Custom Uniforms",
    description:
      "Customized corporate, school, college and industrial uniforms for organizations and institutions.",
    href: "/corporate-uniform-manufacturer",
  },
  {
    title: "Custom Sportswear",
    description:
      "Performance-oriented sports clothing for teams, academies, schools, colleges and events.",
    href: "/sports-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Custom Sports Jerseys",
    description:
      "Customized jerseys for sports teams, schools, colleges, clubs, academies and corporate teams.",
    href: "/sports-jersey-manufacturer-bangalore",
  },
  {
    title: "Custom Dri-Fit Apparel",
    description:
      "Customized Dri-Fit T-shirts for sports, fitness, running, events and active-use requirements.",
    href: "/dri-fit-t-shirt-manufacturers-bangalore",
  },
  {
    title: "Custom Workwear",
    description:
      "Customized workwear for industrial, commercial and operational teams requiring branded employee clothing.",
    href: "/corporate-workwear-manufacturer-bangalore",
  },
  {
    title: "Custom Event Clothing",
    description:
      "Bulk customized clothing for conferences, corporate events, campaigns, marathons and promotional activities.",
    href: "/event-t-shirt-manufacturer-bangalore",
  },
];

const customizationOptions = [
  "Fabric selection",
  "GSM selection",
  "Custom colours",
  "Custom garment styles",
  "Custom sizes",
  "Company logo",
  "Institution logo",
  "Embroidery",
  "Screen printing",
  "DTF printing",
  "Custom labels",
  "Neck labels",
  "Sleeve branding",
  "Packaging requirements",
];

const industries = [
  "Corporate Companies",
  "IT Companies",
  "Startups",
  "Manufacturing Companies",
  "Schools",
  "Colleges",
  "Universities",
  "Healthcare",
  "Hospitality",
  "Retail",
  "Sports Academies",
  "Fitness Centres",
  "Events",
  "Marketing Agencies",
  "Industrial Organizations",
  "Institutions",
];

const process = [
  {
    number: "01",
    title: "Share Requirements",
    description:
      "Tell us your product, quantity, fabric preference, colours, sizes, artwork and delivery requirements.",
  },
  {
    number: "02",
    title: "Product Specifications",
    description:
      "Finalize the garment style, fabric, GSM, colours, measurements, branding and finishing requirements.",
  },
  {
    number: "03",
    title: "Artwork & Sample",
    description:
      "Where required, artwork and samples can be reviewed before proceeding with bulk manufacturing.",
  },
  {
    number: "04",
    title: "Bulk Production",
    description:
      "The approved clothing specifications are followed during bulk production and finishing.",
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "Finished customized clothing can be delivered across Bangalore, Karnataka and other parts of India.",
  },
];

const faqs = [
  {
    question:
      "Is TES Apparels a custom clothing manufacturer in Bangalore?",
    answer:
      "Yes. TES Apparels is a Bangalore-based custom clothing manufacturer supplying customized and bulk T-shirts, polo T-shirts, uniforms, sportswear, workwear and promotional clothing.",
  },
  {
    question:
      "What types of custom clothing can TES Apparels manufacture?",
    answer:
      "TES Apparels can manufacture customized T-shirts, polo T-shirts, corporate clothing, uniforms, sports T-shirts, sports jerseys, Dri-Fit apparel, workwear and event clothing.",
  },
  {
    question:
      "Can I order custom clothing in bulk?",
    answer:
      "Yes. TES Apparels works with bulk customized clothing requirements. Quantity, fabric, product specifications, sizes, branding and delivery requirements can be discussed for each project.",
  },
  {
    question:
      "Can our company logo be added to custom clothing?",
    answer:
      "Yes. Depending on the product and application, branding options such as embroidery, screen printing, DTF printing and custom labels can be considered.",
  },
  {
    question:
      "Can custom clothing be made in our company colours?",
    answer:
      "Yes. Custom colours can be discussed based on the selected garment, fabric and production requirements.",
  },
  {
    question:
      "Do you manufacture custom corporate clothing?",
    answer:
      "Yes. TES Apparels manufactures customized corporate T-shirts, polo T-shirts, uniforms and other branded employee clothing.",
  },
  {
    question:
      "Can you manufacture custom sports clothing?",
    answer:
      "Yes. Customized sports T-shirts, Dri-Fit apparel and sports jerseys can be manufactured for teams, academies, schools, colleges, companies and events.",
  },
  {
    question:
      "Do you manufacture custom uniforms?",
    answer:
      "Yes. Customized corporate, school, college and industrial uniforms can be manufactured according to the organization's requirements.",
  },
  {
    question:
      "Can custom clothing be supplied outside Bangalore?",
    answer:
      "Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India through PAN India delivery.",
  },
  {
    question:
      "How can I request a custom clothing quotation?",
    answer:
      "Share your required product, quantity, fabric preference, artwork or logo, sizes and delivery location with TES Apparels to discuss your customized clothing requirement and quotation.",
  },
];

const relatedPages = [
  {
    title: "Clothing Manufacturer in Bangalore",
    href: "/clothing-manufacturer-bangalore",
  },
  {
    title: "Garment Manufacturer in Bangalore",
    href: "/garment-manufacturer-bangalore",
  },
  {
    title: "Apparel Manufacturer in Bangalore",
    href: "/apparel-manufacturer-bangalore",
  },
  {
    title: "Custom T-Shirt Manufacturer",
    href: "/custom-t-shirt-manufacturer-bangalore",
  },
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
    title: "Sports T-Shirt Manufacturer",
    href: "/sports-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Sports Jersey Manufacturer",
    href: "/sports-jersey-manufacturer-bangalore",
  },
  {
    title: "Event T-Shirt Manufacturer",
    href: "/event-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Dri-Fit T-Shirt Manufacturer",
    href: "/dri-fit-t-shirt-manufacturers-bangalore",
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
      name: "Custom Clothing Manufacturing in Bangalore",
      serviceType: "Custom Clothing Manufacturing",
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
        "Customized and bulk clothing manufacturing in Bangalore including T-shirts, polo T-shirts, uniforms, sportswear, workwear and promotional clothing.",
      url: PAGE_URL,
    },
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name:
        "Custom Clothing Manufacturer in Bangalore | Custom Clothing Manufacturers",
      description:
        "TES Apparels is a custom clothing manufacturer in Bangalore supplying customized T-shirts, polo T-shirts, uniforms, sportswear, workwear and promotional clothing.",
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
          name: "Custom Clothing Manufacturer in Bangalore",
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

export default function CustomClothingManufacturerBangalorePage() {
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

          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 text-sm text-slate-300"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>

              <span className="mx-2">/</span>

              <span className="text-white">
                Custom Clothing Manufacturer in Bangalore
              </span>
            </nav>

            <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
              Custom Clothing Manufacturing in Bangalore
            </div>

            <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Custom Clothing Manufacturer in Bangalore
            </h1>

            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
              TES Apparels is a custom clothing manufacturer in Bangalore
              offering customized and bulk T-shirts, polo T-shirts, corporate
              clothing, uniforms, sportswear, workwear and promotional
              clothing.
            </p>

            <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
              We help companies, institutions, schools, colleges, sports
              teams, event organizers and organizations create clothing around
              their preferred fabric, colours, sizing, branding and product
              specifications.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#A98200]"
              >
                Request Custom Clothing Quote
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
                "Custom Clothing",
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
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Custom Clothing Manufacturing
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Clothing Designed Around Your Brand & Requirements
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Custom clothing allows organizations to select the product
                  style, fabric, colours, sizes and branding details according
                  to their intended use.
                </p>

                <p>
                  TES Apparels provides customized and bulk clothing solutions
                  for corporate, institutional, promotional, sports and
                  industrial requirements.
                </p>

                <p>
                  Our Bangalore-based operation supports organizations looking
                  for a clothing manufacturing partner that can work with
                  defined product specifications and bulk requirements.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B2341]">
                TES Apparels
              </h3>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Location
                  </dt>
                  <dd className="mt-1 font-semibold">
                    Basaveshwar Nagar, Bengaluru
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Service
                  </dt>
                  <dd className="mt-1 font-semibold">
                    Custom & Bulk Clothing Manufacturing
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Products
                  </dt>
                  <dd className="mt-1 font-semibold">
                    T-Shirts, Polos, Uniforms & Sportswear
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Delivery
                  </dt>
                  <dd className="mt-1 font-semibold">
                    Bangalore, Karnataka & India
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Custom Clothing Services
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Custom Clothing We Manufacture
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Customized clothing solutions for corporate, institutional,
                sports, promotional and industrial requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-[#0B2341]">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-5 inline-flex font-bold text-[#0B2341] hover:text-[#C49A00]"
                  >
                    Explore solution →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOMIZATION */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Customization Options
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Customize Clothing to Match Your Brand
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  A custom clothing program can include more than simply adding
                  a logo. Fabric, colour, garment style, measurements, branding
                  and finishing can all be considered as part of the
                  requirement.
                </p>

                <p>
                  TES Apparels can discuss the appropriate specifications for
                  your product and intended application before bulk
                  manufacturing.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {customizationOptions.map((item) => (
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

        {/* WHO WE SERVE */}
        <section className="bg-[#0B2341] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                Industries & Organizations
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Custom Clothing for Businesses & Institutions
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Custom clothing can be developed for organizations with
                different branding, product, quantity and usage requirements.
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

        {/* FABRICS */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Fabric Selection
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Select Fabric Based on the Application
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Fabric selection can depend on comfort, durability,
                appearance, climate, activity level and maintenance
                requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Cotton",
                  text:
                    "Comfort-oriented options for everyday T-shirts, institutional apparel and casual corporate clothing.",
                },
                {
                  title: "Poly Cotton",
                  text:
                    "Practical clothing options where durability and easy maintenance are important.",
                },
                {
                  title: "Performance Fabrics",
                  text:
                    "Suitable for sports, fitness, events and active-use apparel.",
                },
                {
                  title: "Polo Fabrics",
                  text:
                    "Professional options for corporate and institutional polo T-shirts.",
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

        {/* BRANDING */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Clothing Branding
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Add Your Brand to Custom Clothing
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Branding helps customized clothing represent the identity of
                  a company, institution, team or event.
                </p>

                <p>
                  Depending on the garment and application, branding options
                  can include embroidery, printing and custom labels.
                </p>
              </div>

              <Link
                href="/t-shirt-embroidery"
                className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white hover:bg-[#A98200]"
              >
                Explore Embroidery & Branding
              </Link>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#0B2341]">
                Common Branding Applications
              </h3>

              <div className="mt-6 space-y-3">
                {[
                  "Company logos",
                  "Institution logos",
                  "Sports team logos",
                  "Event branding",
                  "Campaign branding",
                  "Employee names",
                  "Team names",
                  "Custom labels",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
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
              From Custom Requirement to Finished Clothing
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
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
                  {step.description}
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
                  Your Custom Clothing Manufacturing Partner in Bangalore
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">
                  <p>
                    Custom clothing projects require coordination between
                    product specifications, quantities, branding and delivery
                    requirements.
                  </p>

                  <p>
                    TES Apparels supports customized clothing requirements for
                    businesses, institutions, sports organizations, events and
                    other bulk buyers.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Bangalore-based manufacturer",
                  "Custom clothing manufacturing",
                  "Bulk production",
                  "T-shirts and polo T-shirts",
                  "Corporate apparel",
                  "Uniforms",
                  "Sportswear",
                  "Sports jerseys",
                  "Dri-Fit clothing",
                  "Workwear",
                  "Printing and embroidery",
                  "PAN India delivery",
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

        {/* BANGALORE */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="rounded-3xl bg-[#0B2341] p-8 text-white shadow-xl sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                  Bangalore Custom Clothing Manufacturer
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Serving Custom Clothing Requirements Across Bangalore
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-300">
                  <p>
                    TES Apparels is based in Basaveshwar Nagar, Bengaluru and
                    supports customers across Bangalore with customized and
                    bulk clothing requirements.
                  </p>

                  <p>
                    Our services cover corporate clothing, T-shirts, polo
                    T-shirts, uniforms, sportswear, workwear, event clothing
                    and promotional apparel.
                  </p>

                  <p>
                    We also support customers across Karnataka and other parts
                    of India through PAN India delivery.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white hover:bg-[#A98200]"
                >
                  Start Your Custom Clothing Enquiry
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
                Related Manufacturing Services
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Explore TES Apparels
              </h2>
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
        <section id="faq">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Custom Clothing Manufacturer in Bangalore – FAQs
              </h2>
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
              Custom & Bulk Clothing Manufacturing
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for a Custom Clothing Manufacturer in Bangalore?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Share your product, quantity, fabric preference, artwork,
              branding requirements and delivery location with TES Apparels.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-lg bg-[#C49A00] px-8 py-4 font-bold text-white hover:bg-[#A98200]"
              >
                Request Custom Clothing Quote
              </Link>

              <a
                href="tel:+919880038910"
                className="rounded-lg border border-white/30 px-8 py-4 font-bold text-white hover:bg-white/10"
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