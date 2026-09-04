import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";
import { SITE_SCOPE } from "@/lib/constants";
import { asylumProfiles } from "@/data/asylum-profiles";
import { services } from "@/data/services";

const featured = asylumProfiles.slice(0, 6);

export const metadata = createMetadata({
  title: "Nigeria Expert Witness UK | Tribunal Country Reports",
  description:
    "UK-only Nigeria expert witness service for immigration solicitors. Country condition reports for FTT and Upper Tribunal: LGBTQ+, IPOB, FGM, Boko Haram, and trafficking.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      <section className="lg:grid lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)]">
        <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-12 lg:py-16 xl:px-16">
          <p className="text-sm text-clay">UK immigration &amp; asylum tribunals</p>
          <h1 className="font-display mt-3 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Nigeria country reports for FTT and Upper Tribunal appeals
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-mute">
            Independent expert evidence on SSMPA, IPOB, Boko Haram, FGM, trafficking, and protection
            failures the CPIN does not resolve on the appellant’s facts.
          </p>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <dt className="text-xs text-mute">Turnaround</dt>
              <dd className="font-display mt-1 text-xl font-semibold text-ink">2–3 weeks</dd>
            </div>
            <div>
              <dt className="text-xs text-mute">Urgent</dt>
              <dd className="font-display mt-1 text-xl font-semibold text-ink">5 days</dd>
            </div>
            <div>
              <dt className="text-xs text-mute">Funding</dt>
              <dd className="font-display mt-1 text-xl font-semibold text-ink">Legal Aid</dd>
            </div>
          </dl>
        </div>

        <div id="enquire" className="scroll-mt-24 bg-stone">
          <div className="relative h-40 sm:h-48 lg:h-44">
            <Image
              src="/images/laterite-hibiscus.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </div>
          <div className="px-4 py-8 sm:px-8 lg:px-10 lg:py-10">
            <h2 className="font-display text-2xl font-semibold text-ink">Request a report</h2>
            <p className="mt-2 text-sm text-mute">Five fields. We reply within one business day.</p>
            <div className="mt-6">
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border px-4 py-6 sm:px-6 lg:px-12">
        <p className="mx-auto max-w-6xl text-sm leading-relaxed text-mute">{SITE_SCOPE}</p>
      </section>

      <section id="profiles" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-clay">Asylum profiles</p>
            <h2 className="font-display mt-1 text-3xl font-semibold text-ink sm:text-4xl">
              What the tribunal actually needs
            </h2>
          </div>
          <Link href="/asylum-profiles" className="shrink-0 text-sm text-hibiscus hover:underline">
            All profiles
          </Link>
        </div>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2">
          {featured.map((p) => (
            <li key={p.slug}>
              <Link href={`/asylum-profiles/${p.slug}`} className="group block">
                <h3 className="font-display text-xl font-semibold text-ink group-hover:text-hibiscus">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{p.metaDescription}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-stone py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm text-clay">Why this evidence</p>
            <h2 className="font-display mt-1 text-3xl font-semibold text-ink sm:text-4xl">
              Refusals turn on profile, not nationality
            </h2>
          </div>
          <div className="space-y-5 text-mute leading-relaxed">
            <p>
              Nigeria remains among the highest-volume asylum nationalities in the UK. Home Office
              decisions often lean on generic CPIN positions that miss SSMPA criminalisation, IPOB
              diaspora activity, North-East conflict exposure, FGM risk by ethnicity and locality, or
              trafficking with juju coercion.
            </p>
            <p>
              Reports are drafted for Immigration Tribunal Practice Direction paragraph 10 and the
              Adam Pipe October 2025 expert evidence guide. Current CPINs cited include April 2026
              IPOB, June 2025 SOGIESC, August 2024 actors of protection, and EUAA Country Guidance
              Nigeria 2026 — applied to the appellant’s facts.
            </p>
            <Link href="/cpin-country-guidance" className="inline-flex min-h-[44px] items-center text-hibiscus hover:underline">
              Nigeria CPIN index 2025–26
            </Link>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm text-clay">How it works</p>
        <h2 className="font-display mt-1 text-3xl font-semibold text-ink sm:text-4xl">Three steps</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Send the case note",
              body: "Name, firm, email, deadline, and the profile the report must address.",
            },
            {
              title: "Confirm scope",
              body: "We reply within one business day with availability, timeline, and Legal Aid rates where relevant.",
            },
            {
              title: "Receive the report",
              body: "Practice Direction compliant evidence for FTT or Upper Tribunal, typically in 2–3 weeks.",
            },
          ].map((step) => (
            <div key={step.title}>
              <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{step.body}</p>
            </div>
          ))}
        </div>
        <Link
          href="/how-to-instruct"
          className="mt-8 inline-flex min-h-[44px] items-center text-sm text-hibiscus hover:underline"
        >
          Full referral process
        </Link>
      </section>

      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-clay">Reports</p>
          <h2 className="font-display mt-1 text-3xl font-semibold text-ink">What we deliver</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/services/${s.id}`}
                  className="inline-flex min-h-[44px] items-center border border-border bg-paper px-4 py-2 text-sm text-ink transition hover:border-hibiscus hover:text-hibiscus"
                >
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
