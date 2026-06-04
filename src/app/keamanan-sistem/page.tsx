import type { Metadata } from "next";

import { DetailPage, type DetailPageData, whatsappDemoFullUrl, whatsappConversationUrl } from "@/components/detail-page";

export const metadata: Metadata = {
  title: "Keamanan Sistem | sanadQu",
  description:
    "Protokol keamanan tingkat tinggi sanadQu: Klasifikasi data merah/kuning, enkripsi field-level pgcrypto, Android Keystore hardware-backed, and obrolan E2EE Chat alumni.",
};

const data: DetailPageData = {
  eyebrow: "SECURITY PROTOCOL V1.0",
  title: "Integritas Data adalah Amanah Terbesar Kami.",
  description:
    "Keamanan di sanadQu bukan sekadar fitur tambahan, melainkan arsitektur dasar yang melindungi privasi santri, transparansi keuangan, dan kerahasiaan komunikasi melalui enkripsi tingkat perbankan dan kendali akses berlapis.",
  primaryCta: "Minta Demo Full Sistem",
  primaryCtaUrl: whatsappDemoFullUrl,
  secondaryCta: "Konsultasi Keamanan",
  secondaryCtaUrl: whatsappConversationUrl,
  stats: ["Kebijakan Tanpa Teks Biasa", "Keamanan Berbasis Perangkat Keras", "Buku Besar Audit Terkunci", "Obrolan E2EE Terverifikasi"],
  heroCards: [
    {
      title: "Klasifikasi Data Berlapis",
      icon: "layers",
      text: "Seluruh informasi diklasifikasikan menjadi level Merah (Sangat Sensitif), Kuning (Pribadi), dan Hijau (Operasional) dengan perlakuan enkripsi yang berbeda.",
    },
    {
      title: "Enkripsi Level Kolom",
      icon: "lock",
      text: "Data Merah (seperti NIK dan Rekening) wajib melalui proses pgp_sym_encrypt di level basis data pgcrypto, memastikan data tidak terbaca meski akses fisik basis data terekspos.",
    },
    {
      title: "Kepercayaan Keystore Android",
      icon: "smartphone",
      text: "Kunci privat kriptografi disimpan dalam hardware-backed keystore perangkat Android, sehingga mustahil diekspor atau dipindahkan ke perangkat lain.",
    },
    {
      title: "Enkripsi Ujung-ke-Ujung",
      icon: "send",
      text: "Obrolan alumni menggunakan protokol ECDH (Elliptic Curve Diffie-Hellman) untuk pertukaran kunci dan AES-256-GCM untuk enkripsi pesan di sisi perangkat.",
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
          text: "NIK, No. KK, No. Rekening, dan Token Akses. Wajib menggunakan enkripsi pgcrypto level kolom dan kebijakan RLS yang ketat.",
        },
        {
          title: "Level Kuning (Pribadi)",
          icon: "users",
          text: "Nama Lengkap, Alamat, No. HP, dan Riwayat Kesehatan. Dienkripsi dan hanya dapat diakses melalui otorisasi peran resmi.",
        },
        {
          title: "Hashing Satu Arah",
          icon: "fingerprint",
          text: "Identifier seperti NIS (Nomor Induk Santri) dikelola menggunakan SHA-256 hash untuk pencarian cepat tanpa membuka identitas asli.",
        },
        {
          title: "Log Audit Permanen",
          icon: "monitor",
          text: "Setiap akses ke data Level Merah terekam dalam log audit yang tidak dapat diubah, mencatat aktor, waktu, alamat IP, dan alasan akses.",
        },
      ],
    },
    {
      eyebrow: "CRYPTOGRAPHIC WORKFLOW (E2EE)",
      title: "Komunikasi Privat Tanpa Celah Server.",
      text: "Protokol obrolan alumni kami memastikan bahwa bahkan administrator sistem atau penyedia basis data tidak dapat membaca isi pesan Anda.",
      cards: [
        {
          title: "Pembuatan Pasangan Kunci",
          icon: "key",
          text: "Perangkat membuat pasangan kunci publik/privat secara lokal saat masuk pertama kali. Kunci privat tidak pernah meninggalkan perangkat.",
        },
        {
          title: "Rahasia Bersama ECDH",
          icon: "code",
          text: "Pertukaran kunci aman menggunakan kurva eliptik (secp256r1) untuk menghasilkan rahasia bersama (shared secret) tanpa mengirimkan kunci asli.",
        },
        {
          title: "Payload AES-256-GCM",
          icon: "lock",
          text: "Isi pesan dienkripsi dengan AES-256 dalam mode GCM (Galois/Counter Mode) untuk menjamin kerahasiaan dan integritas pesan.",
        },
        {
          title: "Penyimpanan Teks Terenkripsi",
          icon: "database",
          text: "Server Supabase hanya menyimpan metadata dan ciphertext. Tidak ada variabel isi pesan dalam bentuk teks biasa di seluruh tabel obrolan.",
        },
      ],
    },
    {
      eyebrow: "FINANCIAL INTEGRITY & AUTHORITY",
      title: "Transparansi Keuangan yang Tervalidasi.",
      text: "Setiap transaksi Dompet Santri dan SPP diperlakukan sebagai entitas perbankan dengan validasi ganda di sisi backend dan perangkat.",
      cards: [
        {
          title: "Buku Besar Khusus Tambah",
          icon: "excel",
          text: "Saldo tidak diubah melalui 'edit angka', melainkan melalui entri jurnal buku besar yang saling mengunci. Mutasi dana tidak dapat dihapus.",
        },
        {
          title: "Kendali Idempotensi",
          icon: "qr",
          text: "Permintaan transaksi menggunakan Nonce dan Idempotency Key untuk mencegah transaksi ganda akibat gangguan sinyal atau klik ganda.",
        },
        {
          title: "Keamanan PIN Argon2id",
          icon: "key",
          text: "PIN Dompet Santri diproses dengan Argon2id (Pemenang Password Hashing Competition) dengan parameter KDF yang tinggi.",
        },
        {
          title: "Pengecekan Otoritas Daring",
          icon: "server",
          text: "Seluruh keputusan finansial divalidasi di backend service-role yang terisolasi, bukan bergantung pada logika di sisi aplikasi Android.",
        },
      ],
    },
    {
      eyebrow: "OPERATIONAL HARDENING",
      title: "Pemantauan & Pertahanan Real-time.",
      text: "Kami menjaga ekosistem tetap sehat melalui pengawasan otomatis terhadap anomali data dan kesehatan infrastruktur.",
      cards: [
        {
          title: "Pembatasan Laju (Rate Limiting)",
          icon: "layers",
          text: "Proteksi terhadap serangan Brute Force dan DDoS melalui pembatasan permintaan per menit berdasarkan identitas pengguna dan IP.",
        },
        {
          title: "Sanitasi Kecerdasan AI",
          icon: "sparkles",
          text: "Data sensitif wajib disanitasi sebelum dikirim ke AI API. Variabel NIK dan Keuangan secara otomatis dihapus dari payload analisis.",
        },
        {
          title: "Pengikatan Token FCM",
          icon: "network",
          text: "Token notifikasi diikat ke sesi masuk aktif. Notifikasi akan otomatis dicabut (revoked) saat pengguna melakukan keluar (logout) permanen.",
        },
        {
          title: "Edge Functions yang Aman",
          icon: "server",
          text: "Logika bisnis krusial dijalankan di lingkungan Deno yang terisolasi dengan akses terbatas ke variabel lingkungan rahasia.",
        },
      ],
    },
  ],
  closing: {
    title: "Percayakan Marwah Lembaga Anda pada Sistem yang Amanah.",
    text: "Kami mengundang administrator dan dewan pengawas pesantren untuk mendiskusikan implementasi protokol keamanan ini secara lebih mendalam demi ketenangan seluruh wali santri.",
    cta: "Minta Demo Full Sistem",
    ctaUrl: whatsappDemoFullUrl,
  },
};

export default function SecurityPage() {
  return <DetailPage data={data} />;
}
