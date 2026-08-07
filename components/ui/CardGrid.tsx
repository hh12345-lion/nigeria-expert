import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className="group grid min-h-[44px] grid-cols-[2.5rem_1fr] gap-3 py-5 transition hover:bg-white/60 sm:grid-cols-[3rem_1fr_auto] sm:gap-5 sm:py-6"
        >
          <span className="font-mono text-xs tabular-nums tracking-wider text-rule pt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="min-w-0">
            <span className="font-display block text-lg text-ink transition group-hover:text-indigo sm:text-xl">
              {item.title}
            </span>
            <span className="mt-1.5 block text-sm leading-relaxed text-mute">{item.description}</span>
          </span>
          <span className="hidden items-center font-mono text-[10px] uppercase tracking-[0.16em] text-palm transition group-hover:translate-x-1 sm:flex">
            Open →
          </span>
        </Link>
      ))}
    </div>
  );
}
