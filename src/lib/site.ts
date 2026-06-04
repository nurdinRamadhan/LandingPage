export const siteConfig = {
  name: "sanadQu",
  title: "sanadQu | Sistem Digital Pesantren",
  description:
    "Sistem digital pesantren untuk admin panel, aplikasi Android wali santri, Dompet Santri, pembayaran, tahfidz, EMIS, keamanan, dan laporan operasional.",
  keywords: [
    "sanadQu",
    "sistem digital pesantren",
    "aplikasi pesantren",
    "admin panel pesantren",
    "aplikasi wali santri",
    "dompet santri",
    "software pesantren",
    "manajemen pesantren",
  ],
};

export function getSiteUrl() {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "https://sanadqu.vercel.app";

  const withProtocol = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;

  return withProtocol.replace(/\/$/, "");
}
