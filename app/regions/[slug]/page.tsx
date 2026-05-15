import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { regions, getRegion } from "@/data/regions";
import { getRegionRelatedLinks } from "@/data/related-links";

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getRegion(slug);
  if (!r) return {};
  return createMetadata({ title: r.metaTitle, description: r.metaDescription, path: `/regions/${slug}` });
}

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Regions", href: "/regions" }, { label: region.title }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={region.faqs} />
      <PageShell title={region.h1} subtitle={`Expert witnesses covering ${region.countries}.`} breadcrumbs={crumbs}>
        <p className="mb-6 text-[#374151] leading-relaxed">
          {region.title} expert witnesses provide country conditions reports and testimony for UK solicitors handling
          asylum, immigration, and investment disputes across {region.countries}.
        </p>
        {region.overview.map((p, i) => (
          <p key={i} className="mb-4 text-[#374151] leading-relaxed">
            {p}
          </p>
        ))}
        <h2 className="mt-10 text-xl font-bold text-[#0D3B2E]">Key Issues</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
          {region.keyIssues.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
        {region.countryGuidance && (
          <p className="mt-6 rounded-[8px] border border-[#D1E3D8] bg-[#F7F9F7] p-4 text-sm">
            <strong>Country guidance:</strong> {region.countryGuidance}
          </p>
        )}
        <FAQSection faqs={region.faqs} />
        <RelatedLinks links={getRegionRelatedLinks(slug)} />
      </PageShell>
    </>
  );
}
