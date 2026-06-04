import { DetailPage } from "@/components/detail-page";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { getSeoMetadata, seoPages } from "@/lib/seo-pages";

const page = seoPages["sistem-digital-pesantren"];

export const metadata = getSeoMetadata("sistem-digital-pesantren");

export default function SistemDigitalPesantrenPage() {
  return (
    <>
      <SeoJsonLd title={page.title} description={page.description} slug={page.slug} serviceType={page.serviceType} />
      <DetailPage data={page.data} />
    </>
  );
}
