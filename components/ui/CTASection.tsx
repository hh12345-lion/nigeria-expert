import Link from "next/link";

export function CTASection({
  title = "Instruct a Nigeria expert",
  description = "Send a short brief. We reply within one business day with availability, timeline, and Legal Aid rates where relevant.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-y border-indigo/15 bg-indigo text-chalk">
      <div className="mx-auto flex min-w-0 max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6 sm:py-12 lg:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-palm">Next step</p>
          <h2 className="font-display mt-2 text-2xl font-medium tracking-tight sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-chalk/70 sm:text-base">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center bg-palm px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-deep transition hover:bg-palm-soft"
          >
            Send brief
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[44px] items-center justify-center border border-chalk/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-chalk transition hover:border-palm hover:text-palm"
          >
            How to instruct
          </Link>
        </div>
      </div>
    </section>
  );
}
