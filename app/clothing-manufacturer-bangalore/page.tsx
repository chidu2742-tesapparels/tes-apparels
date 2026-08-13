import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://tesapparels.com";
const PAGE_URL = `${SITE_URL}/clothing-manufacturer-bangalore`;

export const metadata: Metadata = {
  title:
    "Clothing Manufacturer in Bangalore | Clothing Manufacturers in Bangalore | TES Apparels",

  description:
    "TES Apparels is a clothing manufacturer in Bangalore supplying customized and bulk T-shirts, polo T-shirts, uniforms, sportswear, workwear and promotional clothing for businesses and institutions.",

  keywords: [
    "clothing manufacturer in bangalore",
    "clothing manufacturers in bangalore",
    "clothing manufacturer bangalore",
    "clothing manufacturers bangalore",
    "clothing manufacturing company in bangalore",
    "clothing manufacturing companies in bangalore",
    "clothing manufacturer in karnataka",
    "clothing manufacturers in karnataka",
    "clothing manufacturer in india",
    "clothing manufacturers in india",
    "custom clothing manufacturer bangalore",
    "custom clothing manufacturers bangalore",
    "bulk clothing manufacturer bangalore",
    "bulk clothing manufacturers bangalore",
    "apparel manufacturer in bangalore",
    "apparel manufacturers in bangalore",
    "garment manufacturer in bangalore",
    "garment manufacturers in bangalore",
    "t shirt manufacturer in bangalore",
    "t shirt manufacturers in bangalore",
    "corporate clothing manufacturer bangalore",
    "corporate clothing manufacturers bangalore",
    "uniform manufacturer in bangalore",
    "uniform manufacturers in bangalore",
    "polo t shirt manufacturer bangalore",
    "polo t shirt manufacturers bangalore",
    "sportswear manufacturer bangalore",
    "sportswear manufacturers bangalore",
    "workwear manufacturer bangalore",
    "workwear manufacturers bangalore",
    "promotional clothing manufacturer bangalore",
    "promotional apparel manufacturer bangalore",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Clothing Manufacturer in Bangalore | Clothing Manufacturers in Bangalore",
    description:
      "Customized and bulk clothing manufacturing in Bangalore for T-shirts, polo T-shirts, uniforms, sportswear, workwear and promotional clothing.",
    url: PAGE_URL,
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Clothing Manufacturer in Bangalore | Clothing Manufacturers in Bangalore",
    description:
      "Bangalore-based clothing manufacturer for customized corporate, institutional, sports and promotional apparel.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const products = [
  {
    title: "T-Shirts",
    description:
      "Customized T-shirts for companies, institutions, events, promotional campaigns and bulk requirements.",
    href: "/t-shirt-manufacturer-bangalore",
  },
  {
    title: "Polo T-Shirts",
    description:
      "Professional polo T-shirts for corporate teams, institutions, hospitality, retail and branded apparel programs.",
    href: "/polo-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Corporate Clothing",
    description:
      "Customized corporate T-shirts, polo T-shirts and branded clothing for employee apparel programs.",
    href: "/corporate-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Uniforms",
    description:
      "Corporate, school, college and industrial uniforms manufactured according to approved requirements.",
    href: "/corporate-uniform-manufacturer",
  },
  {
    title: "Sportswear",
    description:
      "Sports T-shirts, jerseys and performance clothing for teams, academies, schools, colleges and events.",
    href: "/sports-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Dri-Fit Clothing",
    description:
      "Performance-oriented Dri-Fit T-shirts for sports, fitness, events and outdoor activities.",
    href: "/dri-fit-t-shirt-manufacturers-bangalore",
  },
  {
    title: "Workwear",
    description:
      "Customized workwear and industrial clothing for organizations requiring durable employee apparel.",
    href: "/corporate-workwear-manufacturer-bangalore",
  },
  {
    title: "Event Clothing",
    description:
      "Bulk event T-shirts and customized clothing for conferences, corporate events, marathons and promotions.",
    href: "/event-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Sports Jerseys",
    description:
      "Customized jerseys for schools, colleges, clubs, academies, corporate teams and competitions.",
    href: "/sports-jersey-manufacturer-bangalore",
  },
];

const industries = [
  "Corporate Companies",
  "IT Companies",
  "Manufacturing Companies",
  "Healthcare",
  "Schools",
  "Colleges",
  "Universities",
  "Sports Academies",
  "Fitness Centres",
  "Hospitality",
  "Retail",
  "Events",
  "Promotional Agencies",
  "Industrial Organizations",
  "Startups",
  "Institutions",
];

const capabilities = [
  "Custom clothing manufacturing",
  "Bulk clothing production",
  "T-shirt manufacturing",
  "Polo T-shirt manufacturing",
  "Corporate apparel",
  "School uniforms",
  "College uniforms",
  "Industrial workwear",
  "Sportswear",
  "Sports jerseys",
  "Dri-Fit apparel",
  "Printing and embroidery",
  "Custom labels",
  "Multiple size requirements",
  "PAN India delivery",
];

const process = [
  {
    number: "01",
    title: "Requirement",
    description:
      "Share your product, quantity, fabric preference, artwork, sizes and delivery requirements.",
  },
  {
    number: "02",
    title: "Specifications",
    description:
      "Finalize clothing style, fabric, GSM, colours, sizes and branding requirements.",
  },
  {
    number: "03",
    title: "Sample",
    description:
      "Where required, product samples and artwork can be reviewed before bulk production.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Bulk clothing is produced according to the approved specifications and branding requirements.",
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "Finished clothing is prepared for delivery across Bangalore, Karnataka and other parts of India.",
  },
];

const faqs = [
  {
    question: "Is TES Apparels a clothing manufacturer in Bangalore?",
    answer:
      "Yes. TES Apparels is a Bangalore-based clothing manufacturer supplying customized and bulk clothing including T-shirts, polo T-shirts, uniforms, sportswear, workwear and promotional apparel.",
  },
  {
    question: "What types of clothing does TES Apparels manufacture?",
    answer:
      "TES Apparels manufactures customized T-shirts, polo T-shirts, corporate clothing, uniforms, sports T-shirts, sports jerseys, Dri-Fit apparel, workwear and event clothing.",
  },
  {
    question: "Do you manufacture clothing in bulk?",
    answer:
      "Yes. TES Apparels focuses on customized and bulk clothing requirements. Product specifications, quantities, fabric, sizing, branding and delivery requirements can be discussed for each project.",
  },
  {
    question: "Can clothing be customized with our company logo?",
    answer:
      "Yes. Depending on the product and application, branding options such as embroidery, screen printing, DTF printing and custom labels can be considered.",
  },
  {
    question: "Do you manufacture corporate clothing?",
    answer:
      "Yes. TES Apparels supplies corporate T-shirts, polo T-shirts, uniforms and other branded clothing for companies and organizations.",
  },
  {
    question: "Do you manufacture school and college clothing?",
    answer:
      "Yes. Customized school and college uniforms, T-shirts, polo T-shirts and sportswear can be manufactured according to institutional requirements.",
  },
  {
    question: "Do you manufacture sports clothing?",
    answer:
      "Yes. TES Apparels manufactures sports T-shirts, Dri-Fit apparel and customized sports jerseys for teams, academies, schools, colleges and corporate teams.",
  },
  {
    question: "Do you manufacture promotional clothing?",
    answer:
      "Yes. Customized promotional T-shirts and event clothing can be produced for campaigns, conferences, events, marketing programs and promotional activities.",
  },
  {
    question: "Do you supply clothing outside Bangalore?",
    answer:
      "Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India through PAN India delivery.",
  },
  {
    question: "How can I request a clothing manufacturing quotation?",
    answer:
      "You can contact TES Apparels with your required product, quantity, fabric preference, artwork or logo, sizes and delivery location to discuss your requirement and quotation.",
  },
];

const relatedPages = [
  {
    title: "Apparel Manufacturer in Bangalore",
    href: "/apparel-manufacturer-bangalore",
  },
  {
    title: "Garment Manufacturer in Bangalore",
    href: "/garment-manufacturer-bangalore",
  },
  {
    title: "T-Shirt Manufacturer in Bangalore",
    href: "/t-shirt-manufacturer-bangalore",
  },
  {
    title: "Custom T-Shirt Manufacturer",
    href: "/custom-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Corporate T-Shirt Manufacturer",
    href: "/corporate-t-shirt-manufacturer-bangalore",
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
    title: "Dri-Fit T-Shirt Manufacturer",
    href: "/dri-fit-t-shirt-manufacturers-bangalore",
  },
  {
    title: "Sports Jersey Manufacturer",
    href: "/sports-jersey-manufacturer-bangalore",
  },
  {
    title: "Event T-Shirt Manufacturer",
    href: "/event-t-shirt-manufacturer-bangalore",
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
      name: "Clothing Manufacturing in Bangalore",
      serviceType: "Clothing Manufacturing",
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
        "Clothing Manufacturer in Bangalore | Clothing Manufacturers in Bangalore",
      description:
        "TES Apparels is a clothing manufacturer in Bangalore supplying customized T-shirts, uniforms, corporate clothing, sportswear, workwear and bulk apparel.",
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
          name: "Clothing Manufacturer in Bangalore",
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

export default function ClothingManufacturerBangalorePage() {
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
                Clothing Manufacturer in Bangalore
              </span>
            </nav>

            <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
              Bangalore Clothing Manufacturing
            </div>

            <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Clothing Manufacturer in Bangalore for Customized & Bulk Clothing
            </h1>

            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
              TES Apparels is a clothing manufacturer in Bangalore supplying
              customized T-shirts, polo T-shirts, corporate clothing,
              uniforms, sportswear, workwear, event apparel and promotional
              clothing.
            </p>

            <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
              We work with companies, institutions, schools, colleges, sports
              teams, event organizers and organizations looking for consistent
              clothing specifications, branding, sizing and bulk production.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#A98200]"
              >
                Request Clothing Quote
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
                "Customized Clothing",
                "Bulk Production",
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

        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Clothing Manufacturing in Bangalore
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Customized Clothing Manufacturing for Businesses & Institutions
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Businesses and institutions often require clothing that
                  represents their brand, team, employees, students or event.
                </p>

                <p>
                  TES Apparels provides customized and bulk clothing solutions
                  based on product specifications, fabric, GSM, colours,
                  sizing, branding and quantity requirements.
                </p>

                <p>
                  Our Bangalore-based apparel operation supports organizations
                  looking for a reliable clothing manufacturing partner for
                  corporate apparel, uniforms, promotional clothing and sports
                  requirements.
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
                    Manufacturing
                  </dt>
                  <dd className="mt-1 font-semibold">
                    Customized & Bulk Clothing
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Products
                  </dt>
                  <dd className="mt-1 font-semibold">
                    T-Shirts, Uniforms, Sportswear & Workwear
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

        {/* PRODUCTS */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Clothing Products
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Clothing Manufacturing Solutions
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Customized clothing categories for corporate, institutional,
                sports, promotional and industrial requirements.
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
                    {product.description}
                  </p>

                  <Link
                    href={product.href}
                    className="mt-5 inline-flex font-bold text-[#0B2341] hover:text-[#C49A00]"
                  >
                    Explore solution →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Manufacturing Capabilities
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                What Our Clothing Manufacturing Service Covers
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Clothing manufacturing requires attention to fabric,
                  construction, colours, measurements, branding and finishing.
                </p>

                <p>
                  TES Apparels can discuss these specifications before bulk
                  production so the finished clothing matches the intended
                  application.
                </p>
              </div>
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
                Industries Served
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Clothing Manufacturing for Different Industries
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Customized clothing can be developed for businesses,
                institutions, teams and organizations according to their
                requirements.
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
                Customization
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Customized Clothing Built Around Your Requirements
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Every organization can have different requirements for
                  colours, fabrics, garment styles, sizes, logos and branding.
                </p>

                <p>
                  Customized clothing production allows these specifications
                  to be considered before bulk manufacturing.
                </p>
              </div>

              <Link
                href="/t-shirt-embroidery"
                className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white hover:bg-[#A98200]"
              >
                Explore Branding Options
              </Link>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#0B2341]">
                Common Clothing Customization
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Fabric Selection",
                  "GSM Selection",
                  "Custom Colours",
                  "Custom Sizes",
                  "Company Logo",
                  "Institution Logo",
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
                Fabrics & Specifications
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Clothing Fabric Selection Based on Application
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Fabric selection can depend on comfort, durability, appearance,
                activity level, climate, maintenance requirements and intended
                use.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Cotton",
                  text:
                    "Comfort-focused clothing options for everyday T-shirts and institutional apparel.",
                },
                {
                  title: "Poly Cotton",
                  text:
                    "A practical option for applications requiring durability and easy maintenance.",
                },
                {
                  title: "Performance",
                  text:
                    "Suitable for sports, fitness, events and active-use clothing.",
                },
                {
                  title: "Polo & Formal",
                  text:
                    "Suitable for professional corporate and institutional clothing programs.",
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
              Clothing Manufacturing Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              From Requirement to Bulk Clothing Production
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
                  A Bangalore Clothing Manufacturing Partner
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">
                  <p>
                    Organizations need clothing suppliers who can understand
                    product specifications, branding requirements and bulk
                    quantities.
                  </p>

                  <p>
                    TES Apparels supports customized clothing requirements for
                    corporate, institutional, sports, promotional and
                    industrial applications.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Bangalore-based clothing manufacturer",
                  "Customized clothing production",
                  "Bulk clothing manufacturing",
                  "T-shirts and polo T-shirts",
                  "Corporate clothing",
                  "School and college uniforms",
                  "Sportswear and jerseys",
                  "Dri-Fit apparel",
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
                  Bangalore Clothing Manufacturer
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Serving Customers Across Bangalore
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-300">
                  <p>
                    TES Apparels is based in Basaveshwar Nagar, Bengaluru and
                    supports businesses and institutions across Bangalore with
                    customized and bulk clothing requirements.
                  </p>

                  <p>
                    Our product range includes T-shirts, polo T-shirts,
                    corporate clothing, uniforms, sportswear, workwear and
                    promotional clothing.
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
                  Start Your Clothing Enquiry
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

        {/* RELATED */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Related Solutions
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Explore TES Apparels Manufacturing Services
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
                Clothing Manufacturer in Bangalore – FAQs
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

        {/* CTA */}
        <section className="bg-[#0B2341]">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
              Customized & Bulk Clothing Manufacturing
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for a Clothing Manufacturer in Bangalore?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Share your clothing requirements, quantity, preferred fabric,
              artwork, branding requirements and delivery location with TES
              Apparels.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-lg bg-[#C49A00] px-8 py-4 font-bold text-white hover:bg-[#A98200]"
              >
                Request Clothing Quote
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