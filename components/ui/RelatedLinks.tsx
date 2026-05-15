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
    <aside className="mt-12 min-w-0 rounded-[8px] border border-[#D1E3D8] bg-[#F7F9F7] p-4 sm:p-6">
      <h2 className="text-base font-bold text-[#0D3B2E] sm:text-lg">{title}</h2>
      <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-[44px] items-center text-sm font-medium text-[#0D3B2E] hover:text-[#C8922A] hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
