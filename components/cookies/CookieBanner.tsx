"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";

const btnPrimary =
  "inline-flex min-h-[44px] items-center justify-center bg-hibiscus px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-hibiscus-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-hibiscus";
const btnSecondary =
  "inline-flex min-h-[44px] items-center justify-center border border-border bg-transparent px-5 py-2.5 text-sm text-ink transition hover:border-hibiscus hover:text-hibiscus focus:outline-none focus-visible:ring-2 focus-visible:ring-hibiscus";
const btnGhost =
  "inline-flex min-h-[44px] items-center justify-center px-4 py-2.5 text-sm text-mute underline-offset-2 hover:text-hibiscus hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-hibiscus";

export function CookieBanner() {
  const { status, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();

  if (status !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed inset-x-0 bottom-0 z-[100] animate-[slideUp_0.4s_ease-out] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6"
    >
      <div className="mx-auto max-w-5xl border border-border bg-paper p-5 shadow-[0_16px_40px_rgba(26,18,16,0.12)] sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="cookie-banner-title" className="font-display text-lg font-semibold text-ink sm:text-xl">
              Cookie preferences
            </h2>
            <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-mute">
              We use cookies to run this site securely and measure performance. Accept all, reject
              non-essential, or customise. See our{" "}
              <Link href="/cookie-policy" className="font-medium text-hibiscus hover:underline">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-medium text-hibiscus hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:shrink-0">
            <button type="button" onClick={acceptAll} className={btnPrimary}>
              Accept all
            </button>
            <button type="button" onClick={rejectNonEssential} className={btnSecondary}>
              Reject non-essential
            </button>
            <button type="button" onClick={openPreferences} className={btnGhost}>
              Customise
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
