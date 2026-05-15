import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";
export const metadata = createMetadata({ title: "Solicitor Guides: Africa Expert Witnesses | Asylum, Arbitration & Country Reports", description: "In-depth guides for UK solicitors on Africa expert witnesses — country guidance cases, LGBTQI+ asylum, ICSID arbitration, and Legal Aid instruction.", path: "/guides" });
export default function GuidesHubPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
    <PageShell title="Solicitor Guides: Africa Expert Witnesses" subtitle="In-depth guides for UK immigration and arbitration practitioners." breadcrumbs={crumbs}>
      <CardGrid items={guides.map((g) => ({ title: g.h1, description: g.metaDescription.slice(0, 140), href: `/guides/${g.slug}` }))} />
    </PageShell>
    </>
  );
}
