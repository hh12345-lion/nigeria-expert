"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";

const btnPrimary =
  "inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-[#C8922A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b07f22] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8922A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D3B2E]";
const btnSecondary =
  "inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-white/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D3B2E]";
const btnGhost =
  "inline-flex min-h-[44px] items-center justify-center rounded-[4px] px-4 py-2.5 text-sm font-medium text-white/90 underline-offset-2 hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white";

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
      <div className="mx-auto max-w-5xl rounded-[8px] border border-[#D1E3D8]/20 bg-[#0D3B2E] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.24)] sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C8922A]">
              Your privacy matters
            </p>
            <h2 id="cookie-banner-title" className="mt-1 text-lg font-bold text-white sm:text-xl">
              Cookie preferences
            </h2>
            <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-white/80">
              We use cookies to run this website securely, understand how it is used, and measure
              marketing performance. You can accept all cookies, reject non-essential cookies, or
              customise your choices. Read our{" "}
              <Link href="/cookie-policy" className="font-medium text-[#C8922A] hover:underline">
                Cookie Policy
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="font-medium text-[#C8922A] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:shrink-0">
            <button type="button" onClick={acceptAll} className={btnPrimary}>
              Accept All
            </button>
            <button type="button" onClick={rejectNonEssential} className={btnSecondary}>
              Reject Non-Essential
            </button>
            <button type="button" onClick={openPreferences} className={btnGhost}>
              Customize Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
