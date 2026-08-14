"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import type { GlossaryTerm } from "@/data/glossary";
import { glossaryAnchorId } from "@/lib/glossary";

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.toLowerCase().trim();
    if (!query) return terms;
    return terms.filter(
      (t) => t.term.toLowerCase().includes(query) || t.definition.toLowerCase().includes(query),
    );
  }, [q, terms]);

  return (
    <>
      <label htmlFor="glossary-search" className="sr-only">
        Search glossary
      </label>
      <input
        id="glossary-search"
        type="search"
        placeholder="Search terms…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="mb-8 w-full max-w-md border-0 border-b border-border bg-transparent px-0 py-3 min-h-[44px] text-ink placeholder:text-rule focus:border-hibiscus focus:outline-none focus:ring-0"
      />
      <dl className="divide-y divide-border border-y border-border">
        {filtered.map((t, index) => (
          <div key={t.term} id={glossaryAnchorId(t.term)} className="scroll-mt-28 grid gap-2 py-5 sm:grid-cols-[3rem_1fr] sm:gap-5">
            <span className="font-mono text-xs text-rule sm:pt-1" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <dt className="font-display text-lg text-ink">{t.term}</dt>
              <dd className="mt-2 text-mute leading-relaxed">
                {t.definition}
                {t.link && (
                  <>
                    {" "}
                    <Link href={t.link} className="font-medium text-hibiscus hover:underline">
                      Learn more →
                    </Link>
                  </>
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </>
  );
}
