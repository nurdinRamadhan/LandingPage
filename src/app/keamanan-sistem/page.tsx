import type { Metadata } from "next";

import { DetailPage, type DetailPageData, whatsappDemoFullUrl, whatsappConversationUrl } from "@/components/detail-page";

export const metadata: Metadata = {
  title: "Keamanan Sistem | pesantrenPro",
  description:
    "Protokol keamanan tingkat tinggi pesantrenPro: Klasifikasi data merah/kuning, enkripsi field-level pgcrypto, Android Keystore hardware-backed, and E2EE Chat alumni.",
};

const data: DetailPageData = {
  eyebrow: "SECURITY PROTOCOL V1.0",
  title: "Integritas Data adalah Amanah Terbesar Kami.",
  description:
    "Keamanan di pesantrenPro bukan sekadar fitur tambahan, melainkan arsitektur dasar yang melindungi privasi santri, transparansi keuangan, and kerahasiaan komunikasi melalui enkripsi tingkat perbankan and kendali akses berlapis.",
  primaryCta: "Minta Demo Full Sistem",
  primaryCtaUrl: whatsappDemoFullUrl,
  secondaryCta: "Konsultasi Keamanan",
  secondaryCtaUrl: whatsappConversationUrl,
  stats: ["Zero Plaintext Policy", "Hardware-Backed Security", "Audit Locked Ledger", "E2EE Chat Verified"],
  heroCards: [
    {
      title: "Klasifikasi Data Berlapis",
      icon: "layers",
      text: "Seluruh informasi diklasifikasikan menjadi level Merah (Sangat Sensitif), Kuning (Pribadi), and Hijau (Operasional) dengan perlakuan enkripsi yang berbeda.",
    },
    {
      title: "Enkripsi Field-Level",
      icon: "lock",
      text: "Data Merah (seperti NIK and Rekening) wajib melalui proses pgp_sym_encrypt di level database pgcrypto, memastikan data tidak terbaca meski akses fisik database terekspos.",
    },
    {
      title: "Android Keystore Trust",
      icon: "smartphone",
      text: "Kunci privat kriptografi disimpan dalam hardware-backed keystore perangkat Android, mustahil diekspor or dipindahkan ke perangkat lain.",
    },
    {
      title: "End-to-End Encryption",
      icon: "send",
      text: "Chat alumni menggunakan protokol ECDH (Elliptic Curve Diffie-Hellman) untuk pertukaran kunci and AES-256-GCM untuk enkripsi pesan di sisi perangkat.",
    },
  ],
  bands: [
    {
      eyebrow: "DATA CLASSIFICATION & PROTECTION",
      title: "Standar Perlindungan Data Santri & Pengurus.",
      text: "Kami menerapkan kebijakan 'Zero Plaintext' untuk seluruh informasi sensitif. Data tidak hanya disimpan, tetapi diproteksi sesuai dengan tingkat risikonya.",
      cards: [
        {
          title: "Level Merah (Kritis)",
          icon: "shield",
          text: "NIK, No. KK, No. Rekening, and Token Akses. Wajib enkripsi pgcrypto field-level and RLS ketat.",
        },
        {
          title: "Level Kuning (Pribadi)",
          icon: "users",
          text: "Nama Lengkap, Alamat, No. HP, and Riwayat Kesehatan. Dienkripsi and hanya dapat diakses melalui otorisasi role resmi.",
        },
        {
          title: "One-Way Hashing",
          icon: "fingerprint",
          text: "Identifier seperti NIS (Nomor Induk Santri) dikelola menggunakan SHA-256 hash untuk lookup cepat tanpa membuka identitas asli.",
        },
        {
          title: "Audit Log Permanen",
          icon: "monitor",
          text: "Setiap akses ke data Level Merah terekam dalam audit log immutable yang mencatat aktor, waktu, IP address, and alasan akses.",
        },
      ],
    },
    {
      eyebrow: "CRYPTOGRAPHIC WORKFLOW (E2EE)",
      title: "Komunikasi Privat Tanpa Celah Server.",
      text: "Protokol chat alumni kami memastikan bahwa bahkan administrator sistem or penyedia database tidak dapat membaca isi pesan Anda.",
      cards: [
        {
          title: "Key Pair Generation",
          icon: "key",
          text: "Perangkat membuat pasangan kunci publik/privat secara lokal saat login pertama. Kunci privat tidak pernah meninggalkan perangkat.",
        },
        {
          title: "ECDH Shared Secret",
          icon: "code",
          text: "Pertukaran kunci aman menggunakan kurva eliptik (secp256r1) untuk menghasilkan rahasia bersama (shared secret) tanpa mengirimkan kunci asli.",
        },
        {
          title: "AES-256-GCM Payload",
          icon: "lock",
          text: "Isi pesan dienkripsi dengan AES-256 dalam mode GCM (Galois/Counter Mode) untuk menjamin kerahasiaan and integritas pesan.",
        },
        {
          title: "Ciphertext-Only Storage",
          icon: "database",
          text: "Server Supabase hanya menyimpan metadata and ciphertext. Tidak ada variabel 'content' plaintext di seluruh tabel chat.",
        },
      ],
    },
    {
      eyebrow: "FINANCIAL INTEGRITY & AUTHORITY",
      title: "Transparansi Keuangan yang Tervalidasi.",
      text: "Setiap transaksi Dompet Santri and SPP diperlakukan sebagai entitas perbankan dengan validasi ganda di sisi backend and perangkat.",
      cards: [
        {
          title: "Ledger Append-Only",
          icon: "excel",
          text: "Saldo tidak diubah melalui 'edit angka', melainkan melalui entri jurnal ledger yang saling mengunci. Mutasi dana tidak dapat dihapus.",
        },
        {
          title: "Idempotency Control",
          icon: "qr",
          text: "Request transaksi menggunakan Nonce and Idempotency Key untuk mencegah transaksi ganda akibat gangguan sinyal or double-tap.",
        },
        {
          title: "Argon2id PIN Security",
          icon: "key",
          text: "PIN Dompet Santri diproses dengan Argon2id (Winner of Password Hashing Competition) dengan parameter KDF yang tinggi.",
        },
        {
          title: "Online Authority Check",
          icon: "server",
          text: "Seluruh keputusan finansial divalidasi di backend service-role yang terisolasi, bukan bergantung pada logika di sisi aplikasi Android.",
        },
      ],
    },
    {
      eyebrow: "OPERATIONAL HARDENING",
      title: "Monitoring & Pertahanan Real-time.",
      text: "Kami menjaga ekosistem tetap sehat melalui pengawasan otomatis terhadap anomali data and kesehatan infrastruktur.",
      cards: [
        {
          title: "Rate Limiting",
          icon: "layers",
          text: "Proteksi terhadap serangan Brute Force and DDoS melalui pembatasan request per menit berdasarkan identitas user and IP.",
        },
        {
          title: "AI Sanitization",
          icon: "sparkles",
          text: "Data sensitif wajib disanitasi sebelum dikirim ke AI API. Variabel NIK and Keuangan secara otomatis dihapus dari payload analisis.",
        },
        {
          title: "FCM Token Binding",
          icon: "network",
          text: "Token notifikasi diikat ke sesi login aktif. Notifikasi akan otomatis dicabut (revoked) saat user melakukan logout permanen.",
        },
        {
          title: "Secure Edge Functions",
          icon: "server",
          text: "Logika bisnis krusial dijalankan di lingkungan Deno yang terisolasi dengan akses terbatas ke variabel lingkungan rahasia.",
        },
      ],
    },
  ],
  closing: {
    title: "Percayakan Marwah Lembaga Anda pada Sistem yang Amanah.",
    text: "Kami mengundang administrator and dewan pengawas pesantren untuk mendiskusikan implementasi protokol keamanan ini secara lebih mendalam demi ketenangan seluruh wali santri.",
    cta: "Minta Demo Full Sistem",
    ctaUrl: whatsappDemoFullUrl,
  },
};

export default function SecurityPage() {
  return <DetailPage data={data} />;
}
