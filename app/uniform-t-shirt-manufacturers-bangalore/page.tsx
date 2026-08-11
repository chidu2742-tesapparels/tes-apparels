import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uniform T-Shirt Manufacturer in Bangalore | TES Apparels",
  description:
    "TES Apparels is a uniform T-shirt manufacturer in Bangalore supplying customized corporate, school, college, industrial, hotel, hospital and institutional T-shirts in bulk.",
  keywords: [
    "uniform t shirt manufacturer in bangalore",
    "uniform t shirt manufacturers in bangalore",
    "uniform t shirt manufacturer Bangalore",
    "t shirt uniform manufacturer in bangalore",
    "corporate uniform t shirt manufacturer",
    "school uniform t shirt manufacturer",
    "college uniform t shirt manufacturer",
    "industrial uniform t shirt manufacturer",
    "hotel uniform t shirt manufacturer",
    "hospital uniform t shirt manufacturer",
    "institutional uniform t shirt manufacturer",
    "custom uniform t shirts bangalore",
    "bulk uniform t shirts bangalore",
    "customized uniform t shirt manufacturer",
    "uniform t shirt manufacturers in Karnataka",
    "uniform t shirt manufacturer in India",
  ],
  alternates: {
    canonical:
      "https://www.tesapparels.com/uniform-t-shirt-manufacturers-bangalore",
  },
  openGraph: {
    title: "Uniform T-Shirt Manufacturer in Bangalore | TES Apparels",
    description:
      "Customized uniform T-shirts for corporate offices, schools, colleges, factories, hotels, hospitals and institutions. Bulk manufacturing by TES Apparels.",
    url:
      "https://www.tesapparels.com/uniform-t-shirt-manufacturers-bangalore",
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uniform T-Shirt Manufacturer in Bangalore | TES Apparels",
    description:
      "Bulk customized uniform T-shirt manufacturing in Bangalore for corporate, school, industrial, hospitality and institutional requirements.",
  },
};

const faqs = [
  {
    question:
      "Is TES Apparels a uniform T-shirt manufacturer in Bangalore?",
    answer:
      "Yes. TES Apparels manufactures customized uniform T-shirts for corporate employees, schools, colleges, factories, industrial teams, hotels, hospitals and other institutions in Bangalore and across India.",
  },
  {
    question: "What types of uniform T-shirts do you manufacture?",
    answer:
      "We manufacture customized polo T-shirts, round-neck T-shirts, sports and Dri-Fit T-shirts and other T-shirt-based uniform solutions according to the application, fabric, colour, branding and quantity requirements.",
  },
  {
    question: "Can you add our company or institution logo?",
    answer:
      "Yes. Uniform T-shirts can be customized with company, school, college or institution logos using suitable embroidery or printing methods based on the garment and artwork.",
  },
  {
    question: "Do you supply uniform T-shirts in bulk?",
    answer:
      "Yes. TES Apparels works with organizations requiring bulk uniform T-shirt production for employees, students, teams, events, industrial staff and institutional programs.",
  },
  {
    question: "Can we select the colour and fabric?",
    answer:
      "Yes. Fabric, colour, GSM, sizing, branding and finishing requirements can be discussed according to the product and intended application.",
  },
  {
    question: "Do you manufacture polo T-shirts for corporate uniforms?",
    answer:
      "Yes. Customized polo T-shirts are suitable for corporate employees, hospitality teams, institutions, field staff and other professional uniform requirements.",
  },
  {
    question: "Do you supply school and college uniform T-shirts?",
    answer:
      "Yes. TES Apparels can manufacture customized T-shirts for school houses, college events, sports teams, student activities and institutional programs.",
  },
  {
    question: "Do you provide industrial uniform T-shirts?",
    answer:
      "Yes. Customized T-shirts and polo T-shirts can be manufactured for factories, engineering companies, production units, maintenance teams and other industrial applications.",
  },
  {
    question: "Do you deliver outside Bangalore?",
    answer:
      "Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India through PAN India delivery.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Share the T-shirt type, approximate quantity, preferred colour and fabric, logo or branding requirements and delivery location with TES Apparels. Our team can discuss your requirement and guide you through the quotation process.",
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
        "https://www.tesapparels.com/uniform-t-shirt-manufacturers-bangalore#service",
      name: "Uniform T-Shirt Manufacturing in Bangalore",
      serviceType: "Uniform T-Shirt Manufacturing",
      provider: {
        "@id": "https://www.tesapparels.com/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Bengaluru",
      },
      description:
        "Customized uniform T-shirt manufacturing for corporate employees, schools, colleges, factories, industrial teams, hotels, hospitals and institutions.",
      url:
        "https://www.tesapparels.com/uniform-t-shirt-manufacturers-bangalore",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tesapparels.com/uniform-t-shirt-manufacturers-bangalore#breadcrumb",
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
          name: "Uniform T-Shirt Manufacturer in Bangalore",
          item:
            "https://www.tesapparels.com/uniform-t-shirt-manufacturers-bangalore",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.tesapparels.com/uniform-t-shirt-manufacturers-bangalore#faq",
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

export default function UniformTshirtManufacturerBangalorePage() {
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
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <span className="mx-2">/</span>

              <span className="text-white">
                Uniform T-Shirt Manufacturer in Bangalore
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
                Customized Uniform T-Shirt Manufacturing
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Uniform T-Shirt Manufacturer in Bangalore for Corporate,
                School & Industrial Teams
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                TES Apparels manufactures customized uniform T-shirts for
                corporate employees, schools, colleges, factories, industrial
                teams, hotels, hospitals and institutions.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                Choose your preferred T-shirt style, fabric, colour, sizing
                and branding requirements. We support bulk manufacturing for
                organizations looking for consistent, professional and
                customized uniforms.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#A98200]"
                >
                  Request a Uniform Quote
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
                Uniform T-Shirt Manufacturing
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Customized T-Shirt Uniforms Designed Around Your Organization
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  A uniform T-shirt can provide employees, students and teams
                  with a consistent professional appearance while making
                  company or institution branding more visible.
                </p>

                <p>
                  TES Apparels manufactures customized uniform T-shirts for
                  organizations that need bulk apparel with consistent
                  colours, sizing, branding and finishing.
                </p>

                <p>
                  We work with different requirements including corporate
                  uniforms, school and college apparel, industrial workwear,
                  hospitality uniforms, hospital and institutional T-shirts,
                  promotional programs and team apparel.
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
                    Customized Uniform Apparel
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Products
                  </dt>

                  <dd className="mt-1 font-semibold text-slate-900">
                    Polo, Round-Neck & Dri-Fit T-Shirts
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

        {/* TARGET INDUSTRIES */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Industries We Serve
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Uniform T-Shirts for Different Organizations
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Our uniform T-shirt solutions can be customized for different
                employee, student, team and institutional requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Corporate Offices",
                  text: "Professional polo and round-neck T-shirts for employees, teams, events and company programs.",
                },
                {
                  title: "Schools & Colleges",
                  text: "House T-shirts, sports apparel, activity T-shirts and customized institutional uniforms.",
                },
                {
                  title: "Factories & Industry",
                  text: "Durable T-shirt uniforms for production, engineering, maintenance and field teams.",
                },
                {
                  title: "Hotels & Hospitality",
                  text: "Customized staff T-shirts and polo uniforms for hospitality and service teams.",
                },
                {
                  title: "Hospitals",
                  text: "Comfortable customized T-shirts for support teams, events, campaigns and institutional programs.",
                },
                {
                  title: "Institutions",
                  text: "Branded apparel for colleges, training centres, organizations and other institutions.",
                },
                {
                  title: "Sports Teams",
                  text: "Customized team T-shirts and Dri-Fit apparel with names, numbers and logos.",
                },
                {
                  title: "Events & Promotions",
                  text: "Branded T-shirts for exhibitions, campaigns, employee activities and promotional events.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-[#0B2341]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* T-SHIRT TYPES */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Uniform T-Shirt Options
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Choose the Right T-Shirt Style for Your Uniform
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Different organizations have different uniform requirements.
              Choose a garment style according to comfort, appearance,
              application and branding requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Corporate Polo T-Shirts",
                text: "A professional choice for offices, sales teams, hospitality staff, institutions and corporate uniforms.",
                href: "/corporate-polo-t-shirts",
              },
              {
                title: "Round-Neck Uniform T-Shirts",
                text: "Comfortable T-shirts for schools, colleges, events, promotions, employee activities and casual uniforms.",
                href: "/products/round-neck-tshirts",
              },
              {
                title: "Sports & Dri-Fit T-Shirts",
                text: "Lightweight performance apparel for sports teams, fitness activities, outdoor programs and active staff.",
                href: "/dri-fit-t-shirts",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
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

        {/* CUSTOMIZATION */}
        <section className="bg-[#0B2341] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                  Customization
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Customize Your Uniform T-Shirts With Your Brand Identity
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  Your uniform should represent your organization. TES
                  Apparels supports customization across garment colour,
                  fabric, sizing, logo placement, printing, embroidery and
                  other finishing requirements.
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  Specifications can be discussed before bulk production so
                  the final apparel is aligned with your organization's
                  branding and intended use.
                </p>

                <Link
                  href="/#contact"
                  className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
                >
                  Discuss Your Requirement
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Custom fabric selection",
                  "GSM selection",
                  "Custom colours",
                  "Company branding",
                  "School branding",
                  "Institution logos",
                  "Screen printing",
                  "DTF printing",
                  "Embroidery",
                  "Custom labels",
                  "Size specifications",
                  "Bulk manufacturing",
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

        {/* FABRIC */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Fabric & Quality
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Uniform T-Shirt Fabrics for Different Applications
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Fabric selection plays an important role in uniform comfort,
              appearance and durability. TES Apparels can discuss suitable
              fabric options based on the application, garment style and
              organization requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Cotton",
                text: "Comfortable option for everyday corporate, institutional and promotional apparel.",
              },
              {
                title: "Poly Cotton",
                text: "A practical option where comfort, durability and easy maintenance are important.",
              },
              {
                title: "Dri-Fit",
                text: "Suitable for sports, active teams, outdoor programs and performance-oriented applications.",
              },
              {
                title: "Polo Fabrics",
                text: "Suitable for professional corporate uniforms and hospitality staff apparel.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
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
        </section>

        {/* PROCESS */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Manufacturing Process
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                From Uniform Requirement to Bulk Delivery
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We help organizations define their apparel requirements before
                moving towards bulk manufacturing.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {[
                {
                  number: "01",
                  title: "Requirement",
                  text: "Share garment type, quantity, colours, fabric, sizes and branding requirements.",
                },
                {
                  number: "02",
                  title: "Specification",
                  text: "Discuss fabric, GSM, garment construction, colours and branding methods.",
                },
                {
                  number: "03",
                  title: "Artwork",
                  text: "Share company, school or institution logo and branding artwork.",
                },
                {
                  number: "04",
                  title: "Production",
                  text: "Approved specifications are used for bulk uniform manufacturing.",
                },
                {
                  number: "05",
                  title: "Delivery",
                  text: "Finished uniforms are prepared for delivery in Bangalore or other locations.",
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
                A Practical Uniform Manufacturing Partner
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                TES Apparels focuses on customized apparel requirements where
                consistent branding, professional appearance, garment quality
                and bulk production are important.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Whether you need uniforms for employees, students, industrial
                teams, hospitality staff or institutional programs, our team
                can discuss your requirements and help define the appropriate
                apparel solution.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Bangalore-based apparel manufacturer",
                "Customized corporate uniforms",
                "School and college uniform solutions",
                "Industrial and factory apparel",
                "Hospitality and institutional uniforms",
                "Printing and embroidery support",
                "Bulk uniform manufacturing",
                "PAN India delivery support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl bg-slate-50 p-4"
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
                  Serving Bangalore
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  Uniform T-Shirt Manufacturer Serving Bengaluru
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">
                  <p>
                    TES Apparels is located in Basaveshwar Nagar, Bengaluru,
                    Karnataka. We support organizations across Bangalore
                    looking for customized uniform T-shirts and bulk apparel.
                  </p>

                  <p>
                    Our service can be suitable for companies, schools,
                    colleges, factories, industrial units, hotels, hospitals,
                    institutions, sports teams and promotional programs.
                  </p>

                  <p>
                    We also support customers outside Bangalore with apparel
                    delivery across India.
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
                  Request a Uniform Quote
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Tell us what type of uniform T-shirt you need, approximate
                  quantity, preferred colour, fabric and branding requirements.
                </p>

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
                    <strong className="text-white">
                      Business Hours:
                    </strong>
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
                title: "Corporate Polo T-Shirts",
                href: "/corporate-polo-t-shirts",
              },
              {
                title: "School Uniform Manufacturer",
                href: "/school-uniform-manufacturer",
              },
              {
                title: "T-Shirt Embroidery",
                href: "/t-shirt-embroidery",
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
                Uniform T-Shirt Manufacturer in Bangalore – FAQs
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
              Get Your Uniform T-Shirts Manufactured
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for a Uniform T-Shirt Manufacturer in Bangalore?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Share your organization type, T-shirt style, approximate
              quantity, preferred fabric, colours and branding requirements
              with TES Apparels. Our team will discuss your requirement and
              guide you through the next steps.
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