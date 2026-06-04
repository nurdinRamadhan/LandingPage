import type { Metadata } from "next";

import { DetailPage, type DetailPageData, whatsappDemoAndroidUrl, whatsappDemoFullUrl } from "@/components/detail-page";

export const metadata: Metadata = {
  title: "Admin Panel",
  description:
    "Detail fitur Admin Panel sanadQu: Dasbor, EMIS, kesantrian, tahfidz, keuangan, Dompet Santri, kantin, alumni, inventaris, notifikasi, AI/RAG, dan Pusat Kendali Backend.",
  alternates: {
    canonical: "/admin-panel",
  },
};

const data: DetailPageData = {
  eyebrow: "Admin Panel",
  title: "Panel kerja pesantren yang lengkap, tertib, dan bisa diaudit.",
  description:
    "Admin Panel sanadQu menggabungkan data induk, EMIS, akademik, kesantrian, keuangan, Dompet Santri, kantin, alumni, inventaris, berita, notifikasi, audit, AI/RAG, dan operasional backend dalam satu ruang kerja.",
  primaryCta: "Minta Demo Full Sistem",
  primaryCtaUrl: whatsappDemoFullUrl,
  secondaryCta: "Minta Demo Android",
  secondaryCtaUrl: whatsappDemoAndroidUrl,
  stats: ["20+ modul operasional", "Siap EMIS", "Keuangan Audit Terkunci", "Pusat Kendali Backend"],
  heroCards: [
    {
      title: "Bukan daftar menu biasa",
      icon: "panel",
      text: "Setiap modul dirancang sebagai alur kerja: siapa yang memasukkan data, siapa yang memvalidasi, siapa yang memantau, dan bagaimana jejak keputusan tersimpan.",
    },
    {
      title: "Siap untuk operasional pesantren",
      icon: "users",
      text: "Peran admin utama, rois, dewan, bendahara, kesantrian, dan kantin memiliki batasan akses agar pekerjaan tidak tumpang tindih.",
    },
    {
      title: "Laporan siap digunakan",
      icon: "excel",
      text: "Data penting dapat diekspor ke Excel/PDF untuk EMIS, keuangan, pengeluaran, inventaris, audit, dan laporan operasional.",
    },
    {
      title: "Dibantu AI, tetap terkendali",
      icon: "sparkles",
      text: "AI membantu analisis, RAG, dan laporan. Tindakan penting tetap harus dikonfirmasi admin dan tercatat dalam log audit.",
    },
  ],
  bands: [
    {
      eyebrow: "Data Foundation",
      title: "Identitas pesantren dan data santri menjadi pusat rujukan semua modul.",
      text: "Data profil pesantren, struktur organisasi, admin, dan data induk santri membuat tagihan, aplikasi Android wali, Dompet Santri, notifikasi, laporan, dan audit bekerja secara konsisten.",
      cards: [
        {
          title: "Profil Pesantren",
          icon: "panel",
          text: "Logo, identitas resmi, alamat, kontak, tahun ajaran, struktur organisasi, foto personel pesantren, jabatan, dan urutan tampilan.",
        },
        {
          title: "Manajemen Admin",
          icon: "key",
          text: "Membuat akun personel, menentukan peran, membatasi akses gender/jurusan, melihat status aktif, serta menonaktifkan akses lama.",
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
          title: "QR Identitas dan Ekspor",
          icon: "qr",
          text: "Setiap santri dapat memiliki QR identitas. Ekspor Excel EMIS dilakukan melalui backend agar akses data sensitif tetap tercatat.",
        },
        {
          title: "Validasi Kesiapan EMIS",
          icon: "shield",
          text: "Sistem menandai data yang kurang lengkap, format NIK/KK, geocode tertunda/gagal, dan kebutuhan perbaikan sebelum ekspor resmi.",
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
          text: "Peserta program, data induk diklat, periode, kitab pendukung, pembayaran program berbayar, dan kebutuhan laporan.",
        },
        {
          title: "Scan QR Multi Mode",
          icon: "qr",
          text: "Pemindai mendukung mode santri, diklat, invoice/tagihan, masukan manual, awalan SANTRI/DIKLAT/INV, anti pemindaian ganda, riwayat, suara, dan getar.",
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
      title: "Keuangan pesantren dan Dompet Santri berada dalam satu jejak audit.",
      text: "Bendahara dapat bekerja mulai dari tagihan sampai buku besar, sementara Dompet Santri dijaga dengan prinsip ledger-first dan alur kerja kantin.",
      cards: [
        {
          title: "Keuangan dan SPP",
          icon: "wallet",
          text: "Membuat tagihan, mencatat pembayaran manual, membaca status Midtrans, memantau transaksi tertunda/sukses/gagal, dan ekspor Excel multi-sheet.",
        },
        {
          title: "Buku Besar Keuangan",
          icon: "excel",
          text: "Riwayat transaksi permanen dengan tanggal Masehi/Hijriah, pencatat, metode, nominal, status, ID pesanan, dan label Audit Terkunci.",
        },
        {
          title: "Donasi dan Pengeluaran",
          icon: "send",
          text: "Input infaq, wakaf, shadaqah, donasi, kas keluar, kategori pengeluaran, bukti, dan catatan ke buku besar transaksi.",
        },
        {
          title: "Dompet dan Kantin",
          icon: "qr",
          text: "Akun saldo, QR publik, isi ulang, kantin merchant, outlet, perangkat, pencairan, buku besar merchant, sengketa, risiko, dan rekonsiliasi.",
        },
        {
          title: "Operasional Dompet",
          icon: "monitor",
          text: "Tab peringatan keamanan, laporan wali, cek saldo, cek buku besar, isi ulang Midtrans, notifikasi, dan siaran pemeliharaan.",
        },
        {
          title: "Audit Keamanan Dompet",
          icon: "shield",
          text: "Audit satu klik memeriksa rekonsiliasi, hash-chain, tombol pembeku, kejadian risiko, SLA sengketa, perangkat kantin, RLS, QR buram, Argon2id, dan cron.",
        },
        {
          title: "Manajemen Kantin",
          icon: "network",
          text: "Akun kantin, merchant, outlet, penugasan, perangkat, saldo merchant, pencairan, buku besar merchant, dan bukti pencairan.",
        },
      ],
    },
    {
      eyebrow: "Intelligence & Control",
      title: "Pimpinan dan admin utama memiliki alat pantau kondisi sistem.",
      text: "AI/RAG, notifikasi, log aktivitas, dan Pusat Kendali Backend membantu pesantren memahami data tanpa melepas kontrol ke otomatisasi berisiko.",
      cards: [
        {
          title: "AI Intelligence Suite",
          icon: "sparkles",
          text: "Mode Analisis, AI Agent dengan konfirmasi, Keputusan RAG, Laporan, basis pengetahuan, uji kueri, log kueri, dan statistik latensi.",
        },
        {
          title: "Notifikasi Push",
          icon: "network",
          text: "Membuat notifikasi, memilih target penerima, melihat status terkirim/gagal, dan mendukung notifikasi operasional maupun dompet.",
        },
        {
          title: "Manajemen Alumni",
          icon: "users",
          text: "Data alumni, kontak, tahun lulus, profesi, instansi, domisili, foto, forum, laporan konten, moderasi, dan pemantauan metadata obrolan.",
        },
        {
          title: "Log Aktivitas",
          icon: "monitor",
          text: "Mencatat siapa melakukan apa dan kapan, sehingga sengketa data dan audit internal memiliki bukti kerja yang sah.",
        },
        {
          title: "Pusat Kendali Backend",
          icon: "database",
          text: "Skor kesehatan, insiden, linimasa, diagnostik, log audit pribadi, rekonsiliasi Midtrans, kesehatan token FCM, dan perbaikan aman untuk admin utama.",
        },
        {
          title: "Log Audit Pribadi",
          icon: "lock",
          text: "Filter peringatan backend, kejadian audit keuangan, komponen, tingkat keparahan, status, nama tabel, pencarian, paginasi, konteks AI, dan pusat tindakan.",
        },
        {
          title: "Diagnostik Backend",
          icon: "server",
          text: "Melihat status cron, antrean notifikasi, token FCM, antrean Midtrans, peringatan, kegagalan pg_net, dan rekomendasi operasional.",
        },
      ],
    },
  ],
  closing: {
    title: "Admin Panel adalah pusat kerja, bukan sekadar lampiran sistem.",
    text: "Ketika admin panel rapi, aplikasi Android wali, pembayaran, dompet, laporan, dan audit akan ikut tertib karena semua data berasal dari alur kerja yang sama.",
    cta: "Minta Demo Full Sistem",
    ctaUrl: whatsappDemoFullUrl,
  },
};

export default function AdminPanelPage() {
  return <DetailPage data={data} />;
}
