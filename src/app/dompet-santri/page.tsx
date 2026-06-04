import type { Metadata } from "next";

import { DetailPage, type DetailPageData, whatsappDemoFullUrl } from "@/components/detail-page";

export const metadata: Metadata = {
  title: "Dompet Santri | sanadQu",
  description:
    "Dompet Santri sanadQu: dompet tertutup (closed-loop), isi ulang Midtrans, QR/NFC kantin, prioritas buku besar (ledger-first), pencairan merchant, sengketa, rekonsiliasi, hash-chain, dan audit keamanan.",
};

const data: DetailPageData = {
  eyebrow: "Dompet Santri",
  title: "Uang jajan santri yang tertib, terkontrol, dan bisa diaudit.",
  description:
    "Dompet Santri adalah sistem saldo internal untuk transaksi yang disetujui pesantren, terutama kantin. Sistem ini bersifat tertutup (closed-loop), memprioritaskan buku besar (ledger-first), otoritas daring (online-authority), dan tidak memperlakukan saldo sebagai angka yang bebas diubah.",
  primaryCta: "Minta Demo Full Sistem",
  primaryCtaUrl: whatsappDemoFullUrl,
  stats: ["Dompet Tertutup", "Buku Besar Jurnal", "QR/NFC Kantin", "Audit Keamanan Satu Klik"],
  heroCards: [
    {
      title: "Bukan dompet digital umum",
      icon: "wallet",
      text: "Saldo hanya berlaku di lingkungan pesantren. Tidak ada transfer bebas antar pengguna dan tidak ada penarikan tunai publik untuk santri.",
    },
    {
      title: "Saldo tidak diubah langsung",
      icon: "database",
      text: "Setiap perubahan saldo harus melalui transaksi resmi. Jika ada koreksi, sistem membuat transaksi koreksi baru, bukan mengubah riwayat lama.",
    },
    {
      title: "Kantin menggunakan perangkat terdaftar",
      icon: "qr",
      text: "Petugas kantin harus menggunakan akun peran kantin dan perangkat aktif. QR/NFC hanya menjadi penunjuk publik yang diverifikasi oleh backend.",
    },
    {
      title: "Wali tetap memiliki kendali",
      icon: "smartphone",
      text: "Wali dapat melihat saldo, riwayat, batas limit, isi ulang, notifikasi, dan mengajukan sengketa jika ada transaksi yang meragukan.",
    },
  ],
  bands: [
    {
      eyebrow: "WALLET FLOW",
      title: "Alur saldo berbasis daring agar tidak mudah dimanipulasi.",
      text: "Isi ulang, pembayaran kantin, pencairan, dan koreksi saldo selalu melewati backend agar buku besar menjadi satu-satunya sumber kebenaran.",
      cards: [
        {
          title: "Registrasi Dompet",
          icon: "users",
          text: "Dompet terhubung ke santri dan wali. Status aktif, batas limit, QR publik, perangkat, dan buku besar dapat dilihat sesuai peran masing-masing.",
        },
        {
          title: "Isi Ulang Midtrans",
          icon: "server",
          text: "Wali atau bendahara melakukan isi ulang. Saldo bertambah setelah webhook Midtrans valid dan backend mencatat kredit ke buku besar.",
        },
        {
          title: "Pembayaran Kantin",
          icon: "qr",
          text: "Kantin memindai QR/NFC, memasukkan nominal, backend membuat sesi otorisasi, lalu saldo santri dan merchant berubah melalui buku besar.",
        },
        {
          title: "Koreksi Resmi",
          icon: "shield",
          text: "Jika ada koreksi, admin memilih tambah atau kurang saldo melalui prosedur resmi. Sistem membuat jurnal baru dengan alasan audit yang jelas.",
        },
      ],
    },
    {
      eyebrow: "KANTIN MERCHANT",
      title: "Kantin tidak hanya memindai, tapi memiliki alur kerja merchant.",
      text: "Pesantren dapat mengelola merchant, outlet, petugas, perangkat, saldo merchant, buku besar merchant, dan pencairan melalui admin panel.",
      cards: [
        {
          title: "Merchant dan Outlet",
          icon: "network",
          text: "Setiap kantin dapat memiliki merchant dan outlet. Petugas kantin dihubungkan ke merchant/outlet sesuai dengan kewenangannya.",
        },
        {
          title: "Persetujuan Perangkat",
          icon: "fingerprint",
          text: "Perangkat kantin harus didaftarkan, disetujui, diaktifkan, atau dicabut aksesnya oleh admin jika perangkat tersebut hilang atau tidak sah.",
        },
        {
          title: "Pencairan (Settlement)",
          icon: "wallet",
          text: "Kantin mengajukan pencairan dana. Bendahara atau admin utama memeriksa nominal dan menandai 'dibayar' setelah dana benar-benar keluar.",
        },
        {
          title: "Buku Besar Merchant",
          icon: "excel",
          text: "Saldo merchant tidak diubah langsung. Perubahan berasal dari pembayaran kantin, pengajuan pencairan, atau pembatalan transaksi.",
        },
      ],
    },
    {
      eyebrow: "RISK & DISPUTE",
      title: "Transaksi bermasalah tidak diselesaikan melalui percakapan pribadi.",
      text: "Kejadian risiko, sengketa, notifikasi kritis, rekonsiliasi, dan hash-chain memberikan jalur formal untuk memeriksa masalah dompet.",
      cards: [
        {
          title: "Kejadian Risiko",
          icon: "monitor",
          text: "Sistem menandai aktivitas mencurigakan seperti kesalahan PIN berulang, perangkat tidak dikenal, atau transaksi dalam jumlah besar.",
        },
        {
          title: "Sengketa Wali",
          icon: "send",
          text: "Wali dapat melaporkan transaksi. Admin memeriksa buku besar, waktu, nominal, dan lokasi kantin sebelum memutuskan pembatalan (reversal).",
        },
        {
          title: "Rekonsiliasi Saldo",
          icon: "database",
          text: "Sistem membandingkan saldo buku besar, saldo cache, saldo santri, saldo merchant, dan catatan transaksi terkait secara otomatis.",
        },
        {
          title: "Pemeriksaan Hash-Chain",
          icon: "lock",
          text: "Integritas buku besar diperiksa secara berkala. Jika ditemukan ketidaksesuaian, transaksi dompet akan dibekukan sementara untuk investigasi.",
        },
      ],
    },
    {
      eyebrow: "SECURITY CONTROLS",
      title: "Dompet Santri membawa kendali keamanan finansial internal.",
      text: "Kontrol keamanan dibuat agar pesantren memiliki batasan jelas antara transaksi sah, risiko, dan tindakan darurat.",
      cards: [
        {
          title: "Keamanan PIN Argon2id",
          icon: "key",
          text: "PIN tidak disimpan dalam bentuk teks biasa. Sistem menggunakan verifikator kriptografi dengan tingkat keamanan tinggi.",
        },
        {
          title: "Tanda Tangan Ed25519",
          icon: "fingerprint",
          text: "Operasi dompet menggunakan tanda tangan digital perangkat. Kunci pribadi disimpan secara aman di dalam Android Keystore.",
        },
        {
          title: "Tombol Pembeku (Freeze)",
          icon: "shield",
          text: "Dalam kondisi darurat atau adanya risiko kritis, seluruh aktivitas transaksi dapat dibekukan secara instan untuk investigasi lebih lanjut.",
        },
        {
          title: "Audit Berbasis AI",
          icon: "sparkles",
          text: "AI menganalisis hasil audit yang telah disanitasi untuk membantu memahami prioritas risiko tanpa mengubah data finansial asli.",
        },
      ],
    },
  ],
  closing: {
    title: "Dompet Santri membantu pesantren mengelola uang jajan dengan tertib.",
    text: "Wali dapat memantau, kantin dapat bertransaksi, bendahara dapat merekonsiliasi, dan pimpinan memiliki jejak audit yang transparan.",
    cta: "Minta Demo Full Sistem",
    ctaUrl: whatsappDemoFullUrl,
  },
};

export default function WalletPage() {
  return <DetailPage data={data} />;
}
