import { getSiteUrl, siteConfig } from "@/lib/site";

type SeoJsonLdProps = {
  title: string;
  description: string;
  slug: string;
  serviceType: string;
};

export function SeoJsonLd({ title, description, slug, serviceType }: SeoJsonLdProps) {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    serviceType,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    url: pageUrl,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan sistem digital pesantren sanadQu",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Admin panel pesantren",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Aplikasi Android wali santri",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dompet Santri dan pembayaran pesantren",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
