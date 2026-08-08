import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apparel Manufacturing Blog | TES Apparels",
  description:
    "Read TES Apparels insights, guides and articles about T-shirt manufacturing, corporate uniforms, sportswear, customized apparel, fabrics, printing and embroidery.",
};

const articles = [
  {
    slug: "t-shirt-manufacturing-guide",
    title: "Complete Guide to T-Shirt Manufacturing",
    description:
      "Learn about fabrics, garment construction, customization, quality control and bulk T-shirt manufacturing.",
  },
  {
    slug: "corporate-t-shirt-manufacturing",
    title: "Corporate T-Shirt Manufacturing",
    description:
      "A practical guide to choosing corporate T-shirts, fabrics, branding methods, sizing and bulk production.",
  },
  {
    slug: "customized-t-shirt-printing",
    title: "Customized T-Shirt Printing Methods",
    description:
      "Understand screen printing, DTF, heat transfer, sublimation and embroidery for customized apparel.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0B2341] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#C49A00]">
            TES Apparels Blog
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Apparel Manufacturing Insights
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Explore practical guides and insights about T-shirt
            manufacturing, corporate apparel, sportswear, fabrics,
            customization and garment production.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-[#C49A00]">
                TES Apparels
              </p>

              <h2 className="mt-4 text-2xl font-bold text-[#0B2341]">
                {article.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {article.description}
              </p>

              <Link
                href={`/blog/${article.slug}`}
                className="mt-6 inline-flex font-semibold text-[#0B2341] hover:text-[#C49A00]"
              >
                Read Article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}