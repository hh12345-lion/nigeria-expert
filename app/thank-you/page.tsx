import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | NigeriaExpert",
  description: "Your instruction request has been received.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-indigo-deep py-16 text-chalk md:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-palm">Received</p>
          <h1 className="font-display mt-3 text-4xl font-medium tracking-tight sm:text-5xl">Brief received</h1>
          <p className="mt-4 text-lg text-chalk/75">
            We will reply within one business day with availability, scope, and timeline.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center bg-palm px-6 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-deep transition hover:bg-palm-soft"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[44px] items-center justify-center border border-chalk/30 px-6 text-xs font-semibold uppercase tracking-[0.14em] text-chalk transition hover:border-palm hover:text-palm"
            >
              Services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-12">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-xl text-ink">What happens next</h2>
          <ol className="mt-6 divide-y divide-border border-y border-border">
            {[
              "We review the brief and match a Nigeria country expert.",
              "You receive proposed scope, timeline, and Legal Aid rates if relevant.",
              "Confirm LAA prior authority before work starts on funded cases.",
            ].map((step, i) => (
              <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 text-sm text-mute">
                <span className="font-mono text-xs text-palm">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <Link
            href="/how-to-instruct"
            className="mt-6 inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.16em] text-palm hover:text-indigo"
          >
            How to instruct →
          </Link>
        </div>
      </section>
    </>
  );
}
