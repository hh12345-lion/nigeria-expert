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
    <section className="border-b border-border bg-stone">
      <div className="mx-auto max-w-6xl min-w-0 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <p className="mb-2 text-sm text-clay">Nigeria · Country evidence</p>
        <h1 className="font-display max-w-4xl break-words text-3xl font-semibold tracking-tight text-ink min-[375px]:text-4xl sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
