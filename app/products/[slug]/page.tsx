import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "../productsData";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const siteUrl = "https://tesapparels.com";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = products[slug as keyof typeof products];

  if (!product) {
    return {
      title: "Product Not Found | TES Apparels",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.title} Manufacturer | TES Apparels`,
    description: `${product.description} TES Apparels offers bulk manufacturing, custom branding, printing and embroidery for businesses across India.`,
    keywords: [
      product.title,
      `${product.title} manufacturer`,
      `${product.title} manufacturer in Bangalore`,
      `${product.title} supplier in India`,
      "bulk apparel manufacturer",
      "custom apparel manufacturer",
      "TES Apparels",
    ],
    alternates: {
      canonical: `${siteUrl}/products/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${product.title} Manufacturer | TES Apparels`,
      description: `${product.description} Customized and bulk apparel manufacturing across India.`,
      url: `${siteUrl}/products/${slug}`,
      siteName: "TES Apparels",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: `${siteUrl}${product.image}`,
          width: 800,
          height: 800,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products[slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  const relatedProducts = Object.entries(products)
    .filter(([productSlug]) => productSlug !== slug)
    .slice(0, 4);

  return (
    <main className="bg-white">
      {/* BREADCRUMB */}

      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-gray-500"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#C49A00] transition"
                >
                  Home
                </Link>
              </li>

              <li>/</li>

              <li>
                <Link
                  href="/#products"
                  className="hover:text-[#C49A00] transition"
                >
                  Products
                </Link>
              </li>

              <li>/</li>

              <li className="font-medium text-[#0B2341]">
                {product.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* HERO */}

      <section className="bg-[#0B2341] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* LEFT */}

            <div className="lg:col-span-3">
              <p className="uppercase tracking-[3px] text-[#C49A00] font-semibold text-xs mb-4">
                TES APPARELS
              </p>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                {product.title}
              </h1>

              <p className="text-base md:text-lg text-gray-300 leading-8 mb-7 max-w-3xl">
                {product.description}
              </p>

              <p className="text-sm text-gray-300 leading-6 mb-8 max-w-3xl">
                Premium quality manufacturing with customized branding,
                embroidery, printing and bulk production options for
                businesses, institutions, events and organizations across
                India.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="inline-block bg-[#C49A00] hover:bg-[#a88400] transition px-7 py-3 rounded-lg font-semibold"
                >
                  Request Quote →
                </a>

                <a
                  href="tel:+919972548910"
                  className="inline-block border border-white/30 hover:bg-white hover:text-[#0B2341] transition px-7 py-3 rounded-lg font-semibold"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* RIGHT */}

            <div className="lg:col-span-2 flex justify-center">
              <div className="bg-white rounded-2xl shadow-2xl p-5 w-full max-w-md">
                <Image
                  src={product.image}
                  alt={`${product.title} manufactured by TES Apparels`}
                  width={600}
                  height={600}
                  priority
                  className="object-contain w-full h-auto max-h-[360px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="py-12 md:py-16 bg-[#F8F9FB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[2px] text-[#C49A00] font-semibold text-xs mb-2">
              PRODUCT SPECIFICATIONS
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B2341]">
              Product Features
            </h2>

            <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto leading-6">
              Choose from quality fabrics, customization options and
              manufacturing solutions based on your business requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 text-sm font-medium text-gray-700 hover:shadow-md hover:-translate-y-1 transition"
              >
                <span className="text-[#C49A00] font-bold mr-2">
                  ✓
                </span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING INFORMATION */}

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center">
            <p className="uppercase tracking-[2px] text-[#C49A00] font-semibold text-xs mb-2">
              CUSTOM MANUFACTURING
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B2341] mb-5">
              Customized {product.title} for Your Business
            </h2>

            <p className="text-gray-600 leading-7 max-w-4xl mx-auto">
              TES Apparels manufactures customized apparel for corporate
              organizations, educational institutions, industrial
              businesses, hospitality companies, sports teams, events and
              promotional campaigns. Products can be customized with
              company logos, employee branding, embroidery, printing,
              colours, fabrics and quantities according to your
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-10">
            <div className="rounded-xl bg-slate-50 p-6 text-center">
              <h3 className="font-bold text-[#0B2341] mb-2">
                Custom Branding
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                Professional logo printing and embroidery for your brand.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6 text-center">
              <h3 className="font-bold text-[#0B2341] mb-2">
                Bulk Manufacturing
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                Manufacturing solutions for corporate and institutional
                bulk requirements.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6 text-center">
              <h3 className="font-bold text-[#0B2341] mb-2">
                PAN India Delivery
              </h3>

              <p className="text-sm text-gray-600 leading-6">
                Apparel manufacturing and delivery support across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL SEO LINKS */}

      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0B2341] mb-4">
              Looking for Apparel Manufacturing Services?
            </h2>

            <p className="text-gray-600 leading-7 mb-6 max-w-4xl">
              Explore TES Apparels manufacturing services for corporate
              uniforms, T-shirts, sportswear and customized apparel.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/t-shirt-manufacturer"
                className="rounded-lg bg-[#0B2341] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16365f] transition"
              >
                T-Shirt Manufacturer
              </Link>

              <Link
                href="/t-shirt-manufacturer-bangalore"
                className="rounded-lg bg-[#0B2341] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16365f] transition"
              >
                T-Shirt Manufacturer in Bangalore
              </Link>

              <Link
                href="/corporate-uniform-manufacturer"
                className="rounded-lg bg-[#0B2341] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16365f] transition"
              >
                Corporate Uniform Manufacturer
              </Link>

              <Link
                href="/school-uniform-manufacturer"
                className="rounded-lg bg-[#0B2341] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16365f] transition"
              >
                School Uniform Manufacturer
              </Link>

              <Link
                href="/sports-t-shirts"
                className="rounded-lg bg-[#0B2341] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16365f] transition"
              >
                Sports T-Shirts
              </Link>

              <Link
                href="/dri-fit-t-shirts"
                className="rounded-lg bg-[#0B2341] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16365f] transition"
              >
                Dri-Fit T-Shirts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="uppercase tracking-[2px] text-[#C49A00] font-semibold text-xs mb-2">
              EXPLORE MORE
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B2341]">
              Related Products
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {relatedProducts.map(([productSlug, relatedProduct]) => (
              <Link
                key={productSlug}
                href={`/products/${productSlug}`}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="bg-gray-50 p-4">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    width={400}
                    height={400}
                    className="w-full h-40 object-contain"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-sm font-semibold text-[#0B2341] group-hover:text-[#C49A00] transition">
                    {relatedProduct.title}
                  </h3>

                  <span className="inline-block mt-2 text-xs font-semibold text-[#C49A00]">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-[#0B2341] py-12 md:py-16 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-[2px] text-[#C49A00] font-semibold text-xs mb-3">
            GET IN TOUCH
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need {product.title}?
          </h2>

          <p className="text-sm md:text-base text-gray-300 leading-7 mb-7 max-w-3xl mx-auto">
            Contact TES Apparels for premium quality customized apparel
            manufactured according to your branding, fabric, quantity and
            delivery requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#contact"
              className="inline-block bg-[#C49A00] hover:bg-[#a88400] transition px-8 py-3 rounded-lg font-semibold"
            >
              Request Quote →
            </a>

            <a
              href="tel:+919972548910"
              className="inline-block border border-white/30 hover:bg-white hover:text-[#0B2341] transition px-8 py-3 rounded-lg font-semibold"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}