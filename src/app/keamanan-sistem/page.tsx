import type { Metadata } from "next";

import { DetailPage, type DetailPageData } from "@/components/detail-page";

export const metadata: Metadata = {
  title: "Keamanan Sistem | pesantrenPro",
  description:
    "Lapisan keamanan pesantrenPro: RBAC, RLS, secure RPC, Edge Functions, Android Keystore, AES/GCM, E2EE, ledger, audit, dan AI/RAG sanitization.",
};

const data: DetailPageData = {
  eyebrow: "Keamanan Sistem",
  title: "Keamanan dirancang sebagai alur kerja, bukan klaim kosong.",
  description:
    "pesantrenPro melindungi data santri, pembayaran, Dompet Santri, chat alumni, notifikasi, dan AI/RAG dengan kontrol berlapis dari Android, database, Edge Function, audit, hingga backend command center.",
  primaryCta: "Diskusi Keamanan Sistem",
  stats: ["RLS-first access model", "No service role di frontend", "Ledger-first wallet", "AI wajib sanitasi data"],
  heroCards: [
    {
      title: "Data sensitif tidak dibuka bebas",
      icon: "lock",
      text: "NIK, KK, rekening, token, private key, dan data merah lain tidak boleh tampil polos di UI, log, localStorage, sessionStorage, atau payload AI.",
    },
    {
      title: "Aksi penting lewat backend",
      icon: "server",
      text: "Pembayaran, webhook Midtrans, wallet, notifikasi, akun admin, upload, dan AI/RAG dijalankan lewat RPC atau Edge Function yang tervalidasi.",
    },
    {
      title: "Transaksi punya jejak audit",
      icon: "monitor",
      text: "Keuangan memakai buku besar Audit Locked, sedangkan Dompet Santri memakai ledger append-only, hash-chain, risk event, dispute, dan rekonsiliasi.",
    },
    {
      title: "AI tidak diberi kuasa bebas",
      icon: "sparkles",
      text: "AI Analysis, AI Agent, RAG Decision, dan AI auditor hanya memakai data yang disaring. Aksi AI Agent tetap menunggu konfirmasi admin.",
    },
  ],
  bands: [
    {
      eyebrow: "Access Control",
      title: "Hak akses dijaga dari login sampai database.",
      text: "Sistem tidak mengandalkan menu yang disembunyikan. Role, relasi data, RLS, RPC, dan audit dipakai bersama agar setiap akun hanya bekerja di wilayah kewenangannya.",
      cards: [
        {
          title: "Supabase Auth",
          icon: "key",
          text: "Setiap admin login resmi. Akun nonaktif ditolak, sesi divalidasi, dan halaman awal diarahkan sesuai role seperti kesantrian, bendahara, kantin, atau dashboard.",
        },
        {
          title: "RBAC",
          icon: "users",
          text: "Role seperti super admin, rois, dewan, bendahara, kesantrian, dan kantin punya batas akses berbeda, termasuk pembatasan gender atau jurusan jika diperlukan.",
        },
        {
          title: "Row Level Security",
          icon: "database",
          text: "Tabel operasional dan sensitif dikunci dengan RLS agar akses data tidak hanya bergantung pada tampilan frontend.",
        },
        {
          title: "Secure RPC",
          icon: "shield",
          text: "Data sensitif seperti detail santri, update data, validasi EMIS, dan export EMIS memakai RPC yang memvalidasi role, alasan akses, dan jejak audit.",
        },
      ],
    },
    {
      eyebrow: "Financial Control",
      title: "Uang tidak berubah karena tombol, screenshot, atau edit angka.",
      text: "Sistem finansial memakai online authority, webhook, ledger, audit, idempotency, dan rekonsiliasi agar transaksi penting tetap punya sumber kebenaran yang jelas.",
      cards: [
        {
          title: "Midtrans Webhook",
          icon: "server",
          text: "Pembayaran digital tidak dianggap sukses dari screenshot. Status final mengikuti callback/webhook dan validasi backend.",
        },
        {
          title: "Buku Besar Audit Locked",
          icon: "excel",
          text: "Transaksi keuangan menyimpan tanggal, pencatat, subjek, metode, nominal, status, dan order ID sehingga koreksi tidak menghapus jejak lama.",
        },
        {
          title: "Ledger Dompet Santri",
          icon: "wallet",
          text: "Saldo Dompet Santri berubah lewat transaksi ledger append-only. Cached balance hanya tampilan cepat, bukan sumber kebenaran utama.",
        },
        {
          title: "Nonce dan Idempotency",
          icon: "qr",
          text: "Transaksi kantin dan top up memakai idempotency key, nonce, challenge, dan expiry untuk mengurangi risiko replay dan transaksi ganda.",
        },
      ],
    },
    {
      eyebrow: "Android & Cryptography",
      title: "Aplikasi Android membawa kontrol kriptografi di perangkat.",
      text: "Kontrol Android dipakai untuk melindungi cache, kunci, PIN, chat alumni, transaksi Dompet Santri, dan koneksi ke endpoint penting.",
      cards: [
        {
          title: "Android Keystore",
          icon: "smartphone",
          text: "Kunci lokal dibungkus oleh keamanan perangkat, termasuk key untuk cache sensitif, outbox chat, private key chat, dan private key wallet.",
        },
        {
          title: "AES/GCM",
          icon: "lock",
          text: "Cache lokal dan material sensitif memakai authenticated encryption sehingga data tidak hanya tersembunyi, tapi juga divalidasi integritasnya.",
        },
        {
          title: "Argon2id PIN Verifier",
          icon: "key",
          text: "PIN Dompet Santri tidak disimpan sebagai angka asli. Sistem memakai salt, parameter KDF, verifier, dan proof untuk operasi sensitif.",
        },
        {
          title: "Ed25519 Signature",
          icon: "fingerprint",
          text: "Operasi wallet dan kantin ditandatangani dari perangkat untuk membantu memastikan request berasal dari konteks device yang sah.",
        },
      ],
    },
    {
      eyebrow: "Operational Security",
      title: "Keamanan tetap dipantau setelah sistem berjalan.",
      text: "Audit, command center, notification pipeline, dan incident workflow membantu pesantren mendeteksi masalah operasional sebelum menjadi kerusakan besar.",
      cards: [
        {
          title: "Backend Command Center",
          icon: "monitor",
          text: "Super admin melihat health score, incidents, timeline, diagnostics, private audit log, FCM token health, antrean Midtrans, dan safe repair manual.",
        },
        {
          title: "E2EE Alumni Chat",
          icon: "send",
          text: "Server menyimpan metadata, placeholder, dan ciphertext. Admin monitor tidak membaca isi pesan, hanya statistik dan preview terenkripsi.",
        },
        {
          title: "FCM Token Binding",
          icon: "network",
          text: "Token perangkat diikat ke user login aktif agar notifikasi tidak nyasar ke akun lama setelah logout atau switch account.",
        },
        {
          title: "AI/RAG Sanitization",
          icon: "sparkles",
          text: "Data sensitif disaring sebelum masuk AI/RAG. AI tidak memegang saldo, tidak menghapus ledger, dan tidak memutuskan transaksi final.",
        },
      ],
    },
  ],
  closing: {
    title: "Keamanan sistem dapat diperiksa dari mekanismenya.",
    text: "Pesantren tidak hanya mendapat janji bahwa data aman. Setiap area penting memiliki batas akses, validasi backend, audit trail, enkripsi, ledger, dan prosedur tindak lanjut yang jelas.",
    cta: "Bahas Keamanan via WhatsApp",
  },
};

export default function SecurityPage() {
  return <DetailPage data={data} />;
}
