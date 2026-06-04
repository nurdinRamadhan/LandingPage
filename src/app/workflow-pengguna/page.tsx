import type { Metadata } from "next";

import { DetailPage, type DetailPageData, whatsappDemoFullUrl, whatsappConversationUrl } from "@/components/detail-page";

export const metadata: Metadata = {
  title: "Alur Kerja Pengguna",
  description:
    "Panduan alur kerja pengguna sanadQu untuk kesantrian, bendahara, rois, admin utama, wali santri, kantin, alumni, dan penanganan masalah operasional.",
  alternates: {
    canonical: "/workflow-pengguna",
  },
};

const data: DetailPageData = {
  eyebrow: "Alur Kerja Pengguna",
  title: "Setiap peran memiliki alur kerja yang jelas, bukan menu yang membingungkan.",
  description:
    "Halaman ini menjelaskan bagaimana sistem digunakan setiap hari: siapa yang memasukkan data, siapa yang memverifikasi, siapa yang memantau, dan tindakan apa yang harus dilakukan saat menghadapi kendala operasional.",
  primaryCta: "Minta Demo Full Sistem",
  primaryCtaUrl: whatsappDemoFullUrl,
  secondaryCta: "Konsultasi Alur Kerja",
  secondaryCtaUrl: whatsappConversationUrl,
  stats: ["Peran Terdefinisi", "Batas Akses Ketat", "Pemantauan Wali Real-time", "Jalur Eskalasi Jelas"],
  heroCards: [
    {
      title: "Kesantrian menjaga data induk",
      icon: "users",
      text: "Data santri, EMIS, wali, pelanggaran, perizinan, kesehatan, tahfidz, dan prestasi dicatat melalui panel resmi agar aplikasi Android hanya menampilkan data yang valid.",
    },
    {
      title: "Bendahara menjaga dana dan bukti",
      icon: "wallet",
      text: "Tagihan, pembayaran, pengeluaran, donasi, buku besar, isi ulang, dan sengketa ditangani melalui alur kerja yang meninggalkan jejak audit.",
    },
    {
      title: "Pimpinan melihat gambaran besar",
      icon: "monitor",
      text: "Dasbor, laporan, AI, audit, dan kejadian kritis membantu rois atau pimpinan mengambil keputusan strategis tanpa perlu melakukan entri data teknis.",
    },
    {
      title: "Wali cukup memantau",
      icon: "smartphone",
      text: "Wali melihat data santri, notifikasi, pembayaran, donasi, dan dompet melalui Android tanpa mengubah data resmi pesantren.",
    },
  ],
  bands: [
    {
      eyebrow: "OPERASIONAL HARIAN",
      title: "Alur kerja pengurus mengikuti tugas nyata di pesantren.",
      text: "Sistem tidak memaksa semua orang menjadi administrator penuh. Setiap peran bekerja di area masing-masing dengan log dan validasi yang menjaga akuntabilitas.",
      cards: [
        {
          title: "Kesantrian",
          icon: "users",
          text: "Memeriksa santri baru, melengkapi EMIS, memastikan akun wali aktif, mencatat pelanggaran, izin, kesehatan, dan perkembangan tahfidz harian.",
          items: ["Data Santri EMIS", "Kesantrian & Disiplin", "Tahfidz & Murojaah", "Layanan Kesehatan"],
        },
        {
          title: "Bendahara",
          icon: "wallet",
          text: "Memverifikasi tagihan, pembayaran masuk, pengeluaran, isi ulang dompet, sengketa, dan pencairan dana kantin berdasarkan bukti sah.",
          items: ["Manajemen Tagihan", "Buku Besar Amanah", "Laporan Pengeluaran", "Pencairan Merchant"],
        },
        {
          title: "Rois dan Pimpinan",
          icon: "monitor",
          text: "Memantau dasbor utama, laporan keuangan berkala, kondisi kesehatan santri, penggunaan dompet, dan sengketa yang memerlukan eskalasi.",
          items: ["Dasbor Eksekutif", "Laporan Cerdas", "Jejak Audit", "Keputusan Berbasis AI"],
        },
        {
          title: "Admin Utama (Super Admin)",
          icon: "shield",
          text: "Mengelola akun pengurus, mengatur hak akses, menjalankan audit keamanan dompet, memantau kesehatan backend, dan menangani kejadian darurat.",
          items: ["Kontrol Hak Akses", "Audit Keamanan", "Pusat Kendali Backend", "Perbaikan Aman"],
        },
      ],
    },
    {
      eyebrow: "PENGGUNA MOBILE",
      title: "Pengguna luar tetap memiliki alur yang terkendali.",
      text: "Wali santri, alumni, kantin, dan donatur mendapatkan fitur yang bermanfaat tanpa mengompromikan keamanan data internal pesantren.",
      cards: [
        {
          title: "Wali Santri",
          icon: "smartphone",
          text: "Memantau profil anak, progres hafalan, catatan disiplin, riwayat kesehatan, status izin, tagihan, donasi, dan saldo dompet santri.",
        },
        {
          title: "Kantin & Merchant",
          icon: "qr",
          text: "Melakukan login sesuai peran, menggunakan perangkat terdaftar untuk memindai QR kartu santri, dan menunggu otorisasi transaksi dari backend.",
        },
        {
          title: "Alumni Pesantren",
          icon: "network",
          text: "Mengelola profil, melihat direktori alumni, berpartisipasi dalam forum, memberikan reaksi, dan berkomunikasi melalui obrolan terenkripsi (E2EE).",
        },
        {
          title: "Donatur dan Umum",
          icon: "send",
          text: "Mengakses berita resmi, portal donasi online, Al-Qur'an digital, jadwal shalat, arah kiblat, panduan ibadah, dan asisten AI publik.",
        },
      ],
    },
    {
      eyebrow: "PENANGANAN KENDALA",
      title: "Ketika ada masalah, sistem memiliki jalur solusi formal.",
      text: "Alur penanganan masalah dirancang agar admin tidak mengambil keputusan berisiko berdasarkan percakapan pribadi atau bukti tangkapan layar yang tidak tervalidasi.",
      cards: [
        {
          title: "Pembayaran Tertunda",
          icon: "server",
          text: "Admin memeriksa log sistem dan status gateway pembayaran. Keputusan final mengikuti konfirmasi webhook backend resmi.",
        },
        {
          title: "Sengketa Transaksi",
          icon: "wallet",
          text: "Bendahara mencocokkan buku besar, waktu, nominal, dan lokasi transaksi. Jika terbukti salah, sistem melakukan pembalikan dana (reversal) melalui jurnal baru.",
        },
        {
          title: "Notifikasi Gagal",
          icon: "network",
          text: "Admin memantau antrean FCM, memastikan token perangkat masih aktif, dan menyarankan login ulang untuk memperbarui kredensial notifikasi.",
        },
        {
          title: "Selisih Buku Besar",
          icon: "database",
          text: "Admin menjalankan prosedur rekonsiliasi dan pemeriksaan hash-chain untuk mengidentifikasi anomali data sampai ditemukan status yang jelas.",
        },
      ],
    },
  ],
  closing: {
    title: "Alur kerja yang jelas mempercepat adopsi teknologi.",
    text: "Pengurus tidak perlu menebak fungsi setiap menu. Setiap peran memiliki tugas, batasan, dan jalur eskalasi yang tertata rapi.",
    cta: "Minta Demo Full Sistem",
    ctaUrl: whatsappDemoFullUrl,
  },
};

export default function WorkflowPage() {
  return <DetailPage data={data} />;
}
