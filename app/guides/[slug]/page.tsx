import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { GeoTable } from "@/components/ui/GeoTable";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { guides, getGuide } from "@/data/guides";
import { mojFrameworkTable, westAfricaIcsidTable, cpinRebuttalSteps } from "@/data/geo-tables";
import type { RelatedLink } from "@/data/related-links";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

const guideLinks: Record<string, RelatedLink[]> = {
  "somalia-country-guidance-moj": [
    { label: "Somalia expert witness", href: "/countries/somalia" },
    { label: "Horn of Africa region", href: "/regions/horn-of-africa" },
    { label: "MOJ glossary term", href: "/glossary#moj-ors-somalia-cg-2014" },
    { label: "Asylum appeal (FTT)", href: "/case-types/asylum-appeal-first-tier-tribunal" },
    { label: "All solicitor guides", href: "/guides" },
    { label: "How to instruct", href: "/how-to-instruct" },
    { label: "Instruct an expert", href: "/contact" },
  ],
  "lgbtqi-africa-asylum-evidence": [
    { label: "LGBTQI+ expertise", href: "/expertise-areas/lgbtqi-asylum-africa" },
    { label: "Uganda expert witness", href: "/countries/uganda" },
    { label: "Nigeria expert witness", href: "/countries/nigeria" },
    { label: "LGBTQI+ asylum cases", href: "/case-types/lgbtqi-asylum-africa-cases" },
    { label: "All solicitor guides", href: "/guides" },
    { label: "How to instruct", href: "/how-to-instruct" },
    { label: "Instruct an expert", href: "/contact" },
  ],
  "fgm-expert-evidence-africa": [
    { label: "FGM expertise", href: "/expertise-areas/fgm-gender-based-violence" },
    { label: "Guinea expert witness", href: "/countries/guinea" },
    { label: "West Africa region", href: "/regions/west-africa" },
    { label: "FGM asylum cases", href: "/case-types/fgm-asylum-cases" },
    { label: "All solicitor guides", href: "/guides" },
    { label: "How to instruct", href: "/how-to-instruct" },
    { label: "Instruct an expert", href: "/contact" },
  ],
  "west-africa-mining-arbitration": [
    { label: "Investment arbitration expertise", href: "/expertise-areas/investment-treaty-arbitration-africa" },
    { label: "Guinea expert witness", href: "/countries/guinea" },
    { label: "West Africa region", href: "/regions/west-africa" },
    { label: "ICSID arbitration cases", href: "/case-types/investment-treaty-icsid-arbitration" },
    { label: "All solicitor guides", href: "/guides" },
    { label: "How to instruct", href: "/how-to-instruct" },
    { label: "Instruct an expert", href: "/contact" },
  ],
  "home-office-cpin-africa-rebuttal": [
    { label: "Rebuttal reports service", href: "/services#rebuttal-sje" },
    { label: "Upper Tribunal country guidance", href: "/case-types/upper-tribunal-country-guidance" },
    { label: "CPIN glossary term", href: "/glossary#country-policy-information-note-cpin" },
    { label: "All solicitor guides", href: "/guides" },
    { label: "How to instruct", href: "/how-to-instruct" },
    { label: "Instruct an expert", href: "/contact" },
  ],
  "instructing-africa-experts-legal-aid": [
    { label: "Fees & Legal Aid rates", href: "/fees" },
    { label: "How to instruct", href: "/how-to-instruct" },
    { label: "Legal Aid glossary", href: "/glossary#legal-aid" },
    { label: "FAQ", href: "/faq" },
    { label: "All solicitor guides", href: "/guides" },
    { label: "Instruct an expert", href: "/contact" },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return createMetadata({ title: g.metaTitle, description: g.metaDescription, path: `/guides/${slug}` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const path = `/guides/${slug}`;
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: guide.h1 }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={articleSchema({
          headline: guide.h1,
          description: guide.metaDescription,
          path,
          aboutServiceId: guide.aboutServiceId,
        })}
      />
      <PageShell title={guide.h1} breadcrumbs={crumbs}>
        {guide.sections.map((s) => (
          <section key={s.heading} className="mb-10">
            <h2 className="text-xl font-bold text-[#0D3B2E]">{s.heading}</h2>
            {s.content.map((p, i) => (
              <p key={i} className="mt-4 text-[#374151] leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
        {slug === "somalia-country-guidance-moj" && <GeoTable table={mojFrameworkTable} />}
        {slug === "west-africa-mining-arbitration" && <GeoTable table={westAfricaIcsidTable} />}
        {slug === "home-office-cpin-africa-rebuttal" && (
          <ol className="my-8 list-decimal space-y-4 pl-6 text-[#374151]">
            {cpinRebuttalSteps.map((s) => (
              <li key={s.step}>
                <strong className="text-[#0D3B2E]">{s.title}.</strong> {s.description}
              </li>
            ))}
          </ol>
        )}
        <RelatedLinks links={guideLinks[slug] ?? [{ label: "Instruct an expert", href: "/contact" }]} />
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white"
        >
          Instruct an Expert
        </Link>
      </PageShell>
    </>
  );
}
