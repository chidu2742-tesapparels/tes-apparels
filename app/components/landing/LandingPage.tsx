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
    <main>
      {/* 1. Premium Hero */}
       <StructuredData />
      <LandingHero
        title={title}
        description={description}
        primaryKeyword={primaryKeyword}
        heroImage={heroImage}
        highlights={highlights}
      />

      {/* 2. Why Choose TES Apparels */}
      <WhyChooseUs />

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

      <RelatedSolutions />

      {/* 10. Frequently Asked Questions */}
      <FAQ />

      {/* 11. Call to Action */}
      <CTA />
    </main>
  );
}