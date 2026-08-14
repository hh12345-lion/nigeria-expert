"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";

const inputClass =
  "w-full min-w-0 border border-border bg-paper px-3 py-2.5 text-base text-ink placeholder:text-rule focus:border-hibiscus focus:outline-none focus:ring-1 focus:ring-hibiscus min-h-[44px]";
const labelClass = "mb-1 block text-sm text-ink";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      organisation: String(data.get("law_firm") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: "",
      caseProfile: "",
      proceedings: "",
      funding: "",
      deadline: String(data.get("deadline") ?? "").trim(),
      urgency: "",
      summary: String(data.get("summary") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) router.push("/thank-you");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? "min-w-0 space-y-4" : "min-w-0 space-y-5"}>
      <div className="min-w-0">
        <label className={labelClass} htmlFor="name">
          Name *
        </label>
        <input id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>
      <div className="min-w-0">
        <label className={labelClass} htmlFor="law_firm">
          Firm *
        </label>
        <input id="law_firm" name="law_firm" required autoComplete="organization" className={inputClass} />
      </div>
      <div className="min-w-0">
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input id="email" type="email" name="email" required autoComplete="email" className={inputClass} />
      </div>
      <div className="min-w-0">
        <label className={labelClass} htmlFor="deadline">
          Hearing / deadline
        </label>
        <input id="deadline" type="date" name="deadline" className={inputClass} />
      </div>
      <div className="min-w-0">
        <label className={labelClass} htmlFor="summary">
          Case note *
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={compact ? 3 : 4}
          placeholder="Profile, tribunal stage, and what the report must cover."
          className={`${inputClass} min-h-[88px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          Something went wrong. Email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[48px] w-full items-center justify-center bg-hibiscus px-6 text-sm font-medium text-paper transition hover:bg-hibiscus-soft disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Request a report"}
      </button>
    </form>
  );
}
