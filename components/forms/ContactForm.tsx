"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AFRICAN_COUNTRIES, CASE_TYPES, KEY_ISSUES, URGENCY_OPTIONS, FUNDING_OPTIONS } from "@/data/african-countries";

const inputClass = "w-full rounded-[4px] border border-[#D1E3D8] px-4 py-3 text-[#374151] focus:border-[#0D3B2E] focus:outline-none focus:ring-1 focus:ring-[#0D3B2E] min-h-[44px]";
const labelClass = "mb-1 block text-sm font-medium text-[#0D3B2E]";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);

  const toggleIssue = (issue: string) => {
    setSelectedIssues((prev) => prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue]);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone }),
      });
      if (res.ok) router.push("/thank-you");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label className={labelClass}>Full Name *</label><input name="name" required className={inputClass} /></div>
        <div><label className={labelClass}>Law Firm / Organisation *</label><input name="organisation" required className={inputClass} /></div>
        <div><label className={labelClass}>Email *</label><input type="email" name="email" required className={inputClass} /></div>
        <div><label className={labelClass}>Phone</label><input type="tel" name="phone" className={inputClass} /></div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass}>African Country/Region of Case *</label>
          <select name="country" required className={inputClass}>
            <option value="">Select country</option>
            {AFRICAN_COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Case Type</label>
          <select name="case_type" className={inputClass}>
            <option value="">Select case type</option>
            {CASE_TYPES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div>
        <p className={labelClass}>Key Issues</p>
        <div className="flex flex-wrap gap-2">
          {KEY_ISSUES.map((issue) => (
            <button key={issue} type="button" onClick={() => toggleIssue(issue)}
              className={`min-h-[44px] rounded-[4px] border px-3 py-2 text-sm ${selectedIssues.includes(issue) ? "border-[#0D3B2E] bg-[#0D3B2E] text-white" : "border-[#D1E3D8] bg-white text-[#374151]"}`}>
              {issue}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div><label className={labelClass}>Hearing/Deadline Date</label><input type="date" name="deadline" className={inputClass} /></div>
        <div>
          <label className={labelClass}>Funding</label>
          <select name="funding" className={inputClass}>
            {FUNDING_OPTIONS.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <label className={labelClass}>Urgency</label>
          <select name="urgency" className={inputClass}>
            {URGENCY_OPTIONS.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
      </div>
      <div><label className={labelClass}>Brief Case Summary</label><textarea name="summary" rows={5} className={`${inputClass} min-h-[120px]`} /></div>
      {status === "error" && <p className="text-red-600 text-sm">Unable to submit. Please email info@africaexpertwitness.com directly.</p>}
      <button type="submit" disabled={status === "loading"} className="w-full min-h-[44px] rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white hover:bg-[#b07f22] disabled:opacity-60 sm:w-auto">
        {status === "loading" ? "Submitting…" : "Instruct an Expert Witness"}
      </button>
    </form>
  );
}
