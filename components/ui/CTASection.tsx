import Link from "next/link";

export function CTASection({
  title = "Need a Nigeria country report?",
  description = "Send a short case note. We reply within one business day with availability, timeline, and Legal Aid rates where relevant.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-border bg-stone">
      <div className="mx-auto flex min-w-0 max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">{description}</p>
        </div>
        <Link
          href="/#enquire"
          className="inline-flex min-h-[44px] items-center justify-center bg-hibiscus px-6 py-3 text-sm font-medium text-paper transition hover:bg-hibiscus-soft"
        >
          Request a report
        </Link>
      </div>
    </section>
  );
}
