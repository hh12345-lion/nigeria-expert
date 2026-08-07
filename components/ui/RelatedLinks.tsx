import Link from "next/link";
import type { RelatedLink } from "@/data/related-links";

export function RelatedLinks({
  title = "Related pages",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;
  return (
    <aside className="mt-12 min-w-0 border-y border-border bg-haze/60 py-6">
      <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-palm">{title}</h2>
      <ul className="mt-4 grid grid-cols-1 gap-1 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-[44px] items-center text-sm font-medium text-indigo transition hover:text-palm"
            >
              <span className="mr-2 text-palm" aria-hidden>
                →
              </span>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
