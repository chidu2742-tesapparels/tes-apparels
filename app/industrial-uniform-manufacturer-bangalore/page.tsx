import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
title: "Industrial Uniform Manufacturer in Bangalore | TES Apparels",
description:
"TES Apparels is an industrial uniform manufacturer in Bangalore supplying customized shirts, trousers and complete factory uniforms for manufacturing and industrial companies.",
keywords: [
"industrial uniform manufacturer in bangalore",
"industrial uniform manufacturers in bangalore",
"industrial uniform supplier in bangalore",
"factory uniform manufacturer in bangalore",
"factory uniform suppliers in bangalore",
"factory uniform manufacturer bangalore",
"industrial workwear manufacturer bangalore",
"industrial workwear suppliers bangalore",
"factory workwear manufacturer bangalore",
"factory employee uniform manufacturer bangalore",
"manufacturing company uniform manufacturer bangalore",
"industrial shirts manufacturer bangalore",
"industrial trousers manufacturer bangalore",
"factory shirts manufacturer bangalore",
"factory trousers manufacturer bangalore",
"industrial uniform supplier bangalore",
"bulk industrial uniform manufacturer bangalore",
"customized industrial uniforms bangalore",
"factory uniform manufacturer in karnataka",
"industrial uniform manufacturer in karnataka",
"industrial uniform manufacturer in india",
],
alternates: {
canonical:
"https://tesapparels.com/industrial-uniform-manufacturer-bangalore",
},
openGraph: {
title: "Industrial Uniform Manufacturer in Bangalore | TES Apparels",
description:
"Customized industrial uniforms, factory shirts and trousers manufactured in Bangalore for factories, manufacturing companies and industrial teams.",
url: "https://tesapparels.com/industrial-uniform-manufacturer-bangalore",
siteName: "TES Apparels",
type: "website",
locale: "en_IN",
},
twitter: {
card: "summary_large_image",
title: "Industrial Uniform Manufacturer in Bangalore | TES Apparels",
description:
"Customized factory uniforms, industrial shirts and trousers for manufacturing companies and industrial teams in Bangalore.",
},
};

const faqs = [
{
question:
"Is TES Apparels an industrial uniform manufacturer in Bangalore?",
answer:
"Yes. TES Apparels is a Bangalore-based apparel manufacturer providing customized industrial uniforms, factory shirts, trousers and employee workwear for manufacturing and industrial companies.",
},
{
question: "What industrial uniforms does TES Apparels manufacture?",
answer:
"TES Apparels focuses on customized industrial uniform solutions including work shirts, industrial shirts, work trousers and complete shirt-and-trouser uniform sets.",
},
{
question: "Can you manufacture uniforms for factories?",
answer:
"Yes. TES Apparels can manufacture customized employee uniforms for factories, manufacturing companies, engineering businesses, production units and other industrial organizations.",
},
{
question: "Can industrial uniforms include our company logo?",
answer:
"Yes. Company logos and branding can be incorporated using suitable embroidery or printing methods depending on the garment, fabric and branding requirements.",
},
{
question: "Can we choose the colour and fabric?",
answer:
"Yes. Industrial uniform specifications can be developed according to the required colour, fabric, GSM, fit, sizing, garment construction and intended workplace application.",
},
{
question: "Do you manufacture industrial uniforms in bulk?",
answer:
"Yes. TES Apparels supports bulk uniform manufacturing requirements for factories, manufacturing companies and industrial organizations. Quantity and production specifications can be discussed before production.",
},
{
question: "Can you manufacture matching shirts and trousers?",
answer:
"Yes. Industrial uniform programs can include coordinated shirts and trousers designed around the company's preferred colours, branding and employee requirements.",
},
{
question: "Do you supply industrial uniforms outside Bangalore?",
answer:
"Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India through PAN India delivery.",
},
{
question: "How can I request a quotation for factory uniforms?",
answer:
"Share your company requirement, approximate employee count or quantity, preferred shirt and trouser specifications, branding requirements and delivery location with TES Apparels. The team can then discuss the requirement and quotation process.",
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
email: "[chidanand@tesapparels.com](mailto:chidanand@tesapparels.com)",
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
email: "[chidanand@tesapparels.com](mailto:chidanand@tesapparels.com)",
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
"https://tesapparels.com/industrial-uniform-manufacturer-bangalore#service",
name: "Industrial Uniform Manufacturing in Bangalore",
serviceType: "Industrial Uniform Manufacturing",
provider: {
"@id": "https://tesapparels.com/#organization",
},
areaServed: {
"@type": "City",
name: "Bengaluru",
},
description:
"Customized industrial uniform manufacturing for factories, manufacturing companies and industrial teams in Bangalore, including work shirts, industrial shirts, trousers and complete factory uniform sets.",
url: "https://tesapparels.com/industrial-uniform-manufacturer-bangalore",
},
{
"@type": "BreadcrumbList",
"@id":
"https://tesapparels.com/industrial-uniform-manufacturer-bangalore#breadcrumb",
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
name: "Industrial Uniform Manufacturer in Bangalore",
item:
"https://tesapparels.com/industrial-uniform-manufacturer-bangalore",
},
],
},
{
"@type": "FAQPage",
"@id":
"https://tesapparels.com/industrial-uniform-manufacturer-bangalore#faq",
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

const products = [
{
title: "Industrial Work Shirts",
text:
"Customized work shirts for factory employees, production teams, engineering teams and industrial workplaces.",
},
{
title: "Industrial Work Trousers",
text:
"Durable work trousers designed to complement industrial shirts and provide a coordinated employee uniform.",
},
{
title: "Shirt & Trouser Uniform Sets",
text:
"Complete matching uniform sets customized around company colours, employee requirements and branding.",
},
{
title: "Factory Employee Uniforms",
text:
"Uniform programs for factories and manufacturing organizations requiring consistent employee appearance across teams.",
},
];

const customizationOptions = [
"Company colours",
"Fabric selection",
"GSM selection",
"Custom sizing",
"Company logo",
"Embroidery",
"Screen printing",
"DTF printing",
"Custom labels",
"Shirt customization",
"Trouser customization",
"Bulk production",
];

const industries = [
"Manufacturing Companies",
"Factories",
"Engineering Companies",
"Automotive Companies",
"Industrial Units",
"Production Units",
"Warehouse Operations",
"Logistics Teams",
"Maintenance Teams",
"Machine Manufacturing",
"Electrical Industries",
"Industrial Contractors",
];

const processSteps = [
{
number: "01",
title: "Requirement",
text:
"Share your employee count, uniform products, approximate quantity, branding requirements and delivery location.",
},
{
number: "02",
title: "Specification",
text:
"Discuss fabric, GSM, colours, sizes, shirt construction, trouser specifications and logo placement.",
},
{
number: "03",
title: "Sampling",
text:
"Where required, samples and artwork can be reviewed before proceeding with bulk industrial uniform production.",
},
{
number: "04",
title: "Production",
text:
"Approved garment specifications are followed during manufacturing and branding of the required uniforms.",
},
{
number: "05",
title: "Delivery",
text:
"Finished industrial uniforms are prepared for delivery in Bangalore or other locations across India.",
},
];

export default function IndustrialUniformManufacturerBangalorePage() {
return (
<>
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(jsonLd),
}}
/>

```
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
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <span className="mx-2">/</span>

            <span className="text-white">
              Industrial Uniform Manufacturer in Bangalore
            </span>
          </nav>

          <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
            Bangalore-Based Industrial Apparel Manufacturer
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Industrial Uniform Manufacturer in Bangalore for Factories &
            Manufacturing Companies
          </h1>

          <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
            TES Apparels is an industrial uniform manufacturer in Bangalore
            supplying customized work shirts, industrial trousers and
            complete factory uniforms for manufacturing companies,
            industrial teams and production organizations.
          </p>

          <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
            From fabric selection and garment specifications to company
            branding, embroidery, printing and bulk production, we help
            businesses develop practical and professional industrial
            uniform programs according to their requirements.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#C49A00] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#A98200]"
            >
              Request an Industrial Uniform Quote
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
            Industrial Uniform Manufacturing
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
            Customized Industrial Uniforms for Bangalore Factories
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            <p>
              Industrial employees often work in environments where
              durability, comfort, easy maintenance and consistent
              appearance are important. A properly designed factory
              uniform can help create a professional appearance across
              production, engineering and support teams.
            </p>

            <p>
              TES Apparels works with manufacturing companies, factories,
              engineering businesses and industrial organizations looking
              for customized employee uniforms in Bangalore.
            </p>

            <p>
              Industrial uniform requirements can be developed around work
              shirts, trousers or complete matching shirt-and-trouser
              uniform sets with company colours and branding.
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
                Focus
              </dt>
              <dd className="mt-1 font-semibold text-slate-900">
                Industrial & Employee Workwear
              </dd>
            </div>

            <div>
              <dt className="text-sm font-semibold text-slate-500">
                Products
              </dt>
              <dd className="mt-1 font-semibold text-slate-900">
                Work Shirts, Trousers & Uniform Sets
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
            Industrial Uniform Products
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
            Factory Uniform Shirts & Trousers for Industrial Teams
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Choose individual workwear products or develop a complete
            customized factory uniform program for your organization.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
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

    {/* FACTORY TEAMS */}
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
            For Factories & Industrial Companies
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
            Industrial Uniforms Designed for Manufacturing Workplaces
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600">
            <p>
              Manufacturing and industrial companies often need uniforms
              that provide a consistent professional appearance across
              employees while being suitable for regular workplace use.
            </p>

            <p>
              TES Apparels provides customized industrial clothing options
              for factory workers, production teams, engineering employees,
              maintenance teams and other industrial staff.
            </p>

            <p>
              Uniform programs can be developed around matching shirts and
              trousers, company colours, employee sizes, departments and
              branding requirements.
            </p>
          </div>

          <Link
            href="/#contact"
            className="mt-7 inline-flex rounded-lg bg-[#0B2341] px-6 py-3 font-bold text-white transition hover:bg-[#123762]"
          >
            Discuss Your Factory Requirement
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Professional employee appearance",
            "Company colour matching",
            "Custom company branding",
            "Department-wise uniforms",
            "Employee size specifications",
            "Matching shirts and trousers",
            "Bulk employee uniforms",
            "PAN India delivery",
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

    {/* CUSTOMIZATION */}
    <section className="bg-[#0B2341] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
              Industrial Uniform Customization
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Customize Your Factory Uniform to Match Your Requirements
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Industrial apparel can be customized according to company
              identity, employee requirements and workplace needs. Fabric,
              colours, sizing and branding can be discussed before bulk
              production.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Whether you need work shirts and trousers for a factory or a
              complete employee uniform program, TES Apparels can discuss
              the required specifications.
            </p>

            <Link
              href="/t-shirt-embroidery"
              className="mt-7 inline-flex rounded-lg bg-[#C49A00] px-6 py-3 font-bold text-white transition hover:bg-[#A98200]"
            >
              Explore Branding & Embroidery
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
          Choose Industrial Uniform Fabrics Based on Workplace Needs
        </h2>

        <p className="mt-5 leading-7 text-slate-600">
          Fabric selection can be discussed according to the garment type,
          workplace environment, comfort requirements, appearance and
          intended application.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Cotton",
            text:
              "Comfortable fabric options for employee uniforms and everyday industrial apparel.",
          },
          {
            title: "Poly Cotton",
            text:
              "Suitable for uniforms where durability, easy maintenance and comfort are important.",
          },
          {
            title: "Workwear Fabrics",
            text:
              "Options can be discussed for industrial environments requiring practical and durable garments.",
          },
          {
            title: "Custom Specifications",
            text:
              "Fabric, GSM and garment requirements can be discussed based on the intended workplace application.",
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
    </section>

    {/* BRANDING */}
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Industrial Uniform Branding
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Professional Company Logo Branding for Factory Uniforms
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Company logos can be incorporated into industrial uniforms
              using suitable embroidery and printing techniques.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Logo placement, size, artwork and branding method can be
              discussed according to the garment, fabric and intended
              application.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "Embroidery",
                "Screen Printing",
                "DTF Printing",
                "Logo Branding",
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
              Need Branded Factory Uniforms?
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Share your company logo, preferred uniform products,
              approximate quantity and industrial clothing requirements
              with TES Apparels.
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

    {/* PROCESS */}
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
          Industrial Uniform Manufacturing Process
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
          From Factory Requirement to Finished Uniform
        </h2>

        <p className="mt-5 leading-7 text-slate-600">
          A structured process helps keep industrial apparel aligned with
          approved specifications before bulk production.
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

    {/* WHY TES */}
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Why TES Apparels
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              An Industrial Apparel Partner for Bangalore Companies
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              TES Apparels focuses on customized employee apparel where
              professional appearance, branding, comfort and production
              consistency are important.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Bangalore-based apparel manufacturer",
              "Industrial and employee uniform expertise",
              "Work shirts and industrial shirts",
              "Matching work trousers",
              "Company logo branding",
              "Printing and embroidery support",
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

    {/* INDUSTRIES */}
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
          Industries We Serve
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
          Industrial Uniforms for Factories & Manufacturing Companies
        </h2>

        <p className="mt-5 leading-7 text-slate-600">
          Our industrial apparel solutions can be customized for different
          workplace environments and organizational requirements.
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
              Industrial Uniforms in Bangalore
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Industrial Uniform Manufacturer Serving Businesses Across
              Bengaluru
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                TES Apparels is located in Basaveshwar Nagar, Bengaluru,
                Karnataka. We support factories and manufacturing companies
                looking for customized industrial uniforms and employee
                workwear.
              </p>

              <p>
                Our Bangalore location enables us to work with businesses
                across major industrial and commercial areas while also
                supporting customers outside Bangalore.
              </p>

              <p>
                Whether you need work shirts for factory employees,
                matching trousers for production teams or a complete
                industrial uniform program, our team can discuss your
                requirement.
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Basaveshwar Nagar",
                "Rajajinagar",
                "Peenya",
                "Yeshwanthpur",
                "Nagarbhavi",
                "Vijayanagar",
                "Bommanahalli",
                "Electronic City",
                "Whitefield",
                "Hosur Road",
                "Jigani",
                "Bommasandra",
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
            title: "Corporate Uniform Manufacturer",
            href: "/corporate-uniform-manufacturer",
          },
          {
            title: "Corporate Workwear Manufacturer",
            href: "/corporate-workwear-manufacturer-bangalore",
          },
          {
            title: "Formal Shirt Manufacturer",
            href: "/formal-shirt-manufacturer-bangalore",
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
            Industrial Uniform Manufacturer in Bangalore – FAQs
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
          Bulk Industrial Uniform Requirement
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Looking for an Industrial Uniform Manufacturer in Bangalore?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Share your factory uniform requirements, approximate quantity,
          preferred shirts and trousers, branding requirements and delivery
          location with TES Apparels. Our team will discuss your
          requirement and guide you through the next steps.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/#contact"
            className="rounded-lg bg-[#C49A00] px-8 py-4 font-bold text-white transition hover:bg-[#A98200]"
          >
            Request an Industrial Uniform Quote
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
