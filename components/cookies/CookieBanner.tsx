"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";

const btnPrimary =
  "inline-flex min-h-[44px] items-center justify-center bg-palm px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-deep transition hover:bg-palm-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-palm";
const btnSecondary =
  "inline-flex min-h-[44px] items-center justify-center border border-white/25 bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-chalk transition hover:border-palm hover:text-palm focus:outline-none focus-visible:ring-2 focus-visible:ring-white";
const btnGhost =
  "inline-flex min-h-[44px] items-center justify-center px-4 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-chalk/80 underline-offset-2 hover:text-palm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white";

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
      <div className="mx-auto max-w-5xl border border-white/10 bg-indigo-deep p-5 shadow-[0_16px_48px_rgba(12,20,40,0.45)] sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-palm">
              Privacy
            </p>
            <h2 id="cookie-banner-title" className="font-display mt-1 text-lg text-chalk sm:text-xl">
              Cookie preferences
            </h2>
            <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-chalk/70">
              We use cookies to run this site securely and measure performance. Accept all, reject
              non-essential, or customise. See our{" "}
              <Link href="/cookie-policy" className="font-medium text-palm hover:underline">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-medium text-palm hover:underline">
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
