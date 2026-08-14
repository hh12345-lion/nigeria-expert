import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="group min-h-[44px] block">
          <h3 className="font-display text-lg font-semibold text-ink group-hover:text-hibiscus sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mute">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
