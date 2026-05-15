import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";
export const metadata = createMetadata({ title: "Case Types Requiring an Africa Expert Witness | UK Immigration & Arbitration Guide", description: "Which legal cases need an Africa expert witness? Asylum appeals, LGBTQI+ claims, trafficking, ICSID arbitration, and commercial disputes explained.", path: "/case-types" });
export default function CaseTypesHubPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
    <PageShell title="Case Types Requiring an Africa Expert Witness" breadcrumbs={crumbs}>
      <CardGrid items={caseTypes.map((c) => ({ title: c.title, description: c.metaDescription.slice(0, 140), href: `/case-types/${c.slug}` }))} />
    </PageShell>
    </>
  );
}
