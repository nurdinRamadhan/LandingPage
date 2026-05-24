import type { Metadata } from "next";

import { DetailPage, type DetailPageData, whatsappDemoFullUrl, whatsappConversationUrl } from "@/components/detail-page";

export const metadata: Metadata = {
  title: "Workflow Pengguna | pesantrenPro",
  description:
    "Panduan alur kerja pengguna pesantrenPro untuk kesantrian, bendahara, rois, super admin, wali santri, kantin, alumni, dan kondisi masalah operasional.",
};

const data: DetailPageData = {
  eyebrow: "Workflow Pengguna",
  title: "Setiap role punya alur kerja yang jelas, bukan menu yang membingungkan.",
  description:
    "Halaman ini menjelaskan bagaimana sistem dipakai harian: siapa menginput, siapa memverifikasi, siapa memantau, dan apa yang harus dilakukan saat ada pembayaran pending, dispute, notifikasi gagal, atau data yang perlu dikoreksi.",
  primaryCta: "Minta Demo Full Sistem",
  primaryCtaUrl: whatsappDemoFullUrl,
  secondaryCta: "Konsultasi Workflow",
  secondaryCtaUrl: whatsappConversationUrl,
  stats: ["Role jelas", "Operator tidak tumpang tindih", "Wali hanya monitoring", "Masalah punya jalur tindak lanjut"],
  heroCards: [
    {
      title: "Kesantrian menjaga data induk",
      icon: "users",
      text: "Data santri, EMIS, wali, pelanggaran, perizinan, kesehatan, tahfidz, dan prestasi dicatat dari panel resmi agar Android hanya menampilkan data valid.",
    },
    {
      title: "Bendahara menjaga uang dan bukti",
      icon: "wallet",
      text: "Tagihan, pembayaran, pengeluaran, donasi, buku besar, top up, settlement, dan dispute ditangani dari workflow yang meninggalkan audit trail.",
    },
    {
      title: "Pimpinan melihat gambaran besar",
      icon: "monitor",
      text: "Dashboard, laporan, AI/RAG, audit, health score, dan event critical membantu rois atau pimpinan mengambil keputusan tanpa tenggelam di input teknis.",
    },
    {
      title: "Wali cukup memantau",
      icon: "smartphone",
      text: "Wali melihat data santri, notifikasi, pembayaran, donasi, dompet, dan dispute dari Android tanpa mengubah data resmi pesantren.",
    },
  ],
  bands: [
    {
      eyebrow: "Operasional Harian",
      title: "Workflow pengurus dibuat mengikuti tugas nyata di pesantren.",
      text: "Sistem tidak memaksa semua orang menjadi admin penuh. Setiap role bekerja di area yang semestinya, sementara log dan validasi menjaga akuntabilitas.",
      cards: [
        {
          title: "Kesantrian",
          icon: "users",
          text: "Memeriksa santri baru, melengkapi EMIS, memastikan wali aktif, mencatat pelanggaran, izin, kesehatan, tahfidz, dan perkembangan santri pada hari yang sama.",
          items: ["Data Santri EMIS", "Kesantrian", "Tahfidz", "Kesehatan UKS"],
        },
        {
          title: "Bendahara",
          icon: "wallet",
          text: "Memeriksa tagihan, pembayaran masuk, pengeluaran, top up, dispute, notifikasi critical, rekonsiliasi, dan pencairan kantin setelah bukti lengkap.",
          items: ["Tagihan dan SPP", "Buku besar", "Pengeluaran", "Settlement kantin"],
        },
        {
          title: "Rois dan Pimpinan",
          icon: "monitor",
          text: "Memantau dashboard, laporan keuangan, kondisi santri, Dompet Santri, event critical, dan dispute yang dieskalasi.",
          items: ["Dashboard", "Laporan", "Audit", "AI/RAG Decision"],
        },
        {
          title: "Super Admin",
          icon: "shield",
          text: "Mengatur akun admin, mencabut akses pengurus lama, menjalankan audit Dompet Santri, memantau backend, dan menangani event kritis.",
          items: ["Manajemen admin", "Audit keamanan", "Backend Command Center", "Safe repair manual"],
        },
      ],
    },
    {
      eyebrow: "Android Users",
      title: "Pengguna luar panel tetap punya alur yang terkontrol.",
      text: "Wali, alumni, kantin, dan donatur mendapat aplikasi yang berguna tanpa membuat akses admin menjadi terbuka.",
      cards: [
        {
          title: "Wali Santri",
          icon: "smartphone",
          text: "Melihat profil anak, hafalan, murojaah, kitab, pelanggaran, kesehatan, izin, prestasi, tagihan, pembayaran, donasi, Dompet Santri, dan notifikasi.",
        },
        {
          title: "Kantin",
          icon: "qr",
          text: "Login sebagai role kantin, memakai perangkat terdaftar, scan QR/NFC kartu santri, memasukkan nominal, dan menunggu otorisasi backend.",
        },
        {
          title: "Alumni",
          icon: "network",
          text: "Mengelola profil alumni, direktori, forum, follow, reaction, laporan konten, notifikasi, dan chat E2EE sesuai status akun.",
        },
        {
          title: "Donatur dan Umum",
          icon: "send",
          text: "Mengakses berita, donasi, Al-Qur'an digital, jadwal sholat, cuaca, kiblat, hadis, kalender Islam, panduan ibadah, dan Tanya AI publik.",
        },
      ],
    },
    {
      eyebrow: "Problem Handling",
      title: "Ketika ada masalah, sistem punya jalur tindak lanjut.",
      text: "Workflow masalah dibuat agar admin tidak mengambil keputusan berisiko dari screenshot, chat pribadi, atau edit manual di luar sistem.",
      cards: [
        {
          title: "Pembayaran pending",
          icon: "server",
          text: "Admin membuka status sistem dan log pembayaran. Status final mengikuti webhook atau pengecekan backend, bukan bukti tangkapan layar.",
        },
        {
          title: "Dispute transaksi",
          icon: "wallet",
          text: "Bendahara mencocokkan ledger, waktu, nominal, kantin, dan bukti. Jika valid refund, sistem membuat reversal ledger baru.",
        },
        {
          title: "Notifikasi gagal",
          icon: "network",
          text: "Admin melihat antrean dan error FCM, memastikan token perangkat aktif, lalu mendorong user login ulang bila token belum terdaftar.",
        },
        {
          title: "Ledger mismatch",
          icon: "database",
          text: "Admin menjalankan rekonsiliasi, hash-chain check, memberi catatan review, dan menindaklanjuti sampai selisih punya status jelas.",
        },
      ],
    },
  ],
  closing: {
    title: "Workflow yang jelas membuat sistem lebih mudah diadopsi.",
    text: "Pengurus tidak perlu menebak harus membuka menu apa. Setiap role punya tugas, batas, dan jalur eskalasi.",
    cta: "Minta Demo Full Sistem",
    ctaUrl: whatsappDemoFullUrl,
  },
};

export default function WorkflowPage() {
  return <DetailPage data={data} />;
}
