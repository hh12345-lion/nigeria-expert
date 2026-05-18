"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  caseTypesNavLinks,
  countriesNavLinks,
  expertiseAreasNavLinks,
  mobileNavGroups,
  regionsNavLinks,
  resourcesNavLinks,
  servicesNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";

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
    <header className="sticky top-0 z-50 border-b border-[#D1E3D8] bg-white shadow-sm">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-h-[44px] min-w-0 shrink items-center gap-2 font-bold text-[#0D3B2E]">
          <span className="truncate text-base sm:text-lg lg:text-xl">AfricaExpertWitness</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded-[4px] px-2 py-2 text-sm text-[#374151] hover:bg-[#F7F9F7] hover:text-[#0D3B2E]"
          >
            Home
          </Link>
          <NavDropdown label="Services" href="/services" items={servicesNavLinks} />
          <NavDropdown label="Regions" href="/regions" items={regionsNavLinks} />
          <NavDropdown label="Countries" href="/countries" items={countriesNavLinks} scrollable />
          <NavDropdown label="Expertise Areas" href="/expertise-areas" items={expertiseAreasNavLinks} scrollable />
          <NavDropdown label="Case Types" href="/case-types" items={caseTypesNavLinks} scrollable />
          <NavDropdown label="Resources" href="/guides" items={[...resourcesNavLinks]} />
          <Link
            href="/contact"
            className="ml-2 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#C8922A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#b07f22]"
          >
            Contact Us
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-[4px] border border-[#D1E3D8] lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="icon-open h-6 w-6 text-[#0D3B2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className="icon-close hidden h-6 w-6 text-[#0D3B2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <nav
        id="mobile-menu"
        className="hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[#D1E3D8] bg-white peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="px-4 py-4">
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#0D3B2E]">{group.title}</p>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[44px] items-center rounded-[4px] px-3 text-[#374151] hover:bg-[#F7F9F7]"
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
            className="flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#C8922A] font-semibold text-white"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
