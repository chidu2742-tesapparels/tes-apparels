import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "T-Shirt Printing in Bangalore | Custom T-Shirt Printing | TES Apparels",
  description:
    "TES Apparels provides professional T-shirt printing in Bangalore for corporate uniforms, promotional campaigns, events, sports teams and bulk customized apparel using screen printing, DTF, DTG, heat transfer and sublimation.",
  keywords: [
    "t shirt printing in bangalore",
    "t-shirt printing in bangalore",
    "t shirt printing bangalore",
    "custom t shirt printing bangalore",
    "customized t shirt printing bangalore",
    "corporate t shirt printing bangalore",
    "bulk t shirt printing bangalore",
    "t shirt printing near me",
    "t shirt printing services bangalore",
    "logo printing on t shirts bangalore",
    "screen printing t shirts bangalore",
    "DTF t shirt printing bangalore",
    "DTG t shirt printing bangalore",
    "sublimation t shirt printing bangalore",
    "promotional t shirt printing bangalore",
    "corporate uniform printing bangalore",
    "custom t shirt manufacturer bangalore",
    "t shirt printing in Karnataka",
    "t shirt printing in India",
  ],
  alternates: {
    canonical: "https://tesapparels.com/t-shirt-printing",
  },
  openGraph: {
    title: "T-Shirt Printing in Bangalore | Custom T-Shirt Printing | TES Apparels",
    description:
      "Professional custom T-shirt printing in Bangalore for corporate uniforms, promotional campaigns, events, sports teams and bulk apparel requirements.",
    url: "https://tesapparels.com/t-shirt-printing",
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "T-Shirt Printing in Bangalore | TES Apparels",
    description:
      "Custom T-shirt printing services in Bangalore for corporate, promotional, sports and bulk apparel requirements.",
  },
};

const faqs = [
  {
    question: "Does TES Apparels provide T-shirt printing in Bangalore?",
    answer:
      "Yes. TES Apparels provides customized T-shirt printing solutions in Bangalore for companies, institutions, events, sports teams, promotional campaigns and organizations requiring branded apparel.",
  },
  {
    question: "What types of T-shirt printing do you offer?",
    answer:
      "Depending on the garment, artwork, quantity and application, suitable printing options can include screen printing, DTF printing, DTG printing, heat transfer and sublimation printing.",
  },
  {
    question: "Can you print our company logo on T-shirts?",
    answer:
      "Yes. Company logos, artwork, names, slogans and other branding elements can be printed on suitable T-shirts based on the garment fabric, design and production requirements.",
  },
  {
    question: "Do you provide bulk T-shirt printing?",
    answer:
      "Yes. TES Apparels supports bulk customized apparel requirements for corporate uniforms, employee T-shirts, promotional campaigns, events, schools, colleges, sports teams and institutions.",
  },
  {
    question: "Which printing method is best for corporate T-shirts?",
    answer:
      "The suitable printing method depends on the artwork, fabric, quantity, number of colours, required finish and intended use. TES Apparels can discuss these factors and recommend an appropriate printing approach.",
  },
  {
    question: "Can I choose the T-shirt colour and fabric?",
    answer:
      "Yes. T-shirt colour, fabric type, GSM, fit, sizes and branding requirements can be discussed before production depending on the selected garment and order requirements.",
  },
  {
    question: "Do you print polo T-shirts?",
    answer:
      "Yes. Customized polo T-shirts can be branded using suitable printing or embroidery techniques depending on the fabric, artwork and desired finish. Polo T-shirts are commonly used for corporate uniforms and staff apparel.",
  },
  {
    question: "Do you provide T-shirt printing outside Bangalore?",
    answer:
      "Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India through PAN India apparel supply and delivery.",
  },
  {
    question: "How can I request a quotation for T-shirt printing?",
    answer:
      "You can contact TES Apparels with the T-shirt type, approximate quantity, artwork or logo, preferred colours, printing requirement and delivery location. Our team can then discuss the requirement and next steps.",
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
      "@id": "https://tesapparels.com/t-shirt-printing#service",
      name: "T-Shirt Printing in Bangalore",
      serviceType: "T-Shirt Printing",
      provider: {
        "@id": "https://tesapparels.com/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Bengaluru",
      },
      description:
        "Custom T-shirt printing in Bangalore for corporate uniforms, promotional campaigns, events, sports teams, institutions and bulk apparel requirements.",
      url: "https://tesapparels.com/t-shirt-printing",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tesapparels.com/t-shirt-printing#breadcrumb",
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
          name: "T-Shirt Printing",
          item: "https://tesapparels.com/t-shirt-printing",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://tesapparels.com/t-shirt-printing#faq",
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

const printingMethods = [
  {
    title: "Screen Printing",
    description:
      "A widely used printing method for suitable artwork and bulk T-shirt orders. Screen printing can provide a strong and consistent print finish when the artwork and garment are suitable.",
    bestFor:
      "Corporate T-shirts, promotional apparel, events and bulk orders.",
  },
  {
    title: "DTF Printing",
    description:
      "Direct-to-film printing can be suitable for detailed artwork, logos and designs with multiple colours. The printed transfer is applied to the garment using a suitable heat application process.",
    bestFor:
      "Detailed logos, colourful artwork, customized apparel and smaller or medium production requirements.",
  },
  {
    title: "DTG Printing",
    description:
      "Direct-to-garment printing is designed for printing detailed artwork directly onto suitable garments and can be useful where colour detail is important.",
    bestFor:
      "Detailed artwork, photographic-style designs and selected cotton garments.",
  },
  {
    title: "Heat Transfer",
    description:
      "Heat transfer printing applies a prepared design to a garment using controlled heat and pressure. It can be suitable for selected customized apparel requirements.",
    bestFor:
      "Names, numbers, logos, small quantities and selected promotional applications.",
  },
  {
    title: "Sublimation",
    description:
      "Sublimation printing is commonly used for suitable polyester-based performance garments where the artwork is intended to become part of the fabric surface.",
    bestFor:
      "Sportswear, Dri-Fit apparel, team T-shirts and performance garments.",
  },
];

const customizationOptions = [
  "Company logo printing",
  "Custom artwork",
  "Corporate branding",
  "Event branding",
  "Promotional campaigns",
  "Team names",
  "Player names and numbers",
  "Custom colours",
  "Fabric selection",
  "GSM selection",
  "Size specifications",
  "Bulk production",
];

const industries = [
  "Corporate Offices",
  "IT Companies",
  "Manufacturing Companies",
  "Startups",
  "Schools",
  "Colleges",
  "Sports Teams",
  "Fitness & Gyms",
  "Events",
  "Exhibitions",
  "Promotional Campaigns",
  "Institutions",
  "Hospitality",
  "Retail Brands",
  "Employee Uniforms",
  "Workwear",
];

export default function TshirtPrintingPage() {
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
            <div className="max-w-4xl">
              <nav
                aria-label="Breadcrumb"
                className="mb-8 text-sm text-slate-300"
              >
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>

                <span className="mx-2">/</span>

                <span className="text-white">T-Shirt Printing</span>
              </nav>

              <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
                Professional Custom T-Shirt Printing
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                T-Shirt Printing in Bangalore for Corporate, Promotional &
                Customized Apparel
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                TES Apparels provides professional T-shirt printing services
                in Bangalore for corporate uniforms, promotional campaigns,
                company events, sports teams, institutions and customized bulk
                apparel requirements.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                From company logos and promotional artwork to team designs and
                customized branding, we help businesses select suitable
                garments and printing methods based on fabric, artwork,
                quantity and intended application.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#A98200]"
                >
                  Request a Quote
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
                Custom T-Shirt Printing in Bangalore
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Branded T-Shirts Designed Around Your Requirement
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Custom T-shirt printing is an effective way for businesses
                  and organizations to create consistent branded apparel.
                  However, the right result depends on more than simply
                  applying a logo to a garment.
                </p>

                <p>
                  The T-shirt fabric, colour, GSM, artwork, print size,
                  placement, number of colours and production quantity all
                  influence the final appearance and suitability of the
                  printed garment.
                </p>

                <p>
                  TES Apparels works with companies, institutions, sports
                  teams, schools, events and organizations requiring
                  professional customized T-shirts in Bangalore and across
                  India.
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
                    Service
                  </dt>

                  <dd className="mt-1 font-semibold text-slate-900">
                    Custom T-Shirt Printing
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Applications
                  </dt>

                  <dd className="mt-1 font-semibold text-slate-900">
                    Corporate, Sports & Promotional
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

        {/* PRINTING METHODS */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Printing Methods
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                T-Shirt Printing Options for Different Applications
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Different artwork, fabrics and order quantities may require
                different printing approaches. The suitable method can be
                selected based on the garment and project requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {printingMethods.map((method) => (
                <article
                  key={method.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C49A00] text-lg font-bold text-white">
                    ✓
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#0B2341]">
                    {method.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {method.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <p className="text-sm font-bold text-[#0B2341]">
                      Suitable for
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {method.bestFor}
                    </p>
                  </div>
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
                Customization
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Customize Your T-Shirts With Your Brand Identity
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Whether you need employee T-shirts, promotional apparel,
                event merchandise or sports team clothing, customization
                allows the finished garment to represent your organization
                consistently.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                TES Apparels can discuss garment colour, fabric, GSM, sizing,
                logo placement, artwork, printing method and production
                quantity before the order moves into production.
              </p>

              <Link
                href="/#contact"
                className="mt-7 inline-flex rounded-lg bg-[#0B2341] px-6 py-3 font-bold text-white transition hover:bg-[#123762]"
              >
                Discuss Your Requirement
              </Link>
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

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORPORATE PRINTING */}
        <section className="bg-[#0B2341] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                  Corporate T-Shirt Printing
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Professional Branded T-Shirts for Businesses
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  Corporate T-shirts can be used for employee engagement,
                  company events, internal campaigns, promotional activities,
                  exhibitions and branded workwear.
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  Consistent branding across employee apparel can help create
                  a professional and recognizable appearance at events,
                  workplaces and customer-facing activities.
                </p>

                <Link
                  href="/corporate-polo-t-shirts"
                  className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
                >
                  Explore Corporate Polo T-Shirts
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Company logo",
                  "Employee branding",
                  "Corporate events",
                  "Trade exhibitions",
                  "Marketing campaigns",
                  "Promotional activities",
                  "Team apparel",
                  "Bulk orders",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <span className="text-lg font-bold text-[#E4C65A]">
                      ✓
                    </span>

                    <p className="mt-2 font-semibold text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SPORTS & PROMOTIONAL */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Sports & Promotional Apparel
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Customized T-Shirts for Events, Teams & Campaigns
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Printed T-shirts can be customized for sports teams, marathons,
              college events, exhibitions, product launches, promotional
              campaigns and other group activities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Sports Teams",
                text: "Customized team apparel with logos, names, numbers and suitable performance fabrics.",
                href: "/sports-t-shirts",
              },
              {
                title: "Dri-Fit Apparel",
                text: "Lightweight performance T-shirts suitable for sports, fitness, outdoor activities and events.",
                href: "/dri-fit-t-shirts",
              },
              {
                title: "Corporate Events",
                text: "Branded T-shirts for company events, employee activities, exhibitions and promotional programs.",
                href: "/corporate-polo-t-shirts",
              },
            ].map((item) => (
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
        </section>

        {/* FABRIC */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Garment Selection
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Choose the Right T-Shirt Before Printing
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Printing quality depends not only on the artwork and printing
                process but also on selecting a garment suitable for the
                application. Fabric composition, GSM, colour, construction and
                garment finish should be considered before production.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Cotton",
                  text: "Comfortable option for many corporate, promotional and everyday T-shirt applications.",
                },
                {
                  title: "Poly Cotton",
                  text: "A practical option for selected corporate and promotional apparel requirements.",
                },
                {
                  title: "Dri-Fit",
                  text: "Performance-oriented option for sports, fitness, outdoor and active applications.",
                },
                {
                  title: "GSM Selection",
                  text: "Garment weight can be discussed according to comfort, application and product requirements.",
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

        {/* PRINTING PROCESS */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Printing Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              From Artwork to Finished T-Shirt
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A structured process helps ensure that the final printed
              apparel matches the agreed artwork and garment specifications.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "Requirement",
                text: "Share T-shirt type, quantity, artwork, colours and delivery requirements.",
              },
              {
                number: "02",
                title: "Garment",
                text: "Discuss suitable fabric, GSM, colour, fit and garment specifications.",
              },
              {
                number: "03",
                title: "Artwork",
                text: "Review logo, artwork, print size, placement and branding requirements.",
              },
              {
                number: "04",
                title: "Printing",
                text: "Use a suitable printing method based on the garment, artwork and order requirements.",
              },
              {
                number: "05",
                title: "Delivery",
                text: "Finished customized T-shirts are prepared for delivery in Bangalore or other locations.",
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
                  A Practical Partner for Customized Apparel
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  TES Apparels combines apparel manufacturing and customized
                  branding solutions for organizations that require
                  professionally finished garments in bulk.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  We focus on understanding the garment, branding and
                  production requirement before recommending a suitable
                  approach.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Bangalore-based apparel manufacturer",
                  "Corporate and promotional apparel expertise",
                  "Customized T-shirt printing",
                  "Printing and embroidery support",
                  "Sports and performance apparel",
                  "Bulk apparel production",
                  "Business and institutional requirements",
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
              Industries & Applications
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              T-Shirt Printing for Different Business Needs
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Customized printed apparel can be adapted for corporate,
              institutional, sports, promotional and event requirements.
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

        {/* LOCAL BANGALORE */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Serving Bangalore
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  T-Shirt Printing Services for Businesses Across Bengaluru
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">
                  <p>
                    TES Apparels is located in Basaveshwar Nagar, Bengaluru,
                    Karnataka. Our location allows us to support businesses and
                    organizations across Bangalore requiring customized
                    corporate, promotional and sports apparel.
                  </p>

                  <p>
                    We also support customers outside Bangalore and provide
                    apparel supply and delivery solutions across India.
                  </p>

                  <p>
                    Whether you need company T-shirts, event apparel, sports
                    team T-shirts, promotional clothing or customized bulk
                    garments, our team can discuss your printing and apparel
                    requirements.
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
                  Send an Enquiry
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
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
                title: "T-Shirt Embroidery",
                href: "/t-shirt-embroidery",
              },
              {
                title: "Corporate Polo T-Shirts",
                href: "/corporate-polo-t-shirts",
              },
              {
                title: "Sports T-Shirts",
                href: "/sports-t-shirts",
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
                T-Shirt Printing in Bangalore – FAQs
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
              Start Your Printing Requirement
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for Custom T-Shirt Printing in Bangalore?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Share your T-shirt type, approximate quantity, artwork or logo,
              preferred printing method and delivery location with TES
              Apparels. Our team will discuss your requirement and guide you
              through the next steps.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-lg bg-[#C49A00] px-8 py-4 font-bold text-white transition hover:bg-[#A98200]"
              >
                Request a Quote
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