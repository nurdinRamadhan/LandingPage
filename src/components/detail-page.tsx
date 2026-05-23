import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  BookOpenCheck,
  Check,
  Database,
  FileSpreadsheet,
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
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const iconMap = {
  badge: BadgeCheck,
  book: BookOpenCheck,
  database: Database,
  excel: FileSpreadsheet,
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
  secondaryCta?: string;
  stats: string[];
  heroCards: DetailCard[];
  bands: DetailBand[];
  closing: {
    title: string;
    text: string;
    cta: string;
  };
};

const whatsappConversationUrl =
  "https://wa.me/6281804886112?text=Assalamu%27alaikum%2C%20saya%20%5Bnama%5D%20dari%20Pondok%20Pesantren%20%5Bnama%5D.%20Kami%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20pesantrenPro.";

function CardIcon({ name = "shield" }: { name?: IconName }) {
  const Icon = iconMap[name];
  return (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/15">
      <Icon className="size-5" />
    </span>
  );
}

function DetailCardView({ card, index }: { card: DetailCard; index: number }) {
  return (
    <article className="flex min-h-full flex-col rounded-lg border border-cyan-300/15 bg-slate-950/82 p-5 shadow-xl shadow-cyan-950/20 backdrop-blur">
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-cyan-300/12 pb-4">
        <CardIcon name={card.icon} />
        <span className="rounded-md border border-cyan-300/20 bg-cyan-300/8 px-2.5 py-1 font-mono text-[10px] uppercase text-cyan-200">
          0{index + 1}
        </span>
      </div>
      <h3 className="text-lg font-semibold leading-7 text-white">{card.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
      {card.items ? (
        <div className="mt-5 grid gap-2">
          {card.items.map((item) => (
            <div key={item} className="flex gap-2 text-sm leading-6 text-slate-300">
              <Check className="mt-1 size-3.5 shrink-0 text-cyan-300" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function DetailPage({ data }: { data: DetailPageData }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-cyan-300/15 bg-slate-950/82 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-cyan-300 text-slate-950">
              <PanelTop className="size-5" />
            </span>
            <span className="font-semibold">pesantrenPro</span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 rounded-md border border-cyan-300/20 bg-cyan-300/8 px-3 py-2 text-xs font-semibold text-cyan-100 md:hidden">
            <ArrowLeft className="size-3.5" />
            Halaman Utama
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="/" className="inline-flex items-center gap-1.5 rounded-md border border-cyan-300/20 bg-cyan-300/8 px-3 py-2 font-semibold text-cyan-100 hover:bg-cyan-300/12">
              <ArrowLeft className="size-3.5" />
              Halaman Utama
            </Link>
            <Link href="/android" className="hover:text-cyan-200">Android</Link>
            <Link href="/keamanan-sistem" className="hover:text-cyan-200">Keamanan</Link>
            <Link href="/workflow-pengguna" className="hover:text-cyan-200">Workflow</Link>
            <Link href="/admin-panel" className="hover:text-cyan-200">Admin Panel</Link>
            <Link href="/dompet-santri" className="hover:text-cyan-200">Dompet</Link>
          </nav>
          <Button
            render={<a href={whatsappConversationUrl} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            className="hidden bg-cyan-300 text-slate-950 hover:bg-cyan-200 sm:inline-flex"
          >
            Diskusi
            <Send className="size-4" />
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.10)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,0.18),transparent_42%,rgba(16,185,129,0.10)_78%,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
          <div>
            <Badge className="mb-5 border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
              <ShieldCheck className="size-3" />
              {data.eyebrow}
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
              {data.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {data.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href={whatsappConversationUrl} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                size="lg"
                className="h-12 bg-cyan-300 px-5 text-slate-950 hover:bg-cyan-200"
              >
                {data.primaryCta}
                <Send className="size-4" />
              </Button>
              <Button
                render={<Link href="/" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-12 border-cyan-300/25 bg-transparent px-5 text-cyan-100 hover:bg-cyan-300/10"
              >
                <ArrowLeft className="size-4" />
                {data.secondaryCta ?? "Kembali ke Halaman Utama"}
              </Button>
            </div>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2">
            {data.heroCards.map((card, index) => (
              <DetailCardView key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-300/15 bg-cyan-300/8">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {data.stats.map((stat) => (
            <div key={stat} className="rounded-md border border-cyan-300/15 bg-slate-950/60 px-4 py-3 text-sm font-medium text-cyan-50">
              {stat}
            </div>
          ))}
        </div>
      </section>

      {data.bands.map((band, bandIndex) => (
        <section key={band.title} className={bandIndex % 2 ? "bg-slate-900 py-24" : "bg-slate-950 py-24"}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase text-cyan-300">{band.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal sm:text-5xl">{band.title}</h2>
              </div>
              <p className="text-lg leading-8 text-slate-300">{band.text}</p>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {band.cards.map((card, index) => (
                <DetailCardView key={card.title} card={card} index={index} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-cyan-950 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">{data.closing.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cyan-50/80">{data.closing.text}</p>
          <Button
            render={<a href={whatsappConversationUrl} target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="mt-8 h-12 bg-white px-5 text-cyan-950 hover:bg-cyan-50"
          >
            {data.closing.cta}
            <Send className="size-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
