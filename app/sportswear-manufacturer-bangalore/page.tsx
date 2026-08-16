    import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://tesapparels.com";
const PAGE_URL = `${SITE_URL}/sportswear-manufacturer-bangalore`;

export const metadata: Metadata = {
  title:
    "Sportswear Manufacturer in Bangalore | Sportswear Manufacturers | TES Apparels",

  description:
    "TES Apparels is a sportswear manufacturer in Bangalore offering custom sports T-shirts, jerseys, Dri-Fit apparel, teamwear, uniforms and sports clothing for schools, colleges, academies, companies, events and teams.",

  keywords: [
    "sportswear manufacturer in bangalore",
    "sportswear manufacturers in bangalore",
    "sportswear manufacturer bangalore",
    "sportswear manufacturers bangalore",
    "sportswear manufacturing company bangalore",
    "sportswear manufacturing companies bangalore",
    "sportswear manufacturer in karnataka",
    "sportswear manufacturers in karnataka",
    "sportswear manufacturer in india",
    "sportswear manufacturers in india",
    "custom sportswear manufacturer bangalore",
    "custom sportswear manufacturers bangalore",
    "sports clothing manufacturer bangalore",
    "sports clothing manufacturers bangalore",
    "sports apparel manufacturer bangalore",
    "sports apparel manufacturers bangalore",
    "sportswear supplier bangalore",
    "sportswear suppliers bangalore",
    "bulk sportswear manufacturer bangalore",
    "bulk sportswear manufacturers bangalore",
    "teamwear manufacturer bangalore",
    "teamwear manufacturers bangalore",
    "sports jersey manufacturer bangalore",
    "sports jersey manufacturers bangalore",
    "sports t shirt manufacturer bangalore",
    "sports t shirt manufacturers bangalore",
    "dri fit t shirt manufacturer bangalore",
    "dri fit t shirt manufacturers bangalore",
    "custom sports jersey manufacturer bangalore",
    "custom sports jersey manufacturers bangalore",
    "sports uniform manufacturer bangalore",
    "sports uniform manufacturers bangalore",
    "school sportswear manufacturer bangalore",
    "college sportswear manufacturer bangalore",
    "corporate sportswear manufacturer bangalore",
    "event sportswear manufacturer bangalore",
    "running t shirt manufacturer bangalore",
    "fitness apparel manufacturer bangalore",
    "athletic wear manufacturer bangalore",
    "sports clothing manufacturer in bangalore",
    "sports apparel manufacturer in bangalore",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Sportswear Manufacturer in Bangalore | Sportswear Manufacturers",
    description:
      "Custom and bulk sportswear manufacturing in Bangalore including sports T-shirts, jerseys, Dri-Fit apparel and teamwear.",
    url: PAGE_URL,
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sportswear Manufacturer in Bangalore | Sportswear Manufacturers",
    description:
      "Custom sportswear manufacturer in Bangalore for teams, schools, colleges, companies, academies and events.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const products = [
  {
    title: "Sports T-Shirts",
    description:
      "Custom sports T-shirts manufactured for teams, schools, colleges, academies, companies and sporting events.",
    href: "/sports-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Sports Jerseys",
    description:
      "Customized team jerseys with your preferred colours, designs, numbers, names and branding requirements.",
    href: "/sports-jersey-manufacturer-bangalore",
  },
  {
    title: "Dri-Fit Sportswear",
    description:
      "Performance-oriented Dri-Fit apparel for running, fitness, training, sports and active events.",
    href: "/dri-fit-t-shirt-manufacturers-bangalore",
  },
  {
    title: "Teamwear",
    description:
      "Coordinated sports clothing for clubs, academies, corporate teams, schools and colleges.",
    href: "/sports-t-shirts",
  },
  {
    title: "Sports Uniforms",
    description:
      "Customized sports uniforms for educational institutions, academies and organized teams.",
    href: "/school-uniform-manufacturer-bangalore",
  },
  {
    title: "Event Sportswear",
    description:
      "Bulk sportswear for marathons, tournaments, corporate sports days and promotional events.",
    href: "/event-t-shirt-manufacturer-bangalore",
  },
];

const applications = [
  "Football Teams",
  "Cricket Teams",
  "Badminton Teams",
  "Kabaddi Teams",
  "Basketball Teams",
  "Volleyball Teams",
  "Running Events",
  "Marathons",
  "Cycling Events",
  "Fitness Centres",
  "Sports Academies",
  "Schools",
  "Colleges",
  "Universities",
  "Corporate Sports Teams",
  "Corporate Sports Days",
  "Tournaments",
  "Sports Events",
];

const customization = [
  "Custom colours",
  "Custom designs",
  "Team logos",
  "Company logos",
  "School logos",
  "College logos",
  "Player names",
  "Player numbers",
  "Sponsor branding",
  "Sleeve branding",
  "Chest branding",
  "Back branding",
  "Custom labels",
  "Custom sizes",
  "Fabric selection",
  "GSM selection",
];

const fabrics = [
  {
    title: "Dri-Fit",
    description:
      "Lightweight performance-oriented fabric suitable for sports, running, fitness and active events.",
  },
  {
    title: "Polyester",
    description:
      "Durable sportswear option suitable for team jerseys, training apparel and uniforms.",
  },
  {
    title: "Poly-Cotton",
    description:
      "Practical option where comfort, durability and everyday use are important.",
  },
  {
    title: "Performance Fabrics",
    description:
      "Sports-oriented fabric options selected according to the intended activity and garment design.",
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us the sport, product type, quantity, sizes, colours and delivery requirements.",
  },
  {
    number: "02",
    title: "Finalize Specifications",
    description:
      "Discuss fabric, GSM, design, measurements, branding, names, numbers and finishing.",
  },
  {
    number: "03",
    title: "Artwork & Sample",
    description:
      "Where required, artwork and product samples can be reviewed before bulk production.",
  },
  {
    number: "04",
    title: "Bulk Manufacturing",
    description:
      "Approved specifications are followed during production, branding and finishing.",
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "Completed sportswear can be delivered across Bangalore, Karnataka and other parts of India.",
  },
];

const benefits = [
  "Bangalore-based sportswear manufacturer",
  "Custom sportswear manufacturing",
  "Bulk production",
  "Sports T-shirts",
  "Sports jerseys",
  "Dri-Fit apparel",
  "Teamwear",
  "Sports uniforms",
  "Custom colours and designs",
  "Player names and numbers",
  "Printing and branding",
  "PAN India delivery",
];

const faqs = [
  {
    question: "Is TES Apparels a sportswear manufacturer in Bangalore?",
    answer:
      "Yes. TES Apparels is a Bangalore-based sportswear manufacturer supplying customized and bulk sports T-shirts, jerseys, Dri-Fit apparel, teamwear and sports clothing.",
  },
  {
    question: "What sportswear does TES Apparels manufacture?",
    answer:
      "TES Apparels manufactures sports T-shirts, sports jerseys, Dri-Fit apparel, teamwear, sports uniforms and customized sports clothing for organizations and teams.",
  },
  {
    question: "Can you manufacture custom sportswear in bulk?",
    answer:
      "Yes. TES Apparels supports bulk sportswear requirements. Product specifications, quantities, fabric, sizes, designs and branding can be discussed for each project.",
  },
  {
    question: "Can sports jerseys include player names and numbers?",
    answer:
      "Yes. Player names, numbers, team branding and other customization requirements can be considered depending on the garment and production specifications.",
  },
  {
    question: "Can we use our own sports team design?",
    answer:
      "Yes. Customers can provide their preferred artwork, team colours, logos and design requirements for customized sportswear.",
  },
  {
    question: "Do you manufacture Dri-Fit sports T-shirts?",
    answer:
      "Yes. Dri-Fit and other performance-oriented sports T-shirts can be manufactured for sports, running, fitness, events and active-use applications.",
  },
  {
    question: "Do you manufacture sportswear for schools and colleges?",
    answer:
      "Yes. Customized sports T-shirts, jerseys and sports uniforms can be supplied for schools, colleges, universities and educational institutions.",
  },
  {
    question: "Do you manufacture corporate sportswear?",
    answer:
      "Yes. TES Apparels supplies customized sportswear for corporate teams, company sports days, employee events and organizational activities.",
  },
  {
    question: "Can sportswear be branded with a company or team logo?",
    answer:
      "Yes. Depending on the garment, branding can include printing, embroidery, names, numbers, labels and other customization methods.",
  },
  {
    question: "Do you deliver sportswear outside Bangalore?",
    answer:
      "Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India through PAN India delivery.",
  },
  {
    question: "How can I get a sportswear manufacturing quotation?",
    answer:
      "Share your product requirement, quantity, sport, sizes, preferred fabric, artwork or logo and delivery location with TES Apparels to discuss your requirement and quotation.",
  },
];

const relatedPages = [
  {
    title: "Sports T-Shirt Manufacturer in Bangalore",
    href: "/sports-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Sports Jersey Manufacturer in Bangalore",
    href: "/sports-jersey-manufacturer-bangalore",
  },
  {
    title: "Dri-Fit T-Shirt Manufacturers in Bangalore",
    href: "/dri-fit-t-shirt-manufacturers-bangalore",
  },
  {
    title: "Sports T-Shirts",
    href: "/sports-t-shirts",
  },
  {
    title: "Event T-Shirt Manufacturer in Bangalore",
    href: "/event-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Marathon T-Shirt Manufacturer in Bangalore",
    href: "/marathon-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Custom Clothing Manufacturer in Bangalore",
    href: "/custom-clothing-manufacturer-bangalore",
  },
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
      name: "Sportswear Manufacturing in Bangalore",
      serviceType: "Sportswear Manufacturing",
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
        "Custom and bulk sportswear manufacturing in Bangalore including sports T-shirts, sports jerseys, Dri-Fit apparel, teamwear and sports uniforms.",
      url: PAGE_URL,
    },
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name:
        "Sportswear Manufacturer in Bangalore | Sportswear Manufacturers",
      description:
        "TES Apparels is a sportswear manufacturer in Bangalore offering custom sports T-shirts, jerseys, Dri-Fit apparel, teamwear and sports clothing.",
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
          name: "Sportswear Manufacturer in Bangalore",
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

export default function SportswearManufacturerBangalorePage() {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,154,0,0.22),transparent_38%)]" />

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
                Sportswear Manufacturer in Bangalore
              </span>
            </nav>

            <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
              Custom & Bulk Sportswear Manufacturing in Bangalore
            </div>

            <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Sportswear Manufacturer in Bangalore
            </h1>

            <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
              TES Apparels is a sportswear manufacturer in Bangalore offering
              customized and bulk sports T-shirts, sports jerseys, Dri-Fit
              apparel, teamwear, sports uniforms and performance-oriented
              clothing.
            </p>

            <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
              We manufacture sportswear for schools, colleges, sports
              academies, teams, companies, fitness organizations, events and
              other bulk requirements, with customization for colours,
              designs, logos, names and numbers.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#A98200]"
              >
                Request Sportswear Quote
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
                "Custom Sportswear",
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

        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Sportswear Manufacturing
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Custom Sportswear for Teams, Institutions & Events
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Sportswear needs to combine functionality, comfort, fit,
                  appearance and team identity. The right product depends on
                  the sport, activity level, environment and intended use.
                </p>

                <p>
                  TES Apparels provides customized and bulk sportswear
                  manufacturing for organized teams, educational institutions,
                  corporate groups, sports academies and events.
                </p>

                <p>
                  Customers can discuss product style, fabric, colours,
                  quantities, sizes and branding requirements for their
                  sportswear program.
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
                    Custom & Bulk Sportswear Manufacturing
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Products
                  </dt>
                  <dd className="mt-1 font-semibold">
                    Sports T-Shirts, Jerseys & Dri-Fit
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
                Sportswear Products
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Sportswear We Manufacture
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Customized sports clothing for teams, institutions, companies,
                academies and sporting events.
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
                    Explore product →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SPORTS APPLICATIONS */}
        <section className="bg-[#0B2341] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                Sports & Applications
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Sportswear for Different Teams & Activities
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                Sportswear can be customized according to the sport, team,
                organization and event requirements.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {applications.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200"
                >
                  {item}
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
                Sportswear Customization
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Customize Sportswear for Your Team
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Team sportswear becomes more effective when the product
                  reflects the team's colours, identity and player
                  requirements.
                </p>

                <p>
                  TES Apparels can work with customer-provided designs,
                  colours, logos, names and numbers for customized sportswear
                  requirements.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {customization.map((item) => (
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

        {/* FABRICS */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Fabric Selection
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Sportswear Fabric Options
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Fabric selection can depend on sport, comfort, breathability,
                durability, activity level and intended use.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {fabrics.map((fabric) => (
                <div
                  key={fabric.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[#0B2341]">
                    {fabric.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {fabric.description}
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
                Team Branding
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Make Your Sportswear Represent Your Team
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Team identity is an important part of sportswear. Logos,
                  colours, names and numbers help players and organizations
                  maintain a consistent appearance.
                </p>

                <p>
                  Branding requirements can be discussed according to the
                  garment, design and intended application.
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
                Common Sportswear Branding
              </h3>

              <div className="mt-6 space-y-3">
                {[
                  "Team logos",
                  "Player names",
                  "Player numbers",
                  "Company logos",
                  "School logos",
                  "College logos",
                  "Sponsor logos",
                  "Event branding",
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
              From Sportswear Requirement to Delivery
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
                  Your Sportswear Manufacturing Partner in Bangalore
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">
                  <p>
                    Sportswear projects require coordination between garment
                    design, fabric selection, sizing, branding, quantities and
                    delivery.
                  </p>

                  <p>
                    TES Apparels supports customized sportswear requirements
                    for teams, institutions, companies, academies and events.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {benefits.map((item) => (
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
                  Bangalore Sportswear Manufacturer
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Sportswear Manufacturing Across Bangalore
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-300">
                  <p>
                    TES Apparels is based in Basaveshwar Nagar, Bengaluru and
                    supports sportswear requirements across Bangalore.
                  </p>

                  <p>
                    We work with teams, schools, colleges, academies,
                    companies, event organizers and other organizations
                    requiring customized sports clothing.
                  </p>

                  <p>
                    Sportswear can also be delivered across Karnataka and other
                    parts of India through PAN India delivery.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white hover:bg-[#A98200]"
                >
                  Start Your Sportswear Enquiry
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
                Related Services
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Explore TES Apparels Sportswear Services
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
                Sportswear Manufacturer in Bangalore – FAQs
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
              Custom & Bulk Sportswear Manufacturing
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for a Sportswear Manufacturer in Bangalore?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Share your sport, product, quantity, sizes, preferred fabric,
              artwork and branding requirements with TES Apparels.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-lg bg-[#C49A00] px-8 py-4 font-bold text-white hover:bg-[#A98200]"
              >
                Request Sportswear Quote
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
