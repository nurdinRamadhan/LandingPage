import type { Metadata } from "next";

import { DetailPage, type DetailPageData, whatsappDemoAndroidUrl, whatsappDemoFullUrl } from "@/components/detail-page";

export const metadata: Metadata = {
  title: "Admin Panel | pesantrenPro",
  description:
    "Detail fitur Admin Panel pesantrenPro: Dashboard, EMIS, kesantrian, tahfidz, keuangan, Dompet Santri, kantin, alumni, inventaris, notifikasi, AI/RAG, dan Backend Command Center.",
};

const data: DetailPageData = {
  eyebrow: "Admin Panel",
  title: "Panel kerja pesantren yang lengkap, tertib, dan bisa diaudit.",
  description:
    "Admin Panel pesantrenPro menggabungkan data induk, EMIS, akademik, kesantrian, keuangan, Dompet Santri, kantin, alumni, inventaris, berita, notifikasi, audit, AI/RAG, dan backend operations dalam satu ruang kerja.",
  primaryCta: "Minta Demo Full Sistem",
  primaryCtaUrl: whatsappDemoFullUrl,
  secondaryCta: "Minta Demo Android",
  secondaryCtaUrl: whatsappDemoAndroidUrl,
  stats: ["20+ modul operasional", "EMIS ready", "Audit Locked finance", "Backend Command Center"],
  heroCards: [
    {
      title: "Bukan daftar menu biasa",
      icon: "panel",
      text: "Setiap modul dirancang sebagai workflow: siapa input, siapa validasi, siapa memantau, dan bagaimana jejak keputusan tersimpan.",
    },
    {
      title: "Siap untuk operasional pesantren",
      icon: "users",
      text: "Role super admin, rois, dewan, bendahara, kesantrian, dan kantin punya batas akses agar pekerjaan tidak tumpang tindih.",
    },
    {
      title: "Laporan siap dibawa",
      icon: "excel",
      text: "Data penting dapat diekspor ke Excel/PDF untuk EMIS, keuangan, pengeluaran, inventaris, audit, dan laporan operasional.",
    },
    {
      title: "Dibantu AI, tetap terkendali",
      icon: "sparkles",
      text: "AI membantu analisis, RAG, dan laporan. Aksi penting tetap harus dikonfirmasi admin dan tercatat di audit log.",
    },
  ],
  bands: [
    {
      eyebrow: "Data Foundation",
      title: "Identitas pesantren dan data santri menjadi pusat rujukan semua modul.",
      text: "Data profil pesantren, struktur organisasi, admin, dan data induk santri membuat tagihan, wali Android, Dompet Santri, notifikasi, laporan, dan audit bekerja dengan konsisten.",
      cards: [
        {
          title: "Profil Pesantren",
          icon: "panel",
          text: "Logo, identitas resmi, alamat, kontak, tahun ajaran, struktur organisasi, foto personel pesantren, jabatan, dan urutan tampilan.",
        },
        {
          title: "Manajemen Admin",
          icon: "key",
          text: "Membuat akun personel, menentukan role, membatasi akses gender/jurusan, melihat status aktif, serta menonaktifkan akses lama.",
        },
        {
          title: "Data Santri EMIS",
          icon: "users",
          text: "Biodata, NIS, NSP, NISN, NIK, KK, keluarga, alamat, kelas, jurusan, mukim, pembimbing, PIP/KIP, kebutuhan khusus, foto, dan data tambahan EMIS.",
        },
        {
          title: "Akun Wali Otomatis",
          icon: "smartphone",
          text: "Saat registrasi santri, admin dapat memilih penanggung jawab aplikasi dan membuat akun wali untuk Android.",
        },
        {
          title: "Geocode dan Persebaran",
          icon: "network",
          text: "Alamat santri diproses menjadi koordinat, status geocode dipantau, dan peta persebaran membantu pimpinan membaca asal santri.",
        },
        {
          title: "QR Identitas dan Export",
          icon: "qr",
          text: "Setiap santri dapat memiliki QR identitas. Ekspor Excel EMIS dilakukan lewat backend agar akses data sensitif tetap tercatat.",
        },
        {
          title: "Validasi Kesiapan EMIS",
          icon: "shield",
          text: "Sistem menandai data kurang lengkap, format NIK/KK, geocode pending/gagal, dan kebutuhan perbaikan sebelum ekspor resmi.",
        },
      ],
    },
    {
      eyebrow: "Pesantren Operations",
      title: "Aktivitas harian santri tercatat dalam alur yang bisa dipantau.",
      text: "Kesantrian, tahfidz, akademik, dan program khusus dibuat agar operasional pesantren tidak bergantung pada catatan yang tersebar.",
      cards: [
        {
          title: "Kesantrian",
          icon: "book",
          text: "Pelanggaran, kategori pembinaan, poin, tindakan, izin keluar, status kembali, keluhan kesehatan, tindakan UKS, dan riwayat santri.",
        },
        {
          title: "Tahfidz dan Kitab",
          icon: "book",
          text: "Ziyadah, murojaah, hafalan kitab, tanggal, capaian, pembimbing, catatan perkembangan, dan riwayat detail.",
        },
        {
          title: "Akademik",
          icon: "excel",
          text: "Laporan nilai, pantauan akademik, bank soal, pembuatan ulangan mingguan, arsip ulangan, dan rekap nilai.",
        },
        {
          title: "Diklat dan Pasaran",
          icon: "badge",
          text: "Peserta program, master data diklat, periode, kitab pendukung, pembayaran program berbayar, dan kebutuhan laporan.",
        },
        {
          title: "Scan QR Multi Mode",
          icon: "qr",
          text: "Scanner mendukung mode santri, diklat, invoice/tagihan, input manual, prefix SANTRI/DIKLAT/INV, anti double-scan, riwayat scan, suara, dan getar.",
        },
        {
          title: "Inventaris Aset",
          icon: "database",
          text: "Daftar barang, kategori, lokasi aset, detail barang, jumlah, kondisi, perpindahan, kerusakan, dan bahan laporan aset.",
        },
        {
          title: "Informasi dan Berita",
          icon: "send",
          text: "Membuat, mengedit, mengelola status publikasi, dan menyampaikan pengumuman resmi ke pengguna aplikasi.",
        },
      ],
    },
    {
      eyebrow: "Finance & Wallet",
      title: "Keuangan pesantren dan Dompet Santri berada dalam satu audit trail.",
      text: "Bendahara dapat bekerja dari tagihan sampai buku besar, sementara Dompet Santri dijaga dengan ledger-first dan workflow kantin.",
      cards: [
        {
          title: "Keuangan dan SPP",
          icon: "wallet",
          text: "Membuat tagihan, mencatat pembayaran manual, membaca status Midtrans, memantau transaksi pending/sukses/gagal, dan export Excel multi-sheet.",
        },
        {
          title: "Buku Besar Keuangan",
          icon: "excel",
          text: "Riwayat transaksi permanen dengan tanggal Masehi/Hijriah, pencatat, metode, nominal, status, order ID, dan label Audit Locked.",
        },
        {
          title: "Donasi dan Pengeluaran",
          icon: "send",
          text: "Input infaq, wakaf, shadaqah, donasi, kas keluar, kategori pengeluaran, bukti, dan catatan ke buku besar transaksi.",
        },
        {
          title: "Dompet dan Kantin",
          icon: "qr",
          text: "Akun saldo, QR publik, top up, kantin merchant, outlet, device, settlement, ledger merchant, dispute, risk event, dan rekonsiliasi.",
        },
        {
          title: "Operasional Dompet",
          icon: "monitor",
          text: "Tab peringatan keamanan, laporan wali, cek saldo, cek ledger, top up Midtrans, notifikasi, dan maintenance broadcast.",
        },
        {
          title: "Audit Keamanan Dompet",
          icon: "shield",
          text: "Audit satu klik memeriksa rekonsiliasi, hash-chain, freeze switch, risk event, dispute SLA, device kantin, RLS/grant, QR opaque, Argon2id, dan cron.",
        },
        {
          title: "Manajemen Kantin",
          icon: "network",
          text: "Akun kantin, merchant, outlet, assignment, device, saldo merchant, pencairan, ledger merchant, dan bukti settlement.",
        },
      ],
    },
    {
      eyebrow: "Intelligence & Control",
      title: "Pimpinan dan super admin punya alat baca kondisi sistem.",
      text: "AI/RAG, notifikasi, log aktivitas, dan Backend Command Center membantu pesantren memahami data tanpa melepas kontrol ke automasi berisiko.",
      cards: [
        {
          title: "AI Intelligence Suite",
          icon: "sparkles",
          text: "Mode Analysis, AI Agent dengan konfirmasi, RAG Decision, Laporan, knowledge base, query test, log query, dan statistik latency.",
        },
        {
          title: "Notifikasi Push",
          icon: "network",
          text: "Membuat notifikasi, memilih target penerima, melihat status terkirim/gagal, dan mendukung notifikasi operasional maupun dompet.",
        },
        {
          title: "Manajemen Alumni",
          icon: "users",
          text: "Data alumni, kontak, tahun lulus, profesi, instansi, domisili, foto, forum, laporan konten, moderasi, dan monitoring metadata chat.",
        },
        {
          title: "Log Aktivitas",
          icon: "monitor",
          text: "Mencatat siapa melakukan apa dan kapan, sehingga sengketa data dan audit internal punya bukti kerja.",
        },
        {
          title: "Backend Command Center",
          icon: "database",
          text: "Health score, incident, timeline, diagnostics, private audit log, Midtrans reconciliation, FCM token health, dan safe repair untuk super admin.",
        },
        {
          title: "Private Audit Log",
          icon: "lock",
          text: "Filter backend alert, finance audit event, component, severity, status, table name, search, pagination, AI context, dan action center.",
        },
        {
          title: "Backend Diagnostics",
          icon: "server",
          text: "Melihat status cron, antrean notifikasi, token FCM, antrean Midtrans, alert, kegagalan pg_net, dan rekomendasi operasional.",
        },
      ],
    },
  ],
  closing: {
    title: "Admin Panel adalah pusat kerja, bukan lampiran sistem.",
    text: "Ketika admin panel rapi, Android wali, pembayaran, dompet, laporan, dan audit ikut tertib karena semua data berasal dari workflow yang sama.",
    cta: "Minta Demo Full Sistem",
    ctaUrl: whatsappDemoFullUrl,
  },
};

export default function AdminPanelPage() {
  return <DetailPage data={data} />;
}
