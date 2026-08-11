import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
title: "Formal Shirt Manufacturer in Bangalore | TES Apparels",
description:
"TES Apparels is a formal shirt manufacturer in Bangalore supplying customized formal shirts, trousers and complete corporate uniforms for IT companies, offices and businesses across India.",
keywords: [
"formal shirt manufacturer in bangalore",
"formal shirt manufacturers in bangalore",
"formal shirt manufacturer Bangalore",
"corporate shirt manufacturer in bangalore",
"corporate formal shirt manufacturer",
"formal shirt manufacturers in Karnataka",
"formal shirt manufacturer in India",
"office uniform manufacturer in bangalore",
"corporate uniform manufacturer in bangalore",
"employee uniform manufacturer in bangalore",
"formal shirts and trousers manufacturer",
"corporate shirts and trousers",
"custom formal shirts Bangalore",
"bulk formal shirt manufacturer",
"IT company uniform manufacturer Bangalore",
],
alternates: {
canonical:
"https://www.tesapparels.com/formal-shirt-manufacturer-bangalore",
},
openGraph: {
title: "Formal Shirt Manufacturer in Bangalore | TES Apparels",
description:
"Customized formal shirts, trousers and complete corporate uniforms for IT companies, offices and businesses in Bangalore and across India.",
url: "https://www.tesapparels.com/formal-shirt-manufacturer-bangalore",
siteName: "TES Apparels",
type: "website",
locale: "en_IN",
},
twitter: {
card: "summary_large_image",
title: "Formal Shirt Manufacturer in Bangalore | TES Apparels",
description:
"Bulk formal shirt, trouser and corporate uniform manufacturing for IT companies and businesses.",
},
};

const faqs = [
{
question: "Is TES Apparels a formal shirt manufacturer in Bangalore?",
answer:
"Yes. TES Apparels provides customized formal shirts and corporate uniform solutions for IT companies, corporate offices, institutions and businesses in Bangalore and across India.",
},
{
question: "Do you manufacture formal shirts and trousers together?",
answer:
"Yes. TES Apparels can provide coordinated formal shirts and trousers as part of a complete corporate employee uniform requirement.",
},
{
question: "Can formal shirts be customized with our company logo?",
answer:
"Yes. Company logos and branding can be incorporated using suitable embroidery or printing methods depending on the garment design and branding requirement.",
},
{
question: "Do you manufacture uniforms for IT companies?",
answer:
"Yes. TES Apparels provides corporate uniform solutions suitable for IT companies, technology businesses, offices, startups and professional organizations.",
},
{
question: "Can we select the fabric and colour?",
answer:
"Yes. Fabric, colour, design, sizing, branding and other garment specifications can be discussed according to the organization's requirements.",
},
{
question: "Do you accept bulk formal shirt orders?",
answer:
"Yes. TES Apparels supports bulk corporate apparel requirements for companies, institutions and organizations.",
},
{
question: "Do you provide complete employee uniforms?",
answer:
"Yes. Depending on the requirement, complete employee uniform programs can include formal shirts, trousers, polo T-shirts, jackets, caps, bags and other customized apparel.",
},
{
question: "Do you deliver outside Bangalore?",
answer:
"Yes. TES Apparels is based in Bangalore and supports customers across Karnataka and other parts of India.",
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
"@id": "https://www.tesapparels.com/#localbusiness",
name: "TES Apparels",
url: "https://www.tesapparels.com/",
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
"https://www.tesapparels.com/formal-shirt-manufacturer-bangalore#service",
name: "Formal Shirt Manufacturing in Bangalore",
serviceType: "Formal Shirt and Corporate Uniform Manufacturing",
provider: {
"@id": "https://www.tesapparels.com/#organization",
},
areaServed: {
"@type": "City",
name: "Bengaluru",
},
description:
"Customized formal shirts, trousers and corporate employee uniforms for IT companies, offices and businesses in Bangalore and across India.",
url: "https://www.tesapparels.com/formal-shirt-manufacturer-bangalore",
},
{
"@type": "BreadcrumbList",
"@id":
"https://www.tesapparels.com/formal-shirt-manufacturer-bangalore#breadcrumb",
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
name: "Formal Shirt Manufacturer in Bangalore",
item:
"https://www.tesapparels.com/formal-shirt-manufacturer-bangalore",
},
],
},
{
"@type": "FAQPage",
"@id":
"https://www.tesapparels.com/formal-shirt-manufacturer-bangalore#faq",
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

export default function FormalShirtManufacturerBangalorePage() {
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
            Formal Shirt Manufacturer in Bangalore
          </span>
        </nav>

        <div className="mb-6 inline-flex rounded-full border border-[#C49A00]/40 bg-[#C49A00]/10 px-4 py-2 text-sm font-semibold text-[#E4C65A]">
          Bangalore Corporate Uniform Manufacturer
        </div>

        <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Formal Shirt Manufacturer in Bangalore for Corporate & IT
          Companies
        </h1>

        <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
          TES Apparels manufactures customized formal shirts, trousers and
          complete employee uniform solutions for IT companies, corporate
          offices, businesses and institutions in Bangalore and across
          India.
        </p>

        <p className="mt-5 max-w-4xl text-base leading-7 text-slate-300">
          From fabric selection and colour matching to sizing, logo
          embroidery and bulk production, we help organizations create
          professional employee uniforms aligned with their brand identity.
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
    </section>

    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
            Corporate Formal Wear
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#0B2341] sm:text-4xl">
            Professional Formal Shirts & Trousers for Employee Uniforms
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            <p>
              Corporate uniforms play an important role in creating a
              consistent and professional appearance. Formal shirts and
              trousers are particularly suitable for organizations that
              want employees to present a polished business image.
            </p>

            <p>
              TES Apparels works with IT companies, corporate offices,
              businesses and institutions requiring customized formal
              uniforms in bulk.
            </p>

            <p>
              Requirements can be developed around fabric, colour, fit,
              sizing, branding, logo placement and quantity so the finished
              uniforms match the organization's specifications.
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
                Corporate & Employee Uniforms
              </dd>
            </div>

            <div>
              <dt className="text-sm font-semibold text-slate-500">
                Main Products
              </dt>

              <dd className="mt-1 font-semibold text-slate-900">
                Formal Shirts & Trousers
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
            Corporate Uniform Solutions
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
            Complete Employee Uniforms for IT & Corporate Offices
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Build a coordinated employee uniform program with formal,
            casual and branded apparel selected according to your
            organization's requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Formal Shirts",
              text: "Professional shirts suitable for office employees, management teams and customer-facing staff.",
            },
            {
              title: "Formal Trousers",
              text: "Coordinated trousers designed to complement corporate formal shirts and office uniforms.",
            },
            {
              title: "Polo T-Shirts",
              text: "Smart corporate polos for casual office days, events, teams and employee programs.",
            },
            {
              title: "Complete Uniforms",
              text: "Customized employee apparel programs combining shirts, trousers, polos and other branded garments.",
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
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
            Customization
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
            Customize Formal Shirts to Match Your Corporate Brand
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Corporate clothing should reflect the organization's identity.
            TES Apparels supports customized requirements across colour,
            fabric, sizing, logo placement, embroidery and finishing.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Organizations can discuss their preferred specifications before
            proceeding with bulk production.
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
            "Custom colours",
            "Corporate sizing",
            "Logo embroidery",
            "Logo placement",
            "Brand specifications",
            "Formal shirts",
            "Formal trousers",
            "Bulk manufacturing",
            "Employee uniforms",
            "IT company uniforms",
            "Corporate branding",
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
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E4C65A]">
            Corporate Apparel
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Beyond Formal Shirts: Complete Corporate Uniform Programs
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Organizations often need more than one garment for their
            employee uniform program. TES Apparels can support coordinated
            apparel requirements across formal, casual and promotional
            clothing.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Jackets",
              text: "Corporate jackets for outdoor teams, events and professional employee apparel.",
            },
            {
              title: "Caps",
              text: "Customized caps for events, outdoor teams and promotional programs.",
            },
            {
              title: "Bags",
              text: "Corporate laptop bags, backpacks and promotional bags with company branding.",
            },
            {
              title: "Polo T-Shirts",
              text: "Customized polo T-shirts for casual corporate uniforms and employee programs.",
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

    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
          Manufacturing Process
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
          From Corporate Requirement to Finished Uniform
        </h2>

        <p className="mt-5 leading-7 text-slate-600">
          A structured process helps ensure that the final uniforms match
          the approved specifications.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {[
          {
            number: "01",
            title: "Requirement",
            text: "Share garment types, quantities, fabric preferences, colours, sizes and branding requirements.",
          },
          {
            number: "02",
            title: "Specification",
            text: "Discuss garment construction, branding and other specifications for the uniform program.",
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
            text: "Finished uniforms are prepared for delivery in Bangalore or other locations across India.",
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

    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
              Who We Serve
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Corporate Uniforms for IT Companies & Businesses
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our formal shirt and corporate uniform solutions are suitable
              for organizations that want a consistent professional
              appearance across their workforce.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "IT companies",
              "Technology companies",
              "Corporate offices",
              "Startups",
              "Business process organizations",
              "Professional services companies",
              "Manufacturing companies",
              "Institutions",
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
            title: "Corporate Uniform Manufacturer",
            href: "/corporate-uniform-manufacturer",
          },
          {
            title: "Corporate Polo T-Shirts",
            href: "/corporate-polo-t-shirts",
          },
          {
            title: "T-Shirt Manufacturer in Bangalore",
            href: "/t-shirt-manufacturer-bangalore",
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

    <section id="faq" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C49A00]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0B2341] sm:text-4xl">
            Formal Shirt Manufacturer in Bangalore – FAQs
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
          Start Your Corporate Uniform Requirement
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Looking for a Formal Shirt Manufacturer in Bangalore?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Share your required formal shirts, trousers, approximate
          quantity, fabric preference, branding requirements and delivery
          location with TES Apparels.
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
