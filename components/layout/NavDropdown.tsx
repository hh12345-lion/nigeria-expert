import Link from "next/link";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  scrollable?: boolean;
  /** Short docket code shown in the panel header */
  code?: string;
};

export function NavDropdown({ label, href, items, scrollable, code }: NavDropdownProps) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="inline-flex min-h-[44px] items-center gap-1.5 px-2 py-2 text-[13px] font-medium tracking-wide text-chalk/80 transition hover:text-hibiscus"
      >
        <span>{label}</span>
        <span
          className="inline-block h-1.5 w-1.5 rotate-45 border-b border-r border-current opacity-70 transition group-hover:translate-y-0.5 group-hover:border-palm"
          aria-hidden
        />
      </Link>
      <div
        className={`pointer-events-none invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 ${scrollable ? "w-[min(92vw,22rem)]" : "w-[min(92vw,18rem)]"}`}
      >
        <div
          className="origin-top overflow-hidden border border-white/10 bg-indigo-deep shadow-[0_24px_48px_rgba(12,20,40,0.45)]"
          style={{ animation: "docketReveal 0.22s ease-out" }}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <p className="font-display text-sm text-chalk">{label}</p>
            {code ? (
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-hibiscus">{code}</span>
            ) : null}
          </div>
          <ul className={scrollable ? "max-h-[min(70vh,20rem)] overflow-y-auto" : ""}>
            {items.map((item, index) => (
              <li key={item.href} className="border-b border-white/5 last:border-b-0">
                <Link
                  href={item.href}
                  className="grid grid-cols-[2.25rem_1fr] items-start gap-2 px-4 py-3 text-sm text-chalk/85 transition hover:bg-white/5 hover:text-hibiscus"
                >
                  <span className="font-mono text-[10px] tabular-nums tracking-wider text-rule">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={href}
            className="flex min-h-[44px] items-center justify-between bg-palm px-4 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-deep transition hover:bg-palm-soft"
          >
            Open full index
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
