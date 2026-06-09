import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { asylumProfiles } from "@/data/asylum-profiles";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";

const featuredProfileSlugs = ["lgbtq-asylum-nigeria", "ipob-biafra", "fgm-gbv", "trafficking-juju"] as const;
const featuredProfiles = featuredProfileSlugs
  .map((slug) => asylumProfiles.find((p) => p.slug === slug))
  .filter(Boolean);

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />
      <section className="bg-[#0D3B2E] py-14 md:py-20">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wide text-[#C8922A] sm:text-sm">
            UK Immigration & Asylum Tribunals
          </p>
          <h1 className="mt-4 max-w-4xl break-words text-2xl font-bold text-white min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Nigeria Expert Witness UK: Country Reports for Asylum & Immigration Tribunals
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            NigeriaExpert connects UK immigration solicitors, law firms, and Legal Aid practitioners with qualified
            Nigeria country expert witnesses for asylum appeals, LGBTQ+ claims, IPOB/Biafra, Boko Haram, FGM,
            trafficking, and state protection analysis.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white hover:bg-[#b07f22] sm:w-auto sm:px-8"
            >
              Contact Us
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] border-2 border-white px-6 py-3 text-center font-semibold text-white hover:bg-white/10 sm:w-auto sm:px-8"
            >
              How to Instruct
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9F7] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl md:text-3xl">Why Nigeria Expert Evidence Matters</h2>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            Nigeria is one of the highest-volume asylum claim nationalities in the UK. Home Office refusals often rely
            on generic CPIN positions that do not reflect the appellant&apos;s specific profile. Independent expert
            evidence is essential for LGBTQ+ persecution under SSMPA, IPOB separatist claims, Boko Haram risk,
            FGM, trafficking with juju rituals, and political persecution.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "CPR Part 35 Compliant",
                desc: "Reports comply with Immigration Tribunal Practice Direction paragraph 10 and the Adam Pipe October 2025 guide.",
              },
              {
                title: "Current CPIN Knowledge",
                desc: "Experts cite April 2026 IPOB CPIN, June 2025 SOGIESC CPIN, EUAA 2026 guidance, and August 2024 actors of protection CPIN.",
              },
              {
                title: "Legal Aid Compatible",
                desc: "LAA prior authority rates available for all major Nigerian asylum profiles in FTT and Upper Tribunal proceedings.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[8px] border border-[#D1E3D8] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="font-semibold text-[#0D3B2E]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#374151]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl">Key Nigerian Asylum Profiles</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Expert witness pages for the four highest-volume Nigerian asylum profiles in UK tribunals.
          </p>
          <div className="mt-8">
            <CardGrid
              items={featuredProfiles.map((p) => ({
                title: p!.title,
                description: p!.metaDescription.slice(0, 120) + "...",
                href: `/asylum-profiles/${p!.slug}`,
              }))}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/asylum-profiles" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              View all asylum profiles
            </Link>
            <Link href="/cpin-country-guidance" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              Nigeria CPIN & Country Guidance
            </Link>
            <Link href="/guides" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              Solicitor guides
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9F7] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl">All Nigerian Asylum Profiles</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Dedicated expert witness pages for each major Nigerian asylum profile, targeting specific long-tail queries
            for UK immigration solicitors.
          </p>
          <div className="mt-8">
            <CardGrid
              items={asylumProfiles.map((p) => ({
                title: p.title,
                description: p.metaDescription.slice(0, 120) + "...",
                href: `/asylum-profiles/${p.slug}`,
              }))}
            />
          </div>
          <Link href="/asylum-profiles" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
            View all asylum profiles
          </Link>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl">Expert Witness Services</h2>
          <CardGrid
            items={services.map((s) => ({
              title: s.title,
              description: s.description,
              href: `/services/${s.id}`,
            }))}
          />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl">Case Types</h2>
          <CardGrid
            items={caseTypes.slice(0, 6).map((c) => ({
              title: c.title,
              description: c.metaDescription.slice(0, 100) + "...",
              href: `/case-types/${c.slug}`,
            }))}
          />
          <Link href="/case-types" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
            View all case types
          </Link>
        </div>
      </section>

      <section className="bg-[#F7F9F7] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl">CPIN & Country Guidance</h2>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            Stay current with the latest Home Office CPINs and EUAA Country Guidance Nigeria 2026. Our pillar guide
            summarises all current Nigeria country guidance for UK asylum practitioners, with expert analysis beyond
            the CPIN.
          </p>
          <Link
            href="/cpin-country-guidance"
            className="mt-6 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#0D3B2E] px-6 py-3 font-semibold text-white hover:bg-[#0a2f24]"
          >
            Nigeria CPIN & Country Guidance 2025-2026
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
