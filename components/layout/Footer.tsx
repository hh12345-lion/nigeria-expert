import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper text-mute">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
          <Link href="/" className="font-display text-base font-semibold text-ink hover:text-hibiscus">
            {SITE_NAME}
          </Link>
          <a href={`mailto:${SITE_EMAIL}`} className="text-sm hover:text-hibiscus">
            {SITE_EMAIL}
          </a>
        </div>
        <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-hibiscus">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-hibiscus">
            Cookies
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-hibiscus">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
          <Link href="/#enquire" className="inline-flex min-h-[44px] items-center text-hibiscus hover:text-hibiscus-soft">
            Request a report
          </Link>
        </nav>
      </div>
    </footer>
  );
}
