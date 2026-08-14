import type { FAQ } from "@/lib/schema";

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="py-12">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
      <div className="mt-8 space-y-8">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="font-display text-lg font-semibold text-ink">{faq.question}</h3>
            <p className="mt-3 leading-relaxed text-mute">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
