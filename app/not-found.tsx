import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <p className="text-sm text-clay">Missing page</p>
      <p className="font-display mt-2 text-7xl font-semibold text-hibiscus sm:text-8xl" aria-hidden>
        404
      </p>
      <h1 className="font-display mt-2 text-3xl font-semibold text-ink sm:text-4xl">This page is not here</h1>
      <p className="mt-4 max-w-lg text-mute">
        It may have moved. Use the links below or request a report if you need an expert.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center justify-center bg-hibiscus px-6 text-sm font-medium text-paper transition hover:bg-hibiscus-soft"
        >
          Home
        </Link>
        <Link
          href="/#enquire"
          className="inline-flex min-h-[44px] items-center justify-center border border-border px-6 text-sm text-ink transition hover:border-hibiscus hover:text-hibiscus"
        >
          Request a report
        </Link>
      </div>
    </section>
  );
}
