import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sports Jersey Manufacturer in Bangalore | Custom Team Jerseys",
  description:
    "TES Apparels is a sports jersey manufacturer in Bangalore supplying custom cricket jerseys, football jerseys, running T-shirts, marathon apparel and bulk team jerseys for schools, colleges, sports clubs, academies, corporate teams and organizations.",
  keywords: [
    "sports jersey manufacturer in bangalore",
    "sports jersey manufacturers in bangalore",
    "custom sports jersey manufacturer bangalore",
    "sports jersey manufacturer bangalore",
    "sports jersey supplier bangalore",
    "custom jersey manufacturer bangalore",
    "bulk sports jersey manufacturer bangalore",
    "team jersey manufacturer bangalore",
    "custom team jersey manufacturer bangalore",
    "cricket jersey manufacturer bangalore",
    "custom cricket jersey manufacturer bangalore",
    "cricket jersey supplier bangalore",
    "football jersey manufacturer bangalore",
    "running jersey manufacturer bangalore",
    "marathon t shirt manufacturer bangalore",
    "marathon t shirt supplier bangalore",
    "sports t shirt manufacturer bangalore",
    "sportswear manufacturer bangalore",
    "college sports jersey manufacturer bangalore",
    "school sports jersey manufacturer bangalore",
    "corporate sports jersey manufacturer bangalore",
    "custom sportswear manufacturer bangalore",
    "sports jersey manufacturer in Karnataka",
    "sports jersey manufacturer in India",
    "bulk custom jerseys India",
  ],
  alternates: {
    canonical: "https://tesapparels.com/sports-jersey-manufacturer-bangalore",
  },
  openGraph: {
    title: "Sports Jersey Manufacturer in Bangalore | TES Apparels",
    description:
      "Custom sports jerseys, cricket jerseys, running T-shirts, marathon apparel and bulk team jerseys for schools, colleges, sports clubs, organizations and corporate teams.",
    url: "https://tesapparels.com/sports-jersey-manufacturer-bangalore",
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sports Jersey Manufacturer in Bangalore | TES Apparels",
    description:
      "Custom sports jerseys and bulk team apparel for cricket teams, colleges, running communities, marathon organizers, sports organizations and corporate teams.",
  },
};

const faqs = [
  {
    question:
      "Is TES Apparels a sports jersey manufacturer in Bangalore?",
    answer:
      "Yes. TES Apparels provides customized sports jerseys and sports apparel for teams, schools, colleges, sports organizations, academies, clubs, running communities and corporate sports teams.",
  },
  {
    question: "What types of sports jerseys can you manufacture?",
    answer:
      "TES Apparels can manufacture customized sports jerseys and team apparel for cricket, football, running, training, college sports, school sports, corporate sports events and other team requirements.",
  },
  {
    question: "Can you manufacture custom cricket jerseys?",
    answer:
      "Yes. Custom cricket jerseys can be developed according to team colours, player requirements, artwork, branding, numbers, names and other specifications.",
  },
  {
    question: "Do you manufacture jerseys for colleges and schools?",
    answer:
      "Yes. TES Apparels supports school and college sports requirements including team jerseys, sports T-shirts, event apparel and customized athletic clothing.",
  },
  {
    question: "Can you supply jerseys for running communities and marathons?",
    answer:
      "Yes. Running communities, marathon organizers and event organizers can order customized running T-shirts and sports apparel based on event branding, participant requirements and quantities.",
  },
  {
    question: "Can corporate and IT companies order sports jerseys?",
    answer:
      "Yes. Corporate and IT companies can order customized sports jerseys and T-shirts for employee sports teams, tournaments, annual events, fitness activities and corporate competitions.",
  },
  {
    question: "Can player names and numbers be added?",
    answer:
      "Yes. Player names, numbers, logos and other artwork can be incorporated depending on the selected garment and branding method.",
  },
  {
    question: "Can sports jerseys be customized with team colours?",
    answer:
      "Yes. Team colours, artwork, branding elements and garment specifications can be discussed during the customization process.",
  },
  {
    question: "Do you accept bulk sports jersey orders?",
    answer:
      "Yes. TES Apparels supports bulk sports apparel requirements for teams, schools, colleges, clubs, academies, organizations, events and corporate sports programs.",
  },
  {
    question: "Do you supply sports jerseys outside Bangalore?",
    answer:
      "Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India through PAN India delivery.",
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
        "https://tesapparels.com/sports-jersey-manufacturer-bangalore#service",
      name: "Sports Jersey Manufacturing in Bangalore",
      serviceType: "Custom Sports Jersey Manufacturing",
      provider: {
        "@id": "https://tesapparels.com/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Bengaluru",
      },
      description:
        "Custom sports jersey manufacturing for schools, colleges, sports organizations, cricket teams, running communities, marathon organizers, sports clubs, academies and corporate sports teams.",
      url: "https://tesapparels.com/sports-jersey-manufacturer-bangalore",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://tesapparels.com/sports-jersey-manufacturer-bangalore#breadcrumb",
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
          name: "Sports Jersey Manufacturer in Bangalore",
          item:
            "https://tesapparels.com/sports-jersey-manufacturer-bangalore",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tesapparels.com/sports-jersey-manufacturer-bangalore#faq",
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

const sportsProducts = [
  {
    title: "Custom Cricket Jerseys",
    text:
      "Customized cricket jerseys for school teams, college teams, clubs, academies, corporate teams and tournament requirements.",
  },
  {
    title: "Football Jerseys",
    text:
      "Team football jerseys customized with team colours, logos, player names, numbers and other branding requirements.",
  },
  {
    title: "Running T-Shirts",
    text:
      "Customized running T-shirts for running communities, fitness groups, clubs, events and organized running programs.",
  },
  {
    title: "Marathon T-Shirts",
    text:
      "Event-branded T-shirts for marathon organizers, running events, corporate fitness programs and participant groups.",
  },
  {
    title: "College Sports Jerseys",
    text:
      "Customized sports jerseys and team apparel for colleges, universities, student teams and inter-college competitions.",
  },
  {
    title: "Corporate Sports Jerseys",
    text:
      "Branded sports jerseys for IT companies, corporate offices, employee teams, tournaments and company sports events.",
  },
];

const customerSegments = [
  "Sports Organizations",
  "Schools",
  "Colleges",
  "Universities",
  "Sports Academies",
  "Sports Clubs",
  "Cricket Teams",
  "Football Teams",
  "Running Communities",
  "Marathon Organizers",
  "Corporate Sports Teams",
  "IT Companies",
  "Professional Teams",
  "Amateur Teams",
  "Tournament Organizers",
  "Fitness Communities",
];

const customizationOptions = [
  "Team colours",
  "Team logo",
  "Player names",
  "Player numbers",
  "Custom artwork",
  "Sublimation designs",
  "Printing",
  "Embroidery",
  "Custom labels",
  "Fabric selection",
  "GSM selection",
  "Custom sizing",
];

const processSteps = [
  {
    number: "01",
    title: "Share Requirement",
    text:
      "Share your team, event or organization requirement, approximate quantity, product type and delivery location.",
  },
  {
    number: "02",
    title: "Design & Specification",
    text:
      "Discuss team colours, artwork, logos, names, numbers, fabric, GSM, sizes and other garment specifications.",
  },
  {
    number: "03",
    title: "Artwork & Sample",
    text:
      "Where required, artwork and samples can be reviewed before proceeding with the bulk sportswear order.",
  },
  {
    number: "04",
    title: "Bulk Production",
    text:
      "Approved specifications are followed during production to create the required team apparel.",
  },
  {
    number: "05",
    title: "Delivery",
    text:
      "Finished sports jerseys and apparel are prepared for delivery in Bangalore or other locations across India.",
  },
];

const relatedLinks = [
  {
    title: "Sports T-Shirts",
    href: "/sports-t-shirts",
  },
  {
    title: "Dri-Fit T-Shirts",
    href: "/dri-fit-t-shirts",
  },
  {
    title: "T-Shirt Manufacturer in Bangalore",
    href: "/t-shirt-manufacturer-bangalore",
  },
  {
    title: "T-Shirt Printing",
    href: "/t-shirt-printing",
  },
  {
    title: "T-Shirt Embroidery",
    href: "/t-shirt-embroidery",
  },
  {
    title: "Corporate Polo T-Shirts",
    href: "/corporate-polo-t-shirts",
  },
];

export default function SportsJerseyManufacturerBangalorePage() {
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
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>

                <span className="mx-2">/</span>

                <span className="text-white">
                  Sports Jersey Manufacturer in Bangalore
                </span>
              </nav>

              <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
                Bangalore-Based Sports Apparel Manufacturer
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Sports Jersey Manufacturer in Bangalore for Teams,
                Colleges & Organizations
              </h1>

              <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
                TES Apparels is a sports jersey manufacturer in Bangalore
                supplying customized team jerseys, cricket jerseys, sports
                T-shirts, running apparel and event merchandise for schools,
                colleges, sports organizations, academies, clubs, corporate
                teams and sporting communities.
              </p>

              <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
                From cricket teams and college sports teams to running
                communities, marathon organizers and corporate IT sports
                teams, we support bulk customized sportswear requirements with
                team colours, logos, names, numbers and other branding
                requirements.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#A98200]"
                >
                  Request a Sports Jersey Quote
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
                Custom Sports Jersey Manufacturing
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Custom Sports Jerseys for Teams, Events & Sporting
                Organizations
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  A customized sports jersey helps create a strong identity
                  for a team, sporting organization, college, academy,
                  corporate group or event. Team colours, logos, player
                  details and coordinated apparel can create a consistent
                  appearance across participants.
                </p>

                <p>
                  TES Apparels provides customized sports apparel for cricket
                  teams, football teams, school and college sports programs,
                  running communities, marathon events, sports clubs,
                  academies and corporate sports teams.
                </p>

                <p>
                  Requirements can be developed around team jerseys, sports
                  T-shirts, running T-shirts, marathon apparel and other
                  customized sportswear based on quantity and specifications.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-[#0B2341]">
                TES Apparels Sportswear
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
                    Products
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    Jerseys, Sports T-Shirts & Running Apparel
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Customers
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    Teams, Colleges, Clubs & Organizations
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
                Sports Apparel Products
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Custom Sports Jerseys & Team Apparel
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Customized sportswear can be developed for individual teams,
                institutions, sporting events, tournaments and corporate
                sports programs.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sportsProducts.map((item) => (
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
                    href="/#contact"
                    className="mt-5 inline-flex font-bold text-[#0B2341] hover:text-[#C49A00]"
                  >
                    Request details →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TARGET CUSTOMERS */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Who We Serve
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Sports Jerseys for Teams, Colleges, Events & Organizations
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              TES Apparels supports customized sports apparel requirements
              across educational institutions, sports organizations,
              communities, businesses and sporting events.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {customerSegments.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B2341] text-sm font-bold text-white">
                  ✓
                </span>

                <span className="font-semibold text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CRICKET */}
        <section className="bg-[#0B2341] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                  Cricket Team Jerseys
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Custom Cricket Jerseys for Teams & Tournaments
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  Cricket teams, colleges, academies, clubs and corporate
                  organizations can develop customized cricket jerseys based
                  on team colours, logos, player names, numbers and other
                  requirements.
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  Whether the requirement is for a local cricket team, college
                  tournament, corporate cricket competition or organized
                  league event, customized team apparel can help create a
                  professional and coordinated team appearance.
                </p>

                <Link
                  href="/#contact"
                  className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
                >
                  Enquire for Cricket Jerseys
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Team logo",
                  "Player names",
                  "Player numbers",
                  "Team colours",
                  "Custom artwork",
                  "Tournament branding",
                  "Bulk team orders",
                  "Custom sizing",
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

        {/* RUNNING & MARATHON */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Running Communities & Marathon Events
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Custom Running T-Shirts for Marathons & Running Communities
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Running communities, marathon organizers, fitness groups
                  and corporate wellness programs can use customized running
                  T-shirts to create a coordinated participant experience.
                </p>

                <p>
                  Event apparel can be customized around event branding,
                  organization logos, sponsor requirements, participant
                  groups, colours and other specifications.
                </p>

                <p>
                  TES Apparels can support bulk requirements for organized
                  running events, community runs, corporate fitness programs
                  and other sporting activities.
                </p>
              </div>

              <Link
                href="/#contact"
                className="mt-7 inline-flex rounded-lg bg-[#0B2341] px-6 py-3 font-bold text-white transition hover:bg-[#123762]"
              >
                Enquire for Running Event Apparel
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-2xl font-bold text-[#0B2341]">
                Suitable For
              </h3>

              <div className="mt-6 grid gap-3">
                {[
                  "Marathon organizers",
                  "Running communities",
                  "City runs",
                  "Corporate runs",
                  "Fitness communities",
                  "College running events",
                  "Charity runs",
                  "Sports events",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg bg-white px-5 py-4 font-semibold text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CORPORATE */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="rounded-2xl bg-[#0B2341] p-8 text-white shadow-xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                  Corporate Sports Teams
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Sports Jerseys for IT & Corporate Teams
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  IT companies and corporate organizations can order
                  customized sports jerseys and T-shirts for employee teams,
                  inter-company tournaments, annual sports events, fitness
                  programs and corporate competitions.
                </p>

                <Link
                  href="/#contact"
                  className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
                >
                  Request Corporate Sportswear
                </Link>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Corporate Team Apparel
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  Build a Consistent Team Identity
                </h2>

                <div className="mt-6 space-y-4">
                  {[
                    "Company logo and branding",
                    "Employee team colours",
                    "Player names and numbers",
                    "Inter-company tournaments",
                    "Annual sports events",
                    "Corporate fitness activities",
                    "IT company sports teams",
                    "Bulk team requirements",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
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
          </div>
        </section>

        {/* CUSTOMIZATION */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Sportswear Customization
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Customize Your Sports Jersey & Team Apparel
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Sports apparel can be developed around your team identity,
              artwork, branding and garment specifications.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {customizationOptions.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B2341] font-bold text-white">
                  ✓
                </span>

                <span className="font-semibold text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Sports Jersey Manufacturing Process
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                From Team Requirement to Finished Jerseys
              </h2>
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
          </div>
        </section>

        {/* WHY TES */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Why TES Apparels
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                A Sports Apparel Manufacturing Partner in Bangalore
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                TES Apparels supports customized sportswear requirements where
                team identity, garment specifications, branding and bulk
                production are important.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                From school and college teams to cricket clubs, running
                communities, marathon organizers and corporate sports teams,
                requirements can be developed according to the intended use
                and quantity.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Bangalore-based apparel manufacturer",
                "Custom sports jerseys",
                "Cricket team apparel",
                "School and college sportswear",
                "Running and marathon T-shirts",
                "Corporate sports jerseys",
                "Printing and branding support",
                "Bulk production",
                "PAN India delivery support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl bg-slate-50 p-4 shadow-sm"
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
        </section>

        {/* BANGALORE */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Sports Jerseys in Bangalore
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  Sports Jersey Manufacturer Serving Teams Across Bengaluru
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">
                  <p>
                    TES Apparels is located in Basaveshwar Nagar, Bengaluru,
                    Karnataka and supports organizations looking for
                    customized sports jerseys and sports apparel.
                  </p>

                  <p>
                    We can support requirements from schools, colleges, sports
                    clubs, academies, running communities, corporate teams and
                    sporting organizations across Bangalore.
                  </p>

                  <p>
                    Customers outside Bangalore can also discuss bulk sports
                    apparel requirements with TES Apparels for delivery across
                    Karnataka and other parts of India.
                  </p>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Basaveshwar Nagar",
                    "Rajajinagar",
                    "Peenya",
                    "Yeshwanthpur",
                    "Electronic City",
                    "Whitefield",
                    "Koramangala",
                    "HSR Layout",
                    "Jayanagar",
                    "Vijayanagar",
                    "Malleshwaram",
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
                  Send a Sports Jersey Enquiry
                </Link>
              </aside>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Related Sports Apparel
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Explore More TES Apparels Solutions
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((item) => (
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
                Sports Jersey Manufacturer in Bangalore – FAQs
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
              Bulk Sports Jersey Requirement
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for a Sports Jersey Manufacturer in Bangalore?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Share your team or event requirement, approximate quantity,
              preferred sportswear, team branding and delivery location with
              TES Apparels. We can discuss the specifications required for
              your bulk sports jersey order.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-lg bg-[#C49A00] px-8 py-4 font-bold text-white transition hover:bg-[#A98200]"
              >
                Request a Sports Jersey Quote
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
