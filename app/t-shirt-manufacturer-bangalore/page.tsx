  import type { Metadata } from "next";
  import Link from "next/link";

  export const metadata: Metadata = {
    title: "T-Shirt Manufacturer in Bangalore",

    description:
      "TES Apparels is a T-shirt manufacturer in Bangalore specializing in corporate T-shirts, polo T-shirts, sportswear, Dri-Fit T-shirts, promotional apparel and customized bulk garments for businesses across India.",

    keywords: [
      "t shirt manufacturer in bangalore",
      "t-shirt manufacturer in bangalore",
      "t shirt manufacturers in bangalore",
      "tshirt manufacturer in bangalore",
      "T shirt manufacturer Bangalore",
      "custom t shirt manufacturer in bangalore",
      "corporate t shirt manufacturer in bangalore",
      "polo t shirt manufacturer in bangalore",
      "sports t shirt manufacturer in bangalore",
      "dri fit t shirt manufacturer in bangalore",
      "bulk t shirt manufacturer in bangalore",
      "uniform t shirt manufacturer in bangalore",
      "customized t shirts bangalore",
      "t shirt manufacturers in Karnataka",
      "t shirt manufacturer in India",
    ],

    alternates: {
      canonical: "https://tesapparels.com/t-shirt-manufacturer-bangalore",
    },

    openGraph: {
      title: "T-Shirt Manufacturer in Bangalore | TES Apparels",

      description:
        "Corporate, polo, sports, Dri-Fit and customized T-shirt manufacturing in Bangalore for bulk business and institutional requirements.",

      url: "https://tesapparels.com/t-shirt-manufacturer-bangalore",

      siteName: "TES Apparels",

      type: "website",

      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",

      title: "T-Shirt Manufacturer in Bangalore | TES Apparels",

      description:
        "Bulk T-shirt manufacturing in Bangalore for corporate, sports, promotional and customized apparel requirements.",
    },
  };

  const faqs = [
    {
      question: "Is TES Apparels a T-shirt manufacturer in Bangalore?",
      answer:
        "Yes. TES Apparels is a Bangalore-based apparel manufacturer serving businesses, institutions, sports teams, schools, events and organizations with corporate T-shirts, polo T-shirts, sportswear, Dri-Fit apparel, promotional T-shirts and customized garments.",
    },
    {
      question: "What types of T-shirts does TES Apparels manufacture?",
      answer:
        "TES Apparels manufactures corporate T-shirts, polo T-shirts, sports T-shirts, Dri-Fit T-shirts, promotional T-shirts, customized T-shirts and uniform apparel based on fabric, colour, size, branding and quantity requirements.",
    },
    {
      question: "Can you manufacture T-shirts with our company logo?",
      answer:
        "Yes. Corporate and customized T-shirts can be branded with company logos and artwork using suitable printing or embroidery methods depending on the fabric, design and quantity.",
    },
    {
      question: "Do you manufacture bulk T-shirts for companies?",
      answer:
        "Yes. TES Apparels provides bulk apparel manufacturing solutions for companies, institutions, schools, sports teams, events, promotional campaigns and other organizations.",
    },
    {
      question: "Do you supply T-shirts outside Bangalore?",
      answer:
        "Yes. TES Apparels is based in Bangalore and serves customers across Karnataka and other parts of India through PAN India delivery.",
    },
    {
      question: "Can I choose the fabric, colour and GSM?",
      answer:
        "Yes. Depending on the product and order requirements, customers can discuss fabric type, GSM, colour, sizing, branding, printing, embroidery and finishing requirements before production.",
    },
    {
      question: "Do you manufacture corporate polo T-shirts?",
      answer:
        "Yes. TES Apparels manufactures customized polo T-shirts suitable for corporate uniforms, employee apparel, promotional programs, hospitality teams, institutions and other professional requirements.",
    },
    {
      question: "How do I request a quotation?",
      answer:
        "You can contact TES Apparels with your required T-shirt type, approximate quantity, preferred fabric, branding requirements and delivery location. Our team can then discuss the requirement and provide the next steps for quotation and sampling.",
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
          "https://tesapparels.com/t-shirt-manufacturer-bangalore#service",

        name: "T-Shirt Manufacturing in Bangalore",

        serviceType: "T-Shirt Manufacturing",

        provider: {
          "@id": "https://tesapparels.com/#organization",
        },

        areaServed: {
          "@type": "City",
          name: "Bengaluru",
        },

        description:
          "Corporate, polo, sports, Dri-Fit, promotional and customized T-shirt manufacturing for businesses and organizations in Bangalore and across India.",

        url: "https://tesapparels.com/t-shirt-manufacturer-bangalore",
      },

      {
        "@type": "BreadcrumbList",

        "@id":
          "https://tesapparels.com/t-shirt-manufacturer-bangalore#breadcrumb",

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
            name: "T-Shirt Manufacturer in Bangalore",
            item:
              "https://tesapparels.com/t-shirt-manufacturer-bangalore",
          },
        ],
      },

      {
        "@type": "FAQPage",

        "@id": "https://tesapparels.com/t-shirt-manufacturer-bangalore#faq",

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

  export default function TshirtManufacturerBangalorePage() {
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
                  <Link
                    href="/"
                    className="transition hover:text-white"
                  >
                    Home
                  </Link>

                  <span className="mx-2">/</span>

                  <span className="text-white">
                    T-Shirt Manufacturer in Bangalore
                  </span>
                </nav>

                <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
                  Bangalore-Based Apparel Manufacturing
                </div>

                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  T-Shirt Manufacturer in Bangalore for Corporate, Sports &
                  Customized Apparel
                </h1>

                <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                  TES Apparels is a Bangalore-based T-shirt manufacturer
                  supplying corporate T-shirts, polo T-shirts, sportswear,
                  Dri-Fit T-shirts, promotional apparel and customized garments
                  for businesses, institutions, schools, sports teams and
                  organizations.
                </p>

                <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                  From fabric selection and garment construction to printing,
                  embroidery and bulk production, we help organizations source
                  professional apparel according to their branding,
                  specifications and quantity requirements.
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

          {/* INTRO */}

          <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  T-Shirt Manufacturing in Bangalore
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                  A Practical Apparel Manufacturing Partner for Bangalore
                  Businesses
                </h2>

                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Choosing a T-shirt manufacturer is about more than finding
                    someone who can print a logo on a garment. Businesses need
                    consistent fabric quality, dependable sizing, professional
                    finishing, accurate branding and production that matches the
                    approved specification.
                  </p>

                  <p>
                    TES Apparels works with organizations that require
                    customized and bulk apparel in Bangalore. Our solutions are
                    suitable for employee uniforms, company events, promotional
                    campaigns, sports teams, schools, institutions and branded
                    merchandise.
                  </p>

                  <p>
                    Because requirements differ from one organization to another,
                    we discuss the garment type, fabric, GSM, colours, sizes,
                    branding method, quantity and delivery requirement before
                    production.
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
                      Specialization
                    </dt>

                    <dd className="mt-1 font-semibold text-slate-900">
                      Corporate & Customized Apparel
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-semibold text-slate-500">
                      Products
                    </dt>

                    <dd className="mt-1 font-semibold text-slate-900">
                      T-Shirts, Polos, Sportswear & Workwear
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

          {/* PRODUCT TYPES */}

          <section className="bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  What We Manufacture
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  T-Shirts for Corporate, Promotional & Sports Requirements
                </h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Different applications require different garment
                  specifications. TES Apparels provides customized apparel
                  solutions based on intended use, branding requirements and
                  order quantity.
                </p>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Corporate T-Shirts",
                    text:
                      "Professional T-shirts for employees, company events, internal programs, campaigns and branded corporate apparel.",
                    href: "/t-shirt-manufacturer",
                  },
                  {
                    title: "Polo T-Shirts",
                    text:
                      "Customized polo T-shirts for office uniforms, staff apparel, hospitality teams, institutions and promotional programs.",
                    href: "/corporate-polo-t-shirts",
                  },
                  {
                    title: "Sports T-Shirts",
                    text:
                      "Sports and team apparel designed for movement, comfort and customized team identity.",
                    href: "/sports-t-shirts",
                  },
                  {
                    title: "Dri-Fit T-Shirts",
                    text:
                      "Lightweight performance apparel suitable for sports, fitness, outdoor activities and promotional campaigns.",
                    href: "/dri-fit-t-shirts",
                  },
                  {
                    title: "Customized T-Shirt Printing",
                    text:
                      "Branded apparel for marketing campaigns, events, exhibitions and corporate activities with customized printing.",
                    href: "/t-shirt-printing",
                  },
                  {
                    title: "T-Shirt Embroidery",
                    text:
                      "Professional embroidery solutions for corporate uniforms, polo T-shirts, workwear, caps and promotional apparel.",
                    href: "/t-shirt-embroidery",
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
            </div>
          </section>

          {/* WHY CHOOSE TES APPARELS */}

          <section
            id="why-choose-tes-apparels"
            className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20"
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Why Choose TES Apparels
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Why Choose TES Apparels as Your T-Shirt Manufacturing Partner?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Choosing the right T-shirt manufacturing partner can make a
                significant difference to product consistency, branding,
                delivery coordination and the overall success of a bulk apparel
                requirement. TES Apparels works with businesses and
                organizations that need dependable customized apparel solutions
                in Bangalore and across India.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Consistent Quality",
                  text:
                    "We focus on fabric selection, garment construction, sizing, finishing and approved specifications to help maintain consistency across bulk apparel orders.",
                },
                {
                  number: "02",
                  title: "Custom Branding",
                  text:
                    "Your company identity can be incorporated through suitable colours, logo placement, printing, embroidery, labels and other branding requirements.",
                },
                {
                  number: "03",
                  title: "Bulk Order Support",
                  text:
                    "Our apparel manufacturing solutions are designed for corporate, institutional, promotional, sports and other organizational bulk requirements.",
                },
                {
                  number: "04",
                  title: "Requirement-Focused Service",
                  text:
                    "We discuss fabric, GSM, colour, sizing, branding, quantity and delivery requirements so the production approach matches the intended application.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C49A00]/50 hover:shadow-lg"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2341] text-sm font-black text-white transition group-hover:bg-[#C49A00]">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-[#0B2341]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#0B2341] p-8 text-center shadow-lg sm:p-10">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Looking for a Reliable T-Shirt Manufacturer in Bangalore?
              </h3>

              <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-300">
                Share your product requirement, approximate quantity, preferred
                fabric, branding specifications and delivery location with TES
                Apparels. We can discuss the requirement and guide you through
                the next steps.
              </p>

              <Link
                href="/#contact"
                className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-7 py-3 font-bold text-white transition hover:bg-[#A98200]"
              >
                Discuss Your Requirement
              </Link>
            </div>
          </section>

          {/* CUSTOMIZATION */}

          <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Custom T-Shirt Manufacturing
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  Customize Your T-Shirts to Match Your Brand
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  A corporate T-shirt should look like part of your brand
                  identity. TES Apparels supports customized requirements across
                  garment colour, fabric, sizing, logo placement, printing,
                  embroidery and finishing.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  Before bulk production, specifications can be discussed and
                  aligned so that the finished apparel reflects the intended
                  corporate or promotional application.
                </p>

                <Link
                  href="/#contact"
                  className="mt-7 inline-flex rounded-lg bg-[#0B2341] px-6 py-3 font-bold text-white transition hover:bg-[#123762]"
                >
                  Discuss Your Requirement
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Fabric selection",
                  "GSM selection",
                  "Custom colours",
                  "Size specifications",
                  "Company logo branding",
                  "Screen printing",
                  "Other printing requirements",
                  "Embroidery",
                  "Custom labels",
                  "Bulk production",
                  "Corporate uniforms",
                  "Promotional branding",
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

          {/* FABRIC */}

          <section className="bg-[#0B2341] text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                  Fabric & Garment Specifications
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Choose the Right T-Shirt Specification for the Application
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  T-shirt performance depends on more than the design. Fabric
                  composition, GSM, construction, colour, fit and finishing all
                  affect how the garment feels and performs.
                </p>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Cotton",
                    text:
                      "Suitable for comfortable corporate and promotional everyday apparel.",
                  },
                  {
                    title: "Performance Fabrics",
                    text:
                      "Suitable for sports, fitness and active applications where lightweight comfort matters.",
                  },
                  {
                    title: "Polo Fabrics",
                    text:
                      "Suitable for professional uniforms and corporate staff apparel.",
                  },
                  {
                    title: "GSM Selection",
                    text:
                      "Fabric weight can be discussed according to the garment type, comfort and intended use.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

                  {/* MANUFACTURING PROCESS */}

          <section
            id="manufacturing-process"
            className="bg-white"
            aria-labelledby="manufacturing-process-heading"
          >
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
              {/* Section heading */}
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  T-Shirt Manufacturing Process
                </p>

                <h2
                  id="manufacturing-process-heading"
                  className="mt-3 text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl"
                >
                  From Fabric Selection to Finished Apparel
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  A well-defined manufacturing process helps ensure that every
                  bulk apparel order follows the agreed specifications for
                  fabric, colour, sizing, branding, finishing and delivery.
                  TES Apparels works with businesses and organizations to
                  coordinate these requirements from the initial enquiry through
                  finished apparel.
                </p>
              </div>

              {/* Process steps */}
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    number: "01",
                    title: "Requirement & Fabric Selection",
                    text:
                      "We begin by understanding the intended use, T-shirt style, approximate quantity, preferred fabric, GSM, colour, sizing and overall garment requirements.",
                  },
                  {
                    number: "02",
                    title: "Design, Pattern & Specification",
                    text:
                      "Garment specifications are discussed based on the required fit, construction, branding position, artwork, measurements and finishing expectations.",
                  },
                  {
                    number: "03",
                    title: "Cutting & Stitching",
                    text:
                      "Approved fabric and specifications move into garment production, including fabric cutting, panel preparation, stitching and assembly of the T-shirt.",
                  },
                  {
                    number: "04",
                    title: "Printing & Embroidery",
                    text:
                      "Company logos, artwork, names or other branding can be applied using suitable printing or embroidery methods based on the garment and design requirements.",
                  },
                  {
                    number: "05",
                    title: "Quality Inspection",
                    text:
                      "Finished garments are checked against the agreed requirements, including appearance, sizing, stitching, branding and overall finishing.",
                  },
                  {
                    number: "06",
                    title: "Finishing & Packing",
                    text:
                      "Approved garments go through final finishing and are prepared for organized packing according to the requirements of the bulk order.",
                  },
                  {
                    number: "07",
                    title: "Bulk Order Preparation",
                    text:
                      "Quantities, sizes and product specifications are coordinated so that the completed order is prepared for dispatch according to the agreed requirement.",
                  },
                  {
                    number: "08",
                    title: "Delivery Across Bangalore & India",
                    text:
                      "Finished apparel can be delivered to customers in Bangalore and other locations across India, supporting corporate, institutional, promotional and sports apparel requirements.",
                  },
                ].map((step) => (
                  <article
                    key={step.number}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C49A00]/50 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-3xl font-black text-[#C49A00]">
                        {step.number}
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B2341] text-sm font-bold text-white">
                        ✓
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold leading-snug text-[#0B2341]">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>

              {/* Manufacturing explanation */}
              <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
                <div className="rounded-2xl bg-[#0B2341] p-8 text-white shadow-lg sm:p-10">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                    Production Quality
                  </p>

                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Built Around Your Approved Specifications
                  </h3>

                  <p className="mt-5 leading-8 text-slate-300">
                    Bulk T-shirt manufacturing requires consistency. Fabric,
                    colour, sizing, garment construction and branding need to
                    remain aligned with the approved requirement throughout
                    production.
                  </p>

                  <p className="mt-4 leading-8 text-slate-300">
                    TES Apparels works with customers to clarify these
                    specifications before production so the final apparel is
                    suitable for the intended corporate, promotional, sports,
                    institutional or uniform application.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#0B2341] sm:text-3xl">
                    What Can Be Customized?
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    Depending on the product and order requirements, several
                    aspects of the apparel can be discussed and customized.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      "Fabric type",
                      "Fabric GSM",
                      "Garment colour",
                      "T-shirt style",
                      "Size specifications",
                      "Fit requirements",
                      "Company logo",
                      "Logo placement",
                      "Printing",
                      "Embroidery",
                      "Custom labels",
                      "Bulk quantities",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C49A00] text-sm font-bold text-white">
                          ✓
                        </span>

                        <span className="text-sm font-semibold text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Internal links */}
              <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                      Explore Apparel Solutions
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-[#0B2341]">
                      Need a Specific T-Shirt Manufacturing Solution?
                    </h3>

                    <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                      Explore our related corporate, polo, sports, Dri-Fit,
                      printing and embroidery solutions for customized and bulk
                      apparel requirements.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Link
                      href="/corporate-polo-t-shirts"
                      className="inline-flex items-center justify-center rounded-lg bg-[#0B2341] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#123762]"
                    >
                      Corporate Polo T-Shirts →
                    </Link>

                    <Link
                      href="/sports-t-shirts"
                      className="inline-flex items-center justify-center rounded-lg border border-[#0B2341] px-5 py-3 text-sm font-bold text-[#0B2341] transition hover:bg-[#0B2341] hover:text-white"
                    >
                      Sports T-Shirts →
                    </Link>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-[#0B2341] sm:text-3xl">
                  Planning a Bulk T-Shirt Order?
                </h3>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                  Share your T-shirt type, approximate quantity, preferred
                  fabric, branding requirements and delivery location with TES
                  Apparels.
                </p>

                <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-md transition hover:bg-[#A98200]"
                  >
                    Request a Quote
                  </Link>

                  <a
                    href="tel:+919880038910"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B2341] px-7 py-4 font-bold text-[#0B2341] transition hover:bg-[#0B2341] hover:text-white"
                  >
                    Call +91 9880038910
                  </a>
                </div>
              </div>
            </div>
          </section>

                  {/* WHY TES */}

          <section
            id="why-choose-tes"
            className="bg-slate-50"
            aria-labelledby="why-choose-tes-heading"
          >
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
              <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                {/* Introduction */}
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                    Why Choose TES Apparels
                  </p>

                  <h2
                    id="why-choose-tes-heading"
                    className="mt-3 text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl"
                  >
                    Why Choose TES Apparels as Your T-Shirt Manufacturing Partner?
                  </h2>

                  <p className="mt-6 text-base leading-8 text-slate-600">
                    Choosing the right T-shirt manufacturing partner is important
                    when an organization needs consistent quality, professional
                    branding, reliable production and apparel that matches its
                    approved specifications.
                  </p>

                  <p className="mt-5 text-base leading-8 text-slate-600">
                    TES Apparels works with businesses, institutions, sports
                    teams, schools, event organizers and organizations looking
                    for customized and bulk apparel solutions from Bangalore.
                  </p>

                  <p className="mt-5 text-base leading-8 text-slate-600">
                    Our approach focuses on understanding the requirement first,
                    aligning product specifications and then coordinating the
                    manufacturing, branding, finishing and delivery requirements.
                  </p>

                  <Link
                    href="/#contact"
                    className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#0B2341] px-6 py-3 font-bold text-white transition hover:bg-[#123762]"
                  >
                    Discuss Your Requirement
                  </Link>
                </div>

                {/* Trust points */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      title: "Bangalore-Based Manufacturer",
                      text:
                        "TES Apparels is based in Basaveshwar Nagar, Bengaluru, making it convenient for Bangalore businesses and organizations to discuss customized apparel requirements.",
                    },
                    {
                      title: "Corporate Apparel Focus",
                      text:
                        "We support professional apparel requirements including company T-shirts, polo T-shirts, employee uniforms, promotional apparel and branded garments.",
                    },
                    {
                      title: "Customized Specifications",
                      text:
                        "Fabric, GSM, colours, sizes, garment styles, branding positions and finishing requirements can be discussed according to the project.",
                    },
                    {
                      title: "Bulk Production Support",
                      text:
                        "Our apparel solutions are designed for organizations requiring customized garments for employees, events, campaigns, institutions and teams.",
                    },
                    {
                      title: "Printing & Embroidery",
                      text:
                        "Company logos and artwork can be incorporated using suitable printing or embroidery methods depending on the garment and branding requirement.",
                    },
                    {
                      title: "Multiple Apparel Categories",
                      text:
                        "Beyond regular T-shirts, TES Apparels supports polo, sports, Dri-Fit, promotional, uniform and other customized apparel requirements.",
                    },
                    {
                      title: "Requirement-Led Approach",
                      text:
                        "We first understand the intended use, quantity, specifications and branding requirements before determining the appropriate apparel solution.",
                    },
                    {
                      title: "Bangalore & PAN India Support",
                      text:
                        "Customers can work with TES Apparels from Bangalore and other locations in India for customized corporate, institutional, promotional and sports apparel.",
                    },
                  ].map((item) => (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C49A00]/50 hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C49A00] text-sm font-bold text-white">
                          ✓
                        </span>

                        <div>
                          <h3 className="text-lg font-bold leading-snug text-[#0B2341]">
                            {item.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Buyer-focused comparison */}
              <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="bg-[#0B2341] px-6 py-7 sm:px-8">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                    For Business & Bulk Orders
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    What Businesses Should Look for in a T-Shirt Manufacturer
                  </h3>

                  <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                    When comparing apparel manufacturers, businesses should look
                    beyond price and consider the complete production requirement.
                  </p>
                </div>

                <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: "Product Quality",
                      text:
                        "Fabric, stitching, fit, GSM and finishing should match the approved specification.",
                    },
                    {
                      title: "Branding Quality",
                      text:
                        "Logo placement, printing and embroidery should suit the garment and intended use.",
                    },
                    {
                      title: "Production Consistency",
                      text:
                        "Bulk quantities should follow the agreed product specifications across sizes and colours.",
                    },
                    {
                      title: "Communication",
                      text:
                        "Clear discussion of quantity, specifications, branding and delivery helps reduce misunderstandings.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white p-6"
                    >
                      <h4 className="font-bold text-[#0B2341]">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internal links */}
              <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-[#C49A00]/30 bg-[#C49A00]/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <h3 className="text-xl font-bold text-[#0B2341]">
                    Explore TES Apparels' Related Solutions
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Explore specialized apparel manufacturing and customization
                    solutions for corporate, sports and promotional requirements.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/corporate-uniform-manufacturer"
                    className="inline-flex items-center justify-center rounded-lg bg-[#0B2341] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#123762]"
                  >
                    Corporate Uniforms →
                  </Link>

                  <Link
                    href="/sports-t-shirts"
                    className="inline-flex items-center justify-center rounded-lg border border-[#0B2341] px-5 py-3 text-sm font-bold text-[#0B2341] transition hover:bg-[#0B2341] hover:text-white"
                  >
                    Sports T-Shirts →
                  </Link>
                </div>
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
                  title: "Corporate Polo T-Shirts",
                  href: "/corporate-polo-t-shirts",
                },
                {
                  title: "Corporate Uniform Manufacturer",
                  href: "/corporate-uniform-manufacturer",
                },
                {
                  title: "Sports T-Shirts",
                  href: "/sports-t-shirts",
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

          {/* FAQ */}

          <section id="faq" className="bg-slate-50">
            <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
              <div className="text-center">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Frequently Asked Questions
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  T-Shirt Manufacturer in Bangalore – FAQs
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
                Start Your Apparel Requirement
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Looking for a T-Shirt Manufacturer in Bangalore?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Share your T-shirt type, approximate quantity, fabric preference,
                branding requirement and delivery location with TES Apparels.
                Our team will discuss the requirement and guide you through the
                next steps.
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