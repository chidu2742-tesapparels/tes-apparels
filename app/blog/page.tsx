import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "T-Shirt Manufacturing Blog | TES Apparels",
  description:
    "Explore expert guides on T-shirt manufacturing, corporate apparel, fabrics, printing, embroidery, bulk production and customized T-shirts from TES Apparels.",
  keywords: [
    "T-shirt manufacturing",
    "T-shirt manufacturer",
    "T-shirt manufacturers in Bangalore",
    "T-shirt manufacturer in Bangalore",
    "corporate T-shirt manufacturer",
    "custom T-shirt manufacturer",
    "T-shirt printing",
    "T-shirt embroidery",
    "bulk T-shirt manufacturing",
    "apparel manufacturing",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "T-Shirt Manufacturing Blog | TES Apparels",
    description:
      "Practical guides about T-shirt manufacturing, corporate apparel, sportswear, fabrics, printing, embroidery and bulk apparel production.",
    url: "https://tesapparels.com/blog",
    siteName: "TES Apparels",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "T-Shirt Manufacturing Blog | TES Apparels",
    description:
      "Guides and insights about T-shirt manufacturing, corporate apparel, customization, printing, embroidery and bulk production.",
  },
};

const articles = [
  {
    slug: "t-shirt-manufacturing-guide",
    title: "Complete Guide to T-Shirt Manufacturing",
    description:
      "Learn how T-shirts are manufactured, including fabric selection, GSM, cutting, stitching, printing, embroidery, quality control, MOQ, pricing and bulk production.",
    category: "T-Shirt Manufacturing",
    date: "August 17, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "corporate-t-shirt-manufacturer-bangalore",
    title: "Corporate T-Shirt Manufacturing",
    description:
      "Learn how to choose corporate T-shirts for businesses, including fabric selection, GSM, sizing, branding, printing, embroidery, quality control and bulk production.",
    category: "Corporate Apparel",
    date: "August 16, 2026",
    readingTime: "10 min read",
  },
  {
    slug: "how-to-choose-t-shirt-manufacturer-bangalore",
    title: "How to Choose the Right T-Shirt Manufacturer in Bangalore",
    description:
      "A practical guide to comparing T-shirt manufacturers in Bangalore based on fabric quality, customization, MOQ, pricing, production capacity, quality control and delivery.",
    category: "T-Shirt Manufacturing",
    date: "August 16, 2026",
    readingTime: "9 min read",
  },
  {
    slug: "customized-t-shirt-printing-methods",
    title: "Customized T-Shirt Printing Methods",
    description:
      "Learn about screen printing, DTF printing, heat transfer, sublimation and embroidery, and how to choose the right method for corporate, promotional, sports and bulk T-shirts.",
    category: "T-Shirt Printing",
  },
  {
  slug: "best-t-shirt-fabric-for-bulk-orders",
  title: "Best T-Shirt Fabric for Bulk Orders",
  description:
    "Learn which T-shirt fabrics are best for bulk orders, including cotton, polyester, blends, GSM, durability, comfort, printing suitability, pricing and large-scale production.",
  category: "T-Shirt Manufacturing",
},];
  

const topics = [
  {
    title: "T-Shirt Manufacturing",
    description:
      "Manufacturing processes, fabrics, GSM, stitching, finishing and quality control.",
    href: "/t-shirt-manufacturer",
  },
  {
    title: "Corporate Apparel",
    description:
      "Corporate T-shirts, polo shirts, uniforms and employee apparel solutions.",
    href: "/corporate-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Printing & Embroidery",
    description:
      "Screen printing, DTF, heat transfer, sublimation and embroidery methods.",
    href: "/t-shirt-printing",
  },
  {
    title: "Bulk T-Shirt Orders",
    description:
      "MOQ, pricing, production capacity, packaging and delivery considerations.",
    href: "/t-shirt-manufacturer-bangalore",
  },
  {
    title: "Customized Apparel",
    description:
      "Branding, logos, artwork, colours, sizing and customized garment production.",
    href: "/custom-t-shirt-manufacturer-bangalore",
  },
  {
    title: "Sportswear",
    description:
      "Sports T-shirts, Dri-Fit apparel, jerseys and performance-oriented clothing.",
    href: "/sports-t-shirts",
  },
];

export default function BlogPage() {
  const latestArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0B2341] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#C49A00]">
            TES Apparels Blog
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            T-Shirt Manufacturing & Apparel Industry Insights
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Practical guides and insights about T-shirt manufacturing,
            corporate apparel, sportswear, fabrics, printing, embroidery,
            customization, bulk production and garment manufacturing.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-4xl px-6 pt-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#C49A00]">
          Apparel Manufacturing Guides
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#0B2341] md:text-4xl">
          Practical Guides for Buying and Manufacturing Apparel
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Choosing the right apparel manufacturer requires more than comparing
          prices. Fabric quality, garment construction, customization,
          production capacity, quality control, sizing and delivery can all
          affect the final result.
        </p>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Our guides are designed to help businesses, organizations, schools,
          sports teams, event companies and procurement teams make better
          decisions when sourcing customized apparel and bulk T-shirts.
        </p>
      </section>

      {/* Featured Article */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
          <div className="grid lg:grid-cols-2">
            <div className="flex min-h-[360px] items-center bg-[#0B2341] p-8 text-white md:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C49A00]">
                  Featured Guide
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                  {latestArticle.title}
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200">
                  {latestArticle.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
                  <span>{latestArticle.date}</span>
                  <span aria-hidden="true">•</span>
                  <span>{latestArticle.readingTime}</span>
                </div>

                <Link
                  href={`/blog/${latestArticle.slug}`}
                  className="mt-8 inline-flex items-center rounded-lg bg-[#C49A00] px-6 py-3 font-semibold text-white transition hover:bg-[#a98200]"
                >
                  Read the Complete Guide
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex min-h-[360px] items-center justify-center bg-slate-100 p-8">
              <div className="text-center">
                <p className="text-7xl font-bold text-[#0B2341]">TES</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#C49A00]">
                  Apparel Manufacturing
                </p>
                <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                  Manufacturing insights for businesses sourcing T-shirts,
                  uniforms, sportswear and customized apparel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#C49A00]">
            Latest Articles
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#0B2341] md:text-4xl">
            T-Shirt Manufacturing & Corporate Apparel Guides
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {remainingArticles.map((article) => (
            <article
              key={article.slug}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#C49A00]">
                  {article.category}
                </p>

                <h3 className="mt-4 text-2xl font-bold leading-tight text-[#0B2341]">
                  {article.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {article.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
                  <span>{article.date}</span>
                  <span aria-hidden="true">•</span>
                  <span>{article.readingTime}</span>
                </div>
              </div>

              <div className="mt-auto pt-7">
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center font-semibold text-[#0B2341] transition hover:text-[#C49A00]"
                  aria-label={`Read ${article.title}`}
                >
                  Read Article
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#C49A00]">
              Explore Topics
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#0B2341] md:text-4xl">
              Apparel Manufacturing Topics
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore our manufacturing and sourcing topics to learn more
              about T-shirts, corporate apparel, sportswear, customization,
              printing and bulk garment production.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-[#0B2341] transition group-hover:text-[#C49A00]">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {topic.description}
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold text-[#0B2341] group-hover:text-[#C49A00]">
                  Explore Topic →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Read */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#C49A00]">
              Why These Guides Matter
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#0B2341] md:text-4xl">
              Make Better Apparel Sourcing Decisions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Bulk apparel purchasing involves many decisions, from selecting
              the right fabric and GSM to confirming sizes, branding,
              production timelines and quality requirements.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our articles explain these considerations in practical terms so
              procurement teams and businesses can evaluate apparel
              manufacturing options with greater confidence.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Fabric & GSM",
              "Printing & Embroidery",
              "Sizing & Fit",
              "MOQ & Pricing",
              "Quality Control",
              "Production & Delivery",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="font-semibold text-[#0B2341]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B2341] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C49A00]">
            Need Bulk Apparel?
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Looking for a T-Shirt Manufacturer in Bangalore?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            TES Apparels provides customized T-shirts, corporate apparel,
            sportswear, uniforms and bulk apparel solutions for businesses and
            organizations.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/t-shirt-manufacturer-bangalore"
              className="inline-flex rounded-lg bg-[#C49A00] px-7 py-3 font-semibold text-white transition hover:bg-[#a98200]"
            >
              T-Shirt Manufacturing in Bangalore
            </Link>

            <Link
              href="/contact"
              className="inline-flex rounded-lg border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact TES Apparels
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}