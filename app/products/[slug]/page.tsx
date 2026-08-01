import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../productsData";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products[slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white">

      {/* HERO */}

      <section className="bg-[#0B2341] text-white py-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-5 gap-10 items-center">

            {/* LEFT */}

            <div className="lg:col-span-3">

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {product.title}
              </h1>

              <p className="text-base text-gray-300 leading-7 mb-6">
                {product.description}
              </p>

              <a
                href="/#contact"
                className="inline-block bg-[#C49A00] hover:bg-[#a88400] transition px-6 py-3 rounded-lg font-semibold"
              >
                Request Quote
              </a>

            </div>

            {/* RIGHT */}

            <div className="lg:col-span-2 flex justify-center">

              <div className="bg-white rounded-2xl shadow-xl p-5">

                <Image
                  src={product.image}
                  alt={product.title}
                  width={420}
                  height={420}
                  className="object-contain w-auto max-h-[320px]"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="py-10 bg-[#F8F9FB]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-center text-[#0B2341] mb-8">
            Product Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {product.features.map((feature) => (

              <div
                key={feature}
                className="bg-white rounded-lg border shadow-sm px-4 py-3 text-sm font-medium text-gray-700 hover:shadow-md transition"
              >
                ✓ {feature}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#0B2341] py-10 text-center text-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-3">
            Need {product.title}?
          </h2>

          <p className="text-sm text-gray-300 mb-6">
            Contact TES Apparels for premium quality customized uniforms
            manufactured as per your branding requirements.
          </p>

          <a
            href="/#contact"
            className="inline-block bg-[#C49A00] hover:bg-[#a88400] transition px-8 py-3 rounded-lg font-semibold"
          >
            Request Quote
          </a>

        </div>

      </section>

    </main>
  );
}