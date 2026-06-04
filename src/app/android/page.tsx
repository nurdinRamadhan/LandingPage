import type { Metadata } from "next";

import { DetailPage, type DetailPageData, whatsappDemoAndroidUrl, whatsappDemoFullUrl } from "@/components/detail-page";

export const metadata: Metadata = {
  title: "Aplikasi Android",
  description:
    "Detail aplikasi Android sanadQu untuk wali santri, alumni, kantin, donatur, dan layanan publik pesantren.",
  alternates: {
    canonical: "/android",
  },
};

const data: DetailPageData = {
  eyebrow: "Aplikasi Android",
  title: "Aplikasi pendamping pesantren untuk wali, alumni, kantin, dan layanan publik.",
  description:
    "Android sanadQu menampilkan data resmi dari admin panel kepada pengguna yang berhak. Wali memantau, alumni berkomunitas, kantin bertransaksi, dan pengguna umum tetap mendapat layanan Islami digital.",
  primaryCta: "Minta Demo Android",
  primaryCtaUrl: whatsappDemoAndroidUrl,
  secondaryCta: "Minta Demo Full Sistem",
  secondaryCtaUrl: whatsappDemoFullUrl,
  stats: ["Pemantauan wali", "Pembayaran dan dompet", "Alumni E2EE", "Layanan Islami publik"],
  heroCards: [
    {
      title: "Wali hanya memantau data resmi",
      icon: "smartphone",
      text: "Data santri, hafalan, pelanggaran, kesehatan, perizinan, prestasi, tagihan, dan dompet berasal dari sistem resmi pesantren.",
    },
    {
      title: "Keuangan tetap prioritas daring",
      icon: "wallet",
      text: "Pembayaran SPP, donasi, top up, saldo, kantin, dan status transaksi divalidasi backend, bukan saldo lokal.",
    },
    {
      title: "Alumni punya ruang komunitas",
      icon: "network",
      text: "Alumni dapat mendaftar, mengelola profil, melihat direktori, berforum, memberi reaksi, melapor konten, dan chat E2EE.",
    },
    {
      title: "Bermanfaat untuk pengguna umum",
      icon: "book",
      text: "Berita, donasi, Al-Qur'an, jadwal shalat, cuaca, kiblat, hadis, kalender Islam, kitab kuning, panduan ibadah, dan Tanya AI.",
    },
  ],
  bands: [
    {
      eyebrow: "Wali Santri",
      title: "Pemantauan anak dibuat lengkap tanpa membuka akses admin.",
      text: "Wali mendapat informasi yang biasa ditanyakan lewat WhatsApp atau telepon, tetapi tetap dalam batas akses relasi wali-santri.",
      cards: [
        {
          title: "Profil dan Aktivitas Santri",
          icon: "users",
          text: "Daftar santri terhubung, profil, kelas, jurusan, foto, riwayat aktivitas, dan data yang tersedia sesuai hak akses akun wali.",
          items: ["Profil santri", "Data kelas/jurusan", "Foto dan ringkasan", "Relasi wali-santri"],
        },
        {
          title: "Tahfidz dan Kitab",
          icon: "book",
          text: "Perkembangan hafalan ditampilkan dari catatan resmi ustadz atau pesantren, bukan input bebas dari wali.",
          items: ["Hafalan Al-Qur'an", "Murojaah", "Hafalan kitab", "Catatan perkembangan"],
        },
        {
          title: "Kedisiplinan dan Kesehatan",
          icon: "shield",
          text: "Wali dapat melihat catatan pembinaan, poin, tindakan, keluhan, penanganan UKS, dan informasi sensitif dengan konteks yang jelas.",
          items: ["Pelanggaran", "Poin pembinaan", "Rekam medis/UKS", "Notifikasi ramah wali"],
        },
        {
          title: "Perizinan dan Prestasi",
          icon: "badge",
          text: "Status izin dan prestasi santri tampil dalam aplikasi agar wali tidak menunggu kabar manual.",
          items: ["Izin ditinjau", "Disetujui/ditolak", "Keluar/kembali", "Prestasi santri"],
        },
      ],
    },
    {
      eyebrow: "Pembayaran & Dompet",
      title: "Pembayaran, donasi, dan uang jajan berada dalam alur backend.",
      text: "Aplikasi Android menjadi pintu pengguna, sedangkan kebenaran transaksi tetap berada di server, Midtrans, dan buku besar.",
      cards: [
        {
          title: "Tagihan dan SPP",
          icon: "wallet",
          text: "Wali melihat tagihan, nominal, status, sisa tagihan, detail pembayaran, tombol cek status, dan notifikasi sukses.",
          items: ["QRIS", "GoPay", "BCA/BNI/BRI/Permata VA", "Mandiri Bill Payment", "Alfamart/Indomaret"],
        },
        {
          title: "Donasi",
          icon: "send",
          text: "Wali, alumni, atau pengguna umum dapat berdonasi dengan kategori infaq, wakaf, shadaqah, atau donasi umum.",
          items: ["Nominal cepat", "Nominal custom", "Nama donatur", "Pesan donatur"],
        },
        {
          title: "Dompet Santri Wali",
          icon: "qr",
          text: "Wali melihat saldo, status dompet, limit, riwayat transaksi, top up, aktivasi, PIN, persetujuan, dan sengketa.",
          items: ["Top up", "PIN", "Limit harian/bulanan", "Persetujuan transaksi besar"],
        },
        {
          title: "Kantin Merchant",
          icon: "fingerprint",
          text: "Petugas kantin memakai akun role kantin dan perangkat aktif untuk scan QR/NFC, memasukkan nominal, dan memproses transaksi.",
          items: ["Scan QR/NFC", "Perangkat terdaftar", "Riwayat merchant", "Pencairan kantin"],
        },
      ],
    },
    {
      eyebrow: "Layanan Publik",
      title: "Aplikasi tetap berguna di luar urusan administrasi.",
      text: "Fitur publik membuat aplikasi tidak hanya dibuka saat ada tagihan, tetapi juga menjadi media layanan pesantren harian.",
      cards: [
        {
          title: "Al-Qur'an Digital",
          icon: "book",
          text: "Daftar surah, daftar juz, detail ayat, terjemahan, bookmark, audio full surah, dan pilihan qari.",
        },
        {
          title: "Ibadah Harian",
          icon: "key",
          text: "Jadwal shalat, pengingat, opsi notifikasi/getar/dering/adzan jika tersedia, arah kiblat, kalender Islam, dan panduan ibadah.",
        },
        {
          title: "Konten Keislaman",
          icon: "excel",
          text: "Hadits, kitab kuning, renungan atau panduan bacaan, serta materi sesuai konten yang tersedia di aplikasi.",
        },
        {
          title: "Berita, Cuaca, Tanya AI",
          icon: "sparkles",
          text: "Berita resmi pesantren, kondisi cuaca, ringkasan prakiraan, dan Tanya AI sebagai bantuan awal yang tetap punya batasan privasi.",
        },
      ],
    },
    {
      eyebrow: "Notifikasi & Offline",
      title: "Aplikasi tetap informatif saat jaringan tidak sempurna.",
      text: "Modul non-keuangan dapat menggunakan penyimpanan lokal terenkripsi, sedangkan keuangan tetap memerlukan koneksi agar tidak menampilkan data yang tidak valid.",
      cards: [
        {
          title: "Pusat Notifikasi",
          icon: "network",
          text: "Tagihan, pembayaran, donasi, prestasi, kedisiplinan, perizinan, kesehatan, dompet, forum, chat, dan pengingat shalat masuk ke pusat notifikasi.",
        },
        {
          title: "FCM dan Deep Link",
          icon: "send",
          text: "Notifikasi mengarahkan pengguna ke halaman terkait, tetapi aplikasi tetap mengambil ulang data dari backend saat dibuka.",
        },
        {
          title: "Penyimpanan Lokal (Offline)",
          icon: "lock",
          text: "Profil, aktivitas tertentu, alumni, forum, chat, hadits, kalender, dan panduan ibadah dapat menggunakan penyimpanan lokal dengan batas waktu (TTL).",
        },
        {
          title: "Chat E2EE Kotak Keluar Offline",
          icon: "shield",
          text: "Balasan langsung dan pesan chat yang gagal karena jaringan masuk ke kotak keluar lokal terenkripsi dan akan dikirim ulang saat koneksi kembali.",
        },
      ],
    },
  ],
  closing: {
    title: "Android membuat pesantren terasa dekat dengan wali dan alumni.",
    text: "Informasi tidak lagi tercecer di chat pribadi, tetapi tampil dalam aplikasi dengan hak akses, notifikasi, dan alur transaksi yang jelas.",
    cta: "Minta Demo Android",
    ctaUrl: whatsappDemoAndroidUrl,
  },
};

export default function AndroidPage() {
  return <DetailPage data={data} />;
}
