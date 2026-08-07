import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-indigo-deep py-16 text-chalk md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-palm">Missing page</p>
        <p className="font-display mt-3 text-7xl font-medium text-palm sm:text-8xl" aria-hidden>
          404
        </p>
        <h1 className="mt-2 font-display text-3xl font-medium sm:text-4xl">This route is not in the index</h1>
        <p className="mt-4 max-w-lg text-chalk/70">
          The page may have moved. Use the links below or send a brief if you need an expert.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center justify-center bg-palm px-6 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-deep transition hover:bg-palm-soft"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center border border-chalk/30 px-6 text-xs font-semibold uppercase tracking-[0.14em] text-chalk transition hover:border-palm hover:text-palm"
          >
            Send brief
          </Link>
        </div>

        <nav
          className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-chalk/55"
          aria-label="Quick links"
        >
          <Link href="/asylum-profiles" className="inline-flex min-h-[44px] items-center hover:text-palm">
            Asylum profiles
          </Link>
          <Link href="/case-types" className="inline-flex min-h-[44px] items-center hover:text-palm">
            Case types
          </Link>
          <Link href="/cpin-country-guidance" className="inline-flex min-h-[44px] items-center hover:text-palm">
            CPIN guidance
          </Link>
          <Link href="/contact" className="inline-flex min-h-[44px] items-center hover:text-palm">
            Contact
          </Link>
        </nav>
      </div>
    </section>
  );
}
