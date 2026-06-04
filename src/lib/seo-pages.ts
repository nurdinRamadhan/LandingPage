import type { Metadata } from "next";

import type { DetailPageData } from "@/components/detail-page";

type SeoPage = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  serviceType: string;
  data: DetailPageData;
};

export const seoPages = {
  "sistem-digital-pesantren": {
    slug: "sistem-digital-pesantren",
    title: "Sistem Digital Pesantren",
    description:
      "Sistem digital pesantren sanadQu membantu pondok mengelola data santri, EMIS, SPP, Dompet Santri, tahfidz, pelanggaran, perizinan, dan laporan dalam satu ekosistem.",
    keywords: ["sistem digital pesantren", "sistem pesantren", "digitalisasi pesantren", "manajemen pesantren digital"],
    serviceType: "Sistem digital pesantren",
    data: {
      eyebrow: "Sistem Digital Pesantren",
      title: "Sistem digital pesantren untuk operasional yang tertib dan bisa diaudit.",
      description:
        "sanadQu membantu pesantren beralih dari catatan tersebar ke sistem terpusat: data santri, EMIS, tagihan, pembayaran, Dompet Santri, tahfidz, kesehatan, izin, inventaris, dan laporan pimpinan.",
      primaryCta: "Konsultasi Sistem Pesantren",
      primaryCtaUrl:
        "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20sistem%20digital%20pesantren%20sanadQu.",
      secondaryCta: "Lihat Admin Panel",
      secondaryCtaUrl: "/admin-panel",
      stats: ["Data Terpusat", "Siap EMIS", "Keuangan Tercatat", "Aplikasi Wali"],
      heroCards: [
        {
          title: "Data santri menjadi rujukan utama",
          icon: "users",
          text: "Identitas, wali, kelas, jurusan, mukim, kesehatan, hafalan, dan catatan kesantrian berada dalam struktur data yang konsisten.",
        },
        {
          title: "Keuangan tidak tercecer",
          icon: "wallet",
          text: "Tagihan, pembayaran, donasi, pengeluaran, dan Dompet Santri dicatat dengan alur yang meninggalkan jejak audit.",
        },
        {
          title: "Wali mendapat informasi resmi",
          icon: "smartphone",
          text: "Aplikasi Android menampilkan data resmi dari admin panel, bukan laporan manual yang mudah tertunda atau berbeda versi.",
        },
        {
          title: "Pimpinan membaca kondisi pesantren",
          icon: "monitor",
          text: "Dasbor dan laporan membantu pengasuh atau pengurus melihat ringkasan operasional tanpa membuka semua menu teknis.",
        },
      ],
      bands: [
        {
          eyebrow: "Fondasi Data",
          title: "Satu pusat data untuk administrasi pesantren.",
          text: "Sistem digital pesantren harus dimulai dari data induk yang rapi. Dari sana, modul lain dapat bekerja lebih akurat.",
          cards: [
            {
              title: "Data Santri dan Wali",
              icon: "users",
              text: "Biodata, NIS, NISN, keluarga, alamat, kelas, jurusan, mukim, foto, dan akun wali disusun dalam satu sumber data.",
              items: ["Relasi wali-santri", "QR identitas", "Status mukim", "Data EMIS"],
            },
            {
              title: "Kesantrian Harian",
              icon: "book",
              text: "Pelanggaran, poin pembinaan, izin keluar, status kembali, keluhan kesehatan, dan prestasi santri dapat dicatat teratur.",
              items: ["Pelanggaran", "Perizinan", "Kesehatan", "Prestasi"],
            },
            {
              title: "Tahfidz dan Akademik",
              icon: "badge",
              text: "Progres hafalan Al-Qur'an, murojaah, hafalan kitab, nilai, dan catatan pembimbing bisa dilihat sebagai perkembangan santri.",
              items: ["Ziyadah", "Murojaah", "Kitab", "Nilai"],
            },
            {
              title: "Laporan Pengurus",
              icon: "excel",
              text: "Data penting dapat diolah menjadi laporan internal, bahan evaluasi, dan kebutuhan administrasi resmi pesantren.",
              items: ["Excel", "PDF", "Rekap bulanan", "Audit"],
            },
          ],
        },
        {
          eyebrow: "Keuangan dan Dompet",
          title: "Administrasi keuangan santri dibuat lebih transparan.",
          text: "Bendahara membutuhkan catatan yang jelas, wali membutuhkan informasi yang mudah dicek, dan pesantren membutuhkan jejak keputusan yang tertib.",
          cards: [
            {
              title: "Tagihan SPP",
              icon: "wallet",
              text: "Tagihan dapat dibuat, dipantau, dicatat, dan dikaitkan dengan status pembayaran agar wali mengetahui kewajiban santri.",
            },
            {
              title: "Pembayaran Digital",
              icon: "qr",
              text: "Integrasi pembayaran membantu pesantren mengurangi pencatatan manual dan mempercepat konfirmasi transaksi.",
            },
            {
              title: "Dompet Santri",
              icon: "fingerprint",
              text: "Uang jajan santri dapat dikontrol dalam lingkungan pesantren melalui saldo internal, limit, dan transaksi kantin.",
            },
            {
              title: "Buku Besar",
              icon: "database",
              text: "Perubahan saldo dan transaksi penting dicatat sebagai riwayat, sehingga koreksi tidak menghapus jejak sebelumnya.",
            },
          ],
        },
        {
          eyebrow: "Implementasi",
          title: "Digitalisasi mengikuti cara kerja pondok, bukan memaksa pondok berubah total.",
          text: "Setiap pesantren punya struktur pengurus dan kebijakan berbeda. Karena itu sistem perlu dikonfigurasi sesuai peran dan kebutuhan operasional.",
          cards: [
            {
              title: "Pemetaan Peran",
              icon: "key",
              text: "Kesantrian, bendahara, admin utama, kantin, rois, dan pimpinan memiliki batas kerja yang jelas.",
            },
            {
              title: "Migrasi Bertahap",
              icon: "layers",
              text: "Pesantren bisa mulai dari data santri dan keuangan, lalu menambah modul tahfidz, dompet, alumni, dan laporan.",
            },
            {
              title: "Pelatihan Pengurus",
              icon: "monitor",
              text: "Alur kerja dibuat agar pengurus memahami kapan input data, kapan memverifikasi, dan kapan melakukan eskalasi.",
            },
            {
              title: "Pendampingan Teknis",
              icon: "wrench",
              text: "Implementasi sistem membutuhkan penyesuaian data, akun, hak akses, dan kebiasaan administrasi yang berjalan.",
            },
          ],
        },
      ],
      closing: {
        title: "Mulai digitalisasi dari alur yang paling berdampak.",
        text: "Kami bisa membantu membaca kebutuhan pesantren Anda dan menentukan modul awal yang paling realistis untuk diterapkan.",
        cta: "Diskusi Sistem Digital Pesantren",
        ctaUrl:
          "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20diskusi%20sistem%20digital%20pesantren%20sanadQu.",
      },
    },
  },
  "digitalisasi-pesantren": {
    slug: "digitalisasi-pesantren",
    title: "Digitalisasi Pesantren",
    description:
      "Digitalisasi pesantren dengan sanadQu membantu pondok menata administrasi, keuangan, komunikasi wali santri, tahfidz, dan laporan tanpa menghilangkan karakter pesantren.",
    keywords: ["digitalisasi pesantren", "transformasi digital pesantren", "pesantren digital", "aplikasi digital pesantren"],
    serviceType: "Digitalisasi pesantren",
    data: {
      eyebrow: "Digitalisasi Pesantren",
      title: "Digitalisasi pesantren yang mengikuti adab kerja pondok.",
      description:
        "Digitalisasi bukan sekadar mengganti kertas dengan aplikasi. sanadQu menata alur data, peran pengurus, transparansi keuangan, dan komunikasi wali agar pesantren bekerja lebih cepat tanpa kehilangan kendali.",
      primaryCta: "Rancang Digitalisasi Pesantren",
      primaryCtaUrl:
        "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20kami%20ingin%20merancang%20digitalisasi%20pesantren%20dengan%20sanadQu.",
      secondaryCta: "Lihat Workflow",
      secondaryCtaUrl: "/workflow-pengguna",
      stats: ["Bertahap", "Berbasis Peran", "Ramah Wali", "Aman untuk Data"],
      heroCards: [
        {
          title: "Tidak semua proses harus langsung berubah",
          icon: "layers",
          text: "Pesantren bisa mulai dari modul paling penting, seperti data santri, tagihan, atau pemantauan wali.",
        },
        {
          title: "Pengurus tetap menjadi pusat keputusan",
          icon: "shield",
          text: "Sistem membantu mencatat dan memvalidasi, tetapi keputusan penting tetap berada pada pengurus yang berwenang.",
        },
        {
          title: "Wali melihat informasi lebih cepat",
          icon: "smartphone",
          text: "Informasi santri tidak lagi menunggu pesan manual karena data resmi dapat tampil di aplikasi wali.",
        },
        {
          title: "Laporan lebih mudah dipertanggungjawabkan",
          icon: "excel",
          text: "Rekap data dan keuangan dapat disiapkan dari sistem yang memiliki sumber data lebih tertib.",
        },
      ],
      bands: [
        {
          eyebrow: "Strategi",
          title: "Digitalisasi perlu peta jalan, bukan sekadar instal aplikasi.",
          text: "Agar berhasil, pesantren perlu tahu proses mana yang didahulukan, siapa yang bertanggung jawab, dan data apa yang harus dibersihkan.",
          cards: [
            {
              title: "Audit Kebutuhan",
              icon: "monitor",
              text: "Memetakan masalah yang paling sering terjadi: data santri ganda, tagihan tidak sinkron, laporan lambat, atau komunikasi wali yang menumpuk.",
            },
            {
              title: "Prioritas Modul",
              icon: "badge",
              text: "Menentukan modul awal yang paling berdampak agar pengurus tidak kewalahan pada masa transisi.",
            },
            {
              title: "Struktur Hak Akses",
              icon: "key",
              text: "Membagi akses berdasarkan tugas sehingga data sensitif tidak terbuka ke semua operator.",
            },
            {
              title: "Evaluasi Berkala",
              icon: "sparkles",
              text: "Membaca penggunaan sistem dan menyesuaikan alur agar digitalisasi benar-benar dipakai dalam kerja harian.",
            },
          ],
        },
        {
          eyebrow: "Area Digitalisasi",
          title: "Bagian operasional yang paling sering membutuhkan sistem.",
          text: "sanadQu menyiapkan modul untuk area yang umum menjadi beban administrasi di pesantren.",
          cards: [
            {
              title: "Administrasi Santri",
              icon: "users",
              text: "Pendaftaran, data induk, keluarga, kelas, jurusan, mukim, dan kebutuhan EMIS berada dalam struktur yang sama.",
              items: ["Santri", "Wali", "EMIS", "QR identitas"],
            },
            {
              title: "Keuangan",
              icon: "wallet",
              text: "SPP, donasi, pembayaran digital, pengeluaran, dan laporan keuangan dapat ditata lebih transparan.",
              items: ["Tagihan", "Pembayaran", "Donasi", "Laporan"],
            },
            {
              title: "Kesantrian",
              icon: "book",
              text: "Pelanggaran, izin, kesehatan, prestasi, tahfidz, dan aktivitas santri dapat masuk ke riwayat yang mudah dicari.",
              items: ["Disiplin", "Izin", "Tahfidz", "Kesehatan"],
            },
            {
              title: "Komunikasi Wali",
              icon: "send",
              text: "Wali mendapat ringkasan resmi dari sistem dan tidak hanya bergantung pada komunikasi personal yang mudah terlewat.",
              items: ["Aplikasi wali", "Notifikasi", "Tagihan", "Progres santri"],
            },
          ],
        },
      ],
      closing: {
        title: "Digitalisasi pesantren bisa dimulai dari langkah kecil yang rapi.",
        text: "Diskusikan kondisi pondok Anda, lalu kita tentukan urutan modul yang paling masuk akal.",
        cta: "Konsultasi Digitalisasi Pesantren",
        ctaUrl:
          "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20digitalisasi%20pesantren.",
      },
    },
  },
  "jasa-pembuatan-aplikasi-pesantren": {
    slug: "jasa-pembuatan-aplikasi-pesantren",
    title: "Jasa Pembuatan Aplikasi Pesantren",
    description:
      "Jasa pembuatan aplikasi pesantren untuk admin panel, aplikasi wali santri, pembayaran SPP, Dompet Santri, tahfidz, EMIS, notifikasi, dan laporan operasional.",
    keywords: ["jasa pembuatan aplikasi pesantren", "buat aplikasi pesantren", "developer aplikasi pesantren", "jasa aplikasi pondok pesantren"],
    serviceType: "Jasa pembuatan aplikasi pesantren",
    data: {
      eyebrow: "Jasa Pembuatan Aplikasi Pesantren",
      title: "Jasa pembuatan aplikasi pesantren untuk kebutuhan nyata pondok.",
      description:
        "sanadQu menyediakan ekosistem aplikasi pesantren yang dapat digunakan untuk admin panel, aplikasi Android wali santri, pembayaran, Dompet Santri, tahfidz, EMIS, laporan, keamanan, dan komunikasi.",
      primaryCta: "Minta Penawaran Aplikasi",
      primaryCtaUrl:
        "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20penawaran%20jasa%20pembuatan%20aplikasi%20pesantren%20sanadQu.",
      secondaryCta: "Lihat Aplikasi Android",
      secondaryCtaUrl: "/android",
      stats: ["Admin Panel", "Android Wali", "Pembayaran", "Custom Alur"],
      heroCards: [
        {
          title: "Dibangun untuk pesantren",
          icon: "panel",
          text: "Fitur tidak dimulai dari template bisnis umum, tetapi dari kebutuhan santri, wali, pengurus, bendahara, dan kantin.",
        },
        {
          title: "Aplikasi wali dan admin terhubung",
          icon: "smartphone",
          text: "Data resmi dimasukkan pengurus melalui admin panel dan ditampilkan kepada wali sesuai hak akses.",
        },
        {
          title: "Keuangan punya alur validasi",
          icon: "wallet",
          text: "Pembayaran, tagihan, top up, dan transaksi kantin dirancang agar tidak bergantung pada catatan manual saja.",
        },
        {
          title: "Bisa disesuaikan bertahap",
          icon: "wrench",
          text: "Pesantren dapat mendiskusikan modul awal, integrasi, dan kebutuhan custom tanpa mengganggu operasional harian.",
        },
      ],
      bands: [
        {
          eyebrow: "Lingkup Jasa",
          title: "Pembuatan aplikasi mencakup ekosistem, bukan hanya tampilan.",
          text: "Aplikasi pesantren yang bermanfaat harus menghubungkan pengguna, data, validasi, keamanan, dan laporan.",
          cards: [
            {
              title: "Admin Panel Pesantren",
              icon: "panel",
              text: "Pusat kerja untuk operator pesantren mengelola santri, tagihan, tahfidz, izin, kesehatan, inventaris, dan laporan.",
              items: ["Dashboard", "Data santri", "Keuangan", "Laporan"],
            },
            {
              title: "Aplikasi Android Wali",
              icon: "smartphone",
              text: "Aplikasi untuk wali memantau profil santri, hafalan, pelanggaran, kesehatan, tagihan, pembayaran, dan saldo dompet.",
              items: ["Profil santri", "Tagihan", "Tahfidz", "Notifikasi"],
            },
            {
              title: "Dompet dan Kantin",
              icon: "qr",
              text: "Sistem saldo internal untuk transaksi kantin, limit belanja, riwayat transaksi, dan kontrol wali.",
              items: ["QR/NFC", "Limit", "Top up", "Merchant"],
            },
            {
              title: "Keamanan dan Audit",
              icon: "shield",
              text: "Hak akses, log aktivitas, perlindungan data sensitif, dan catatan transaksi dibuat sebagai bagian dari arsitektur.",
              items: ["Role access", "Audit log", "RLS", "Enkripsi"],
            },
          ],
        },
        {
          eyebrow: "Proses Kerja",
          title: "Pembuatan aplikasi dimulai dari memahami alur pesantren.",
          text: "Setiap pondok punya istilah, struktur, dan kebijakan. Karena itu proses pengembangan perlu dimulai dari pemetaan kebutuhan.",
          cards: [
            {
              title: "Konsultasi Kebutuhan",
              icon: "send",
              text: "Membahas modul yang dibutuhkan, jumlah pengguna, alur keuangan, data santri, dan prioritas implementasi.",
            },
            {
              title: "Pemetaan Fitur",
              icon: "layers",
              text: "Menyusun daftar fitur utama, batas hak akses, alur validasi, dan tampilan yang dibutuhkan pengguna.",
            },
            {
              title: "Implementasi Sistem",
              icon: "code",
              text: "Menerapkan admin panel, aplikasi mobile, backend, database, notifikasi, dan integrasi pembayaran sesuai kebutuhan.",
            },
            {
              title: "Pendampingan",
              icon: "monitor",
              text: "Membantu pengurus memahami penggunaan sistem, alur input data, dan cara membaca laporan.",
            },
          ],
        },
        {
          eyebrow: "Pertanyaan Umum",
          title: "Hal yang biasanya ditanyakan sebelum membuat aplikasi pesantren.",
          text: "Informasi ini membantu pengurus menilai apakah aplikasi pesantren perlu dibuat dari awal, dikustom, atau memakai ekosistem siap pakai.",
          cards: [
            {
              title: "Apakah bisa custom?",
              icon: "wrench",
              text: "Bisa dibahas berdasarkan kebutuhan pondok, tetapi fitur inti tetap dijaga agar alur data dan keamanan tidak rusak.",
            },
            {
              title: "Apakah ada aplikasi wali?",
              icon: "smartphone",
              text: "Ada. Wali dapat memantau data resmi yang berasal dari admin panel dan backend pesantren.",
            },
            {
              title: "Apakah mendukung pembayaran?",
              icon: "wallet",
              text: "Sistem dapat mendukung tagihan, pembayaran digital, donasi, dan top up Dompet Santri.",
            },
            {
              title: "Apakah cocok untuk pesantren kecil?",
              icon: "users",
              text: "Bisa dimulai dari modul sederhana lalu diperluas ketika pengurus dan data sudah siap.",
            },
          ],
        },
      ],
      closing: {
        title: "Butuh aplikasi pesantren yang serius dipakai, bukan sekadar demo?",
        text: "Ceritakan kebutuhan pondok Anda agar kami bisa menyarankan modul, alur, dan tahap implementasi yang realistis.",
        cta: "Konsultasi Pembuatan Aplikasi",
        ctaUrl:
          "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20pembuatan%20aplikasi%20pesantren.",
      },
    },
  },
  "aplikasi-pesantren": {
    slug: "aplikasi-pesantren",
    title: "Aplikasi Pesantren",
    description:
      "Aplikasi pesantren sanadQu menghubungkan admin panel, wali santri, pembayaran, Dompet Santri, tahfidz, kedisiplinan, kesehatan, dan laporan pesantren.",
    keywords: ["aplikasi pesantren", "aplikasi pondok pesantren", "aplikasi wali santri", "aplikasi administrasi pesantren"],
    serviceType: "Aplikasi pesantren",
    data: {
      eyebrow: "Aplikasi Pesantren",
      title: "Aplikasi pesantren untuk pengurus, wali santri, dan operasional harian.",
      description:
        "sanadQu menggabungkan admin panel pesantren dan aplikasi Android wali agar data santri, tagihan, hafalan, kesehatan, perizinan, dan Dompet Santri dapat dikelola dalam satu ekosistem.",
      primaryCta: "Minta Demo Aplikasi Pesantren",
      primaryCtaUrl:
        "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20demo%20aplikasi%20pesantren%20sanadQu.",
      secondaryCta: "Lihat Dompet Santri",
      secondaryCtaUrl: "/dompet-santri",
      stats: ["Wali Santri", "Admin Panel", "Tahfidz", "Keuangan"],
      heroCards: [
        {
          title: "Untuk admin pesantren",
          icon: "panel",
          text: "Pengurus mengelola data resmi, hak akses, keuangan, kesantrian, dan laporan melalui panel kerja.",
        },
        {
          title: "Untuk wali santri",
          icon: "smartphone",
          text: "Wali melihat perkembangan anak, tagihan, pembayaran, saldo dompet, notifikasi, dan riwayat penting.",
        },
        {
          title: "Untuk kantin",
          icon: "qr",
          text: "Transaksi Dompet Santri dapat dilakukan melalui alur kantin yang tervalidasi dan tercatat.",
        },
        {
          title: "Untuk pimpinan",
          icon: "monitor",
          text: "Pimpinan mendapat ringkasan data dan laporan untuk membaca kondisi pesantren secara lebih cepat.",
        },
      ],
      bands: [
        {
          eyebrow: "Fitur Utama",
          title: "Aplikasi pesantren yang menyentuh aktivitas harian.",
          text: "Fitur dibuat berdasarkan kebutuhan umum pondok: data santri, wali, keuangan, hafalan, disiplin, kesehatan, dan komunikasi.",
          cards: [
            {
              title: "Profil Santri",
              icon: "users",
              text: "Data santri, kelas, jurusan, wali, foto, dan riwayat penting tersusun rapi.",
            },
            {
              title: "Tahfidz",
              icon: "book",
              text: "Catatan hafalan, murojaah, dan progres pembelajaran dapat dipantau wali dan pengurus.",
            },
            {
              title: "Pembayaran",
              icon: "wallet",
              text: "Wali dapat melihat tagihan, status pembayaran, riwayat transaksi, dan donasi.",
            },
            {
              title: "Notifikasi",
              icon: "send",
              text: "Informasi penting dari pesantren dapat disampaikan lebih cepat ke pengguna aplikasi.",
            },
          ],
        },
        {
          eyebrow: "Nilai Operasional",
          title: "Aplikasi membantu mengurangi pekerjaan manual yang berulang.",
          text: "Ketika data sudah berada dalam sistem, pengurus tidak perlu terus mencari ulang catatan dari berbagai sumber.",
          cards: [
            {
              title: "Lebih cepat mencari data",
              icon: "database",
              text: "Data santri dan transaksi dapat dicari dari satu sistem, bukan dari banyak file terpisah.",
            },
            {
              title: "Lebih mudah memberi kabar",
              icon: "smartphone",
              text: "Wali mendapat akses informasi resmi tanpa selalu bertanya lewat pesan pribadi.",
            },
            {
              title: "Lebih jelas saat audit",
              icon: "shield",
              text: "Log, riwayat, dan laporan membantu pengurus menjelaskan perubahan data atau transaksi.",
            },
            {
              title: "Lebih siap berkembang",
              icon: "layers",
              text: "Modul dapat ditambah sesuai kesiapan pesantren dan kebutuhan operasional berikutnya.",
            },
          ],
        },
      ],
      closing: {
        title: "Aplikasi pesantren perlu menyelesaikan pekerjaan harian.",
        text: "Diskusikan modul yang paling dibutuhkan pondok Anda agar implementasi tidak berlebihan dan tetap efektif.",
        cta: "Minta Demo Aplikasi Pesantren",
        ctaUrl:
          "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20demo%20aplikasi%20pesantren.",
      },
    },
  },
  "software-pesantren": {
    slug: "software-pesantren",
    title: "Software Pesantren",
    description:
      "Software pesantren sanadQu membantu pengelolaan administrasi santri, SPP, laporan, tahfidz, Dompet Santri, aplikasi wali, keamanan data, dan workflow pengurus.",
    keywords: ["software pesantren", "software manajemen pesantren", "sistem administrasi pesantren", "software pondok pesantren"],
    serviceType: "Software pesantren",
    data: {
      eyebrow: "Software Pesantren",
      title: "Software pesantren untuk manajemen data, keuangan, dan laporan.",
      description:
        "sanadQu adalah software pesantren berbasis web dan aplikasi yang membantu pengurus mengelola administrasi santri, keuangan, tahfidz, Dompet Santri, aplikasi wali, dan laporan operasional.",
      primaryCta: "Konsultasi Software Pesantren",
      primaryCtaUrl:
        "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20konsultasi%20software%20pesantren%20sanadQu.",
      secondaryCta: "Lihat Keamanan",
      secondaryCtaUrl: "/keamanan-sistem",
      stats: ["Web Admin", "Mobile Wali", "Laporan", "Keamanan"],
      heroCards: [
        {
          title: "Berbasis web untuk pengurus",
          icon: "monitor",
          text: "Admin panel dapat digunakan pengurus untuk input data, memantau modul, dan menyiapkan laporan.",
        },
        {
          title: "Terhubung aplikasi wali",
          icon: "smartphone",
          text: "Software tidak berhenti di kantor admin, tetapi juga menghubungkan wali dengan data resmi pesantren.",
        },
        {
          title: "Mendukung transaksi",
          icon: "wallet",
          text: "SPP, pembayaran, donasi, top up, kantin, dan riwayat transaksi dapat dikembangkan dalam satu ekosistem.",
        },
        {
          title: "Mengutamakan keamanan",
          icon: "lock",
          text: "Data santri, wali, dan transaksi harus diperlakukan sebagai data sensitif yang perlu hak akses dan audit.",
        },
      ],
      bands: [
        {
          eyebrow: "Modul Software",
          title: "Software pesantren yang mencakup administrasi dan layanan digital.",
          text: "Modul disiapkan untuk kebutuhan operator, bendahara, wali, kantin, alumni, dan pimpinan pesantren.",
          cards: [
            {
              title: "Administrasi",
              icon: "file",
              text: "Data santri, wali, kelas, jurusan, mukim, profil pesantren, dan kebutuhan data induk.",
            },
            {
              title: "Akademik dan Tahfidz",
              icon: "book",
              text: "Catatan hafalan, murojaah, hafalan kitab, nilai, dan perkembangan pembelajaran.",
            },
            {
              title: "Keuangan",
              icon: "wallet",
              text: "Tagihan, pembayaran, pengeluaran, donasi, Dompet Santri, dan buku besar.",
            },
            {
              title: "Laporan",
              icon: "excel",
              text: "Rekap operasional, ekspor data, laporan keuangan, dan bahan evaluasi pengurus.",
            },
          ],
        },
        {
          eyebrow: "Kriteria Software",
          title: "Software pesantren perlu stabil, jelas, dan mudah dipertanggungjawabkan.",
          text: "Nilai utama software bukan hanya banyak fitur, tetapi bagaimana fitur membantu pekerjaan nyata dan menjaga data.",
          cards: [
            {
              title: "Hak Akses Jelas",
              icon: "key",
              text: "Setiap role melihat dan melakukan tindakan sesuai tugas, sehingga data sensitif tidak terbuka sembarangan.",
            },
            {
              title: "Riwayat Tercatat",
              icon: "database",
              text: "Transaksi dan aktivitas penting punya riwayat agar koreksi dan pemeriksaan bisa dilakukan lebih tertib.",
            },
            {
              title: "Mudah Dipelajari",
              icon: "users",
              text: "Tampilan dan alur kerja dibuat untuk operator pesantren yang menggunakan sistem setiap hari.",
            },
            {
              title: "Siap Dikembangkan",
              icon: "code",
              text: "Struktur sistem memungkinkan modul baru ditambahkan ketika pesantren siap memperluas digitalisasi.",
            },
          ],
        },
      ],
      closing: {
        title: "Pilih software pesantren dari masalah operasional yang ingin diselesaikan.",
        text: "Kami bisa membantu memetakan kebutuhan software pesantren berdasarkan alur pengurus dan kondisi data yang ada.",
        cta: "Diskusi Software Pesantren",
        ctaUrl:
          "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20diskusi%20software%20pesantren.",
      },
    },
  },
} satisfies Record<string, SeoPage>;

export const seoRouteSlugs = Object.keys(seoPages) as Array<keyof typeof seoPages>;

export function getSeoMetadata(slug: keyof typeof seoPages): Metadata {
  const page = seoPages[slug];

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: `${page.title} | sanadQu`,
      description: page.description,
      url: `/${page.slug}`,
    },
    twitter: {
      title: `${page.title} | sanadQu`,
      description: page.description,
    },
  };
}
