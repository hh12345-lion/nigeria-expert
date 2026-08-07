"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CATEGORY_META } from "@/lib/cookies/constants";
import type { CategoryConsent, CookieCategory } from "@/lib/cookies/types";
import { useCookieConsent } from "./CookieConsentContext";

const CATEGORIES: CookieCategory[] = ["necessary", "analytics", "marketing", "preferences"];

export function CookiePreferencesModal() {
  const {
    isPreferencesOpen,
    closePreferences,
    choices,
    savePreferences,
    acceptAll,
    rejectNonEssential,
  } = useCookieConsent();

  const [draft, setDraft] = useState<CategoryConsent>(choices);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isPreferencesOpen) setDraft(choices);
  }, [isPreferencesOpen, choices]);

  useEffect(() => {
    if (!isPreferencesOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isPreferencesOpen, closePreferences]);

  const toggle = useCallback((key: CookieCategory, value: boolean) => {
    if (key === "necessary") return;
    setDraft((d) => ({ ...d, [key]: value }));
  }, []);

  if (!isPreferencesOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        aria-label="Close cookie preferences"
        onClick={closePreferences}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-t-[8px] border border-[#CFD5E0] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.2)] sm:rounded-[8px] animate-[fadeIn_0.25s_ease-out]"
      >
        <div className="border-b border-[#CFD5E0] bg-[#1C2D5A] px-5 py-4 sm:px-6">
          <h2 id="cookie-prefs-title" className="text-lg font-bold text-white">
            Customize cookie preferences
          </h2>
          <p className="mt-1 text-sm text-white/75">
            Manage how we use cookies.{" "}
            <Link href="/cookie-policy" className="text-[#D96A1F] hover:underline" onClick={closePreferences}>
              Cookie Policy
            </Link>
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          <ul className="space-y-4">
            {CATEGORIES.map((key) => {
              const meta = CATEGORY_META[key];
              const on = draft[key];
              return (
                <li
                  key={key}
                  className="rounded-[8px] border border-[#CFD5E0] p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-[#1C2D5A]">{meta.label}</p>
                      <p className="mt-1 text-sm text-[#4D5768]">{meta.description}</p>
                    </div>
                    <label className="relative inline-flex shrink-0 cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={on}
                        disabled={meta.required}
                        onChange={(e) => toggle(key, e.target.checked)}
                        aria-label={`${meta.label} cookies`}
                      />
                      <span
                        className={`h-7 w-12 rounded-full transition ${meta.required ? "bg-[#1C2D5A]/40" : "bg-[#CFD5E0] peer-focus-visible:ring-2 peer-focus-visible:ring-[#D96A1F] peer-checked:bg-[#1C2D5A]"}`}
                        aria-hidden
                      />
                      <span className="pointer-events-none absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
                    </label>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-t border-[#CFD5E0] bg-[#E4E8EF] p-4 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            ref={closeBtnRef}
            onClick={closePreferences}
            className="min-h-[44px] rounded-[4px] border border-[#CFD5E0] px-4 py-2 text-sm font-medium text-[#4D5768] hover:bg-white"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="min-h-[44px] rounded-[4px] border border-[#1C2D5A] px-4 py-2 text-sm font-semibold text-[#1C2D5A] hover:bg-white"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={() => savePreferences(draft)}
            className="min-h-[44px] rounded-[4px] bg-[#1C2D5A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#152447]"
          >
            Save preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-[44px] rounded-[4px] bg-[#D96A1F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#C45E1A]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
