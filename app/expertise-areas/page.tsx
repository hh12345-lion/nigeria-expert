import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { expertiseAreas } from "@/data/expertise-areas";
export const metadata = createMetadata({ title: "Africa Expert Witness Expertise Areas | Asylum, LGBTQI+, Mining & More", description: "Africa expert witness expertise: political persecution, LGBTQI+ asylum, trafficking, mining arbitration, African law, FGM, nationality disputes, and country conditions.", path: "/expertise-areas" });
export default function ExpertiseHubPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Expertise Areas" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
    <PageShell title="Africa Expert Witness Expertise Areas" breadcrumbs={crumbs}>
      <CardGrid items={expertiseAreas.map((e) => ({ title: e.title, description: e.metaDescription.slice(0, 140), href: `/expertise-areas/${e.slug}` }))} />
    </PageShell>
    </>
  );
}
