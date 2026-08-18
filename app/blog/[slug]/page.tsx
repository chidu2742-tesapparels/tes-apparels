import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "../../../lib/blog";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const SITE_URL = "https://tesapparels.com";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

    return {
      title: `${post.title} | TES Apparels`,
      description: post.description,

      keywords: post.tags,

      authors: [
        {
          name: post.author,
        },
      ],

      creator: "TES Apparels",
      publisher: "TES Apparels",

      alternates: {
        canonical: canonicalUrl,
      },

      robots: {
        index: true,
        follow: true,
      },

      openGraph: {
        title: post.title,
        description: post.description,
        url: canonicalUrl,
        siteName: "TES Apparels",
        locale: "en_IN",
        type: "article",

        publishedTime: post.date,

        authors: [post.author],

        images: [
          {
            url: `${SITE_URL}${post.image}`,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [`${SITE_URL}${post.image}`],
      },
    };
  } catch {
    return {
      title: "Blog Article | TES Apparels",
      description:
        "Apparel manufacturing insights, guides and information from TES Apparels.",
    };
  }
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  let post;

  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  /*
   * Article structured data
   */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: post.title,

    description: post.description,

    image: [`${SITE_URL}${post.image}`],

    datePublished: post.date,

    dateModified: post.date,

    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",
      name: "TES Apparels",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },

    articleSection: post.category,

    keywords: post.tags.join(", "),

    url: canonicalUrl,
  };

  /*
   * Breadcrumb structured data
   */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Structured Data - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Article Header */}
      <section className="bg-[#0B2341] py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 text-sm"
          >
            <ol className="flex flex-wrap items-center gap-2 text-slate-300">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link
                  href="/blog"
                  className="transition hover:text-white"
                >
                  Blog
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li className="text-[#C49A00]">
                {post.category}
              </li>
            </ol>
          </nav>

          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#C49A00]">
            {post.category}
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            {post.description}
          </p>

          {/* Article Information */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            <span>
              By{" "}
              <strong className="text-white">
                {post.author}
              </strong>
            </span>

            <span>
              Published{" "}
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>

            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 py-16">
        <div
          className="
            prose
            prose-lg
            max-w-none
            prose-headings:text-[#0B2341]
            prose-headings:font-bold
            prose-h1:text-4xl
            prose-h2:mt-12
            prose-h2:text-3xl
            prose-h3:mt-8
            prose-h3:text-2xl
            prose-p:leading-8
            prose-p:text-slate-700
            prose-li:text-slate-700
            prose-strong:text-[#0B2341]
            prose-a:text-[#0B2341]
            prose-a:font-semibold
            hover:prose-a:text-[#C49A00]
          "
        >
          <MDXRemote source={post.content} />
        </div>
      </article>

      {/* Related Topics */}
      {post.tags.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="border-t border-slate-200 pt-8">
            <h2 className="text-lg font-bold text-[#0B2341]">
              Related Topics
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Blog Links */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-[#0B2341]">
            More TES Apparels Guides
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {getAllPosts()
              .filter((relatedPost) => relatedPost.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#C49A00]">
                    {relatedPost.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[#0B2341]">
                    {relatedPost.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {relatedPost.description}
                  </p>

                  <span className="mt-4 inline-block font-semibold text-[#0B2341]">
                    Read Article →
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* TES Apparels CTA */}
      <section className="bg-[#0B2341] py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#C49A00]">
            TES Apparels
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Looking for a Reliable Apparel Manufacturer?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Talk to TES Apparels about corporate T-shirts,
            polo T-shirts, sportswear, uniforms, promotional
            apparel and customized bulk clothing requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-[#C49A00] px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0B2341]"
            >
              Contact TES Apparels
            </Link>

            <Link
              href="/t-shirt-manufacturer-bangalore"
              className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0B2341]"
            >
              T-Shirt Manufacturer in Bangalore
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}