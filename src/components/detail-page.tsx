"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  Code2,
  Database,
  FileSpreadsheet,
  FileText,
  Fingerprint,
  KeyRound,
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
  Layers3,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const iconMap = {
  badge: BadgeCheck,
  book: BookOpenCheck,
  database: Database,
  excel: FileSpreadsheet,
  file: FileText,
  fingerprint: Fingerprint,
  key: KeyRound,
  lock: LockKeyhole,
  monitor: MonitorCheck,
  network: Network,
  panel: PanelTop,
  qr: QrCode,
  send: Send,
  server: Server,
  shield: ShieldCheck,
  smartphone: Smartphone,
  sparkles: Sparkles,
  users: UsersRound,
  wallet: WalletCards,
  wrench: Wrench,
  layers: Layers3,
  code: Code2,
} as const;

type IconName = keyof typeof iconMap;

type DetailCard = {
  title: string;
  text: string;
  icon?: IconName;
  items?: string[];
};

type DetailBand = {
  eyebrow: string;
  title: string;
  text: string;
  cards: DetailCard[];
};

export type DetailPageData = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  primaryCtaUrl?: string;
  secondaryCta?: string;
  secondaryCtaUrl?: string;
  stats: string[];
  heroCards: DetailCard[];
  bands: DetailBand[];
  closing: {
    title: string;
    text: string;
    cta: string;
    ctaUrl?: string;
  };
};

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

export const whatsappDemoAndroidUrl =
  "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20meminta%20demo%20aplikasi%20Android%20PesantrenPro%20untuk%20%5Bnama%20pesantren%5D";

export const whatsappDemoFullUrl =
  "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20ingin%20meminta%20demo%20full%20sistem%20PesantrenPro%20%28Admin%20Panel%20%26%20Android%29%20untuk%20%5Bnama%20pesantren%5D";

export const whatsappConversationUrl =
  "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20%5Bnama%5D%20dari%20Pondok%20Pesantren%20%5Bnama%5D.%20Kami%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20pesantrenPro.";

function CardIcon({ name = "shield" }: { name?: IconName }) {
  const Icon = iconMap[name] || iconMap.shield;
  return (
    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-amber-400 shadow-xl shadow-emerald-950/10 dark:bg-amber-500 dark:text-slate-950">
      <Icon className="size-6" />
    </span>
  );
}

function DetailCardView({ card, index }: { card: DetailCard; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex min-h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-white/5 dark:bg-slate-900/50"
    >
      <div className="mb-8 flex items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-white/5">
        <CardIcon name={card.icon} />
        <span className="font-serif text-2xl italic text-slate-200 dark:text-slate-800">
          0{index + 1}
        </span>
      </div>
      <h3 className="text-xl font-medium tracking-tight text-slate-900 dark:text-white">{card.title}</h3>
      <p className="mt-4 text-sm font-light leading-relaxed text-slate-500 dark:text-slate-400">{card.text}</p>
      {card.items ? (
        <div className="mt-6 grid gap-3">
          {card.items.map((item) => (
            <div key={item} className="flex gap-3 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white dark:bg-amber-500 dark:text-slate-950">
                <Check className="size-3 stroke-[4]" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}

export function DetailPage({ data }: { data: DetailPageData }) {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/50 bg-white/70 backdrop-blur-2xl dark:border-white/5 dark:bg-slate-950/70">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-4">
            <span className="flex size-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
              <Image src="/pesantrenpro-mark.svg" alt="" width={44} height={44} className="size-11" priority />
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">pesantrenPro</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-700 dark:text-amber-500">Premium Ecosystem</span>
            </div>
          </Link>
          
          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 md:flex">
            <Link href="/" className="inline-flex items-center gap-2 text-emerald-800 dark:text-amber-400">
              <ArrowLeft className="size-3" />
              Halaman Utama
            </Link>
            <Link href="/android" className="hover:text-emerald-800 dark:hover:text-amber-400">Android</Link>
            <Link href="/keamanan-sistem" className="hover:text-emerald-800 dark:hover:text-amber-400">Keamanan</Link>
            <Link href="/workflow-pengguna" className="hover:text-emerald-800 dark:hover:text-amber-400">Workflow</Link>
            <Link href="/admin-panel" className="hover:text-emerald-800 dark:hover:text-amber-400">Admin Panel</Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              render={<a href={whatsappConversationUrl} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              className="hidden rounded-full bg-emerald-950 px-6 text-white shadow-xl shadow-emerald-950/10 hover:bg-emerald-900 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400 sm:inline-flex"
            >
              Diskusi
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden pt-32 lg:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.08),transparent_40%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <motion.div variants={fadeUp}>
                <Badge className="mb-8 border-amber-500/20 bg-amber-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-amber-700 shadow-sm backdrop-blur dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-400">
                  <ShieldCheck className="mr-2 size-3" />
                  {data.eyebrow}
                </Badge>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-4xl font-medium leading-[1.1] tracking-tight text-slate-950 sm:text-6xl dark:text-white"
              >
                {data.title}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-2xl text-xl font-light leading-relaxed text-slate-600 dark:text-slate-300"
              >
                {data.description}
              </motion.p>
              <motion.div variants={fadeUp} className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Button
                  render={<a href={data.primaryCtaUrl ?? whatsappConversationUrl} target="_blank" rel="noopener noreferrer" />}
                  nativeButton={false}
                  size="lg"
                  className="h-14 rounded-full bg-emerald-950 px-10 text-white shadow-2xl shadow-emerald-950/20 hover:bg-emerald-900 dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400"
                >
                  {data.primaryCta}
                  <Send className="ml-2 size-4" />
                </Button>
                <Button
                  render={<Link href={data.secondaryCtaUrl ?? "/"} />}
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-full border-slate-200 bg-white/50 px-10 text-slate-900 shadow-sm backdrop-blur hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  {data.secondaryCta ?? "Kembali Utama"}
                </Button>
              </motion.div>
            </div>

            <div className="grid content-start gap-6 sm:grid-cols-2">
              {data.heroCards.map((card, index) => (
                <DetailCardView key={card.title} card={card} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-20 border-y border-slate-200 bg-white dark:border-white/5 dark:bg-slate-900/50">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {data.stats.map((stat) => (
            <div key={stat} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-700 dark:border-white/5 dark:bg-slate-950 dark:text-slate-300">
              <div className="size-1.5 rounded-full bg-emerald-500" />
              {stat}
            </div>
          ))}
        </div>
      </section>

      {data.bands.map((band, bandIndex) => (
        <section key={band.title} className={`py-32 ${bandIndex % 2 ? "bg-white dark:bg-slate-900" : "bg-[#faf9f6] dark:bg-slate-950"}`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-500">{band.eyebrow}</p>
                <h2 className="mt-6 text-3xl font-medium leading-tight tracking-tight text-slate-950 sm:text-5xl dark:text-white">{band.title}</h2>
              </div>
              <p className="text-xl font-light leading-relaxed text-slate-500 dark:text-slate-400">{band.text}</p>
            </div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              {band.cards.map((card, index) => (
                <DetailCardView key={card.title} card={card} index={index} />
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden bg-emerald-950 py-32 text-white dark:bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-medium leading-tight tracking-tight sm:text-6xl">{data.closing.title}</h2>
          <p className="mx-auto mt-10 max-w-2xl text-xl font-light leading-relaxed text-white/80">{data.closing.text}</p>
          <Button
            render={<a href={data.closing.ctaUrl ?? whatsappConversationUrl} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="mt-12 h-14 rounded-full bg-white px-10 text-emerald-950 font-bold shadow-2xl hover:bg-emerald-50"
          >
            {data.closing.cta}
            <Send className="ml-2 size-4" />
          </Button>
        </div>
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
          </div>
        </div>
      </footer>
    </main>
  );
}
