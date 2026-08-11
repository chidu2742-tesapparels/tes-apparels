import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "T-Shirt Embroidery Services in Bangalore | TES Apparels",
  description:
    "TES Apparels provides premium T-shirt embroidery services in Bangalore for corporate uniforms, polo T-shirts, workwear, caps and promotional apparel with customized logo embroidery and bulk manufacturing.",
  keywords: [
    "t shirt embroidery",
    "t-shirt embroidery",
    "t shirt embroidery in bangalore",
    "t shirt embroidery services bangalore",
    "custom t shirt embroidery bangalore",
    "corporate t shirt embroidery",
    "polo t shirt embroidery",
    "logo embroidery on t shirts",
    "corporate logo embroidery",
    "uniform embroidery",
    "workwear embroidery",
    "cap embroidery",
    "custom embroidery services bangalore",
    "bulk t shirt embroidery",
    "embroidered polo t shirts",
    "t shirt manufacturers in bangalore",
    "corporate uniform manufacturer bangalore",
    "customized apparel bangalore",
    "t shirt manufacturer in bangalore",
  ],
  alternates: {
    canonical: "https://www.tesapparels.com/t-shirt-embroidery",
  },
  openGraph: {
    title: "T-Shirt Embroidery Services in Bangalore | TES Apparels",
    description:
      "Premium logo embroidery for corporate T-shirts, polo T-shirts, uniforms, workwear, caps and promotional apparel in Bangalore and across India.",
    url: "https://www.tesapparels.com/t-shirt-embroidery",
    siteName: "TES Apparels",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "T-Shirt Embroidery Services in Bangalore | TES Apparels",
    description:
      "Professional T-shirt and corporate apparel embroidery services for businesses, institutions and organizations.",
  },
};

const faqs = [
  {
    question: "Does TES Apparels provide T-shirt embroidery in Bangalore?",
    answer:
      "Yes. TES Apparels provides customized embroidery services for T-shirts, polo T-shirts, corporate uniforms, workwear, caps and other promotional apparel for businesses and organizations in Bangalore and across India.",
  },
  {
    question: "Can you embroider our company logo on T-shirts?",
    answer:
      "Yes. Company logos, brand names and suitable artwork can be embroidered on T-shirts, polo T-shirts, uniforms, jackets, caps and other apparel depending on the garment and artwork requirements.",
  },
  {
    question: "What types of T-shirts are suitable for embroidery?",
    answer:
      "Polo T-shirts, cotton T-shirts, corporate T-shirts and other suitable garments can be customized with embroidery. The appropriate garment and embroidery method depends on fabric construction, logo size and design requirements.",
  },
  {
    question: "Do you provide polo T-shirt embroidery?",
    answer:
      "Yes. Polo T-shirt embroidery is commonly used for corporate uniforms, employee apparel, hospitality teams, institutions, promotional programs and professional branded clothing.",
  },
  {
    question: "Can embroidery be done on corporate uniforms?",
    answer:
      "Yes. TES Apparels provides logo embroidery solutions for corporate uniforms, workwear, industrial apparel and other professional garments where a durable and premium branding finish is required.",
  },
  {
    question: "Do you accept bulk embroidery orders?",
    answer:
      "Yes. TES Apparels supports bulk customized apparel requirements for companies, institutions, schools, sports teams, hospitality businesses, events and organizations.",
  },
  {
    question: "Is embroidery better than T-shirt printing?",
    answer:
      "Embroidery and printing are suitable for different applications. Embroidery provides a textured and premium appearance and is often preferred for corporate logos on polo T-shirts, uniforms, jackets and caps. Printing can be more suitable for large graphics, detailed artwork and certain promotional applications.",
  },
  {
    question: "Can I order customized embroidered T-shirts for my company?",
    answer:
      "Yes. You can discuss the T-shirt type, fabric, colour, logo, embroidery placement, sizes and quantity with TES Apparels. The team can help determine a suitable apparel and branding approach for your requirement.",
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
        "https://www.tesapparels.com/t-shirt-embroidery#service",
      name: "T-Shirt Embroidery Services",
      serviceType: "T-Shirt Embroidery",
      provider: {
        "@id": "https://www.tesapparels.com/#organization",
      },
      areaServed: {
        "@type": "City",
        name: "Bengaluru",
      },
      description:
        "Professional embroidery services for corporate T-shirts, polo T-shirts, uniforms, workwear, caps and promotional apparel.",
      url: "https://www.tesapparels.com/t-shirt-embroidery",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.tesapparels.com/t-shirt-embroidery#breadcrumb",
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
          name: "T-Shirt Embroidery",
          item: "https://www.tesapparels.com/t-shirt-embroidery",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.tesapparels.com/t-shirt-embroidery#faq",
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

export default function TshirtEmbroideryPage() {
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
                  T-Shirt Embroidery
                </span>
              </nav>

              <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
                Premium Apparel Branding
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                T-Shirt Embroidery Services in Bangalore for Corporate & Customized Apparel
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                TES Apparels provides professional T-shirt embroidery
                services for corporate uniforms, polo T-shirts,
                workwear, caps, jackets and promotional apparel.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                From company logos and brand names to customized
                embroidery designs, we help businesses create
                professional apparel with a premium and durable
                embroidered finish.
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
                Professional T-Shirt Embroidery
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
                Premium Logo Embroidery for Corporate Apparel
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">

                <p>
                  Embroidery is a popular branding method for
                  organizations looking for a professional and
                  premium appearance on corporate clothing. A
                  well-designed embroidered logo can give uniforms
                  and polo T-shirts a distinctive branded identity.
                </p>

                <p>
                  TES Apparels provides customized embroidery
                  solutions for businesses, institutions, schools,
                  hospitality teams, industrial organizations,
                  sports teams and promotional programs.
                </p>

                <p>
                  We can discuss the garment type, logo artwork,
                  embroidery placement, colours, sizes and quantity
                  before production so the finished apparel is
                  aligned with the intended application.
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
                    T-Shirt & Apparel Embroidery
                  </dd>
                </div>

                <div>
                  <dt className="text-sm font-semibold text-slate-500">
                    Applications
                  </dt>

                  <dd className="mt-1 font-semibold text-slate-900">
                    Corporate, Uniforms & Promotional
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

        {/* SERVICES */}
        <section className="bg-slate-50">

          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Embroidery Services
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Customized Embroidery for Different Apparel Requirements
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Choose embroidery based on your garment type,
                branding requirements and intended application.
              </p>

            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {[
                {
                  title: "Corporate Logo Embroidery",
                  text: "Professional company logo embroidery for employee uniforms, office apparel and corporate clothing.",
                },
                {
                  title: "Polo T-Shirt Embroidery",
                  text: "Premium embroidered polo T-shirts suitable for office teams, hospitality staff, institutions and professional uniforms.",
                },
                {
                  title: "Workwear Embroidery",
                  text: "Customized embroidery for industrial uniforms, workwear, jackets and employee apparel.",
                },
                {
                  title: "Cap Embroidery",
                  text: "Customized company logos and branding embroidered on caps for promotions, events and employee apparel.",
                },
                {
                  title: "Jacket Embroidery",
                  text: "Professional branding for corporate jackets, outdoor apparel and promotional clothing.",
                },
                {
                  title: "Promotional Embroidery",
                  text: "Customized embroidered apparel for exhibitions, events, marketing campaigns and promotional activities.",
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
                    href="/#contact"
                    className="mt-5 inline-flex font-bold text-[#0B2341] hover:text-[#C49A00]"
                  >
                    Discuss requirement →
                  </Link>
                </article>
              ))}

            </div>
          </div>
        </section>

        {/* WHY EMBROIDERY */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Why Choose Embroidery?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                Give Your Corporate Apparel a Premium Branded Finish
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Embroidery creates a raised, textured appearance
                that can make company logos and brand names stand
                out on suitable garments.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                It is particularly popular for corporate polo
                T-shirts, uniforms, jackets, workwear and caps
                where a professional appearance and durable
                branding are important.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Professional appearance",
                "Premium textured finish",
                "Suitable for company logos",
                "Ideal for polo T-shirts",
                "Suitable for uniforms",
                "Suitable for workwear",
                "Corporate branding",
                "Bulk apparel customization",
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

        {/* EMBROIDERY VS PRINTING */}
        <section className="bg-[#0B2341] text-white">

          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

            <div className="max-w-3xl">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
                Embroidery vs Printing
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Choosing the Right Branding Method
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Both embroidery and printing can be effective
                apparel branding methods. The right choice depends
                on the garment, artwork, design complexity and
                intended appearance.
              </p>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">

                <h3 className="text-2xl font-bold text-white">
                  Embroidery
                </h3>

                <ul className="mt-5 space-y-3 text-slate-300">

                  <li>✓ Premium textured appearance</li>
                  <li>✓ Suitable for company logos</li>
                  <li>✓ Popular on polo T-shirts</li>
                  <li>✓ Suitable for uniforms and workwear</li>
                  <li>✓ Excellent for caps and jackets</li>
                  <li>✓ Professional corporate appearance</li>

                </ul>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">

                <h3 className="text-2xl font-bold text-white">
                  Printing
                </h3>

                <ul className="mt-5 space-y-3 text-slate-300">

                  <li>✓ Suitable for large graphics</li>
                  <li>✓ Useful for detailed artwork</li>
                  <li>✓ Suitable for promotional T-shirts</li>
                  <li>✓ Multiple printing technologies available</li>
                  <li>✓ Useful for event apparel</li>
                  <li>✓ Suitable for creative designs</li>

                </ul>

              </div>

            </div>

          </div>
        </section>

        {/* CUSTOMIZATION */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Customization Options
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Customize Your Embroidered Apparel
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Discuss your apparel specifications and branding
              requirements with TES Apparels before production.
            </p>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Logo artwork",
              "Logo placement",
              "Thread colours",
              "Garment colours",
              "T-Shirt fabric",
              "Polo fabric",
              "Size specifications",
              "Custom labels",
              "Corporate branding",
              "Uniform requirements",
              "Bulk quantities",
              "Packaging requirements",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-5 text-center font-semibold text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}

          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-slate-50">

          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                Our Process
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                From Logo Artwork to Finished Apparel
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                A structured process helps ensure that the finished
                embroidered apparel matches the approved
                requirement.
              </p>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

              {[
                {
                  number: "01",
                  title: "Requirement",
                  text: "Share your garment type, quantity, logo and branding requirements.",
                },
                {
                  number: "02",
                  title: "Artwork",
                  text: "Provide the company logo or embroidery artwork for discussion.",
                },
                {
                  number: "03",
                  title: "Specification",
                  text: "Discuss garment colour, placement, sizes, thread colours and quantity.",
                },
                {
                  number: "04",
                  title: "Production",
                  text: "Approved specifications are used for apparel customization and embroidery.",
                },
                {
                  number: "05",
                  title: "Delivery",
                  text: "Finished customized apparel is prepared for delivery to Bangalore or other locations.",
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

        {/* PRODUCTS */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Embroidered Apparel
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Apparel That Can Be Customized With Embroidery
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
                href: "/corporate-uniform-manufacturer",
              },
              {
                title: "Sports T-Shirts",
                href: "/sports-t-shirts",
              },
              {
                title: "Dri-Fit T-Shirts",
                href: "/dri-fit-t-shirts",
              },
              {
                title: "T-Shirt Printing",
                href: "/t-shirt-printing",
              },
              {
                title: "T-Shirt Manufacturer",
                href: "/t-shirt-manufacturer",
              },
              {
                title: "T-Shirt Manufacturer Bangalore",
                href: "/t-shirt-manufacturer-bangalore",
              },
              {
                title: "School Uniforms",
                href: "/school-uniform-manufacturer",
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

        {/* BANGALORE */}
        <section className="bg-slate-50">

          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

              <div>

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
                  T-Shirt Embroidery in Bangalore
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
                  Corporate Embroidery Services Serving Bengaluru Businesses
                </h2>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">

                  <p>
                    TES Apparels is located in Basaveshwar Nagar,
                    Bengaluru, Karnataka and provides customized
                    apparel solutions for businesses and
                    organizations in Bangalore.
                  </p>

                  <p>
                    Our embroidery services are suitable for
                    companies requiring branded polo T-shirts,
                    employee uniforms, workwear, jackets, caps and
                    other customized apparel.
                  </p>

                  <p>
                    We also support customers outside Bangalore
                    through apparel manufacturing and delivery
                    solutions across India.
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
                    <strong className="text-white">
                      Phone:
                    </strong>{" "}
                    <a
                      href="tel:+919880038910"
                      className="hover:text-[#E4C65A]"
                    >
                      +91 9880038910
                    </a>
                  </p>

                  <p>
                    <strong className="text-white">
                      Email:
                    </strong>{" "}
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

        {/* INDUSTRIES */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Industries We Serve
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Embroidered Apparel for Businesses & Institutions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Customized embroidery can be used across a wide
              range of professional, institutional and promotional
              applications.
            </p>

          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">

            {[
              "Corporate Offices",
              "IT Companies",
              "Manufacturing",
              "Startups",
              "Hotels",
              "Restaurants",
              "Hospitals",
              "Schools",
              "Colleges",
              "Sports Teams",
              "Fitness Centres",
              "Events",
              "Exhibitions",
              "Security Services",
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
                T-Shirt Embroidery – FAQs
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
              Start Your Apparel Branding
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Looking for Professional T-Shirt Embroidery in Bangalore?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Share your garment type, logo, approximate quantity,
              preferred placement and delivery location with TES
              Apparels. Our team can discuss your embroidery and
              customized apparel requirements.
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