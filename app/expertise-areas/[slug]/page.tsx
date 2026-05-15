import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { GeoTable } from "@/components/ui/GeoTable";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { expertiseAreas, getExpertiseArea } from "@/data/expertise-areas";
import { lgbtqiCriminalisationTable, fgmPrevalenceTable } from "@/data/geo-tables";
import type { RelatedLink } from "@/data/related-links";

export function generateStaticParams() {
  return expertiseAreas.map((e) => ({ slug: e.slug }));
}

const expertiseLinks: Record<string, RelatedLink[]> = {
  "lgbtqi-asylum-africa": [
    { label: "Uganda expert witness", href: "/countries/uganda" },
    { label: "Nigeria expert witness", href: "/countries/nigeria" },
    { label: "Ghana expert witness", href: "/countries/ghana" },
    { label: "Kenya expert witness", href: "/countries/kenya" },
    { label: "LGBTQI+ asylum evidence guide", href: "/guides/lgbtqi-africa-asylum-evidence" },
    { label: "LGBTQI+ asylum cases", href: "/case-types/lgbtqi-asylum-africa-cases" },
    { label: "Instruct an expert", href: "/contact" },
  ],
  "fgm-gender-based-violence": [
    { label: "Guinea expert witness", href: "/countries/guinea" },
    { label: "Nigeria expert witness", href: "/countries/nigeria" },
    { label: "Somalia expert witness", href: "/countries/somalia" },
    { label: "West Africa region", href: "/regions/west-africa" },
    { label: "FGM expert evidence guide", href: "/guides/fgm-expert-evidence-africa" },
    { label: "FGM asylum cases", href: "/case-types/fgm-asylum-cases" },
    { label: "Instruct an expert", href: "/contact" },
  ],
  "investment-treaty-arbitration-africa": [
    { label: "Guinea expert witness", href: "/countries/guinea" },
    { label: "DRC expert witness", href: "/countries/democratic-republic-of-congo" },
    { label: "West Africa region", href: "/regions/west-africa" },
    { label: "West Africa mining arbitration guide", href: "/guides/west-africa-mining-arbitration" },
    { label: "ICSID arbitration cases", href: "/case-types/investment-treaty-icsid-arbitration" },
    { label: "Instruct an expert", href: "/contact" },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getExpertiseArea(slug);
  if (!e) return {};
  return createMetadata({ title: e.metaTitle, description: e.metaDescription, path: `/expertise-areas/${slug}` });
}

export default async function ExpertisePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getExpertiseArea(slug);
  if (!area) notFound();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Expertise Areas", href: "/expertise-areas" }, { label: area.title }];
  const links =
    expertiseLinks[slug] ??
    [
      { label: "All countries", href: "/countries" },
      { label: "How to instruct", href: "/how-to-instruct" },
      { label: "Instruct an expert", href: "/contact" },
    ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={area.faqs ?? []} />
      <PageShell title={area.h1} breadcrumbs={crumbs}>
        {area.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#374151] leading-relaxed">
            {p}
          </p>
        ))}
        {slug === "lgbtqi-asylum-africa" && <GeoTable table={lgbtqiCriminalisationTable} />}
        {slug === "fgm-gender-based-violence" && <GeoTable table={fgmPrevalenceTable} />}
        {area.keyPoints && (
          <ul className="my-6 list-disc space-y-2 pl-6 text-[#374151]">
            {area.keyPoints.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        )}
        <FAQSection faqs={area.faqs ?? []} />
        {area.relatedSlugs && area.relatedSlugs.length > 0 && (
          <div className="mt-8">
            <h3 className="font-semibold text-[#0D3B2E]">Related case types</h3>
            <ul className="mt-2 space-y-1">
              {area.relatedSlugs.map((s) => (
                <li key={s}>
                  <Link href={`/case-types/${s}`} className="text-[#C8922A] hover:underline">
                    {s.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <RelatedLinks links={links} />
      </PageShell>
    </>
  );
}
