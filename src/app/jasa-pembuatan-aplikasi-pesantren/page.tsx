import { DetailPage } from "@/components/detail-page";
import { SeoJsonLd } from "@/components/seo-json-ld";
import { getSeoMetadata, seoPages } from "@/lib/seo-pages";

const page = seoPages["jasa-pembuatan-aplikasi-pesantren"];

export const metadata = getSeoMetadata("jasa-pembuatan-aplikasi-pesantren");

export default function JasaPembuatanAplikasiPesantrenPage() {
  return (
    <>
      <SeoJsonLd title={page.title} description={page.description} slug={page.slug} serviceType={page.serviceType} />
      <DetailPage data={page.data} />
    </>
  );
}
