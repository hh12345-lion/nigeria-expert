import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { SITE_SCOPE } from "@/lib/constants";
import { asylumProfiles } from "@/data/asylum-profiles";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";

const featuredProfileSlugs = ["lgbtq-asylum-nigeria", "ipob-biafra", "fgm-gbv", "trafficking-juju"] as const;
const featuredProfiles = featuredProfileSlugs
  .map((slug) => asylumProfiles.find((p) => p.slug === slug))
  .filter(Boolean);

const evidencePoints = [
  {
    code: "01",
    title: "CPR Part 35 & Practice Direction 10",
    body: "Reports are drafted for Immigration Tribunal Practice Direction paragraph 10 and the Adam Pipe October 2025 expert evidence guide—duty to the tribunal first, not the instructing party.",
  },
  {
    code: "02",
    title: "Current Nigeria CPINs cited",
    body: "April 2026 IPOB CPIN, June 2025 SOGIESC CPIN, August 2024 actors of protection CPIN, and EUAA Country Guidance Nigeria 2026—applied to the appellant’s facts, not copy-pasted.",
  },
  {
    code: "03",
    title: "Legal Aid instruction ready",
    body: "LAA prior authority rates available across major Nigerian asylum profiles for First-tier and Upper Tribunal work in England, Wales, Scotland, and Northern Ireland.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Hero — brand first, full-bleed image plane */}
      <section className="relative min-h-[min(92vh,820px)] overflow-hidden bg-indigo-deep text-chalk">
        <Image
          src="/images/hero-adire.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-deep via-indigo-deep/88 to-indigo-deep/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-deep via-transparent to-indigo-deep/30" />

        <div className="relative mx-auto flex min-h-[min(92vh,820px)] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <p className="animate-rise font-mono text-[11px] uppercase tracking-[0.28em] text-palm">
            UK immigration &amp; asylum tribunals
          </p>
          <h1 className="animate-rise-delay font-display mt-4 max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight text-chalk min-[375px]:text-6xl sm:text-7xl lg:text-8xl">
            NigeriaExpert
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-chalk/80 sm:text-lg">
            Country expert evidence for Nigerian asylum appeals—SSMPA, IPOB, Boko Haram, FGM, trafficking, and
            protection failures the CPIN does not resolve on its own.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center bg-palm px-7 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-deep transition hover:bg-palm-soft"
            >
              Send brief
            </Link>
            <Link
              href="/cpin-country-guidance"
              className="inline-flex min-h-[48px] items-center justify-center border border-chalk/35 px-7 text-xs font-semibold uppercase tracking-[0.16em] text-chalk transition hover:border-palm hover:text-palm"
            >
              CPIN index 2025–26
            </Link>
          </div>
        </div>
      </section>

      {/* Docket strip — primary navigation of value */}
      <section className="border-b border-border bg-chalk">
        <div className="mx-auto grid max-w-7xl divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {featuredProfiles.map((p, i) => (
            <Link
              key={p!.slug}
              href={`/asylum-profiles/${p!.slug}`}
              className="group flex min-h-[44px] flex-col gap-2 px-5 py-6 transition hover:bg-haze/80 sm:px-6"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-palm">
                PROFILE {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg leading-snug text-ink group-hover:text-indigo">
                {p!.title}
              </span>
              <span className="text-sm text-mute line-clamp-2">{p!.metaDescription}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why evidence matters — asymmetric rail */}
      <section className="adire-wash py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-palm">Why instruct</p>
            <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Nigeria refusals turn on profile, not nationality alone
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-mute sm:text-base">
              Nigeria remains among the highest-volume asylum nationalities in the UK. Home Office decisions often
              lean on generic CPIN positions that miss the appellant’s sexuality under SSMPA, IPOB diaspora footprint,
              North-East conflict exposure, FGM risk by ethnicity and locality, or trafficking with juju coercion.
              Independent country evidence closes that gap for the tribunal.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-mute">{SITE_SCOPE}</p>
          </div>
          <ol className="divide-y divide-border border-y border-border bg-chalk/70">
            {evidencePoints.map((item) => (
              <li key={item.code} className="grid grid-cols-[3rem_1fr] gap-4 px-4 py-6 sm:px-6">
                <span className="font-mono text-xs text-palm">{item.code}</span>
                <div>
                  <h3 className="font-display text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Lagos image band + CPIN callout */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[280px] sm:min-h-[360px]">
          <Image
            src="/images/lagos-harbour.jpg"
            alt="Lagos Island waterfront at blue hour"
            fill
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-indigo-deep/70" />
          <div className="relative mx-auto flex min-h-[280px] max-w-7xl flex-col justify-end px-4 py-12 sm:min-h-[360px] sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-palm">Country guidance</p>
            <h2 className="font-display mt-2 max-w-2xl text-3xl font-medium text-chalk sm:text-4xl">
              Nigeria CPIN &amp; EUAA guidance, read for practitioners
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-chalk/75 sm:text-base">
              A living index of current Home Office CPINs and EUAA Country Guidance Nigeria 2026—what each document
              says, where it understates risk, and how expert reports go beyond it.
            </p>
            <Link
              href="/cpin-country-guidance"
              className="mt-6 inline-flex min-h-[44px] w-fit items-center bg-palm px-5 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-deep transition hover:bg-palm-soft"
            >
              Open CPIN pillar
            </Link>
          </div>
        </div>
      </section>

      {/* Full profile index */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-palm">Asylum profiles</p>
              <h2 className="font-display mt-2 text-3xl font-medium text-ink sm:text-4xl">
                Every major Nigerian claim type
              </h2>
            </div>
            <Link
              href="/asylum-profiles"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-palm hover:text-indigo"
            >
              Full index →
            </Link>
          </div>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {asylumProfiles.map((p, index) => (
              <Link
                key={p.slug}
                href={`/asylum-profiles/${p.slug}`}
                className="group grid grid-cols-[2.5rem_1fr] gap-3 py-5 sm:grid-cols-[3rem_1fr_auto] sm:gap-6"
              >
                <span className="font-mono text-xs text-rule">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="font-display block text-lg text-ink group-hover:text-indigo sm:text-xl">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-sm text-mute line-clamp-2">{p.metaDescription}</span>
                </span>
                <span className="hidden items-center font-mono text-[10px] uppercase tracking-[0.16em] text-palm sm:flex">
                  Open →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services + case types split */}
      <section className="border-t border-border bg-haze/50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-palm">Services</p>
            <h2 className="font-display mt-2 text-2xl font-medium text-ink sm:text-3xl">What we deliver</h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {services.map((s, i) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.id}`}
                    className="flex min-h-[44px] items-start gap-3 py-4 text-ink transition hover:text-palm"
                  >
                    <span className="font-mono text-[10px] text-rule pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="font-display block text-base sm:text-lg">{s.title}</span>
                      <span className="mt-1 block text-sm text-mute">{s.description}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-palm">Case types</p>
            <h2 className="font-display mt-2 text-2xl font-medium text-ink sm:text-3xl">Procedural routes</h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {caseTypes.slice(0, 6).map((c, i) => (
                <li key={c.slug}>
                  <Link
                    href={`/case-types/${c.slug}`}
                    className="flex min-h-[44px] items-start gap-3 py-4 text-ink transition hover:text-palm"
                  >
                    <span className="font-mono text-[10px] text-rule pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="font-display block text-base sm:text-lg">{c.title}</span>
                      <span className="mt-1 block text-sm text-mute line-clamp-2">{c.metaDescription}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/case-types"
              className="mt-5 inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.16em] text-palm hover:text-indigo"
            >
              All case types →
            </Link>
          </div>
        </div>
      </section>

      {/* Practitioner tools */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-palm">For solicitors</p>
          <h2 className="font-display mt-2 text-3xl font-medium text-ink sm:text-4xl">Tools before you instruct</h2>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-3">
            {[
              {
                href: "/how-to-instruct",
                title: "How to instruct",
                body: "What to send, timelines, Legal Aid prior authority, and what slows a usable report.",
              },
              {
                href: "/qualifications",
                title: "Qualifications",
                body: "Tribunal-facing credentials, methodology, and how experts meet Practice Direction standards.",
              },
              {
                href: "/glossary",
                title: "Glossary",
                body: "SSMPA, IPOB, CPIN, HJ (Iran), Article 15(c), and other terms used in Nigerian appeals.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-chalk p-6 transition hover:bg-white sm:p-8"
              >
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.body}</p>
                <span className="mt-5 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-palm">
                  Read →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
