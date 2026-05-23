"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  BookOpenCheck,
  Check,
  Code2,
  CreditCard,
  Database,
  FileSpreadsheet,
  FileText,
  Fingerprint,
  LifeBuoy,
  KeyRound,
  Gift,
  Globe2,
  Layers3,
  LockKeyhole,
  MonitorCheck,
  Network,
  PanelTop,
  QrCode,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
  WalletCards,
  Wrench,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const modules = [
  "Data Santri EMIS",
  "Keuangan & SPP",
  "Dompet Santri",
  "Kantin Merchant",
  "Tahfidz Quran",
  "Hafalan Kitab",
  "Pelanggaran",
  "Perizinan",
  "Kesehatan UKS",
  "Alumni & Forum",
  "Chat E2EE",
  "Notifikasi Push",
  "Pembayaran Online",
  "Al-Qur'an Digital",
  "Jadwal Sholat",
  "AI/RAG",
];

const ecosystem = [
  {
    title: "Admin Panel",
    icon: PanelTop,
    text: "Pusat kerja operasional untuk data induk, EMIS, akademik, kesantrian, keuangan, alumni, inventaris, notifikasi, audit, dan AI internal.",
  },
  {
    title: "Android",
    icon: Smartphone,
    text: "Aplikasi wali, alumni, dan kantin dengan batas akses yang jelas. Wali memantau, alumni berkomunitas, kantin bertransaksi.",
  },
  {
    title: "Backend",
    icon: Database,
    text: "Supabase, PostgreSQL, RPC aman, Edge Function, RLS, cron, queue, webhook pembayaran, ledger, dan diagnostics.",
  },
  {
    title: "Security",
    icon: ShieldCheck,
    text: "RBAC, audit log, field encryption, E2EE, Android Keystore, signature transaksi, nonce, idempotency, dan risk monitoring.",
  },
];

const screenshots = [
  { src: "/screenshots/profile-ui.png", title: "Profil", color: "bg-emerald-500" },
  { src: "/screenshots/keuangan-ui.png", title: "Keuangan", color: "bg-sky-500" },
  { src: "/screenshots/hafalanQuran-ui.png", title: "Tahfidz", color: "bg-teal-500" },
  { src: "/screenshots/Hafalan-ui.png", title: "Kitab", color: "bg-amber-500" },
  { src: "/screenshots/pelanggaran-ui.png", title: "Disiplin", color: "bg-rose-500" },
  { src: "/screenshots/kesehatan-ui.png", title: "UKS", color: "bg-cyan-500" },
  { src: "/screenshots/donasi-ui.png", title: "Donasi", color: "bg-violet-500" },
];

const androidFeatureGroups = [
  {
    title: "Monitoring Wali",
    icon: UsersRound,
    items: ["Daftar dan profil santri", "Hafalan Quran", "Murojaah", "Hafalan kitab", "Catatan kedisiplinan", "Rekam medis/UKS", "Perizinan dan status kembali", "Prestasi santri"],
  },
  {
    title: "Pembayaran & Dompet",
    icon: CreditCard,
    items: ["Tagihan dan SPP", "QRIS, GoPay, VA bank", "Alfamart/Indomaret", "Donasi infaq/wakaf/shadaqah", "Top up Dompet Santri", "Aktivasi wallet dan PIN", "Limit dan approval", "Dispute transaksi"],
  },
  {
    title: "Fitur Publik Islami",
    icon: BookOpenCheck,
    items: ["Al-Qur'an digital", "Surah dan juz", "Terjemahan", "Bookmark", "Audio murottal dan qori", "Jadwal sholat dan pengingat", "Cuaca", "Arah kiblat"],
  },
  {
    title: "Alumni & Kantin",
    icon: Network,
    items: ["Registrasi alumni", "Profil dan direktori alumni", "Forum alumni", "Follow, komentar, reaction", "Laporan konten", "Chat alumni E2EE", "Direct reply terenkripsi", "Scan QR/NFC kantin"],
  },
  {
    title: "AI, Notifikasi & Offline",
    icon: BellRing,
    items: ["Tanya AI publik/wali", "Berita pesantren", "Hadis", "Kalender Islam", "Kitab kuning", "Panduan ibadah", "Pusat notifikasi", "Cache terenkripsi dan offline outbox"],
  },
];

const androidAssurancePoints = [
  {
    title: "Wali tidak perlu bertanya satu per satu.",
    text: "Profil, hafalan, murojaah, kitab, pelanggaran, kesehatan, perizinan, prestasi, tagihan, dan notifikasi tampil sesuai santri yang terhubung dengan akun wali.",
  },
  {
    title: "Aplikasi monitoring, bukan pintu mengubah data pesantren.",
    text: "Data resmi tetap dicatat melalui sistem administrasi. Android menampilkan data kepada pihak yang berhak, sehingga alur pesantren tetap rapi dan tidak bercampur dengan akses wali.",
  },
  {
    title: "Keuangan dan dompet tetap online-first.",
    text: "SPP, donasi, top up, saldo, kantin, settlement, dan status pembayaran divalidasi backend agar ledger, Midtrans, risk rule, dan audit tetap menjadi sumber kebenaran.",
  },
  {
    title: "Tetap berguna saat koneksi lemah.",
    text: "Modul non-keuangan dapat memakai cache lokal terenkripsi dan TTL, sementara pembayaran dan transaksi sensitif tetap meminta koneksi agar tidak terjadi data palsu.",
  },
];

const adminScreens = [
  {
    src: "/dashboard_light.png",
    darkSrc: "/dashboard_dark.png",
    title: "Dashboard Operasional",
    text: "Ringkasan santri, kas, kegiatan, grafik arus kas, serta peringatan global seperti tunggakan SPP dan kesehatan.",
  },
  {
    src: "/santri.png",
    title: "Data Santri EMIS",
    text: "Registrasi EMIS lengkap, akun wali otomatis, validasi NIK/KK, geocode, peta, QR identitas, profil, dan ekspor Excel aman.",
  },
  {
    src: "/tagihan.png",
    title: "Keuangan & SPP",
    text: "Tagihan, pembayaran manual, Midtrans, infaq/wakaf/shadaqah/donasi, pengeluaran, status transaksi, dan export Excel multi-sheet.",
  },
  {
    src: "/log-keuangan.png",
    title: "Buku Besar Keuangan",
    text: "Riwayat transaksi permanen berlabel Audit Locked dengan tanggal Masehi/Hijriah, pencatat, metode, nominal, status, dan order ID.",
  },
  {
    src: "/scanqr.png",
    title: "Scan QR",
    text: "Pemindaian kartu santri, diklat/pasaran, dan validasi tagihan untuk kerja lapangan yang cepat.",
  },
  {
    src: "/Ai-fitur.png",
    title: "AI Intelligence Suite",
    text: "Analysis, AI Agent dengan konfirmasi manual, RAG Decision, knowledge base, query log, serta laporan Excel/PDF dari bahasa natural.",
  },
];

const adminFeatureGroups = [
  {
    title: "Data Induk & EMIS",
    icon: UsersRound,
    items: ["Registrasi EMIS lengkap", "Akun wali otomatis", "Validasi NIK/KK dan data keluarga", "Geocode dan peta persebaran", "QR identitas", "Ekspor Excel EMIS via backend"],
  },
  {
    title: "Kesantrian & Akademik",
    icon: BookOpenCheck,
    items: ["Pelanggaran dan poin pembinaan", "Perizinan dan status kembali", "Kesehatan UKS", "Ziyadah Tahfidz", "Murojaah", "Hafalan kitab", "Ulangan mingguan", "Laporan nilai"],
  },
  {
    title: "Keuangan & Dompet",
    icon: WalletCards,
    items: ["Tagihan dan SPP", "Buku besar Audit Locked", "Pengeluaran dan bukti", "Infaq/wakaf/shadaqah/donasi", "Dompet Santri ledger-first", "Kantin merchant dan outlet", "Settlement merchant", "Dispute, risk event, rekonsiliasi"],
  },
  {
    title: "Operasional Pesantren",
    icon: MonitorCheck,
    items: ["Profil pesantren dan struktur", "Manajemen admin dan role", "Batas gender/jurusan", "Diklat dan pasaran", "Inventaris aset", "Informasi dan berita", "Notifikasi push", "Log aktivitas"],
  },
  {
    title: "Alumni & Komunitas",
    icon: Network,
    items: ["Manajemen data alumni", "Forum alumni", "Moderasi dan laporan konten", "Monitoring metadata chat", "E2EE tanpa akses isi pesan"],
  },
  {
    title: "AI, Audit, Backend",
    icon: ShieldCheck,
    items: ["AI Analysis", "AI Agent wajib konfirmasi", "RAG Decision role tertentu", "Laporan Excel/PDF", "Audit aktivitas", "Audit keamanan Dompet", "Backend Command Center", "Private audit dan safe repair"],
  },
];

const adminWorkflowCards = [
  {
    title: "EMIS dari input sampai laporan",
    icon: FileSpreadsheet,
    text: "Kesantrian mengisi biodata lengkap, sistem memvalidasi data penting, membuat akun wali, memproses geocode, menampilkan kesiapan EMIS, lalu mengekspor Excel lewat jalur backend yang tercatat.",
  },
  {
    title: "Keuangan tidak bergantung screenshot",
    icon: WalletCards,
    text: "Bendahara melihat tagihan, pembayaran manual, Midtrans, donasi, pengeluaran, dan buku besar Audit Locked. Status digital mengikuti webhook, bukan bukti kiriman WhatsApp.",
  },
  {
    title: "Dompet Santri diawasi seperti sistem finansial",
    icon: ShieldCheck,
    text: "Saldo berubah lewat ledger, bukan edit angka. Ada QR opaque, limit, device kantin, settlement, dispute, risk event, rekonsiliasi, hash-chain, freeze switch, dan audit keamanan.",
  },
  {
    title: "Super admin punya control tower",
    icon: Database,
    text: "Backend Command Center menampilkan health score, incident, timeline, token FCM, antrean Midtrans, private audit log, rekomendasi, dan safe repair manual untuk masalah operasional.",
  },
];

const technologyStacks = [
  {
    title: "Admin Panel",
    icon: PanelTop,
    text: "React 19, TypeScript, Refine, Ant Design Pro, Vite, Tailwind CSS, Framer Motion, Supabase client, ExcelJS, jsPDF, QR scanner, dan file-saver.",
  },
  {
    title: "Android",
    icon: Smartphone,
    text: "Kotlin, Jetpack Compose, Supabase Auth/PostgREST/Storage/Realtime, Room/DataStore, Ktor CIO, Firebase Cloud Messaging, Android Keystore, AES/GCM, dan E2EE chat.",
  },
  {
    title: "Website",
    icon: Code2,
    text: "Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/Base UI, Framer Motion, lucide-react, dan dukungan dark/light mode.",
  },
  {
    title: "Backend Node.js",
    icon: Server,
    text: "Node.js + TypeScript untuk service layer, integrasi API, reporting, webhook, queue worker, validasi server-side, dan koneksi ke workflow Supabase.",
  },
  {
    title: "Database",
    icon: Database,
    text: "Supabase PostgreSQL, Auth, PostgREST, Storage, Realtime, RLS, secure RPC, private schema, pgcrypto, audit log, ledger append-only, cron, dan Edge Functions.",
  },
];

const stackHighlights = [
  "React 19",
  "Next.js 16",
  "Kotlin",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Supabase",
  "RLS",
  "Edge Functions",
  "E2EE",
  "Excel/PDF",
  "QR Scanner",
];

const heroProofs = [
  "AI Analysis",
  "AI Agent konfirmasi admin",
  "RAG dokumen pesantren",
  "EMIS ready",
  "Android wali dan kantin",
  "Audit dan keamanan berlapis",
];

const whatsappDemoUrl =
  "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20pesantrenPro%20untuk%20%5Bnama%20pesantren%5D";

const whatsappConversationUrl =
  "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20%5Bnama%5D%20dari%20Pondok%20Pesantren%20%5Bnama%5D.%20Kami%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20pesantrenPro.";

const problemCards = [
  {
    title: "Rekap hafalan masih di buku folio.",
    text: "Saat rapat pesantren, datanya harus dicari dulu. Kadang belum ketemu ketika keputusan harus dibuat.",
    icon: FileText,
  },
  {
    title: "Konfirmasi SPP menunggu bendahara.",
    text: "Orang tua santri transfer lewat WhatsApp. Bukti masuk satu per satu, lalu direkap setelah jam kerja.",
    icon: WalletCards,
  },
  {
    title: "Wali santri bertanya berulang.",
    text: "Kondisi anak, hafalan, kesehatan, dan tagihan ditanyakan lewat telepon. Tim pesantren harus menjawab satu per satu.",
    icon: BellRing,
  },
  {
    title: "Data santri tersebar di banyak tempat.",
    text: "File Excel, catatan ustadz, dan buku kepala santri sering tidak sama ketika dibutuhkan.",
    icon: FileSpreadsheet,
  },
];

const proofStats = [
  "Digunakan aktif di Pondok Pesantren Al-Hasanah Cibeuti",
  "Kawalu, Tasikmalaya",
  "Berjalan sejak Januari 2026",
  "Admin panel, Android, wallet, keuangan, hafalan, dan Diklat aktif diuji harian",
];

const faqs = [
  {
    question: "Apakah data santri kami aman?",
    answer:
      "Akses data dibatasi dengan Supabase Auth, relasi wali-santri, RLS, RPC terkontrol, audit, dan cache Android terenkripsi untuk data sensitif. PIN Dompet Santri tidak disimpan sebagai angka asli, melainkan verifier kriptografis.",
  },
  {
    question: "Kami sudah pakai sistem lain. Bisa pindah?",
    answer:
      "Bisa. Data dari sistem lama bisa diimpor lewat Excel atau CSV. Proses migrasi didampingi sampai data siap dipakai.",
  },
  {
    question: "Apakah ada biaya tambahan jika santri bertambah?",
    answer:
      "Tidak ada biaya per santri. Harga flat per bulan mengikuti paket dan modul yang dipilih.",
  },
  {
    question: "Apakah bisa dicoba dulu?",
    answer:
      "Bisa. Demo langsung tersedia secara online. Jika memungkinkan, pembahasan juga bisa dilakukan lewat kunjungan.",
  },
  {
    question: "Siapa yang mengelola jika ada masalah teknis?",
    answer:
      "Developer aktif bisa dihubungi langsung via WhatsApp. Bukan helpdesk korporat yang harus menunggu tiket berhari-hari.",
  },
];

const serviceSegments = [
  {
    title: "Pemetaan Kebutuhan Pesantren",
    text: "Kami mulai dari alur kerja nyata: siapa yang menginput data, siapa yang memverifikasi, siapa yang hanya memantau, dan laporan apa yang wajib keluar.",
    icon: UsersRound,
  },
  {
    title: "Custom Admin Panel & Android",
    text: "Menu, role, branding, modul, website, dan tampilan disesuaikan dengan kebutuhan masing-masing pesantren. Bukan satu bentuk yang dipaksakan untuk semua.",
    icon: PanelTop,
  },
  {
    title: "Integrasi Backend & Database",
    text: "Data, pembayaran, wallet, notifikasi, audit, RLS, RPC aman, dan workflow server-side disusun agar transaksi penting tidak bergantung pada frontend saja.",
    icon: Server,
  },
  {
    title: "Laporan, Export, dan Pendampingan",
    text: "Excel, PDF, QR, audit trail, log aktivitas, dokumentasi, dan support pasca implementasi disiapkan agar sistem benar-benar bisa dipakai harian.",
    icon: LifeBuoy,
  },
];

const implementationSteps = [
  {
    title: "Assessment",
    text: "Membaca struktur pesantren, role operasional, data santri, kebutuhan EMIS, keuangan, dan kebiasaan kerja yang sudah berjalan.",
  },
  {
    title: "Desain Alur",
    text: "Menentukan modul aktif, hak akses, struktur laporan, branding, dan batas keamanan sebelum implementasi fitur dilakukan.",
  },
  {
    title: "Development",
    text: "Membangun admin panel, Android, website, backend Node.js, database PostgreSQL, integrasi Supabase, export, QR, dan notifikasi.",
  },
  {
    title: "Testing & Training",
    text: "Uji data, uji role, uji transaksi, uji export, pelatihan operator, serta review keamanan sebelum sistem dipakai penuh.",
  },
  {
    title: "Go Live & Support",
    text: "Pendampingan saat sistem mulai dipakai, perbaikan alur jika diperlukan, dan pengembangan modul lanjutan sesuai kondisi pesantren.",
  },
];

const bonusWebsiteFeatures = [
  "Website profil pesantren dengan branding resmi",
  "Halaman program, pendaftaran, berita, kontak, dan galeri",
  "Desain responsif dark/light mode sesuai identitas pesantren",
  "Dapat dikembangkan menjadi portal publik yang terhubung ke ekosistem digital",
];

const reportingFeatures = [
  {
    title: "Export Excel Hampir Setiap Modul",
    icon: FileSpreadsheet,
    text: "Data santri EMIS, hafalan, murojaah, pelanggaran, keuangan, buku besar, pengeluaran, inventaris, audit, analisis AI, dan laporan operasional dapat diekspor ke Excel sesuai kebutuhan modul.",
  },
  {
    title: "PDF dan Dokumen Siap Cetak",
    icon: FileText,
    text: "Pengeluaran, inventaris, kartu aset, soal ulangan, katalog aset, laporan pilihan, dan dokumen tertentu dapat dibuat ke PDF untuk arsip resmi atau kebutuhan cetak.",
  },
  {
    title: "Audit dan Log Aktivitas",
    icon: MonitorCheck,
    text: "Audit log, buku besar keuangan, riwayat transaksi, aktivitas admin, dan hasil audit keamanan menjadi bukti kerja yang dapat difilter, diperiksa, dan diekspor.",
  },
  {
    title: "Scan QR Multi Mode",
    icon: QrCode,
    text: "Scan QR mendukung mode santri, diklat/pasaran, tagihan/invoice, input manual, deteksi prefix SANTRI/DIKLAT/INV, anti double-scan, dan verifikasi hasil scan.",
  },
];

const impactMoments = [
  {
    title: "Pagi hari dashboard menjadi pusat kendali.",
    text: "Yang terlihat bukan sekadar angka, tetapi pekerjaan mana yang perlu didahulukan: data santri, tagihan, notifikasi, audit, atau antrian backend.",
  },
  {
    title: "Wali cukup memantau dari Android.",
    text: "Profil, hafalan, pelanggaran, kesehatan, tagihan, donasi, dan dompet tersaji sesuai hak akses tanpa mengubah alur kerja internal pesantren.",
  },
  {
    title: "Saat data dipertanyakan, jejaknya ada.",
    text: "Buku besar, export Excel/PDF, log aktivitas, audit, QR, dan ledger membuat keputusan bisa diperiksa kembali dengan tenang.",
  },
];

const securityControlCards = [
  {
    title: "Android Keystore",
    label: "Device root of trust",
    icon: Smartphone,
    text: "Kunci sensitif dibungkus oleh sistem keamanan perangkat, bukan sekadar disimpan sebagai file biasa di aplikasi.",
  },
  {
    title: "AES/GCM",
    label: "Authenticated encryption",
    icon: LockKeyhole,
    text: "Cache lokal, outbox, dan material sensitif dienkripsi sekaligus divalidasi agar perubahan data tidak diterima diam-diam.",
  },
  {
    title: "Ed25519",
    label: "Wallet signature",
    icon: Fingerprint,
    text: "Operasi Dompet Santri memakai tanda tangan perangkat untuk membantu mencegah request transaksi palsu.",
  },
  {
    title: "Online Authority",
    label: "Backend as source of truth",
    icon: Server,
    text: "Pembayaran, top up, kantin, saldo, settlement, dan status transaksi tetap divalidasi server agar tidak percaya pada data lokal.",
  },
  {
    title: "Argon2id",
    label: "PIN verifier",
    icon: KeyRound,
    text: "PIN Dompet Santri tidak disimpan sebagai angka asli, tetapi sebagai verifier kriptografis dengan salt dan parameter KDF.",
  },
  {
    title: "E2EE Alumni Chat",
    label: "No plaintext server",
    icon: Send,
    text: "Isi chat alumni dirancang terenkripsi end-to-end. Server menyimpan metadata dan ciphertext, bukan isi pesan terbuka.",
  },
  {
    title: "Hash Chain Ledger",
    label: "Tamper-evident finance",
    icon: WalletCards,
    text: "Riwayat Dompet Santri tidak hanya berupa saldo akhir, tetapi ledger yang dapat direkonsiliasi dan diperiksa integritasnya.",
  },
  {
    title: "RBAC + RLS",
    label: "Database access control",
    icon: Database,
    text: "Hak akses mengikuti role pengguna dan relasi data. Wali, alumni, kantin, admin, dan service process tidak berada di ruang akses yang sama.",
  },
  {
    title: "Secure RPC",
    label: "Controlled mutation",
    icon: ShieldCheck,
    text: "Aksi sensitif tidak diserahkan ke UI. Perubahan data penting lewat fungsi backend dengan validasi role, relasi bisnis, dan audit.",
  },
  {
    title: "Edge Functions",
    label: "Secret isolation",
    icon: Server,
    text: "Webhook pembayaran, push notification, wallet, dan proses berisiko berjalan di backend agar secret provider tidak ditanam di aplikasi.",
  },
  {
    title: "Nonce + Idempotency",
    label: "Replay protection",
    icon: QrCode,
    text: "Request transaksi memakai nonce, challenge, expiry, dan idempotency key agar pengulangan request tidak membuat transaksi ganda.",
  },
  {
    title: "Audit Log Permanen",
    label: "Forensic trail",
    icon: MonitorCheck,
    text: "Aktivitas admin dan perubahan finansial meninggalkan jejak yang dapat diperiksa kembali saat terjadi selisih, komplain, atau audit.",
  },
  {
    title: "Backend Command Center",
    label: "Operational monitoring",
    icon: MonitorCheck,
    text: "Health score, diagnostics, incident, repair workflow, reconciliation, dan maintenance membantu masalah backend terdeteksi lebih cepat.",
  },
  {
    title: "AI/RAG Sanitization",
    label: "Safe intelligence",
    icon: Sparkles,
    text: "Data yang masuk ke AI dibatasi dan disanitasi agar fitur analisis tidak menjadi jalur bocor untuk PIN, secret, atau informasi sensitif.",
  },
  {
    title: "FCM Token Binding",
    label: "Notification boundary",
    icon: BellRing,
    text: "Token notifikasi diikat ke user login aktif. Payload chat disamarkan agar push notification tidak membawa isi pesan terbuka.",
  },
  {
    title: "TLS + Pinning",
    label: "Network hardening",
    icon: Globe2,
    text: "Koneksi release memakai HTTPS dan certificate pinning untuk endpoint penting seperti Supabase dan Midtrans.",
  },
];

const customPoints = [
  "Nama aplikasi, logo, warna, ikon, dan tampilan utama dapat mengikuti identitas resmi pesantren.",
  "Kop dokumen, format laporan, istilah menu, dan alur validasi dapat disesuaikan dengan kebijakan pesantren.",
  "Modul dapat diaktifkan, disederhanakan, atau dikembangkan bertahap sesuai kesiapan operasional pesantren.",
  "Role, batas gender/jurusan, struktur akses, dan persetujuan internal dapat dirancang mengikuti tata kelola pesantren.",
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="relative"
    >
      <div className="absolute -inset-x-6 bottom-0 h-28 bg-emerald-900/10 blur-2xl dark:bg-cyan-400/12" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.36, duration: 0.7 }}
        className="absolute -top-7 left-6 z-20 hidden rounded-lg border border-white/70 bg-white/85 px-4 py-3 shadow-xl shadow-emerald-950/10 backdrop-blur-xl dark:border-cyan-300/20 dark:bg-slate-950/86 md:block"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 dark:bg-cyan-300" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-600 dark:bg-cyan-300" />
          </span>
          <span className="text-xs font-semibold text-slate-800 dark:text-cyan-100">Operational system online</span>
        </div>
      </motion.div>
      <div className="relative overflow-hidden rounded-lg border border-white/70 bg-white/82 shadow-2xl shadow-emerald-950/18 backdrop-blur-xl dark:border-cyan-300/15 dark:bg-slate-950/86 dark:shadow-cyan-950/35">
        <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-3 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-rose-400" />
            <span className="size-2.5 rounded-full bg-amber-400" />
            <span className="size-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-cyan-200">
            admin-panel.live
          </div>
        </div>

        <div className="relative">
          <Image
            src="/dashboard_light.png"
            alt="Dashboard admin panel pesantrenPro mode terang"
            width={1368}
            height={743}
            priority
            className="block h-auto w-full dark:hidden"
          />
          <Image
            src="/dashboard_dark.png"
            alt="Dashboard admin panel pesantrenPro mode gelap"
            width={1368}
            height={743}
            priority
            className="hidden h-auto w-full dark:block"
          />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.6 }}
            className="absolute bottom-4 left-4 hidden max-w-xs rounded-lg border border-white/65 bg-white/88 p-4 shadow-xl backdrop-blur-xl dark:border-cyan-300/20 dark:bg-slate-950/84 md:block"
          >
            <p className="text-xs font-medium uppercase text-emerald-700 dark:text-cyan-300">Admin Panel</p>
            <p className="mt-1 text-sm font-semibold">Dashboard, santri, tagihan, audit, AI, dan scan QR dalam satu workspace.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.72, duration: 0.6 }}
            className="absolute right-4 top-4 hidden rounded-lg border border-cyan-300/20 bg-slate-950/88 p-3 text-white shadow-xl backdrop-blur-xl lg:block"
          >
            {["RLS active", "Audit locked", "AI sanitized"].map((item) => (
              <div key={item} className="mb-2 flex items-center gap-2 text-xs last:mb-0">
                <Check className="size-3.5 text-cyan-300" />
                {item}
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.86, duration: 0.6 }}
            className="absolute bottom-4 right-4 hidden rounded-lg border border-emerald-900/10 bg-white/90 p-3 shadow-xl backdrop-blur-xl dark:border-cyan-300/20 dark:bg-slate-950/84 lg:block"
          >
            <p className="font-mono text-[11px] uppercase text-slate-500 dark:text-slate-400">stack runtime</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["React", "Kotlin", "Node", "Postgres"].map((item) => (
                <span key={item} className="rounded-md bg-emerald-950 px-2 py-1 text-[11px] font-medium text-white dark:bg-cyan-300 dark:text-slate-950">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceBridge() {
  return (
    <section className="relative bg-[#f3efe5] py-20 dark:bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-900/20 to-transparent dark:via-cyan-300/25" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase text-emerald-800 dark:text-cyan-300">Rasanya saat dipakai</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-6xl dark:text-white">
              Tenang untuk pimpinan. Cepat untuk operator. Jelas untuk wali.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-xl leading-9 text-slate-700 dark:text-slate-300">
              Sistem ini tidak dibuat untuk memamerkan menu sebanyak mungkin. Ia dirancang sebagai pusat kendali yang rapi, bisa diaudit, dan tetap mengikuti kebiasaan kerja pesantren.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-4 lg:grid-cols-3"
        >
          {impactMoments.map((moment, index) => (
            <motion.article
              key={moment.title}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className={`rounded-lg border border-emerald-900/10 bg-white p-6 shadow-sm dark:border-cyan-300/15 dark:bg-slate-900 ${
                index === 1 ? "lg:translate-y-8" : ""
              }`}
            >
              <span className="mb-7 flex size-9 items-center justify-center rounded-lg bg-emerald-950 font-mono text-sm text-white dark:bg-cyan-300 dark:text-slate-950">
                0{index + 1}
              </span>
              <h3 className="text-xl font-semibold leading-7">{moment.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{moment.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceDepthSection() {
  return (
    <section id="layanan" className="relative bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <Badge variant="outline" className="mb-4 border-emerald-700/25 text-emerald-900 dark:border-cyan-300/25 dark:text-cyan-100">
              <Wrench className="size-3" />
              Layanan implementasi
            </Badge>
            <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
              Tidak hanya membuat aplikasi. Sistem dibentuk mengikuti cara pesantren bekerja.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            Referensi sistem, dokumen, screenshot, dan kebutuhan pesantren dibaca sebagai bahan desain. Dari sana fitur disusun menjadi paket yang jelas: admin panel, Android, website, backend, database, export, QR, audit, dan support.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {serviceSegments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <motion.article
                key={segment.title}
                variants={fadeUp}
                transition={{ duration: 0.58 }}
                className={`rounded-lg border border-slate-200 bg-[#f7f3ea] p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70 ${
                  index === 1 || index === 3 ? "lg:translate-y-8" : ""
                }`}
              >
                <div className="mb-8 flex size-12 items-center justify-center rounded-lg bg-emerald-950 text-white dark:bg-cyan-300 dark:text-slate-950">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-semibold leading-7">{segment.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{segment.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ImplementationProcessSection() {
  return (
    <section id="proses" className="relative overflow-hidden bg-[#f3efe5] py-24 dark:bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,78,59,0.08)_1px,transparent_1px)] bg-[size:92px_92px] dark:bg-[linear-gradient(90deg,rgba(34,211,238,0.10)_1px,transparent_1px)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Badge className="mb-4 bg-emerald-950 text-white dark:bg-cyan-300 dark:text-slate-950">
            <Layers3 className="size-3" />
            Alur kerja proyek
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            Dari diskusi awal sampai sistem berjalan, setiap tahap dibuat jelas.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Pesantren tidak perlu menebak prosesnya. Setiap tahap punya keluaran yang jelas agar implementasi tidak berhenti sebagai demo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-5">
          {implementationSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <article className="relative min-h-full rounded-lg border border-emerald-900/10 bg-white p-5 shadow-sm dark:border-cyan-300/15 dark:bg-slate-900">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-sm text-emerald-800 dark:text-cyan-300">0{index + 1}</span>
                  {index < implementationSteps.length - 1 ? (
                    <span className="hidden h-px w-10 bg-emerald-900/20 dark:bg-cyan-300/25 lg:block" />
                  ) : null}
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AndroidShowcaseSection() {
  return (
    <section id="android" className="bg-[#eef4ef] py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <Reveal>
            <Badge className="mb-4 bg-emerald-950 text-white dark:bg-cyan-300 dark:text-slate-950">
              <Smartphone className="size-3" />
              Android experience
            </Badge>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
              Satu aplikasi Android untuk wali, alumni, kantin, donatur, dan layanan publik pesantren.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Wali memantau perkembangan santri tanpa mengubah data administrasi. Alumni punya ruang komunitas yang termoderasi. Kantin memproses transaksi Dompet Santri melalui perangkat terdaftar. Pengguna umum tetap mendapat manfaat dari Al-Qur&apos;an digital, jadwal sholat, cuaca, arah kiblat, hadis, berita, donasi, dan Tanya AI.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Monitoring santri lengkap: profil, hafalan, murojaah, kitab, disiplin, kesehatan, izin, prestasi",
                "Pembayaran SPP, donasi, top up Dompet Santri, PIN, limit, approval, dan dispute",
                "Layanan publik Islami: Al-Qur'an, audio murottal, jadwal sholat, cuaca, kiblat, hadis, kalender, kitab",
                "Alumni, forum, chat E2EE, direct reply, notifikasi resmi, kantin QR/NFC, dan cache terenkripsi",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-emerald-900/10 bg-white/70 px-4 py-3 text-sm font-medium shadow-sm dark:border-cyan-300/15 dark:bg-slate-900">
                  <Check className="size-4 shrink-0 text-emerald-800 dark:text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
            <Button
              render={<Link href="/android" />}
              nativeButton={false}
              className="mt-6 bg-emerald-950 text-white hover:bg-emerald-900 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              Baca Detail Android
              <ArrowRight className="size-4" />
            </Button>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {screenshots.map((shot, index) => (
              <motion.article
                key={shot.title}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className={index % 2 ? "pt-10" : ""}
              >
                <div className="overflow-hidden rounded-lg border border-white/80 bg-white p-2 shadow-2xl shadow-emerald-950/12 dark:border-slate-800 dark:bg-slate-900 dark:shadow-cyan-950/25">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-md bg-slate-100 dark:bg-slate-950">
                    <Image src={shot.src} alt={`${shot.title} pesantrenPro`} fill className="object-cover" sizes="(min-width: 1024px) 18vw, 45vw" />
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className={`size-2 rounded-full ${shot.color}`} />
                  <p className="text-sm font-semibold">{shot.title}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {androidAssurancePoints.map((point, index) => (
            <motion.article
              key={point.title}
              variants={fadeUp}
              transition={{ duration: 0.58 }}
              className={`rounded-lg border border-emerald-900/10 bg-white/82 p-5 shadow-sm backdrop-blur dark:border-cyan-300/15 dark:bg-slate-900/80 ${
                index === 1 || index === 3 ? "lg:translate-y-6" : ""
              }`}
            >
              <span className="mb-6 flex size-9 items-center justify-center rounded-lg bg-emerald-950 font-mono text-sm text-white dark:bg-cyan-300 dark:text-slate-950">
                0{index + 1}
              </span>
              <h3 className="text-lg font-semibold leading-7">{point.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{point.text}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5"
        >
          {androidFeatureGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                variants={fadeUp}
                transition={{ duration: 0.58 }}
                className="rounded-lg border border-emerald-900/10 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-cyan-300/15 dark:bg-slate-900/80"
              >
                <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-emerald-950 text-white dark:bg-cyan-300 dark:text-slate-950">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="mt-4 grid gap-2">
                  {group.items.map((feature) => (
                    <div key={feature} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-800 dark:text-cyan-300" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function AdminPanelShowcase() {
  return (
    <section id="admin-panel" className="relative bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(16,185,129,0.16),transparent_38%,rgba(14,165,233,0.15)_78%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <Badge className="mb-5 border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
              <PanelTop className="size-3" />
              Admin panel operasional
            </Badge>
            <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              Ruang kerja pesantren yang mengikat data, uang, audit, dan keputusan.
            </h2>
          </div>
          <p className="text-xl leading-9 text-slate-300">
            Admin Panel tidak berhenti sebagai tempat input data. Ia mengatur hak akses, memvalidasi EMIS, menjaga buku besar, mengawasi Dompet Santri, mengirim notifikasi Android, membantu AI/RAG, dan memberi super admin pusat kontrol backend.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {adminWorkflowCards.map((workflow, index) => {
            const Icon = workflow.icon;
            return (
              <motion.article
                key={workflow.title}
                variants={fadeUp}
                transition={{ duration: 0.58 }}
                className="group min-h-full rounded-lg border border-cyan-300/15 bg-white/[0.07] p-5 shadow-xl shadow-cyan-950/20 backdrop-blur transition-colors hover:border-cyan-300/35 hover:bg-white/[0.10]"
              >
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-cyan-300 text-slate-950 transition-transform group-hover:scale-105">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-cyan-200">0{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold leading-7 text-white">{workflow.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{workflow.text}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 flex snap-x gap-4 overflow-x-auto pb-4 md:grid md:overflow-visible md:pb-0 lg:grid-cols-3"
        >
          {adminScreens.map((screen, index) => (
            <motion.article
              key={screen.title}
              variants={fadeUp}
              transition={{ duration: 0.62 }}
              whileHover={{ y: -7 }}
              className={`min-w-[86vw] snap-center sm:min-w-[68vw] md:min-w-0 ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className="overflow-hidden rounded-lg border border-white/10 bg-white/8 shadow-2xl shadow-cyan-950/25 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-rose-400" />
                    <span className="size-2 rounded-full bg-amber-400" />
                    <span className="size-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[11px] text-cyan-200">{screen.title.toLowerCase().replaceAll(" ", ".")}</span>
                </div>
                <div className="relative aspect-[1368/743] bg-slate-900">
                  {screen.darkSrc ? (
                    <>
                      <Image src={screen.src} alt={`${screen.title} mode terang`} fill className="object-cover dark:hidden" sizes="(min-width: 1024px) 60vw, 100vw" />
                      <Image src={screen.darkSrc} alt={`${screen.title} mode gelap`} fill className="hidden object-cover dark:block" sizes="(min-width: 1024px) 60vw, 100vw" />
                    </>
                  ) : (
                    <Image src={screen.src} alt={`${screen.title} admin panel`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                  )}
                </div>
              </div>
              <div className="mt-4 max-w-xl">
                <h3 className="text-xl font-semibold">{screen.title}</h3>
                <p className="mt-2 leading-7 text-slate-300">{screen.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="mt-16 max-w-4xl">
          <div className="border-l-2 border-cyan-300 pl-6">
            <p className="text-2xl font-medium leading-10 text-white">
              Setiap tombol boleh terlihat sederhana di layar, tetapi di belakangnya ada role, validasi, audit, ledger, webhook, RLS, dan batasan keamanan yang menjaga kerja pesantren tetap tertib.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                render={<Link href="/admin-panel" />}
                nativeButton={false}
                className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
              >
                Baca Detail Admin Panel
                <ArrowRight className="size-4" />
              </Button>
              <Button
                render={<Link href="/workflow-pengguna" />}
                nativeButton={false}
                variant="outline"
                className="border-cyan-300/25 bg-transparent text-cyan-100 hover:bg-cyan-300/10"
              >
                Lihat Workflow
              </Button>
            </div>
          </div>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {adminFeatureGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                variants={fadeUp}
                transition={{ duration: 0.56 }}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-cyan-300 text-slate-950">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <div className="grid gap-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="size-3.5 text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TechnologyStackSection() {
  return (
    <section id="stack" className="relative overflow-hidden bg-[#07110f] py-28 text-white dark:bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.09)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(16,185,129,0.28),transparent_32%),radial-gradient(circle_at_80%_25%,rgba(34,211,238,0.18),transparent_34%),linear-gradient(180deg,rgba(7,17,15,0.10),#07110f)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <Badge className="mb-5 border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
              <Code2 className="size-3" />
              Premium technology stack
            </Badge>
            <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              Stack teknologi yang langsung terasa serius sejak pertama dilihat.
            </h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-slate-300">
              Admin panel, Android, website, backend Node.js, dan database tidak berjalan sendiri-sendiri. Semuanya disusun sebagai satu arsitektur yang saling mengunci: cepat di UI, kuat di backend, dan ketat di data.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {stackHighlights.map((item) => (
                <span key={item} className="rounded-md border border-cyan-300/20 bg-white/8 px-3 py-1.5 font-mono text-xs text-cyan-100 backdrop-blur">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/0 via-cyan-300/45 to-cyan-300/0 lg:block" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-5 lg:grid-cols-5"
          >
            {technologyStacks.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <motion.article
                  key={stack.title}
                  variants={fadeUp}
                  transition={{ duration: 0.58 }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className={`relative rounded-lg border border-white/12 bg-white/[0.075] p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl ${
                    index % 2 ? "lg:mt-16" : ""
                  }`}
                >
                  <div className="absolute -top-3 left-5 rounded-md border border-cyan-300/25 bg-slate-950 px-2 py-1 font-mono text-[10px] text-cyan-200">
                    layer 0{index + 1}
                  </div>
                  <div className="mb-7 flex size-12 items-center justify-center rounded-lg bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/20">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{stack.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{stack.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ReportingExportSection() {
  return (
    <section id="export" className="relative overflow-hidden bg-[#eef4ef] py-24 dark:bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,78,59,0.10),transparent_40%,rgba(14,165,233,0.08))] dark:bg-[linear-gradient(135deg,rgba(34,211,238,0.12),transparent_42%,rgba(16,185,129,0.08))]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-8">
        <Reveal>
          <Badge className="mb-4 bg-emerald-950 text-white dark:bg-cyan-300 dark:text-slate-950">
            <FileSpreadsheet className="size-3" />
            Export, audit, dan QR
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            Ketika rapat, audit, atau pemeriksaan datang, datanya sudah siap dibawa.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Excel untuk rekap, PDF untuk arsip, audit trail untuk pembuktian, dan QR untuk kerja cepat di lapangan. Fitur ini dibuat agar data tidak hanya bagus dilihat, tetapi juga berguna saat dibutuhkan.
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-emerald-900/10 bg-white shadow-xl shadow-emerald-950/10 dark:border-cyan-300/15 dark:bg-slate-900">
            <div className="relative aspect-[1368/743] bg-slate-100 dark:bg-slate-950">
              <Image src="/scanqr.png" alt="Fitur scan QR admin panel" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
          </div>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid content-start gap-4 sm:grid-cols-2"
        >
          {reportingFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                transition={{ duration: 0.58 }}
                className="rounded-lg border border-emerald-900/10 bg-white/88 p-5 shadow-sm backdrop-blur dark:border-cyan-300/15 dark:bg-slate-900/88"
              >
                <div className="mb-5 flex size-11 items-center justify-center rounded-lg bg-emerald-950 text-white dark:bg-cyan-300 dark:text-slate-950">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{feature.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function BonusWebsiteSection() {
  return (
    <section id="bonus-website" className="relative overflow-hidden bg-white py-24 dark:bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(6,78,59,0.10),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(14,165,233,0.10),transparent_30%)] dark:bg-[radial-gradient(circle_at_16%_20%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(16,185,129,0.10),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <Reveal>
          <Badge className="mb-5 bg-emerald-950 text-white dark:bg-cyan-300 dark:text-slate-950">
            <Gift className="size-3" />
            Bonus unggulan
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
            Paket implementasi dapat dilengkapi dengan website resmi pesantren.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Website publik menjadi wajah pertama bagi calon wali santri, alumni, dan masyarakat. Kehadirannya membuat ekosistem digital tidak hanya kuat di internal, tetapi juga rapi saat dilihat dari luar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#kontak" />}
              nativeButton={false}
              size="lg"
              className="h-12 bg-emerald-950 px-5 text-white shadow-xl shadow-emerald-950/15 hover:bg-emerald-900 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              Klaim Bonus Website
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-lg border border-emerald-900/10 bg-[#f3efe5] p-4 shadow-2xl shadow-emerald-950/10 dark:border-cyan-300/15 dark:bg-slate-950">
            <div className="mb-4 flex items-center justify-between rounded-md border border-white/70 bg-white/75 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-emerald-950 text-white dark:bg-cyan-300 dark:text-slate-950">
                  <Globe2 className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">Website Pesantren Custom</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Termasuk dalam paket implementasi awal</p>
                </div>
              </div>
              <Badge className="bg-emerald-100 text-emerald-900 dark:bg-cyan-300/15 dark:text-cyan-100">Bonus</Badge>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {bonusWebsiteFeatures.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-md border border-white/70 bg-white/75 p-4 dark:border-slate-800 dark:bg-slate-900">
                  <Check className="mt-1 size-4 shrink-0 text-emerald-800 dark:text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="masalah" className="relative bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4 border-emerald-700/25 text-emerald-900 dark:border-cyan-300/25 dark:text-cyan-100">
            Sebelum ada sistem
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            Ini yang biasanya terjadi sebelum data pesantren rapi.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Masalahnya bukan kurang teliti. Sering kali alat kerjanya memang belum menyatu.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-4 md:grid-cols-2"
        >
          {problemCards.map((problem) => {
            const Icon = problem.icon;
            return (
              <motion.article
                key={problem.title}
                variants={fadeUp}
                className="rounded-lg border border-emerald-900/10 bg-[#f3efe5] p-6 shadow-sm dark:border-cyan-300/15 dark:bg-slate-950"
              >
                <span className="mb-6 flex size-11 items-center justify-center rounded-lg bg-emerald-950 text-white dark:bg-cyan-300 dark:text-slate-950">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-2xl font-semibold leading-8">{problem.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{problem.text}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <Reveal delay={0.08}>
          <div className="mt-10 rounded-lg border border-emerald-900/10 bg-emerald-950 p-6 text-white shadow-xl shadow-emerald-950/10 dark:border-cyan-300/15 dark:bg-cyan-950">
            <p className="mx-auto max-w-3xl text-center text-xl font-semibold leading-8">
              pesantrenPro menyatukan semuanya. Bukan dengan menambah beban kerja, tapi dengan menggantikan cara lama yang melelahkan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section id="bukti" className="bg-[#f3efe5] py-24 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <Reveal>
          <Badge className="mb-4 bg-emerald-950 text-white dark:bg-cyan-300 dark:text-slate-950">
            Bukti penggunaan
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            Sudah dipakai dari kebutuhan nyata pesantren.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Sistem ini lahir dari pekerjaan harian yang perlu dibuat lebih tertib, bukan dari asumsi vendor yang jauh dari lapangan.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <figure className="rounded-lg border border-emerald-900/10 bg-white p-6 shadow-xl shadow-emerald-950/10 dark:border-cyan-300/15 dark:bg-slate-900">
            <blockquote className="text-2xl font-semibold leading-9 text-slate-950 dark:text-white">
              &ldquo;Sistem ini membuat rekap Diklat yang biasanya 3 hari selesai jauh lebih cepat dan mudah diperiksa.&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:text-slate-300">
              Pondok Pesantren Al-Hasanah Cibeuti, Kawalu, Tasikmalaya.
            </figcaption>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {proofStats.map((stat) => (
                <div key={stat} className="rounded-md bg-[#f3efe5] px-4 py-3 text-sm font-medium text-slate-700 dark:bg-slate-950 dark:text-slate-300">
                  {stat}
                </div>
              ))}
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function DeveloperSection() {
  return (
    <section id="developer" className="bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-lg border border-emerald-900/10 bg-[#f3efe5] p-5 shadow-xl shadow-emerald-950/10 dark:border-cyan-300/15 dark:bg-slate-950">
            <div className="aspect-[4/5] rounded-lg bg-[linear-gradient(145deg,rgba(6,78,59,0.95),rgba(20,83,45,0.72)),url('/dashboard_light.png')] bg-cover bg-center p-6 text-white">
              <div className="flex h-full flex-col justify-end">
                <p className="text-sm text-emerald-50/80">Developer pesantrenPro</p>
                <h3 className="mt-2 text-3xl font-semibold">Nurdin Ramadhan</h3>
                <p className="mt-3 max-w-sm leading-7 text-emerald-50/90">
                  Santri aktif Pondok Pesantren Al-Hasanah Cibeuti, Tasikmalaya.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Badge variant="outline" className="mb-4 border-emerald-700/25 text-emerald-900 dark:border-cyan-300/25 dark:text-cyan-100">
            Tentang developer
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            Dibangun oleh santri, untuk pesantren.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            <p>
              pesantrenPro dikembangkan oleh Nurdin Ramadhan, santri aktif di Pondok Pesantren Al-Hasanah Cibeuti, Tasikmalaya.
            </p>
            <p>
              Sistem ini lahir dari kebutuhan nyata yang dirasakan sehari-hari. Bukan dari survei pasar atau asumsi vendor IT.
            </p>
            <p>
              Setiap fitur diuji langsung dalam kegiatan pesantren. Dari Diklat Dzulhijjah sampai rekap hafalan mingguan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="harga" className="bg-[#f3efe5] py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Badge className="mb-4 bg-emerald-950 text-white dark:bg-cyan-300 dark:text-slate-950">
            Sinyal biaya
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            Implementasi yang masuk akal untuk pesantren.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Biaya langganan bulanan pesantrenPro dirancang lebih kecil dari gaji satu staf administrasi, tetapi membantu pekerjaan yang biasanya membutuhkan 2-3 orang.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Harga menyesuaikan ukuran pesantren dan modul yang diaktifkan. Diskusi dimulai tanpa komitmen.
          </p>
          <Button
            render={<a href={whatsappDemoUrl} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="mt-8 h-12 bg-emerald-950 px-5 text-white shadow-xl shadow-emerald-950/15 hover:bg-emerald-900 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
          >
            Tanya Harga via WhatsApp
            <Send className="size-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Badge variant="outline" className="mb-4 border-emerald-700/25 text-emerald-900 dark:border-cyan-300/25 dark:text-cyan-100">
            Pertanyaan umum
          </Badge>
          <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
            Hal yang biasanya ditanyakan pesantren.
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-slate-200 rounded-lg border border-emerald-900/10 bg-[#f3efe5] dark:divide-slate-800 dark:border-cyan-300/15 dark:bg-slate-950">
          {faqs.map((faq) => (
            <Reveal key={faq.question}>
              <article className="p-6">
                <h3 className="text-xl font-semibold leading-7">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LandingPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.28], [0, -80]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f3efe5] text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-900/10 bg-[#f3efe5]/78 backdrop-blur-2xl dark:border-cyan-300/15 dark:bg-slate-950/76">
        <div className="border-b border-emerald-900/10 bg-emerald-950 text-white dark:border-cyan-300/15 dark:bg-cyan-950">
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-center px-4 text-xs font-medium sm:justify-between sm:px-6 lg:px-8">
            <span className="hidden text-emerald-50/80 sm:inline">Konsultasi implementasi sistem pesantren custom</span>
            <a href="https://wa.me/6281804886112" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-emerald-100">
              <Send className="size-3.5" />
              Diskusi via WhatsApp 081804886112
            </a>
          </div>
        </div>
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="pesantrenPro">
            <span className="flex size-10 items-center justify-center overflow-hidden rounded-lg border border-emerald-900/10 bg-white shadow-sm dark:border-cyan-300/20 dark:bg-slate-900">
              <Image src="/pesantrenpro-mark.svg" alt="" width={40} height={40} className="size-10" priority />
            </span>
            <span className="text-lg font-semibold tracking-normal">pesantrenPro</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 dark:text-slate-300 md:flex">
            {[
              ["Masalah", "#masalah"],
              ["Ekosistem", "#ekosistem"],
              ["Android", "/android"],
              ["Keamanan", "/keamanan-sistem"],
              ["Workflow", "/workflow-pengguna"],
              ["Bukti", "#bukti"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="transition-colors hover:text-emerald-800 dark:hover:text-cyan-200">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              render={<a href={whatsappConversationUrl} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              className="hidden bg-emerald-950 text-white shadow-lg shadow-emerald-950/15 hover:bg-emerald-900 dark:bg-cyan-300 dark:text-slate-950 dark:shadow-cyan-300/10 dark:hover:bg-cyan-200 sm:inline-flex"
            >
              WhatsApp
              <Send className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(6,78,59,0.20),transparent_34%,rgba(180,130,40,0.18)_68%,transparent),radial-gradient(circle_at_78%_18%,rgba(14,165,233,0.16),transparent_30%)] dark:bg-[linear-gradient(115deg,rgba(34,211,238,0.16),transparent_38%,rgba(16,185,129,0.12)_74%,transparent),radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.18),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.38] [background-image:linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] [background-size:44px_44px] dark:opacity-[0.24] dark:[background-image:linear-gradient(rgba(34,211,238,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.18)_1px,transparent_1px)]" />
        <div className="absolute left-1/2 top-24 hidden h-20 w-[min(920px,70vw)] -translate-x-1/2 rounded-full bg-white/30 blur-3xl dark:bg-cyan-300/10 lg:block" />
        <motion.div
          style={{ y: heroY }}
          className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8"
        >
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.div variants={fadeUp} transition={{ duration: 0.65 }}>
              <Badge className="mb-5 border-emerald-800/20 bg-white/72 text-emerald-950 shadow-sm backdrop-blur dark:border-cyan-300/25 dark:bg-cyan-300/10 dark:text-cyan-100">
                <Sparkles className="size-3" />
                Sistem pesantren terpadu dengan AI operasional
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl text-[32px] font-semibold leading-[1.14] tracking-normal text-slate-950 sm:text-5xl lg:text-[56px] dark:text-white"
            >
              Transformasi digital pesantren dalam satu ekosistem: Admin Panel, Android, dan AI yang memahami ritme operasionalnya.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9 dark:text-slate-300"
            >
              pesantrenPro menyatukan Admin Panel, Android wali, Dompet Santri, keuangan, EMIS, hafalan, notifikasi, laporan, dan audit. AI Analysis membantu membaca kondisi santri dan operasional, AI Agent menyiapkan aksi dengan konfirmasi admin, sementara RAG menjawab dari dokumen dan knowledge base pesantren.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7 flex max-w-3xl flex-wrap gap-2">
              {heroProofs.map((proof) => (
                <div key={proof} className="rounded-lg border border-white/70 bg-white/62 px-3 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur dark:border-cyan-300/15 dark:bg-slate-950/50 dark:text-cyan-100">
                  {proof}
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="#admin-panel" />}
                nativeButton={false}
                size="lg"
                className="h-12 bg-emerald-950 px-5 text-white shadow-xl shadow-emerald-950/18 hover:bg-emerald-900 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Lihat Sistem Berbasis AI
                <ArrowRight className="size-4" />
              </Button>
              <Button
                render={<a href={whatsappDemoUrl} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-12 border-emerald-900/18 bg-white/70 px-5 text-emerald-950 shadow-sm backdrop-blur hover:bg-white dark:border-cyan-300/28 dark:bg-slate-950/56 dark:text-cyan-100 dark:hover:bg-slate-900"
              >
                Hubungi Langsung
              </Button>
            </motion.div>
          </motion.div>

          <DashboardMockup />
        </motion.div>
      </section>

      <ProblemSection />

      <section id="ekosistem" className="relative bg-white py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-emerald-700/25 text-emerald-900 dark:border-cyan-300/25 dark:text-cyan-100">
              <Layers3 className="size-3" />
              Satu ekosistem
            </Badge>
            <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
              Modulnya banyak, tetapi alurnya tetap terasa satu.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Admin bekerja dari panel, wali memantau dari Android, alumni memiliki ruang komunitas, kantin bertransaksi, dan backend menjaga audit serta validasi di belakang layar.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {ecosystem.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.62 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition-colors hover:border-emerald-700/25 hover:bg-white dark:border-slate-800 dark:bg-slate-950/62 dark:hover:border-cyan-300/30 dark:hover:bg-slate-950"
                >
                  <div className="mb-8 flex size-12 items-center justify-center rounded-lg bg-emerald-950 text-white transition-transform group-hover:scale-105 dark:bg-cyan-300 dark:text-slate-950">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{item.text}</p>
                </motion.article>
              );
            })}
          </motion.div>

          <Reveal className="mt-12 overflow-hidden rounded-lg border border-slate-200 bg-[#f7f3ea] p-4 dark:border-slate-800 dark:bg-slate-950/70">
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {modules.map((module, index) => (
                <motion.div
                  key={module}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.025 }}
                  className="rounded-md border border-white/70 bg-white/75 px-3 py-3 text-sm font-medium text-slate-800 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                >
                  {module}
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <AdminPanelShowcase />
      <SocialProofSection />

      <AndroidShowcaseSection />

      <section id="keamanan" className="relative overflow-hidden bg-slate-950 pb-16 pt-28 text-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.10)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,182,212,0.18),transparent_42%,rgba(16,185,129,0.10)_74%,transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <Badge className="mb-5 border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
                <LockKeyhole className="size-3" />
                Lapisan keamanan profesional
              </Badge>
              <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
                Keamanan bukan tempelan. Ia menentukan cara sistem mengambil keputusan.
              </h2>
            </div>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Data santri, transaksi, wallet, dan komunikasi alumni tidak diperlakukan sebagai catatan biasa. Setiap area penting punya kontrol yang jelas: kunci perangkat, enkripsi, tanda tangan transaksi, PIN verifier, E2EE, ledger, RLS, RPC, Edge Function, audit, notifikasi aman, dan validasi backend.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {securityControlCards.map((control, index) => {
              const Icon = control.icon;
              return (
                <motion.article
                  key={control.title}
                  variants={fadeUp}
                  transition={{ duration: 0.58 }}
                  className="group flex min-h-[228px] flex-col rounded-lg border border-cyan-300/14 bg-slate-950/86 p-4 shadow-xl shadow-cyan-950/18 backdrop-blur transition-colors hover:border-cyan-300/35 hover:bg-slate-900/92"
                >
                  <div className="mb-4 flex items-center justify-between gap-4 border-b border-cyan-300/12 pb-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/10 transition-transform group-hover:scale-105">
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-md border border-cyan-300/20 bg-cyan-300/8 px-2.5 py-1 font-mono text-[10px] uppercase tracking-normal text-cyan-200">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="font-mono text-[11px] uppercase tracking-normal text-cyan-300">{control.label}</p>
                    <h3 className="mt-2 text-lg font-semibold leading-7 text-white">{control.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{control.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
          <Reveal className="mt-8">
            <Button
              render={<Link href="/keamanan-sistem" />}
              nativeButton={false}
              className="bg-cyan-300 text-slate-950 hover:bg-cyan-200"
            >
              Baca Halaman Keamanan Sistem
              <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <section id="custom" className="bg-white py-24 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <Badge variant="outline" className="mb-4 border-emerald-700/25 text-emerald-900 dark:border-cyan-300/25 dark:text-cyan-100">
                <BadgeCheck className="size-3" />
              Identitas pesantren
            </Badge>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
              Sistem digital yang tampil sebagai milik pesantren Anda.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Saat diterapkan, sistem dapat menyesuaikan nama, logo, warna, istilah menu, format laporan, dokumen, role, dan alur kerja sesuai kebijakan pesantren.
            </p>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-3"
          >
            {customPoints.map((point) => (
              <motion.div
                key={point}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/65"
              >
                <ShieldCheck className="mt-1 size-5 shrink-0 text-emerald-800 dark:text-cyan-300" />
                <p className="leading-7 text-slate-700 dark:text-slate-300">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f3efe5] py-24 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              title: "Operasional Harian",
              icon: UsersRound,
              text: "Dashboard, data santri, EMIS, kesantrian, tahfidz, ulangan, berita, notifikasi, dan laporan untuk operasional harian.",
              href: "/workflow-pengguna",
            },
            {
              title: "Keuangan & Wallet",
              icon: WalletCards,
              text: "Tagihan, transaksi, donasi, Dompet Santri, kantin, settlement, dispute, risk event, dan rekonsiliasi.",
              href: "/dompet-santri",
            },
            {
              title: "Pembelajaran & Layanan",
              icon: BookOpenCheck,
              text: "Hafalan Quran, hafalan kitab, kesehatan, perizinan, alumni, forum, chat E2EE, AI/RAG, dan inventaris.",
              href: "/admin-panel",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="rounded-lg border border-emerald-900/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 dark:border-cyan-400/15 dark:bg-slate-900">
                  <Icon className="mb-6 size-8 text-emerald-800 dark:text-cyan-300" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{item.text}</p>
                  <Link href={item.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950 dark:text-cyan-300 dark:hover:text-cyan-100">
                    Baca detail
                    <ArrowRight className="size-4" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <DeveloperSection />
      <PricingSection />
      <FaqSection />

      <section id="kontak" className="bg-emerald-950 py-24 text-white dark:bg-cyan-950">
        <Reveal className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Badge className="mb-5 bg-white/12 text-white">
              <Network className="size-3" />
              Percakapan awal
            </Badge>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-6xl">
              Mulai dari percakapan, bukan komitmen.
            </h2>
            <p className="mt-5 text-lg leading-8 text-emerald-50/80">
              Tidak perlu langsung memutuskan. Ceritakan kondisi pesantren Anda: berapa santri, sistem apa yang sedang dipakai, dan apa yang paling menyulitkan operasional saat ini.
            </p>
            <p className="mt-4 text-lg leading-8 text-emerald-50/80">
              Dari sana, baru kita lihat apakah pesantrenPro cocok atau tidak.
            </p>
            <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              <a
                href={whatsappConversationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/10 px-5 py-4 text-left shadow-lg shadow-black/10 backdrop-blur transition hover:bg-white/15"
              >
                <p className="text-sm text-emerald-50/70">WhatsApp</p>
                <p className="mt-1 text-lg font-semibold">081804886112</p>
              </a>
              <a
                href="mailto:nurdincrs123@gmail.com"
                className="rounded-lg border border-white/15 bg-white/10 px-5 py-4 text-left shadow-lg shadow-black/10 backdrop-blur transition hover:bg-white/15"
              >
                <p className="text-sm text-emerald-50/70">Email</p>
                <p className="mt-1 text-lg font-semibold">nurdincrs123@gmail.com</p>
              </a>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                render={<a href={whatsappConversationUrl} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                size="lg"
                className="h-12 bg-white px-5 text-emerald-950 shadow-xl shadow-black/15 hover:bg-emerald-50 dark:text-cyan-950"
              >
                Mulai Percakapan via WhatsApp
                <Send className="size-4" />
              </Button>
              <Button
                render={<a href="mailto:nurdincrs123@gmail.com" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-12 border-white/25 bg-transparent px-5 text-white hover:bg-white/10"
              >
                Kirim Email
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-emerald-900/10 bg-[#f3efe5] px-4 py-8 text-sm text-slate-600 dark:border-cyan-400/15 dark:bg-slate-950 dark:text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-slate-800 dark:text-slate-200">pesantrenPro</p>
          <p>Ekosistem digital yang dapat disesuaikan dengan kebijakan pesantren.</p>
        </div>
      </footer>

      <a
        href={whatsappConversationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-lg bg-emerald-950 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-950/25 transition hover:bg-emerald-900 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
      >
        <Send className="size-4" />
        081804886112
      </a>
    </main>
  );
}
