import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "T-Shirt Manufacturer in Bangalore | TES Apparels",
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
    canonical: "https://www.tesapparels.com/t-shirt-manufacturer-bangalore",
  },
  openGraph: {
    title: "T-Shirt Manufacturer in Bangalore | TES Apparels",
    description:
      "Corporate, polo, sports, Dri-Fit and customized T-shirt manufacturing in Bangalore for bulk business and institutional requirements.",
    url: "https://www.tesapparels.com/t-shirt-manufacturer-bangalore",
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
      "TES Apparels manufactures corporate T-shirts, polo T-shirts, sports T-shirts, Dri-Fit T-shirts, promotional T-shirts, customized T-shirts and uniform apparel based on the customer's fabric, colour, size, branding and quantity requirements.",
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
        "https://www.tesapparels.com/t-shirt-manufacturer-bangalore#service",
      name: "T-Shirt Manufacturing in Bangalore",
      serviceType: "T-Shirt Manufacturing",
      provider: {
        "@id": "https://www.tesapparels.com/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Bengaluru",
      },
      description:
        "Corporate, polo, sports, Dri-Fit, promotional and customized T-shirt manufacturing for businesses and organizations in Bangalore and across India.",
      url: "https://www.tesapparels.com/t-shirt-manufacturer-bangalore",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tesapparels.com/t-shirt-manufacturer-bangalore#breadcrumb",
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
          name: "T-Shirt Manufacturer in Bangalore",
          item:
            "https://www.tesapparels.com/t-shirt-manufacturer-bangalore",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.tesapparels.com/t-shirt-manufacturer-bangalore#faq",
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
                solutions based on the intended use, branding requirements and
                order quantity.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Corporate T-Shirts",
                  text: "Professional T-shirts for employees, company events, internal programs, campaigns and branded corporate apparel.",
                  href: "/corporate-t-shirts",
                },
                {
                  title: "Polo T-Shirts",
                  text: "Customized polo T-shirts for office uniforms, staff apparel, hospitality teams, institutions and promotional programs.",
                  href: "/corporate-polo-t-shirts",
                },
                {
                  title: "Sports T-Shirts",
                  text: "Sports and team apparel designed for movement, comfort and customized team identity.",
                  href: "/sports-t-shirts",
                },
                {
                  title: "Dri-Fit T-Shirts",
                  text: "Lightweight performance apparel suitable for sports, fitness, outdoor activities and promotional campaigns.",
                  href: "/dri-fit-t-shirts",
                },
                {
                  title: "Promotional T-Shirts",
                  text: "Branded apparel for marketing campaigns, events, product launches, exhibitions and corporate activities.",
                  href: "/promotional-t-shirts",
                },
                {
                  title: "Customized Uniform T-Shirts",
                  text: "T-shirt-based uniform solutions for businesses, institutions, schools and organizations requiring consistent branding.",
                  href: "/uniform-t-shirt-manufacturers-bangalore",
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
                  text: "Suitable for comfortable corporate and promotional everyday apparel.",
                },
                {
                  title: "Performance Fabrics",
                  text: "Suitable for sports, fitness and active applications where lightweight comfort matters.",
                },
                {
                  title: "Polo Fabrics",
                  text: "Suitable for professional uniforms and corporate staff apparel.",
                },
                {
                  title: "GSM Selection",
                  text: "Fabric weight can be discussed according to the garment type, comfort and intended use.",
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
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Manufacturing Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              From Requirement to Bulk Production
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              A clear production process helps reduce misunderstandings and
              keeps the finished apparel aligned with the approved requirement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                number: "01",
                title: "Requirement",
                text: "Share product type, quantity, fabric, colours, sizes, branding and delivery requirements.",
              },
              {
                number: "02",
                title: "Specification",
                text: "Discuss garment construction, fabric and branding requirements suitable for the project.",
              },
              {
                number: "03",
                title: "Sampling",
                text: "Where required, sampling and artwork approval can be completed before bulk production.",
              },
              {
                number: "04",
                title: "Production",
                text: "Approved specifications are used for the bulk manufacturing process.",
              },
              {
                number: "05",
                title: "Delivery",
                text: "Finished apparel is prepared for delivery to Bangalore or other locations in India.",
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
                  Built Around Business Apparel Requirements
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  TES Apparels focuses on apparel requirements where branding,
                  consistency, professional appearance and dependable
                  production matter.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Bangalore-based apparel manufacturer",
                  "Corporate and promotional apparel expertise",
                  "Customized T-shirt and polo solutions",
                  "Sports and performance apparel options",
                  "Printing and embroidery support",
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
              T-Shirt Manufacturing for Different Business Needs
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our apparel solutions can be adapted for different organizational
              and promotional requirements.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
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
              "Retail Brands",
              "Hospitality",
              "Workwear",
              "Employee Uniforms",
            ].map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </section>

        {/* BANGALORE LOCAL SECTION */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  Serving Bangalore
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  T-Shirt Manufacturer Serving Businesses Across Bengaluru
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">
                  <p>
                    TES Apparels is located in Basaveshwar Nagar, Bengaluru,
                    Karnataka. Our location allows us to serve businesses and
                    organizations across Bangalore looking for corporate,
                    promotional, sports and customized apparel.
                  </p>

                  <p>
                    We also support customers outside Bangalore and provide
                    apparel delivery solutions across India.
                  </p>

                  <p>
                    Whether you need employee T-shirts, company polo uniforms,
                    sports jerseys, promotional T-shirts or customized bulk
                    apparel, our team can discuss the requirement and recommend
                    a suitable production approach.
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
                <h3 className="text-2xl font-bold">
                  TES Apparels
                </h3>

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
                title: "Corporate Polo T-Shirts",
                href: "/corporate-polo-t-shirts",
              },
              {
                title: "Corporate Uniforms",
                href: "/corporate-uniforms",
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
        <section
          id="faq"
          className="bg-slate-50"
        >
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