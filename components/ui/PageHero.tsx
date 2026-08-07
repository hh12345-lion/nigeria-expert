import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-indigo-deep text-chalk">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-18deg, transparent, transparent 14px, rgba(255,255,255,0.07) 14px, rgba(255,255,255,0.07) 15px)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 bg-palm/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl min-w-0 px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-palm">Nigeria · Country evidence</p>
        <h1 className="font-display max-w-4xl break-words text-3xl font-medium tracking-tight text-chalk min-[375px]:text-4xl sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-chalk/70 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
