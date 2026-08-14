"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const links = [
  { href: "/asylum-profiles", label: "Profiles" },
  { href: "/services", label: "Reports" },
  { href: "/guides", label: "Guides" },
  { href: "/how-to-instruct", label: "How it works" },
] as const;

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper/90 backdrop-blur-md">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0">
          <span className="font-display block text-lg font-semibold tracking-tight text-ink sm:text-xl">
            NigeriaExpert
          </span>
          <span className="block text-[11px] text-mute">UK tribunal reports</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[44px] items-center text-sm text-ink/80 transition hover:text-hibiscus"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#enquire"
            className="inline-flex min-h-[44px] items-center bg-hibiscus px-4 py-2 text-sm font-medium text-paper transition hover:bg-hibiscus-soft"
          >
            Request a report
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center border border-border lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="icon-open h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h10" />
          </svg>
          <svg className="icon-close hidden h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <nav
        id="mobile-menu"
        className="mobile-panel hidden border-t border-border bg-paper peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="px-4 py-4">
          <ul className="divide-y divide-border border-y border-border">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-[44px] items-center text-ink"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#enquire"
            className="mt-4 flex min-h-[44px] items-center justify-center bg-hibiscus font-medium text-paper"
            onClick={closeMobileMenu}
          >
            Request a report
          </Link>
        </div>
      </nav>
    </header>
  );
}
