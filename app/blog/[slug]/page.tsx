import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const metadata: Metadata = {
  title: "TES Apparels Blog",
  description:
    "Insights, guides and information about T-shirt manufacturing, corporate apparel, sportswear and customized apparel from TES Apparels.",
};

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#0B2341] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#C49A00]">
            TES Apparels Blog
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            {slug.replace(/-/g, " ")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-200">
            Explore insights and information about T-shirt manufacturing,
            corporate apparel, sportswear and customized clothing from TES
            Apparels.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-lg leading-8 text-slate-600">
          This article is being prepared. Please check back soon for the
          complete TES Apparels guide.
        </p>
      </section>
    </main>
  );
}