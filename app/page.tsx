import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { GeoTable } from "@/components/ui/GeoTable";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { homepageAsylumStats } from "@/data/geo-tables";
import { regions } from "@/data/regions";
import { countries } from "@/data/countries";
import { services } from "@/data/services";
import { expertiseAreas } from "@/data/expertise-areas";

const topCountries = ["nigeria", "somalia", "eritrea", "uganda", "zimbabwe", "democratic-republic-of-congo"] as const;

export default function HomePage() {
  const featuredCountries = countries.filter((c) => topCountries.includes(c.slug as (typeof topCountries)[number]));

  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />
      <section className="bg-[#0D3B2E] py-12 sm:py-16 md:py-24">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wide text-[#C8922A] sm:text-sm">UK Immigration & International Arbitration</p>
          <h1 className="mt-4 max-w-4xl break-words text-2xl font-bold text-white min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Africa Expert Witness UK — Country Reports, Asylum & Investment Arbitration
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            AfricaExpertWitness connects UK solicitors with qualified Africa expert witnesses for country condition
            reports, LGBTQI+ asylum, FGM evidence, and ICSID arbitration across 54 African nations.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white hover:bg-[#b07f22] sm:w-auto sm:px-8"
            >
              Contact Us
            </Link>
            <Link
              href="/what-is-an-africa-expert-witness"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] border-2 border-white px-6 py-3 text-center font-semibold text-white hover:bg-white/10 sm:w-auto sm:px-8"
            >
              What Is an Africa Expert Witness?
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9F7] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl md:text-3xl">Three Markets We Serve</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Asylum & Immigration",
                desc: "Country condition reports for UK tribunals across 54 African countries. Highest volume.",
                href: "/case-types/asylum-appeal-first-tier-tribunal",
              },
              {
                title: "Investment Treaty Arbitration",
                desc: "ICSID and UNCITRAL disputes in mining, oil, gas, and infrastructure. Highest value per case.",
                href: "/expertise-areas/investment-treaty-arbitration-africa",
              },
              {
                title: "LGBTQI+ Asylum",
                desc: "Specialist evidence for Uganda, Nigeria, Ghana, and 30+ criminalising states. Fast-growing niche.",
                href: "/expertise-areas/lgbtqi-asylum-africa",
              },
            ].map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="rounded-[8px] border border-[#D1E3D8] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)] hover:border-[#0D3B2E]"
              >
                <h3 className="font-semibold text-[#0D3B2E]">{m.title}</h3>
                <p className="mt-2 text-sm text-[#374151]">{m.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl">African Asylum Claims in UK Tribunals</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Country-specific expert evidence is essential where Home Office refusals rely on generic country policy.
            The table below summarises high-volume nationalities — each linked to a dedicated expert witness page.
          </p>
          <GeoTable table={homepageAsylumStats} />
        </div>
      </section>

      <section className="bg-[#F7F9F7] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl">Expert Witness Services</h2>
          <CardGrid items={services.map((s) => ({ title: s.title, description: s.description, href: `/services/${s.id}` }))} />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl">All Five Regions</h2>
          <CardGrid items={regions.map((r) => ({ title: r.title, description: r.countries, href: `/regions/${r.slug}` }))} />
        </div>
      </section>

      <section className="bg-[#F7F9F7] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl">Top Country Specialists</h2>
          <p className="mt-2 text-[#374151]">Nigeria, Somalia, Eritrea, Uganda, Zimbabwe, and DRC — highest UK search volume.</p>
          <div className="mt-8">
            <CardGrid
              items={featuredCountries.map((c) => ({
                title: `${c.name} Expert Witness`,
                description: c.metaDescription.slice(0, 100) + "...",
                href: `/countries/${c.slug}`,
              }))}
            />
          </div>
          <Link href="/countries" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
            View all 12 country pages
          </Link>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0D3B2E] sm:text-2xl">Expertise Areas</h2>
          <CardGrid
            items={expertiseAreas.map((e) => ({
              title: e.title,
              description: e.metaDescription.slice(0, 120),
              href: `/expertise-areas/${e.slug}`,
            }))}
          />
        </div>
      </section>

      <section className="border-t border-[#D1E3D8] bg-[#F7F9F7] py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/guides" className="min-h-[44px] font-semibold text-[#0D3B2E] hover:text-[#C8922A]">
            Solicitor Guides
          </Link>
          <Link href="/how-to-instruct" className="min-h-[44px] font-semibold text-[#0D3B2E] hover:text-[#C8922A]">
            How to Instruct
          </Link>
          <Link href="/qualifications" className="min-h-[44px] font-semibold text-[#0D3B2E] hover:text-[#C8922A]">
            Qualifications
          </Link>
          <Link href="/contact" className="min-h-[44px] font-semibold text-[#C8922A] hover:underline">
            Contact
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
