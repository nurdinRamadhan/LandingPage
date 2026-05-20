"use client";

import Image from "next/image";
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
  TerminalSquare,
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
    text: "Pusat kerja pengurus untuk data induk, EMIS, akademik, kesantrian, keuangan, alumni, inventaris, notifikasi, audit, dan AI internal.",
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
    title: "Wali Santri",
    icon: UsersRound,
    items: ["Profil santri", "Hafalan Quran", "Hafalan kitab", "Pelanggaran", "Kesehatan", "Perizinan", "Tagihan dan SPP", "Riwayat notifikasi"],
  },
  {
    title: "Pembayaran & Dompet",
    icon: CreditCard,
    items: ["Pembayaran online", "Donasi", "Top up Dompet Santri", "Aktivasi wallet", "PIN dompet", "Limit transaksi", "Approval transaksi besar", "Dispute wallet"],
  },
  {
    title: "Fitur Publik Islami",
    icon: BookOpenCheck,
    items: ["Al-Qur'an digital", "Daftar surah", "Daftar juz", "Detail ayat", "Terjemahan", "Pencarian surah", "Jadwal sholat", "Berita pesantren"],
  },
  {
    title: "Alumni & Kantin",
    icon: Network,
    items: ["Forum alumni", "Direktori alumni", "Profil alumni", "Chat alumni E2EE", "Notifikasi alumni", "Scan QR/NFC kantin", "Riwayat merchant", "Settlement kantin"],
  },
  {
    title: "Notifikasi & Offline",
    icon: BellRing,
    items: ["Push notification", "Token FCM single-owner", "Queue notifikasi", "Direct reply E2EE", "Offline outbox", "Cache terenkripsi", "Retry saat jaringan pulih"],
  },
];

const adminScreens = [
  {
    src: "/dashboard_light.png",
    darkSrc: "/dashboard_dark.png",
    title: "Dashboard Operasional",
    text: "Ringkasan kondisi pesantren, angka penting, indikator kerja, dan akses cepat untuk pimpinan dan pengurus.",
  },
  {
    src: "/santri.png",
    title: "Data Santri EMIS",
    text: "Biodata santri, akun wali, kesiapan EMIS, geocode, QR identitas, dan ekspor Excel melalui alur backend.",
  },
  {
    src: "/tagihan.png",
    title: "Keuangan & SPP",
    text: "Tagihan santri, pembayaran, Midtrans, status lunas, export Excel, dan riwayat pembayaran.",
  },
  {
    src: "/log-keuangan.png",
    title: "Buku Besar Keuangan",
    text: "Riwayat transaksi permanen berlabel audit locked, sehingga koreksi dilakukan dengan prosedur, bukan hapus jejak.",
  },
  {
    src: "/scanqr.png",
    title: "Scan QR",
    text: "Pemindaian kartu santri, diklat/pasaran, dan validasi tagihan untuk kerja lapangan yang cepat.",
  },
  {
    src: "/Ai-fitur.png",
    title: "AI Intelligence Suite",
    text: "Analysis, AI Agent dengan konfirmasi, RAG Decision, laporan, serta knowledge base internal.",
  },
];

const adminFeatureGroups = [
  {
    title: "Data Induk & EMIS",
    icon: UsersRound,
    items: ["Registrasi santri EMIS", "Akun wali otomatis", "Validasi kesiapan EMIS", "Geocode dan persebaran santri", "QR identitas", "Ekspor Excel EMIS"],
  },
  {
    title: "Kesantrian & Akademik",
    icon: BookOpenCheck,
    items: ["Pelanggaran", "Perizinan", "Kesehatan UKS", "Ziyadah Tahfidz", "Murojaah", "Hafalan kitab", "Ulangan mingguan", "Laporan nilai"],
  },
  {
    title: "Keuangan & Dompet",
    icon: WalletCards,
    items: ["Tagihan dan SPP", "Buku besar keuangan", "Pengeluaran", "Donasi", "Dompet Santri", "Kantin merchant", "Settlement", "Dispute dan rekonsiliasi"],
  },
  {
    title: "Operasional Lembaga",
    icon: MonitorCheck,
    items: ["Profil pesantren", "Manajemen admin", "Diklat dan pasaran", "Inventaris aset", "Informasi dan berita", "Notifikasi push", "Log aktivitas"],
  },
  {
    title: "Alumni & Komunitas",
    icon: Network,
    items: ["Manajemen alumni", "Forum moderation", "Forum reports", "Chat monitoring metadata", "E2EE tanpa akses isi pesan"],
  },
  {
    title: "AI, Audit, Backend",
    icon: ShieldCheck,
    items: ["AI Analysis", "AI Agent konfirmasi manual", "RAG Knowledge Base", "Audit aktivitas", "Dompet security audit", "Backend Command Center"],
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
  "Full custom branding",
  "Admin + Android",
  "PostgreSQL secured",
  "Export Excel/PDF",
];

const serviceSegments = [
  {
    title: "Pemetaan Kebutuhan Pesantren",
    text: "Kami mulai dari alur kerja nyata: siapa yang menginput data, siapa yang memverifikasi, siapa yang hanya memantau, dan laporan apa yang wajib keluar.",
    icon: UsersRound,
  },
  {
    title: "Custom Admin Panel & Android",
    text: "Menu, role, branding, modul, website, dan tampilan disesuaikan dengan pesantren terkait. Bukan sistem satu bentuk yang dipaksakan untuk semua lembaga.",
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
    text: "Membaca struktur pesantren, role pengurus, data santri, kebutuhan EMIS, keuangan, dan kebiasaan kerja yang sudah berjalan.",
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
  "Website profil pesantren dengan branding resmi lembaga",
  "Halaman program, pendaftaran, berita, kontak, dan galeri",
  "Desain responsif dark/light mode sesuai identitas pesantren",
  "Dapat dikembangkan menjadi portal publik yang terhubung ke ekosistem sistem",
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
    title: "Pagi hari pengurus membuka dashboard.",
    text: "Yang terlihat bukan sekadar angka, tetapi pekerjaan mana yang perlu didahulukan: data santri, tagihan, notifikasi, audit, atau antrian backend.",
  },
  {
    title: "Wali cukup memantau dari Android.",
    text: "Profil, hafalan, pelanggaran, kesehatan, tagihan, donasi, dan dompet tersaji sesuai hak akses tanpa mengubah alur kerja pengurus.",
  },
  {
    title: "Saat data dipertanyakan, jejaknya ada.",
    text: "Buku besar, export Excel/PDF, log aktivitas, audit, QR, dan ledger membuat keputusan bisa diperiksa kembali dengan tenang.",
  },
];

const securityLayers = [
  "Role-Based Access Control dan Row Level Security",
  "Secure RPC untuk santri, EMIS, wallet, dan workflow sensitif",
  "Edge Function untuk pembayaran, notifikasi, AI, dan aksi berisiko",
  "Audit log permanen serta ledger append-only untuk transaksi",
  "Chat alumni E2EE: server menyimpan metadata dan ciphertext",
  "Android Keystore, AES/GCM, Ed25519, Argon2id, nonce, idempotency",
  "Backend Command Center: health score, incident, diagnostics, safe repair",
  "Sanitasi data sebelum AI/RAG agar informasi sensitif tidak bocor",
];

const customPoints = [
  "Logo, nama pesantren, warna, kop dokumen, dan identitas lembaga mengikuti klien.",
  "Modul bisa ditambah, dikurangi, atau disederhanakan sesuai kebijakan pesantren.",
  "Role, batas gender/jurusan, format laporan, dan alur validasi dapat dibuat khusus.",
  "pesantrenPro adalah brand produk, sementara aplikasi klien tetap memakai branding pesantren terkait.",
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
              Sistem ini tidak dibuat untuk memamerkan menu sebanyak mungkin. Ia dibuat agar pesantren punya satu pusat kendali yang terasa rapi, bisa diaudit, dan tetap mengikuti kebiasaan kerja lembaga.
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
            Dari diskusi awal sampai sistem berjalan, langkahnya dibuat terang.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Calon pesantren tidak perlu menebak prosesnya. Setiap tahap punya keluaran yang jelas agar implementasi tidak berhenti sebagai demo.
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
              Admin panel lengkap
            </Badge>
            <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              Admin panel yang terasa seperti ruang kerja, bukan daftar menu.
            </h2>
          </div>
          <p className="text-xl leading-9 text-slate-300">
            Dari data santri sampai audit backend, semuanya diletakkan dalam alur kerja yang bisa dipahami pengurus. Operator bekerja cepat, pimpinan melihat gambaran besar, dan jejak keputusan tetap tersimpan.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid gap-4 lg:grid-cols-3"
        >
          {adminScreens.map((screen, index) => (
            <motion.article
              key={screen.title}
              variants={fadeUp}
              transition={{ duration: 0.62 }}
              whileHover={{ y: -7 }}
              className={index === 0 ? "lg:col-span-2" : ""}
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
              Setiap modul boleh terlihat sederhana di layar, tetapi di belakangnya ada role, validasi, audit, export, dan batasan keamanan yang menjaga data pesantren tetap tertib.
            </p>
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
            Mengadopsi sistem ini, pesantren mendapatkan bonus pembuatan website.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Website publik menjadi wajah pertama pesantren untuk calon wali santri, alumni, dan masyarakat. Bonus ini dibuat agar ekosistem digital tidak hanya kuat di internal, tetapi juga rapi saat dilihat dari luar.
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
              ["Layanan", "#layanan"],
              ["Proses", "#proses"],
              ["Admin Panel", "#admin-panel"],
              ["Stack", "#stack"],
              ["Export", "#export"],
              ["Bonus", "#bonus-website"],
              ["Ekosistem", "#ekosistem"],
              ["Android", "#android"],
              ["Security", "#keamanan"],
              ["Custom", "#custom"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="transition-colors hover:text-emerald-800 dark:hover:text-cyan-200">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              render={<a href="#kontak" />}
              nativeButton={false}
              className="hidden bg-emerald-950 text-white shadow-lg shadow-emerald-950/15 hover:bg-emerald-900 dark:bg-cyan-300 dark:text-slate-950 dark:shadow-cyan-300/10 dark:hover:bg-cyan-200 sm:inline-flex"
            >
              Diskusi
              <ArrowRight className="size-4" />
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
                Admin Panel + Android + Website + PostgreSQL
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-slate-950 sm:text-7xl dark:text-white"
            >
              Pesantren terasa lebih tertata saat sistemnya bekerja diam-diam.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300"
            >
              pesantrenPro menyatukan admin panel, aplikasi Android, website, backend, PostgreSQL, wallet, audit, E2EE, dan AI/RAG dalam satu ekosistem yang bisa mengikuti cara kerja pesantren.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
              {heroProofs.map((proof) => (
                <div key={proof} className="rounded-lg border border-white/70 bg-white/62 px-3 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur dark:border-cyan-300/15 dark:bg-slate-950/50 dark:text-cyan-100">
                  {proof}
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="#ekosistem" />}
                nativeButton={false}
                size="lg"
                className="h-12 bg-emerald-950 px-5 text-white shadow-xl shadow-emerald-950/18 hover:bg-emerald-900 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                Jelajahi Ekosistem
                <ArrowRight className="size-4" />
              </Button>
              <Button
                render={<a href="#keamanan" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-12 border-emerald-900/18 bg-white/70 px-5 text-emerald-950 shadow-sm backdrop-blur hover:bg-white dark:border-cyan-300/28 dark:bg-slate-950/56 dark:text-cyan-100 dark:hover:bg-slate-900"
              >
                Lihat Security
              </Button>
            </motion.div>
          </motion.div>

          <DashboardMockup />
        </motion.div>
      </section>

      <ExperienceBridge />
      <ServiceDepthSection />
      <ImplementationProcessSection />
      <AdminPanelShowcase />
      <TechnologyStackSection />
      <ReportingExportSection />
      <BonusWebsiteSection />

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

      <section id="android" className="bg-[#eef4ef] py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <Reveal>
              <Badge className="mb-4 bg-emerald-950 text-white dark:bg-cyan-300 dark:text-slate-950">
                <Smartphone className="size-3" />
                Android experience
              </Badge>
              <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
                Tampilan mobile untuk wali, alumni, dan kantin.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Wali melihat yang perlu mereka lihat. Alumni punya ruang berinteraksi. Kantin bisa melayani transaksi. Fitur publik seperti Al-Qur&apos;an digital, jadwal sholat, berita, dan notifikasi membuat aplikasi tetap bermanfaat bahkan di luar urusan administrasi.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Al-Qur'an digital dan jadwal sholat", "Pembayaran online, donasi, dan Dompet Santri", "Push notification dan offline outbox", "Forum, alumni, chat E2EE, dan kantin"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-emerald-900/10 bg-white/70 px-4 py-3 text-sm font-medium shadow-sm dark:border-cyan-300/15 dark:bg-slate-900">
                    <Check className="size-4 text-emerald-800 dark:text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
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

      <section id="keamanan" className="relative overflow-hidden bg-slate-950 py-28 text-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.10)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,182,212,0.18),transparent_42%,rgba(16,185,129,0.10)_74%,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <Badge className="mb-5 border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
              <LockKeyhole className="size-3" />
              Deep security cyber layer
            </Badge>
              <h2 className="text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              Keamanan terasa sejak cara sistem mengambil keputusan.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Data santri, transaksi, wallet, dan komunikasi alumni tidak diperlakukan sebagai catatan biasa. Ada role, RLS, RPC aman, audit log, ledger, E2EE, dan batasan tegas untuk AI.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { label: "Plaintext chat", value: "blocked", icon: KeyRound },
                { label: "Frontend secret", value: "forbidden", icon: Fingerprint },
                { label: "Wallet mutation", value: "ledger only", icon: WalletCards },
                { label: "Admin action", value: "audited", icon: MonitorCheck },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-lg border border-cyan-300/15 bg-cyan-300/8 p-4 backdrop-blur">
                    <Icon className="mb-4 size-5 text-cyan-300" />
                    <p className="text-xs uppercase text-slate-400">{item.label}</p>
                    <p className="mt-1 font-semibold text-cyan-50">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-lg border border-cyan-300/20 bg-slate-950/86 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur">
              <div className="mb-4 flex items-center gap-2 border-b border-cyan-300/15 pb-3 font-mono text-sm text-cyan-200">
                <TerminalSquare className="size-4" />
                security-protocol.trace
              </div>
              <div className="space-y-3">
                {securityLayers.map((layer, index) => (
                  <motion.div
                    key={layer}
                    initial={{ opacity: 0, x: 22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.055, duration: 0.52 }}
                    className="flex gap-3 rounded-md border border-slate-800 bg-slate-900/72 p-3 font-mono text-sm leading-6 text-slate-300"
                  >
                    <span className="text-cyan-300">0{index + 1}</span>
                    <span>{layer}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="custom" className="bg-white py-24 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <Badge variant="outline" className="mb-4 border-emerald-700/25 text-emerald-900 dark:border-cyan-300/25 dark:text-cyan-100">
              <BadgeCheck className="size-3" />
              Full custom
            </Badge>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-5xl">
              Nama sistem tegas, branding klien tetap milik pesantren.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              pesantrenPro adalah brand produk penawaran. Ketika diterapkan, nama aplikasi, logo, warna, modul, role, dokumen, dan alur kerja mengikuti pesantren terkait.
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
              text: "Dashboard, data santri, EMIS, kesantrian, tahfidz, ulangan, berita, notifikasi, dan laporan untuk pengurus.",
            },
            {
              title: "Keuangan & Wallet",
              icon: WalletCards,
              text: "Tagihan, transaksi, donasi, Dompet Santri, kantin, settlement, dispute, risk event, dan rekonsiliasi.",
            },
            {
              title: "Pembelajaran & Layanan",
              icon: BookOpenCheck,
              text: "Hafalan Quran, hafalan kitab, kesehatan, perizinan, alumni, forum, chat E2EE, AI/RAG, dan inventaris.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="rounded-lg border border-emerald-900/10 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 dark:border-cyan-400/15 dark:bg-slate-900">
                  <Icon className="mb-6 size-8 text-emerald-800 dark:text-cyan-300" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="kontak" className="bg-emerald-950 py-24 text-white dark:bg-cyan-950">
        <Reveal className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Badge className="mb-5 bg-white/12 text-white">
              <Network className="size-3" />
              Admin panel + Android + website + PostgreSQL
            </Badge>
            <h2 className="text-4xl font-semibold tracking-normal sm:text-6xl">
              Siapkan demo pesantrenPro untuk penawaran berikutnya.
            </h2>
            <p className="mt-5 text-lg leading-8 text-emerald-50/80">
              Landing page ini menegaskan bahwa sistem dapat dibawa ke pesantren lain dengan branding dan fitur yang mengikuti kebutuhan lembaga. Untuk informasi lebih lanjut hubungi developer pesantrenPro.
            </p>
            <div className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              <a
                href="https://wa.me/6281804886112"
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
                render={<a href="https://wa.me/6281804886112" target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                size="lg"
                className="h-12 bg-white px-5 text-emerald-950 shadow-xl shadow-black/15 hover:bg-emerald-50 dark:text-cyan-950"
              >
                Hubungi WhatsApp
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
          <p>Ekosistem digital pesantren yang dapat disesuaikan dengan kebijakan lembaga.</p>
        </div>
      </footer>
    </main>
  );
}
