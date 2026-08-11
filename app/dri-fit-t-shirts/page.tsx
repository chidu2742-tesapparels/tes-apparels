import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dri-Fit T-Shirt Manufacturer in Bangalore | TES Apparels",
  description:
    "TES Apparels is a Dri-Fit T-shirt manufacturer in Bangalore supplying customized sports, school, college, corporate and team Dri-Fit T-shirts in bulk.",
  keywords: [
    "dri fit t shirt manufacturer in bangalore",
    "dri fit t shirt manufacturers in bangalore",
    "dri fit t shirt manufacturer bangalore",
    "dri fit t shirt supplier bangalore",
    "custom dri fit t shirts bangalore",
    "bulk dri fit t shirts bangalore",
    "dri fit sports t shirt manufacturer bangalore",
    "sports t shirt manufacturer bangalore",
    "custom sports t shirt manufacturer bangalore",
    "sportswear manufacturer bangalore",
    "custom sportswear manufacturer bangalore",
    "school dri fit t shirts bangalore",
    "college dri fit t shirts bangalore",
    "corporate dri fit t shirts bangalore",
    "team dri fit t shirts bangalore",
    "custom dri fit sportswear bangalore",
    "dri fit t shirt manufacturers in karnataka",
    "dri fit t shirt manufacturer in india",
  ],
  alternates: {
    canonical: "https://tesapparels.com/dri-fit-t-shirts",
  },
  openGraph: {
    title: "Dri-Fit T-Shirt Manufacturer in Bangalore | TES Apparels",
    description:
      "Customized Dri-Fit T-shirts for sports organizations, schools, colleges, IT companies, corporate teams, academies and clubs.",
    url: "https://tesapparels.com/dri-fit-t-shirts",
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dri-Fit T-Shirt Manufacturer in Bangalore | TES Apparels",
    description:
      "Bulk customized Dri-Fit T-shirts for sports teams, schools, colleges, IT companies, academies, clubs and corporate events.",
  },
};

const faqs = [
  {
    question: "Is TES Apparels a Dri-Fit T-shirt manufacturer in Bangalore?",
    answer:
      "Yes. TES Apparels is a Bangalore-based apparel manufacturer providing customized Dri-Fit T-shirts and sportswear for sports organizations, schools, colleges, IT companies, corporate teams, academies and clubs.",
  },
  {
    question: "Who can order customized Dri-Fit T-shirts?",
    answer:
      "Customized Dri-Fit T-shirts can be produced for sports organizations, schools, colleges, sports academies, clubs, corporate teams, IT companies, employee events, tournaments and promotional programs.",
  },
  {
    question: "Can Dri-Fit T-shirts be customized with our logo?",
    answer:
      "Yes. Dri-Fit T-shirts can be customized with company logos, team logos, school or college names, player names, numbers and other branding elements using suitable printing and branding methods.",
  },
  {
    question: "Can you manufacture Dri-Fit T-shirts in bulk?",
    answer:
      "Yes. TES Apparels supports bulk customized apparel requirements. Quantity, garment specifications, artwork, sizes, colours and delivery requirements can be discussed before production.",
  },
  {
    question: "Can schools and colleges order Dri-Fit T-shirts?",
    answer:
      "Yes. Schools and colleges can use customized Dri-Fit T-shirts for sports teams, physical education programs, annual sports events, house teams, college festivals and institutional activities.",
  },
  {
    question: "Do you manufacture Dri-Fit T-shirts for IT companies?",
    answer:
      "Yes. IT companies and corporate teams can use customized Dri-Fit T-shirts for sports teams, employee activities, corporate events, team outings, wellness programs and promotional campaigns.",
  },
  {
    question: "Can you customize colours and sizes?",
    answer:
      "Yes. Dri-Fit T-shirt requirements can be customized according to the approved design, colours, size range, branding requirements and intended application.",
  },
  {
    question: "Can player names and numbers be added?",
    answer:
      "Yes. Team Dri-Fit T-shirts can be customized with names, numbers and other suitable design elements depending on the selected garment and printing requirements.",
  },
  {
    question: "Do you supply Dri-Fit T-shirts outside Bangalore?",
    answer:
      "Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India through PAN India delivery.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Share your required quantity, preferred colour, design or logo, size requirements, intended use and delivery location with TES Apparels. The team can discuss your requirement and guide you through the quotation process.",
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
      "@id": "https://tesapparels.com/dri-fit-t-shirts#service",
      name: "Dri-Fit T-Shirt Manufacturing in Bangalore",
      serviceType: "Dri-Fit T-Shirt Manufacturing",
      provider: {
        "@id": "https://tesapparels.com/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Bengaluru",
      },
      description:
        "Customized Dri-Fit T-shirt manufacturing for sports organizations, schools, colleges, IT companies, corporate teams, academies and clubs.",
      url: "https://tesapparels.com/dri-fit-t-shirts",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://tesapparels.com/dri-fit-t-shirts#breadcrumb",
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
          name: "Dri-Fit T-Shirt Manufacturer in Bangalore",
          item: "https://tesapparels.com/dri-fit-t-shirts",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://tesapparels.com/dri-fit-t-shirts#faq",
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

const applications = [
  {
    title: "Sports Organizations",
    text: "Customized Dri-Fit T-shirts for sports organizations, tournaments, training programs, competitions and team activities.",
  },
  {
    title: "Schools",
    text: "Dri-Fit sportswear for school sports teams, house teams, annual sports events and physical education activities.",
  },
  {
    title: "Colleges",
    text: "Customized college team T-shirts for sports events, inter-college competitions, festivals and student activities.",
  },
  {
    title: "IT Companies",
    text: "Branded Dri-Fit T-shirts for corporate sports teams, employee wellness programs, team outings and company events.",
  },
  {
    title: "Sports Academies",
    text: "Team and training Dri-Fit apparel for sports academies, coaching centres and athlete development programs.",
  },
  {
    title: "Sports Clubs",
    text: "Customized club apparel for amateur and professional teams, leagues, tournaments and regular training.",
  },
];

const customizationOptions = [
  "Custom colours",
  "Team logo",
  "Company logo",
  "School logo",
  "College branding",
  "Player names",
  "Player numbers",
  "Custom artwork",
  "Multiple sizes",
  "Bulk production",
  "Printing",
  "Custom labels",
];

const processSteps = [
  {
    number: "01",
    title: "Requirement",
    text: "Share the quantity, intended use, colours, design, sizes and delivery location.",
  },
  {
    number: "02",
    title: "Design",
    text: "Discuss your artwork, logo placement, colours, names, numbers and branding requirements.",
  },
  {
    number: "03",
    title: "Specification",
    text: "Confirm fabric, garment specifications, sizes, printing method and production requirements.",
  },
  {
    number: "04",
    title: "Production",
    text: "Approved specifications are followed during bulk Dri-Fit T-shirt manufacturing.",
  },
  {
    number: "05",
    title: "Delivery",
    text: "Finished customized Dri-Fit T-shirts are prepared for delivery in Bangalore or other locations.",
  },
];

export default function DriFitTShirtsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="bg-white text-slate-900">
        <section className="relative overflow-hidden bg-[#0B2341]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,154,0,0.18),transparent_35%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="max-w-5xl">
              <nav
                aria-label="Breadcrumb"
                className="mb-8 text-sm text-slate-300"
              >
                <Link href="/" className="hover:text-white">
                  Home
                </Link>

                <span className="mx-2">/</span>

                <span className="text-white">
                  Dri-Fit T-Shirt Manufacturer in Bangalore
                </span>
              </nav>

              <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
                Bangalore-Based Dri-Fit T-Shirt Manufacturer
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Dri-Fit T-Shirt Manufacturer in Bangalore for Sports, Schools,
                Colleges & IT Companies
              </h1>

              <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
                TES Apparels is a Dri-Fit T-shirt manufacturer in Bangalore
                supplying customized sports and performance T-shirts for
                sports organizations, schools, colleges, IT companies,
                corporate teams, academies and clubs.
              </p>

              <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
                From team colours and logos to names, numbers, sizes and bulk
                production, we help organizations develop customized Dri-Fit
                apparel according to their requirements.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#A98200]"
                >
                  Request a Dri-Fit T-Shirt Quote
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

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Dri-Fit T-Shirt Manufacturing
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Customized Dri-Fit T-Shirts for Teams, Institutions & Companies
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Dri-Fit T-shirts are widely used for sports, training,
                  outdoor activities, employee events and team programs where
                  lightweight performance apparel is required.
                </p>

                <p>
                  TES Apparels works with sports organizations, schools,
                  colleges, IT companies, corporate teams, academies and clubs
                  looking for customized Dri-Fit T-shirts in bulk.
                </p>

                <p>
                  Requirements can be developed around team colours, logos,
                  player names, numbers, artwork, sizes and branding
                  specifications.
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
                    Product
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    Customized Dri-Fit T-Shirts
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Customers
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    Teams, Institutions & Companies
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

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Who We Serve
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Dri-Fit T-Shirts for Sports, Education & Corporate Teams
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Customized Dri-Fit apparel can be developed for different
                organizations and team requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {applications.map((item) => (
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
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Sports & Team Apparel
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Custom Dri-Fit T-Shirts for Sports Teams & Organizations
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Sports organizations, academies and clubs can use customized
                  Dri-Fit T-shirts for training sessions, tournaments,
                  competitions and team activities.
                </p>

                <p>
                  Team designs can include organization logos, team colours,
                  player names and numbers according to the approved artwork.
                </p>

                <p>
                  Bulk production makes Dri-Fit T-shirts suitable for teams
                  requiring coordinated apparel across multiple players,
                  coaches or participants.
                </p>
              </div>

              <Link
                href="/sports-jersey-manufacturer-bangalore"
                className="mt-7 inline-flex rounded-lg bg-[#0B2341] px-6 py-3 font-bold text-white transition hover:bg-[#123762]"
              >
                Explore Sports Jersey Manufacturing
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Team colours",
                "Team logo",
                "Player names",
                "Player numbers",
                "Multiple sizes",
                "Tournament apparel",
                "Training apparel",
                "Bulk team orders",
              ].map((item) => (
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

        <section className="bg-[#0B2341] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                  Corporate Dri-Fit Apparel
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Customized Dri-Fit T-Shirts for IT Companies & Corporate
                  Teams
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  IT companies and corporate organizations can use branded
                  Dri-Fit T-shirts for sports teams, employee wellness
                  programs, team outings, company events and promotional
                  activities.
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  Corporate branding can be incorporated according to the
                  organization's approved logo, colours and artwork.
                </p>

                <Link
                  href="/corporate-uniform-manufacturer"
                  className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
                >
                  Explore Corporate Uniforms
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Company logo",
                  "Corporate colours",
                  "Employee sports teams",
                  "Team outings",
                  "Wellness programs",
                  "Corporate events",
                  "Promotional campaigns",
                  "Bulk production",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C49A00] text-sm font-bold text-white">
                      ✓
                    </span>

                    <span className="font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Customization
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Customize Your Dri-Fit T-Shirts
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Customized Dri-Fit T-shirts can be developed according to your
              team, institution or company branding requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {customizationOptions.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C49A00] text-sm font-bold text-white">
                  ✓
                </span>

                <span className="font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Printing & Branding
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  Professional Branding for Customized Dri-Fit T-Shirts
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  Team logos, company logos, school branding, college names,
                  player names, numbers and other artwork can be incorporated
                  into customized Dri-Fit T-shirts using suitable printing and
                  branding methods.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  Artwork, placement and branding specifications can be
                  discussed before bulk production.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "Logo Printing",
                    "Team Branding",
                    "Player Names",
                    "Player Numbers",
                    "Custom Artwork",
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
                  Need Customized Dri-Fit T-Shirts?
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Share your logo, design, approximate quantity, preferred
                  colours and size requirements with TES Apparels.
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

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Manufacturing Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              From Design to Bulk Dri-Fit T-Shirt Production
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A clear production process helps ensure that the approved
              requirements are followed for customized team apparel.
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

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Why TES Apparels
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  A Dri-Fit Apparel Partner for Bangalore Organizations
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  TES Apparels provides customized apparel solutions for
                  organizations requiring coordinated team clothing,
                  corporate sportswear and branded Dri-Fit T-shirts.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Bangalore-based apparel manufacturer",
                  "Customized Dri-Fit T-shirts",
                  "Sports and team apparel",
                  "School and college requirements",
                  "IT and corporate teams",
                  "Sports academies and clubs",
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

        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Dri-Fit T-Shirts in Bangalore
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Dri-Fit T-Shirt Manufacturer Serving Bengaluru
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  TES Apparels is located in Basaveshwar Nagar, Bengaluru,
                  Karnataka and supports organizations looking for customized
                  Dri-Fit T-shirts and sportswear.
                </p>

                <p>
                  Our Bangalore location allows us to work with schools,
                  colleges, sports organizations, IT companies, corporate
                  teams, academies and clubs across the city.
                </p>

                <p>
                  We also support customers outside Bangalore through PAN India
                  delivery.
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
        </section>

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
                title: "Sports Jersey Manufacturer",
                href: "/sports-jersey-manufacturer-bangalore",
              },
              {
                title: "Sports T-Shirts",
                href: "/sports-t-shirts",
              },
              {
                title: "T-Shirt Manufacturer in Bangalore",
                href: "/t-shirt-manufacturer-bangalore",
              },
              {
                title: "T-Shirt Printing",
                href: "/t-shirt-printing",
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

        <section id="faq" className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Frequently Asked Questions
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Dri-Fit T-Shirt Manufacturer in Bangalore – FAQs
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

        <section className="bg-[#0B2341]">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
              Bulk Dri-Fit T-Shirt Requirement
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for a Dri-Fit T-Shirt Manufacturer in Bangalore?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Share your quantity, preferred colours, design or logo, size
              requirements and delivery location with TES Apparels. We can
              discuss your customized Dri-Fit T-shirt requirement and guide you
              through the next steps.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-lg bg-[#C49A00] px-8 py-4 font-bold text-white transition hover:bg-[#A98200]"
              >
                Request a Dri-Fit T-Shirt Quote
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