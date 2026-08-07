import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-indigo/20 bg-indigo-deep text-chalk">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
          <Link href="/" className="font-display text-lg text-chalk hover:text-palm">
            {SITE_NAME}
          </Link>
          <span className="hidden text-rule sm:inline" aria-hidden>
            /
          </span>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="text-sm text-chalk/70 transition hover:text-palm"
          >
            {SITE_EMAIL}
          </a>
        </div>

        <nav
          aria-label="Legal"
          className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs tracking-wide text-chalk/55"
        >
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-palm">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-palm">
            Cookies
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-palm">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
          <Link href="/contact" className="inline-flex min-h-[44px] items-center font-medium text-palm hover:text-palm-soft">
            Instruct
          </Link>
        </nav>
      </div>
    </footer>
  );
}
