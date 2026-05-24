import type { Metadata } from "next";

import { DetailPage, type DetailPageData, whatsappDemoFullUrl } from "@/components/detail-page";

export const metadata: Metadata = {
  title: "Dompet Santri | pesantrenPro",
  description:
    "Dompet Santri pesantrenPro: closed-loop wallet, top up Midtrans, QR/NFC kantin, ledger-first, settlement merchant, dispute, rekonsiliasi, hash-chain, dan audit keamanan.",
};

const data: DetailPageData = {
  eyebrow: "Dompet Santri",
  title: "Uang jajan santri yang tertib, terkontrol, dan bisa diaudit.",
  description:
    "Dompet Santri adalah sistem saldo internal untuk transaksi yang disetujui pesantren, terutama kantin. Sistem ini closed-loop, ledger-first, online-authority, dan tidak memperlakukan saldo sebagai angka yang bebas diedit.",
  primaryCta: "Minta Demo Full Sistem",
  primaryCtaUrl: whatsappDemoFullUrl,
  stats: ["Closed-loop wallet", "Ledger append-only", "QR/NFC kantin", "Audit keamanan satu klik"],
  heroCards: [
    {
      title: "Bukan e-wallet umum",
      icon: "wallet",
      text: "Saldo hanya berlaku di lingkungan pesantren. Tidak ada transfer bebas antar pengguna dan tidak ada cash-out publik untuk santri.",
    },
    {
      title: "Saldo tidak diedit langsung",
      icon: "database",
      text: "Setiap perubahan saldo harus lewat transaksi resmi. Jika ada koreksi, sistem membuat transaksi koreksi baru, bukan mengubah riwayat lama.",
    },
    {
      title: "Kantin memakai device terdaftar",
      icon: "qr",
      text: "Petugas kantin harus memakai akun role kantin dan perangkat aktif. QR/NFC hanya menjadi pointer publik yang diverifikasi backend.",
    },
    {
      title: "Wali tetap punya kontrol",
      icon: "smartphone",
      text: "Wali dapat melihat saldo, riwayat, limit, top up, notifikasi, dan membuka dispute jika ada transaksi yang dipertanyakan.",
    },
  ],
  bands: [
    {
      eyebrow: "Wallet Flow",
      title: "Alur saldo dibuat online-first agar tidak mudah dimanipulasi.",
      text: "Top up, pembayaran kantin, settlement, dan koreksi saldo selalu melewati backend agar ledger menjadi sumber kebenaran.",
      cards: [
        {
          title: "Registrasi Dompet",
          icon: "users",
          text: "Dompet terhubung ke santri dan wali. Status aktif, limit, QR publik, device, dan ledger dapat dilihat sesuai role.",
        },
        {
          title: "Top Up Midtrans",
          icon: "server",
          text: "Wali atau bendahara membuat top up. Saldo baru bertambah setelah webhook Midtrans valid dan backend memposting credit ke ledger.",
        },
        {
          title: "Pembayaran Kantin",
          icon: "qr",
          text: "Kantin scan QR/NFC, memasukkan nominal, backend membuat sesi otorisasi, lalu saldo santri dan merchant berubah lewat ledger.",
        },
        {
          title: "Koreksi Resmi",
          icon: "shield",
          text: "Jika ada koreksi, admin memilih tambah atau kurang saldo lewat tombol resmi. Sistem membuat ledger baru dengan alasan audit.",
        },
      ],
    },
    {
      eyebrow: "Kantin Merchant",
      title: "Kantin tidak hanya scan, tapi punya workflow merchant.",
      text: "Pesantren dapat mengelola merchant, outlet, petugas, perangkat, saldo merchant, ledger merchant, dan pencairan dari admin panel.",
      cards: [
        {
          title: "Merchant dan Outlet",
          icon: "network",
          text: "Setiap kantin dapat memiliki merchant dan outlet. Petugas kantin dihubungkan ke merchant/outlet sesuai kewenangan.",
        },
        {
          title: "Device Approval",
          icon: "fingerprint",
          text: "Device kantin harus didaftarkan, disetujui, diaktifkan, disuspend, atau direvoke oleh admin jika hilang atau tidak sah.",
        },
        {
          title: "Settlement",
          icon: "wallet",
          text: "Kantin mengajukan pencairan. Bendahara atau super admin memeriksa nominal dan menandai paid hanya setelah dana benar-benar keluar.",
        },
        {
          title: "Ledger Merchant",
          icon: "excel",
          text: "Saldo merchant tidak diedit langsung. Perubahan berasal dari pembayaran kantin, pengajuan pencairan, penolakan, atau marking paid.",
        },
      ],
    },
    {
      eyebrow: "Risk & Dispute",
      title: "Transaksi bermasalah tidak diselesaikan dari chat pribadi.",
      text: "Risk event, dispute, notifikasi critical, rekonsiliasi, dan hash-chain memberi jalur formal untuk memeriksa masalah wallet.",
      cards: [
        {
          title: "Risk Event",
          icon: "monitor",
          text: "Sistem menandai aktivitas seperti PIN salah berulang, device bermasalah, transaksi besar, atau event high/critical.",
        },
        {
          title: "Dispute Wali",
          icon: "send",
          text: "Wali dapat melaporkan transaksi. Admin memeriksa ledger, waktu, nominal, dan kantin, lalu memutuskan valid atau reversal.",
        },
        {
          title: "Rekonsiliasi Saldo",
          icon: "database",
          text: "Sistem membandingkan saldo ledger, cached balance, saldo santri, saldo merchant, pending settlement, dan catatan terkait.",
        },
        {
          title: "Hash-Chain Check",
          icon: "lock",
          text: "Ledger diperiksa integritasnya. Jika gagal, transaksi dompet dianggap berisiko sampai admin melakukan tindak lanjut formal.",
        },
      ],
    },
    {
      eyebrow: "Security Controls",
      title: "Dompet Santri membawa kontrol seperti sistem finansial internal.",
      text: "Kontrol keamanan dibuat agar pesantren punya batas jelas antara transaksi sah, risiko, dan tindakan darurat.",
      cards: [
        {
          title: "Argon2id PIN",
          icon: "key",
          text: "PIN tidak disimpan plaintext. Sistem memakai verifier, salt, parameter KDF, dan audit percobaan PIN gagal.",
        },
        {
          title: "Ed25519 dan Keystore",
          icon: "fingerprint",
          text: "Operasi wallet memakai tanda tangan perangkat. Private key disimpan lokal dan dibungkus dengan Android Keystore.",
        },
        {
          title: "Freeze Switch",
          icon: "shield",
          text: "Jika ada mismatch ledger, hash-chain gagal, atau risiko kritis, transaksi dapat dibekukan untuk investigasi.",
        },
        {
          title: "AI Auditor Dompet",
          icon: "sparkles",
          text: "AI membaca hasil audit yang sudah disanitasi untuk membantu memahami prioritas risiko, bukan mengubah saldo atau menjalankan transaksi.",
        },
      ],
    },
  ],
  closing: {
    title: "Dompet Santri membantu pesantren mengelola uang jajan dengan tertib.",
    text: "Wali dapat memantau, kantin dapat bertransaksi, bendahara dapat merekonsiliasi, dan pimpinan memiliki jejak audit untuk menilai risiko maupun koreksi saldo.",
    cta: "Minta Demo Full Sistem",
    ctaUrl: whatsappDemoFullUrl,
  },
};

export default function WalletPage() {
  return <DetailPage data={data} />;
}
