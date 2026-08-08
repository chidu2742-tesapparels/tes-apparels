export default function StructuredData() {
  const siteUrl = "https://tesapparels.com";

  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "TES Apparels",
    url: siteUrl,
    telephone: "+919880038910",
    email: "chidanand@tesapparels.com",
    description:
      "TES Apparels is a T-Shirt and apparel manufacturer specializing in corporate uniforms, polo T-shirts, sportswear, promotional apparel, customized garments, and bulk apparel manufacturing.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No.483, 2nd Floor, 3rd Stage, Basaveshwar Nagar",
      addressLocality: "Bengaluru",
      postalCode: "560079",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  };

  const localBusiness = {
    "@type": "ClothingStore",
    "@id": `${siteUrl}/#localbusiness`,
    name: "TES Apparels",
    url: siteUrl,
    telephone: "+919880038910",
    email: "chidanand@tesapparels.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No.483, 2nd Floor, 3rd Stage, Basaveshwar Nagar",
      addressLocality: "Bengaluru",
      postalCode: "560079",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
    ],
  };

  const service = {
    "@type": "Service",
    "@id": `${siteUrl}/t-shirt-manufacturer#service`,
    name: "T-Shirt Manufacturing",
    serviceType: "T-Shirt Manufacturing",
    url: `${siteUrl}/t-shirt-manufacturer`,
    description:
      "Bulk T-shirt manufacturing services including corporate T-shirts, polo T-shirts, Dri-Fit sportswear, promotional apparel, customized uniforms, printing, embroidery, and branded garments.",
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${siteUrl}/t-shirt-manufacturer#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "T-Shirt Manufacturer",
        item: `${siteUrl}/t-shirt-manufacturer`,
      },
    ],
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${siteUrl}/t-shirt-manufacturer#webpage`,
    url: `${siteUrl}/t-shirt-manufacturer`,
    name:
      "T-Shirt Manufacturer | Corporate, Polo, Dri-Fit & Custom T-Shirts | TES Apparels",
    description:
      "TES Apparels manufactures premium corporate T-shirts, polo T-shirts, Dri-Fit sportswear, promotional apparel, customized uniforms, and bulk garments across India.",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/t-shirt-manufacturer#service`,
    },
    breadcrumb: {
      "@id": `${siteUrl}/t-shirt-manufacturer#breadcrumb`,
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "TES Apparels",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      localBusiness,
      service,
      breadcrumb,
      webpage,
      website,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph),
      }}
    />
  );
}