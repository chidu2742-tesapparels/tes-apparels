
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polo T-Shirt Manufacturer in Bangalore | TES Apparels",
  description:
    "TES Apparels is a Polo T-shirt manufacturer and supplier in Bangalore offering customized and bulk Polo T-shirts for IT companies, schools, colleges, sports teams and event management companies.",
  keywords: [
    "polo t shirt manufacturer in bangalore",
    "polo t shirt manufacturers in bangalore",
    "polo t shirt manufacturer bangalore",
    "polo t shirt manufacturers bangalore",
    "polo t shirt supplier in bangalore",
    "polo t shirt suppliers in bangalore",
    "custom polo t shirt manufacturer bangalore",
    "custom polo t shirt manufacturers bangalore",
    "bulk polo t shirt manufacturer bangalore",
    "bulk polo t shirt manufacturers bangalore",
    "corporate polo t shirt manufacturer bangalore",
    "corporate polo t shirt manufacturers bangalore",
    "polo t shirt manufacturer in karnataka",
    "polo t shirt manufacturers in karnataka",
    "polo t shirt manufacturer in india",
    "polo t shirt manufacturers in india",
    "customized polo t shirts bangalore",
    "bulk polo t shirts bangalore",
    "corporate polo t shirts bangalore",
    "school polo t shirts bangalore",
    "sports polo t shirts bangalore",
    "event polo t shirts bangalore",
  ],
  alternates: {
    canonical: "https://tesapparels.com/polo-t-shirt-manufacturer-bangalore",
  },
  openGraph: {
    title: "Polo T-Shirt Manufacturer in Bangalore | TES Apparels",
    description:
      "Customized and bulk Polo T-shirts for companies, schools, colleges, sports teams and event management companies in Bangalore.",
    url: "https://tesapparels.com/polo-t-shirt-manufacturer-bangalore",
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Polo T-Shirt Manufacturer in Bangalore | TES Apparels",
    description:
      "Bulk and customized Polo T-shirts manufactured for corporate teams, schools, colleges, sports organizations and events.",
  },
};

const faqs = [
  {
    question: "Is TES Apparels a Polo T-shirt manufacturer in Bangalore?",
    answer:
      "Yes. TES Apparels is a Bangalore-based apparel manufacturer supplying customized Polo T-shirts for companies, schools, colleges, sports organizations, event management companies and other bulk buyers.",
  },
  {
    question: "Does TES Apparels supply Polo T-shirts in bulk?",
    answer:
      "Yes. TES Apparels supports bulk Polo T-shirt requirements for corporate uniforms, school and college programs, sports teams, events, promotional campaigns and organizational requirements.",
  },
  {
    question: "What is the difference between a Polo T-shirt manufacturer and a supplier?",
    answer:
      "A manufacturer produces garments according to agreed specifications, while a supplier may source and distribute products. TES Apparels supports customized apparel manufacturing and bulk supply requirements based on product specifications, quantities and branding needs.",
  },
  {
    question: "Can Polo T-shirts be customized with our company logo?",
    answer:
      "Yes. Polo T-shirts can be customized with company, school, college, sports team or event branding using suitable embroidery, printing and other branding methods.",
  },
  {
    question: "Can you manufacture Polo T-shirts for IT companies?",
    answer:
      "Yes. Customized Polo T-shirts are suitable for IT companies, software companies, startups, BPOs, consulting companies and corporate offices that require professional branded employee apparel.",
  },
  {
    question: "Do you manufacture Polo T-shirts for schools and colleges?",
    answer:
      "Yes. Polo T-shirts can be customized for school uniforms, college events, student activities, house programs, sports activities and institutional branding.",
  },
  {
    question: "Can sports teams order customized Polo T-shirts?",
    answer:
      "Yes. Sports clubs, academies, corporate sports teams and other organizations can order customized Polo T-shirts for team staff, supporters, events and off-field apparel.",
  },
  {
    question: "Do event management companies order Polo T-shirts in bulk?",
    answer:
      "Yes. Polo T-shirts can be customized for event staff, volunteers, promotional teams, conferences, exhibitions, corporate events, marathons and other organized activities.",
  },
  {
    question: "Can I choose the fabric, colour and GSM?",
    answer:
      "Yes. Depending on the product requirement, specifications can include fabric type, GSM, colour, fit, collar style, sleeve style, sizing and branding requirements.",
  },
  {
    question: "Do you provide Polo T-shirts outside Bangalore?",
    answer:
      "Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India through PAN India delivery.",
  },
  {
    question: "How can I request a bulk Polo T-shirt quotation?",
    answer:
      "Share the required quantity, preferred colour, fabric or GSM, sizes, logo or artwork and delivery location with TES Apparels. The team can discuss the requirement and guide you through the quotation process.",
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
        "https://tesapparels.com/polo-t-shirt-manufacturer-bangalore#service",
      name: "Polo T-Shirt Manufacturing in Bangalore",
      serviceType: "Polo T-Shirt Manufacturing",
      provider: {
        "@id": "https://tesapparels.com/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Bengaluru",
      },
      description:
        "Customized and bulk Polo T-shirt manufacturing for companies, schools, colleges, sports organizations and event management companies in Bangalore.",
      url: "https://tesapparels.com/polo-t-shirt-manufacturer-bangalore",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://tesapparels.com/polo-t-shirt-manufacturer-bangalore#breadcrumb",
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
          name: "Polo T-Shirt Manufacturer in Bangalore",
          item:
            "https://tesapparels.com/polo-t-shirt-manufacturer-bangalore",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://tesapparels.com/polo-t-shirt-manufacturer-bangalore#faq",
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

const customerTypes = [
  {
    title: "IT & Corporate Companies",
    text: "Customized Polo T-shirts for employee uniforms, office teams, corporate events, employee engagement programs and branded workplace apparel.",
  },
  {
    title: "Schools & Colleges",
    text: "Polo T-shirts for school uniforms, college programs, house activities, student events, institutional branding and campus activities.",
  },
  {
    title: "Sports Teams & Organizations",
    text: "Customized Polo T-shirts for sports clubs, academies, corporate sports teams, coaches, support staff and team events.",
  },
  {
    title: "Event Management Companies",
    text: "Bulk Polo T-shirts for event staff, volunteers, conferences, exhibitions, marathons, promotional campaigns and organized events.",
  },
];

const poloProducts = [
  {
    title: "Corporate Polo T-Shirts",
    text: "Professional Polo T-shirts customized with company colours and branding for employees and corporate teams.",
    href: "/corporate-polo-t-shirts",
  },
  {
    title: "Custom Polo T-Shirts",
    text: "Customized Polo T-shirts developed according to colour, fabric, GSM, sizing and branding requirements.",
    href: "/t-shirt-manufacturer-bangalore",
  },
  {
    title: "School & College Polo T-Shirts",
    text: "Branded Polo T-shirts suitable for educational institutions, student activities, house programs and events.",
    href: "/school-uniform-manufacturer",
  },
  {
    title: "Sports Polo T-Shirts",
    text: "Polo T-shirts for sports academies, clubs, teams, coaches, staff and sports-related events.",
    href: "/sports-t-shirts",
  },
  {
    title: "Event Polo T-Shirts",
    text: "Bulk customized Polo T-shirts for event teams, volunteers, conferences, exhibitions and promotional activities.",
    href: "/t-shirt-printing",
  },
  {
    title: "Branded Polo T-Shirts",
    text: "Logo-branded Polo T-shirts using embroidery or suitable printing methods based on garment and artwork requirements.",
    href: "/t-shirt-embroidery",
  },
];

const customizationOptions = [
  "Custom colours",
  "Fabric selection",
  "GSM selection",
  "Collar options",
  "Sleeve options",
  "Custom sizing",
  "Company logo",
  "School logo",
  "Sports team branding",
  "Embroidery",
  "Screen printing",
  "DTF printing",
];

const fabrics = [
  {
    title: "Cotton",
    text: "Comfort-focused fabric options suitable for everyday corporate, institutional and promotional Polo T-shirts.",
  },
  {
    title: "Poly Cotton",
    text: "A practical option for uniforms where durability, appearance and easy maintenance are important.",
  },
  {
    title: "Performance Fabrics",
    text: "Suitable for active teams, outdoor programs and customers looking for lightweight performance-oriented apparel.",
  },
  {
    title: "Custom Fabric Requirements",
    text: "Fabric specifications can be discussed according to intended use, appearance, comfort, budget and production requirements.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Requirement",
    text: "Share your quantity, preferred Polo T-shirt style, colours, sizes, branding and delivery location.",
  },
  {
    number: "02",
    title: "Specification",
    text: "Discuss fabric, GSM, collar, sleeve, colour, sizing, artwork and branding requirements.",
  },
  {
    number: "03",
    title: "Sample",
    text: "Where required, samples and artwork can be reviewed before proceeding with bulk production.",
  },
  {
    number: "04",
    title: "Production",
    text: "Approved garment specifications and branding requirements are followed during bulk production.",
  },
  {
    number: "05",
    title: "Delivery",
    text: "Finished Polo T-shirts are prepared for delivery in Bangalore or other locations across India.",
  },
];

const industries = [
  "IT Companies",
  "Software Companies",
  "Corporate Offices",
  "Startups",
  "BPO & KPO Companies",
  "Schools",
  "Colleges",
  "Universities",
  "Sports Academies",
  "Sports Clubs",
  "Corporate Sports Teams",
  "Event Management Companies",
  "Conference Organizers",
  "Marathon Organizers",
  "Promotional Teams",
];

export default function PoloTShirtManufacturerBangalorePage() {
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
                Polo T-Shirt Manufacturer in Bangalore
              </span>
            </nav>

            <div className="max-w-5xl">
              <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
                Bangalore-Based Polo T-Shirt Manufacturer
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Polo T-Shirt Manufacturer in Bangalore for Bulk & Custom
                Orders
              </h1>

              <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
                TES Apparels is a Polo T-shirt manufacturer and bulk supplier
                in Bangalore providing customized Polo T-shirts for IT
                companies, corporate offices, schools, colleges, sports teams
                and event management companies.
              </p>

              <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
                From fabric and GSM selection to colours, sizing, logo
                embroidery and printing, we help organizations develop Polo
                T-shirts according to their branding and bulk apparel
                requirements.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#A98200]"
                >
                  Request a Bulk Polo T-Shirt Quote
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
                Polo T-Shirt Manufacturing
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Polo T-Shirt Manufacturers in Bangalore for Customized Bulk
                Requirements
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Polo T-shirts are widely used for corporate uniforms,
                  institutional apparel, sports organizations, events,
                  promotional activities and employee programs. A well-made
                  Polo T-shirt can provide a professional appearance while
                  offering comfort for regular use.
                </p>

                <p>
                  TES Apparels works with organizations looking for a Polo
                  T-shirt manufacturer in Bangalore for customized and bulk
                  requirements. Specifications can be developed around
                  colours, fabric, GSM, sizing, collar style and branding.
                </p>

                <p>
                  Whether you are an IT company ordering employee uniforms, a
                  college organizing an event, a sports organization requiring
                  team apparel or an event management company requiring
                  branded staff clothing, the requirement can be developed
                  according to your application.
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
                    Customized Polo T-Shirts
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Requirement
                  </dt>
                  <dd className="mt-1 font-semibold text-slate-900">
                    Bulk & Custom Orders
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

        {/* CUSTOMER TYPES */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Who We Serve
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Customized Polo T-Shirts for Organizations & Teams
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                TES Apparels supports Polo T-shirt requirements across
                corporate, educational, sports and event applications.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {customerTypes.map((item) => (
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

        {/* PRODUCTS */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Polo T-Shirt Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Polo T-Shirt Products for Bulk Buyers
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Choose a customized Polo T-shirt solution according to your
              organization, event, branding and quantity requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {poloProducts.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-[#0B2341]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>

                <Link
                  href={item.href}
                  className="mt-5 inline-flex font-bold text-[#0B2341] transition hover:text-[#C49A00]"
                >
                  Explore solution →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* CORPORATE */}
        <section className="bg-[#0B2341] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                  Corporate Polo T-Shirts
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Polo T-Shirts for IT Companies & Corporate Offices
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-300">
                  <p>
                    Polo T-shirts are a practical choice for companies looking
                    for professional employee apparel that reflects their
                    corporate identity.
                  </p>

                  <p>
                    TES Apparels can develop customized corporate Polo
                    T-shirts around company colours, logo placement,
                    employee sizes, fabric specifications and branding
                    requirements.
                  </p>

                  <p>
                    They can be used for everyday employee uniforms, team
                    activities, corporate events, conferences, employee
                    engagement programs and promotional activities.
                  </p>
                </div>

                <Link
                  href="/corporate-polo-t-shirts"
                  className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
                >
                  Explore Corporate Polo T-Shirts
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Company colour matching",
                  "Employee size requirements",
                  "Company logo branding",
                  "Embroidery support",
                  "Printing support",
                  "Corporate events",
                  "Employee uniforms",
                  "Bulk production",
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

        {/* EDUCATION */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Schools & Colleges
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Polo T-Shirt Manufacturers for Schools & Colleges
              </h2>

              <div className="mt-6 space-y-5 leading-8 text-slate-600">
                <p>
                  Schools and colleges can use customized Polo T-shirts for
                  uniforms, house activities, student events, campus programs,
                  sports activities and institutional branding.
                </p>

                <p>
                  Polo T-shirts can be developed using institution colours,
                  logos and sizing requirements to create a consistent
                  appearance across students or staff.
                </p>

                <p>
                  TES Apparels can discuss bulk institutional requirements
                  based on product specifications, quantities and delivery
                  schedules.
                </p>
              </div>

              <Link
                href="/school-uniform-manufacturer"
                className="mt-7 inline-flex rounded-lg bg-[#0B2341] px-6 py-3 font-bold text-white transition hover:bg-[#123762]"
              >
                Explore School Uniform Solutions
              </Link>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8">
              <h3 className="text-2xl font-bold text-[#0B2341]">
                Institutional Polo T-Shirt Applications
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "School uniforms",
                  "College uniforms",
                  "House activities",
                  "Student events",
                  "College fests",
                  "Sports activities",
                  "Staff apparel",
                  "Institution branding",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SPORTS & EVENTS */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Sports Organizations
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  Polo T-Shirts for Sports Teams, Clubs & Academies
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  Sports organizations can use customized Polo T-shirts for
                  coaches, support staff, team management, club members,
                  promotional activities and off-field team apparel.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  Requirements can be customized around team colours, logos,
                  player or staff sizes and branding specifications.
                </p>

                <Link
                  href="/sports-jersey-manufacturer-bangalore"
                  className="mt-7 inline-flex rounded-lg bg-[#0B2341] px-6 py-3 font-bold text-white transition hover:bg-[#123762]"
                >
                  Explore Sports Apparel
                </Link>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Event Management Companies
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  Bulk Polo T-Shirts for Events & Promotional Teams
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  Event management companies can order customized Polo
                  T-shirts for event staff, volunteers, registration teams,
                  promotional teams, conferences, exhibitions, marathons and
                  corporate events.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  Branded Polo T-shirts help event teams maintain a consistent
                  professional appearance while making staff easier for
                  attendees to identify.
                </p>

                <Link
                  href="/t-shirt-printing"
                  className="mt-7 inline-flex rounded-lg bg-[#0B2341] px-6 py-3 font-bold text-white transition hover:bg-[#123762]"
                >
                  Explore T-Shirt Printing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMIZATION */}
        <section className="bg-[#0B2341] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                  Customization
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Customize Your Polo T-Shirts for Bulk Production
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  Every organization may have different branding, fabric,
                  colour, sizing and application requirements. Polo T-shirts
                  can be developed according to the intended use and approved
                  specifications.
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  Share your artwork, company or institution colours,
                  preferred fabric, estimated quantity and sizing requirements
                  to discuss your customized Polo T-shirt requirement.
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
              Choose Polo T-Shirt Fabric Based on Your Application
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Fabric selection can depend on comfort, durability, appearance,
              workplace conditions, activity level and intended use.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {fabrics.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#0B2341]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* BRANDING */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Logo Branding
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  Professional Branding for Customized Polo T-Shirts
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  Company, school, college, sports team and event branding can
                  be incorporated into Polo T-shirts using suitable embroidery
                  or printing methods.
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
                    "Company Logos",
                    "School Logos",
                    "Team Branding",
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
                  Need Customized Polo T-Shirts?
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Share your logo, preferred colour, quantity, sizes and
                  delivery location with TES Apparels.
                </p>

                <Link
                  href="/#contact"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
                >
                  Request a Bulk Quote
                </Link>
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
              From Polo T-Shirt Requirement to Bulk Delivery
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A structured process helps keep the final Polo T-shirts aligned
              with approved product and branding specifications.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article
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
              </article>
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
                  A Bangalore Apparel Partner for Bulk Polo T-Shirt
                  Requirements
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  TES Apparels focuses on customized apparel requirements where
                  product specifications, professional appearance, branding and
                  bulk production are important.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  Our Polo T-shirt solutions can be considered by corporate
                  companies, educational institutions, sports organizations and
                  event management companies.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Bangalore-based apparel manufacturer",
                  "Customized Polo T-shirt solutions",
                  "Corporate and employee apparel",
                  "School and college requirements",
                  "Sports team requirements",
                  "Event management requirements",
                  "Embroidery and printing support",
                  "Bulk production",
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
              Industries & Organizations
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Polo T-Shirt Manufacturers Serving Different Organizations
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Customized Polo T-shirts can be developed for different
              organizational and event requirements.
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
                  Polo T-Shirt Manufacturer in Bangalore
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  Polo T-Shirt Manufacturer & Supplier Serving Bengaluru
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">
                  <p>
                    TES Apparels is located in Basaveshwar Nagar, Bengaluru,
                    Karnataka. We support companies, institutions, sports
                    organizations and event businesses looking for customized
                    Polo T-shirts.
                  </p>

                  <p>
                    Organizations searching for Polo T-shirt manufacturers in
                    Bangalore can discuss product specifications, quantities,
                    colours, branding requirements and delivery schedules with
                    our team.
                  </p>

                  <p>
                    Our Bangalore location also enables us to support customers
                    across Karnataka and other parts of India.
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
                title: "Corporate Uniform Manufacturer",
                href: "/corporate-uniform-manufacturer",
              },
              {
                title: "T-Shirt Embroidery",
                href: "/t-shirt-embroidery",
              },
              {
                title: "T-Shirt Printing",
                href: "/t-shirt-printing",
              },
              {
                title: "Sports Jersey Manufacturer",
                href: "/sports-jersey-manufacturer-bangalore",
              },
              {
                title: "School Uniform Manufacturer",
                href: "/school-uniform-manufacturer",
              },
              {
                title: "Dri-Fit T-Shirts",
                href: "/dri-fit-t-shirts",
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
                Polo T-Shirt Manufacturer in Bangalore – FAQs
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
              Bulk Polo T-Shirt Requirement
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for Polo T-Shirt Manufacturers in Bangalore?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Share your quantity, preferred Polo T-shirt specifications,
              colours, sizes, logo or artwork and delivery location with TES
              Apparels. Our team can discuss your requirement and guide you
              through the quotation process.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="rounded-lg bg-[#C49A00] px-8 py-4 font-bold text-white transition hover:bg-[#A98200]"
              >
                Request a Polo T-Shirt Quote
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
