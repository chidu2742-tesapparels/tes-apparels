import LandingHero from "./LandingHero";
import WhyChooseUs from "./WhyChooseUs";
import TShirtTypes from "./TShirtTypes";
import ManufacturingProcess from "./ManufacturingProcess";
import FabricGuide from "./FabricGuide";
import ManufacturingCapabilities from "./ManufacturingCapabilities";
import Industries from "./Industries";
import ProductionCapacity from "./ProductionCapacity";
import BusinessAdvantages from "./BusinessAdvantages";
import FAQ from "./FAQ";
import CTA from "./CTA";
import RelatedSolutions from "./RelatedSolutions";
import StructuredData from "./StructuredData";

export interface LandingPageProps {
  title: string;
  description: string;
  primaryKeyword: string;
  heroImage?: string;
  highlights?: string[];
}

export default function LandingPage({
  title,
  description,
  primaryKeyword,
  heroImage,
  highlights,
}: LandingPageProps) {
  return (
    <main className="bg-white">
      {/* 1. Premium Hero */}
      <LandingHero
        title={title}
        description={description}
        primaryKeyword={primaryKeyword}
        heroImage={heroImage}
        highlights={highlights}
      />

      {/* 2. Why Choose TES Apparels */}
      <WhyChooseUs />

      {/* Bangalore Internal Link */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2341]">
              Looking for a T-Shirt Manufacturer in Bangalore?
            </h2>

            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              TES Apparels serves businesses and organizations looking for
              corporate, polo, sports and customized apparel manufacturing in
              Bengaluru. Explore our dedicated{" "}
              <a
                href="/t-shirt-manufacturer-bangalore"
                className="font-semibold text-[#0B2341] underline decoration-[#C49A00] decoration-2 underline-offset-4 hover:text-[#C49A00]"
              >
                T-Shirt Manufacturer in Bangalore
              </a>{" "}
              page for more information about our Bangalore-based manufacturing
              services and PAN India delivery.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Types of T-Shirts We Manufacture */}
      <TShirtTypes />

      {/* 4. Manufacturing Process */}
      <ManufacturingProcess />

      {/* 5. Fabric Guide */}
      <FabricGuide />

      {/* 6. Manufacturing Capabilities */}
      <ManufacturingCapabilities />

      {/* 7. Industries We Serve */}
      <Industries />

      {/* 8. Production Capacity */}
      <ProductionCapacity />

      {/* 9. Business Advantages */}
      <BusinessAdvantages />

      {/* Related Solutions */}
      <RelatedSolutions />

      {/* 10. Frequently Asked Questions */}
      <FAQ />

      {/* 11. Call to Action */}
      <CTA />

      {/* Structured Data */}
      <StructuredData />
    </main>
  );
}