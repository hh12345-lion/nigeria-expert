import type { FAQ } from "@/lib/schema";

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <section className="py-12">
      <h2 className="mb-8 text-2xl font-bold text-[#0D3B2E]">{title}</h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-[8px] border border-[#D1E3D8] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)]">
            <h3 className="text-lg font-semibold text-[#0D3B2E]">{faq.question}</h3>
            <p className="mt-3 text-[#374151] leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
