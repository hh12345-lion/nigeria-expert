import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | NigeriaExpert",
  description: "Your report request has been received.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 md:py-24">
      <p className="text-sm text-clay">Received</p>
      <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Request received
      </h1>
      <p className="mt-4 text-lg text-mute">
        We will reply within one business day with availability, scope, and timeline.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center justify-center bg-hibiscus px-6 text-sm font-medium text-paper transition hover:bg-hibiscus-soft"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="inline-flex min-h-[44px] items-center justify-center border border-border px-6 text-sm text-ink transition hover:border-hibiscus hover:text-hibiscus"
        >
          Reports
        </Link>
      </div>
      <ol className="mt-12 space-y-4 text-sm text-mute">
        <li>We review the case note and match a Nigeria country expert.</li>
        <li>You receive proposed scope, timeline, and Legal Aid rates if relevant.</li>
        <li>Confirm LAA prior authority before work starts on funded cases.</li>
      </ol>
    </section>
  );
}
