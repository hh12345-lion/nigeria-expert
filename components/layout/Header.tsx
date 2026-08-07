"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  asylumProfilesNavLinks,
  caseTypesNavLinks,
  mobileNavGroups,
  resourcesNavLinks,
  servicesNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
    >
      <rect width="40" height="40" fill="currentColor" className="text-palm" />
      <path
        d="M8 28V12h6.2c3.4 0 5.5 1.8 5.5 4.6 0 1.7-.8 3-2.2 3.8L22 28h-4.4l-3.8-6.4H12V28H8zm4-9.6h2c1.5 0 2.4-.7 2.4-1.9S15.5 15 14 15H12v3.4zM24.2 28V12h3.8v12.4H34V28h-9.8z"
        fill="#0C1428"
      />
    </svg>
  );
}

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
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-white/10 bg-indigo-deep px-4 py-1.5 text-center text-[11px] tracking-[0.08em] text-chalk/55 sm:block sm:px-6 lg:px-8">
        UK tribunals only · FTT &amp; Upper Tribunal · Legal Aid instructions accepted
      </div>

      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar border-b border-white/10 bg-indigo/95 text-chalk backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="group flex min-h-[44px] min-w-0 shrink items-center gap-3">
            <BrandMark className="h-9 w-9 shrink-0 transition group-hover:scale-[1.03]" />
            <span className="min-w-0">
              <span className="font-display block truncate text-lg leading-none tracking-tight text-chalk sm:text-xl">
                NigeriaExpert
              </span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.22em] text-palm">
                Country evidence · NG
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
            <NavDropdown
              label="Asylum Profiles"
              href="/asylum-profiles"
              items={asylumProfilesNavLinks}
              scrollable
              code="NG-AP"
            />
            <NavDropdown
              label="Case Types"
              href="/case-types"
              items={caseTypesNavLinks}
              scrollable
              code="NG-CT"
            />
            <NavDropdown
              label="Services"
              href="/services"
              items={servicesNavLinks}
              scrollable
              code="NG-SV"
            />
            <NavDropdown
              label="Resources"
              href="/guides"
              items={[...resourcesNavLinks]}
              scrollable
              code="NG-RS"
            />
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[44px] items-center px-2 py-2 text-[13px] font-medium tracking-wide text-chalk/80 transition hover:text-palm"
            >
              Instruct
            </Link>
            <Link
              href="/contact"
              className="ml-3 inline-flex min-h-[44px] items-center bg-palm px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-indigo-deep transition hover:bg-palm-soft"
            >
              Send brief
            </Link>
          </nav>

          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="/contact"
              className="hidden min-h-[44px] items-center bg-palm px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-deep sm:inline-flex"
            >
              Send brief
            </Link>
            <label
              htmlFor="mobile-nav-toggle"
              className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center border border-white/20"
            >
              <span className="sr-only">Toggle menu</span>
              <svg className="icon-open h-5 w-5 text-chalk" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h10" />
              </svg>
              <svg className="icon-close hidden h-5 w-5 text-chalk" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="mobile-panel hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-white/10 bg-indigo-deep text-chalk peer-checked:block xl:hidden"
        aria-label="Mobile"
      >
        <div className="px-4 py-5">
          {mobileNavGroups.map((group, gi) => (
            <div key={group.title} className="mb-6">
              <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-palm">
                <span>{String(gi + 1).padStart(2, "0")}</span>
                {group.title}
              </p>
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[44px] items-center py-2 text-sm text-chalk/90 hover:text-palm"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/contact"
            className="flex min-h-[44px] w-full items-center justify-center bg-palm font-semibold uppercase tracking-[0.14em] text-indigo-deep"
            onClick={closeMobileMenu}
          >
            Send brief
          </Link>
        </div>
      </nav>
    </header>
  );
}
