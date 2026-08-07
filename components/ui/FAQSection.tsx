import type { FAQ } from "@/lib/schema";

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="py-12">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-palm">Answers</p>
      <h2 className="font-display mt-2 text-2xl font-medium text-ink sm:text-3xl">{title}</h2>
      <div className="mt-8 divide-y divide-border border-y border-border">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
            <span className="font-mono text-xs tabular-nums text-rule">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-lg text-ink">{faq.question}</h3>
              <p className="mt-3 text-mute leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
