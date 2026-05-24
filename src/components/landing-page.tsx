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
  "Data Santri & EMIS",
  "Keuangan Amanah",
  "Dompet Santri Digital",
  "Ekosistem Kantin",
  "Tahfidz & Murojaah",
  "Hafalan Kitab Kuning",
  "Kedisiplinan & Poin",
  "Perizinan Digital",
  "Layanan Kesehatan",
  "Forum Alumni",
  "Komunikasi Terenkripsi",
  "Notifikasi Real-time",
  "Pembayaran Online",
  "Al-Qur'an Digital",
  "Jadwal Ibadah",
  "Kecerdasan Buatan (AI)",
];

const ecosystem = [
  {
    title: "Pusat Kendali Admin",
    icon: PanelTop,
    text: "Pusat kerja operasional yang menyatukan data EMIS, akademik, kesantrian, hingga laporan keuangan dalam satu dasbor elegan.",
  },
  {
    title: "Aplikasi Wali & Santri",
    icon: Smartphone,
    text: "Menghubungkan orang tua dengan perkembangan santri secara real-time, mulai dari hafalan hingga transaksi kantin.",
  },
  {
    title: "Infrastruktur Modern",
    icon: Database,
    text: "Dibangun dengan teknologi cloud terkini yang menjamin kecepatan akses, validitas data, dan ketersediaan sistem 24/7.",
  },
  {
    title: "Standar Keamanan Amanah",
    icon: ShieldCheck,
    text: "Melindungi privasi data santri dengan enkripsi tingkat tinggi dan sistem audit yang transparan serta akuntabel.",
  },
];

const screenshots = [
  { src: "/screenshots/profile-ui.png", title: "Profil Santri", color: "bg-emerald-600" },
  { src: "/screenshots/keuangan-ui.png", title: "Manajemen SPP", color: "bg-amber-500" },
  { src: "/screenshots/hafalanQuran-ui.png", title: "Progres Tahfidz", color: "bg-emerald-500" },
  { src: "/screenshots/Hafalan-ui.png", title: "Hafalan Kitab", color: "bg-emerald-700" },
  { src: "/screenshots/pelanggaran-ui.png", title: "Catatan Disiplin", color: "bg-rose-500" },
  { src: "/screenshots/kesehatan-ui.png", title: "Rekam Medis", color: "bg-sky-500" },
  { src: "/screenshots/donasi-ui.png", title: "Portal Donasi", color: "bg-amber-600" },
];

const androidFeatureGroups = [
  {
    title: "Monitoring Orang Tua",
    icon: UsersRound,
    items: ["Profil lengkap santri", "Laporan hafalan harian", "Progres murojaah", "Cek poin kedisiplinan", "Riwayat kesehatan", "Status perizinan", "Catatan prestasi"],
  },
  {
    title: "Keuangan Digital",
    icon: CreditCard,
    items: ["Pembayaran SPP online", "Multi-metode (VA, QRIS)", "Top-up Dompet Santri", "Donasi & Infaq", "Limit belanja harian", "Approval transaksi", "Riwayat keuangan"],
  },
  {
    title: "Fitur Islami Terpadu",
    icon: BookOpenCheck,
    items: ["Al-Qur'an digital resmi", "Audio murottal qari", "Jadwal shalat presisi", "Kalender Hijriah", "Arah kiblat", "Kumpulan doa & dzikir", "Panduan ibadah harian"],
  },
  {
    title: "Komunitas & Alumni",
    icon: Network,
    items: ["Direktori alumni", "Forum diskusi santun", "Berita resmi pesantren", "Chat privat aman", "Moderasi konten otomatis", "Info kegiatan alumni", "Donasi program pesantren"],
  },
  {
    title: "AI & Layanan Cerdas",
    icon: BellRing,
    items: ["Asisten AI Pesantren", "Tanya jawab hukum Islam", "Notifikasi penting", "Akses data offline", "Pusat bantuan", "Update sistem otomatis"],
  },
];

const androidAssurancePoints = [
  {
    title: "Transparansi Penuh untuk Wali.",
    text: "Semua informasi perkembangan santri tersedia di ujung jari. Tidak ada lagi keraguan tentang kondisi anak di pesantren.",
  },
  {
    title: "Alur Data yang Tertib & Aman.",
    text: "Aplikasi hanya menampilkan data. Seluruh perubahan resmi tetap dikelola melalui otorisasi admin pesantren yang ketat.",
  },
  {
    title: "Keamanan Finansial Terjamin.",
    text: "Transaksi keuangan menggunakan standar perbankan digital. Saldo dan riwayat belanja tervalidasi secara otomatis.",
  },
  {
    title: "Akses Cepat & Responsif.",
    text: "Dirancang untuk bekerja optimal di berbagai kondisi jaringan, memastikan informasi penting selalu tersampaikan.",
  },
];

const adminScreens = [
  {
    src: "/dashboard_light.png",
    darkSrc: "/dashboard_dark.png",
    title: "Pusat Kendali Operasional",
    text: "Gambaran menyeluruh kondisi pesantren: statistik santri, arus kas, hingga peringatan dini sistem dalam satu layar.",
  },
  {
    src: "/santri.png",
    title: "Manajemen Santri Terpadu",
    text: "Pendataan EMIS yang lengkap, pembuatan akun wali otomatis, hingga pemetaan geografis keluarga santri.",
  },
  {
    src: "/tagihan.png",
    title: "Administrasi Keuangan",
    text: "Pengelolaan tagihan otomatis, integrasi pembayaran digital, dan laporan donasi yang transparan.",
  },
  {
    src: "/log-keuangan.png",
    title: "Buku Besar Keuangan",
    text: "Pencatatan transaksi permanen yang tidak dapat diubah sepihak, menjamin integritas laporan keuangan pesantren.",
  },
  {
    src: "/scanqr.png",
    title: "Sistem Presensi QR",
    text: "Validasi kehadiran dan kegiatan lapangan yang cepat menggunakan teknologi pemindaian identitas santri.",
  },
  {
    src: "/Ai-fitur.png",
    title: "Kecerdasan Buatan (AI)",
    text: "Analisis data mendalam dan asisten pintar yang membantu admin dalam pengambilan keputusan berbasis data.",
  },
];

const adminFeatureGroups = [
  {
    title: "Data Induk & EMIS",
    icon: UsersRound,
    items: ["Registrasi EMIS standar", "Validasi NIK otomatis", "Akun wali terintegrasi", "Peta persebaran santri", "QR Card identitas", "Ekspor data terproteksi"],
  },
  {
    title: "Akademik & Kesantrian",
    icon: BookOpenCheck,
    items: ["Rekap hafalan mingguan", "Sistem poin kedisiplinan", "Layanan kesehatan UKS", "Manajemen izin keluar", "Laporan nilai ujian", "Pantauan murojaah harian"],
  },
  {
    title: "Ekosistem Finansial",
    icon: WalletCards,
    items: ["Manajemen SPP & Tagihan", "Ledger keuangan amanah", "Sistem Dompet Santri", "Kantin & Merchant QR", "Audit laporan otomatis", "Rekonsiliasi bank"],
  },
  {
    title: "Tata Kelola Institusi",
    icon: MonitorCheck,
    items: ["Manajemen hak akses", "Inventaris aset pesantren", "Pusat notifikasi massal", "Profil lembaga custom", "Log aktivitas admin", "Berita internal"],
  },
  {
    title: "Komunitas Alumni",
    icon: Network,
    items: ["Database alumni pusat", "Moderasi forum alumni", "Monitoring komunikasi", "Program donasi alumni", "Jejaring profesi", "Event organizer"],
  },
  {
    title: "AI & Analisis Sistem",
    icon: ShieldCheck,
    items: ["Analisis perilaku data", "Rekomendasi strategis AI", "Audit keamanan real-time", "Pusat kendali backend", "Laporan cerdas PDF/Excel", "Self-healing system"],
  },
];

const adminWorkflowCards = [
  {
    title: "Alur EMIS yang Sempurna",
    icon: FileSpreadsheet,
    text: "Dari pendaftaran hingga laporan resmi, data divalidasi secara sistematis untuk memastikan kesiapan dokumen negara.",
  },
  {
    title: "Keuangan Tanpa Celah",
    icon: WalletCards,
    text: "Setiap rupiah dicatat dalam buku besar yang terkunci. Transparansi bagi pengurus dan ketenangan bagi wali santri.",
  },
  {
    title: "Digitalisasi Kantin & Dompet",
    icon: ShieldCheck,
    text: "Mengurangi risiko uang hilang dan memudahkan kontrol belanja santri melalui ekosistem dompet digital internal.",
  },
  {
    title: "Kendali Super Admin",
    icon: Database,
    text: "Monitoring kesehatan sistem dan infrastruktur yang memastikan operasional pesantren tidak pernah terhenti.",
  },
];

const technologyStacks = [
  {
    title: "Dasbor Admin",
    icon: PanelTop,
    text: "Menggunakan standar teknologi korporat modern yang responsif dan memudahkan input data masif secara cepat.",
  },
  {
    title: "Mobile App Android",
    icon: Smartphone,
    text: "Aplikasi native with high level of security to protect personal data and santri financial transactions.",
  },
  {
    title: "Layanan Website",
    icon: Code2,
    text: "The elegant digital face of the pesantren, supporting light and dark modes according to user comfort.",
  },
  {
    title: "Layanan Backend",
    icon: Server,
    text: "A robust data processing engine behind the scenes, handling validation, notifications, and third-party integration.",
  },
  {
    title: "Basis Data Amanah",
    icon: Database,
    text: "Structured data storage with bank-grade encryption and a permanent audit log system.",
  },
];

const stackHighlights = [
  "Teknologi Terbaru",
  "Performa Tinggi",
  "Keamanan Berlapis",
  "Berbasis Cloud",
  "Skalabilitas Tinggi",
  "Integrasi AI",
  "Audit Transparan",
  "Siap EMIS",
];

const heroProofs = [
  "Analisis AI Strategis",
  "Dasbor Admin Elegan",
  "Aplikasi Wali Modern",
  "Keamanan Tingkat Tinggi",
  "Integritas Data EMIS",
  "Laporan Otomatis",
];

const whatsappDemoAndroidUrl =
  "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20meminta%20demo%20aplikasi%20Android%20PesantrenPro%20untuk%20%5Bnama%20pesantren%5D";

const whatsappDemoFullUrl =
  "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20meminta%20demo%20full%20sistem%20PesantrenPro%20%28Admin%20Panel%20%26%20Android%29%20untuk%20%5Bnama%20pesantren%5D";

const whatsappConversationUrl =
  "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20%5Bnama%5D%20dari%20Pondok%20Pesantren%20%5Bnama%5D.%20Kami%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20pesantrenPro.";

const problemCards = [
  {
    title: "Data yang Terpencar",
    text: "Catatan hafalan di buku, keuangan di Excel, dan data santri di kertas. Seringkali sulit ditemukan saat dibutuhkan segera.",
    icon: FileText,
  },
  {
    title: "Komunikasi Melelahkan",
    text: "Bendahara dan pengurus kewalahan melayani pertanyaan wali santri satu per satu melalui pesan singkat setiap harinya.",
    icon: WalletCards,
  },
  {
    title: "Risiko Kesalahan Input",
    text: "Tanpa validasi otomatis, data SPP and hafalan rentan tertukar atau hilang, memicu ketidakpercayaan wali santri.",
    icon: BellRing,
  },
  {
    title: "Laporan yang Lambat",
    text: "Menyusun laporan bulanan or EMIS membutuhkan waktu berhari-hari karena data harus dikumpulkan secara manual.",
    icon: FileSpreadsheet,
  },
];

const proofStats = [
  "Implementasi Sukses di Ponpes Al-Hasanah",
  "Terpercaya Sejak Awal 2026",
  "Ratusan Santri Terdata Aktif",
  "Integritas Laporan Keuangan Terjamin",
];

const faqs = [
  {
    question: "Bagaimana jaminan keamanan data kami?",
    answer:
      "Kami menerapkan standar keamanan perbankan digital. Data pribadi santri dienkripsi, and akses ke sistem dibatasi dengan otorisasi ketat yang dapat diaudit kapan saja.",
  },
  {
    question: "Apakah sistem ini sulit dioperasikan?",
    answer:
      "Tidak. Dasbor kami dirancang sangat intuitif bagi pengguna non-teknis. Kami juga menyediakan pendampingan and pelatihan sampai tim pesantren mahir.",
  },
  {
    question: "Dapatkah kami menyesuaikan dengan aturan pesantren?",
    answer:
      "Tentu. PesantrenPro sangat fleksibel. Mulai dari istilah menu, format laporan, hingga alur persetujuan dapat disesuaikan dengan kebijakan internal lembaga Anda.",
  },
  {
    question: "Bagaimana jika kami butuh bantuan teknis?",
    answer:
      "Anda memiliki akses langsung ke tim pengembang kami. Tidak ada birokrasi tiket yang lama; kami siap membantu melalui jalur komunikasi cepat.",
  },
  {
    question: "Apakah sistem ini mendukung pendaftaran santri baru?",
    answer:
      "Ya, sistem memiliki modul pendaftaran online yang terintegrasi langsung dengan database induk and EMIS, memudahkan transisi santri baru.",
  },
];

const serviceSegments = [
  {
    title: "Konsultasi Alur Kerja",
    text: "Kami mempelajari cara pesantren Anda bekerja untuk memastikan sistem digital yang dibangun benar-benar menyelesaikan masalah, bukan menambah beban.",
    icon: UsersRound,
  },
  {
    title: "Kustomisasi Identitas",
    text: "Setiap pesantren unik. Kami menyesuaikan tampilan, logo, and istilah sistem agar mencerminkan marwah and wibawa lembaga Anda.",
    icon: PanelTop,
  },
  {
    title: "Migrasi Data & Integrasi",
    text: "Membantu memindahkan data lama Anda dengan aman ke ekosistem baru, memastikan tidak ada informasi yang hilang selama proses transisi.",
    icon: Server,
  },
  {
    title: "Pendampingan Berkelanjutan",
    text: "Kami tidak hanya memberikan software. Kami mendampingi pesantren dalam penggunaan harian untuk memastikan transformasi digital berjalan sukses.",
    icon: LifeBuoy,
  },
];

const implementationSteps = [
  {
    title: "Pemetaan",
    text: "Menganalisis struktur organisasi and kebutuhan spesifik administrasi pesantren Anda.",
  },
  {
    title: "Perancangan",
    text: "Menyusun konfigurasi modul and hak akses yang paling sesuai dengan kebijakan lembaga.",
  },
  {
    title: "Instalasi",
    text: "Pemasangan infrastruktur cloud and penyiapan aplikasi Android untuk wali santri.",
  },
  {
    title: "Pelatihan",
    text: "Edukasi intensif bagi operator and pengurus agar mampu mengelola sistem secara mandiri.",
  },
  {
    title: "Peresmian",
    text: "Sistem mulai digunakan secara penuh dengan dukungan teknis siaga dari tim kami.",
  },
];

const bonusWebsiteFeatures = [
  "Website profil profesional dengan domain resmi",
  "Portal informasi publik & pendaftaran online",
  "Galeri kegiatan & berita terbaru pesantren",
  "Tampilan elegan yang responsif di semua perangkat",
];

const reportingFeatures = [
  {
    title: "Ekspor Data Siap Pakai",
    icon: FileSpreadsheet,
    text: "Menghasilkan laporan Excel dalam sekejap untuk kebutuhan EMIS, keuangan, hingga rekap hafalan santri.",
  },
  {
    title: "Dokumen PDF Berstempel",
    icon: FileText,
    text: "Cetak bukti pembayaran, surat izin, and laporan kesehatan dalam format PDF profesional yang siap arsip.",
  },
  {
    title: "Jejak Audit Transparan",
    icon: MonitorCheck,
    text: "Setiap aktivitas admin terekam dengan jelas, memudahkan pengurus memantau integritas operasional harian.",
  },
  {
    title: "Validasi Identitas QR",
    icon: QrCode,
    text: "Teknologi pemindaian cepat untuk kartu santri, memudahkan pengecekan di kantin maupun gerbang pesantren.",
  },
];

const impactMoments = [
  {
    title: "Dasbor Sebagai Pusat Kendali Pagi.",
    text: "Melihat statistik kesehatan, tagihan tertunda, and hafalan terbaru sebelum memulai agenda harian pesantren.",
  },
  {
    title: "Ketenangan Bagi Wali Santri.",
    text: "Menerima notifikasi perkembangan anak secara otomatis, membangun kepercayaan yang lebih kuat antara wali and lembaga.",
  },
  {
    title: "Keputusan Berbasis Data Nyata.",
    text: "Tidak ada lagi asumsi. Setiap keputusan pimpinan didasarkan pada laporan akurat yang tersaji secara real-time.",
  },
];

const securityControlCards = [
  {
    title: "Proteksi Perangkat",
    label: "Android Trust",
    icon: Smartphone,
    text: "Kunci keamanan disimpan dalam hardware khusus perangkat, memastikan akses wali santri tidak mudah dipindahkan.",
  },
  {
    title: "Enkripsi Terverifikasi",
    label: "Data Privacy",
    icon: LockKeyhole,
    text: "Seluruh data sensitif diacak dengan standar algoritma modern yang mustahil dibaca tanpa otorisasi resmi.",
  },
  {
    title: "Tanda Tangan Digital",
    label: "Wallet Security",
    icon: Fingerprint,
    text: "Setiap transaksi dompet santri memerlukan verifikasi kriptografi unik untuk mencegah transaksi palsu.",
  },
  {
    title: "Validasi Server Pusat",
    label: "Real-time Authority",
    icon: Server,
    text: "Otoritas transaksi tetap berada di server backend, bukan di aplikasi, untuk menjamin integritas saldo.",
  },
  {
    title: "Verifikasi PIN Kripto",
    label: "Financial Guard",
    icon: KeyRound,
    text: "Keamanan PIN dompet menggunakan metode perbankan yang tidak menyimpan angka asli di database manapun.",
  },
  {
    title: "Komunikasi Privat",
    label: "End-to-End Encryption",
    icon: Send,
    text: "Isi pesan antar pengguna dirancang agar hanya pengirim and penerima yang bisa membaca, menjaga privasi alumni.",
  },
  {
    title: "Buku Besar Digital",
    label: "Financial Integrity",
    icon: WalletCards,
    text: "Riwayat keuangan tidak bisa dihapus or diubah tanpa meninggalkan jejak audit, menjamin keterbukaan dana.",
  },
  {
    title: "Kontrol Akses Berlapis",
    label: "Role-Based Access",
    icon: Database,
    text: "Membatasi akses data berdasarkan tugas masing-masing: bendahara, kesantrian, hingga wali santri.",
  },
  {
    title: "Fungsi Backend Terkendali",
    label: "Secure Actions",
    icon: ShieldCheck,
    text: "Aksi krusial hanya bisa dilakukan melalui prosedur server yang ketat, meminimalisir risiko human error.",
  },
  {
    title: "Isolasi Kunci Rahasia",
    label: "Secret Management",
    icon: Server,
    text: "Kunci integrasi bank and sistem luar dijaga di lapisan backend terdalam, jauh dari jangkauan publik.",
  },
  {
    title: "Proteksi Transaksi Ganda",
    label: "Anti-Replay System",
    icon: QrCode,
    text: "Menjamin satu permintaan transaksi hanya diproses satu kali, mencegah saldo terpotong dua kali akibat gangguan sinyal.",
  },
  {
    title: "Log Audit Permanen",
    label: "Operational Trace",
    icon: MonitorCheck,
    text: "Merekam setiap langkah penting admin sebagai bahan evaluasi and bukti jika terjadi selisih informasi.",
  },
  {
    title: "Pusat Diagnostik Sistem",
    label: "Health Monitoring",
    icon: MonitorCheck,
    text: "Memantau kesehatan infrastruktur secara otomatis agar gangguan teknis dapat terdeteksi sebelum dirasakan pengguna.",
  },
  {
    title: "Sanitasi Kecerdasan AI",
    label: "Safe Intelligence",
    icon: Sparkles,
    text: "Menjamin interaksi dengan AI tidak membocorkan data pribadi or informasi rahasia pesantren.",
  },
  {
    title: "Keamanan Notifikasi",
    label: "Privacy Alerts",
    icon: BellRing,
    text: "Pesan pemberitahuan diikat khusus ke akun yang sedang aktif, menjaga kerahasiaan informasi di layar kunci.",
  },
  {
    title: "Enkripsi Jalur Komunikasi",
    label: "Network Hardening",
    icon: Globe2,
    text: "Seluruh pertukaran data antara aplikasi and server dilindungi protokol perbankan (TLS) yang paling aman.",
  },
];

const customPoints = [
  "Identitas Visual: Nama, logo, and skema warna disesuaikan dengan marwah resmi lembaga pesantren Anda.",
  "Tata Kelola Dokumen: Kop surat, format rapor, and istilah administratif mengikuti standar internal pondok.",
  "Modul Fleksibel: Fitur dapat diaktifkan secara bertahap sesuai dengan kesiapan sumber daya manusia di pesantren.",
  "Struktur Otoritas: Penentuan hak akses and alur persetujuan dirancang mengikuti hierarki kepemimpinan pesantren.",
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
      <div className="absolute -inset-x-6 bottom-0 h-28 bg-emerald-900/10 blur-3xl dark:bg-amber-500/5" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.36, duration: 0.7 }}
        className="absolute -top-7 left-6 z-20 hidden rounded-xl border border-white/60 bg-white/70 px-4 py-3 shadow-2xl shadow-emerald-950/5 backdrop-blur-2xl dark:border-amber-500/10 dark:bg-slate-900/80 md:block"
      >
        <div className="flex items-center gap-3">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 dark:bg-amber-400" />
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-600 dark:bg-amber-500" />
          </span>
          <span className="text-xs font-bold tracking-tight text-slate-800 dark:text-amber-50">SISTEM OPERASIONAL AKTIF</span>
        </div>
      </motion.div>
      <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] backdrop-blur-3xl dark:border-white/5 dark:bg-slate-900/60 dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-between border-b border-slate-200/50 px-5 py-4 dark:border-slate-800/50">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-slate-200 dark:bg-slate-800" />
            <span className="size-3 rounded-full bg-slate-200 dark:bg-slate-800" />
            <span className="size-3 rounded-full bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="rounded-lg border border-slate-200/50 bg-slate-100/50 px-4 py-1.5 font-mono text-[10px] font-medium tracking-wider text-slate-400 dark:border-slate-800/50 dark:bg-slate-950/50 dark:text-slate-500">
            ADMIN.PESANTRENPRO.ID
          </div>
        </div>

        <div className="relative">
          <Image
            src="/dashboard_light.png"
            alt="Dasbor Admin PesantrenPro"
            width={1368}
            height={743}
            priority
            className="block h-auto w-full dark:hidden"
          />
          <Image
            src="/dashboard_dark.png"
            alt="Dasbor Admin PesantrenPro"
            width={1368}
            height={743}
            priority
            className="hidden h-auto w-full dark:block"
          />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.6 }}
            className="absolute bottom-6 left-6 hidden max-w-[240px] rounded-xl border border-white/60 bg-white/80 p-5 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/90 md:block"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-amber-500">KENDALI PUSAT</p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-900 dark:text-white">Kelola data santri, keuangan, and laporan dalam satu alur yang tertib.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.72, duration: 0.6 }}
            className="absolute right-6 top-6 hidden rounded-xl border border-white/10 bg-slate-900/90 p-4 text-white shadow-2xl backdrop-blur-2xl lg:block"
          >
            {["Audit Terkunci", "Amanah Terjamin", "Validasi AI"].map((item) => (
              <div key={item} className="mb-3 flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider last:mb-0">
                <div className="flex size-4 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                   <Check className="size-2.5 stroke-[4]" />
                </div>
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceBridge() {
  return (
    <section className="relative bg-[#faf9f6] py-28 dark:bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/5" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">FILOSOFI PENGGUNAAN</p>
            <h2 className="text-4xl font-medium leading-[1.1] tracking-tight text-slate-900 sm:text-6xl dark:text-white">
                Wibawa dalam pengelolaan. Tenang dalam pengawasan.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-xl font-light leading-relaxed text-slate-600 dark:text-slate-400">
                Sistem ini tidak dirancang untuk sekadar mengganti kertas menjadi layar. Ia dibangun untuk mengembalikan fokus pengurus pada pendidikan, sementara administrasi berjalan otomatis dengan standar akurasi yang tinggi.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-6 lg:grid-cols-3"
        >
          {impactMoments.map((moment, index) => (
            <motion.article
              key={moment.title}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className={`group relative rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-white/5 dark:bg-slate-900/50 ${
                index === 1 ? "lg:translate-y-10" : ""
              }`}
            >
              <div className="mb-10 flex size-12 items-center justify-center rounded-xl bg-slate-900 font-serif text-lg italic text-amber-400 transition-transform group-hover:scale-110 dark:bg-amber-500 dark:text-slate-950">
                {index + 1}
              </div>
              <h3 className="text-2xl font-medium tracking-tight">{moment.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">{moment.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceDepthSection() {
  return (
    <section id="layanan" className="relative bg-white py-32 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <Badge variant="outline" className="mb-6 rounded-full border-amber-500/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
              <Wrench className="mr-2 size-3" />
              IMPLEMENTASI TERPANDU
            </Badge>
            <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Bukan sekadar software, tapi solusi transformasi lembaga.
            </h2>
          </div>
          <p className="text-xl font-light leading-relaxed text-slate-500 dark:text-slate-400">
            Kami memahami bahwa teknologi hanyalah alat. Keberhasilan digitalisasi pesantren bergantung pada keselarasan sistem dengan nilai-nilai tradisional and kesiapan sumber daya manusia yang ada.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {serviceSegments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <motion.article
                key={segment.title}
                variants={fadeUp}
                transition={{ duration: 0.58 }}
                className={`rounded-2xl border border-slate-100 bg-[#faf9f6] p-8 transition-all hover:bg-white hover:shadow-2xl dark:border-white/5 dark:bg-slate-950/50 ${
                  index === 1 || index === 3 ? "lg:translate-y-10" : ""
                }`}
              >
                <div className="mb-10 flex size-14 items-center justify-center rounded-2xl bg-emerald-950 text-amber-400 dark:bg-amber-500/10 dark:text-amber-500">
                  <Icon className="size-7" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight">{segment.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">{segment.text}</p>
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
    <section id="proses" className="relative overflow-hidden bg-[#faf9f6] py-32 dark:bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:100px_100px] dark:bg-[linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <Badge className="mb-6 rounded-full bg-slate-900 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white dark:bg-amber-500 dark:text-slate-950">
            <Layers3 className="mr-2 size-3" />
            METODOLOGI EKSEKUSI
          </Badge>
          <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              Tahapan Terukur Menuju Ekosistem Digital Berkelanjutan.
          </h2>
          <p className="mt-8 text-xl font-light leading-relaxed text-slate-500 dark:text-slate-400">
              Setiap langkah dirancang untuk meminimalisir hambatan operasional and memaksimalkan penerimaan teknologi oleh seluruh pengurus pesantren.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-6 lg:grid-cols-5">
          {implementationSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <article className="group relative h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-amber-500/30 hover:shadow-2xl dark:border-white/5 dark:bg-slate-900/50">
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-serif text-2xl italic text-amber-600">0{index + 1}</span>
                  {index < implementationSteps.length - 1 ? (
                    <div className="hidden h-px w-12 bg-slate-100 dark:bg-white/5 lg:block" />
                  ) : null}
                </div>
                <h3 className="text-xl font-medium tracking-tight">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{step.text}</p>
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
    <section id="android" className="bg-[#eef4ef] py-32 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <Badge className="mb-6 rounded-full bg-emerald-950 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white dark:bg-amber-500 dark:text-slate-950">
              <Smartphone className="mr-2 size-3" />
              MOBILE EXPERIENCE
            </Badge>
            <h2 className="text-4xl font-medium tracking-tight sm:text-6xl">
              Satu Aplikasi. Kedekatan Tanpa Batas.
            </h2>
            <p className="mt-8 text-xl font-light leading-relaxed text-slate-600 dark:text-slate-400">
              Menghubungkan wali santri, alumni, and unit usaha pesantren dalam satu genggaman yang aman. Memastikan setiap informasi tersampaikan dengan wibawa and ketepatan data.
            </p>
            <div className="mt-10 grid gap-4">
              {[
                "Pantauan Hafalan & Akademik Real-time",
                "Pembayaran SPP & Donasi Terverifikasi",
                "Layanan Ibadah & Al-Qur'an Digital Resmi",
                "Ruang Komunitas Alumni Terenkripsi",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-xl border border-white/60 bg-white/40 px-6 py-4 text-sm font-bold tracking-tight shadow-sm dark:border-white/5 dark:bg-slate-900/50">
                  <div className="flex size-5 items-center justify-center rounded-full bg-emerald-500 text-white dark:bg-amber-500 dark:text-slate-950">
                    <Check className="size-3 stroke-[4]" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {androidFeatureGroups.map((group) => (
                <motion.div key={group.title} variants={fadeUp} className="rounded-xl border border-white/40 bg-white/20 p-6 backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/30">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-800 dark:text-amber-500 mb-4">{group.title}</h4>
                  <ul className="space-y-2">
                    {group.items.slice(0, 4).map(item => (
                      <li key={item} className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                        <div className="size-1 rounded-full bg-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                render={<a href={whatsappDemoAndroidUrl} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                className="h-14 rounded-full bg-emerald-950 px-8 text-white hover:bg-emerald-900 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400"
              >
                Minta Demo Android
                <Smartphone className="ml-2 size-5" />
              </Button>
              <Button
                render={<a href={whatsappDemoFullUrl} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant="outline"
                className="h-14 rounded-full border-slate-200 bg-white/50 px-8 text-slate-900 shadow-sm backdrop-blur hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Minta Demo Full Sistem
              </Button>
            </div>
            <Link href="/android" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-emerald-800 hover:text-emerald-950 dark:text-amber-500 dark:hover:text-amber-400 transition-colors">
              Pelajari Fitur Mobile Selengkapnya
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-6 md:grid-cols-4"
          >
            {screenshots.map((shot, index) => (
              <motion.article
                key={shot.title}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className={index % 2 ? "pt-12" : ""}
              >
                <div className="group overflow-hidden rounded-2xl border border-white bg-white p-2.5 shadow-2xl transition-transform hover:-translate-y-2 dark:border-white/5 dark:bg-slate-900">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950">
                    <Image src={shot.src} alt={`${shot.title} PesantrenPro`} fill className="object-cover" sizes="(min-width: 1024px) 18vw, 45vw" />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className={`size-1.5 rounded-full ${shot.color}`} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{shot.title}</p>
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
          className="mt-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {androidAssurancePoints.map((point, index) => (
            <motion.article
              key={point.title}
              variants={fadeUp}
              transition={{ duration: 0.58 }}
              className={`rounded-2xl border border-white bg-white/60 p-8 shadow-sm backdrop-blur dark:border-white/5 dark:bg-slate-900/40 ${
                index === 1 || index === 3 ? "lg:translate-y-10" : ""
              }`}
            >
              <div className="mb-8 font-serif text-3xl italic text-slate-200 dark:text-slate-800">
                0{index + 1}
              </div>
              <h3 className="text-xl font-medium tracking-tight">{point.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{point.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AdminPanelShowcase() {
  return (
    <section id="admin-panel" className="relative bg-slate-950 py-32 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <Badge className="mb-6 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-400">
              <PanelTop className="mr-2 size-3" />
              OPERATIONAL COMMAND CENTER
            </Badge>
            <h2 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
                Kendali Penuh dalam Satu Workspace Eksklusif.
            </h2>
          </div>
          <p className="text-xl font-light leading-relaxed text-slate-400">
            Didesain untuk efisiensi tingkat tinggi, Dasbor Admin PesantrenPro menyatukan validasi data EMIS, transparansi buku besar keuangan, hingga pengawasan berbasis AI dalam satu antarmuka yang elegan and intuitif.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {adminWorkflowCards.map((workflow, index) => {
            const Icon = workflow.icon;
            return (
              <motion.article
                key={workflow.title}
                variants={fadeUp}
                transition={{ duration: 0.58 }}
                className="group relative rounded-2xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/10 hover:shadow-2xl"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-amber-500 text-slate-950 transition-transform group-hover:scale-110">
                    <Icon className="size-7" />
                  </div>
                  <span className="font-serif text-2xl italic text-white/10">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-medium tracking-tight text-white">{workflow.title}</h3>
                <p className="mt-4 text-base font-light leading-relaxed text-slate-400">{workflow.text}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {adminFeatureGroups.map((group) => (
            <motion.div key={group.title} variants={fadeUp} className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                  <group.icon className="size-5" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">{group.title}</h4>
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {group.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <Check className="size-3 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 grid gap-8 lg:grid-cols-3"
        >
          {adminScreens.map((screen, index) => (
            <motion.article
              key={screen.title}
              variants={fadeUp}
              transition={{ duration: 0.62 }}
              className={`${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl transition-all hover:border-amber-500/30">
                <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-slate-700" />
                    <span className="size-2 rounded-full bg-slate-700" />
                    <span className="size-2 rounded-full bg-slate-700" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60">{screen.title}</span>
                </div>
                <div className="relative aspect-[1368/743] bg-slate-950">
                  {screen.darkSrc ? (
                    <>
                      <Image src={screen.src} alt={`${screen.title}`} fill className="object-cover dark:hidden" sizes="(min-width: 1024px) 60vw, 100vw" />
                      <Image src={screen.darkSrc} alt={`${screen.title}`} fill className="hidden object-cover dark:block" sizes="(min-width: 1024px) 60vw, 100vw" />
                    </>
                  ) : (
                    <Image src={screen.src} alt={`${screen.title}`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                  )}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-medium tracking-tight">{screen.title}</h3>
                <p className="mt-4 text-lg font-light leading-relaxed text-slate-400">{screen.text}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TechnologyStackSection() {
  return (
    <section id="stack" className="relative overflow-hidden bg-slate-950 py-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(16,185,129,0.1),transparent_40%),radial-gradient(circle_at_85%_85%,rgba(245,158,11,0.1),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <Badge className="mb-6 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-400">
              <Code2 className="mr-2 size-3" />
              ENGINEERING EXCELLENCE
            </Badge>
            <h2 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
                Arsitektur Modern untuk Integritas Tanpa Batas.
            </h2>
          </div>
          <div>
            <p className="text-xl font-light leading-relaxed text-slate-400">
                Setiap baris kode disusun untuk memastikan sistem tetap responsif, aman, and mudah dikembangkan seiring bertumbuhnya pesantren Anda.
            </p>
            <div className="mt-10 flex flex-wrap gap-2">
              {stackHighlights.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-amber-400 backdrop-blur-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="relative mt-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 lg:grid-cols-5"
          >
            {technologyStacks.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <motion.article
                  key={stack.title}
                  variants={fadeUp}
                  transition={{ duration: 0.58 }}
                  className={`relative group rounded-2xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/10 ${
                    index % 2 ? "lg:mt-12" : ""
                  }`}
                >
                  <div className="mb-10 flex size-14 items-center justify-center rounded-2xl bg-amber-500 text-slate-950 shadow-2xl shadow-amber-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="text-xl font-medium tracking-tight">{stack.title}</h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-slate-400">{stack.text}</p>
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
    <section id="export" className="relative overflow-hidden bg-[#faf9f6] py-32 dark:bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.05),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Reveal>
          <Badge className="mb-6 rounded-full bg-emerald-950 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white dark:bg-amber-500 dark:text-slate-950">
            <FileSpreadsheet className="mr-2 size-3" />
            REKAPITULASI & AUDIT
          </Badge>
          <h2 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
              Data yang Siap Menjadi Dokumen Resmi.
          </h2>
          <p className="mt-8 text-xl font-light leading-relaxed text-slate-600 dark:text-slate-400">
              Ekspor Excel untuk rekap harian, PDF berstempel untuk arsip resmi, hingga pemindaian QR untuk validasi lapangan. Memastikan setiap data pesantren Anda memiliki nilai guna yang maksimal.
          </p>
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/5 dark:bg-slate-900">
            <div className="relative aspect-[1368/743] bg-slate-50 dark:bg-slate-950">
              <Image src="/scanqr.png" alt="Sistem QR PesantrenPro" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
          </div>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid content-start gap-6 sm:grid-cols-2"
        >
          {reportingFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                transition={{ duration: 0.58 }}
                className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-white/5 dark:bg-slate-900/50"
              >
                <div className="mb-10 flex size-12 items-center justify-center rounded-xl bg-emerald-950 text-amber-400 dark:bg-amber-500/10 dark:text-amber-500">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl font-medium tracking-tight">{feature.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{feature.text}</p>
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
    <section id="bonus-website" className="relative overflow-hidden bg-white py-32 dark:bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.05),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
        <Reveal>
          <Badge className="mb-6 rounded-full bg-amber-500 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-950">
            <Gift className="mr-2 size-3" />
            PREMIUM PRIVILEGE
          </Badge>
          <h2 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
              Wajah Digital Pesantren yang Berwibawa.
          </h2>
          <p className="mt-8 text-xl font-light leading-relaxed text-slate-600 dark:text-slate-400">
              Paket implementasi PesantrenPro dilengkapi dengan website profil profesional. Menjadi gerbang pertama bagi calon wali santri untuk mengenal nilai and keunggulan lembaga Anda.
          </p>
          <div className="mt-12">
            <Button
              render={<a href="#kontak" />}
              nativeButton={false}
              size="lg"
              className="h-14 rounded-full bg-emerald-950 px-10 text-white shadow-2xl shadow-emerald-950/20 hover:bg-emerald-900 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400"
            >
              Dapatkan Website Custom
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-slate-100 bg-[#faf9f6] p-4 shadow-2xl dark:border-white/5 dark:bg-slate-950">
            <div className="mb-4 flex items-center justify-between rounded-xl border border-white bg-white/80 px-6 py-5 dark:border-white/5 dark:bg-slate-900/80">
              <div className="flex items-center gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-950 text-amber-400 dark:bg-amber-500 dark:text-slate-950">
                  <Globe2 className="size-6" />
                </div>
                <div>
                  <p className="text-lg font-medium tracking-tight">Website Profil Pesantren</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-amber-500/60">Included in Implementation Package</p>
                </div>
              </div>
              <Badge className="rounded-full bg-emerald-100 text-emerald-900 dark:bg-amber-500/20 dark:text-amber-400">BONUS</Badge>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {bonusWebsiteFeatures.map((feature) => (
                <div key={feature} className="flex gap-4 rounded-xl border border-white bg-white/80 p-6 dark:border-white/5 dark:bg-slate-900/80">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-amber-500/10 dark:text-amber-500">
                    <Check className="size-3 stroke-[4]" />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">{feature}</p>
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
    <section id="masalah" className="relative bg-white py-32 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6 rounded-full border-slate-200 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            TANTANGAN ERA DIGITAL
          </Badge>
          <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              Mengakhiri Kerumitan Administrasi Tradisional.
          </h2>
          <p className="mt-8 text-xl font-light leading-relaxed text-slate-500 dark:text-slate-400">
              Masalah utama bukan pada ketidaktelitian, melainkan pada alat kerja yang belum menyatu. PesantrenPro hadir untuk menyelaraskan ritme kerja lembaga Anda.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid gap-6 md:grid-cols-2"
        >
          {problemCards.map((problem) => {
            const Icon = problem.icon;
            return (
              <motion.article
                key={problem.title}
                variants={fadeUp}
                className="group rounded-2xl border border-slate-100 bg-[#faf9f6] p-10 transition-all hover:bg-white hover:shadow-2xl dark:border-white/5 dark:bg-slate-950"
              >
                <div className="mb-10 flex size-14 items-center justify-center rounded-2xl bg-slate-900 text-white transition-transform group-hover:scale-110 dark:bg-white/5 dark:text-slate-400">
                  <Icon className="size-7" />
                </div>
                <h3 className="text-3xl font-medium tracking-tight">{problem.title}</h3>
                <p className="mt-6 text-lg font-light leading-relaxed text-slate-500 dark:text-slate-400">{problem.text}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <Reveal delay={0.08}>
          <div className="mt-12 rounded-2xl bg-emerald-950 p-10 text-center text-white shadow-2xl dark:bg-slate-800">
            <p className="mx-auto max-w-4xl text-2xl font-light leading-relaxed">
              &ldquo;PesantrenPro menyatukan seluruh elemen administrasi tanpa menambah beban kerja, melainkan menggantikan cara lama yang melelahkan dengan alur yang cerdas.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section id="bukti" className="bg-[#faf9f6] py-32 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
        <Reveal>
          <Badge className="mb-6 rounded-full bg-emerald-950 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white dark:bg-amber-500 dark:text-slate-950">
            TESTIMONI MITRA
          </Badge>
          <h2 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
              Dibangun dari Kebutuhan Nyata di Lapangan.
          </h2>
          <p className="mt-8 text-xl font-light leading-relaxed text-slate-600 dark:text-slate-400">
              Lahir dari pesantren, untuk pesantren. Setiap fitur diuji langsung dalam operasional harian untuk memastikan keberhasilan implementasi di lembaga Anda.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <figure className="relative rounded-2xl border border-slate-200 bg-white p-10 shadow-2xl dark:border-white/5 dark:bg-slate-900">
            <div className="mb-10 text-amber-500">
                <Sparkles className="size-10 opacity-20" />
            </div>
            <blockquote className="text-3xl font-medium leading-relaxed tracking-tight text-slate-900 dark:text-white">
              &ldquo;Transformasi digital ini membuat rekapitulasi data yang biasanya memakan waktu berhari-hari menjadi hitungan menit, dengan tingkat akurasi yang absolut.&rdquo;
            </blockquote>
            <figcaption className="mt-10 border-t border-slate-100 pt-8 dark:border-white/5">
              <p className="text-lg font-bold text-slate-900 dark:text-white">Pondok Pesantren Al-Hasanah Cibeuti</p>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-amber-500/60 mt-1">Kawalu, Tasikmalaya</p>
            </figcaption>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {proofStats.map((stat) => (
                <div key={stat} className="flex items-center gap-3 rounded-xl bg-[#faf9f6] px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-700 dark:bg-slate-950 dark:text-slate-300">
                  <div className="size-1.5 rounded-full bg-emerald-500" />
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
    <section id="developer" className="bg-white py-32 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <Reveal>
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#faf9f6] p-4 shadow-2xl dark:border-white/5 dark:bg-slate-950">
            <div className="aspect-[4/5] rounded-xl bg-[linear-gradient(145deg,rgba(6,78,59,0.9),rgba(20,83,45,0.6)),url('/dashboard_light.png')] bg-cover bg-center p-10 text-white transition-transform group-hover:scale-[1.02]">
              <div className="flex h-full flex-col justify-end">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400/80">Founder & Developer</p>
                <h3 className="mt-4 text-4xl font-medium tracking-tight">Nurdin Ramadhan</h3>
                <p className="mt-4 max-w-sm text-lg font-light leading-relaxed text-white/90">
                  Santri aktif Pondok Pesantren Al-Hasanah Cibeuti, Tasikmalaya. Memadukan nilai tradisional dengan inovasi teknologi.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Badge variant="outline" className="mb-6 rounded-full border-slate-200 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            DNA PENGEMBANG
          </Badge>
          <h2 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
              Dari Santri, Memahami Ritme Santri.
          </h2>
          <div className="mt-10 space-y-8 text-xl font-light leading-relaxed text-slate-600 dark:text-slate-400">
            <p>
              PesantrenPro bukan sekadar produk vendor IT biasa. Sistem ini lahir dari denyut nadi kehidupan pondok pesantren yang saya jalani setiap hari.
            </p>
            <p>
              Kami tidak menggunakan asumsi pasar. Kami menggunakan pengalaman nyata dalam menangani rekap hafalan mingguan hingga kompleksitas laporan keuangan lembaga.
            </p>
            <p>
              Dedikasi kami adalah memastikan setiap pesantren memiliki alat yang pantas untuk menjaga marwah and masa depannya di era digital.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="harga" className="bg-[#faf9f6] py-32 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Badge className="mb-6 rounded-full bg-emerald-950 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white dark:bg-amber-500 dark:text-slate-950">
            INVESTASI STRATEGIS
          </Badge>
          <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              Implementasi yang Selaras dengan Kapasitas Pesantren.
          </h2>
          <p className="mx-auto mt-10 max-w-4xl text-xl font-light leading-relaxed text-slate-600 dark:text-slate-400">
            Investasi PesantrenPro dirancang untuk efisiensi jangka panjang. Memungkinkan lembaga Anda memiliki sistem sekelas korporat dengan skema biaya yang menghargai operasional pesantren.
          </p>
          <p className="mx-auto mt-6 max-w-4xl text-lg font-medium text-emerald-800 dark:text-amber-500/80 uppercase tracking-widest">
            KONSULTASI AWAL TANPA KOMITMEN.
          </p>
          <Button
            render={<a href={whatsappDemoFullUrl} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="mt-12 h-14 rounded-full bg-emerald-950 px-10 text-white shadow-2xl shadow-emerald-950/20 hover:bg-emerald-900 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400"
          >
            Diskusikan Kebutuhan Lembaga
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="bg-white py-32 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <Badge variant="outline" className="mb-6 rounded-full border-slate-200 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            KONSULTASI UMUM
          </Badge>
          <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
              Memahami PesantrenPro Lebih Dekat.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-6">
          {faqs.map((faq) => (
            <Reveal key={faq.question}>
              <article className="rounded-2xl border border-slate-100 bg-[#faf9f6] p-10 transition-all hover:bg-white hover:shadow-2xl dark:border-white/5 dark:bg-slate-950">
                <h3 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white">{faq.question}</h3>
                <p className="mt-6 text-lg font-light leading-relaxed text-slate-600 dark:text-slate-400">{faq.answer}</p>
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
    <main className="min-h-screen overflow-hidden bg-[#faf9f6] text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-2xl dark:border-white/5 dark:bg-slate-950/70">
        <div className="border-b border-emerald-900/10 bg-emerald-950 py-2 text-white dark:border-amber-500/10 dark:bg-slate-900">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-4 text-[10px] font-bold uppercase tracking-[0.15em] sm:justify-between sm:px-6 lg:px-8">
            <span className="hidden opacity-80 sm:inline">Transformasi Digital Pesantren Berbasis Amanah & Integritas</span>
            <a href="https://wa.me/6281804886112" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300">
              <Send className="size-3" />
              Konsultasi Strategis: 081804886112
            </a>
          </div>
        </div>
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-4" aria-label="pesantrenPro">
            <span className="flex size-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
              <Image src="/pesantrenpro-mark.svg" alt="" width={44} height={44} className="size-11" priority />
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">pesantrenPro</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-700 dark:text-amber-500">Premium Ecosystem</span>
            </div>
          </a>
          <nav className="hidden items-center gap-9 text-[13px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 md:flex">
            {[
              ["Masalah", "#masalah"],
              ["Ekosistem", "#ekosistem"],
              ["Layanan", "#layanan"],
              ["Android", "/android"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <Link key={label} href={href} className="transition-colors hover:text-emerald-800 dark:hover:text-amber-400">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              render={<a href={whatsappConversationUrl} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              className="hidden rounded-full bg-emerald-950 px-6 text-white shadow-xl shadow-emerald-950/10 hover:bg-emerald-900 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400 sm:inline-flex"
            >
              Mulai Diskusi
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <section id="top" className="relative min-h-screen overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.08),transparent_40%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.05),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.05),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(15,23,42,1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,1)_1px,transparent_1px)] [background-size:64px_64px] dark:opacity-[0.05] dark:[background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)]" />
        
        <motion.div
          style={{ y: heroY }}
          className="relative mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center gap-16 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"
        >
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            <motion.div variants={fadeUp} transition={{ duration: 0.65 }}>
              <Badge className="mb-8 border-amber-500/20 bg-amber-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-amber-700 shadow-sm backdrop-blur dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400">
                <Sparkles className="mr-2 size-3" />
                EKOSISTEM DIGITAL PESANTREN TERPADU
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl text-5xl font-medium leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"
            >
              Membangun Marwah Pesantren di Era Digital.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 max-w-2xl text-xl font-light leading-relaxed text-slate-600 sm:text-2xl dark:text-slate-300"
            >
              PesantrenPro menyatukan administrasi Amanah, pengawasan santri yang Khidmah, and teknologi AI yang Cerdas dalam satu ekosistem eksklusif.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-12 flex max-w-3xl flex-wrap gap-3">
              {heroProofs.map((proof) => (
                <div key={proof} className="rounded-full border border-slate-200 bg-white/50 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur dark:border-white/5 dark:bg-white/5 dark:text-slate-300">
                  {proof}
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button
                render={<a href="#admin-panel" />}
                nativeButton={false}
                size="lg"
                className="h-14 rounded-full bg-emerald-950 px-10 text-white shadow-2xl shadow-emerald-950/20 hover:bg-emerald-900 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400"
              >
                Lihat Ekosistem
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                render={<a href={whatsappDemoFullUrl} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-14 rounded-full border-slate-200 bg-white/50 px-10 text-slate-900 shadow-sm backdrop-blur hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Minta Demo Full Sistem
              </Button>
            </motion.div>
          </motion.div>

          <DashboardMockup />
        </motion.div>
      </section>

      <ProblemSection />
      <ExperienceBridge />
      <ServiceDepthSection />

      <section id="ekosistem" className="relative bg-white py-32 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Badge variant="outline" className="mb-6 rounded-full border-emerald-500/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
              <Layers3 className="mr-2 size-3" />
              SINERGI TERPADU
            </Badge>
            <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Satu sistem untuk seluruh elemen pesantren.
            </h2>
            <p className="mt-6 text-xl font-light leading-relaxed text-slate-500 dark:text-slate-400">
                Dari meja administrasi hingga genggaman orang tua, data mengalir secara tertib, aman, and dapat dipertanggungjawabkan.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {ecosystem.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: 0.62 }}
                  whileHover={{ y: -10 }}
                  className="group rounded-2xl border border-slate-100 bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-2xl dark:border-white/5 dark:bg-slate-950/50"
                >
                  <div className="mb-10 flex size-14 items-center justify-center rounded-2xl bg-emerald-950 text-amber-400 transition-transform group-hover:scale-110 dark:bg-amber-500 dark:text-slate-950">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">{item.text}</p>
                </motion.article>
              );
            })}
          </motion.div>

          <Reveal className="mt-16 overflow-hidden rounded-2xl border border-slate-100 bg-[#faf9f6] p-6 dark:border-white/5 dark:bg-slate-950/30">
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
              {modules.map((module, index) => (
                <motion.div
                  key={module}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="rounded-xl border border-white bg-white/50 px-4 py-4 text-center text-[11px] font-bold uppercase tracking-wider text-slate-600 shadow-sm dark:border-white/5 dark:bg-white/5 dark:text-slate-400"
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
      <ImplementationProcessSection />

      <AndroidShowcaseSection />
      <TechnologyStackSection />
      <ReportingExportSection />
      <BonusWebsiteSection />

      <section id="keamanan" className="relative overflow-hidden bg-slate-950 py-32 text-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Badge className="mb-6 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-400">
                <LockKeyhole className="mr-2 size-3" />
                SECURITY & INTEGRITY LAYER
              </Badge>
              <h2 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
                  Keamanan Bukan Sekadar Fitur, Tapi Komitmen Amanah.
              </h2>
            </div>
            <p className="text-xl font-light leading-relaxed text-slate-400">
                Setiap data santri and transaksi keuangan diperlakukan dengan standar keamanan perbankan digital. Memastikan integritas lembaga Anda terjaga secara absolut di ruang siber.
            </p>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {securityControlCards.map((control, index) => {
              const Icon = control.icon;
              return (
                <motion.article
                  key={control.title}
                  variants={fadeUp}
                  transition={{ duration: 0.58 }}
                  className="group flex flex-col rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:bg-white/10"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-amber-500 text-slate-950 transition-transform group-hover:scale-110">
                      <Icon className="size-6" />
                    </div>
                    <span className="font-serif text-xl italic text-white/10">0{index + 1}</span>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500/60">{control.label}</p>
                    <h3 className="mt-4 text-xl font-medium tracking-tight text-white">{control.title}</h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-slate-400">{control.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
          <Reveal className="mt-12">
            <Button
              render={<Link href="/keamanan-sistem" />}
              nativeButton={false}
              className="h-14 rounded-full bg-amber-500 px-8 text-slate-950 font-bold hover:bg-amber-400"
            >
              Pelajari Protokol Keamanan
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </Reveal>
        </div>
      </section>

      <section id="custom" className="bg-white py-32 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal>
            <Badge variant="outline" className="mb-6 rounded-full border-emerald-500/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                <BadgeCheck className="mr-2 size-3" />
              EKSKLUSIVITAS LEMBAGA
            </Badge>
            <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
                Sistem yang Beradaptasi dengan Identitas Pesantren.
            </h2>
            <p className="mt-8 text-xl font-light leading-relaxed text-slate-500 dark:text-slate-400">
                Kami tidak memaksakan satu bentuk untuk semua. PesantrenPro dirancang agar tampil and bekerja sesuai dengan marwah, wibawa, and kebijakan internal masing-masing lembaga.
            </p>
          </Reveal>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-4"
          >
            {customPoints.map((point) => (
              <motion.div
                key={point}
                variants={fadeUp}
                whileHover={{ x: 10 }}
                className="flex gap-6 rounded-2xl border border-slate-100 bg-[#faf9f6] p-8 transition-all hover:bg-white hover:shadow-xl dark:border-white/5 dark:bg-slate-950/50"
              >
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white dark:bg-amber-500 dark:text-slate-950">
                    <Check className="size-3.5 stroke-[4]" />
                </div>
                <p className="text-lg font-light leading-relaxed text-slate-700 dark:text-slate-300">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#faf9f6] py-32 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              title: "Operasional Amanah",
              icon: UsersRound,
              text: "Manajemen santri EMIS, kesantrian, hingga laporan kehadiran yang presisi dalam satu dasbor.",
              href: "/workflow-pengguna",
            },
            {
              title: "Ekosistem Finansial",
              icon: WalletCards,
              text: "Digitalisasi SPP, dompet santri, hingga transparansi dana donasi yang tervalidasi otomatis.",
              href: "/dompet-santri",
            },
            {
              title: "Layanan Cerdas",
              icon: BookOpenCheck,
              text: "Integrasi AI untuk analisis progres hafalan hingga asistensi administrasi tingkat lanjut.",
              href: "/admin-panel",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="group h-full rounded-2xl border border-slate-200 bg-white p-10 transition-all hover:shadow-2xl dark:border-white/5 dark:bg-slate-900/50">
                  <div className="mb-10 flex size-14 items-center justify-center rounded-2xl bg-[#faf9f6] text-emerald-800 transition-transform group-hover:scale-110 dark:bg-white/5 dark:text-amber-500">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-6 text-base font-light leading-relaxed text-slate-500 dark:text-slate-400">{item.text}</p>
                  <Link href={item.href} className="mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 hover:text-emerald-950 dark:text-amber-500 dark:hover:text-amber-400 transition-colors">
                    Pelajari Selengkapnya
                    <ArrowRight className="size-3" />
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

      <section id="kontak" className="relative bg-emerald-950 py-32 text-white dark:bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
        <Reveal className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-8 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white">
              <Network className="mr-2 size-3" />
              HUBUNGAN KERJA SAMA
            </Badge>
            <h2 className="text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl">
                Mulai Percakapan, Temukan Solusi.
            </h2>
            <p className="mt-10 text-xl font-light leading-relaxed text-white/80">
              Ceritakan kondisi lembaga Anda. Tidak perlu memutuskan sekarang. Mari berdiskusi tentang tantangan administrasi pesantren Anda and bagaimana teknologi kami bisa membantu menyelesaikannya.
            </p>
            
            <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-2">
              <a
                href={whatsappConversationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start rounded-2xl border border-white/10 bg-white/5 p-8 text-left transition-all hover:bg-white/10 hover:border-amber-500/30 shadow-2xl"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">Direct Message</p>
                <p className="mt-4 text-2xl font-medium">081804886112</p>
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                    WhatsApp <ArrowRight className="size-3" />
                </div>
              </a>
              <a
                href="mailto:nurdincrs123@gmail.com"
                className="group flex flex-col items-start rounded-2xl border border-white/10 bg-white/5 p-8 text-left transition-all hover:bg-white/10 hover:border-amber-500/30 shadow-2xl"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400">Official Email</p>
                <p className="mt-4 text-2xl font-medium">nurdincrs123@gmail.com</p>
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                    Kirim Email <ArrowRight className="size-3" />
                </div>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-slate-200 bg-[#faf9f6] px-4 py-16 dark:border-white/5 dark:bg-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
               <span className="flex size-10 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
                  <Image src="/pesantrenpro-mark.svg" alt="" width={40} height={40} className="size-10" />
                </span>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">pesantrenPro</span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-amber-500">Premium Ecosystem</span>
                </div>
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-sm">
              Ekosistem digital eksklusif yang dirancang untuk menjaga marwah and efisiensi operasional pondok pesantren modern.
            </p>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
             <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">© 2026 PesantrenPro. All Rights Reserved.</p>
             <div className="flex gap-8">
                {["Terms", "Privacy", "Security"].map(item => (
                    <a key={item} href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-800 dark:hover:text-amber-400">{item}</a>
                ))}
             </div>
          </div>
        </div>
      </footer>

      <a
        href={whatsappConversationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-950 px-6 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:bg-emerald-900 hover:scale-105 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400"
      >
        <Send className="size-4" />
        Konsultasi Strategis
      </a>
    </main>
  );
}
