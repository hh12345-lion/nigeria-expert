import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { countries, getCountry } from "@/data/countries";
import { getCountryRelatedLinks } from "@/data/related-links";

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCountry(slug);
  if (!c) return {};
  return createMetadata({ title: c.metaTitle, description: c.metaDescription, path: `/countries/${slug}` });
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) notFound();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Countries", href: "/countries" }, { label: country.name }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={country.faqs} />
      <PageShell
        title={country.h1}
        subtitle="Country-specific expert witness evidence for UK immigration tribunals and international arbitration."
        breadcrumbs={crumbs}
      >
        <p className="mb-6 text-[#374151] leading-relaxed">
          A <strong>{country.name} expert witness</strong> provides independent country conditions and specialist
          evidence for UK First-tier Tribunal appeals, Upper Tribunal country guidance cases, and investment
          arbitration where {country.name} is the country of origin or host state.
        </p>
        <h2 className="text-xl font-bold text-[#0D3B2E]">Overview</h2>
        {country.overview.map((p, i) => (
          <p key={i} className="mt-4 text-[#374151] leading-relaxed">
            {p}
          </p>
        ))}
        <h2 className="mt-10 text-xl font-bold text-[#0D3B2E]">Key Issues</h2>
        <ul className="mt-4 space-y-4">
          {country.keyIssues.map((k) => (
            <li key={k.title} className="rounded-[8px] border border-[#D1E3D8] p-4">
              <strong className="text-[#0D3B2E]">{k.title}:</strong>{" "}
              <span className="text-[#374151]">{k.description}</span>
            </li>
          ))}
        </ul>
        {country.countryGuidance && (
          <p className="mt-6 rounded-[8px] border border-[#D1E3D8] bg-[#F7F9F7] p-4">
            <strong>Country guidance:</strong> {country.countryGuidance}
          </p>
        )}
        {country.investmentContext && (
          <p className="mt-4 rounded-[8px] border border-[#D1E3D8] bg-[#F7F9F7] p-4">
            <strong>Investment arbitration:</strong> {country.investmentContext}
          </p>
        )}
        <FAQSection faqs={country.faqs} />
        <RelatedLinks links={getCountryRelatedLinks(slug)} />
      </PageShell>
    </>
  );
}
